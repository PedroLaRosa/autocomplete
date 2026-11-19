const completionSpec: Fig.Spec = {
  name: "billing",
  description:
    "You can use the Billing API to programatically list the billing views available to you for a given time period. A billing view represents a set of billing data.  The Billing API provides the following endpoint:  https://billing.us-east-1.api.aws",
  subcommands: [
    {
      name: "associate-contract",
      description:
        "Private Pricing contracts let eligible payer accounts manage private pricing agreements with Amazon Web Services. This operation associates a private pricing contract with the caller's Amazon Web Services account. The caller must be a payer (management) account listed on the contract. This operation is idempotent, so retrying a request that already succeeded is safe",
      options: [
        {
          name: "--contract-arn",
          description:
            "The Amazon Resource Name (ARN) of the contract to associate with your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--contract-document-id",
          description:
            "The contract ID from the contract document. It can be found in the top right corner of your contract's pages. This value confirms that you have access to the contract you are associating",
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
      name: "associate-source-views",
      description:
        "Associates one or more source billing views with an existing billing view. This allows creating aggregate billing views that combine data from multiple sources",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the billing view to associate source views with",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-views",
          description:
            "A list of ARNs of the source billing views to associate. Source views can be of the following types:    PRIMARY - The billing view that contains all cost management data associated with an account.    CUSTOM - A billing view that a customer creates from one or more source views.    BILLING_GROUP - The billing view for an Billing Conductor billing group.    BILLING_TRANSFER - The billing view for the billing data that a bill transfer account is financially responsible for.    BILLING_TRANSFER_SHOWBACK - The billing view for billing data configured for showback or chargeback purposes",
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
      name: "cancel-contractual-investment-attestation",
      description:
        "Cancels a contractual investment attestation. This operation is idempotent, so retrying is safe. You can cancel an attestation only while it is still pending (its isCancellable value is true)",
      options: [
        {
          name: "--attestation-id",
          description: "The identifier of the investment attestation to cancel",
          args: {
            name: "string",
          },
        },
        {
          name: "--contract-arn",
          description:
            "The Amazon Resource Name (ARN) of the contract that contains the attested investment",
          args: {
            name: "string",
          },
        },
        {
          name: "--reason",
          description:
            "The reason for the cancellation. This value can be 1 to 80 characters",
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
      name: "create-billing-view",
      description:
        "Creates a billing view with the specified billing view attributes",
      options: [
        {
          name: "--name",
          description: "The name of the billing view",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the billing view",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-views",
          description:
            "A list of billing views used as the data source for the custom billing view. Source views can be of the following types:    PRIMARY - The billing view that contains all cost management data associated with an account.    CUSTOM - A billing view that a customer creates from one or more source views.    BILLING_GROUP - The billing view for an Billing Conductor billing group.    BILLING_TRANSFER - The billing view for the billing data that a bill transfer account is financially responsible for.    BILLING_TRANSFER_SHOWBACK - The billing view for billing data configured for showback or chargeback purposes",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-filter-expression",
          description:
            "See Expression. Billing view only supports LINKED_ACCOUNT, Tags, and CostCategories",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. If the original request completes successfully, any subsequent retries complete successfully without performing any further actions with an idempotent request",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-tags",
          description:
            "A list of key value map specifying tags associated to the billing view being created",
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
      name: "create-contractual-investment-attestation",
      description:
        "Creates an attestation that claims an investment award for a completed milestone or outcome within a private pricing contract. Supply a clientToken to make the request idempotent so a safe retry does not create a duplicate attestation. This operation starts an asynchronous review and returns an attestationId while the attestation is pending",
      options: [
        {
          name: "--contract-arn",
          description:
            "The Amazon Resource Name (ARN) of the contract that contains the investment being attested",
          args: {
            name: "string",
          },
        },
        {
          name: "--investment-summary-id",
          description:
            "The identifier of the investment summary being attested. This is the parent to the investmentId",
          args: {
            name: "string",
          },
        },
        {
          name: "--investment-id",
          description:
            "The identifier of the investment (outcome) being attested",
          args: {
            name: "string",
          },
        },
        {
          name: "--contract-document-id",
          description:
            "The contract ID from the contract document, located in the top-right corner of the private pricing contract pages. This value confirms that you have access to the contract",
          args: {
            name: "string",
          },
        },
        {
          name: "--approver-details",
          description:
            "The details of the executive who authorized the attestation, under the terms of the private pricing contract. The executive receives a click-to-accept email to confirm the attestation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--investment-disbursed-at",
          description:
            "The date on which the investment is disbursed to the investment accounts. The disbursement date is subject to review timelines",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--attestation-details",
          description:
            "The details of the attestation, including the value being claimed and how the resulting investment is distributed across investment accounts",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-recipients",
          description:
            "The email addresses to copy as viewers on the executive approval request",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry completes without performing any further actions",
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
      name: "delete-billing-view",
      description: "Deletes the specified billing view",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view",
          args: {
            name: "string",
          },
        },
        {
          name: "--force",
          description:
            "If set to true, forces deletion of the billing view even if it has derived resources (e.g. other billing views or budgets). Use with caution as this may break dependent resources",
        },
        {
          name: "--no-force",
          description:
            "If set to true, forces deletion of the billing view even if it has derived resources (e.g. other billing views or budgets). Use with caution as this may break dependent resources",
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
      name: "disassociate-contract",
      description:
        "Removes the association between a private pricing contract and your Amazon Web Services account. The account must have been associated with the contract previously. This operation is idempotent, so retrying is safe",
      options: [
        {
          name: "--contract-arn",
          description:
            "The Amazon Resource Name (ARN) of the contract to disassociate from your account",
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
      name: "disassociate-source-views",
      description:
        "Removes the association between one or more source billing views and an existing billing view. This allows modifying the composition of aggregate billing views",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the billing view to disassociate source views from",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-views",
          description:
            "A list of ARNs of the source billing views to disassociate",
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
      name: "get-billing-preferences",
      description:
        "Retrieves billing preferences for the specified feature. Each feature controls a distinct billing capability: which accounts can share Reserved Instances or credits, whether billing alerts are enabled, the historical record of sharing changes, per-credit options, and which accounts an individual Reserved Instance or Savings Plan is shared with",
      options: [
        {
          name: "--next-token",
          description:
            "Pagination token from a previous response. Pass the value returned in nextToken to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of records to return per page. Range: 1 to 50. Default: 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--features",
          description:
            "The feature to retrieve. Specify exactly one value. Valid values: BILLING_ALERTS, RI_SHARING, RI_SHARING_HISTORY, CREDIT_SHARING, CREDIT_SHARING_HISTORY, CREDIT_LEVEL_SHARING, CREDIT_PREFERENCE_OPTIONS, BENEFIT_LEVEL_SHARING",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "Filters to narrow results. Specify exactly one filter when supplied. The supported filter name is PREFERENCE_KEY, which accepts 1 to 10 values to match preference keys. For BENEFIT_LEVEL_SHARING, this filter is required. Specify exactly one value that identifies the Reserved Instance (RI) or Savings Plan (SP), in the form benefit/{ri|sp}/{benefitId}",
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
      name: "get-billing-view",
      description:
        "Returns the metadata associated to the specified billing view ARN",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view",
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
      name: "get-contract-information",
      description:
        "Returns information about a specific private pricing contract, including its term (duration), eligible payer accounts, investment accounts, and legal entities. This operation is read-only",
      options: [
        {
          name: "--contract-arn",
          description:
            "The Amazon Resource Name (ARN) of the contract to retrieve information about",
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
      name: "get-credit-allocation-history",
      description:
        "Returns the per-billing-month allocation history for credits applied to an Amazon Web Services account's bills. Traverses the consolidated billing family to capture cross-account credit applications. Supports pagination and optional filtering to a single credit",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID whose allocation history to retrieve. Must be a 12-digit numeric string",
          args: {
            name: "string",
          },
        },
        {
          name: "--credit-id",
          description:
            "Filters the result to a single credit. When omitted, returns allocation entries for all credits",
          args: {
            name: "long",
          },
        },
        {
          name: "--start-date",
          description:
            "The inclusive start date of the range, in Unix epoch seconds. This value must be earlier than endDate. You get credit allocations for bills whose billing period starts on or after startDate and before endDate. If startDate is in the middle of a billing period, that period isn't included. The range can't exceed 24 calendar months",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-date",
          description:
            "The exclusive end date of the range, in Unix epoch seconds. To get one billing month, set startDate to the first day of that month. Then set endDate to the first day of the next month. Use 00:00 UTC for both",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--next-token",
          description:
            "Pagination token from a previous response. Pass the value returned in nextToken to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of records to return per page. Range: 1 to 1000. Default: 100",
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
      name: "get-credits",
      description:
        "Returns the list of Amazon Web Services account credits for the specified account. Each credit includes its identifier, type, monetary amounts, applicable products, expiration, sharing configuration, and current enabled status. When the caller is the management account of a consolidated billing family and payerAccountFlag is true, the response aggregates credits across the entire family. Otherwise, the response includes only credits owned by the account specified in accountId",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID. Must be a 12-digit numeric string",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-date",
          description:
            "The start date for the credit period as Unix epoch seconds. Must be a past date that is not more than one year before the current date",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-date",
          description:
            "The end date for the credit period as Unix epoch seconds. Must not be a future date and must be on or after startDate. Defaults to the current date when omitted",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--payer-account-flag",
          description:
            "When true and the caller is the management account, the response aggregates credits across the entire consolidated billing family. When false or omitted, returns only credits for the specified accountId",
        },
        {
          name: "--no-payer-account-flag",
          description:
            "When true and the caller is the management account, the response aggregates credits across the entire consolidated billing family. When false or omitted, returns only credits for the specified accountId",
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
      name: "get-enterprise-support-charge-summary",
      description:
        "Returns a summary of Enterprise Support data aggregated across all accounts in the Enterprise Support profile",
      options: [
        {
          name: "--billing-month",
          description:
            "The billing month in YYYY-MM format. This must be a month in the past",
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
      name: "get-enterprise-support-contract-details",
      description: "Returns Enterprise Support contract details",
      options: [
        {
          name: "--billing-month",
          description:
            "The billing month in YYYY-MM format. This must be a month in the past",
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
      name: "get-resource-policy",
      description:
        "Returns the resource-based policy document attached to the resource in JSON format",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the billing view resource to which the policy is attached to",
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
      name: "list-billing-view-segments",
      description:
        "Lists the segments of a billing view over a given time period. Each segment identifies the billing domain (PRO_FORMA or BILLABLE) and the account relationships that apply during its time range. If you don't provide an arn, the response includes segments for the caller's PRIMARY billing view. If a mid-period change occurs, the response includes multiple segments, each with its own time range. The response omits hidden segments, so the segments it returns might not cover the entire requested time period",
      options: [
        {
          name: "--time-range",
          description:
            "The billing period to query. If you don't provide a time range, the current billing period, which is the calendar month in UTC, is used",
          args: {
            name: "structure",
          },
        },
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies the billing view to query. If you don't provide an ARN, the caller's PRIMARY billing view is used. The ARN must reference a primary billing view. Custom billing views aren't supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of entries a paginated response contains. Valid values range from 1 to 100. The default is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that is used on subsequent calls to list billing view segments",
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
      name: "list-billing-views",
      description:
        "Lists the billing views available for a given time period.  Every Amazon Web Services account has a unique PRIMARY billing view that represents the billing data available by default. Accounts that use Billing Conductor also have BILLING_GROUP billing views representing pro forma costs associated with each created billing group",
      options: [
        {
          name: "--active-time-range",
          description:
            "The time range for the billing views listed. PRIMARY billing view is always listed. BILLING_GROUP billing views are listed for time ranges when the associated billing group resource in Billing Conductor is active. The time range must be within one calendar month",
          args: {
            name: "structure",
          },
        },
        {
          name: "--arns",
          description:
            "The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view",
          args: {
            name: "list",
          },
        },
        {
          name: "--billing-view-types",
          description: "The type of billing view",
          args: {
            name: "list",
          },
        },
        {
          name: "--names",
          description:
            "Filters the list of billing views by name. You can specify search criteria to match billing view names based on the search option provided",
          args: {
            name: "list",
          },
        },
        {
          name: "--owner-account-id",
          description: "The list of owners of the billing view",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-account-id",
          description:
            "Filters the results to include only billing views that use the specified account as a source",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of billing views to retrieve. Default is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that is used on subsequent calls to list billing views",
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
      name: "list-business-support-account-charges",
      description:
        "Returns Business Support charges broken down at the linked account level for a given billing month",
      options: [
        {
          name: "--billing-month",
          description:
            "The billing month to retrieve Business Support charges for, in YYYY-MM format. You can request the current month (charges will be estimated) or a past month (charges will be finalized)",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-id",
          description:
            "The linked account ID to filter results to a specific account. If you don't specify a value, the response includes charges for all linked accounts",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. Default is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token for the next page of results",
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
      name: "list-business-support-subscription-history",
      description:
        "Returns the history of Business Support subscription contracts across accounts",
      options: [
        {
          name: "--billing-month",
          description:
            "The billing month to retrieve subscription contracts for, in YYYY-MM format. If you don't specify a value, defaults to the current month",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-id",
          description:
            "The account ID to filter results to a specific account. If you don't specify a value, the response includes subscription history for all accounts",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-date",
          description: "The start date to filter subscription contracts from",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-date",
          description: "The end date to filter subscription contracts to",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. Default is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token for the next page of results",
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
      name: "list-contracts",
      description:
        "Lists the private pricing contracts that your Amazon Web Services account is an eligible payer account of. This operation is read-only and paginated",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token that indicates the next set of results to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of contracts to return in a single call. Minimum value of 1, maximum value of 100",
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
      name: "list-contractual-investment-attestations",
      description:
        "Lists the investment attestations submitted under a specific private pricing contract. Use this operation to track attestation status, including the terminal statuses DISBURSED, REJECTED, and CANCELLED. This operation is read-only and paginated",
      options: [
        {
          name: "--contract-arn",
          description:
            "The Amazon Resource Name (ARN) of the contract whose attestations you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--investment-summary-id",
          description:
            "The identifier of a specific investment summary to filter the attestations by. If omitted, attestations for all investment summaries in the contract are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that indicates the next set of results to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of attestations to return in a single call. Minimum value of 1, maximum value of 100",
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
      name: "list-contractual-investment-summaries",
      description:
        "Lists the investment summaries within a specific private pricing contract. This operation is read-only and paginated",
      options: [
        {
          name: "--contract-arn",
          description:
            "The Amazon Resource Name (ARN) of the contract whose investment summaries you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that indicates the next set of results to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of investment summaries to return in a single call. Minimum value of 1, maximum value of 100",
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
      name: "list-contractual-investments",
      description:
        "Lists the investments within a specific investment summary. This operation is read-only and paginated",
      options: [
        {
          name: "--contract-arn",
          description:
            "The Amazon Resource Name (ARN) of the contract that contains the investment summary",
          args: {
            name: "string",
          },
        },
        {
          name: "--investment-summary-id",
          description:
            "The identifier of the investment summary whose investments you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that indicates the next set of results to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of investments to return in a single call. Minimum value of 1, maximum value of 100",
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
      name: "list-enterprise-support-linked-account-charges",
      description:
        "Returns Support-eligible spend broken down at linked account level",
      options: [
        {
          name: "--billing-month",
          description:
            "The billing month in YYYY-MM format. This must be a month in the past",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-id",
          description:
            "The linked account ID to filter results to a specific account. If you don't specify a value, the response includes charges for all linked accounts",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. Default is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token for the next page of results",
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
      name: "list-source-views-for-billing-view",
      description:
        "Lists the source views (managed Amazon Web Services billing views) associated with the billing view",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The number of entries a paginated response contains",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that is used on subsequent calls to list billing views",
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
      description: "Lists tags associated with the billing view resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
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
      name: "redeem-credits",
      description:
        "Redeems an Amazon Web Services promotional credit code on behalf of the calling account. On success, a new credit is added to the account's credit ledger with the amount, validity period, and applicable products defined by the promotion. The credit is then automatically applied to subsequent bills according to the standard credit application order",
      options: [
        {
          name: "--promo-code",
          description: "The promotional credit code to redeem",
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
      name: "split-credit",
      description:
        "Splits the available balance of a credit into 2 to 99 new credits in the same account, and cancels the original credit. The new credits keep the original credit's end date and applicable products. The available balance is the remaining balance minus any amount reserved for a bill that isn't finalized. The portions must add up to exactly the available balance. Each portion must be at least 100.00 in the currency of the credit. For example, if the credit is in USD, each portion must be at least USD $100.00. A reserved amount stays on the original credit and still applies to that bill. A credit and every credit split from it count toward a limit of 100 credits. After a split, you can't split or transfer the original credit. You can split or transfer its new credits, and you can split a credit after you transfer it. You must own the credit or be the payer of the account that owns it. You can't undo a split. This operation is idempotent and supports a dry run",
      options: [
        {
          name: "--credit-id",
          description: "The ID of the credit to split",
          args: {
            name: "string",
          },
        },
        {
          name: "--portions",
          description:
            "The new credits to create, one for each portion, in the order listed",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If you retry a successful request with the same client token and parameters, the retry completes without performing any further actions. If you reuse a client token with different parameters, the request fails with a ValidationException",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Specifies whether to validate the request and return the result without changing any credit",
        },
        {
          name: "--no-dry-run",
          description:
            "Specifies whether to validate the request and return the result without changing any credit",
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
        "An API operation for adding one or more tags (key-value pairs) to a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-tags",
          description:
            "A list of tag key value pairs that are associated with the resource",
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
      name: "transfer-credit",
      description:
        "Moves a credit to another account in the same consolidated billing family. The credit keeps its ID, balance, end date, and applicable products. Only the account that owns the credit changes. The transfer removes the credit's sharing settings. The new owner or the payer can set them again. Any amount reserved for a bill that isn't finalized moves with the credit and still applies to that bill. You must be the payer of both accounts. You can't transfer a credit that has ended, has no available balance, or is the original credit of a split. A transfer creates no credit, so it doesn't count toward the split limit, and the payer can transfer the credit back. This operation is idempotent and supports a dry run",
      options: [
        {
          name: "--credit-id",
          description: "The ID of the credit to transfer",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-account-id",
          description:
            "The Amazon Web Services account ID that becomes the owner of the credit. The account must be in your consolidated billing family and must not be the current owner",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If you retry a successful request with the same client token and parameters, the retry completes without performing any further actions. If you reuse a client token with different parameters, the request fails with a ValidationException",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Specifies whether to validate the request and return the result without changing the credit",
        },
        {
          name: "--no-dry-run",
          description:
            "Specifies whether to validate the request and return the result without changing the credit",
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
        "Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-tag-keys",
          description:
            "A list of tag key value pairs that are associated with the resource",
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
      name: "update-billing-preferences",
      description:
        "Updates billing preferences for the specified feature. Each feature targets a distinct billing capability and has its own set of supported keys. The action sets the value for each provided key; keys not present in the request are unchanged. To set sharing keys (RI_SHARING, CREDIT_SHARING, CREDIT_LEVEL_SHARING, BENEFIT_LEVEL_SHARING, and sharing keys under CREDIT_PREFERENCE_OPTIONS), you must use the management account of a consolidated billing family. To set the credit/{creditId}/status key, you must own the credit or use the management account of its family",
      options: [
        {
          name: "--feature",
          description:
            "The feature to update. Valid values: BILLING_ALERTS, RI_SHARING, CREDIT_SHARING, CREDIT_LEVEL_SHARING, CREDIT_PREFERENCE_OPTIONS, BENEFIT_LEVEL_SHARING. The history features (RI_SHARING_HISTORY and CREDIT_SHARING_HISTORY) are read-only and cannot be updated",
          args: {
            name: "string",
            suggestions: [
              "RI_SHARING",
              "RI_SHARING_HISTORY",
              "CREDIT_SHARING",
              "CREDIT_SHARING_HISTORY",
              "CREDIT_LEVEL_SHARING",
              "BILLING_ALERTS",
              "CREDIT_PREFERENCE_OPTIONS",
              "BENEFIT_LEVEL_SHARING",
            ],
          },
        },
        {
          name: "--billing-preferences-per-key",
          description:
            "Key/value pairs to apply. All keys in a single request must be valid for the specified feature and must not be duplicated. For CREDIT_PREFERENCE_OPTIONS, all keys must reference the same creditId. For BENEFIT_LEVEL_SHARING, all keys must reference the same Reserved Instance or Savings Plan. To share it with the accounts in one Cost Category rule, send these three keys with the value ENABLED:    benefit/{ri|sp}/{benefitId}/sharing/costCategoryArn/{costCategoryArn}     benefit/{ri|sp}/{benefitId}/sharing/ruleName/{ruleName}     benefit/{ri|sp}/{benefitId}/sharing/mode/{prioritized|restricted}    With prioritized, any benefit that the rule's accounts don't use goes to the rest of your consolidated billing family, following your family sharing settings. With restricted, only the owner and the rule's accounts receive it. The Cost Category must belong to your account. To stop sharing, send the same three keys with the value DISABLED. For RI_SHARING and CREDIT_SHARING, you can share benefits by account group. Each rule in a Cost Category is one group. Send exactly one of these group keys with the value ENABLED:    open-sharing - Share across the whole consolidated billing family, with no groups.    costcategory-prioritized/{costCategoryArn} - Share within each group first, then with the rest of the family.    costcategory-restricted/{costCategoryArn} - An account in a group shares only with accounts in the same group.   For RI_SHARING, the costcategory- keys use a Cost Category that supports the billing:rispgroupsharing resource type. To use a Cost Category that supports the billing:benefitgroupsharing resource type, use the benefitgroup-prioritized/ or benefitgroup-restricted/ prefix instead. For CREDIT_SHARING, the Cost Category must support the billing:benefitgroupsharing resource type. The Cost Category must belong to your account. GetBillingPreferences returns the group key that is in effect",
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
      name: "update-billing-view",
      description: "An API to update the attributes of the billing view",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the billing view",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the billing view",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-filter-expression",
          description:
            "See Expression. Billing view only supports LINKED_ACCOUNT, Tags, and CostCategories",
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
  ],
};

export default completionSpec;
