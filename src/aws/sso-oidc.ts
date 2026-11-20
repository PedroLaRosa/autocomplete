const completionSpec: Fig.Spec = {
  name: "sso-oidc",
  description:
    "IAM Identity Center OpenID Connect (OIDC) is a web service that enables a client (such as CLI or a native application) to register with IAM Identity Center. The service also enables the client to fetch the user’s access token upon successful authentication and authorization with IAM Identity Center.  API namespaces  IAM Identity Center uses the sso and identitystore API namespaces. IAM Identity Center OpenID Connect uses the sso-oauth namespace.  Considerations for using this guide  Before you begin using this guide, we recommend that you first review the following important information about how the IAM Identity Center OIDC service works.   The IAM Identity Center OIDC service currently implements only the portions of the OAuth 2.0 Device Authorization Grant standard (https://tools.ietf.org/html/rfc8628) that are necessary to enable single sign-on authentication with the CLI.    With older versions of the CLI, the service only emits OIDC access tokens, so to obtain a new token, users must explicitly re-authenticate. To access the OIDC flow that supports token refresh and doesn’t require re-authentication, update to the latest CLI version (1.27.10 for CLI V1 and 2.9.0 for CLI V2) with support for OIDC token refresh and configurable IAM Identity Center session durations. For more information, see Configure Amazon Web Services access portal session duration .    The access tokens provided by this service grant access to all Amazon Web Services account entitlements assigned to an IAM Identity Center user, not just a particular application.   The documentation in this guide does not describe the mechanism to convert the access token into Amazon Web Services Auth (“sigv4”) credentials for use with IAM-protected Amazon Web Services service endpoints. For more information, see GetRoleCredentials in the IAM Identity Center Portal API Reference Guide.   For general information about IAM Identity Center, see What is IAM Identity Center? in the IAM Identity Center User Guide",
  subcommands: [
    {
      name: "create-token",
      description:
        "Creates and returns access and refresh tokens for clients that are authenticated using client secrets. The access token can be used to fetch short-lived credentials for the assigned AWS accounts or to access application APIs using bearer authentication",
      options: [
        {
          name: "--client-id",
          description:
            "The unique identifier string for the client or application. This value comes from the result of the RegisterClient API",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-secret",
          description:
            "A secret string generated for the client. This value should come from the persisted result of the RegisterClient API",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-type",
          description:
            "Supports the following OAuth grant types: Authorization Code, Device Code, and Refresh Token. Specify one of the following values, depending on the grant type that you want: * Authorization Code - authorization_code  * Device Code - urn:ietf:params:oauth:grant-type:device_code  * Refresh Token - refresh_token",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-code",
          description:
            "Used only when calling this API for the Device Code grant type. This short-lived code is used to identify this authorization request. This comes from the result of the StartDeviceAuthorization API",
          args: {
            name: "string",
          },
        },
        {
          name: "--code",
          description:
            "Used only when calling this API for the Authorization Code grant type. The short-lived code is used to identify this authorization request",
          args: {
            name: "string",
          },
        },
        {
          name: "--refresh-token",
          description:
            "Used only when calling this API for the Refresh Token grant type. This token is used to refresh short-lived tokens, such as the access token, that might expire. For more information about the features and limitations of the current IAM Identity Center OIDC implementation, see Considerations for Using this Guide in the IAM Identity Center OIDC API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "The list of scopes for which authorization is requested. This parameter has no effect; the access token will always include all scopes configured during client registration",
          args: {
            name: "list",
          },
        },
        {
          name: "--redirect-uri",
          description:
            "Used only when calling this API for the Authorization Code grant type. This value specifies the location of the client or application that has registered to receive the authorization code",
          args: {
            name: "string",
          },
        },
        {
          name: "--code-verifier",
          description:
            "Used only when calling this API for the Authorization Code grant type. This value is generated by the client and presented to validate the original code challenge value the client passed at authorization time",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-token-with-iam",
      description:
        "Creates and returns access and refresh tokens for authorized client applications that are authenticated using any IAM entity, such as a service role or user. These tokens might contain defined scopes that specify permissions such as read:profile or write:data. Through downscoping, you can use the scopes parameter to request tokens with reduced permissions compared to the original client application's permissions or, if applicable, the refresh token's scopes. The access token can be used to fetch short-lived credentials for the assigned Amazon Web Services accounts or to access application APIs using bearer authentication.  This API is used with Signature Version 4. For more information, see Amazon Web Services Signature Version 4 for API Requests",
      options: [
        {
          name: "--client-id",
          description:
            "The unique identifier string for the client or application. This value is an application ARN that has OAuth grants configured",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-type",
          description:
            "Supports the following OAuth grant types: Authorization Code, Refresh Token, JWT Bearer, and Token Exchange. Specify one of the following values, depending on the grant type that you want: * Authorization Code - authorization_code  * Refresh Token - refresh_token  * JWT Bearer - urn:ietf:params:oauth:grant-type:jwt-bearer  * Token Exchange - urn:ietf:params:oauth:grant-type:token-exchange",
          args: {
            name: "string",
          },
        },
        {
          name: "--code",
          description:
            "Used only when calling this API for the Authorization Code grant type. This short-lived code is used to identify this authorization request. The code is obtained through a redirect from IAM Identity Center to a redirect URI persisted in the Authorization Code GrantOptions for the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--refresh-token",
          description:
            "Used only when calling this API for the Refresh Token grant type. This token is used to refresh short-lived tokens, such as the access token, that might expire. For more information about the features and limitations of the current IAM Identity Center OIDC implementation, see Considerations for Using this Guide in the IAM Identity Center OIDC API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--assertion",
          description:
            "Used only when calling this API for the JWT Bearer grant type. This value specifies the JSON Web Token (JWT) issued by a trusted token issuer. To authorize a trusted token issuer, configure the JWT Bearer GrantOptions for the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "The list of scopes for which authorization is requested. The access token that is issued is limited to the scopes that are granted. If the value is not specified, IAM Identity Center authorizes all scopes configured for the application, including the following default scopes: openid, aws, sts:identity_context",
          args: {
            name: "list",
          },
        },
        {
          name: "--redirect-uri",
          description:
            "Used only when calling this API for the Authorization Code grant type. This value specifies the location of the client or application that has registered to receive the authorization code",
          args: {
            name: "string",
          },
        },
        {
          name: "--subject-token",
          description:
            "Used only when calling this API for the Token Exchange grant type. This value specifies the subject of the exchange. The value of the subject token must be an access token issued by IAM Identity Center to a different client or application. The access token must have authorized scopes that indicate the requested application as a target audience",
          args: {
            name: "string",
          },
        },
        {
          name: "--subject-token-type",
          description:
            "Used only when calling this API for the Token Exchange grant type. This value specifies the type of token that is passed as the subject of the exchange. The following value is supported: * Access Token - urn:ietf:params:oauth:token-type:access_token",
          args: {
            name: "string",
          },
        },
        {
          name: "--requested-token-type",
          description:
            "Used only when calling this API for the Token Exchange grant type. This value specifies the type of token that the requester can receive. The following values are supported: * Access Token - urn:ietf:params:oauth:token-type:access_token  * Refresh Token - urn:ietf:params:oauth:token-type:refresh_token",
          args: {
            name: "string",
          },
        },
        {
          name: "--code-verifier",
          description:
            "Used only when calling this API for the Authorization Code grant type. This value is generated by the client and presented to validate the original code challenge value the client passed at authorization time",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "register-client",
      description:
        "Registers a public client with IAM Identity Center. This allows clients to perform authorization using the authorization code grant with Proof Key for Code Exchange (PKCE) or the device code grant",
      options: [
        {
          name: "--client-name",
          description: "The friendly name of the client",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-type",
          description:
            "The type of client. The service supports only public as a client type. Anything other than public will be rejected by the service",
          args: {
            name: "string",
          },
        },
        {
          name: "--scopes",
          description:
            "The list of scopes that are defined by the client. Upon authorization, this list is used to restrict permissions when granting an access token",
          args: {
            name: "list",
          },
        },
        {
          name: "--redirect-uris",
          description:
            "The list of redirect URI that are defined by the client. At completion of authorization, this list is used to restrict what locations the user agent can be redirected back to",
          args: {
            name: "list",
          },
        },
        {
          name: "--grant-types",
          description:
            "The list of OAuth 2.0 grant types that are defined by the client. This list is used to restrict the token granting flows available to the client. Supports the following OAuth 2.0 grant types: Authorization Code, Device Code, and Refresh Token.  * Authorization Code - authorization_code  * Device Code - urn:ietf:params:oauth:grant-type:device_code  * Refresh Token - refresh_token",
          args: {
            name: "list",
          },
        },
        {
          name: "--issuer-url",
          description:
            "The IAM Identity Center Issuer URL associated with an instance of IAM Identity Center. This value is needed for user access to resources through the client",
          args: {
            name: "string",
          },
        },
        {
          name: "--entitled-application-arn",
          description:
            "This IAM Identity Center application ARN is used to define administrator-managed configuration for public client access to resources. At authorization, the scopes, grants, and redirect URI available to this client will be restricted by this application resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "start-device-authorization",
      description:
        "Initiates device authorization by requesting a pair of verification codes from the authorization service",
      options: [
        {
          name: "--client-id",
          description:
            "The unique identifier string for the client that is registered with IAM Identity Center. This value should come from the persisted result of the RegisterClient API operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-secret",
          description:
            "A secret string that is generated for the client. This value should come from the persisted result of the RegisterClient API operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-url",
          description:
            "The URL for the Amazon Web Services access portal. For more information, see Using the Amazon Web Services access portal in the IAM Identity Center User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
  ],
};

export default completionSpec;
