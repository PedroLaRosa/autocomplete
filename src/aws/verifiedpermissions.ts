const completionSpec: Fig.Spec = {
  name: "verifiedpermissions",
  description:
    'Amazon Verified Permissions is a permissions management service from Amazon Web Services. You can use Verified Permissions to manage permissions for your application, and authorize user access based on those permissions. Using Verified Permissions, application developers can grant access based on information about the users, resources, and requested actions. You can also evaluate additional information like group membership, attributes of the resources, and session context, such as time of request and IP addresses. Verified Permissions manages these permissions by letting you create and store authorization policies for your applications, such as consumer-facing web sites and enterprise business systems. Verified Permissions uses Cedar as the policy language to express your permission requirements. Cedar supports both role-based access control (RBAC) and attribute-based access control (ABAC) authorization models. For more information about configuring, administering, and using Amazon Verified Permissions in your applications, see the Amazon Verified Permissions User Guide. For more information about the Cedar policy language, see the Cedar Policy Language Guide.  When you write Cedar policies that reference principals, resources and actions, you can define the unique identifiers used for each of those elements. We strongly recommend that you follow these best practices:    Use values like universally unique identifiers (UUIDs) for all principal and resource identifiers.  For example, if user jane leaves the company, and you later let someone else use the name jane, then that new user automatically gets access to everything granted by policies that still reference User::"jane". Cedar can’t distinguish between the new user and the old. This applies to both principal and resource identifiers. Always use identifiers that are guaranteed unique and never reused to ensure that you don’t unintentionally grant access because of the presence of an old identifier in a policy. Where you use a UUID for an entity, we recommend that you follow it with the // comment specifier and the ‘friendly’ name of your entity. This helps to make your policies easier to understand. For example: principal == User::"a1b2c3d4-e5f6-a1b2-c3d4-EXAMPLE11111", // alice    Do not include personally identifying, confidential, or sensitive information as part of the unique identifier for your principals or resources. These identifiers are included in log entries shared in CloudTrail trails.    Several operations return structures that appear similar, but have different purposes. As new functionality is added to the product, the structure used in a parameter of one operation might need to change in a way that wouldn\'t make sense for the same parameter in a different operation. To help you understand the purpose of each, the following naming convention is used for the structures:   Parameter type structures that end in Detail are used in Get operations.   Parameter type structures that end in Item are used in List operations.   Parameter type structures that use neither suffix are used in the mutating (create and update) operations',
  subcommands: [
    {
      name: "batch-get-policy",
      description:
        "Retrieves information about a group (batch) of policies.  The BatchGetPolicy operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission verifiedpermissions:GetPolicy in their IAM policies",
      options: [
        {
          name: "--requests",
          description:
            "An array of up to 100 policies you want information about",
          args: {
            name: "list",
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
      name: "batch-is-authorized",
      description:
        "Makes a series of decisions about multiple authorization requests for one principal or resource. Each request contains the equivalent content of an IsAuthorized request: principal, action, resource, and context. Either the principal or the resource parameter must be identical across all requests. For example, Verified Permissions won't evaluate a pair of requests where bob views photo1 and alice views photo2. Authorization of bob to view photo1 and photo2, or bob and alice to view photo1, are valid batches.  The request is evaluated against all policies in the specified policy store that match the entities that you declare. The result of the decisions is a series of Allow or Deny responses, along with the IDs of the policies that produced each decision. The entities of a BatchIsAuthorized API request can contain up to 100 principals and up to 100 resources. The requests of a BatchIsAuthorized API request can contain up to 30 requests.  The BatchIsAuthorized operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission verifiedpermissions:IsAuthorized in their IAM policies",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store. Policies in this policy store will be used to make the authorization decisions for the input. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--entities",
          description:
            "(Optional) Specifies the list of resources and principals and their associated attributes that Verified Permissions can examine when evaluating the policies. These additional entities and their attributes can be referenced and checked by conditional elements in the policies in the specified policy store.  You can include only principal and resource entities in this parameter; you can't include actions. You must specify actions in the schema",
          args: {
            name: "structure",
          },
        },
        {
          name: "--requests",
          description:
            "An array of up to 30 requests that you want Verified Permissions to evaluate",
          args: {
            name: "list",
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
      name: "batch-is-authorized-with-token",
      description:
        "Makes a series of decisions about multiple authorization requests for one token. The principal in this request comes from an external identity source in the form of an identity or access token, formatted as a JSON web token (JWT). The information in the parameters can also define additional context that Verified Permissions can include in the evaluations. The request is evaluated against all policies in the specified policy store that match the entities that you provide in the entities declaration and in the token. The result of the decisions is a series of Allow or Deny responses, along with the IDs of the policies that produced each decision. The entities of a BatchIsAuthorizedWithToken API request can contain up to 100 resources and up to 99 user groups. The requests of a BatchIsAuthorizedWithToken API request can contain up to 30 requests.  The BatchIsAuthorizedWithToken operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission verifiedpermissions:IsAuthorizedWithToken in their IAM policies",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store. Policies in this policy store will be used to make an authorization decision for the input. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-token",
          description:
            "Specifies an identity (ID) token for the principal that you want to authorize in each request. This token is provided to you by the identity provider (IdP) associated with the specified identity source. You must specify either an accessToken, an identityToken, or both. Must be an ID token. Verified Permissions returns an error if the token_use claim in the submitted token isn't id",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-token",
          description:
            "Specifies an access token for the principal that you want to authorize in each request. This token is provided to you by the identity provider (IdP) associated with the specified identity source. You must specify either an accessToken, an identityToken, or both. Must be an access token. Verified Permissions returns an error if the token_use claim in the submitted token isn't access",
          args: {
            name: "string",
          },
        },
        {
          name: "--entities",
          description:
            "(Optional) Specifies the list of resources and their associated attributes that Verified Permissions can examine when evaluating the policies. These additional entities and their attributes can be referenced and checked by conditional elements in the policies in the specified policy store.  You can't include principals in this parameter, only resource and action entities. This parameter can't include any entities of a type that matches the user or group entity types that you defined in your identity source.   The BatchIsAuthorizedWithToken operation takes principal attributes from  only  the identityToken or accessToken passed to the operation.   For action entities, you can include only their Identifier and EntityType",
          args: {
            name: "structure",
          },
        },
        {
          name: "--requests",
          description:
            "An array of up to 30 requests that you want Verified Permissions to evaluate",
          args: {
            name: "list",
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
      name: "create-identity-source",
      description:
        "Adds an identity source to a policy store–an Amazon Cognito user pool or OpenID Connect (OIDC) identity provider (IdP).  After you create an identity source, you can use the identities provided by the IdP as proxies for the principal in authorization queries that use the IsAuthorizedWithToken or BatchIsAuthorizedWithToken API operations. These identities take the form of tokens that contain claims about the user, such as IDs, attributes and group memberships. Identity sources provide identity (ID) tokens and access tokens. Verified Permissions derives information about your user and session from token claims. Access tokens provide action context to your policies, and ID tokens provide principal Attributes.  Tokens from an identity source user continue to be usable until they expire. Token revocation and resource deletion have no effect on the validity of a token in your policy store   To reference a user from this identity source in your Cedar policies, refer to the following syntax examples.   Amazon Cognito user pool: Namespace::[Entity type]::[User pool ID]|[user principal attribute], for example MyCorp::User::us-east-1_EXAMPLE|a1b2c3d4-5678-90ab-cdef-EXAMPLE11111.   OpenID Connect (OIDC) provider: Namespace::[Entity type]::[entityIdPrefix]|[user principal attribute], for example MyCorp::User::MyOIDCProvider|a1b2c3d4-5678-90ab-cdef-EXAMPLE22222.     Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations",
      options: [
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an ConflictException error. Verified Permissions recognizes a ClientToken for eight hours. After eight hours, the next request with the same parameters performs the operation again regardless of the value of ClientToken",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store in which you want to store this identity source. Only policies and requests made using this policy store can reference identities from the identity provider configured in the new identity source. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "Specifies the details required to communicate with the identity provider (IdP) associated with this identity source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--principal-entity-type",
          description:
            "Specifies the namespace and data type of the principals generated for identities authenticated by the new identity source",
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
      name: "create-policy",
      description:
        "Creates a Cedar policy and saves it in the specified policy store. You can create either a static policy or a policy linked to a policy template.   To create a static policy, provide the Cedar policy text in the StaticPolicy section of the PolicyDefinition.   To create a policy that is dynamically linked to a policy template, specify the policy template ID and the principal and resource to associate with this policy in the templateLinked section of the PolicyDefinition. If the policy template is ever updated, any policies linked to the policy template automatically use the updated template.    Creating a policy causes it to be validated against the schema in the policy store. If the policy doesn't pass validation, the operation fails and the policy isn't stored.   Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations",
      options: [
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an ConflictException error. Verified Permissions recognizes a ClientToken for eight hours. After eight hours, the next request with the same parameters performs the operation again regardless of the value of ClientToken",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-store-id",
          description:
            "Specifies the PolicyStoreId of the policy store you want to store the policy in. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--definition",
          description:
            "A structure that specifies the policy type and content to use for the new policy. You must include either a static or a templateLinked element. The policy content must be written in the Cedar policy language",
          args: {
            name: "structure",
          },
        },
        {
          name: "--name",
          description:
            "Specifies a name for the policy that is unique among all policies within the policy store. You can use the name in place of the policy ID in API operations that reference the policy. The name must be prefixed with name/. If you specify a name that is already associated with another policy in the policy store, you receive a ConflictException error",
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
      name: "create-policy-store",
      description:
        "Creates a policy store. A policy store is a container for policy resources.  As of May 2026, Verified Permissions has aligned with Cedar and now supports multiple namespaces.   Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations",
      options: [
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an ConflictException error. Verified Permissions recognizes a ClientToken for eight hours. After eight hours, the next request with the same parameters performs the operation again regardless of the value of ClientToken",
          args: {
            name: "string",
          },
        },
        {
          name: "--validation-settings",
          description:
            "Specifies the validation setting for this policy store. Currently, the only valid and required value is Mode.  We recommend that you turn on STRICT mode only after you define a schema. If a schema doesn't exist, then STRICT mode causes any policy to fail validation, and Verified Permissions rejects the policy. You can turn off validation by using the UpdatePolicyStore. Then, when you have a schema defined, use UpdatePolicyStore again to turn validation back on",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description:
            "Descriptive text that you can provide to help with identification of the current policy store",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "Specifies whether the policy store can be deleted. If enabled, the policy store can't be deleted. The default state is DISABLED",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
          },
        },
        {
          name: "--encryption-settings",
          description:
            "Specifies the encryption settings used to encrypt the policy store and their child resources. Allows for the ability to use a customer owned KMS key for encryption of data. This is an optional field to be used when providing a customer-managed KMS key for encryption",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The list of key-value pairs to associate with the policy store",
          args: {
            name: "map",
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
      name: "create-policy-store-alias",
      description:
        "Creates a policy store alias for the specified policy store. A policy store alias is an alternative identifier that you can use to reference a policy store in API operations. This operation is idempotent. If multiple CreatePolicyStoreAlias requests are made where the aliasName and policyStoreId fields are the same between the requests, subsequent requests will be ignored. For each duplicate CreatePolicyStoreAlias request, a Success response will be returned and a new policy store alias will not be created.  Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations",
      options: [
        {
          name: "--alias-name",
          description:
            "Specifies the name of the policy store alias to create. The name must be unique within your Amazon Web Services account and Amazon Web Services Region.  The alias name must always be prefixed with policy-store-alias/",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store to associate with the alias.  The associated policy store must be specified using its ID. The alias name cannot be used",
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
      name: "create-policy-template",
      description:
        "Creates a policy template. A template can use placeholders for the principal and resource. A template must be instantiated into a policy by associating it with specific principals and resources to use for the placeholders. That instantiated policy can then be considered in authorization decisions. The instantiated policy works identically to any other policy, except that it is dynamically linked to the template. If the template changes, then any policies that are linked to that template are immediately updated as well.  Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations",
      options: [
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an ConflictException error. Verified Permissions recognizes a ClientToken for eight hours. After eight hours, the next request with the same parameters performs the operation again regardless of the value of ClientToken",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-store-id",
          description:
            "The ID of the policy store in which to create the policy template. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Specifies a description for the policy template",
          args: {
            name: "string",
          },
        },
        {
          name: "--statement",
          description:
            "Specifies the content that you want to use for the new policy template, written in the Cedar policy language",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "Specifies a name for the policy template that is unique among all policy templates within the policy store. You can use the name in place of the policy template ID in API operations that reference the policy template. The name must be prefixed with name/. If you specify a name that is already associated with another policy template in the policy store, you receive a ConflictException error",
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
      name: "delete-identity-source",
      description:
        "Deletes an identity source that references an identity provider (IdP) such as Amazon Cognito. After you delete the identity source, you can no longer use tokens for identities from that identity source to represent principals in authorization queries made using IsAuthorizedWithToken. operations",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store that contains the identity source that you want to delete. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-source-id",
          description:
            "Specifies the ID of the identity source that you want to delete",
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
      name: "delete-policy",
      description:
        "Deletes the specified policy from the policy store. This operation is idempotent; if you specify a policy that doesn't exist, the request response returns a successful HTTP 200 status code",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store that contains the policy that you want to delete. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-id",
          description:
            "Specifies the ID of the policy that you want to delete. You can use the policy name in place of the policy ID. When using a name, prefix it with name/. For example:   ID: SPEXAMPLEabcdefg111111    Name: name/example-policy",
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
      name: "delete-policy-store",
      description:
        "Deletes the specified policy store. This operation is idempotent. If you specify a policy store that does not exist, the request response will still return a successful HTTP 200 status code",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store that you want to delete.  To specify a policy store, the alias name cannot be used. Only the ID can be used",
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
      name: "delete-policy-store-alias",
      description:
        "Deletes the specified policy store alias. This operation is idempotent. If you specify a policy store alias that does not exist, the request response will still return a successful HTTP 200 status code. By default, when a policy store alias is deleted, it enters the PendingDeletion state. When a policy store alias is in the PendingDeletion state, new policy store aliases cannot be created with the same name. If the policy store alias is used in an API that has a policyStoreId field, the operation will fail with a ResourceNotFound exception. To immediately delete a policy store alias and bypass the PendingDeletion state, set the deletionMode parameter to HardDelete.  Verified Permissions is eventually consistent. If you hard delete a policy store alias and then immediately recreate it to be associated with a different policy store, requests that reference this alias may continue to be evaluated against the previously associated policy store for a short period of time",
      options: [
        {
          name: "--alias-name",
          description:
            "Specifies the name of the policy store alias that you want to delete.  The alias name must always be prefixed with policy-store-alias/",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-mode",
          description:
            "Specifies the deletion mode for the policy store alias. The valid values are:    SoftDelete – The policy store alias enters the PendingDeletion state. This is the default behavior when no deletionMode is specified.    HardDelete – The policy store alias is immediately deleted, bypassing the PendingDeletion state",
          args: {
            name: "string",
            suggestions: ["SoftDelete", "HardDelete"],
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
      name: "delete-policy-template",
      description:
        "Deletes the specified policy template from the policy store.  This operation also deletes any policies that were created from the specified policy template. Those policies are immediately removed from all future API responses, and are asynchronously deleted from the policy store",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store that contains the policy template that you want to delete. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-template-id",
          description:
            "Specifies the ID of the policy template that you want to delete. You can use the policy template name in place of the policy template ID. When using a name, prefix it with name/. For example:   ID: PTEXAMPLEabcdefg111111    Name: name/example-policy-template",
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
      name: "get-identity-source",
      description: "Retrieves the details about the specified identity source",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store that contains the identity source you want information about. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-source-id",
          description:
            "Specifies the ID of the identity source you want information about",
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
      name: "get-policy",
      description: "Retrieves information about the specified policy",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store that contains the policy that you want information about. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-id",
          description:
            "Specifies the ID of the policy you want information about. You can use the policy name in place of the policy ID. When using a name, prefix it with name/. For example:   ID: SPEXAMPLEabcdefg111111    Name: name/example-policy",
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
      name: "get-policy-store",
      description: "Retrieves details about a policy store",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the policy store that you want information about. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies whether to return the tags that are attached to the policy store. If this parameter is included in the API call, the tags are returned, otherwise they are not returned.  If this parameter is included in the API call but there are no tags attached to the policy store, the tags response parameter is omitted from the response",
        },
        {
          name: "--no-tags",
          description:
            "Specifies whether to return the tags that are attached to the policy store. If this parameter is included in the API call, the tags are returned, otherwise they are not returned.  If this parameter is included in the API call but there are no tags attached to the policy store, the tags response parameter is omitted from the response",
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
      name: "get-policy-store-alias",
      description: "Retrieves details about the specified policy store alias",
      options: [
        {
          name: "--alias-name",
          description:
            "Specifies the name of the policy store alias that you want information about.  The alias name must always be prefixed with policy-store-alias/",
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
      name: "get-policy-template",
      description:
        "Retrieve the details for the specified policy template in the specified policy store",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store that contains the policy template that you want information about. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-template-id",
          description:
            "Specifies the ID of the policy template that you want information about. You can use the policy template name in place of the policy template ID. When using a name, prefix it with name/. For example:   ID: PTEXAMPLEabcdefg111111    Name: name/example-policy-template",
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
      name: "get-schema",
      description:
        "Retrieve the details for the specified schema in the specified policy store",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store that contains the schema. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
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
      name: "is-authorized",
      description:
        "Makes an authorization decision about a service request described in the parameters. The information in the parameters can also define additional context that Verified Permissions can include in the evaluation. The request is evaluated against all matching policies in the specified policy store. The result of the decision is either Allow or Deny, along with a list of the policies that resulted in the decision",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store. Policies in this policy store will be used to make an authorization decision for the input. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal",
          description:
            "Specifies the principal for which the authorization decision is to be made",
          args: {
            name: "structure",
          },
        },
        {
          name: "--action",
          description:
            "Specifies the requested action to be authorized. For example, is the principal authorized to perform this action on the resource?",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource",
          description:
            "Specifies the resource for which the authorization decision is to be made",
          args: {
            name: "structure",
          },
        },
        {
          name: "--context",
          description:
            "Specifies additional context that can be used to make more granular authorization decisions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--entities",
          description:
            "(Optional) Specifies the list of resources and principals and their associated attributes that Verified Permissions can examine when evaluating the policies. These additional entities and their attributes can be referenced and checked by conditional elements in the policies in the specified policy store.  You can include only principal and resource entities in this parameter; you can't include actions. You must specify actions in the schema",
          args: {
            name: "structure",
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
      name: "is-authorized-with-token",
      description:
        "Makes an authorization decision about a service request described in the parameters. The principal in this request comes from an external identity source in the form of an identity token formatted as a JSON web token (JWT). The information in the parameters can also define additional context that Verified Permissions can include in the evaluation. The request is evaluated against all matching policies in the specified policy store. The result of the decision is either Allow or Deny, along with a list of the policies that resulted in the decision. Verified Permissions validates each token that is specified in a request by checking its expiration date and its signature.  Tokens from an identity source user continue to be usable until they expire. Token revocation and resource deletion have no effect on the validity of a token in your policy store",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store. Policies in this policy store will be used to make an authorization decision for the input. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-token",
          description:
            "Specifies an identity token for the principal to be authorized. This token is provided to you by the identity provider (IdP) associated with the specified identity source. You must specify either an accessToken, an identityToken, or both. Must be an ID token. Verified Permissions returns an error if the token_use claim in the submitted token isn't id",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-token",
          description:
            "Specifies an access token for the principal to be authorized. This token is provided to you by the identity provider (IdP) associated with the specified identity source. You must specify either an accessToken, an identityToken, or both. Must be an access token. Verified Permissions returns an error if the token_use claim in the submitted token isn't access",
          args: {
            name: "string",
          },
        },
        {
          name: "--action",
          description:
            "Specifies the requested action to be authorized. Is the specified principal authorized to perform this action on the specified resource",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource",
          description:
            "Specifies the resource for which the authorization decision is made. For example, is the principal allowed to perform the action on the resource?",
          args: {
            name: "structure",
          },
        },
        {
          name: "--context",
          description:
            "Specifies additional context that can be used to make more granular authorization decisions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--entities",
          description:
            "(Optional) Specifies the list of resources and their associated attributes that Verified Permissions can examine when evaluating the policies. These additional entities and their attributes can be referenced and checked by conditional elements in the policies in the specified policy store.  You can't include principals in this parameter, only resource and action entities. This parameter can't include any entities of a type that matches the user or group entity types that you defined in your identity source.   The IsAuthorizedWithToken operation takes principal attributes from  only  the identityToken or accessToken passed to the operation.   For action entities, you can include only their Identifier and EntityType",
          args: {
            name: "structure",
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
      name: "list-identity-sources",
      description:
        "Returns a paginated list of all of the identity sources defined in the specified policy store",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store that contains the identity sources that you want to list. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results. If you do not specify this parameter, the operation defaults to 10 identity sources per response. You can specify a maximum of 50 identity sources per response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "Specifies characteristics of an identity source that you can use to limit the output to matching identity sources",
          args: {
            name: "list",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-policies",
      description:
        "Returns a paginated list of all policies stored in the specified policy store",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store you want to list policies from. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results. If you do not specify this parameter, the operation defaults to 10 policies per response. You can specify a maximum of 50 policies per response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description:
            "Specifies a filter that limits the response to only policies that match the specified criteria. For example, you list only the policies that reference a specified principal",
          args: {
            name: "structure",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-policy-store-aliases",
      description:
        "Returns a paginated list of all policy store aliases in the calling Amazon Web Services account",
      options: [
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results. If you do not specify this parameter, the operation defaults to 5 policy store aliases per response. You can specify a maximum of 50 policy store aliases per response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description:
            "Specifies a filter to narrow the results. You can filter by policyStoreId to list only the policy store aliases associated with a specific policy store",
          args: {
            name: "structure",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-policy-stores",
      description:
        "Returns a paginated list of all policy stores in the calling Amazon Web Services account",
      options: [
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results. If you do not specify this parameter, the operation defaults to 10 policy stores per response. You can specify a maximum of 50 policy stores per response",
          args: {
            name: "integer",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-policy-templates",
      description:
        "Returns a paginated list of all policy templates in the specified policy store",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store that contains the policy templates you want to list. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results. If you do not specify this parameter, the operation defaults to 10 policy templates per response. You can specify a maximum of 50 policy templates per response",
          args: {
            name: "integer",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-tags-for-resource",
      description:
        "Returns the tags associated with the specified Amazon Verified Permissions resource. In Verified Permissions, policy stores can be tagged",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource for which you want to view tags",
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
      name: "put-schema",
      description:
        "Creates or updates the policy schema in the specified policy store. The schema is used to validate any Cedar policies and policy templates submitted to the policy store. Any changes to the schema validate only policies and templates submitted after the schema change. Existing policies and templates are not re-evaluated against the changed schema. If you later update a policy, then it is evaluated against the new schema at that time.  Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store in which to place the schema. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--definition",
          description:
            "Specifies the definition of the schema to be stored. The schema definition must be written in Cedar schema JSON",
          args: {
            name: "structure",
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
      name: "tag-resource",
      description:
        "Assigns one or more tags (key-value pairs) to the specified Amazon Verified Permissions resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Verified Permissions, policy stores can be tagged. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource that you're adding tags to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The list of key-value pairs to associate with the resource",
          args: {
            name: "map",
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
      name: "untag-resource",
      description:
        "Removes one or more tags from the specified Amazon Verified Permissions resource. In Verified Permissions, policy stores can be tagged",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource from which you are removing tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The list of tag keys to remove from the resource",
          args: {
            name: "list",
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
      name: "update-identity-source",
      description:
        "Updates the specified identity source to use a new identity provider (IdP), or to change the mapping of identities from the IdP to a different principal entity type.  Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store that contains the identity source that you want to update. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-source-id",
          description:
            "Specifies the ID of the identity source that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--update-configuration",
          description:
            "Specifies the details required to communicate with the identity provider (IdP) associated with this identity source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--principal-entity-type",
          description:
            "Specifies the data type of principals generated for identities authenticated by the identity source",
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
      name: "update-policy",
      description:
        "Modifies a Cedar static policy in the specified policy store. You can change only certain elements of the UpdatePolicyDefinition parameter. You can directly update only static policies. To change a template-linked policy, you must update the template instead, using UpdatePolicyTemplate.    If policy validation is enabled in the policy store, then updating a static policy causes Verified Permissions to validate the policy against the schema in the policy store. If the updated static policy doesn't pass validation, the operation fails and the update isn't stored.   When you edit a static policy, you can change only certain elements of a static policy:   The action referenced by the policy.    A condition clause, such as when and unless.    You can't change these elements of a static policy:    Changing a policy from a static policy to a template-linked policy.    Changing the effect of a static policy from permit or forbid.    The principal referenced by a static policy.    The resource referenced by a static policy.      To update a template-linked policy, you must update the template instead.      Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store that contains the policy that you want to update. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-id",
          description:
            "Specifies the ID of the policy that you want to update. To find this value, you can use ListPolicies. You can use the policy name in place of the policy ID. When using a name, prefix it with name/. For example:   ID: SPEXAMPLEabcdefg111111    Name: name/example-policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--definition",
          description:
            "Specifies the updated policy content that you want to replace on the specified policy. The content must be valid Cedar policy language text. If you don't specify this parameter, the existing policy definition remains unchanged. You can change only the following elements from the policy definition:   The action referenced by the policy.   Any conditional clauses, such as when or unless clauses.   You can't change the following elements:   Changing from static to templateLinked.   Changing the effect of the policy from permit or forbid.   The principal referenced by the policy.   The resource referenced by the policy",
          args: {
            name: "structure",
          },
        },
        {
          name: "--name",
          description:
            'Specifies a name for the policy that is unique among all policies within the policy store. You can use the name in place of the policy ID in API operations that reference the policy. The name must be prefixed with name/.  If you don\'t include the name in an update request, the existing name is unchanged. To remove a name, set it to an empty string ("").  If you specify a name that is already associated with another policy in the policy store, you receive a ConflictException error',
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
      name: "update-policy-store",
      description:
        "Modifies the validation setting for a policy store.  Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store that you want to update To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--validation-settings",
          description:
            "A structure that defines the validation settings that want to enable for the policy store",
          args: {
            name: "structure",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "Specifies whether the policy store can be deleted. If enabled, the policy store can't be deleted. When you call UpdatePolicyStore, this parameter is unchanged unless explicitly included in the call",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
          },
        },
        {
          name: "--description",
          description:
            "Descriptive text that you can provide to help with identification of the current policy store",
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
      name: "update-policy-template",
      description:
        "Updates the specified policy template. You can update only the description and the some elements of the policyBody.   Changes you make to the policy template content are immediately (within the constraints of eventual consistency) reflected in authorization decisions that involve all template-linked policies instantiated from this template.   Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations",
      options: [
        {
          name: "--policy-store-id",
          description:
            "Specifies the ID of the policy store that contains the policy template that you want to update. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example:   ID: PSEXAMPLEabcdefg111111    Alias name: policy-store-alias/example-policy-store    To view aliases, use ListPolicyStoreAliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-template-id",
          description:
            "Specifies the ID of the policy template that you want to update. You can use the policy template name in place of the policy template ID. When using a name, prefix it with name/. For example:   ID: PTEXAMPLEabcdefg111111    Name: name/example-policy-template",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "Specifies a new description to apply to the policy template",
          args: {
            name: "string",
          },
        },
        {
          name: "--statement",
          description:
            "Specifies new statement content written in Cedar policy language to replace the current body of the policy template. You can change only the following elements of the policy body:   The action referenced by the policy template.   Any conditional clauses, such as when or unless clauses.   You can't change the following elements:   The effect (permit or forbid) of the policy template.   The principal referenced by the policy template.   The resource referenced by the policy template",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            'Specifies a name for the policy template that is unique among all policy templates within the policy store. You can use the name in place of the policy template ID in API operations that reference the policy template. The name must be prefixed with name/.  If you don\'t include the name in an update request, the existing name is unchanged. To remove a name, set it to an empty string ("").  If you specify a name that is already associated with another policy template in the policy store, you receive a ConflictException error',
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
