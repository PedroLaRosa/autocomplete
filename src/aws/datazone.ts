const completionSpec: Fig.Spec = {
  name: "datazone",
  description:
    "Amazon DataZone is a data management service that enables you to catalog, discover, govern, share, and analyze your data. With Amazon DataZone, you can share and access your data across accounts and supported regions. Amazon DataZone simplifies your experience across Amazon Web Services services, including, but not limited to, Amazon Redshift, Amazon Athena, Amazon Web Services Glue, and Amazon Web Services Lake Formation",
  subcommands: [
    {
      name: "accept-predictions",
      description:
        "Accepts automatically generated business-friendly metadata for your Amazon DataZone assets",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description: "The revision that is to be made to the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept-rule",
          description:
            "Specifies the rule (or the conditions) under which a prediction can be accepted",
          args: {
            name: "structure",
          },
        },
        {
          name: "--accept-choices",
          description:
            "Specifies the prediction (aka, the automatically generated piece of metadata) and the target (for example, a column name) that can be accepted",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided",
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
      name: "accept-subscription-request",
      description: "Accepts a subscription request to a specific asset",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The Amazon DataZone domain where the specified subscription request is being accepted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The unique identifier of the subscription request that is to be accepted",
          args: {
            name: "string",
          },
        },
        {
          name: "--decision-comment",
          description:
            "A description that specifies the reason for accepting the specified subscription request",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-scopes",
          description: "The asset scopes of the accept subscription request",
          args: {
            name: "list",
          },
        },
        {
          name: "--asset-permissions",
          description:
            "The asset permissions of the accept subscription request",
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
      name: "add-entity-owner",
      description: "Adds the owner of an entity (a domain unit)",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain in which you want to add the entity owner",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description: "The type of an entity",
          args: {
            name: "string",
            suggestions: ["DOMAIN_UNIT"],
          },
        },
        {
          name: "--entity-identifier",
          description: "The ID of the entity to which you want to add an owner",
          args: {
            name: "string",
          },
        },
        {
          name: "--owner",
          description: "The owner that you want to add to the entity",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "add-policy-grant",
      description:
        "Adds a policy grant (an authorization policy) to a specified entity, including domain units, environment blueprint configurations, or environment profiles",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to add a policy grant",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description:
            "The type of entity (resource) to which the grant is added",
          args: {
            name: "string",
            suggestions: [
              "DOMAIN_UNIT",
              "ENVIRONMENT_BLUEPRINT_CONFIGURATION",
              "ENVIRONMENT_PROFILE",
              "ASSET_TYPE",
            ],
          },
        },
        {
          name: "--entity-identifier",
          description:
            "The ID of the entity (resource) to which you want to add a policy grant",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-type",
          description: "The type of policy that you want to grant",
          args: {
            name: "string",
            suggestions: [
              "CREATE_DOMAIN_UNIT",
              "OVERRIDE_DOMAIN_UNIT_OWNERS",
              "ADD_TO_PROJECT_MEMBER_POOL",
              "OVERRIDE_PROJECT_OWNERS",
              "CREATE_GLOSSARY",
              "CREATE_FORM_TYPE",
              "CREATE_ASSET_TYPE",
              "CREATE_PROJECT",
              "CREATE_ENVIRONMENT_PROFILE",
              "DELEGATE_CREATE_ENVIRONMENT_PROFILE",
              "CREATE_ENVIRONMENT",
              "CREATE_ENVIRONMENT_FROM_BLUEPRINT",
              "CREATE_PROJECT_FROM_PROJECT_PROFILE",
              "USE_ASSET_TYPE",
            ],
          },
        },
        {
          name: "--principal",
          description: "The principal to whom the permissions are granted",
          args: {
            name: "structure",
          },
        },
        {
          name: "--detail",
          description: "The details of the policy grant",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "associate-environment-role",
      description: "Associates the environment role in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the environment role is associated",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description: "The ID of the Amazon DataZone environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-role-arn",
          description: "The ARN of the environment role",
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
      name: "associate-governed-terms",
      description: "Associates governed terms with an asset",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where governed terms are to be associated with an asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-identifier",
          description:
            "The ID of the asset with which you want to associate a governed term",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description:
            "The type of the asset with which you want to associate a governed term",
          args: {
            name: "string",
            suggestions: ["ASSET"],
          },
        },
        {
          name: "--governed-glossary-terms",
          description: "The glossary terms in a restricted glossary",
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
      name: "batch-get-attributes-metadata",
      description: "Gets the attribute metadata",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The domain ID where you want to get the attribute metadata",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description:
            "The entity type for which you want to get attribute metadata",
          args: {
            name: "string",
            suggestions: ["ASSET", "LISTING"],
          },
        },
        {
          name: "--entity-identifier",
          description:
            "The entity ID for which you want to get attribute metadata",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-revision",
          description:
            "The entity revision for which you want to get attribute metadata",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-identifiers",
          description: "The attribute identifier",
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
      name: "batch-put-attributes-metadata",
      description: "Writes the attribute metadata",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The domain ID where you want to write the attribute metadata",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description:
            "The entity type for which you want to write the attribute metadata",
          args: {
            name: "string",
            suggestions: ["ASSET", "LISTING"],
          },
        },
        {
          name: "--entity-identifier",
          description:
            "The entity ID for which you want to write the attribute metadata",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes",
          description: "The attributes of the metadata",
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
      name: "cancel-metadata-generation-run",
      description:
        "Cancels the metadata generation run. Prerequisites:   The run must exist and be in a cancelable status (e.g., SUBMITTED, IN_PROGRESS).    Runs in SUCCEEDED status cannot be cancelled.   User must have access to the run and cancel permissions",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the metadata generation run is to be cancelled",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the metadata generation run",
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
      name: "cancel-subscription",
      description: "Cancels the subscription to the specified asset",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The unique identifier of the Amazon DataZone domain where the subscription request is being cancelled",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The unique identifier of the subscription that is being cancelled",
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
      name: "create-account-pool",
      description: "Creates an account pool",
      options: [
        {
          name: "--domain-identifier",
          description: "The ID of the domain where the account pool is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the account pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the account pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--resolution-strategy",
          description:
            "The mechanism used to resolve the account selection from the account pool",
          args: {
            name: "string",
            suggestions: ["MANUAL"],
          },
        },
        {
          name: "--account-source",
          description:
            "The source of accounts for the account pool. In the current release, it's either a static list of accounts provided by the customer or a custom Amazon Web Services Lambda handler",
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
      name: "create-asset",
      description:
        "Creates an asset in Amazon DataZone catalog. Before creating assets, make sure that the following requirements are met:    --domain-identifier must refer to an existing domain.    --owning-project-identifier must be a valid project within the domain.   Asset type must be created beforehand using create-asset-type, or be a supported system-defined type. For more information, see create-asset-type.    --type-revision (if used) must match a valid revision of the asset type.    formsInput is required when it is associated as required in the asset-type. For more information, see create-form-type.   Form content must include all required fields as per the form schema (e.g., bucketArn).   You must invoke the following pre-requisite commands before invoking this API:    CreateFormType     CreateAssetType",
      options: [
        {
          name: "--name",
          description: "Asset name",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description: "Amazon DataZone domain where the asset is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-identifier",
          description:
            "The external identifier of the asset. If the value for the externalIdentifier parameter is specified, it must be a unique value",
          args: {
            name: "string",
          },
        },
        {
          name: "--type-identifier",
          description: "The unique identifier of this asset's type",
          args: {
            name: "string",
          },
        },
        {
          name: "--type-revision",
          description: "The revision of this asset's type",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Asset description",
          args: {
            name: "string",
          },
        },
        {
          name: "--glossary-terms",
          description: "Glossary terms attached to the asset",
          args: {
            name: "list",
          },
        },
        {
          name: "--forms-input",
          description: "Metadata forms attached to the asset",
          args: {
            name: "list",
          },
        },
        {
          name: "--owning-project-identifier",
          description:
            "The unique identifier of the project that owns this asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--prediction-configuration",
          description:
            "The configuration of the automatically generated business-friendly metadata for the asset",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "create-asset-filter",
      description:
        "Creates a data asset filter. Asset filters provide a sophisticated way to create controlled views of data assets by selecting specific columns or applying row-level filters. This capability is crucial for organizations that need to share data while maintaining security and privacy controls. For example, your database might be filtered to show only non-PII fields to certain users, or sales data might be filtered by region for different regional teams. Asset filters enable fine-grained access control while maintaining a single source of truth. Prerequisites:   A valid domain (--domain-identifier) must exist.    A data asset (--asset-identifier) must already be created under that domain.   The asset must have the referenced columns available in its schema for column-based filtering.   You cannot specify both (columnConfiguration, rowConfiguration)at the same time",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain in which you want to create an asset filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-identifier",
          description: "The ID of the data asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the asset filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the asset filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description: "The configuration of the asset filter",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "create-asset-revision",
      description:
        "Creates a revision of the asset. Asset revisions represent new versions of existing assets, capturing changes to either the underlying data or its metadata. They maintain a historical record of how assets evolve over time, who made changes, and when those changes occurred. This versioning capability is crucial for governance and compliance, allowing organizations to track changes, understand their impact, and roll back if necessary. Prerequisites:   Asset must already exist in the domain with identifier.     formsInput is required when asset has the form type. typeRevision should be the latest version of form type.    The form content must include all required fields (e.g., bucketArn for S3ObjectCollectionForm).   The owning project of the original asset must still exist and be active.   User must have write access to the project and domain",
      options: [
        {
          name: "--name",
          description: "Te revised name of the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The unique identifier of the domain where the asset is being revised",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--type-revision",
          description: "The revision type of the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The revised description of the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--glossary-terms",
          description:
            "The glossary terms to be attached to the asset as part of asset revision",
          args: {
            name: "list",
          },
        },
        {
          name: "--forms-input",
          description:
            "The metadata forms to be attached to the asset as part of asset revision",
          args: {
            name: "list",
          },
        },
        {
          name: "--prediction-configuration",
          description:
            "The configuration of the automatically generated business-friendly metadata for the asset",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "create-asset-type",
      description:
        "Creates a custom asset type. Prerequisites:   The formsInput field is required, however, can be passed as empty (e.g. -forms-input {}).    You must have CreateAssetType permissions.   The domain-identifier and owning-project-identifier must be valid and active.   The name of the asset type must be unique within the domain — duplicate names will cause failure.   JSON input must be valid — incorrect formatting causes Invalid JSON errors",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The unique identifier of the Amazon DataZone domain where the custom asset type is being created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the custom asset type",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The descripton of the custom asset type",
          args: {
            name: "string",
          },
        },
        {
          name: "--forms-input",
          description:
            "The metadata forms that are to be attached to the custom asset type",
          args: {
            name: "map",
          },
        },
        {
          name: "--owning-project-identifier",
          description:
            "The identifier of the Amazon DataZone project that is to own the custom asset type",
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
      name: "create-connection",
      description:
        "Creates a new connection. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services",
      options: [
        {
          name: "--aws-location",
          description: "The location where the connection is created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--configurations",
          description: "The configurations of the connection",
          args: {
            name: "list",
          },
        },
        {
          name: "--description",
          description: "A connection description",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description: "The ID of the domain where the connection is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The ID of the environment where the connection is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The connection name",
          args: {
            name: "string",
          },
        },
        {
          name: "--props",
          description: "The connection props",
          args: {
            name: "structure",
          },
        },
        {
          name: "--enable-trusted-identity-propagation",
          description:
            "Specifies whether the trusted identity propagation is enabled",
        },
        {
          name: "--no-enable-trusted-identity-propagation",
          description:
            "Specifies whether the trusted identity propagation is enabled",
        },
        {
          name: "--scope",
          description: "The scope of the connection",
          args: {
            name: "string",
            suggestions: ["DOMAIN", "PROJECT"],
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
      name: "create-data-product",
      description:
        "Creates a data product. A data product is a comprehensive package that combines data assets with their associated metadata, documentation, and access controls. It's designed to serve specific business needs or use cases, making it easier for users to find and consume data appropriately. Data products include important information about data quality, freshness, and usage guidelines, effectively bridging the gap between data producers and consumers while ensuring proper governance. Prerequisites:   The domain must exist and be accessible.    The owning project must be valid and active.   The name must be unique within the domain (no existing data product with the same name).   User must have create permissions for data products in the project",
      options: [
        {
          name: "--domain-identifier",
          description: "The ID of the domain where the data product is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the data product",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-identifier",
          description: "The ID of the owning project of the data product",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the data product",
          args: {
            name: "string",
          },
        },
        {
          name: "--glossary-terms",
          description: "The glossary terms of the data product",
          args: {
            name: "list",
          },
        },
        {
          name: "--forms-input",
          description: "The metadata forms of the data product",
          args: {
            name: "list",
          },
        },
        {
          name: "--items",
          description: "The data assets of the data product",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "create-data-product-revision",
      description:
        "Creates a data product revision. Prerequisites:   The original data product must exist in the given domain.    User must have permissions on the data product.   The domain must be valid and accessible.   The new revision name must comply with naming constraints (if required)",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where the data product revision is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the data product revision",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the data product revision",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the data product revision",
          args: {
            name: "string",
          },
        },
        {
          name: "--glossary-terms",
          description: "The glossary terms of the data product revision",
          args: {
            name: "list",
          },
        },
        {
          name: "--items",
          description: "The data assets of the data product revision",
          args: {
            name: "list",
          },
        },
        {
          name: "--forms-input",
          description: "The metadata forms of the data product revision",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "create-data-source",
      description: "Creates an Amazon DataZone data source",
      options: [
        {
          name: "--name",
          description: "The name of the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain where the data source is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-identifier",
          description:
            "The identifier of the Amazon DataZone project in which you want to add this data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The unique identifier of the Amazon DataZone environment to which the data source publishes assets",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-identifier",
          description: "The ID of the connection",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of the data source. In Amazon DataZone, you can use data sources to import technical metadata of assets (data) from the source databases or data warehouses into Amazon DataZone. In the current release of Amazon DataZone, you can create and run data sources for Amazon Web Services Glue and Amazon Redshift",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "Specifies the configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--recommendation",
          description:
            "Specifies whether the business name generation is to be enabled for this data source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--enable-setting",
          description: "Specifies whether the data source is enabled",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
          },
        },
        {
          name: "--schedule",
          description: "The schedule of the data source runs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--publish-on-import",
          description:
            "Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog",
        },
        {
          name: "--no-publish-on-import",
          description:
            "Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog",
        },
        {
          name: "--asset-forms-input",
          description:
            "The metadata forms that are to be attached to the assets that this data source works with",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "create-designation",
      description:
        "Creates a new user-defined designation with a Cedar permit policy. The designation defines a named role that can be assigned to project members through CreateProjectMembership or granted through AddPolicyGrant",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which the designation is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the designation. The name must be unique within the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A human-readable description of the designation and its intended use",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The Cedar permit policy that defines the actions holders of this designation are allowed to perform",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "Specifies whether deletion protection is enabled for this designation. Defaults to true when omitted. When enabled, DeleteDesignation is rejected until protection is disabled through UpdateDesignation",
        },
        {
          name: "--no-deletion-protection",
          description:
            "Specifies whether deletion protection is enabled for this designation. Defaults to true when omitted. When enabled, DeleteDesignation is rejected until protection is disabled through UpdateDesignation",
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
      name: "create-domain",
      description: "Creates an Amazon DataZone domain",
      options: [
        {
          name: "--name",
          description: "The name of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--single-sign-on",
          description:
            "The single-sign on configuration of the Amazon DataZone domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--domain-execution-role",
          description:
            "The domain execution role that is created when an Amazon DataZone domain is created. The domain execution role is created in the Amazon Web Services account that houses the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-identifier",
          description:
            "The identifier of the Amazon Web Services Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags specified for the Amazon DataZone domain",
          args: {
            name: "map",
          },
        },
        {
          name: "--domain-version",
          description: "The version of the domain that is created",
          args: {
            name: "string",
            suggestions: ["V1", "V2"],
          },
        },
        {
          name: "--service-role",
          description: "The service role of the domain that is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "create-domain-unit",
      description: "Creates a domain unit in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to crate a domain unit",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the domain unit",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-domain-unit-identifier",
          description: "The ID of the parent domain unit",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the domain unit",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "create-environment",
      description: "Create an Amazon DataZone environment",
      options: [
        {
          name: "--project-identifier",
          description:
            "The identifier of the Amazon DataZone project in which this environment is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which the environment is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the Amazon DataZone environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the Amazon DataZone environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-profile-identifier",
          description:
            "The identifier of the environment profile that is used to create this Amazon DataZone environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-parameters",
          description:
            "The user parameters of this Amazon DataZone environment",
          args: {
            name: "list",
          },
        },
        {
          name: "--glossary-terms",
          description:
            "The glossary terms that can be used in this Amazon DataZone environment",
          args: {
            name: "list",
          },
        },
        {
          name: "--environment-account-identifier",
          description:
            "The ID of the account in which the environment is being created",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-account-region",
          description:
            "The region of the account in which the environment is being created",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-blueprint-identifier",
          description:
            "The ID of the blueprint with which the environment is being created.  This parameter is only valid for V1 domains. If provided for a V2 domain, the service returns a ValidationException",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-order",
          description: "The deployment order of the environment",
          args: {
            name: "integer",
          },
        },
        {
          name: "--environment-configuration-id",
          description: "The configuration ID of the environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-configuration-name",
          description: "The configuration name of the environment",
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
      name: "create-environment-action",
      description:
        "Creates an action for the environment, for example, creates a console link for an analytics tool that is available in this environment",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the environment action is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The ID of the environment in which the environment action is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the environment action",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description: "The parameters of the environment action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description:
            "The description of the environment action that is being created in the environment",
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
      name: "create-environment-blueprint",
      description: "Creates a Amazon DataZone blueprint",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the domain in which this blueprint is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of this Amazon DataZone blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the Amazon DataZone blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-properties",
          description:
            "The provisioning properties of this Amazon DataZone blueprint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-parameters",
          description: "The user parameters of this Amazon DataZone blueprint",
          args: {
            name: "list",
          },
        },
        {
          name: "--blueprint-category",
          description:
            "The category of the Amazon DataZone blueprint. The only valid value is TOOLING, which creates a blueprint that provisions the tooling resources of a project",
          args: {
            name: "string",
            suggestions: ["TOOLING"],
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
      name: "create-environment-profile",
      description: "Creates an Amazon DataZone environment profile",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this environment profile is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of this Amazon DataZone environment profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of this Amazon DataZone environment profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-blueprint-identifier",
          description:
            "The ID of the blueprint with which this environment profile is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-identifier",
          description:
            "The identifier of the project in which to create the environment profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-parameters",
          description:
            "The user parameters of this Amazon DataZone environment profile",
          args: {
            name: "list",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The Amazon Web Services account in which the Amazon DataZone environment is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-region",
          description:
            "The Amazon Web Services region in which this environment profile is created",
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
      name: "create-form-type",
      description:
        'Creates a metadata form type. Prerequisites:   The domain must exist and be in an ENABLED state.    The owning project must exist and be accessible.   The name must be unique within the domain.   For custom form types, to indicate that a field should be searchable, annotate it with @amazon.datazone#searchable. By default, searchable fields are indexed for semantic search, where related query terms will match the attribute value even if they are not stemmed or keyword matches. To indicate that a field should be indexed for lexical search (which disables semantic search but supports stemmed and partial matches), annotate it with @amazon.datazone#searchable(modes:["LEXICAL"]). To indicate that a field should be indexed for technical identifier search (for more information on technical identifier search, see: https://aws.amazon.com/blogs/big-data/streamline-data-discovery-with-precise-technical-identifier-search-in-amazon-sagemaker-unified-studio/), annotate it with @amazon.datazone#searchable(modes:["TECHNICAL"]). To denote that a field will store glossary term ids (which are filterable via the Search/SearchListings APIs), annotate it with @amazon.datazone#glossaryterm("${GLOSSARY_ID}"), where ${GLOSSARY_ID} is the id of the glossary that the glossary terms stored in the field belong to',
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this metadata form type is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of this Amazon DataZone metadata form type",
          args: {
            name: "string",
          },
        },
        {
          name: "--model",
          description: "The model of this Amazon DataZone metadata form type",
          args: {
            name: "structure",
          },
        },
        {
          name: "--owning-project-identifier",
          description:
            "The ID of the Amazon DataZone project that owns this metadata form type",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of this Amazon DataZone metadata form type",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
          },
        },
        {
          name: "--description",
          description:
            "The description of this Amazon DataZone metadata form type",
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
      name: "create-glossary",
      description:
        "Creates an Amazon DataZone business glossary. Specifies that this is a create glossary policy. A glossary serves as the central repository for business terminology and definitions within an organization. It helps establish and maintain a common language across different departments and teams, reducing miscommunication and ensuring consistent interpretation of business concepts. Glossaries can include hierarchical relationships between terms, cross-references, and links to actual data assets, making them invaluable for both business users and technical teams trying to understand and use data correctly. Prerequisites:   Domain must exist and be in an active state.    Owning project must exist and be accessible by the caller.   The glossary name must be unique within the domain",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this business glossary is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of this business glossary",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-identifier",
          description:
            "The ID of the project that currently owns business glossary",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of this business glossary",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of this business glossary",
          args: {
            name: "string",
            suggestions: ["DISABLED", "ENABLED"],
          },
        },
        {
          name: "--usage-restrictions",
          description: "The usage restriction of the restricted glossary",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "create-glossary-term",
      description:
        "Creates a business glossary term. A glossary term represents an individual entry within the Amazon DataZone glossary, serving as a standardized definition for a specific business concept or data element. Each term can include rich metadata such as detailed definitions, synonyms, related terms, and usage examples. Glossary terms can be linked directly to data assets, providing business context to technical data elements. This linking capability helps users understand the business meaning of data fields and ensures consistent interpretation across different systems and teams. Terms can also have relationships with other terms, creating a semantic network that reflects the complexity of business concepts. Prerequisites:   Domain must exist.    Glossary must exist.   The term name must be unique within the glossary.   Ensure term does not conflict with existing terms in hierarchy",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this business glossary term is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--glossary-identifier",
          description:
            "The ID of the business glossary in which this term is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of this business glossary term",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of this business glossary term",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
          },
        },
        {
          name: "--short-description",
          description: "The short description of this business glossary term",
          args: {
            name: "string",
          },
        },
        {
          name: "--long-description",
          description: "The long description of this business glossary term",
          args: {
            name: "string",
          },
        },
        {
          name: "--term-relations",
          description: "The term relations of this business glossary term",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "create-group-profile",
      description: "Creates a group profile in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which the group profile is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-identifier",
          description:
            "The identifier of the group for which the group profile is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-principal-arn",
          description:
            "The ARN of the IAM role that will be associated with the group profile. This role defines the permissions that group members will assume when accessing Amazon DataZone resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "create-listing-change-set",
      description:
        "Publishes a listing (a record of an asset at a given time) or removes a listing from the catalog",
      options: [
        {
          name: "--domain-identifier",
          description: "The ID of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-identifier",
          description: "The ID of the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description: "The type of an entity",
          args: {
            name: "string",
            suggestions: ["ASSET", "DATA_PRODUCT"],
          },
        },
        {
          name: "--entity-revision",
          description: "The revision of an asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--action",
          description: "Specifies whether to publish or unpublish a listing",
          args: {
            name: "string",
            suggestions: ["PUBLISH", "UNPUBLISH"],
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "create-notebook",
      description:
        "Creates a notebook in Amazon SageMaker Unified Studio. A notebook is a collaborative document within a project that contains code cells for interactive computing",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon SageMaker Unified Studio domain in which to create the notebook",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-identifier",
          description: "The identifier of the project that owns the notebook",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the notebook. The name must be between 1 and 256 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the notebook",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of the notebook",
          args: {
            name: "string",
            suggestions: ["DATA", "SQL"],
          },
        },
        {
          name: "--metadata",
          description:
            "The metadata for the notebook, specified as key-value pairs. You can specify up to 50 entries, with keys up to 128 characters and values up to 1024 characters",
          args: {
            name: "map",
          },
        },
        {
          name: "--parameters",
          description:
            "The sensitive parameters for the notebook, specified as key-value pairs. You can specify up to 50 entries, with keys up to 128 characters and values up to 1024 characters",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided",
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
      name: "create-project",
      description: "Creates an Amazon DataZone project",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this project is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the Amazon DataZone project",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the Amazon DataZone project",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-tags",
          description: "The resource tags of the project",
          args: {
            name: "map",
          },
        },
        {
          name: "--glossary-terms",
          description:
            "The glossary terms that can be used in this Amazon DataZone project",
          args: {
            name: "list",
          },
        },
        {
          name: "--domain-unit-id",
          description:
            "The ID of the domain unit. This parameter is not required and if it is not specified, then the project is created at the root domain unit level",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-profile-id",
          description: "The ID of the project profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-parameters",
          description: "The user parameters of the project",
          args: {
            name: "list",
          },
        },
        {
          name: "--project-category",
          description:
            "The category of the project. Set to 'ADMIN' designates this as an administrative project for the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-execution-role",
          description:
            "The default project IAM role that is used to access project resources and run computes such as Glue and Sagemaker",
          args: {
            name: "string",
          },
        },
        {
          name: "--membership-assignments",
          description: "The members to be assigned to the project",
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
      name: "create-project-membership",
      description: "Creates a project membership in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which project membership is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-identifier",
          description:
            "The ID of the project for which this project membership was created",
          args: {
            name: "string",
          },
        },
        {
          name: "--member",
          description:
            "The project member whose project membership was created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--designation",
          description: "The designation of the project membership",
          args: {
            name: "string",
            suggestions: [
              "PROJECT_OWNER",
              "PROJECT_CONTRIBUTOR",
              "PROJECT_CATALOG_VIEWER",
              "PROJECT_CATALOG_CONSUMER",
              "PROJECT_CATALOG_STEWARD",
              "USER_CREATED_DESIGNATION",
            ],
          },
        },
        {
          name: "--user-created-designation-id",
          description:
            "The ID of the user-created designation to assign to the project member. Required when designation is USER_CREATED_DESIGNATION; must not be provided otherwise",
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
      name: "create-project-profile",
      description: "Creates a project profile",
      options: [
        {
          name: "--domain-identifier",
          description: "A domain ID of the project profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Project profile name",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of a project profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "Project profile status",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
          },
        },
        {
          name: "--project-resource-tags",
          description: "The resource tags of the project profile",
          args: {
            name: "list",
          },
        },
        {
          name: "--allow-custom-project-resource-tags",
          description:
            "Specifies whether custom project resource tags are supported",
        },
        {
          name: "--no-allow-custom-project-resource-tags",
          description:
            "Specifies whether custom project resource tags are supported",
        },
        {
          name: "--project-resource-tags-description",
          description:
            "Field viewable through the UI that provides a project user with the allowed resource tag specifications",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-configurations",
          description: "Environment configurations of the project profile",
          args: {
            name: "list",
          },
        },
        {
          name: "--domain-unit-identifier",
          description: "A domain unit ID of the project profile",
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
      name: "create-rule",
      description:
        "Creates a rule in Amazon DataZone. A rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards",
      options: [
        {
          name: "--domain-identifier",
          description: "The ID of the domain where the rule is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--target",
          description: "The target of the rule",
          args: {
            name: "structure",
          },
        },
        {
          name: "--action",
          description: "The action of the rule",
          args: {
            name: "string",
            suggestions: [
              "CREATE_LISTING_CHANGE_SET",
              "CREATE_SUBSCRIPTION_REQUEST",
            ],
          },
        },
        {
          name: "--scope",
          description: "The scope of the rule",
          args: {
            name: "structure",
          },
        },
        {
          name: "--detail",
          description: "The detail of the rule",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "The description of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "create-subscription-grant",
      description: "Creates a subsscription grant in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the subscription grant is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The ID of the environment in which the subscription grant is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscription-target-identifier",
          description:
            "The ID of the subscription target for which the subscription grant is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--granted-entity",
          description: "The entity to which the subscription is to be granted",
          args: {
            name: "structure",
          },
        },
        {
          name: "--asset-target-names",
          description:
            "The names of the assets for which the subscription grant is created",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "create-subscription-request",
      description: "Creates a subscription request in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the subscription request is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscribed-principals",
          description:
            "The Amazon DataZone principals for whom the subscription request is created",
          args: {
            name: "list",
          },
        },
        {
          name: "--subscribed-listings",
          description:
            "The published asset for which the subscription grant is to be created",
          args: {
            name: "list",
          },
        },
        {
          name: "--request-reason",
          description: "The reason for the subscription request",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata-forms",
          description: "The metadata form included in the subscription request",
          args: {
            name: "list",
          },
        },
        {
          name: "--asset-permissions",
          description: "The asset permissions of the subscription request",
          args: {
            name: "list",
          },
        },
        {
          name: "--asset-scopes",
          description: "The asset scopes of the subscription request",
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
      name: "create-subscription-target",
      description: "Creates a subscription target in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which subscription target is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The ID of the environment in which subscription target is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the subscription target",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of the subscription target",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscription-target-config",
          description: "The configuration of the subscription target",
          args: {
            name: "list",
          },
        },
        {
          name: "--authorized-principals",
          description: "The authorized principals of the subscription target",
          args: {
            name: "list",
          },
        },
        {
          name: "--manage-access-role",
          description:
            "The manage access role that is used to create the subscription target",
          args: {
            name: "string",
          },
        },
        {
          name: "--applicable-asset-types",
          description:
            "The asset types that can be included in the subscription target",
          args: {
            name: "list",
          },
        },
        {
          name: "--provider",
          description: "The provider of the subscription target",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscription-grant-creation-mode",
          description:
            "Determines the subscription grant creation mode for this target, defining if grants are auto-created upon subscription approval or managed manually",
          args: {
            name: "string",
            suggestions: ["AUTOMATIC", "MANUAL"],
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
      name: "create-user-profile",
      description: "Creates a user profile in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which a user profile is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-identifier",
          description:
            "The identifier of the user for which the user profile is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-type",
          description:
            "The user type of the user for which the user profile is created",
          args: {
            name: "string",
            suggestions: [
              "IAM_USER",
              "IAM_ROLE",
              "SSO_USER",
              "IAM_ROLE_SESSION",
            ],
          },
        },
        {
          name: "--session-name",
          description: "The session name for IAM role sessions",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "delete-account-pool",
      description: "Deletes an account pool",
      options: [
        {
          name: "--domain-identifier",
          description: "The ID of the domain where the account pool is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the account pool to be deleted",
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
      name: "delete-asset",
      description:
        "Deletes an asset in Amazon DataZone.   --domain-identifier must refer to a valid and existing domain.    --identifier must refer to an existing asset in the specified domain.   Asset must not be referenced in any existing asset filters.   Asset must not be linked to any draft or published data product.   User must have delete permissions for the domain and project",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the asset is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the asset that is deleted",
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
      name: "delete-asset-filter",
      description:
        "Deletes an asset filter. Prerequisites:   The asset filter must exist.    The domain and asset must not have been deleted.   Ensure the --identifier refers to a valid filter ID",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to delete an asset filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-identifier",
          description: "The ID of the data asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the asset filter that you want to delete",
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
      name: "delete-asset-type",
      description:
        "Deletes an asset type in Amazon DataZone. Prerequisites:   The asset type must exist in the domain.    You must have DeleteAssetType permission.   The asset type must not be in use (e.g., assigned to any asset). If used, deletion will fail.   You should retrieve the asset type using get-asset-type to confirm its presence before deletion",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the asset type is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the asset type that is deleted",
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
      name: "delete-connection",
      description:
        "Deletes and connection. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services",
      options: [
        {
          name: "--domain-identifier",
          description: "The ID of the domain where the connection is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the connection that is deleted",
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
      name: "delete-data-export-configuration",
      description:
        "Deletes data export configuration for a domain. This operation does not delete the S3 table created by the PutDataExportConfiguration operation. To temporarily disable export without deleting the configuration, use the PutDataExportConfiguration operation with the --no-enable-export flag instead. This allows you to re-enable export for the same domain using the --enable-export flag without deleting S3 table",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The domain ID for which you want to delete the data export configuration",
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
      name: "delete-data-product",
      description:
        "Deletes a data product in Amazon DataZone. Prerequisites:   The data product must exist and not be deleted or archived.    The user must have delete permissions for the data product.   Domain and project must be active",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the data product is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the data product that is deleted",
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
      name: "delete-data-source",
      description: "Deletes a data source in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the data source is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the data source that is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--retain-permissions-on-revoke-failure",
          description:
            "Specifies that the granted permissions are retained in case of a self-subscribe functionality failure for a data source",
        },
        {
          name: "--no-retain-permissions-on-revoke-failure",
          description:
            "Specifies that the granted permissions are retained in case of a self-subscribe functionality failure for a data source",
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
      name: "delete-designation",
      description:
        "Deletes a user-created designation. Managed designations cannot be deleted. The call fails if the designation has deletionProtection enabled or if any project member still holds it. This operation is idempotent",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain that contains the designation to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The unique ID of the designation to delete",
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
      name: "delete-domain",
      description: "Deletes a Amazon DataZone domain",
      options: [
        {
          name: "--identifier",
          description:
            "The identifier of the Amazon Web Services domain that is to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-deletion-check",
          description:
            "Specifies whether to skip the check that prevents deletion of a domain that still contains resources. When you use this parameter, Amazon DataZone deletes the domain but might not remove its associated resources, which can leave orphaned resources behind. To delete a domain and fully clean up its associated resources, use cascadeDelete instead. You can't use this parameter together with cascadeDelete",
        },
        {
          name: "--no-skip-deletion-check",
          description:
            "Specifies whether to skip the check that prevents deletion of a domain that still contains resources. When you use this parameter, Amazon DataZone deletes the domain but might not remove its associated resources, which can leave orphaned resources behind. To delete a domain and fully clean up its associated resources, use cascadeDelete instead. You can't use this parameter together with cascadeDelete",
        },
        {
          name: "--cascade-delete",
          description:
            "Specifies whether to delete the domain along with all of its associated resources. When you use this parameter, Amazon DataZone deletes the domain and cleanly removes its associated resources without leaving orphaned resources behind. Amazon DataZone reports deletion progress in the deleteProgress field. Amazon DataZone reports any resources that it can't delete in the failureReasons field of the GetDomain response. You can't use this parameter together with skipDeletionCheck. If you don't specify a value, the default is false",
        },
        {
          name: "--no-cascade-delete",
          description:
            "Specifies whether to delete the domain along with all of its associated resources. When you use this parameter, Amazon DataZone deletes the domain and cleanly removes its associated resources without leaving orphaned resources behind. Amazon DataZone reports deletion progress in the deleteProgress field. Amazon DataZone reports any resources that it can't delete in the failureReasons field of the GetDomain response. You can't use this parameter together with skipDeletionCheck. If you don't specify a value, the default is false",
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
      name: "delete-domain-unit",
      description: "Deletes a domain unit",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to delete a domain unit",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the domain unit that you want to delete",
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
      name: "delete-environment",
      description: "Deletes an environment in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the environment is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the environment that is to be deleted",
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
      name: "delete-environment-action",
      description:
        "Deletes an action for the environment, for example, deletes a console link for an analytics tool that is available in this environment",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which an environment action is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The ID of the environment where an environment action is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the environment action that is deleted",
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
      name: "delete-environment-blueprint",
      description: "Deletes a blueprint in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the blueprint is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the blueprint that is deleted",
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
      name: "delete-environment-blueprint-configuration",
      description: "Deletes the blueprint configuration in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the blueprint configuration is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-blueprint-identifier",
          description:
            "The ID of the blueprint the configuration of which is deleted",
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
      name: "delete-environment-profile",
      description: "Deletes an environment profile in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the environment profile is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the environment profile that is deleted",
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
      name: "delete-form-type",
      description:
        "Deletes and metadata form type in Amazon DataZone. Prerequisites:   The form type must exist in the domain.    The form type must not be in use by any asset types or assets.   The domain must be valid and accessible.   User must have delete permissions on the form type.   Any dependencies (such as linked asset types) must be removed first",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the metadata form type is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--form-type-identifier",
          description: "The ID of the metadata form type that is deleted",
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
      name: "delete-glossary",
      description:
        "Deletes a business glossary in Amazon DataZone. Prerequisites:   The glossary must be in DISABLED state.    The glossary must not have any glossary terms associated with it.   The glossary must exist in the specified domain.   The caller must have the datazone:DeleteGlossary permission in the domain and glossary.   Glossary should not be linked to any active metadata forms",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the business glossary is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the business glossary that is deleted",
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
      name: "delete-glossary-term",
      description:
        "Deletes a business glossary term in Amazon DataZone. Prerequisites:   Glossary term must exist and be active.    The term must not be linked to other assets or child terms.   Caller must have delete permissions in the domain/glossary.   Ensure all associations (such as to assets or parent terms) are removed before deletion",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the business glossary term is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the business glossary term that is deleted",
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
      name: "delete-lineage-event",
      description: "Deletes the specified lineage event",
      options: [
        {
          name: "--domain-identifier",
          description: "The ID of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the lineage event",
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
      name: "delete-listing",
      description: "Deletes a listing (a record of an asset at a given time)",
      options: [
        {
          name: "--domain-identifier",
          description: "The ID of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the listing to be deleted",
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
      name: "delete-notebook",
      description: "Deletes a notebook in Amazon SageMaker Unified Studio",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon SageMaker Unified Studio domain in which the notebook exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the notebook to delete",
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
      name: "delete-project",
      description: "Deletes a project in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the project is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the project that is to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-deletion-check",
          description:
            "Specifies the optional flag to delete all child entities within the project",
        },
        {
          name: "--no-skip-deletion-check",
          description:
            "Specifies the optional flag to delete all child entities within the project",
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
      name: "delete-project-membership",
      description: "Deletes project membership in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain where project membership is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-identifier",
          description:
            "The ID of the Amazon DataZone project the membership to which is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--member",
          description: "The project member whose project membership is deleted",
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
      name: "delete-project-profile",
      description: "Deletes a project profile",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where a project profile is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the project profile that is deleted",
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
      name: "delete-rule",
      description:
        "Deletes a rule in Amazon DataZone. A rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain that where the rule is to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the rule that is to be deleted",
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
      name: "delete-subscription-grant",
      description: "Deletes and subscription grant in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain where the subscription grant is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the subscription grant that is deleted",
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
      name: "delete-subscription-request",
      description: "Deletes a subscription request in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the subscription request is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the subscription request that is deleted",
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
      name: "delete-subscription-target",
      description: "Deletes a subscription target in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the subscription target is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The ID of the Amazon DataZone environment in which the subscription target is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the subscription target that is deleted",
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
      name: "delete-time-series-data-points",
      description:
        "Deletes the specified time series form for the specified asset",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain that houses the asset for which you want to delete a time series form",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-identifier",
          description:
            "The ID of the asset for which you want to delete a time series form",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description:
            "The type of the asset for which you want to delete a time series form",
          args: {
            name: "string",
            suggestions: ["ASSET", "LISTING"],
          },
        },
        {
          name: "--form-name",
          description:
            "The name of the time series form that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided",
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
      name: "disassociate-environment-role",
      description: "Disassociates the environment role in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which an environment role is disassociated",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description: "The ID of the environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-role-arn",
          description: "The ARN of the environment role",
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
      name: "disassociate-governed-terms",
      description: "Disassociates restricted terms from an asset",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to disassociate restricted terms from an asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-identifier",
          description:
            "The ID of an asset from which you want to disassociate restricted terms",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description:
            "The type of the asset from which you want to disassociate restricted terms",
          args: {
            name: "string",
            suggestions: ["ASSET"],
          },
        },
        {
          name: "--governed-glossary-terms",
          description:
            "The restricted glossary terms that you want to disassociate from an asset",
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
      name: "get-account-pool",
      description: "Gets the details of the account pool",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain in which the account pool lives whose details are to be displayed",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The ID of the account pool whose details are to be displayed",
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
      name: "get-asset",
      description:
        "Gets an Amazon DataZone asset. An asset is the fundamental building block in Amazon DataZone, representing any data resource that needs to be cataloged and managed. It can take many forms, from Amazon S3 buckets and database tables to dashboards and machine learning models. Each asset contains comprehensive metadata about the resource, including its location, schema, ownership, and lineage information. Assets are essential for organizing and managing data resources across an organization, making them discoverable and usable while maintaining proper governance. Before using the Amazon DataZone GetAsset command, ensure the following prerequisites are met:   Domain identifier must exist and be valid   Asset identifier must exist   User must have the required permissions to perform the action",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain to which the asset belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The ID of the Amazon DataZone asset. This parameter supports either the value of assetId or externalIdentifier as input. If you are passing the value of externalIdentifier, you must prefix this value with externalIdentifer%2F",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description: "The revision of the Amazon DataZone asset",
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
      name: "get-asset-filter",
      description:
        "Gets an asset filter. Prerequisites:   Domain (--domain-identifier), asset (--asset-identifier), and filter (--identifier) must all exist.    The asset filter should not have been deleted.   The asset must still exist (since the filter is linked to it)",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to get an asset filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-identifier",
          description: "The ID of the data asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the asset filter",
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
      name: "get-asset-type",
      description:
        "Gets an Amazon DataZone asset type. Asset types define the categories and characteristics of different kinds of data assets within Amazon DataZone.. They determine what metadata fields are required, what operations are possible, and how the asset integrates with other Amazon Web Services services. Asset types can range from built-in types like Amazon S3 buckets and Amazon Web Services Glue tables to custom types defined for specific organizational needs. Understanding asset types is crucial for properly organizing and managing different kinds of data resources. Prerequisites:   The asset type with identifier must exist in the domain. ResourceNotFoundException.   You must have the GetAssetType permission.   Ensure the domain-identifier value is correct and accessible",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the asset type exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the asset type",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description: "The revision of the asset type",
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
      name: "get-connection",
      description:
        "Gets a connection. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services",
      options: [
        {
          name: "--domain-identifier",
          description: "The ID of the domain where we get the connection",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The connection ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--with-secret",
          description: "Specifies whether a connection has a secret",
        },
        {
          name: "--no-with-secret",
          description: "Specifies whether a connection has a secret",
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
      name: "get-data-export-configuration",
      description: "Gets data export configuration details",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to get the data export configuration details",
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
      name: "get-data-product",
      description:
        "Gets the data product. Prerequisites:   The data product ID must exist.    The domain must be valid and accessible.   User must have read or discovery permissions for the data product",
      options: [
        {
          name: "--domain-identifier",
          description: "The ID of the domain where the data product lives",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the data product",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description: "The revision of the data product",
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
      name: "get-data-source",
      description: "Gets an Amazon DataZone data source",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the data source exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the Amazon DataZone data source",
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
      name: "get-data-source-run",
      description: "Gets an Amazon DataZone data source run",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain in which this data source run was performed",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the data source run",
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
      name: "get-designation",
      description:
        "Gets the details of a designation, including its Cedar permit policy. Returns the full designation record for both system-managed and user-created designations",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain that contains the designation",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The unique ID of the designation to retrieve",
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
      name: "get-domain",
      description: "Gets an Amazon DataZone domain",
      options: [
        {
          name: "--identifier",
          description: "The identifier of the specified Amazon DataZone domain",
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
      name: "get-domain-unit",
      description: "Gets the details of the specified domain unit",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to get a domain unit",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the domain unit that you want to get",
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
      name: "get-environment",
      description: "Gets an Amazon DataZone environment",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain where the environment exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the Amazon DataZone environment",
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
      name: "get-environment-action",
      description: "Gets the specified environment action",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the GetEnvironmentAction API is invoked",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description: "The environment ID of the environment action",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the environment action",
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
      name: "get-environment-blueprint",
      description: "Gets an Amazon DataZone blueprint",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the domain in which this blueprint exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of this Amazon DataZone blueprint",
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
      name: "get-environment-blueprint-configuration",
      description: "Gets the blueprint configuration in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain where this blueprint exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-blueprint-identifier",
          description: "He ID of the blueprint",
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
      name: "get-environment-credentials",
      description: "Gets the credentials of an environment in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this environment and its credentials exist",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The ID of the environment whose credentials this operation gets",
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
      name: "get-environment-profile",
      description: "Gets an evinronment profile in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this environment profile exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the environment profile",
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
      name: "get-form-type",
      description:
        'Gets a metadata form type in Amazon DataZone. Form types define the structure and validation rules for collecting metadata about assets in Amazon DataZone. They act as templates that ensure consistent metadata capture across similar types of assets, while allowing for customization to meet specific organizational needs. Form types can include required fields, validation rules, and dependencies, helping maintain high-quality metadata that makes data assets more discoverable and usable.   The form type with the specified identifier must exist in the given domain.    The domain must be valid and active.   User must have permission on the form type.   The form type should not be deleted or in an invalid state.   One use case for this API is to determine whether a form field is indexed for search.  A searchable field will be annotated with @amazon.datazone#searchable. By default, searchable fields are indexed for semantic search, where related query terms will match the attribute value even if they are not stemmed or keyword matches. If a field is indexed technical identifier search, it will be annotated with @amazon.datazone#searchable(modes:["TECHNICAL"]). If a field is indexed for lexical search (supports stemmed and prefix matches but not semantic matches), it will be annotated with @amazon.datazone#searchable(modes:["LEXICAL"]). A field storing glossary term IDs (which is filterable) will be annotated with @amazon.datazone#glossaryterm("${glossaryId}")',
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this metadata form type exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--form-type-identifier",
          description: "The ID of the metadata form type",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description: "The revision of this metadata form type",
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
      name: "get-glossary",
      description:
        "Gets a business glossary in Amazon DataZone. Prerequisites:   The specified glossary ID must exist and be associated with the given domain.    The caller must have the datazone:GetGlossary permission on the domain",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this business glossary exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the business glossary",
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
      name: "get-glossary-term",
      description:
        "Gets a business glossary term in Amazon DataZone. Prerequisites:   Glossary term with identifier must exist in the domain.    User must have permission on the glossary term.   Domain must be accessible and active",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which this business glossary term exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the business glossary term",
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
      name: "get-group-profile",
      description: "Gets a group profile in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which the group profile exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-identifier",
          description: "The identifier of the group profile",
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
      name: "get-iam-portal-login-url",
      description:
        "Gets the data portal URL for the specified Amazon DataZone domain",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain the data portal of which you want to get",
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
      name: "get-job-run",
      description: "The details of the job run",
      options: [
        {
          name: "--domain-identifier",
          description: "The ID of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the job run",
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
      name: "get-lineage-event",
      description: "Describes the lineage event",
      options: [
        {
          name: "--domain-identifier",
          description: "The ID of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the lineage event",
          args: {
            name: "string",
          },
        },
      ],
      args: {
        name: "outfile",
        description: "Filename where the content will be saved",
        template: "filepaths",
      },
    },
    {
      name: "get-lineage-node",
      description: "Gets the data lineage node",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain in which you want to get the data lineage node",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The ID of the data lineage node that you want to get. Both, a lineage node identifier generated by Amazon DataZone and a sourceIdentifier of the lineage node are supported. If sourceIdentifier is greater than 1800 characters, you can use lineage node identifier generated by Amazon DataZone to get the node details",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-timestamp",
          description:
            "The event time stamp for which you want to get the data lineage node",
          args: {
            name: "timestamp",
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
      name: "get-listing",
      description:
        "Gets a listing (a record of an asset at a given time). If you specify a listing version, only details that are specific to that version are returned",
      options: [
        {
          name: "--domain-identifier",
          description: "The ID of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the listing",
          args: {
            name: "string",
          },
        },
        {
          name: "--listing-revision",
          description: "The revision of the listing",
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
      name: "get-metadata-generation-run",
      description:
        "Gets a metadata generation run in Amazon DataZone. Prerequisites:   Valid domain and run identifier.    The metadata generation run must exist.   User must have read access to the metadata run",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain the metadata generation run of which you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the metadata generation run",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of the metadata generation run",
          args: {
            name: "string",
            suggestions: [
              "BUSINESS_DESCRIPTIONS",
              "BUSINESS_NAMES",
              "BUSINESS_GLOSSARY_ASSOCIATIONS",
            ],
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
      name: "get-notebook",
      description:
        "Gets the details of a notebook in Amazon SageMaker Unified Studio",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon SageMaker Unified Studio domain in which the notebook exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the notebook",
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
      name: "get-notebook-export",
      description:
        "Gets the details of a notebook export in Amazon SageMaker Unified Studio",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon SageMaker Unified Studio domain in which the notebook export exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the notebook export",
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
      name: "get-notebook-run",
      description:
        "Gets the details of a notebook run in Amazon SageMaker Unified Studio",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon SageMaker Unified Studio domain in which the notebook run exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the notebook run",
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
      name: "get-project",
      description: "Gets a project in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the project exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the project",
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
      name: "get-project-profile",
      description: "The details of the project profile",
      options: [
        {
          name: "--domain-identifier",
          description: "The ID of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the project profile",
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
      name: "get-rule",
      description:
        "Gets the details of a rule in Amazon DataZone. A rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where the GetRule action is to be invoked",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description: "The revision of the rule",
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
      name: "get-subscription",
      description: "Gets a subscription in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the subscription exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the subscription",
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
      name: "get-subscription-grant",
      description: "Gets the subscription grant in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the subscription grant exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the subscription grant",
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
      name: "get-subscription-request-details",
      description: "Gets the details of the specified subscription request",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which to get the subscription request details",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the subscription request the details of which to get",
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
      name: "get-subscription-target",
      description: "Gets the subscription target in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the subscription target exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The ID of the environment associated with the subscription target",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the subscription target",
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
      name: "get-time-series-data-point",
      description: "Gets the existing data point for the asset",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain that houses the asset for which you want to get the data point",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-identifier",
          description:
            "The ID of the asset for which you want to get the data point",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description:
            "The type of the asset for which you want to get the data point",
          args: {
            name: "string",
            suggestions: ["ASSET", "LISTING"],
          },
        },
        {
          name: "--identifier",
          description: "The ID of the data point that you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--form-name",
          description:
            "The name of the time series form that houses the data point that you want to get",
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
      name: "get-user-profile",
      description: "Gets a user profile in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain the data portal of which you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-identifier",
          description:
            "The identifier of the user for which you want to get the user profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of the user profile",
          args: {
            name: "string",
            suggestions: ["IAM", "SSO"],
          },
        },
        {
          name: "--session-name",
          description: "The session name for IAM role sessions",
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
      name: "list-account-pools",
      description: "Lists existing account pools",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where exsting account pools are to be listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the account pool to be listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The sort by mechanism in which the existing account pools are to be listed",
          args: {
            name: "string",
            suggestions: ["NAME"],
          },
        },
        {
          name: "--sort-order",
          description:
            "The sort order in which the existing account pools are to be listed",
          args: {
            name: "string",
            suggestions: ["ASCENDING", "DESCENDING"],
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of account pools is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of account pools, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListAccountPools to list the next set of account pools",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of account pools to return in a single call to ListAccountPools. When the number of account pools to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListAccountPools to list the next set of account pools",
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
      name: "list-accounts-in-account-pool",
      description: "Lists the accounts in the specified account pool",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain in which the accounts in the specified account pool are to be listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The ID of the account pool whose accounts are to be listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of accounts is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of accounts, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListAccountsInAccountPool to list the next set of accounts",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of accounts to return in a single call to ListAccountsInAccountPool. When the number of accounts to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListAccountsInAccountPool to list the next set of accounts",
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
      name: "list-asset-filters",
      description:
        "Lists asset filters. Prerequisites:   A valid domain and asset must exist.    The asset must have at least one filter created to return results",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to list asset filters",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-identifier",
          description: "The ID of the data asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the asset filter",
          args: {
            name: "string",
            suggestions: ["VALID", "INVALID"],
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of asset filters is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of asset filters, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListAssetFilters to list the next set of asset filters",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of asset filters to return in a single call to ListAssetFilters. When the number of asset filters to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListAssetFilters to list the next set of asset filters",
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
      name: "list-asset-revisions",
      description:
        "Lists the revisions for the asset. Prerequisites:   The asset must exist in the domain.    There must be at least one revision of the asset (which happens automatically after creation).   The domain must be valid and active.   User must have permissions on the asset and domain",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of revisions is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of revisions, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListAssetRevisions to list the next set of revisions",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of revisions to return in a single call to ListAssetRevisions. When the number of revisions to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListAssetRevisions to list the next set of revisions",
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
      name: "list-connections",
      description:
        "Lists connections. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to list connections",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of connections to return in a single call to ListConnections. When the number of connections to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListConnections to list the next set of connections",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of connections is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of connections, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListConnections to list the next set of connections",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description: "Specifies how you want to sort the listed connections",
          args: {
            name: "string",
            suggestions: ["NAME"],
          },
        },
        {
          name: "--sort-order",
          description: "Specifies the sort order for the listed connections",
          args: {
            name: "string",
            suggestions: ["ASCENDING", "DESCENDING"],
          },
        },
        {
          name: "--name",
          description: "The name of the connection",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The ID of the environment where you want to list connections",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-identifier",
          description:
            "The ID of the project where you want to list connections",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of connection",
          args: {
            name: "string",
            suggestions: [
              "ATHENA",
              "BIGQUERY",
              "DATABRICKS",
              "DOCUMENTDB",
              "DYNAMODB",
              "HYPERPOD",
              "IAM",
              "MYSQL",
              "OPENSEARCH",
              "ORACLE",
              "POSTGRESQL",
              "REDSHIFT",
              "S3",
              "SAPHANA",
              "SNOWFLAKE",
              "SPARK",
              "SQLSERVER",
              "TERADATA",
              "VERTICA",
              "WORKFLOWS_MWAA",
              "AMAZON_Q",
              "MLFLOW",
              "VPC",
              "GIT",
              "ICEBERGRESTCATALOG",
              "SNOWFLAKEICEBERGRESTCATALOG",
              "DATABRICKSICEBERGRESTCATALOG",
              "WORKDAYICEBERGRESTCATALOG",
              "WORKDAYLDQ",
            ],
          },
        },
        {
          name: "--scope",
          description: "The scope of the connection",
          args: {
            name: "string",
            suggestions: ["DOMAIN", "PROJECT"],
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
      name: "list-data-product-revisions",
      description:
        "Lists data product revisions. Prerequisites:   The data product ID must exist within the domain.    User must have view permissions on the data product.   The domain must be in a valid and accessible state",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain of the data product revisions that you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the data product revision",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of asset filters to return in a single call to ListDataProductRevisions. When the number of data product revisions to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListDataProductRevisions to list the next set of data product revisions",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of data product revisions is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of data product revisions, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListDataProductRevisions to list the next set of data product revisions",
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
      name: "list-data-source-run-activities",
      description: "Lists data source run activities",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which to list data source run activities",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the data source run",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the data source run",
          args: {
            name: "string",
            suggestions: [
              "FAILED",
              "PUBLISHING_FAILED",
              "SUCCEEDED_CREATED",
              "SUCCEEDED_UPDATED",
              "SKIPPED_ALREADY_IMPORTED",
              "SKIPPED_ARCHIVED",
              "SKIPPED_NO_ACCESS",
              "UNCHANGED",
            ],
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of activities is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of activities, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListDataSourceRunActivities to list the next set of activities",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of activities to return in a single call to ListDataSourceRunActivities. When the number of activities to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListDataSourceRunActivities to list the next set of activities",
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
      name: "list-data-source-runs",
      description: "Lists data source runs in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which to invoke the ListDataSourceRuns action",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-identifier",
          description: "The identifier of the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the data source",
          args: {
            name: "string",
            suggestions: [
              "REQUESTED",
              "RUNNING",
              "FAILED",
              "PARTIALLY_SUCCEEDED",
              "SUCCESS",
            ],
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of runs is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of runs, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListDataSourceRuns to list the next set of runs",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of runs to return in a single call to ListDataSourceRuns. When the number of runs to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListDataSourceRuns to list the next set of runs",
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
      name: "list-data-sources",
      description: "Lists data sources in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which to list the data sources",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-identifier",
          description:
            "The identifier of the project in which to list data sources",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The identifier of the environment in which to list the data sources",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-identifier",
          description: "The ID of the connection",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the data source",
          args: {
            name: "string",
            suggestions: [
              "CREATING",
              "FAILED_CREATION",
              "READY",
              "UPDATING",
              "FAILED_UPDATE",
              "RUNNING",
              "DELETING",
              "FAILED_DELETION",
            ],
          },
        },
        {
          name: "--name",
          description: "The name of the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of data sources is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of data sources, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListDataSources to list the next set of data sources",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of data sources to return in a single call to ListDataSources. When the number of data sources to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListDataSources to list the next set of data sources",
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
      name: "list-designations",
      description:
        "Lists the designations in a domain. The response returns system-managed designations first, followed by user-created designations in alphabetical order by name. Results are paginated. Use nextToken to retrieve additional pages of results",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain that contains the designations to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the results exceed the value of MaxResults, the previous call returns a pagination token. Specify this token in a subsequent call to ListDesignations to retrieve the next set of results. If not specified, the operation returns the first page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of designations to return in a single call to ListDesignations. If the number of designations exceeds MaxResults, the response includes a NextToken value. Use that token in a subsequent call to ListDesignations to retrieve the next set of designations. The default value is 20",
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
      name: "list-domain-units-for-parent",
      description:
        "Lists child domain units for the specified parent domain unit",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain in which you want to list domain units for a parent domain unit",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-domain-unit-identifier",
          description: "The ID of the parent domain unit",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of domain units to return in a single call to ListDomainUnitsForParent. When the number of domain units to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListDomainUnitsForParent to list the next set of domain units",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of domain units is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of domain units, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListDomainUnitsForParent to list the next set of domain units",
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
      name: "list-domains",
      description: "Lists Amazon DataZone domains",
      options: [
        {
          name: "--status",
          description: "The status of the data source",
          args: {
            name: "string",
            suggestions: [
              "CREATING",
              "AVAILABLE",
              "CREATION_FAILED",
              "DELETING",
              "DELETED",
              "DELETION_FAILED",
            ],
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of domains to return in a single call to ListDomains. When the number of domains to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListDomains to list the next set of domains",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of domains is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of domains, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListDomains to list the next set of domains",
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
      name: "list-entity-owners",
      description: "Lists the entity (domain units) owners",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to list entity owners",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description: "The type of the entity that you want to list",
          args: {
            name: "string",
            suggestions: ["DOMAIN_UNIT"],
          },
        },
        {
          name: "--entity-identifier",
          description: "The ID of the entity that you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of entities to return in a single call to ListEntityOwners. When the number of entities to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListEntityOwners to list the next set of entities",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of entities is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of entities, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListEntityOwners to list the next set of entities",
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
      name: "list-environment-actions",
      description: "Lists existing environment actions",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which the environment actions are listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The ID of the envrironment whose environment actions are listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of environment actions is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of environment actions, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListEnvironmentActions to list the next set of environment actions",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of environment actions to return in a single call to ListEnvironmentActions. When the number of environment actions to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListEnvironmentActions to list the next set of environment actions",
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
      name: "list-environment-blueprint-configurations",
      description:
        "Lists blueprint configurations for a Amazon DataZone environment",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of blueprint configurations to return in a single call to ListEnvironmentBlueprintConfigurations. When the number of configurations to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListEnvironmentBlueprintConfigurations to list the next set of configurations",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of blueprint configurations is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of configurations, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListEnvironmentBlueprintConfigurations to list the next set of configurations",
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
      name: "list-environment-blueprints",
      description: "Lists blueprints in an Amazon DataZone environment",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of blueprints to return in a single call to ListEnvironmentBlueprints. When the number of blueprints to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListEnvironmentBlueprints to list the next set of blueprints",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of blueprints in the environment is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of blueprints in the environment, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListEnvironmentBlueprintsto list the next set of blueprints",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the Amazon DataZone environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--managed",
          description:
            "Specifies whether the environment blueprint is managed by Amazon DataZone",
        },
        {
          name: "--no-managed",
          description:
            "Specifies whether the environment blueprint is managed by Amazon DataZone",
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
      name: "list-environment-profiles",
      description: "Lists Amazon DataZone environment profiles",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The identifier of the Amazon Web Services account where you want to list environment profiles",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-region",
          description:
            "The Amazon Web Services region where you want to list environment profiles",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-blueprint-identifier",
          description:
            "The identifier of the blueprint that was used to create the environment profiles that you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-identifier",
          description: "The identifier of the Amazon DataZone project",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of environment profiles is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of environment profiles, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListEnvironmentProfiles to list the next set of environment profiles",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of environment profiles to return in a single call to ListEnvironmentProfiles. When the number of environment profiles to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListEnvironmentProfiles to list the next set of environment profiles",
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
      name: "list-environments",
      description: "Lists Amazon DataZone environments",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The identifier of the Amazon Web Services account where you want to list environments",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the environments that you want to list",
          args: {
            name: "string",
            suggestions: [
              "ACTIVE",
              "CREATING",
              "UPDATING",
              "DELETING",
              "CREATE_FAILED",
              "UPDATE_FAILED",
              "DELETE_FAILED",
              "VALIDATION_FAILED",
              "SUSPENDED",
              "DISABLED",
              "EXPIRED",
              "DELETED",
              "INACCESSIBLE",
            ],
          },
        },
        {
          name: "--aws-account-region",
          description:
            "The Amazon Web Services region where you want to list environments",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-identifier",
          description: "The identifier of the Amazon DataZone project",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-profile-identifier",
          description: "The identifier of the environment profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-blueprint-identifier",
          description: "The identifier of the Amazon DataZone blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider",
          description: "The provider of the environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of environments to return in a single call to ListEnvironments. When the number of environments to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListEnvironments to list the next set of environments",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of environments is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of environments, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListEnvironments to list the next set of environments",
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
      name: "list-job-runs",
      description: "Lists job runs",
      options: [
        {
          name: "--domain-identifier",
          description: "The ID of the domain where you want to list job runs",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-identifier",
          description: "The ID of the job run",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of a job run",
          args: {
            name: "string",
            suggestions: [
              "SCHEDULED",
              "IN_PROGRESS",
              "SUCCESS",
              "PARTIALLY_SUCCEEDED",
              "FAILED",
              "ABORTED",
              "TIMED_OUT",
              "CANCELED",
            ],
          },
        },
        {
          name: "--sort-order",
          description: "Specifies the order in which job runs are to be sorted",
          args: {
            name: "string",
            suggestions: ["ASCENDING", "DESCENDING"],
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of job runs is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of job runs, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListJobRuns to list the next set of job runs",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of job runs to return in a single call to ListJobRuns. When the number of job runs to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListJobRuns to list the next set of job runs",
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
      name: "list-lineage-events",
      description: "Lists lineage events",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to list lineage events",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of lineage events to return in a single call to ListLineageEvents. When the number of lineage events to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListLineageEvents to list the next set of lineage events",
          args: {
            name: "integer",
          },
        },
        {
          name: "--timestamp-after",
          description: "The after timestamp of a lineage event",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--timestamp-before",
          description: "The before timestamp of a lineage event",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--processing-status",
          description: "The processing status of a lineage event",
          args: {
            name: "string",
            suggestions: ["REQUESTED", "PROCESSING", "SUCCESS", "FAILED"],
          },
        },
        {
          name: "--sort-order",
          description: "The sort order of the lineage events",
          args: {
            name: "string",
            suggestions: ["ASCENDING", "DESCENDING"],
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of lineage events is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of lineage events, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListLineageEvents to list the next set of lineage events",
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
      name: "list-lineage-node-history",
      description: "Lists the history of the specified data lineage node",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to list the history of the specified data lineage node",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of history items to return in a single call to ListLineageNodeHistory. When the number of memberships to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListLineageNodeHistory to list the next set of items",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of history items is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of items, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListLineageNodeHistory to list the next set of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The ID of the data lineage node whose history you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--direction",
          description:
            "The direction of the data lineage node refers to the lineage node having neighbors in that direction. For example, if direction is UPSTREAM, the ListLineageNodeHistory API responds with historical versions with upstream neighbors only",
          args: {
            name: "string",
            suggestions: ["UPSTREAM", "DOWNSTREAM"],
          },
        },
        {
          name: "--event-timestamp-gte",
          description:
            "Specifies whether the action is to return data lineage node history from the time after the event timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--event-timestamp-lte",
          description:
            "Specifies whether the action is to return data lineage node history from the time prior of the event timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-order",
          description:
            "The order by which you want data lineage node history to be sorted",
          args: {
            name: "string",
            suggestions: ["ASCENDING", "DESCENDING"],
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
      name: "list-metadata-generation-runs",
      description:
        "Lists all metadata generation runs. Metadata generation runs represent automated processes that leverage AI/ML capabilities to create or enhance asset metadata at scale. This feature helps organizations maintain comprehensive and consistent metadata across large numbers of assets without manual intervention. It can automatically generate business descriptions, tags, and other metadata elements, significantly reducing the time and effort required for metadata management while improving consistency and completeness. Prerequisites:   Valid domain identifier.    User must have access to metadata generation runs in the domain",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain where you want to list metadata generation runs",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the metadata generation runs",
          args: {
            name: "string",
            suggestions: [
              "SUBMITTED",
              "IN_PROGRESS",
              "CANCELED",
              "SUCCEEDED",
              "FAILED",
              "PARTIALLY_SUCCEEDED",
            ],
          },
        },
        {
          name: "--type",
          description: "The type of the metadata generation runs",
          args: {
            name: "string",
            suggestions: [
              "BUSINESS_DESCRIPTIONS",
              "BUSINESS_NAMES",
              "BUSINESS_GLOSSARY_ASSOCIATIONS",
            ],
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of metadata generation runs is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of metadata generation runs, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListMetadataGenerationRuns to list the next set of revisions",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of metadata generation runs to return in a single call to ListMetadataGenerationRuns. When the number of metadata generation runs to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListMetadataGenerationRuns to list the next set of revisions",
          args: {
            name: "integer",
          },
        },
        {
          name: "--target-identifier",
          description:
            "The target ID for which you want to list metadata generation runs",
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
      name: "list-notebook-runs",
      description: "Lists notebook runs in Amazon SageMaker Unified Studio",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon SageMaker Unified Studio domain in which to list notebook runs",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-identifier",
          description:
            "The identifier of the project that owns the notebook runs",
          args: {
            name: "string",
          },
        },
        {
          name: "--notebook-identifier",
          description: "The identifier of the notebook to filter runs by",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status to filter notebook runs by",
          args: {
            name: "string",
            suggestions: [
              "QUEUED",
              "STARTING",
              "RUNNING",
              "STOPPING",
              "STOPPED",
              "SUCCEEDED",
              "FAILED",
            ],
          },
        },
        {
          name: "--schedule-identifier",
          description:
            "The identifier of the schedule to filter notebook runs by",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of notebook runs to return in a single call. When the number of notebook runs exceeds the value of MaxResults, the response contains a NextToken value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for the results",
          args: {
            name: "string",
            suggestions: ["ASCENDING", "DESCENDING"],
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of notebook runs is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of notebook runs, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListNotebookRuns to list the next set of notebook runs",
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
      name: "list-notebooks",
      description: "Lists notebooks in Amazon SageMaker Unified Studio",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon SageMaker Unified Studio domain in which to list notebooks",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-identifier",
          description: "The identifier of the project that owns the notebooks",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of notebooks to return in a single call. When the number of notebooks exceeds the value of MaxResults, the response contains a NextToken value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-order",
          description: "The sort order for the results",
          args: {
            name: "string",
            suggestions: ["ASCENDING", "DESCENDING"],
          },
        },
        {
          name: "--sort-by",
          description: "The field to sort the results by",
          args: {
            name: "string",
            suggestions: ["CREATED_AT", "UPDATED_AT"],
          },
        },
        {
          name: "--status",
          description: "The status to filter notebooks by",
          args: {
            name: "string",
            suggestions: [
              "ACTIVE",
              "ARCHIVED",
              "SYNC_IN_PROGRESS",
              "SYNC_FAILED",
            ],
          },
        },
        {
          name: "--type",
          description: "The type to filter notebooks by",
          args: {
            name: "string",
            suggestions: ["DATA", "SQL"],
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of notebooks is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of notebooks, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListNotebooks to list the next set of notebooks",
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
      name: "list-notifications",
      description: "Lists all Amazon DataZone notifications",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of notifications",
          args: {
            name: "string",
            suggestions: ["TASK", "EVENT"],
          },
        },
        {
          name: "--after-timestamp",
          description: "The time after which you want to list notifications",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--before-timestamp",
          description: "The time before which you want to list notifications",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--subjects",
          description: "The subjects of notifications",
          args: {
            name: "list",
          },
        },
        {
          name: "--task-status",
          description: "The task status of notifications",
          args: {
            name: "string",
            suggestions: ["ACTIVE", "INACTIVE"],
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of notifications to return in a single call to ListNotifications. When the number of notifications to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListNotifications to list the next set of notifications",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of notifications is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of notifications, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListNotifications to list the next set of notifications",
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
      name: "list-policy-grants",
      description: "Lists policy grants",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to list policy grants",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description:
            "The type of entity for which you want to list policy grants",
          args: {
            name: "string",
            suggestions: [
              "DOMAIN_UNIT",
              "ENVIRONMENT_BLUEPRINT_CONFIGURATION",
              "ENVIRONMENT_PROFILE",
              "ASSET_TYPE",
            ],
          },
        },
        {
          name: "--entity-identifier",
          description:
            "The ID of the entity for which you want to list policy grants",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-type",
          description: "The type of policy that you want to list",
          args: {
            name: "string",
            suggestions: [
              "CREATE_DOMAIN_UNIT",
              "OVERRIDE_DOMAIN_UNIT_OWNERS",
              "ADD_TO_PROJECT_MEMBER_POOL",
              "OVERRIDE_PROJECT_OWNERS",
              "CREATE_GLOSSARY",
              "CREATE_FORM_TYPE",
              "CREATE_ASSET_TYPE",
              "CREATE_PROJECT",
              "CREATE_ENVIRONMENT_PROFILE",
              "DELEGATE_CREATE_ENVIRONMENT_PROFILE",
              "CREATE_ENVIRONMENT",
              "CREATE_ENVIRONMENT_FROM_BLUEPRINT",
              "CREATE_PROJECT_FROM_PROJECT_PROFILE",
              "USE_ASSET_TYPE",
            ],
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of grants to return in a single call to ListPolicyGrants. When the number of grants to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListPolicyGrants to list the next set of grants",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of grants is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of grants, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListPolicyGrants to list the next set of grants",
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
      name: "list-project-memberships",
      description: "Lists all members of the specified project",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which you want to list project memberships",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-identifier",
          description:
            "The identifier of the project whose memberships you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The method by which you want to sort the project memberships",
          args: {
            name: "string",
            suggestions: ["NAME"],
          },
        },
        {
          name: "--sort-order",
          description: "The sort order of the project memberships",
          args: {
            name: "string",
            suggestions: ["ASCENDING", "DESCENDING"],
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of memberships is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of memberships, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListProjectMemberships to list the next set of memberships",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of memberships to return in a single call to ListProjectMemberships. When the number of memberships to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListProjectMemberships to list the next set of memberships",
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
      name: "list-project-profiles",
      description: "Lists project profiles",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to list project profiles",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of a project profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description: "Specifies by what to sort project profiles",
          args: {
            name: "string",
            suggestions: ["NAME"],
          },
        },
        {
          name: "--sort-order",
          description: "Specifies the sort order of the project profiles",
          args: {
            name: "string",
            suggestions: ["ASCENDING", "DESCENDING"],
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of project profiles is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of project profiles, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListProjectProfiles to list the next set of project profiles",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of project profiles to return in a single call to ListProjectProfiles. When the number of project profiles to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListProjectProfiles to list the next set of project profiles",
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
      name: "list-projects",
      description: "Lists Amazon DataZone projects",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-identifier",
          description: "The identifier of the Amazon DataZone user",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-identifier",
          description: "The identifier of a group",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-category",
          description: "A parameter to filter projects by their category",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of projects is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of projects, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListProjects to list the next set of projects",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of projects to return in a single call to ListProjects. When the number of projects to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListProjects to list the next set of projects",
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
      name: "list-rules",
      description:
        "Lists existing rules. In Amazon DataZone, a rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain in which the rules are to be listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-type",
          description: "The target type of the rule",
          args: {
            name: "string",
            suggestions: ["DOMAIN_UNIT"],
          },
        },
        {
          name: "--target-identifier",
          description: "The target ID of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-type",
          description: "The type of the rule",
          args: {
            name: "string",
            suggestions: [
              "METADATA_FORM_ENFORCEMENT",
              "GLOSSARY_TERM_ENFORCEMENT",
            ],
          },
        },
        {
          name: "--action",
          description: "The action of the rule",
          args: {
            name: "string",
            suggestions: [
              "CREATE_LISTING_CHANGE_SET",
              "CREATE_SUBSCRIPTION_REQUEST",
            ],
          },
        },
        {
          name: "--project-ids",
          description: "The IDs of projects in which rules are to be listed",
          args: {
            name: "list",
          },
        },
        {
          name: "--asset-types",
          description: "The asset types of the rule",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-product",
          description: "The data product of the rule",
        },
        {
          name: "--no-data-product",
          description: "The data product of the rule",
        },
        {
          name: "--include-cascaded",
          description:
            "Specifies whether to include cascading rules in the results",
        },
        {
          name: "--no-include-cascaded",
          description:
            "Specifies whether to include cascading rules in the results",
        },
        {
          name: "--max-results",
          description:
            "The maximum number of rules to return in a single call to ListRules. When the number of rules to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListRules to list the next set of rules",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of rules is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of rules, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListRules to list the next set of rules",
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
      name: "list-subscription-grants",
      description: "Lists subscription grants",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-id",
          description: "The identifier of the Amazon DataZone environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscription-target-id",
          description: "The identifier of the subscription target",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscribed-listing-id",
          description: "The identifier of the subscribed listing",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscription-id",
          description: "The identifier of the subscription",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-id",
          description:
            "The ID of the owning project of the subscription grants",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-iam-principal-arn",
          description: "The ARN of the owning IAM principal",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-user-id",
          description: "The ID of the owning user",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-group-id",
          description: "The ID of the owning group",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Specifies the way of sorting the results of this action",
          args: {
            name: "string",
            suggestions: ["CREATED_AT", "UPDATED_AT"],
          },
        },
        {
          name: "--sort-order",
          description: "Specifies the sort order of this action",
          args: {
            name: "string",
            suggestions: ["ASCENDING", "DESCENDING"],
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of subscription grants to return in a single call to ListSubscriptionGrants. When the number of subscription grants to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListSubscriptionGrants to list the next set of subscription grants",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of subscription grants is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of subscription grants, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListSubscriptionGrants to list the next set of subscription grants",
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
      name: "list-subscription-requests",
      description: "Lists Amazon DataZone subscription requests",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Specifies the status of the subscription requests.  This is not a required parameter, but if not specified, by default, Amazon DataZone returns only PENDING subscription requests",
          args: {
            name: "string",
            suggestions: ["PENDING", "ACCEPTED", "REJECTED"],
          },
        },
        {
          name: "--subscribed-listing-id",
          description: "The identifier of the subscribed listing",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-id",
          description:
            "The identifier of the project for the subscription requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-iam-principal-arn",
          description: "The ARN of the owning IAM principal",
          args: {
            name: "string",
          },
        },
        {
          name: "--approver-project-id",
          description:
            "The identifier of the subscription request approver's project",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-user-id",
          description: "The ID of the owning user",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-group-id",
          description: "The ID of the owning group",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description: "Specifies the way to sort the results of this action",
          args: {
            name: "string",
            suggestions: ["CREATED_AT", "UPDATED_AT"],
          },
        },
        {
          name: "--sort-order",
          description:
            "Specifies the sort order for the results of this action",
          args: {
            name: "string",
            suggestions: ["ASCENDING", "DESCENDING"],
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of subscription requests to return in a single call to ListSubscriptionRequests. When the number of subscription requests to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListSubscriptionRequests to list the next set of subscription requests",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of subscription requests is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of subscription requests, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListSubscriptionRequests to list the next set of subscription requests",
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
      name: "list-subscription-targets",
      description: "Lists subscription targets in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain where you want to list subscription targets",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The identifier of the environment where you want to list subscription targets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Specifies the way in which the results of this action are to be sorted",
          args: {
            name: "string",
            suggestions: ["CREATED_AT", "UPDATED_AT"],
          },
        },
        {
          name: "--sort-order",
          description:
            "Specifies the sort order for the results of this action",
          args: {
            name: "string",
            suggestions: ["ASCENDING", "DESCENDING"],
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of subscription targets to return in a single call to ListSubscriptionTargets. When the number of subscription targets to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListSubscriptionTargets to list the next set of subscription targets",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of subscription targets is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of subscription targets, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListSubscriptionTargets to list the next set of subscription targets",
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
      name: "list-subscriptions",
      description: "Lists subscriptions in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscription-request-identifier",
          description:
            "The identifier of the subscription request for the subscriptions that you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The status of the subscriptions that you want to list.  This is not a required parameter, but if not provided, by default, Amazon DataZone returns only APPROVED subscriptions",
          args: {
            name: "string",
            suggestions: ["APPROVED", "REVOKED", "CANCELLED"],
          },
        },
        {
          name: "--subscribed-listing-id",
          description:
            "The identifier of the subscribed listing for the subscriptions that you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-id",
          description: "The identifier of the owning project",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-iam-principal-arn",
          description: "The ARN of the owning IAM principal",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-user-id",
          description: "The ID of the owning user",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-group-id",
          description: "The ID of the owning group",
          args: {
            name: "string",
          },
        },
        {
          name: "--approver-project-id",
          description:
            "The identifier of the project for the subscription's approver",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Specifies the way in which the results of this action are to be sorted",
          args: {
            name: "string",
            suggestions: ["CREATED_AT", "UPDATED_AT"],
          },
        },
        {
          name: "--sort-order",
          description:
            "Specifies the sort order for the results of this action",
          args: {
            name: "string",
            suggestions: ["ASCENDING", "DESCENDING"],
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of subscriptions to return in a single call to ListSubscriptions. When the number of subscriptions to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListSubscriptions to list the next set of Subscriptions",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of subscriptions is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of subscriptions, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListSubscriptions to list the next set of subscriptions",
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
      description: "Lists tags for the specified resource in Amazon DataZone",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource whose tags you want to list",
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
      name: "list-time-series-data-points",
      description: "Lists time series data points",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain that houses the assets for which you want to list time series data points",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-identifier",
          description:
            "The ID of the asset for which you want to list data points",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description:
            "The type of the asset for which you want to list data points",
          args: {
            name: "string",
            suggestions: ["ASSET", "LISTING"],
          },
        },
        {
          name: "--form-name",
          description: "The name of the time series data points form",
          args: {
            name: "string",
          },
        },
        {
          name: "--started-at",
          description:
            "The timestamp at which the data points that you want to list started",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--ended-at",
          description:
            "The timestamp at which the data points that you wanted to list ended",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of data points is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of data points, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListTimeSeriesDataPoints to list the next set of data points",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of data points to return in a single call to ListTimeSeriesDataPoints. When the number of data points to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListTimeSeriesDataPoints to list the next set of data points",
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
      name: "post-lineage-event",
      description: "Posts a data lineage event",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to post a data lineage event",
          args: {
            name: "string",
          },
        },
        {
          name: "--event",
          description:
            "The data lineage event that you want to post. Only open-lineage run event are supported as events",
          args: {
            name: "blob",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "post-time-series-data-points",
      description:
        "Posts time series data points to Amazon DataZone for the specified asset",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain in which you want to post time series data points",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-identifier",
          description:
            "The ID of the asset for which you want to post time series data points",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description:
            "The type of the asset for which you want to post data points",
          args: {
            name: "string",
            suggestions: ["ASSET", "LISTING"],
          },
        },
        {
          name: "--forms",
          description:
            "The forms that contain the data points that you want to post",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "put-data-export-configuration",
      description:
        "Creates data export configuration details. If you want to temporarily disable export and later re-enable it for the same domain, use the --no-enable-export flag to disable and the --enable-export flag to re-enable. This preserves the configuration and allows you to re-enable export without deleting S3 table.  You can enable asset metadata export for only one domain per account per Region. To enable export for a different domain, complete the following steps:   Delete the export configuration for the currently enabled domain using the DeleteDataExportConfiguration operation.   Delete the asset S3 table under the aws-sagemaker-catalog S3 table bucket. We recommend backing up the S3 table before deletion.   Call the PutDataExportConfiguration API to enable export for the new domain",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The domain ID for which you want to create data export configuration details",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-export",
          description:
            "Specifies that the export is to be enabled as part of creating data export configuration details",
        },
        {
          name: "--no-enable-export",
          description:
            "Specifies that the export is to be enabled as part of creating data export configuration details",
        },
        {
          name: "--encryption-configuration",
          description:
            "The encryption configuration as part of creating data export configuration details. The KMS key provided here as part of encryptionConfiguration must have the required permissions as described in KMS permissions for exporting asset metadata in Amazon SageMaker Unified Studio",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided",
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
      name: "put-environment-blueprint-configuration",
      description:
        "Writes the configuration for the specified environment blueprint in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-blueprint-identifier",
          description: "The identifier of the environment blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-role-arn",
          description: "The ARN of the provisioning role",
          args: {
            name: "string",
          },
        },
        {
          name: "--manage-access-role-arn",
          description: "The ARN of the manage access role",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-role-permission-boundary",
          description: "The environment role permissions boundary",
          args: {
            name: "string",
          },
        },
        {
          name: "--enabled-regions",
          description: "Specifies the enabled Amazon Web Services Regions",
          args: {
            name: "list",
          },
        },
        {
          name: "--regional-parameters",
          description: "The regional parameters in the environment blueprint",
          args: {
            name: "map",
          },
        },
        {
          name: "--resource-configurations",
          description:
            "The resource configurations of the environment blueprint",
          args: {
            name: "list",
          },
        },
        {
          name: "--allow-user-provided-configurations",
          description:
            "Specifies whether user-provided resource configurations are allowed for the environment blueprint",
        },
        {
          name: "--no-allow-user-provided-configurations",
          description:
            "Specifies whether user-provided resource configurations are allowed for the environment blueprint",
        },
        {
          name: "--global-parameters",
          description: "Region-agnostic environment blueprint parameters",
          args: {
            name: "map",
          },
        },
        {
          name: "--provisioning-configurations",
          description: "The provisioning configuration of a blueprint",
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
      name: "query-graph",
      description: "Queries entities in the graph store",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--match",
          description: "List of query match clauses",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of entities to return in a single call to QueryGraph. When the number of entities to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to QueryGraph to list the next set of entities",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of entities is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of entities, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to QueryGraph to list the next set of entities",
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-attributes",
          description:
            "Additional details on the queried entity that can be requested in the response",
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
      name: "reject-predictions",
      description:
        "Rejects automatically generated business-friendly metadata for your Amazon DataZone assets",
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the prediction",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description: "The revision that is to be made to the asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--reject-rule",
          description:
            "Specifies the rule (or the conditions) under which a prediction can be rejected",
          args: {
            name: "structure",
          },
        },
        {
          name: "--reject-choices",
          description:
            "Specifies the prediction (aka, the automatically generated piece of metadata) and the target (for example, a column name) that can be rejected",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "reject-subscription-request",
      description: "Rejects the specified subscription request",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which the subscription request was rejected",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the subscription request that was rejected",
          args: {
            name: "string",
          },
        },
        {
          name: "--decision-comment",
          description:
            "The decision comment of the rejected subscription request",
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
      name: "remove-entity-owner",
      description: "Removes an owner from an entity",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to remove an owner from an entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description:
            "The type of the entity from which you want to remove an owner",
          args: {
            name: "string",
            suggestions: ["DOMAIN_UNIT"],
          },
        },
        {
          name: "--entity-identifier",
          description:
            "The ID of the entity from which you want to remove an owner",
          args: {
            name: "string",
          },
        },
        {
          name: "--owner",
          description: "The owner that you want to remove from an entity",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "remove-policy-grant",
      description: "Removes a policy grant",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to remove a policy grant",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type",
          description:
            "The type of the entity from which you want to remove a policy grant",
          args: {
            name: "string",
            suggestions: [
              "DOMAIN_UNIT",
              "ENVIRONMENT_BLUEPRINT_CONFIGURATION",
              "ENVIRONMENT_PROFILE",
              "ASSET_TYPE",
            ],
          },
        },
        {
          name: "--entity-identifier",
          description:
            "The ID of the entity from which you want to remove a policy grant",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-type",
          description: "The type of the policy that you want to remove",
          args: {
            name: "string",
            suggestions: [
              "CREATE_DOMAIN_UNIT",
              "OVERRIDE_DOMAIN_UNIT_OWNERS",
              "ADD_TO_PROJECT_MEMBER_POOL",
              "OVERRIDE_PROJECT_OWNERS",
              "CREATE_GLOSSARY",
              "CREATE_FORM_TYPE",
              "CREATE_ASSET_TYPE",
              "CREATE_PROJECT",
              "CREATE_ENVIRONMENT_PROFILE",
              "DELEGATE_CREATE_ENVIRONMENT_PROFILE",
              "CREATE_ENVIRONMENT",
              "CREATE_ENVIRONMENT_FROM_BLUEPRINT",
              "CREATE_PROJECT_FROM_PROJECT_PROFILE",
              "USE_ASSET_TYPE",
            ],
          },
        },
        {
          name: "--principal",
          description:
            "The principal from which you want to remove a policy grant",
          args: {
            name: "structure",
          },
        },
        {
          name: "--grant-identifier",
          description:
            "The ID of the policy grant that is to be removed from a specified entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "revoke-subscription",
      description: "Revokes a specified subscription in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain where you want to revoke a subscription",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the revoked subscription",
          args: {
            name: "string",
          },
        },
        {
          name: "--retain-permissions",
          description:
            "Specifies whether permissions are retained when the subscription is revoked",
        },
        {
          name: "--no-retain-permissions",
          description:
            "Specifies whether permissions are retained when the subscription is revoked",
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
      name: "search",
      description:
        'Searches for assets in Amazon DataZone. Search in Amazon DataZone is a powerful capability that enables users to discover and explore data assets, glossary terms, and data products across their organization. It provides both basic and advanced search functionality, allowing users to find resources based on names, descriptions, metadata, and other attributes. Search can be scoped to specific types of resources (like assets, glossary terms, or data products) and can be filtered using various criteria such as creation date, owner, or status. The search functionality is essential for making the wealth of data resources in an organization discoverable and usable, helping users find the right data for their needs quickly and efficiently. Many search commands in Amazon DataZone are paginated, including search and search-types. When the result set is large, Amazon DataZone returns a nextToken in the response. This token can be used to retrieve the next page of results.  Prerequisites:   The --domain-identifier must refer to an existing Amazon DataZone domain.    --search-scope must be one of: ASSET, GLOSSARY_TERM, DATA_PRODUCT, or GLOSSARY.   The user must have search permissions in the specified domain.   If using --filters, ensure that the JSON is well-formed and that each filter includes valid attribute and value keys.    For paginated results, be prepared to use --next-token to fetch additional pages.   To run a standard free-text search, the searchText parameter must be supplied. By default, all searchable fields are indexed for semantic search and will return semantic matches for SearchListings queries. To prevent semantic search indexing for a custom form attribute, see the CreateFormType API documentation. To run a lexical search query, enclose the query with double quotes (""). This will disable semantic search even for fields that have semantic search enabled and will only return results that contain the keywords wrapped by double quotes (order of tokens in the query is not enforced). Free-text search is supported for all attributes annotated with @amazon.datazone#searchable. To run a filtered search, provide filter clause using the filters parameter. To filter on glossary terms, use the special attribute __DataZoneGlossaryTerms. To filter on an indexed numeric attribute (i.e., a numeric attribute annotated with @amazon.datazone#sortable), provide a filter using the intValue parameter. The filters parameter can also be used to run more advanced free-text searches that target specific attributes (attributes must be annotated with @amazon.datazone#searchable for free-text search). Create/update timestamp filtering is supported using the special creationTime/lastUpdatedTime attributes. Filter types can be mixed and matched to power complex queries.  To find out whether an attribute has been annotated and indexed for a given search type, use the GetFormType API to retrieve the form containing the attribute',
      options: [
        {
          name: "--domain-identifier",
          description: "The identifier of the Amazon DataZone domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-identifier",
          description:
            "The identifier of the owning project specified for the search",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call to Search. When the number of results to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to Search to list the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of results is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of results, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to Search to list the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-scope",
          description: "The scope of the search",
          args: {
            name: "string",
            suggestions: ["ASSET", "GLOSSARY", "GLOSSARY_TERM", "DATA_PRODUCT"],
          },
        },
        {
          name: "--search-text",
          description: "Specifies the text for which to search",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-in",
          description: "The details of the search",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description: "Specifies the search filters",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort",
          description:
            "Specifies the way in which the search results are to be sorted",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-attributes",
          description: "Specifies additional attributes for the Search action",
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
      name: "search-group-profiles",
      description: "Searches group profiles in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which you want to search group profiles",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-type",
          description: "The group type for which to search",
          args: {
            name: "string",
            suggestions: [
              "SSO_GROUP",
              "DATAZONE_SSO_GROUP",
              "IAM_ROLE_SESSION_GROUP",
            ],
          },
        },
        {
          name: "--search-text",
          description: "Specifies the text for which to search",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call to SearchGroupProfiles. When the number of results to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to SearchGroupProfiles to list the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of results is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of results, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to SearchGroupProfiles to list the next set of results",
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
      name: "search-listings",
      description:
        'Searches listings in Amazon DataZone. SearchListings is a powerful capability that enables users to discover and explore published assets and data products across their organization. It provides both basic and advanced search functionality, allowing users to find resources based on names, descriptions, metadata, and other attributes. SearchListings also supports filtering using various criteria such as creation date, owner, or status. This API is essential for making the wealth of data resources in an organization discoverable and usable, helping users find the right data for their needs quickly and efficiently. SearchListings returns results in a paginated format. When the result set is large, the response will include a nextToken, which can be used to retrieve the next page of results. The SearchListings API gives users flexibility in specifying what kind of search is run. To run a standard free-text search, the searchText parameter must be supplied. By default, all searchable fields are indexed for semantic search and will return semantic matches for SearchListings queries. To prevent semantic search indexing for a custom form attribute, see the CreateFormType API documentation. To run a lexical search query, enclose the query with double quotes (""). This will disable semantic search even for fields that have semantic search enabled and will only return results that contain the keywords wrapped by double quotes (order of tokens in the query is not enforced). Free-text search is supported for all attributes annotated with @amazon.datazone#searchable. To run a filtered search, provide filter clause using the filters parameter. To filter on glossary terms, use the special attribute __DataZoneGlossaryTerms. To filter on an indexed numeric attribute (i.e., a numeric attribute annotated with @amazon.datazone#sortable), provide a filter using the intValue parameter. The filters parameter can also be used to run more advanced free-text searches that target specific attributes (attributes must be annotated with @amazon.datazone#searchable for free-text search). Create/update timestamp filtering is supported using the special creationTime/lastUpdatedTime attributes. Filter types can be mixed and matched to power complex queries.  To find out whether an attribute has been annotated and indexed for a given search type, use the GetFormType API to retrieve the form containing the attribute',
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the domain in which to search listings",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-text",
          description: "Specifies the text for which to search",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-in",
          description: "The details of the search",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call to SearchListings. When the number of results to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to SearchListings to list the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of results is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of results, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to SearchListings to list the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "Specifies the filters for the search of listings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--aggregations",
          description:
            "Enables you to specify one or more attributes to compute and return counts grouped by field values",
          args: {
            name: "list",
          },
        },
        {
          name: "--sort",
          description: "Specifies the way for sorting the search results",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-attributes",
          description: "Specifies additional attributes for the search",
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
      name: "search-types",
      description:
        "Searches for types in Amazon DataZone. Prerequisites:   The --domain-identifier must refer to an existing Amazon DataZone domain.    --search-scope must be one of the valid values including: ASSET_TYPE, GLOSSARY_TERM_TYPE, DATA_PRODUCT_TYPE.   The --managed flag must be present without a value.   The user must have permissions for form or asset types in the domain.   If using --filters, ensure that the JSON is valid.   Filters contain correct structure (attribute, value, operator)",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which to invoke the SearchTypes action",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call to SearchTypes. When the number of results to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to SearchTypes to list the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of results is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of results, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to SearchTypes to list the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-scope",
          description: "Specifies the scope of the search for types",
          args: {
            name: "string",
            suggestions: ["ASSET_TYPE", "FORM_TYPE", "LINEAGE_NODE_TYPE"],
          },
        },
        {
          name: "--search-text",
          description: "Specifies the text for which to search",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-in",
          description: "The details of the search",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description: "The filters for the SearchTypes action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort",
          description: "The specifies the way to sort the SearchTypes results",
          args: {
            name: "structure",
          },
        },
        {
          name: "--managed",
          description: "Specifies whether the search is managed",
        },
        {
          name: "--no-managed",
          description: "Specifies whether the search is managed",
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
      name: "search-user-profiles",
      description: "Searches user profiles in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which you want to search user profiles",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-type",
          description:
            "Specifies the user type for the SearchUserProfiles action",
          args: {
            name: "string",
            suggestions: [
              "SSO_USER",
              "DATAZONE_USER",
              "DATAZONE_SSO_USER",
              "DATAZONE_IAM_USER",
            ],
          },
        },
        {
          name: "--search-text",
          description: "Specifies the text for which to search",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call to SearchUserProfiles. When the number of results to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to SearchUserProfiles to list the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "When the number of results is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of results, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to SearchUserProfiles to list the next set of results",
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
      name: "start-data-source-run",
      description:
        "Start the run of the specified data source in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which to start a data source run",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-identifier",
          description: "The identifier of the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "start-metadata-generation-run",
      description:
        "Starts the metadata generation run. Prerequisites:   Asset must be created and belong to the specified domain and project.    Asset type must be supported for metadata generation (e.g., Amazon Web Services Glue table).   Asset must have a structured schema with valid rows and columns.   Valid values for --type: BUSINESS_DESCRIPTIONS, BUSINESS_NAMES, BUSINESS_GLOSSARY_ASSOCIATIONS.   The user must have permission to run metadata generation in the domain/project",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain where you want to start a metadata generation run",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of the metadata generation run",
          args: {
            name: "string",
            suggestions: [
              "BUSINESS_DESCRIPTIONS",
              "BUSINESS_NAMES",
              "BUSINESS_GLOSSARY_ASSOCIATIONS",
            ],
          },
        },
        {
          name: "--types",
          description: "The types of the metadata generation run",
          args: {
            name: "list",
          },
        },
        {
          name: "--target",
          description:
            "The asset for which you want to start a metadata generation run",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-identifier",
          description:
            "The ID of the project that owns the asset for which you want to start a metadata generation run",
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
      name: "start-notebook-export",
      description:
        "Starts a notebook export in Amazon SageMaker Unified Studio. This operation exports a notebook to a specified file format and stores the output in Amazon Simple Storage Service",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon SageMaker Unified Studio domain in which to export the notebook",
          args: {
            name: "string",
          },
        },
        {
          name: "--notebook-identifier",
          description: "The identifier of the notebook to export",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-identifier",
          description: "The identifier of the project that owns the notebook",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-format",
          description:
            "The file format for the notebook export. Valid values are PDF and IPYNB",
          args: {
            name: "string",
            suggestions: ["PDF", "IPYNB"],
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided",
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
      name: "start-notebook-import",
      description:
        "Starts a notebook import in Amazon SageMaker Unified Studio. This operation imports a notebook from an Amazon Simple Storage Service location into a project",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon SageMaker Unified Studio domain in which to import the notebook",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-identifier",
          description:
            "The identifier of the project that will own the imported notebook",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-location",
          description:
            "The source location of the notebook to import. Specify either a single Amazon Simple Storage Service URI, or a list of objects to import as the notebook's cells",
          args: {
            name: "structure",
          },
        },
        {
          name: "--name",
          description:
            "The name of the imported notebook. The name must be between 1 and 256 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the imported notebook",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of the notebook to import. If not specified, defaults to DATA",
          args: {
            name: "string",
            suggestions: ["DATA", "SQL"],
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided",
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
      name: "start-notebook-run",
      description:
        "Starts a notebook run in Amazon SageMaker Unified Studio. A notebook run represents the execution of an Amazon SageMaker notebook within a project. You can configure compute, network, timeout, and environment settings for the run",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon SageMaker Unified Studio domain in which the notebook run is started",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-identifier",
          description:
            "The identifier of the project that owns the notebook run",
          args: {
            name: "string",
          },
        },
        {
          name: "--notebook-identifier",
          description: "The identifier of the notebook to run",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule-identifier",
          description:
            "The identifier of the schedule associated with the notebook run",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-configuration",
          description:
            "The compute configuration for the notebook run, including instance type and environment version",
          args: {
            name: "structure",
          },
        },
        {
          name: "--network-configuration",
          description:
            "The network configuration for the notebook run, including network access type and optional VPC settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--timeout-configuration",
          description:
            "The timeout configuration for the notebook run. The default timeout is 720 minutes (12 hours) and the maximum is 1440 minutes (24 hours)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--notification-configuration",
          description:
            "The notification configuration for the notebook run. Use this to specify the notebook run states that trigger notifications",
          args: {
            name: "structure",
          },
        },
        {
          name: "--trigger-source",
          description: "The source that triggered the notebook run",
          args: {
            name: "structure",
          },
        },
        {
          name: "--metadata",
          description:
            "The metadata for the notebook run, specified as key-value pairs. You can specify up to 50 entries, with keys up to 128 characters and values up to 1024 characters",
          args: {
            name: "map",
          },
        },
        {
          name: "--parameters",
          description:
            "The sensitive parameters for the notebook run, specified as key-value pairs. You can specify up to 50 entries, with keys up to 128 characters and values up to 1024 characters",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided",
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
      name: "start-notebook-sync",
      description:
        "Starts a notebook sync in Amazon SageMaker Unified Studio. This operation syncs a notebook from a Git repository into a project",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon SageMaker Unified Studio domain in which to sync the notebook",
          args: {
            name: "string",
          },
        },
        {
          name: "--owning-project-identifier",
          description:
            "The identifier of the project that will own the synced notebook",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-location",
          description:
            "The source location of the notebook to sync. This specifies the Amazon Simple Storage Service URI of the notebook file",
          args: {
            name: "structure",
          },
        },
        {
          name: "--git-metadata",
          description:
            "The Git metadata for the notebook sync, including repository, branch, and commit information",
          args: {
            name: "structure",
          },
        },
        {
          name: "--notebook-id",
          description:
            "The identifier of an existing notebook to sync. If not specified, a new notebook is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the notebook. The name must be between 1 and 256 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the notebook",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided",
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
      name: "stop-notebook-run",
      description:
        "Stops a running notebook run in Amazon SageMaker Unified Studio",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon SageMaker Unified Studio domain in which the notebook run is stopped",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the notebook run to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided",
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
      name: "tag-resource",
      description: "Tags a resource in Amazon DataZone",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource to be tagged in Amazon DataZone",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Specifies the tags for the TagResource action",
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
      description: "Untags a resource in Amazon DataZone",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource to be untagged in Amazon DataZone",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "Specifies the tag keys for the UntagResource action",
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
      name: "update-account-pool",
      description: "Updates the account pool",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The domain ID where the account pool that is to be updated lives",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the account pool that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the account pool that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the account pool that is to be udpated",
          args: {
            name: "string",
          },
        },
        {
          name: "--resolution-strategy",
          description:
            "The mechanism used to resolve the account selection from the account pool",
          args: {
            name: "string",
            suggestions: ["MANUAL"],
          },
        },
        {
          name: "--account-source",
          description:
            "The source of accounts for the account pool. In the current release, it's either a static list of accounts provided by the customer or a custom Amazon Web Services Lambda handler",
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
      name: "update-asset-filter",
      description:
        "Updates an asset filter. Prerequisites:   The domain, asset, and asset filter identifier must all exist.    The asset must contain the columns being referenced in the update.   If applying a row filter, ensure the column referenced in the expression exists in the asset schema",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to update an asset filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-identifier",
          description: "The ID of the data asset",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the asset filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the asset filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the asset filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description: "The configuration of the asset filter",
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
      name: "update-connection",
      description:
        "Updates a connection. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services",
      options: [
        {
          name: "--configurations",
          description: "The configurations of the connection",
          args: {
            name: "list",
          },
        },
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where a connection is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the connection to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of a connection",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-location",
          description: "The location where a connection is to be updated",
          args: {
            name: "structure",
          },
        },
        {
          name: "--props",
          description: "The connection props",
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
      name: "update-data-source",
      description: "Updates the specified data source in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the domain in which to update a data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the data source to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name to be updated as part of the UpdateDataSource action",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description to be updated as part of the UpdateDataSource action",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-setting",
          description:
            "The enable setting to be updated as part of the UpdateDataSource action",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
          },
        },
        {
          name: "--publish-on-import",
          description:
            "The publish on import setting to be updated as part of the UpdateDataSource action",
        },
        {
          name: "--no-publish-on-import",
          description:
            "The publish on import setting to be updated as part of the UpdateDataSource action",
        },
        {
          name: "--asset-forms-input",
          description:
            "The asset forms to be updated as part of the UpdateDataSource action",
          args: {
            name: "list",
          },
        },
        {
          name: "--schedule",
          description:
            "The schedule to be updated as part of the UpdateDataSource action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--configuration",
          description:
            "The configuration to be updated as part of the UpdateDataSource action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--recommendation",
          description:
            "The recommendation to be updated as part of the UpdateDataSource action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--retain-permissions-on-revoke-failure",
          description:
            "Specifies that the granted permissions are retained in case of a self-subscribe functionality failure for a data source",
        },
        {
          name: "--no-retain-permissions-on-revoke-failure",
          description:
            "Specifies that the granted permissions are retained in case of a self-subscribe functionality failure for a data source",
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
      name: "update-designation",
      description:
        "Updates an existing user-created designation. Managed designations cannot be modified. Omit a field to leave its current value unchanged",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain that contains the designation to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The unique ID of the designation to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The updated name of the designation. The name must be unique within the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The updated human-readable description of the designation and its intended use",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The updated Cedar permit policy. Omit to keep the existing policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "Specifies whether deletion protection is enabled for this designation. Omit to keep the existing value",
        },
        {
          name: "--no-deletion-protection",
          description:
            "Specifies whether deletion protection is enabled for this designation. Omit to keep the existing value",
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
      name: "update-domain",
      description: "Updates a Amazon DataZone domain",
      options: [
        {
          name: "--identifier",
          description:
            "The ID of the Amazon Web Services domain that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description to be updated as part of the UpdateDomain action",
          args: {
            name: "string",
          },
        },
        {
          name: "--single-sign-on",
          description:
            "The single sign-on option to be updated as part of the UpdateDomain action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--domain-execution-role",
          description:
            "The domain execution role to be updated as part of the UpdateDomain action",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-role",
          description: "The service role of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name to be updated as part of the UpdateDomain action",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "update-domain-unit",
      description: "Updates the domain unit",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where you want to update a domain unit",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the domain unit that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the domain unit that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the domain unit that you want to update",
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
      name: "update-environment",
      description: "Updates the specified environment in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the domain in which the environment is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the environment that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name to be updated as part of the UpdateEnvironment action",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description to be updated as part of the UpdateEnvironment action",
          args: {
            name: "string",
          },
        },
        {
          name: "--glossary-terms",
          description:
            "The glossary terms to be updated as part of the UpdateEnvironment action",
          args: {
            name: "list",
          },
        },
        {
          name: "--blueprint-version",
          description:
            "The blueprint version to which the environment should be updated. You can only specify the following string for this parameter: latest",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-parameters",
          description: "The user parameters of the environment",
          args: {
            name: "list",
          },
        },
        {
          name: "--environment-configuration-name",
          description: "The configuration name of the environment",
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
      name: "update-environment-action",
      description: "Updates an environment action",
      options: [
        {
          name: "--domain-identifier",
          description: "The domain ID of the environment action",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description: "The environment ID of the environment action",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the environment action",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description: "The parameters of the environment action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--name",
          description: "The name of the environment action",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the environment action",
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
      name: "update-environment-blueprint",
      description: "Updates an environment blueprint in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which an environment blueprint is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the environment blueprint to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description to be updated as part of the UpdateEnvironmentBlueprint action",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioning-properties",
          description:
            "The provisioning properties to be updated as part of the UpdateEnvironmentBlueprint action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-parameters",
          description:
            "The user parameters to be updated as part of the UpdateEnvironmentBlueprint action",
          args: {
            name: "list",
          },
        },
        {
          name: "--blueprint-category",
          description:
            "The category to update. The only valid value is TOOLING",
          args: {
            name: "string",
            suggestions: ["TOOLING"],
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
      name: "update-environment-profile",
      description:
        "Updates the specified environment profile in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which an environment profile is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the environment profile that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name to be updated as part of the UpdateEnvironmentProfile action",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description to be updated as part of the UpdateEnvironmentProfile action",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-parameters",
          description:
            "The user parameters to be updated as part of the UpdateEnvironmentProfile action",
          args: {
            name: "list",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The Amazon Web Services account in which a specified environment profile is to be udpated",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-region",
          description:
            "The Amazon Web Services Region in which a specified environment profile is to be updated",
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
      name: "update-glossary",
      description:
        "Updates the business glossary in Amazon DataZone. Prerequisites:   The glossary must exist in the given domain.    The caller must have the datazone:UpdateGlossary permission to update it.   When updating the name, the new name must be unique within the domain.   The glossary must not be deleted or in a terminal state",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which a business glossary is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the business glossary to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name to be updated as part of the UpdateGlossary action",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description to be updated as part of the UpdateGlossary action",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The status to be updated as part of the UpdateGlossary action",
          args: {
            name: "string",
            suggestions: ["DISABLED", "ENABLED"],
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that is provided to ensure the idempotency of the request",
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
      name: "update-glossary-term",
      description:
        "Updates a business glossary term in Amazon DataZone. Prerequisites:   Glossary term must exist in the specified domain.    New name must not conflict with existing terms in the same glossary.   User must have permissions on the term.   The term must not be in DELETED status",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which a business glossary term is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--glossary-identifier",
          description:
            "The identifier of the business glossary in which a term is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the business glossary term that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name to be updated as part of the UpdateGlossaryTerm action",
          args: {
            name: "string",
          },
        },
        {
          name: "--short-description",
          description:
            "The short description to be updated as part of the UpdateGlossaryTerm action",
          args: {
            name: "string",
          },
        },
        {
          name: "--long-description",
          description:
            "The long description to be updated as part of the UpdateGlossaryTerm action",
          args: {
            name: "string",
          },
        },
        {
          name: "--term-relations",
          description:
            "The term relations to be updated as part of the UpdateGlossaryTerm action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--status",
          description:
            "The status to be updated as part of the UpdateGlossaryTerm action",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
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
      name: "update-group-profile",
      description: "Updates the specified group profile in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which a group profile is updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-identifier",
          description: "The identifier of the group profile that is updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the group profile that is updated",
          args: {
            name: "string",
            suggestions: ["ASSIGNED", "NOT_ASSIGNED"],
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
      name: "update-notebook",
      description: "Updates a notebook in Amazon SageMaker Unified Studio",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon SageMaker Unified Studio domain in which the notebook exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the notebook to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The updated description of the notebook",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The updated status of the notebook",
          args: {
            name: "string",
            suggestions: [
              "ACTIVE",
              "ARCHIVED",
              "SYNC_IN_PROGRESS",
              "SYNC_FAILED",
            ],
          },
        },
        {
          name: "--name",
          description: "The updated name of the notebook",
          args: {
            name: "string",
          },
        },
        {
          name: "--cell-order",
          description: "The updated ordered list of cells in the notebook",
          args: {
            name: "list",
          },
        },
        {
          name: "--type",
          description: "The updated type of the notebook",
          args: {
            name: "string",
            suggestions: ["DATA", "SQL"],
          },
        },
        {
          name: "--metadata",
          description:
            "The updated metadata for the notebook, specified as key-value pairs",
          args: {
            name: "map",
          },
        },
        {
          name: "--parameters",
          description:
            "The updated sensitive parameters for the notebook, specified as key-value pairs",
          args: {
            name: "map",
          },
        },
        {
          name: "--environment-configuration",
          description: "The updated environment configuration for the notebook",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided",
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
      name: "update-project",
      description: "Updates the specified project in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the Amazon DataZone domain where a project is being updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The identifier of the project that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name to be updated as part of the UpdateProject action",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description to be updated as part of the UpdateProject action",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-tags",
          description: "The resource tags of the project",
          args: {
            name: "map",
          },
        },
        {
          name: "--glossary-terms",
          description:
            "The glossary terms to be updated as part of the UpdateProject action",
          args: {
            name: "list",
          },
        },
        {
          name: "--domain-unit-id",
          description: "The ID of the domain unit",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-deployment-details",
          description: "The environment deployment details of the project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-parameters",
          description: "The user parameters of the project",
          args: {
            name: "list",
          },
        },
        {
          name: "--project-profile-version",
          description:
            "The project profile version to which the project should be updated. You can only specify the following string for this parameter: latest",
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
      name: "update-project-profile",
      description: "Updates a project profile",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where a project profile is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of a project profile that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of a project profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of a project profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of a project profile",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
          },
        },
        {
          name: "--project-resource-tags",
          description: "The resource tags of the project profile",
          args: {
            name: "list",
          },
        },
        {
          name: "--allow-custom-project-resource-tags",
          description:
            "Specifies whether custom project resource tags are supported",
        },
        {
          name: "--no-allow-custom-project-resource-tags",
          description:
            "Specifies whether custom project resource tags are supported",
        },
        {
          name: "--project-resource-tags-description",
          description:
            "Field viewable through the UI that provides a project user with the allowed resource tag specifications",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-configurations",
          description: "The environment configurations of a project profile",
          args: {
            name: "list",
          },
        },
        {
          name: "--domain-unit-identifier",
          description:
            "The ID of the domain unit where a project profile is to be updated",
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
      name: "update-root-domain-unit-owner",
      description: "Updates the owner of the root domain unit",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The ID of the domain where the root domain unit owner is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--current-owner",
          description: "The current owner of the root domain unit",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-owner",
          description: "The new owner of the root domain unit",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request. This field is automatically populated if not provided",
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
      name: "update-rule",
      description:
        "Updates a rule. In Amazon DataZone, a rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards",
      options: [
        {
          name: "--domain-identifier",
          description: "The ID of the domain in which a rule is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The ID of the rule that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description: "The scrope of the rule",
          args: {
            name: "structure",
          },
        },
        {
          name: "--detail",
          description: "The detail of the rule",
          args: {
            name: "structure",
          },
        },
        {
          name: "--include-child-domain-units",
          description:
            "Specifies whether to update this rule in the child domain units",
        },
        {
          name: "--no-include-child-domain-units",
          description:
            "Specifies whether to update this rule in the child domain units",
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
      name: "update-subscription-grant-status",
      description:
        "Updates the status of the specified subscription grant status in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which a subscription grant status is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the subscription grant the status of which is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-identifier",
          description:
            "The identifier of the asset the subscription grant status of which is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The status to be updated as part of the UpdateSubscriptionGrantStatus action",
          args: {
            name: "string",
            suggestions: [
              "GRANT_PENDING",
              "REVOKE_PENDING",
              "GRANT_IN_PROGRESS",
              "REVOKE_IN_PROGRESS",
              "GRANTED",
              "REVOKED",
              "GRANT_FAILED",
              "REVOKE_FAILED",
            ],
          },
        },
        {
          name: "--failure-cause",
          description:
            "Specifies the error message that is returned if the operation cannot be successfully completed",
          args: {
            name: "structure",
          },
        },
        {
          name: "--target-name",
          description:
            "The target name to be updated as part of the UpdateSubscriptionGrantStatus action",
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
      name: "update-subscription-request",
      description:
        "Updates a specified subscription request in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which a subscription request is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the subscription request that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-reason",
          description: "The reason for the UpdateSubscriptionRequest action",
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
      name: "update-subscription-target",
      description:
        "Updates the specified subscription target in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which a subscription target is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-identifier",
          description:
            "The identifier of the environment in which a subscription target is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "Identifier of the subscription target that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name to be updated as part of the UpdateSubscriptionTarget action",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorized-principals",
          description:
            "The authorized principals to be updated as part of the UpdateSubscriptionTarget action",
          args: {
            name: "list",
          },
        },
        {
          name: "--applicable-asset-types",
          description:
            "The applicable asset types to be updated as part of the UpdateSubscriptionTarget action",
          args: {
            name: "list",
          },
        },
        {
          name: "--subscription-target-config",
          description:
            "The configuration to be updated as part of the UpdateSubscriptionTarget action",
          args: {
            name: "list",
          },
        },
        {
          name: "--manage-access-role",
          description:
            "The manage access role to be updated as part of the UpdateSubscriptionTarget action",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider",
          description:
            "The provider to be updated as part of the UpdateSubscriptionTarget action",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscription-grant-creation-mode",
          description:
            "Determines the subscription grant creation mode for this target, defining if grants are auto-created upon subscription approval or managed manually",
          args: {
            name: "string",
            suggestions: ["AUTOMATIC", "MANUAL"],
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
      name: "update-user-profile",
      description: "Updates the specified user profile in Amazon DataZone",
      options: [
        {
          name: "--domain-identifier",
          description:
            "The identifier of the Amazon DataZone domain in which a user profile is updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-identifier",
          description:
            "The identifier of the user whose user profile is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of the user profile that are to be updated",
          args: {
            name: "string",
            suggestions: ["IAM", "SSO"],
          },
        },
        {
          name: "--status",
          description: "The status of the user profile that are to be updated",
          args: {
            name: "string",
            suggestions: [
              "ASSIGNED",
              "NOT_ASSIGNED",
              "ACTIVATED",
              "DEACTIVATED",
            ],
          },
        },
        {
          name: "--session-name",
          description: "The session name for IAM role sessions",
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
