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
  name: "webapp",
  description: "Manage web apps",
  subcommands: [
    {
      name: "browse",
      description:
        "Open a web app in a browser. This is not supported in Azure Cloud Shell",
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
          name: ["--logs", "-l"],
          description:
            "Enable viewing the log stream immediately after launching the web app",
        },
        {
          name: ["--name", "-n"],
          description:
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      name: "create",
      description: "Create a web app",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Name of the new web app. Web app name can contain only allow alphanumeric characters and hyphens, it cannot start or end in a hyphen, and must be less than 64 characters",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--plan", "-p"],
          description:
            "Name or resource id of the app service plan. Use 'appservice plan create' to get one",
          args: { name: "plan" },
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
          name: "--acr-identity",
          description:
            "Accept system or user assigned identity which will be set for acr image pull. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity",
          args: { name: "acr-identity" },
        },
        {
          name: "--acr-use-identity",
          description:
            "Enable or disable pull image from acr use managed identity",
        },
        {
          name: "--assign-identity",
          description:
            "Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity. Check out help for more examples",
          args: { name: "assign-identity", isOptional: true, isVariadic: true },
        },
        {
          name: "--basic-auth",
          description:
            "Enable or disable basic auth for both SCM and FTP Basic Auth Publishing Credentials. Disabled by default for new apps. See https://aka.ms/app-service-basic-auth to learn more",
          args: { name: "basic-auth", suggestions: ["Disabled", "Enabled"] },
        },
        changeReference,
        {
          name: ["--container-image-name", "-c"],
          description:
            "The container custom image name and optionally the tag name (e.g., <registry-name>/<image-name>:<tag>). Note: if --container-registry-url is also provided, use <image-name>:<tag> without the registry name",
          args: { name: "container-image-name" },
        },
        {
          name: [
            "--docker-registry-server-password",
            "--container-registry-password",
            "-w",
          ],
          description:
            "The container registry server password. Required for private registries",
          args: { name: "docker-registry-server-password" },
        },
        {
          name: "--container-registry-url",
          description: "The container registry server url",
          args: { name: "container-registry-url" },
        },
        {
          name: [
            "--docker-registry-server-user",
            "--container-registry-user",
            "-s",
          ],
          description: "The container registry server username",
          args: { name: "docker-registry-server-user" },
        },
        {
          name: ["--deployment-container-image-name", "-i"],
          description:
            "Option '--deployment-container-image-name' has been deprecated and will be removed in a future release. Container image name from container registry, e.g. publisher/image-name:tag",
          args: { name: "deployment-container-image-name" },
        },
        {
          name: ["--deployment-local-git", "-l"],
          description: "Enable local git",
        },
        {
          name: ["--deployment-source-branch", "-b"],
          description: "The branch to deploy",
          args: { name: "deployment-source-branch" },
        },
        {
          name: ["--deployment-source-url", "-u"],
          description: "Git repository URL to link with manual integration",
          args: { name: "deployment-source-url" },
        },
        {
          name: "--domain-name-scope",
          description:
            "Specify the scope of uniqueness for the default hostname during resource creation",
          args: {
            name: "domain-name-scope",
            suggestions: [
              "NoReuse",
              "ResourceGroupReuse",
              "SubscriptionReuse",
              "TenantReuse",
            ],
          },
        },
        {
          name: ["--end-to-end-encryption-enabled", "-e"],
          description:
            "Enable or disable end-to-end encryption between the Front End and the Workers",
          args: {
            name: "end-to-end-encryption-enabled",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enriched-errors",
          description:
            "If true, Linux web app creation failures will show context-enriched diagnostics with error codes, suggested fixes, and Copilot prompts. This flag only applies to Linux apps",
          args: {
            name: "enriched-errors",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--https-only",
          description:
            "Redirect all traffic made to an app using HTTP to HTTPS",
          args: {
            name: "https-only",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--min-tls-cipher-suite",
          description:
            "The minimum TLS Cipher Suite required for requests, e.g., 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384'",
          args: { name: "min-tls-cipher-suite" },
        },
        {
          name: "--min-tls-version",
          description:
            "The minimum version of TLS required for SSL requests, e.g., '1.0', '1.1', '1.2'",
          args: { name: "min-tls-version" },
        },
        {
          name: "--multicontainer-config-file",
          description:
            "Linux only. Config file for multicontainer apps. (local or remote)",
          args: { name: "multicontainer-config-file" },
        },
        {
          name: "--multicontainer-config-type",
          description: "Linux only",
          args: {
            name: "multicontainer-config-type",
            suggestions: ["COMPOSE", "KUBE"],
          },
        },
        {
          name: "--public-network-access",
          description: "Enable or disable public access to the web app",
          args: {
            name: "public-network-access",
            suggestions: ["Disabled", "Enabled"],
          },
        },
        {
          name: "--role",
          description: "Role name or id the system assigned identity will have",
          args: { name: "role" },
        },
        {
          name: ["--runtime", "-r"],
          description:
            'Canonicalized web runtime in the format of Framework:Version, e.g. "PYTHON:3.14".Use az webapp list-runtimes for available list',
          args: { name: "runtime" },
        },
        {
          name: "--scope",
          description: "Scope that the system assigned identity can access",
          args: { name: "scope" },
        },
        {
          name: "--site-scoped-certs",
          description: "Enable or disable site-scoped certificates",
          args: {
            name: "site-scoped-certs",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--sitecontainers-app",
          description:
            "If true, a webapp which supports sitecontainers will be created",
          args: {
            name: "sitecontainers-app",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--startup-file",
          description:
            'Linux only. The web\'s startup command or script file. Required for FastAPI and other ASGI frameworks (auto-detection is not supported). Example command: "gunicorn --bind=0.0.0.0 --timeout 600 app:app". Example for FastAPI: "gunicorn -k uvicorn.workers.UvicornWorker app:app". Example script file: "startup.sh"',
          args: { name: "startup-file" },
        },
        {
          name: "--subnet",
          description:
            "Name or resource ID of the pre-existing subnet to have the webapp join. The --vnet is argument also needed if specifying subnet by name",
          args: { name: "subnet" },
        },
        {
          name: "--tags",
          description:
            "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags",
          args: { name: "tags", isOptional: true, isVariadic: true },
        },
        {
          name: "--vnet",
          description:
            "Name or resource ID of the regional virtual network. If there are multiple vnets of the same name across different resource groups, use vnet resource id to specify which vnet to use. If vnet name is used, by default, the vnet in the same resource group as the webapp will be used. Must be used with --subnet argument",
          args: { name: "vnet" },
        },
      ],
    },
    {
      name: "create-remote-connection",
      description:
        "Creates a remote connection using a tcp tunnel to your web app",
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
          name: ["--instance", "-i"],
          description: "Webapp instance to connect to. Defaults to none",
          args: { name: "instance" },
        },
        {
          name: ["--name", "-n"],
          description:
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
          args: { name: "name" },
        },
        {
          name: ["--port", "-p"],
          description:
            "Port for the remote connection. Default: Random available port",
          args: { name: "port" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout in seconds. Defaults to none",
          args: { name: "timeout" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a web app",
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
          name: "--keep-dns-registration",
          description:
            "Argument 'keep_dns_registration' has been deprecated and will be removed in version '3.0.0'. Keep DNS registration",
        },
        {
          name: "--keep-empty-plan",
          description: "Keep empty app service plan",
        },
        { name: "--keep-metrics", description: "Keep app metrics" },
        {
          name: ["--name", "-n"],
          description: "The name of the webapp",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      name: "deploy",
      description: "Deploys a provided artifact to Azure Web Apps",
      options: [
        acquirePolicyToken,
        {
          name: "--async",
          description:
            'If true, the artifact is deployed asynchronously. (The command will exit once the artifact is pushed to the web app.). Synchronous deployments are not yet supported when using "--src-url"',
          args: {
            name: "async",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        changeReference,
        {
          name: "--clean",
          description:
            "If true, cleans the target directory prior to deploying the file(s). Default value is determined based on artifact type",
          args: {
            name: "clean",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--deploymentTag", "--tag"],
          description:
            "Linux only. A friendly name used to identify the deployment",
          args: { name: "deploymentTag" },
        },
        {
          name: "--enable-kudu-warmup",
          description:
            "If true, kudu will be warmed up before performing deployment for a linux webapp",
          args: {
            name: "enable-kudu-warmup",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--enriched-errors",
          description:
            "If true, deployment failures will show context-enriched diagnostics with error codes, suggested fixes, and Copilot prompts. Enabled by default; use --enriched-errors false to disable",
          args: {
            name: "enriched-errors",
            suggestions: ["false", "true"],
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
          name: "--ignore-stack",
          description: "If true, any stack-specific defaults are ignored",
          args: {
            name: "ignore-stack",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the webapp to deploy to",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--restart",
          description:
            "If true, the web app will be restarted following the deployment. Set this to false if you are deploying multiple artifacts and do not want to restart the site on the earlier deployments",
          args: {
            name: "restart",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--show-secure-build",
          description:
            "Show a Secure Build summary and full-report link after a local deployment, including when --async true is used. For URL deployments, show the command to run after deployment completes. Supported only for Linux web apps. Secure Build analysis can add several minutes to a local deployment",
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
        },
        {
          name: "--src-path",
          description:
            'Path of the artifact to be deployed. Ex: "myapp.zip" or "/myworkspace/apps/myapp.war"',
          args: { name: "src-path" },
        },
        {
          name: "--src-url",
          description:
            'URL of the artifact. The webapp will pull the artifact from this URL. Ex: "http://mysite.com/files/myapp.war?key=123"',
          args: { name: "src-url" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: "--target-path",
          description:
            'Absolute path that the artifact should be deployed to. Defaults to "home/site/wwwroot/" Ex: "/home/site/deployments/tools/", "/home/site/scripts/startup-script.sh"',
          args: { name: "target-path" },
        },
        {
          name: "--timeout",
          description:
            'Timeout for the deployment operation in milliseconds. Ignored when using "--src-url" since synchronous deployments are not yet supported when using "--src-url"',
          args: { name: "timeout" },
        },
        {
          name: "--track-status",
          description:
            "If true, web app startup status during deployment will be tracked for linux web apps",
          args: {
            name: "track-status",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--type",
          description: "Used to override the type of artifact being deployed",
          args: {
            name: "type",
            suggestions: [
              "ear",
              "jar",
              "lib",
              "startup",
              "static",
              "war",
              "zip",
            ],
          },
        },
      ],
    },
    {
      name: "exec",
      description:
        "Open an interactive shell session or run a command in a Linux web app container",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the web app",
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
          name: "--command",
          description:
            '[Execute mode] A command to run directly in the container, without a shell. Quote the whole command (e.g. --command "python /home/site/app.py --port 8080"). Shell operators (>, |, &&, etc.) are not interpreted - use --shell-command for those. Mutually exclusive with --shell-command',
          args: { name: "command" },
        },
        {
          name: ["--working-directory", "--cwd"],
          description:
            "[Execute mode] Absolute working directory for command execution. Defaults to the container's working directory",
          args: { name: "working-directory" },
        },
        {
          name: ["--instance", "-i"],
          description:
            'Webapp instance(s) to target. Specify a comma-separated list of instance IDs (use "az webapp list-instances" to get IDs) or "all" for all instances. Defaults to a random instance. Specifying multiple instances (a comma-separated list or "all") is supported only in \'execute\' mode',
          args: { name: "instance" },
        },
        {
          name: "--mode",
          description:
            "Execution mode. 'shell' (default): Starts an interactive shell session with the main web app container. 'execute': Starts command execution and returns immediately without returning command output",
          args: { name: "mode", suggestions: ["execute", "shell"] },
        },
        {
          name: "--shell",
          description:
            "Absolute path of the shell to use (e.g. /bin/sh); defaults to /bin/bash. In 'shell' mode it is the interactive shell to launch; in 'execute' mode it is the shell used to run --shell-command",
          args: { name: "shell" },
        },
        {
          name: "--shell-command",
          description:
            '[Execute mode] A command line to run through a shell, so shell operators (|, &&, >, etc.) work (e.g. --shell-command "echo hi > /home/LogFiles/out.txt"). Runs as <shell> -c <command>; the shell defaults to /bin/bash and can be overridden with --shell. Mutually exclusive with --command',
          args: { name: "shell-command" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "Name of the web app slot. Default to the production slot if not specified",
          args: { name: "slot" },
        },
        {
          name: "--target",
          description:
            "Container to connect to in 'shell' mode. 'app' targets the main web app container; 'kudu' targets the Kudu (SCM) container. In 'execute' mode, only 'app' is supported",
          args: { name: "target", suggestions: ["app", "kudu"] },
        },
      ],
    },
    {
      name: "list",
      description: "List web apps",
      options: [
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--show-details",
          description:
            "Include detailed site configuration of listed web apps in output",
        },
      ],
    },
    {
      name: "list-instances",
      description: "List all scaled out instances of a web app or web app slot",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
          name: ["--slot", "-s"],
          description:
            "Name of the web app slot. Default to the productions slot if not specified",
          args: { name: "slot" },
        },
      ],
    },
    {
      name: "list-runtimes",
      description:
        "List available built-in stacks which can be used for web apps",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: ["--os-type", "--os"],
          description: "Limit the output to just windows or linux runtimes",
          args: { name: "os-type", suggestions: ["linux", "windows"] },
        },
        {
          name: "--runtime",
          description: "Limit the output to a specific runtime family",
          args: {
            name: "runtime",
            suggestions: ["dotnet", "java", "node", "php", "python"],
          },
        },
        {
          name: "--support",
          description: "Filter by support lifecycle status. Default: supported",
          args: {
            name: "support",
            suggestions: ["active", "all", "eol", "near", "supported"],
          },
        },
      ],
    },
    {
      name: "restart",
      description: "Restart a web app",
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
          description:
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      description: "Get the details of a web app",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids", isVariadic: true },
        },
        {
          name: ["--name", "-n"],
          description:
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      name: "ssh",
      description:
        "SSH command establishes a ssh session to the web container and developer would get a shell terminal remotely",
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
          name: ["--instance", "-i"],
          description: "Webapp instance to connect to. Defaults to none",
          args: { name: "instance" },
        },
        {
          name: ["--name", "-n"],
          description:
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
          args: { name: "name" },
        },
        {
          name: ["--port", "-p"],
          description:
            "Port for the remote connection. Default: Random available port",
          args: { name: "port" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout in seconds. Defaults to none",
          args: { name: "timeout" },
        },
      ],
    },
    {
      name: "start",
      description: "Start a web app",
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
          description:
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      name: "stop",
      description: "Stop a web app",
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
          description:
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      name: "up",
      description: "Deprecated command",
      options: [acquirePolicyToken, changeReference],
    },
    {
      name: "update",
      description: "Update an existing web app",
      options: [
        acquirePolicyToken,
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add", isVariadic: true },
        },
        {
          name: "--basic-auth",
          description: "Enable or disable basic auth",
          args: { name: "basic-auth", suggestions: ["Disabled", "Enabled"] },
        },
        changeReference,
        {
          name: "--client-affinity-enabled",
          description: "Enables sending session affinity cookies",
          args: {
            name: "client-affinity-enabled",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--end-to-end-encryption-enabled", "-e"],
          description:
            "Enable or disable end-to-end encryption between the Front End and the Workers",
          args: {
            name: "end-to-end-encryption-enabled",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--force-dns-registration",
          description:
            "Argument 'force_dns_registration' has been deprecated and will be removed in version '3.0.0'. If true, web app hostname is force registered with DNS",
          args: {
            name: "force-dns-registration",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
        },
        {
          name: "--https-only",
          description:
            "Redirect all traffic made to an app using HTTP to HTTPS",
          args: {
            name: "https-only",
            suggestions: ["false", "true"],
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
          name: ["--minimum-elastic-instance-count", "-i"],
          description:
            "Minimum number of instances. App must be in an elastic scale App Service Plan",
          args: { name: "minimum-elastic-instance-count" },
        },
        {
          name: ["--name", "-n"],
          description:
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
          args: { name: "name" },
        },
        {
          name: "--platform-release-channel",
          description:
            "Set the platform release channel for the web app. Possible values: Latest, Standard, Extended",
          args: {
            name: "platform-release-channel",
            suggestions: ["Extended", "Latest", "Standard"],
          },
        },
        {
          name: ["--prewarmed-instance-count", "-w"],
          description:
            "Number of preWarmed instances. App must be in an elastic scale App Service Plan",
          args: { name: "prewarmed-instance-count" },
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
          name: "--site-scoped-certs",
          description: "Enable or disable site-scoped certificates",
          args: {
            name: "site-scoped-certs",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--skip-custom-domain-verification",
          description:
            "Argument 'skip_custom_domain_verification' has been deprecated and will be removed in version '3.0.0'. If true, custom (non *.azurewebsites.net) domains associated with web app are not verified",
          args: {
            name: "skip-custom-domain-verification",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: "--skip-dns-registration",
          description:
            "Argument 'skip_dns_registration' has been deprecated and will be removed in version '3.0.0'. If true web app hostname is not registered with DNS on creation",
          args: {
            name: "skip-dns-registration",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: "--ttl-in-seconds",
          description:
            "Argument 'ttl_in_seconds' has been deprecated and will be removed in version '3.0.0'. Time to live in seconds for web app's default domain name",
          args: {
            name: "ttl-in-seconds",
            suggestions: ["false", "true"],
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "auth",
      description:
        'Manage webapp authentication and authorization. To use v2 auth commands, run "az extension add --name authV2" to add the authV2 CLI extension',
      subcommands: [
        {
          name: "show",
          description: "Show the authentification settings for the webapp",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          description: "Update the authentication settings for the webapp",
          options: [
            {
              name: "--aad-allowed-token-audiences",
              description: "One or more token audiences (comma-delimited)",
              args: { name: "aad-allowed-token-audiences", isVariadic: true },
            },
            {
              name: "--aad-client-id",
              description:
                "Application ID to integrate AAD organization account Sign-in into your web app",
              args: { name: "aad-client-id" },
            },
            {
              name: "--aad-client-secret",
              description: "AAD application secret",
              args: { name: "aad-client-secret" },
            },
            {
              name: [
                "--aad-client-secret-certificate-thumbprint",
                "--thumbprint",
              ],
              description:
                "Alternative to AAD Client Secret, thumbprint of a certificate used for signing purposes",
              args: { name: "aad-client-secret-certificate-thumbprint" },
            },
            {
              name: "--aad-token-issuer-url",
              description:
                'This url can be found in the JSON output returned from your active directory endpoint using your tenantID. The endpoint can be queried from az cloud show at "endpoints.activeDirectory". The tenantID can be found using az account show. Get the "issuer" from the JSON at <active directory endpoint>/<tenantId>/.well-known/openid-configuration',
              args: { name: "aad-token-issuer-url" },
            },
            acquirePolicyToken,
            {
              name: "--action",
              args: {
                name: "action",
                suggestions: [
                  "AllowAnonymous",
                  "LoginWithAzureActiveDirectory",
                  "LoginWithFacebook",
                  "LoginWithGoogle",
                  "LoginWithMicrosoftAccount",
                  "LoginWithTwitter",
                ],
              },
            },
            {
              name: "--allowed-external-redirect-urls",
              description: "One or more urls (space-delimited)",
              args: {
                name: "allowed-external-redirect-urls",
                isVariadic: true,
              },
            },
            changeReference,
            {
              name: "--enabled",
              args: {
                name: "enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--facebook-app-id",
              description:
                "Application ID to integrate Facebook Sign-in into your web app",
              args: { name: "facebook-app-id" },
            },
            {
              name: "--facebook-app-secret",
              description: "Facebook Application client secret",
              args: { name: "facebook-app-secret" },
            },
            {
              name: "--facebook-oauth-scopes",
              description:
                "One or more facebook authentication scopes (comma-delimited)",
              args: { name: "facebook-oauth-scopes", isVariadic: true },
            },
            {
              name: "--google-client-id",
              description:
                "Application ID to integrate Google Sign-in into your web app",
              args: { name: "google-client-id" },
            },
            {
              name: "--google-client-secret",
              description: "Google Application client secret",
              args: { name: "google-client-secret" },
            },
            {
              name: "--google-oauth-scopes",
              description:
                "One or more Google authentication scopes (space-delimited)",
              args: { name: "google-oauth-scopes", isVariadic: true },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: "--microsoft-account-client-id",
              description:
                "AAD V2 Application ID to integrate Microsoft account Sign-in into your web app",
              args: { name: "microsoft-account-client-id" },
            },
            {
              name: "--microsoft-account-client-secret",
              description: "AAD V2 Application client secret",
              args: { name: "microsoft-account-client-secret" },
            },
            {
              name: "--microsoft-account-oauth-scopes",
              description:
                "One or more Microsoft authentification scopes (comma-delimited)",
              args: {
                name: "microsoft-account-oauth-scopes",
                isVariadic: true,
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--runtime-version",
              description:
                "Runtime version of the Authentication/Authorization feature in use for the current app",
              args: { name: "runtime-version" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--token-refresh-extension-hours",
              description: "Hours, must be formattable into a float",
              args: { name: "token-refresh-extension-hours" },
            },
            {
              name: "--token-store",
              description: "Use App Service Token Store",
              args: {
                name: "token-store",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--twitter-consumer-key",
              description:
                "Application ID to integrate Twitter Sign-in into your web app",
              args: { name: "twitter-consumer-key" },
            },
            {
              name: "--twitter-consumer-secret",
              description: "Twitter Application client secret",
              args: { name: "twitter-consumer-secret" },
            },
          ],
        },
      ],
    },
    {
      name: "config",
      description: "Configure a web app",
      subcommands: [
        {
          name: "set",
          description: "Set a web app's configuration",
          options: [
            acquirePolicyToken,
            {
              name: "--acr-identity",
              description:
                "Accept system or user assigned identity which will be set for acr image pull. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity",
              args: { name: "acr-identity" },
            },
            {
              name: "--acr-use-identity",
              description:
                "Enable or disable pull image from acr use managed identity",
              args: {
                name: "acr-use-identity",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--always-on",
              description:
                "Ensure web app gets loaded all the time, rather unloaded after been idle. Recommended when you have continuous web jobs running",
              args: {
                name: "always-on",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--auto-heal-enabled",
              description: "Enable or disable auto heal",
              args: {
                name: "auto-heal-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            changeReference,
            {
              name: "--ftps-state",
              description:
                "Set the Ftps state value for an app. Default value is 'AllAllowed'",
              args: {
                name: "ftps-state",
                suggestions: ["AllAllowed", "Disabled", "FtpsOnly"],
              },
            },
            {
              name: "--generic-configurations",
              description:
                "Provide site configuration list in a format of either key=value pair or @<json_file>. PowerShell and Windows Command Prompt users should use a JSON file to provide these configurations to avoid compatibility issues with escape characters",
              args: { name: "generic-configurations", isVariadic: true },
            },
            {
              name: "--http20-enabled",
              description:
                "Configures a web site to allow clients to connect over http2.0",
              args: {
                name: "http20-enabled",
                suggestions: ["false", "true"],
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
              name: "--java-container",
              description: "The java container, e.g., Tomcat, Jetty",
              args: { name: "java-container" },
            },
            {
              name: "--java-container-version",
              description:
                "The version of the java container, e.g., '8.0.23' for Tomcat",
              args: { name: "java-container-version" },
            },
            {
              name: "--java-version",
              description:
                "The version used to run your web app if using Java, e.g., '1.7' for Java 7, '1.8' for Java 8",
              args: { name: "java-version" },
            },
            {
              name: "--linux-fx-version",
              description:
                'The runtime stack used for your linux-based webapp, e.g., "RUBY|2.5.5", "NODE|12LTS", "PHP|7.2", "DOTNETCORE|2.1". See https://aka.ms/linux-stacks for more info',
              args: { name: "linux-fx-version" },
            },
            {
              name: "--min-tls-cipher-suite",
              description:
                "The minimum TLS Cipher Suite required for requests, e.g., 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384'",
              args: { name: "min-tls-cipher-suite" },
            },
            {
              name: "--min-tls-version",
              description:
                "The minimum version of TLS required for SSL requests, e.g., '1.0', '1.1', '1.2'",
              args: { name: "min-tls-version" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: "--net-framework-version",
              description:
                "The version used to run your web app if using .NET Framework, e.g., 'v4.0' for .NET 4.6 and 'v3.0' for .NET 3.5",
              args: { name: "net-framework-version" },
            },
            {
              name: "--number-of-workers",
              description: "The number of workers to be allocated",
              args: { name: "number-of-workers" },
            },
            {
              name: "--php-version",
              description:
                "The version used to run your web app if using PHP, e.g., 5.5, 5.6, 7.0",
              args: { name: "php-version" },
            },
            {
              name: "--powershell-version",
              description:
                "The version used to run your function app if using PowerShell, e.g., 7.2",
              args: { name: "powershell-version" },
            },
            {
              name: "--prewarmed-instance-count",
              description: "Number of pre-warmed instances a function app has",
              args: { name: "prewarmed-instance-count" },
            },
            {
              name: "--python-version",
              description:
                "The version used to run your web app if using Python, e.g., 2.7, 3.4",
              args: { name: "python-version" },
            },
            {
              name: "--remote-debugging-enabled",
              description: "Enable or disable remote debugging",
              args: {
                name: "remote-debugging-enabled",
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
              name: "--runtime",
              description:
                'Canonicalized web runtime in the format of Framework:Version, e.g. "PHP:7.2".Use az webapp list-runtimes for available list',
              args: { name: "runtime" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
            {
              name: "--startup-file",
              description:
                "The startup file for linux hosted web apps, e.g. 'process.json' for Node.js web",
              args: { name: "startup-file" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--use-32bit-worker-process",
              description: "Use 32 bits worker process or not",
              args: {
                name: "use-32bit-worker-process",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--vnet-route-all-enabled",
              description:
                "Configure regional VNet integration to route all traffic to the VNet",
              args: {
                name: "vnet-route-all-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--web-sockets-enabled",
              description: "Enable or disable web sockets",
              args: {
                name: "web-sockets-enabled",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--windows-fx-version",
              description:
                "A docker image name used for your windows container web app, e.g., microsoft/nanoserver:ltsc2016",
              args: { name: "windows-fx-version" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of a web app's configuration",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          name: "access-restriction",
          description:
            "Methods that show, set, add, and remove access restrictions on a webapp",
          subcommands: [
            {
              name: "add",
              description: "Adds an Access Restriction to the webapp",
              options: [
                {
                  name: ["--priority", "-p"],
                  description: "Priority of the access restriction rule",
                  args: { name: "priority" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--action",
                  description: "Allow or deny access",
                  args: { name: "action", suggestions: ["Allow", "Deny"] },
                },
                changeReference,
                {
                  name: "--description",
                  description: "Description of the access restriction rule",
                  args: { name: "description" },
                },
                {
                  name: "--http-headers",
                  description:
                    "Space-separated http headers in a format of <name>=<value>",
                  args: { name: "http-headers", isVariadic: true },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--ignore-missing-endpoint", "-i"],
                  description:
                    "Create access restriction rule with checking if the subnet has Microsoft.Web service endpoint enabled",
                  args: {
                    name: "ignore-missing-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--ip-address",
                  description:
                    "IP address or CIDR range (optional comma separated list of up to 8 ranges)",
                  args: { name: "ip-address" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--rule-name", "-r"],
                  description: "Name of the access restriction rule to add",
                  args: { name: "rule-name" },
                },
                {
                  name: "--scm-site",
                  description:
                    "True if access restrictions is added for scm site",
                  args: {
                    name: "scm-site",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-tag",
                  description:
                    "Service Tag (optional comma separated list of up to 8 tags)",
                  args: { name: "service-tag" },
                },
                {
                  name: ["--skip-service-tag-validation", "-k"],
                  description: "Skip validating public service tags",
                  args: {
                    name: "skip-service-tag-validation",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--subnet",
                  description:
                    "Subnet name (requires vNet name) or subnet resource id",
                  args: { name: "subnet" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--vnet-name",
                  description: "VNet name",
                  args: { name: "vnet-name" },
                },
                {
                  name: "--vnet-resource-group",
                  description:
                    "Resource group of virtual network (default is web app resource group)",
                  args: { name: "vnet-resource-group" },
                },
              ],
            },
            {
              name: "remove",
              description: "Removes an Access Restriction from the webapp",
              options: [
                acquirePolicyToken,
                {
                  name: "--action",
                  description: "Allow or deny access",
                  args: { name: "action", suggestions: ["Allow", "Deny"] },
                },
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--ip-address",
                  description:
                    "IP address or CIDR range (optional comma separated list of up to 8 ranges)",
                  args: { name: "ip-address" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--rule-name", "-r"],
                  description: "Name of the access restriction to remove",
                  args: { name: "rule-name" },
                },
                {
                  name: "--scm-site",
                  description:
                    "True if access restriction should be removed from scm site",
                  args: {
                    name: "scm-site",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-tag",
                  description:
                    "Service Tag (optional comma separated list of up to 8 tags)",
                  args: { name: "service-tag" },
                },
                {
                  name: ["--skip-service-tag-validation", "-k"],
                  description: "Skip validating public service tags",
                  args: {
                    name: "skip-service-tag-validation",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--subnet",
                  description:
                    "Subnet name (requires vNet name) or subnet resource id",
                  args: { name: "subnet" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--vnet-name",
                  description: "VNet name",
                  args: { name: "vnet-name" },
                },
              ],
            },
            {
              name: "set",
              description:
                "Sets if SCM site is using the same restrictions as the main site and default actions",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--default-action",
                  description: "Configure default action for main site",
                  args: {
                    name: "default-action",
                    suggestions: ["Allow", "Deny"],
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scm-default-action",
                  description: "Configure default action for scm site",
                  args: {
                    name: "scm-default-action",
                    suggestions: ["Allow", "Deny"],
                  },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--use-same-restrictions-for-scm-site",
                  description: "Use same access restrictions for scm site",
                  args: {
                    name: "use-same-restrictions-for-scm-site",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
              ],
            },
            {
              name: "show",
              description: "Show Access Restriction settings for webapp",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
          name: "appsettings",
          description:
            "Configure web app settings. Updating or removing application settings will cause an app recycle",
          subcommands: [
            {
              name: "delete",
              description: "Delete web app settings",
              options: [
                {
                  name: "--setting-names",
                  description: "Space-separated appsettings names",
                  args: { name: "setting-names", isVariadic: true },
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
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              description: "Get the details of a web app's settings",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "set",
              description: "Set a web app's settings",
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
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--settings",
                  description:
                    "Space-separated appsettings in KEY=VALUE format. Use @{file} to load from a file. See https://go.microsoft.com/fwlink/?linkid=2219923 for more information on file format and editing app settings in bulk",
                  args: { name: "settings", isVariadic: true },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--slot-settings",
                  description:
                    "Space-separated appsettings in KEY=VALUE format. Use @{file} to load from a file. Given setting are added to the configuration and marked as Deployment slot setting by default",
                  args: { name: "slot-settings", isVariadic: true },
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
          name: "backup",
          description: "Manage backups for web apps",
          subcommands: [
            {
              name: "create",
              description: "Create a backup of a web app",
              options: [
                {
                  name: "--container-url",
                  description:
                    "URL with SAS token to the blob storage container",
                  args: { name: "container-url" },
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
                  name: ["--webapp-name", "-n"],
                  description: "The name of the web app",
                  args: { name: "webapp-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--backup-name",
                  description:
                    "Name of the backup. If unspecified, the backup will be named with the web app name and a timestamp",
                  args: { name: "backup-name" },
                },
                changeReference,
                {
                  name: "--db-connection-string",
                  description:
                    "Connection string for the database in the backup",
                  args: { name: "db-connection-string" },
                },
                {
                  name: "--db-name",
                  description: "Name of the database in the backup",
                  args: { name: "db-name" },
                },
                {
                  name: "--db-type",
                  description: "Type of database in the backup",
                  args: {
                    name: "db-type",
                    suggestions: [
                      "LocalMySql",
                      "MySql",
                      "PostgreSql",
                      "SqlAzure",
                    ],
                  },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a web app backup",
              options: [
                {
                  name: "--backup-id",
                  description: "Id of the backup",
                  args: { name: "backup-id" },
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
                  name: ["--webapp-name", "-n"],
                  description: "The name of the web app",
                  args: { name: "webapp-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--slot", "-s"],
                  description: "The name of the slot",
                  args: { name: "slot" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List backups of a web app",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--webapp-name", "-n"],
                  description: "The name of the web app",
                  args: { name: "webapp-name" },
                  isRequired: true,
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "restore",
              description: "Restore a web app from a backup",
              options: [
                {
                  name: "--backup-name",
                  description: "Name of the backup to restore",
                  args: { name: "backup-name" },
                  isRequired: true,
                },
                {
                  name: "--container-url",
                  description:
                    "URL with SAS token to the blob storage container",
                  args: { name: "container-url" },
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
                  name: ["--webapp-name", "-n"],
                  description: "The name of the web app",
                  args: { name: "webapp-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--db-connection-string",
                  description:
                    "Connection string for the database in the backup",
                  args: { name: "db-connection-string" },
                },
                {
                  name: "--db-name",
                  description: "Name of the database in the backup",
                  args: { name: "db-name" },
                },
                {
                  name: "--db-type",
                  description: "Type of database in the backup",
                  args: {
                    name: "db-type",
                    suggestions: [
                      "LocalMySql",
                      "MySql",
                      "PostgreSql",
                      "SqlAzure",
                    ],
                  },
                },
                {
                  name: "--ignore-hostname-conflict",
                  description: "Ignores custom hostnames stored in the backup",
                },
                {
                  name: "--overwrite",
                  description:
                    "Overwrite the source web app, if --target-name is not specified",
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--target-name",
                  description:
                    "The name to use for the restored web app. If unspecified, will default to the name that was used when the backup was created",
                  args: { name: "target-name" },
                },
              ],
            },
            {
              name: "show",
              description: "Show the backup schedule for a web app",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--webapp-name", "-n"],
                  description: "The name of the web app",
                  args: { name: "webapp-name" },
                  isRequired: true,
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "update",
              description: "Configure a new backup schedule for a web app",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--webapp-name", "-n"],
                  description: "The name of the web app",
                  args: { name: "webapp-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--backup-name",
                  description:
                    "Name of the backup. If unspecified, the backup will be named with the web app name and a timestamp",
                  args: { name: "backup-name" },
                },
                changeReference,
                {
                  name: "--container-url",
                  description:
                    "URL with SAS token to the blob storage container",
                  args: { name: "container-url" },
                },
                {
                  name: "--db-connection-string",
                  description:
                    "Connection string for the database in the backup",
                  args: { name: "db-connection-string" },
                },
                {
                  name: "--db-name",
                  description: "Name of the database in the backup",
                  args: { name: "db-name" },
                },
                {
                  name: "--db-type",
                  description: "Type of database in the backup",
                  args: {
                    name: "db-type",
                    suggestions: [
                      "LocalMySql",
                      "MySql",
                      "PostgreSql",
                      "SqlAzure",
                    ],
                  },
                },
                {
                  name: "--frequency",
                  description:
                    "How often to backup. Use a number followed by d or h, e.g. 5d = 5 days, 2h = 2 hours",
                  args: { name: "frequency" },
                },
                {
                  name: "--retain-one",
                  description:
                    "Always keep one backup, regardless of how old it is",
                  args: {
                    name: "retain-one",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--retention",
                  description:
                    "How many days to keep a backup before automatically deleting it. Set to 0 for indefinite retention",
                  args: { name: "retention" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
          ],
        },
        {
          name: "connection-string",
          description: "Manage a web app's connection strings",
          subcommands: [
            {
              name: "delete",
              description: "Delete a web app's connection strings",
              options: [
                {
                  name: "--setting-names",
                  description: "Space-separated connection-string names",
                  args: { name: "setting-names", isVariadic: true },
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
                  description:
                    "Name of the web app. You can configure the default using az configure --defaults web=<name>. If --ids is provided this should NOT be specified",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              description: "Get a web app's connection strings",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "set",
              description: "Update a web app's connection strings",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: ["--connection-string-type", "-t"],
                  description: "Connection string type",
                  args: {
                    name: "connection-string-type",
                    suggestions: [
                      "ApiHub",
                      "Custom",
                      "DocDb",
                      "EventHub",
                      "MySql",
                      "NotificationHub",
                      "PostgreSQL",
                      "RedisCache",
                      "SQLAzure",
                      "SQLServer",
                      "ServiceBus",
                    ],
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. You can configure the default using az configure --defaults web=<name>. If --ids is provided this should NOT be specified",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--settings",
                  description:
                    "Space-separated connection-string in a format of <name>=<value>",
                  args: { name: "settings", isVariadic: true },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--slot-settings",
                  description:
                    "Space-separated slot connection-string in a format of either <name>=<value> or @<json_file>",
                  args: { name: "slot-settings", isVariadic: true },
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
          name: "container",
          description: "Manage an existing web app's container settings",
          subcommands: [
            {
              name: "delete",
              description: "Delete an existing web app's container settings",
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
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "set",
              description: "Set an existing web app's container settings",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: [
                    "--docker-custom-image-name",
                    "--container-image-name",
                    "-c",
                    "-i",
                  ],
                  description:
                    "The container custom image name and optionally the tag name (e.g., <registry-name>/<image-name>:<tag>)",
                  args: { name: "docker-custom-image-name" },
                },
                {
                  name: [
                    "--docker-registry-server-password",
                    "--container-registry-password",
                    "-p",
                  ],
                  description: "The container registry server password",
                  args: { name: "docker-registry-server-password" },
                },
                {
                  name: [
                    "--docker-registry-server-url",
                    "--container-registry-url",
                    "-r",
                  ],
                  description: "The container registry server url",
                  args: { name: "docker-registry-server-url" },
                },
                {
                  name: [
                    "--docker-registry-server-user",
                    "--container-registry-user",
                    "-u",
                  ],
                  description: "The container registry server username",
                  args: { name: "docker-registry-server-user" },
                },
                {
                  name: ["--enable-app-service-storage", "-t"],
                  description:
                    "Enables platform storage (custom container only)",
                  args: {
                    name: "enable-app-service-storage",
                    suggestions: ["false", "true"],
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
                  name: "--multicontainer-config-file",
                  description: "Config file for multicontainer apps",
                  args: { name: "multicontainer-config-file" },
                },
                {
                  name: "--multicontainer-config-type",
                  description: "Config type",
                  args: {
                    name: "multicontainer-config-type",
                    suggestions: ["COMPOSE", "KUBE"],
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              description: "Get details of a web app's container settings",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--show-multicontainer-config",
                  description:
                    "Shows decoded config if a multicontainer config is set",
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
          name: "egress",
          description: "Manage virtualized backend connections for a web app",
          subcommands: [
            {
              name: "set",
              description:
                "Set the enabled state of a web app's egress configuration",
              options: [
                {
                  name: "--enabled",
                  description:
                    "Enable virtual connections with true or disable them with false",
                  args: {
                    name: "enabled",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
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
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              description: "Show the egress configuration for a web app",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "connection",
              description:
                "Manage named connections in a web app's egress configuration",
              subcommands: [
                {
                  name: "add",
                  description: "Add or replace a named egress connection",
                  options: [
                    {
                      name: "--auth",
                      description: "Backend authentication strategy",
                      args: {
                        name: "auth",
                        suggestions: ["Credential", "ManagedIdentity"],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--connection-name",
                      description:
                        "Name of the egress connection. Names are case-insensitive",
                      args: { name: "connection-name" },
                      isRequired: true,
                    },
                    {
                      name: "--protocol",
                      description: "Backend protocol",
                      args: {
                        name: "protocol",
                        suggestions: ["Http", "Postgres", "Redis", "Tds"],
                      },
                      isRequired: true,
                    },
                    acquirePolicyToken,
                    changeReference,
                    {
                      name: "--credential-format",
                      description:
                        'HTTP credential header format, for example "Bearer {value}". Requires --credential-header',
                      args: { name: "credential-format" },
                    },
                    {
                      name: "--credential-header",
                      description:
                        "HTTP header used to inject a standalone credential, for example Authorization",
                      args: { name: "credential-header" },
                    },
                    {
                      name: "--credential-setting",
                      description:
                        "Name of the setting containing the credential, not the credential value",
                      args: { name: "credential-setting" },
                    },
                    {
                      name: "--host-setting",
                      description:
                        "Name of the setting containing the backend host, not the host value",
                      args: { name: "host-setting" },
                    },
                    {
                      name: "--identity-resource-id",
                      description:
                        "Resource ID of a user-assigned identity already assigned to the app. By default, use the system-assigned identity",
                      args: { name: "identity-resource-id" },
                    },
                    {
                      name: "--identity-scope",
                      description:
                        "Scope used to acquire a managed identity token for the backend connection",
                      args: { name: "identity-scope" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: ["--slot", "-s"],
                      description:
                        "The name of the slot. Default to the productions slot if not specified",
                      args: { name: "slot" },
                    },
                    {
                      name: "--source",
                      description:
                        "Source of the referenced settings. Defaults to AppSettings",
                      args: {
                        name: "source",
                        suggestions: ["AppSettings", "ConnectionStrings"],
                      },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: "--username-setting",
                      description:
                        "Name of the setting containing the username, not the username value",
                      args: { name: "username-setting" },
                    },
                    {
                      name: "--value-setting",
                      description:
                        "Name of the setting containing the complete connection string or URL",
                      args: { name: "value-setting" },
                    },
                  ],
                },
                {
                  name: "remove",
                  description: "Remove a named egress connection",
                  options: [
                    {
                      name: "--connection-name",
                      description:
                        "Name of the egress connection. Names are case-insensitive",
                      args: { name: "connection-name" },
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
                      description:
                        "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: ["--slot", "-s"],
                      description:
                        "The name of the slot. Default to the productions slot if not specified",
                      args: { name: "slot" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: ["--yes", "-y"],
                      description:
                        "Do not prompt for confirmation when removing the last connection",
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Show a named egress connection",
                  options: [
                    {
                      name: "--connection-name",
                      description:
                        "Name of the egress connection. Names are case-insensitive",
                      args: { name: "connection-name" },
                      isRequired: true,
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids", isVariadic: true },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: ["--slot", "-s"],
                      description:
                        "The name of the slot. Default to the productions slot if not specified",
                      args: { name: "slot" },
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
        {
          name: "hostname",
          description: "Configure hostnames for a web app",
          subcommands: [
            {
              name: "add",
              description: "Bind a hostname to a web app",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--hostname",
                  description:
                    "Hostname assigned to the site, such as custom domains",
                  args: { name: "hostname" },
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--webapp-name",
                  description:
                    "Webapp name. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "webapp-name" },
                },
              ],
            },
            {
              name: "delete",
              description: "Unbind a hostname from a web app",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--hostname",
                  description:
                    "Hostname assigned to the site, such as custom domains",
                  args: { name: "hostname" },
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--webapp-name",
                  description:
                    "Webapp name. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "webapp-name" },
                },
              ],
            },
            {
              name: "get-external-ip",
              description: "Get the external-facing IP address for a web app",
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
                  name: "--webapp-name",
                  description:
                    "Webapp name. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "webapp-name" },
                },
              ],
            },
            {
              name: "list",
              description: "List all hostname bindings for a web app",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--webapp-name",
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "webapp-name" },
                  isRequired: true,
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
          ],
        },
        {
          name: "snapshot",
          description: "Manage web app snapshots",
          subcommands: [
            {
              name: "list",
              description: "List the restorable snapshots for a web app",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: ["--slot", "-s"],
                  description: "The name of the slot",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "restore",
              description: "Restore a web app snapshot",
              options: [
                {
                  name: "--time",
                  description: "Timestamp of the snapshot to restore",
                  args: { name: "time" },
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
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--restore-content-only",
                  description:
                    "Restore the web app files without restoring the settings",
                },
                {
                  name: ["--slot", "-s"],
                  description: "The name of the slot",
                  args: { name: "slot" },
                },
                {
                  name: "--source-name",
                  description: "Name of the web app to retrieve snapshot from",
                  args: { name: "source-name" },
                },
                {
                  name: "--source-resource-group",
                  description:
                    "Name of the resource group to retrieve snapshot from",
                  args: { name: "source-resource-group" },
                },
                {
                  name: "--source-slot",
                  description:
                    "Name of the web app slot to retrieve snapshot from",
                  args: { name: "source-slot" },
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
          name: "ssl",
          description: "Configure SSL certificates for web apps",
          subcommands: [
            {
              name: "bind",
              description: "Bind an SSL certificate to a web app",
              options: [
                {
                  name: "--certificate-thumbprint",
                  description: "The ssl cert thumbprint",
                  args: { name: "certificate-thumbprint" },
                  isRequired: true,
                },
                {
                  name: "--ssl-type",
                  description: "The ssl cert type",
                  args: { name: "ssl-type", suggestions: ["IP", "SNI"] },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--hostname",
                  description:
                    "The custom domain name. If empty, hostnames will be selected automatically",
                  args: { name: "hostname" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "create",
              description:
                "Create a Managed Certificate for a hostname in a webapp app",
              options: [
                {
                  name: "--hostname",
                  description: "The custom domain name",
                  args: { name: "hostname" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the web app",
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
                  name: "--certificate-name",
                  description: "The name of the certificate",
                  args: { name: "certificate-name" },
                },
                changeReference,
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an SSL certificate from a web app",
              options: [
                {
                  name: "--certificate-thumbprint",
                  description: "The ssl cert thumbprint",
                  args: { name: "certificate-thumbprint" },
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
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
              name: "import",
              description:
                "Import an SSL or App Service Certificate to a web app from Key Vault",
              options: [
                {
                  name: "--key-vault",
                  description: "The name or resource ID of the Key Vault",
                  args: { name: "key-vault" },
                  isRequired: true,
                },
                {
                  name: "--key-vault-certificate-name",
                  description: "The name of the certificate in Key Vault",
                  args: { name: "key-vault-certificate-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--certificate-name",
                  description: "The name of the certificate",
                  args: { name: "certificate-name" },
                },
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. This is used to set the location of the webspace for the certificate import. If not specified, the location of the resource group will be used. If you have apps in multiple regions/webspaces, you must specify the name of the app to set the location of the webspace for the certificate import",
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
              description: "List SSL certificates for a web app",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the details of an SSL certificate for a web app",
              options: [
                {
                  name: "--certificate-name",
                  description: "The name of the certificate",
                  args: { name: "certificate-name" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
              name: "unbind",
              description: "Unbind an SSL certificate from a web app",
              options: [
                {
                  name: "--certificate-thumbprint",
                  description: "The ssl cert thumbprint",
                  args: { name: "certificate-thumbprint" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--hostname",
                  description:
                    "The custom domain name. If empty, hostnames will be selected automatically",
                  args: { name: "hostname" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "upload",
              description: "Upload an SSL certificate to a web app",
              options: [
                {
                  name: "--certificate-file",
                  description: "The filepath for the .pfx file",
                  args: { name: "certificate-file" },
                  isRequired: true,
                },
                {
                  name: "--certificate-password",
                  description: "The ssl cert password",
                  args: { name: "certificate-password" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--certificate-name",
                  description: "The name of the certificate",
                  args: { name: "certificate-name" },
                },
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
          name: "storage-account",
          description:
            "Manage a web app's Azure storage account configurations",
          subcommands: [
            {
              name: "add",
              description:
                "Add an Azure storage account configuration to a web app",
              options: [
                {
                  name: ["--access-key", "-k"],
                  description: "Storage account access key",
                  args: { name: "access-key" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "Storage account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--custom-id", "-i"],
                  description:
                    "Name of the share configured within the web app",
                  args: { name: "custom-id" },
                  isRequired: true,
                },
                {
                  name: ["--share-name", "--sn"],
                  description:
                    "Name of the file share as given in the storage account",
                  args: { name: "share-name" },
                  isRequired: true,
                },
                {
                  name: ["--storage-type", "-t"],
                  description: "Storage type",
                  args: {
                    name: "storage-type",
                    suggestions: ["AzureBlob", "AzureFiles"],
                  },
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
                  name: ["--mount-path", "-m"],
                  description:
                    "The path which the web app uses to read-write data ex: /share1 or /share2",
                  args: { name: "mount-path" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--slot-setting",
                  description:
                    "With slot setting you can decide to make BYOS configuration sticky to a slot, meaning that when that slot is swapped, the storage account stays with that slot",
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
              name: "delete",
              description:
                "Delete a web app's Azure storage account configuration",
              options: [
                {
                  name: ["--custom-id", "-i"],
                  description:
                    "Name of the share configured within the web app",
                  args: { name: "custom-id" },
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
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
                "Get a web app's Azure storage account configurations",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an existing Azure storage account configuration on a web app",
              options: [
                {
                  name: ["--custom-id", "-i"],
                  description:
                    "Name of the share configured within the web app",
                  args: { name: "custom-id" },
                  isRequired: true,
                },
                {
                  name: ["--access-key", "-k"],
                  description: "Storage account access key",
                  args: { name: "access-key" },
                },
                {
                  name: ["--account-name", "-a"],
                  description: "Storage account name",
                  args: { name: "account-name" },
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
                  name: ["--mount-path", "-m"],
                  description:
                    "The path which the web app uses to read-write data ex: /share1 or /share2",
                  args: { name: "mount-path" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--share-name", "--sn"],
                  description:
                    "Name of the file share as given in the storage account",
                  args: { name: "share-name" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--slot-setting",
                  description:
                    "With slot setting you can decide to make BYOS configuration sticky to a slot, meaning that when that slot is swapped, the storage account stays with that slot",
                },
                {
                  name: ["--storage-type", "-t"],
                  description: "Storage type",
                  args: {
                    name: "storage-type",
                    suggestions: ["AzureBlob", "AzureFiles"],
                  },
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
    {
      name: "connection",
      description: "Commands to manage webapp connections",
      subcommands: [
        {
          name: "delete",
          description: "Delete a webapp connection",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--connection",
              description: "Name of the webapp connection",
              args: { name: "connection" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the webapp. Required if '--id' is not specified.None",
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
                "The resource group which contains the webapp. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--slot",
              description:
                "The name of the slot. Default to the production slot if not specified",
              args: { name: "slot" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List connections of a webapp",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the webapp. Required if '--source-id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--slot",
              description:
                "The name of the slot. Default to the production slot if not specified",
              args: { name: "slot" },
            },
            {
              name: "--source-id",
              description:
                "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
              args: { name: "source-id" },
            },
          ],
        },
        {
          name: "list-configuration",
          description: "List source configurations of a webapp connection",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--connection",
              description: "Name of the webapp connection",
              args: { name: "connection" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the webapp. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the webapp. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--slot",
              description:
                "The name of the slot. Default to the production slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "list-support-types",
          description:
            "List client types and auth types supported by webapp connections",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: ["--target-type", "-t"],
              description: "The target resource type",
              args: {
                name: "target-type",
                suggestions: [
                  "app-insights",
                  "appconfig",
                  "cognitiveservices",
                  "confluent-cloud",
                  "cosmos-cassandra",
                  "cosmos-gremlin",
                  "cosmos-mongo",
                  "cosmos-sql",
                  "cosmos-table",
                  "eventhub",
                  "fabric-sql",
                  "keyvault",
                  "mongodb-atlas",
                  "mysql",
                  "mysql-flexible",
                  "neon-postgres",
                  "postgres",
                  "postgres-flexible",
                  "redis",
                  "redis-enterprise",
                  "servicebus",
                  "signalr",
                  "sql",
                  "storage-blob",
                  "storage-file",
                  "storage-queue",
                  "storage-table",
                  "webpubsub",
                ],
              },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of a webapp connection",
          options: [
            {
              name: "--connection",
              description: "Name of the webapp connection",
              args: { name: "connection" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the webapp. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the webapp. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--slot",
              description:
                "The name of the slot. Default to the production slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "validate",
          description: "Validate a webapp connection",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--connection",
              description: "Name of the webapp connection",
              args: { name: "connection" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the webapp. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the webapp. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--slot",
              description:
                "The name of the slot. Default to the production slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the connection is met",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--connection",
              description: "Name of the webapp connection",
              args: { name: "connection" },
            },
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
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the webapp. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the webapp. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--slot",
              description:
                "The name of the slot. Default to the production slot if not specified",
              args: { name: "slot" },
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
          name: "create",
          description:
            "Create a connection between a webapp and a target resource",
          subcommands: [
            {
              name: "app-insights",
              description: "Create a webapp connection to app-insights",
              options: [
                acquirePolicyToken,
                {
                  name: "--app-insights",
                  description:
                    "Name of the app insights. Required if '--target-id' is not specified",
                  args: { name: "app-insights" },
                },
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--app-insights'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the app insights. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "appconfig",
              description: "Create a webapp connection to appconfig",
              options: [
                acquirePolicyToken,
                {
                  name: "--app-config",
                  description:
                    "Name of the app configuration. Required if '--target-id' is not specified",
                  args: { name: "app-config" },
                },
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--app-config'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the app configuration. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cognitiveservices",
              description: "Create a webapp connection to cognitiveservices",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cognitive services account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cognitive services. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "confluent-cloud",
              description: "Create a webapp connection to confluent-cloud",
              options: [
                {
                  name: "--bootstrap-server",
                  description: "Kafka bootstrap server url",
                  args: { name: "bootstrap-server" },
                  isRequired: true,
                },
                {
                  name: "--kafka-key",
                  description: "Kafka API-Key (key)",
                  args: { name: "kafka-key" },
                  isRequired: true,
                },
                {
                  name: "--kafka-secret",
                  description: "Kafka API-Key (secret)",
                  args: { name: "kafka-secret" },
                  isRequired: true,
                },
                {
                  name: "--schema-key",
                  description: "Schema registry API-Key (key)",
                  args: { name: "schema-key" },
                  isRequired: true,
                },
                {
                  name: "--schema-registry",
                  description: "Schema registry url",
                  args: { name: "schema-registry" },
                  isRequired: true,
                },
                {
                  name: "--schema-secret",
                  description: "Schema registry API-Key (secret)",
                  args: { name: "schema-secret" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-cassandra",
              description: "Create a webapp connection to cosmos-cassandra",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--key-space",
                  description:
                    "Name of the keyspace. Required if '--target-id' is not specified",
                  args: { name: "key-space" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--key-space'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-gremlin",
              description: "Create a webapp connection to cosmos-gremlin",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of the database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: "--graph",
                  description:
                    "Name of the graph. Required if '--target-id' is not specified",
                  args: { name: "graph" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--database', '--graph'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-mongo",
              description: "Create a webapp connection to cosmos-mongo",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of the database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-sql",
              description: "Create a webapp connection to cosmos-sql",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of the database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-table",
              description: "Create a webapp connection to cosmos-table",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--table",
                  description:
                    "Name of the table. Required if '--target-id' is not specified",
                  args: { name: "table" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--table'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "eventhub",
              description: "Create a webapp connection to eventhub",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "kafka-springBoot",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--namespace",
                  description:
                    "Name of the eventhub namespace. Required if '--target-id' is not specified",
                  args: { name: "namespace" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--namespace'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the eventhub. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "fabric-sql",
              description: "Create a webapp connection to fabric-sql",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "none",
                      "php",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--fabric-sql-db-uuid",
                  description:
                    "UUID of the target Fabric SQL database. Required if '--target-id' is not specified",
                  args: { name: "fabric-sql-db-uuid" },
                },
                {
                  name: "--fabric-workspace-uuid",
                  description:
                    "UUID of Fabric workspace which contains the target SQL database. Required if '--target-id' is not specified",
                  args: { name: "fabric-workspace-uuid" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--fabric-workspace-uuid', '--fabric-sql-db-uuid'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "keyvault",
              description: "Create a webapp connection to keyvault",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--new",
                  description:
                    "Indicates whether to create a new keyvault when creating the webapp connection",
                  args: {
                    name: "new",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--vault'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the keyvault. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault",
                  description:
                    "Name of the keyvault. Required if '--target-id' is not specified",
                  args: { name: "vault" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "mongodb-atlas",
              description: "Create a webapp connection to mongodb-atlas",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The connection string for secret auth",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--server",
                  description:
                    "Name of the MongoDB Atlas server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the MongoDB Atlas. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "mysql",
              description:
                "Create a webapp connection to mysql. This command has been deprecated and will be removed in a future release",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                  args: {
                    name: "config-connstr",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of the mysql database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--server",
                  description:
                    "Name of the mysql server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the mysql server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "mysql-flexible",
              description: "Create a webapp connection to mysql-flexible",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                  args: {
                    name: "config-connstr",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of the mysql flexible database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--server",
                  description:
                    "Name of the mysql flexible server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the mysql flexible server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "neon-postgres",
              description: "Create a webapp connection to neon-postgres",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of the sql database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--server",
                  description:
                    "Name of the sql server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "postgres",
              description:
                "Create a webapp connection to postgres. This command has been deprecated and will be removed in a future release",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                  args: {
                    name: "config-connstr",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of postgres database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--new",
                  description:
                    "Indicates whether to create a new postgres when creating the webapp connection",
                  args: {
                    name: "new",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--server",
                  description:
                    "Name of postgres server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the postgres service. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "postgres-flexible",
              description: "Create a webapp connection to postgres-flexible",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                  args: {
                    name: "config-connstr",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of postgres flexible database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--server",
                  description:
                    "Name of postgres flexible server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the flexible postgres service. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "redis",
              description: "Create a webapp connection to redis",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of the redis database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--server",
                  description:
                    "Name of the redis server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the redis server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "redis-enterprise",
              description: "Create a webapp connection to redis-enterprise",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of the redis enterprise database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--server",
                  description:
                    "Name of the redis enterprise server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the redis server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "servicebus",
              description: "Create a webapp connection to servicebus",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--namespace",
                  description:
                    "Name of the servicebus namespace. Required if '--target-id' is not specified",
                  args: { name: "namespace" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--namespace'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the servicebus. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "signalr",
              description: "Create a webapp connection to signalr",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "dotnet-internal", "none"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--signalr",
                  description:
                    "Name of the signalr service. Required if '--target-id' is not specified",
                  args: { name: "signalr" },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--signalr'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the signalr. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "sql",
              description: "Create a webapp connection to sql",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                  args: {
                    name: "config-connstr",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--database",
                  description:
                    "Name of the sql database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--server",
                  description:
                    "Name of the sql server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the sql server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-blob",
              description: "Create a webapp connection to storage-blob",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--new",
                  description:
                    "Indicates whether to create a new storage-blob when creating the webapp connection",
                  args: {
                    name: "new",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the storage account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-file",
              description: "Create a webapp connection to storage-file",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the storage account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-queue",
              description: "Create a webapp connection to storage-queue",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the storage account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-table",
              description: "Create a webapp connection to storage-table",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the storage account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "webpubsub",
              description: "Create a webapp connection to webpubsub",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-recreate",
                  description:
                    "Skip executing creation operation when no updates to an existing connection",
                  args: {
                    name: "no-recreate",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--webpubsub'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the webpubsub. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
                {
                  name: "--webpubsub",
                  description:
                    "Name of the webpubsub service. Required if '--target-id' is not specified",
                  args: { name: "webpubsub" },
                },
              ],
            },
          ],
        },
        {
          name: "update",
          description: "Update a webapp connection",
          subcommands: [
            {
              name: "app-insights",
              description: "Update a webapp to app-insights connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "appconfig",
              description: "Update a webapp to appconfig connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cognitiveservices",
              description: "Update a webapp to cognitiveservices connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "confluent-cloud",
              description: "Update a webapp to confluent-cloud connection",
              options: [
                {
                  name: "--connection",
                  description: "Name of the connection",
                  args: { name: "connection" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                {
                  name: "--bootstrap-server",
                  description: "Kafka bootstrap server url",
                  args: { name: "bootstrap-server" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--kafka-key",
                  description: "Kafka API-Key (key)",
                  args: { name: "kafka-key" },
                },
                {
                  name: "--kafka-secret",
                  description: "Kafka API-Key (secret)",
                  args: { name: "kafka-secret" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--schema-key",
                  description: "Schema registry API-Key (key)",
                  args: { name: "schema-key" },
                },
                {
                  name: "--schema-registry",
                  description: "Schema registry url",
                  args: { name: "schema-registry" },
                },
                {
                  name: "--schema-secret",
                  description: "Schema registry API-Key (secret)",
                  args: { name: "schema-secret" },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-cassandra",
              description: "Update a webapp to cosmos-cassandra connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-gremlin",
              description: "Update a webapp to cosmos-gremlin connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-mongo",
              description: "Update a webapp to cosmos-mongo connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-sql",
              description: "Update a webapp to cosmos-sql connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-table",
              description: "Update a webapp to cosmos-table connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "eventhub",
              description: "Update a webapp to eventhub connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "kafka-springBoot",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "fabric-sql",
              description: "Update a webapp to fabric-sql connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "none",
                      "php",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "keyvault",
              description: "Update a webapp to keyvault connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "mongodb-atlas",
              description: "Update a webapp to mongodb-atlas connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The connection string for secret auth",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "mysql",
              description:
                "Update a webapp to mysql connection. This command has been deprecated and will be removed in a future release",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                  args: {
                    name: "config-connstr",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "mysql-flexible",
              description: "Update a webapp to mysql-flexible connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                  args: {
                    name: "config-connstr",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "neon-postgres",
              description: "Update a webapp to neon-postgres connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "postgres",
              description:
                "Update a webapp to postgres connection. This command has been deprecated and will be removed in a future release",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                  args: {
                    name: "config-connstr",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "postgres-flexible",
              description: "Update a webapp to postgres-flexible connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                  args: {
                    name: "config-connstr",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "redis",
              description: "Update a webapp to redis connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "redis-enterprise",
              description: "Update a webapp to redis-enterprise connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "servicebus",
              description: "Update a webapp to servicebus connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "signalr",
              description: "Update a webapp to signalr connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "dotnet-internal", "none"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "sql",
              description: "Update a webapp to sql connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "dotnet-internal",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                  args: {
                    name: "config-connstr",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-blob",
              description: "Update a webapp to storage-blob connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-file",
              description: "Update a webapp to storage-file connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-queue",
              description: "Update a webapp to storage-queue connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-table",
              description: "Update a webapp to storage-table connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "webpubsub",
              description: "Update a webapp to webpubsub connection",
              options: [
                acquirePolicyToken,
                {
                  name: "--appconfig-id",
                  description:
                    "The app configuration id to store configuration",
                  args: { name: "appconfig-id" },
                },
                changeReference,
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "dotnet-internal",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--connstr-props",
                  description:
                    "The additional connection string properties used to build connection string",
                  args: {
                    name: "connstr-props",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: {
                    name: "customized-keys",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--opt-out",
                  description:
                    "Whether to disable some configuration steps. Use configinfo to disbale configuration information changes on source. Use publicnetwork to disable public network access configuration.Use auth to skip auth configuration such as enabling managed identity and granting RBAC roles",
                  args: {
                    name: "opt-out",
                    suggestions: ["auth", "configinfo", "publicnetwork"],
                    isVariadic: true,
                  },
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret", isOptional: true, isVariadic: true },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: {
                    name: "service-principal",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--system-identity",
                  description:
                    "The flag to use system assigned identity auth info. No additional parameters are needed",
                  args: {
                    name: "system-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: {
                    name: "user-identity",
                    isOptional: true,
                    isVariadic: true,
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "cors",
      description: "Manage Cross-Origin Resource Sharing (CORS)",
      subcommands: [
        {
          name: "add",
          description: "Add allowed origins",
          options: [
            {
              name: ["--allowed-origins", "-a"],
              description:
                'Space separated origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). To allow all, use "*" and remove all other origins from the list',
              args: {
                name: "allowed-origins",
                isOptional: true,
                isVariadic: true,
              },
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
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          name: "remove",
          description: "Remove allowed origins",
          options: [
            {
              name: ["--allowed-origins", "-a"],
              description:
                'Space separated origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). To allow all, use "*" and remove all other origins from the list',
              args: {
                name: "allowed-origins",
                isOptional: true,
                isVariadic: true,
              },
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
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          description: "Show allowed origins",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
      name: "deleted",
      description: "Manage deleted web apps",
      subcommands: [
        {
          name: "list",
          description: "List web apps that have been deleted",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description: "Name of the deleted web app slot",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "restore",
          description: "Restore a deleted web app",
          options: [
            {
              name: "--deleted-id",
              description: "Resource ID of the deleted web app",
              args: { name: "deleted-id" },
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
              description:
                "Name of the web app to restore the deleted content to",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--restore-content-only",
              description:
                "Restore only deleted files without web app settings",
            },
            {
              name: ["--slot", "-s"],
              description: "Slot to restore the deleted content to",
              args: { name: "slot" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--target-app-svc-plan",
              description: "The app service plan for the new azure web app",
              args: { name: "target-app-svc-plan" },
            },
          ],
        },
      ],
    },
    {
      name: "deployment",
      description: "Manage web app deployments",
      subcommands: [
        {
          name: "list-publishing-credentials",
          description:
            "Get the details for available web app publishing credentials",
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
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          name: "list-publishing-profiles",
          description:
            "Get the details for available web app deployment profiles",
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
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--xml",
              description:
                "Retrieves the publishing profile details in XML format",
            },
          ],
        },
        {
          name: "container",
          description: "Manage container-based continuous deployment",
          subcommands: [
            {
              name: "config",
              description: "Configure continuous deployment via containers",
              options: [
                {
                  name: ["--enable-cd", "-e"],
                  description: "Enable/disable continuous deployment",
                  args: {
                    name: "enable-cd",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
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
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "show-cd-url",
              description:
                "Get the URL which can be used to configure webhooks for continuous deployment. Requires SCM Basic Auth Publishing Credentials to be enabled",
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
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
          name: "github-actions",
          description: "Configure GitHub Actions for a webapp",
          subcommands: [
            {
              name: "add",
              description:
                "Add a GitHub Actions workflow file to the specified repository. The workflow will build and deploy your app to the specified webapp",
              options: [
                {
                  name: "--repo",
                  description:
                    "The GitHub repository to which the workflow file will be added. In the format: <owner>/<repository-name>",
                  args: { name: "repo" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: ["--branch", "-b"],
                  description:
                    'The branch to which the workflow file will be added. Defaults to "master" if not specified',
                  args: { name: "branch" },
                },
                changeReference,
                {
                  name: ["--force", "-f"],
                  description:
                    "When true, the command will overwrite any workflow file with a conflicting name",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--login-with-github",
                  description:
                    "Interactively log in with GitHub to retrieve the Personal Access Token",
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--runtime", "-r"],
                  description:
                    'Canonicalized web runtime in the format of Framework:Version, e.g. "PHP:5.6". Use "az webapp list-runtimes" for available list',
                  args: { name: "runtime" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--token",
                  description:
                    "A Personal Access Token with write access to the specified repository. For more information: https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "remove",
              description:
                "Remove and disconnect the GitHub Actions workflow file from the specified repository",
              options: [
                {
                  name: "--repo",
                  description:
                    "The GitHub repository to which the workflow file will be added. In the format: <owner>/<repository-name>",
                  args: { name: "repo" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: ["--branch", "-b"],
                  description:
                    'The branch to which the workflow file will be added. Defaults to "master" if not specified',
                  args: { name: "branch" },
                },
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--login-with-github",
                  description:
                    "Interactively log in with GitHub to retrieve the Personal Access Token",
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--token",
                  description:
                    "A Personal Access Token with write access to the specified repository. For more information: https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line",
                  args: { name: "token" },
                },
              ],
            },
          ],
        },
        {
          name: "slot",
          description: "Manage web app deployment slots",
          subcommands: [
            {
              name: "auto-swap",
              description: "Configure deployment slot auto swap",
              options: [
                {
                  name: ["--slot", "-s"],
                  description: "The name of the slot",
                  args: { name: "slot" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--auto-swap-slot",
                  description: "Target slot to auto swap",
                  args: { name: "auto-swap-slot" },
                },
                changeReference,
                { name: "--disable", description: "Disable auto swap" },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the webapp",
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
              name: "create",
              description: "Create a deployment slot",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the webapp",
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
                  name: ["--slot", "-s"],
                  description: "The name of the slot",
                  args: { name: "slot" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--configuration-source",
                  description:
                    "Source slot to clone configurations from. Use web app's name to refer to the production slot",
                  args: { name: "configuration-source" },
                },
                {
                  name: ["--container-image-name", "-c"],
                  description:
                    "The container custom image name and optionally the tag name (e.g., <registry-name>/<image-name>:<tag>). Note: if --container-registry-url is also provided, use <image-name>:<tag> without the registry name",
                  args: { name: "container-image-name" },
                },
                {
                  name: [
                    "--docker-registry-server-password",
                    "--container-registry-password",
                    "-w",
                  ],
                  description: "The container registry server password",
                  args: { name: "docker-registry-server-password" },
                },
                {
                  name: ["--container-registry-url", "-r"],
                  description: "The container registry server url",
                  args: { name: "container-registry-url" },
                },
                {
                  name: [
                    "--docker-registry-server-user",
                    "--container-registry-user",
                    "-u",
                  ],
                  description: "The container registry server username",
                  args: { name: "docker-registry-server-user" },
                },
                {
                  name: ["--deployment-container-image-name", "-i"],
                  description:
                    "Option '--deployment-container-image-name' has been deprecated and will be removed in a future release. Container image name, e.g. publisher/image-name:tag",
                  args: { name: "deployment-container-image-name" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a deployment slot",
              options: [
                {
                  name: ["--slot", "-s"],
                  description: "The name of the slot",
                  args: { name: "slot" },
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
                  description: "Name of the webapp",
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
              description: "List all deployment slots",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the webapp",
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
              name: "swap",
              description: "Swap deployment slots for a web app",
              options: [
                {
                  name: ["--slot", "-s"],
                  description: "The name of the slot",
                  args: { name: "slot" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--action",
                  description:
                    "Swap types. use 'preview' to apply target slot's settings on the source slot first; use 'swap' to complete it; use 'reset' to reset the swap",
                  args: {
                    name: "action",
                    suggestions: ["preview", "reset", "swap"],
                  },
                },
                changeReference,
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the webapp",
                  args: { name: "name" },
                },
                {
                  name: "--preserve-vnet",
                  description:
                    "Preserve Virtual Network to the slot during swap, default to 'true'",
                  args: {
                    name: "preserve-vnet",
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
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--target-slot",
                  description: "Target slot to swap, default to 'production'",
                  args: { name: "target-slot" },
                },
              ],
            },
          ],
        },
        {
          name: "source",
          description: "Manage web app deployment via source control",
          subcommands: [
            {
              name: "config",
              description:
                "Manage deployment from git or Mercurial repositories",
              options: [
                {
                  name: ["--repo-url", "-u"],
                  description:
                    "Repository url to pull the latest source from, e.g. https://github.com/foo/foo-web",
                  args: { name: "repo-url" },
                  isRequired: true,
                },
                acquirePolicyToken,
                {
                  name: "--branch",
                  description: "The branch name of the repository",
                  args: { name: "branch" },
                },
                changeReference,
                {
                  name: "--git-token",
                  description: "Git access token required for auto sync",
                  args: { name: "git-token" },
                },
                {
                  name: "--github-action",
                  description: "If using GitHub action, default to False",
                  args: { name: "github-action" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: "--manual-integration",
                  description:
                    "Disable automatic sync between source control and web",
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: "--repository-type",
                  description: "Repository type",
                  args: {
                    name: "repository-type",
                    suggestions: [
                      "externalgit",
                      "git",
                      "github",
                      "localgit",
                      "mercurial",
                    ],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "config-local-git",
              description:
                "Get a URL for a git repository endpoint to clone and push to for web app deployment",
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
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "delete",
              description: "Delete a source control deployment configuration",
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
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
                "Get the details of a source control deployment configuration",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "sync",
              description:
                "Synchronize from the repository. Only needed under manual integration mode",
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
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "update-token",
              description:
                "Update source control token cached in Azure app service",
              options: [
                acquirePolicyToken,
                changeReference,
                {
                  name: "--git-token",
                  description: "Git access token required for auto sync",
                  args: { name: "git-token" },
                },
              ],
            },
          ],
        },
        {
          name: "user",
          description: "Manage user credentials for deployment",
          subcommands: [
            {
              name: "set",
              description: "Update deployment credentials",
              options: [
                {
                  name: "--user-name",
                  description: "User name",
                  args: { name: "user-name" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--password",
                  description: "Password, will prompt if not specified",
                  args: { name: "password" },
                },
              ],
            },
            { name: "show", description: "Get deployment publishing user" },
          ],
        },
      ],
    },
    {
      name: "hybrid-connection",
      description:
        "Methods that list, add and remove hybrid-connections from webapps",
      subcommands: [
        {
          name: "add",
          description: "Add an existing hybrid-connection to a webapp",
          options: [
            {
              name: "--hybrid-connection",
              description: "Hybrid connection name",
              args: { name: "hybrid-connection" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "Hybrid connection namespace",
              args: { name: "namespace" },
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
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "list",
          description: "List the hybrid-connections on a webapp",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "remove",
          description: "Remove a hybrid-connection from a webapp",
          options: [
            {
              name: "--hybrid-connection",
              description: "Hybrid connection name",
              args: { name: "hybrid-connection" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "Hybrid connection namespace",
              args: { name: "namespace" },
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
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
      ],
    },
    {
      name: "identity",
      description: "Manage web app's managed identity",
      subcommands: [
        {
          name: "assign",
          description: "Assign managed identity to the web app",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--identities",
              description:
                "Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'",
              args: { name: "identities", isOptional: true, isVariadic: true },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                "Role name or id the managed identity will be assigned",
              args: { name: "role" },
            },
            {
              name: "--scope",
              description: "The scope the managed identity has access to",
              args: { name: "scope" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          name: "remove",
          description: "Disable web app's managed identity",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--identities",
              description:
                "Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'",
              args: { name: "identities", isOptional: true, isVariadic: true },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          description: "Display web app's managed identity",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
      name: "last-known-good",
      description: "Manage a web app's last known good configuration",
      subcommands: [
        {
          name: "list",
          description: "List the last known good configurations of a web app",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app",
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
          name: "mark",
          description:
            "Mark the latest ready revision of a web app as last known good",
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
              description: "Name of the app",
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
          description:
            "Show the default last known good configuration of a web app",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the app",
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
      name: "log",
      description: "Manage web app logs",
      subcommands: [
        {
          name: "config",
          description: "Configure logging for a web app",
          options: [
            acquirePolicyToken,
            {
              name: "--application-logging",
              description: "Configure application logging",
              args: {
                name: "application-logging",
                suggestions: ["azureblobstorage", "filesystem", "off"],
              },
            },
            changeReference,
            {
              name: "--detailed-error-messages",
              description: "Configure detailed error messages",
              args: {
                name: "detailed-error-messages",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--docker-container-logging",
              description:
                "Configure gathering STDOUT and STDERR output from container",
              args: {
                name: "docker-container-logging",
                suggestions: ["filesystem", "off"],
              },
            },
            {
              name: "--failed-request-tracing",
              description: "Configure failed request tracing",
              args: {
                name: "failed-request-tracing",
                suggestions: ["false", "true"],
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
              name: "--level",
              description: "Logging level",
              args: {
                name: "level",
                suggestions: ["error", "information", "verbose", "warning"],
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--web-server-logging",
              description: "Configure Web server logging",
              args: {
                name: "web-server-logging",
                suggestions: ["filesystem", "off"],
              },
            },
          ],
        },
        {
          name: "download",
          description: "Download a web app's log history as a zip file",
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
              name: "--log-file",
              description: "The downloaded zipped log file path",
              args: { name: "log-file" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          description: "Get the details of a web app's logging configuration",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          name: "tail",
          description: "Start live log tracing for a web app",
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
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: "--provider",
              description:
                "By default all live traces configured by az webapp log config will be shown, but you can scope to certain providers/folders, e.g. 'application', 'http', etc. For details, check out https://github.com/projectkudu/kudu/wiki/Diagnostic-Log-Stream",
              args: { name: "provider" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          name: "deployment",
          description: "Manage web app deployment logs",
          subcommands: [
            {
              name: "list",
              description: "List deployments associated with web app",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show deployment logs of the latest deployment, or a specific deployment if deployment-id is specified",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: "--deployment-id",
                  description:
                    "Deployment ID. If none specified, returns the deployment logs of the latest deployment",
                  args: { name: "deployment-id" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
          ],
        },
        {
          name: "startup",
          description: "View web app container startup logs",
          subcommands: [
            {
              name: "list",
              description: "List all container startup log files for a web app",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: "--instance",
                  description: "Filter by worker instance name",
                  args: { name: "instance" },
                },
                {
                  name: "--outcome",
                  description: "Filter by startup outcome",
                  args: {
                    name: "outcome",
                    suggestions: ["failure", "success"],
                  },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "show",
              description: "Show the content of a container startup log",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: ["--filename", "-f"],
                  description:
                    "Name of a specific startup log file to display. If not specified, shows the latest log (preferring failures)",
                  args: { name: "filename" },
                },
                {
                  name: "--instance",
                  description: "Filter by worker instance name",
                  args: { name: "instance" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "managed-traffic",
      description: "Manage a web app's Active Backup traffic configuration",
      subcommands: [
        {
          name: "list",
          description: "List the managed traffic configurations of a web app",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app",
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
              name: "--expand",
              description:
                "Set to endpoints to return the endpoint collection without projection, including both weight and priority for every endpoint",
              args: { name: "expand" },
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
          description:
            "Show the default managed traffic configuration of a web app",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the app",
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
            "Update the default managed traffic configuration of a web app",
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
              name: "--endpoints",
              description:
                'Per-region endpoint configurations controlling weight and priority. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "endpoints", isVariadic: true },
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the app",
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
              name: "--traffic-mode",
              description:
                "Traffic routing mode: Active (weighted) or Passive (priority-based failover)",
              args: {
                name: "traffic-mode",
                suggestions: ["Active", "Passive", "Unknown"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "secure-build",
      description: "Review open source vulnerabilities in a web app's packages",
      subcommands: [
        {
          name: "show",
          description:
            "Show the Secure Build report for the active deployment of a Linux web app",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
              name: "--rescan",
              description:
                "Run a fresh dependency analysis instead of using a cached report",
            },
            {
              name: ["--slot", "-s"],
              description:
                "Name of the web app slot. Defaults to the production slot",
              args: { name: "slot" },
            },
          ],
        },
      ],
    },
    {
      name: "silo",
      description: "Manage Active Backup silos for a web app",
      subcommands: [
        {
          name: "create",
          description: "Create a web app silo",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--primary-location",
              description: "Region of the primary site",
              args: { name: "primary-location" },
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
              name: "--silo",
              description: "The name of the SiteSilo",
              args: { name: "silo" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--endpoint-status",
              description: "Status of the silo traffic endpoint",
              args: { name: "endpoint-status" },
            },
            {
              name: "--follow-last-known-good",
              description:
                "Whether the silo should follow the last known good revision",
              args: {
                name: "follow-last-known-good",
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
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--networking-override",
              description:
                'Networking overrides for the silo. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "networking-override", isVariadic: true },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
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
              name: "--primary-site-name",
              description: "Name of the primary site",
              args: { name: "primary-site-name" },
            },
            {
              name: "--silo-location",
              description:
                "Azure region of the site silo, retained for compatibility. When supplied, it must identify the same region as the required root location",
              args: { name: "silo-location" },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags", isVariadic: true },
            },
            {
              name: "--traffic-mode",
              description:
                "Traffic mode for the site silo's Traffic Manager profile",
              args: {
                name: "traffic-mode",
                suggestions: ["Active", "Passive", "Unknown"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a web app silo",
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
              description: "Name of the app",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
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
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--silo",
              description: "The name of the SiteSilo",
              args: { name: "silo" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List the silos of a web app",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the app",
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
          name: "refresh",
          description: "Refresh the silos of the primary web app",
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
              description: "Name of the app",
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
          description: "Show a web app silo",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the app",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--silo",
              description: "The name of the SiteSilo",
              args: { name: "silo" },
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
          description: "Update a web app silo",
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
              name: "--endpoint-status",
              description: "Status of the silo traffic endpoint",
              args: { name: "endpoint-status" },
            },
            {
              name: "--follow-last-known-good",
              description:
                "Whether the silo should follow the last known good revision",
              args: {
                name: "follow-last-known-good",
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
              name: ["--name", "-n"],
              description: "Name of the app",
              args: { name: "name" },
            },
            {
              name: "--networking-override",
              description:
                'Networking overrides for the silo. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "networking-override", isVariadic: true },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
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
              name: "--primary-location",
              description: "Region of the primary site",
              args: { name: "primary-location" },
            },
            {
              name: "--primary-site-name",
              description: "Name of the primary site",
              args: { name: "primary-site-name" },
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
              name: "--silo",
              description: "The name of the SiteSilo",
              args: { name: "silo" },
            },
            {
              name: "--silo-location",
              description:
                "Azure region of the site silo, retained for compatibility. When supplied, it must identify the same region as the required root location",
              args: { name: "silo-location" },
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
          name: "wait",
          description: "Wait for a web app silo to satisfy a condition",
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
              description: "Name of the app",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--silo",
              description: "The name of the SiteSilo",
              args: { name: "silo" },
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
          name: "vnet-integration",
          description: "Manage a web app silo's virtual network connection",
          subcommands: [
            {
              name: "add",
              description: "Add a virtual network connection to a web app silo",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the app",
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
                  name: "--silo",
                  description: "Name of the silo",
                  args: { name: "silo" },
                  isRequired: true,
                },
                acquirePolicyToken,
                changeReference,
                {
                  name: "--kind",
                  description: "Kind of resource",
                  args: { name: "kind" },
                },
                {
                  name: "--subnet",
                  description:
                    "The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first",
                  args: { name: "subnet" },
                },
                {
                  name: "--swift-supported",
                  description:
                    "A flag that specifies if the scale unit this Web App is on supports Swift integration",
                  args: {
                    name: "swift-supported",
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
              ],
            },
            {
              name: "remove",
              description:
                "Remove the virtual network connection of a web app silo",
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
                  description: "Name of the app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--silo",
                  description: "Name of the silo",
                  args: { name: "silo" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the virtual network connection of a web app silo",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids", isVariadic: true },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--silo",
                  description: "Name of the silo",
                  args: { name: "silo" },
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
                "Update a web app silo's virtual network connection using PATCH",
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
                  name: "--kind",
                  description: "Kind of resource",
                  args: { name: "kind" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--silo",
                  description: "Name of the silo",
                  args: { name: "silo" },
                },
                {
                  name: "--subnet",
                  description:
                    "The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first",
                  args: { name: "subnet" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--swift-supported",
                  description:
                    "A flag that specifies if the scale unit this Web App is on supports Swift integration",
                  args: {
                    name: "swift-supported",
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
              ],
            },
          ],
        },
      ],
    },
    {
      name: "sitecontainers",
      description: "Manage linux web apps sitecontainers",
      subcommands: [
        {
          name: "convert",
          description:
            "Convert a webapp from sitecontainers to a classic custom container and vice versa. Supports both single-container (DOCKER|) and multi-container (COMPOSE|) apps",
          options: [
            {
              name: "--mode",
              description: "Mode for conversion",
              args: { name: "mode", suggestions: ["docker", "sitecontainers"] },
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
              name: "--main-container-name",
              description:
                "For COMPOSE to sitecontainers conversion, specifies which compose service should be the main container. If not provided, the service with a port mapping is auto-detected",
              args: { name: "main-container-name" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the linux webapp",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "Name of the web app slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "create",
          description: "Create sitecontainers for a linux webapp",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the linux webapp",
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
              name: "--container-name",
              description: "Name of the SiteContainer",
              args: { name: "container-name" },
            },
            {
              name: "--image",
              description: "Image Name",
              args: { name: "image" },
            },
            {
              name: "--is-main",
              description:
                "True if the container is the main SiteContainer; false otherwise",
              args: {
                name: "is-main",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: "--registry-password",
              description: "Password used for image registry auth",
              args: { name: "registry-password" },
            },
            {
              name: "--registry-username",
              description: "Username used for image registry auth",
              args: { name: "registry-username" },
            },
            {
              name: ["--system-assigned-identity", "--si"],
              description:
                "If true, the system-assigned identity will be used for auth while pulling image",
              args: {
                name: "system-assigned-identity",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--sitecontainers-spec-file", "--ssf"],
              description:
                "Path to a json sitecontainer spec file containing a list of sitecontainers, other sitecontainer input args will be ignored if this arg is provided",
              args: { name: "sitecontainers-spec-file" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "Name of the web app slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
            {
              name: "--startup-cmd",
              description: "Startup Command for the SiteContainer",
              args: { name: "startup-cmd" },
            },
            {
              name: "--target-port",
              description: "Target port for SiteContainer",
              args: { name: "target-port" },
            },
            {
              name: ["--user-assigned-identity", "--ui"],
              description:
                "ClientID for the user-maganed identity which will be used for auth while pulling image",
              args: { name: "user-assigned-identity" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a sitecontainer for a linux webapp",
          options: [
            {
              name: "--container-name",
              description: "Name of the SiteContainer",
              args: { name: "container-name" },
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
              description: "Name of the linux webapp",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "Name of the web app slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          description: "List all the sitecontainers for a linux webapp",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the linux webapp",
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
              name: ["--slot", "-s"],
              description:
                "Name of the web app slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "log",
          description: "Get the logs of a sitecontainer for a linux webapp",
          options: [
            {
              name: "--container-name",
              description: "Name of the SiteContainer",
              args: { name: "container-name" },
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
              description: "Name of the linux webapp",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "Name of the web app slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          description: "List the details of a sitecontainer for a linux webapp",
          options: [
            {
              name: "--container-name",
              description: "Name of the SiteContainer",
              args: { name: "container-name" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the linux webapp",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "Name of the web app slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          name: "status",
          description: "Get the status of a sitecontainer for a linux webapp",
          options: [
            acquirePolicyToken,
            changeReference,
            {
              name: "--container-name",
              description: "Name of the SiteContainer",
              args: { name: "container-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the linux webapp",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "Name of the web app slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          description: "Update an existing sitecontainer for a linux webapp",
          options: [
            {
              name: "--container-name",
              description: "Name of the SiteContainer",
              args: { name: "container-name" },
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
              name: "--image",
              description: "Image Name",
              args: { name: "image" },
            },
            {
              name: "--is-main",
              description:
                "True if the container is the main site container; false otherwise",
              args: {
                name: "is-main",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the linux webapp",
              args: { name: "name" },
            },
            {
              name: "--registry-password",
              description: "Password used for image registry auth",
              args: { name: "registry-password" },
            },
            {
              name: "--registry-username",
              description: "Username used for image registry auth",
              args: { name: "registry-username" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--system-assigned-identity", "--si"],
              description:
                "If true, the system-assigned identity will be used for auth while pulling image",
              args: {
                name: "system-assigned-identity",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--slot", "-s"],
              description:
                "Name of the web app slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
            {
              name: "--startup-cmd",
              description: "Startup Command for the SiteContainer",
              args: { name: "startup-cmd" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--target-port",
              description: "Target port for SiteContainer",
              args: { name: "target-port" },
            },
            {
              name: ["--user-assigned-identity", "--ui"],
              description:
                "ClientID for the user-maganed identity which will be used for auth while pulling image",
              args: { name: "user-assigned-identity" },
            },
          ],
        },
      ],
    },
    {
      name: "traffic-routing",
      description: "Manage traffic routing for web apps",
      subcommands: [
        {
          name: "clear",
          description:
            "Clear the routing rules and send all traffic to production",
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
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
          name: "set",
          description: "Configure routing traffic to deployment slots",
          options: [
            {
              name: ["--distribution", "-d"],
              description:
                "Space-separated slot routings in a format of <slot-name>=<percentage> e.g. staging=50. Unused traffic percentage will go to the Production slot",
              args: { name: "distribution", isVariadic: true },
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
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
          description:
            "Display the current distribution of traffic across slots",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids", isVariadic: true },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
      name: "troubleshoot",
      description: "Diagnose common Linux web app problems",
      subcommands: [
        {
          name: "config",
          description:
            "Validate configuration for a Linux web app and surface a recent runtime error",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
              name: "--instance",
              description:
                "Filter configuration checks by worker machine name. The runtime error recommendation uses the corresponding ARM instance ID and never falls back to another worker",
              args: { name: "instance" },
            },
            {
              name: "--report",
              description:
                "Print a human-readable report instead of the structured payload",
              args: {
                name: "report",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Defaults to the production slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "deployment",
          description:
            "Show the latest deployment state and diagnostic information for a Linux web app",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
              name: ["--slot", "-s"],
              description:
                "Name of the web app slot. Defaults to the production slot",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "status",
          description:
            "Show site runtime status and recent startup summary for a Linux web app",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
              name: "--instance",
              description: "Scope the report to a single worker instance",
              args: { name: "instance" },
            },
            {
              name: "--report",
              description:
                "Print a human-readable, color-coded report instead of returning structured data",
              args: {
                name: "report",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Defaults to the production slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "collect",
          description: "Collect diagnostic artifacts from a Linux web app",
          subcommands: [
            {
              name: "network-capture",
              description:
                "Collect and analyze a packet capture from a Linux web app container",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: "--collect-only",
                  description:
                    "Show only the raw packet capture link. Kudu still finalizes the capture internally, but the analysis report link is omitted",
                  args: {
                    name: "collect-only",
                    suggestions: ["false", "true"],
                    isOptional: true,
                  },
                },
                {
                  name: "--duration",
                  description:
                    "Capture duration in seconds. Valid range: 1-300",
                  args: { name: "duration" },
                },
                {
                  name: ["--instance", "-i"],
                  description:
                    "Worker instance to capture. When omitted in an interactive terminal, you are prompted to select from the current instances. Specify this option for scripts and other non-interactive use. Only one instance can be captured at a time",
                  args: { name: "instance" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "Name of the web app slot. Defaults to the production slot",
                  args: { name: "slot" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "vnet-integration",
      description:
        "Methods that list, add, and remove virtual network integrations from a webapp",
      subcommands: [
        {
          name: "add",
          description: "Add a regional virtual network integration to a webapp",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
              name: "--subnet",
              description: "The name or resource ID of the subnet",
              args: { name: "subnet" },
              isRequired: true,
            },
            {
              name: "--vnet",
              description: "The name or resource ID of the Vnet",
              args: { name: "vnet" },
              isRequired: true,
            },
            acquirePolicyToken,
            changeReference,
            {
              name: "--skip-delegation-check",
              description:
                "Skip check if you do not have permission or the VNet is in another subscription",
              args: {
                name: "skip-delegation-check",
                suggestions: ["false", "true"],
                isOptional: true,
              },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "list",
          description: "List the virtual network integrations on a webapp",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "remove",
          description:
            "Remove a regional virtual network integration from webapp",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
      ],
    },
    {
      name: "webjob",
      description: "Allows management operations for webjobs on a web app",
      subcommands: [
        {
          name: "continuous",
          description:
            "Allows management operations of continuous webjobs on a web app",
          subcommands: [
            {
              name: "list",
              description: "List all continuous webjobs on a selected web app",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "remove",
              description: "Delete a specific continuous webjob",
              options: [
                {
                  name: ["--webjob-name", "-w"],
                  description: "The name of the webjob",
                  args: { name: "webjob-name" },
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
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "start",
              description:
                "Start a specific continuous webjob on a selected web app",
              options: [
                {
                  name: ["--webjob-name", "-w"],
                  description: "The name of the webjob",
                  args: { name: "webjob-name" },
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
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "stop",
              description: "Stop a specific continuous webjob",
              options: [
                {
                  name: ["--webjob-name", "-w"],
                  description: "The name of the webjob",
                  args: { name: "webjob-name" },
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
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
          name: "triggered",
          description:
            "Allows management operations of triggered webjobs on a web app",
          subcommands: [
            {
              name: "list",
              description: "List all triggered webjobs hosted on a web app",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "log",
              description:
                "Get history of a specific triggered webjob hosted on a web app",
              options: [
                {
                  name: ["--webjob-name", "-w"],
                  description: "The name of the webjob",
                  args: { name: "webjob-name" },
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
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "remove",
              description:
                "Delete a specific triggered webjob hosted on a web app",
              options: [
                {
                  name: ["--webjob-name", "-w"],
                  description: "The name of the webjob",
                  args: { name: "webjob-name" },
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
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "run",
              description:
                "Run a specific triggered webjob hosted on a web app",
              options: [
                {
                  name: ["--webjob-name", "-w"],
                  description: "The name of the webjob",
                  args: { name: "webjob-name" },
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
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
