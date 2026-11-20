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
  name: "login",
  description: "Log in to Azure",
  options: [
    acquirePolicyToken,
    {
      name: "--allow-no-subscriptions",
      description:
        "Support accessing tenants without subscriptions. It's useful to run tenant-level commands, such as 'az ad'",
    },
    {
      name: "--certificate",
      description: "PEM file with key and public certificate",
      args: { name: "certificate" },
    },
    changeReference,
    {
      name: "--claims-challenge",
      description:
        "Base64-encoded claims challenge requested by a resource API in the WWW-Authenticate header",
      args: { name: "claims-challenge" },
    },
    {
      name: "--client-id",
      description: "Client ID of the user-assigned managed identity",
      args: { name: "client-id" },
    },
    {
      name: "--federated-token",
      description: "Federated token that can be used for OIDC token exchange",
      args: { name: "federated-token" },
    },
    {
      name: ["--identity", "-i"],
      description: "Log in using managed identity",
    },
    {
      name: "--object-id",
      description: "Object ID of the user-assigned managed identity",
      args: { name: "object-id" },
    },
    {
      name: ["--password", "-p"],
      description:
        "User password or service principal secret. Will prompt if not given",
      args: { name: "password" },
    },
    {
      name: "--resource-id",
      description: "Resource ID of the user-assigned managed identity",
      args: { name: "resource-id" },
    },
    {
      name: "--scope",
      description:
        "Used in the /authorize request. It can cover only one static resource",
      args: { name: "scope", isVariadic: true },
    },
    {
      name: "--service-principal",
      description: "Log in with a service principal",
    },
    {
      name: ["--skip-subscription-discovery", "--skip-sub"],
      description:
        "Skip the subscription discovery process during login. Requires --tenant. Use with --subscription to fetch a single subscription without listing all",
    },
    {
      name: ["--subscription", "-s"],
      description:
        "Subscription ID or name to set as the default. When combined with --skip-subscription-discovery, only this subscription is retrieved via a direct API call (must be a subscription ID, not a name)",
      args: { name: "subscription" },
    },
    {
      name: ["--tenant", "-t"],
      description:
        "The Microsoft Entra tenant, must be provided when using a service principal",
      args: { name: "tenant" },
    },
    {
      name: "--use-cert-sn-issuer",
      description:
        "Use Subject Name + Issuer (SN+I) authentication in order to support automatic certificate rolls",
    },
    {
      name: "--use-device-code",
      description:
        "Use device code flow. Azure CLI will also use this if it can't launch a browser, e.g. in remote SSH or Cloud Shell",
    },
    {
      name: ["--username", "-u"],
      description: "User name or service principal client ID",
      args: { name: "username" },
    },
  ],
};

export default completion;
