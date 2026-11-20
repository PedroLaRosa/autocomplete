const completionSpec: Fig.Spec = {
  name: "partnercentral-revenue-measurement",
  description:
    "AWS Partner Central Revenue Measurement API for creating, managing, and tracking revenue attributions and their allocations with deal entities such as offers and opportunities",
  subcommands: [
    {
      name: "create-marketplace-revenue-share",
      description:
        "Creates a new marketplace revenue share resource in the specified catalog",
      options: [
        {
          name: "--catalog",
          description:
            "The catalog in which to create the marketplace revenue share",
          args: {
            name: "string",
            suggestions: ["AWS", "Sandbox"],
          },
        },
        {
          name: "--client-token",
          description:
            "A unique token to ensure idempotency of the create request",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-id",
          description:
            "The AWS Marketplace product identifier for this revenue share",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tags to associate with the marketplace revenue share upon creation",
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
      name: "create-marketplace-revenue-share-allocation",
      description:
        "Creates a new marketplace revenue share allocation for the specified product",
      options: [
        {
          name: "--catalog",
          description: "The catalog in which to create the allocation",
          args: {
            name: "string",
            suggestions: ["AWS", "Sandbox"],
          },
        },
        {
          name: "--product-id",
          description:
            "The AWS Marketplace product identifier for the parent revenue share",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique token to ensure idempotency of the create request",
          args: {
            name: "string",
          },
        },
        {
          name: "--effective-from",
          description:
            "The effective start date for the allocation. Must be the first day of a month",
          args: {
            name: "string",
          },
        },
        {
          name: "--effective-until",
          description:
            "The effective end date for the allocation. Must be the last day of a month (YYYY-MM-DD). Omit for open-ended allocations",
          args: {
            name: "string",
          },
        },
        {
          name: "--revenue-share-percent",
          description: "The revenue share percentage for this allocation",
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
      name: "create-revenue-attribution",
      description:
        "Creates a new revenue attribution record in the specified catalog",
      options: [
        {
          name: "--catalog",
          description: "The catalog in which to create the revenue attribution",
          args: {
            name: "string",
            suggestions: ["AWS", "Sandbox"],
          },
        },
        {
          name: "--client-token",
          description:
            "A unique token to ensure idempotency of the create request",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the revenue attribution. Must be unique within the catalog and the partner's account",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the revenue attribution",
          args: {
            name: "string",
          },
        },
        {
          name: "--tenancy-model",
          description: "The tenancy model for this revenue attribution",
          args: {
            name: "string",
            suggestions: ["MULTI_TENANT", "SINGLE_TENANT"],
          },
        },
        {
          name: "--product-identifier",
          description:
            "The unique product identifier in AWS Marketplace. Accepts a product entity ID (e.g., prod-abc123def4567) or a product ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tags to associate with the revenue attribution upon creation",
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
      name: "get-marketplace-revenue-share",
      description:
        "Retrieves the details of a specific marketplace revenue share",
      options: [
        {
          name: "--catalog",
          description:
            "The catalog that the marketplace revenue share belongs to",
          args: {
            name: "string",
            suggestions: ["AWS", "Sandbox"],
          },
        },
        {
          name: "--product-id",
          description:
            "The AWS Marketplace product identifier of the revenue share to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description:
            "The revision of the marketplace revenue share to retrieve. Omit to return the latest revision",
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
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-marketplace-revenue-share-allocation",
      description:
        "Retrieves the details of a specific marketplace revenue share allocation",
      options: [
        {
          name: "--catalog",
          description: "The catalog that the allocation belongs to",
          args: {
            name: "string",
            suggestions: ["AWS", "Sandbox"],
          },
        },
        {
          name: "--product-id",
          description:
            "The AWS Marketplace product identifier of the parent revenue share",
          args: {
            name: "string",
          },
        },
        {
          name: "--marketplace-revenue-share-allocation-id",
          description: "The unique identifier of the allocation to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--marketplace-revenue-share-revision",
          description:
            "The revision of the parent marketplace revenue share at which to retrieve the allocation. Omit to return the latest",
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
      name: "get-revenue-attribution",
      description: "Retrieves the details of a specific revenue attribution",
      options: [
        {
          name: "--catalog",
          description: "The catalog that the revenue attribution belongs to",
          args: {
            name: "string",
            suggestions: ["AWS", "Sandbox"],
          },
        },
        {
          name: "--identifier",
          description:
            "The unique identifier of the revenue attribution to retrieve. Accepts a direct ID or ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description:
            "The revision of the attribution to retrieve. Omit to return the latest revision",
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
      name: "get-revenue-attribution-allocation",
      description:
        "Retrieves a single allocation by its RevenueAttributionAllocationId. Supports optional point-in-time version queries",
      options: [
        {
          name: "--catalog",
          description: "The catalog that contains the resource",
          args: {
            name: "string",
            suggestions: ["AWS", "Sandbox"],
          },
        },
        {
          name: "--revenue-attribution-identifier",
          description: "The revenue attribution identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--revenue-attribution-allocation-id",
          description: "The allocation identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--revenue-attribution-revision",
          description: "Point-in-time revision number to query",
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
      name: "get-revenue-attribution-allocations-task",
      description:
        "Retrieves the current status of a previously submitted allocations task. When COMPLETE, includes the latest revision. When FAILED, includes error details",
      options: [
        {
          name: "--catalog",
          description: "The catalog that contains the resource",
          args: {
            name: "string",
            suggestions: ["AWS", "Sandbox"],
          },
        },
        {
          name: "--revenue-attribution-identifier",
          description: "The revenue attribution identifier",
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
      name: "list-marketplace-revenue-share-allocations",
      description:
        "Returns a paginated list of allocations under a marketplace revenue share, with optional filtering by status and effective date range. Supports historical reads at a specific share revision",
      options: [
        {
          name: "--catalog",
          description: "The catalog containing the allocations",
          args: {
            name: "string",
            suggestions: ["AWS", "Sandbox"],
          },
        },
        {
          name: "--product-id",
          description:
            "The AWS Marketplace product identifier for the parent revenue share",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "Filter by allocation status",
          args: {
            name: "string",
            suggestions: ["ACTIVE", "INACTIVE"],
          },
        },
        {
          name: "--after-effective-from",
          description: "Inclusive lower bound for EffectiveFrom date filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--before-effective-from",
          description:
            "Exclusive upper bound for EffectiveFrom date filter (half-open range)",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The field to sort marketplace revenue share allocations by",
          args: {
            name: "string",
            suggestions: ["EffectiveFrom"],
          },
        },
        {
          name: "--sort-order",
          description: "The direction to sort results. Defaults to DESCENDING",
          args: {
            name: "string",
            suggestions: ["ASCENDING", "DESCENDING"],
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of results per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "Pagination token from a previous response",
          args: {
            name: "string",
          },
        },
        {
          name: "--marketplace-revenue-share-revision",
          description:
            "Optional share revision for historical list. Returns allocations as they existed at this revision",
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
      name: "list-marketplace-revenue-shares",
      description:
        "Returns a paginated list of marketplace revenue shares with optional filters",
      options: [
        {
          name: "--catalog",
          description: "The catalog to list marketplace revenue shares from",
          args: {
            name: "string",
            suggestions: ["AWS", "Sandbox"],
          },
        },
        {
          name: "--product-ids",
          description:
            "Filter results to only include shares with these product identifiers",
          args: {
            name: "list",
          },
        },
        {
          name: "--product-codes",
          description:
            "Filter results to only include shares with these product codes",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Token for pagination. Use the value returned in the previous response to retrieve the next page",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description: "The field to sort marketplace revenue shares by",
          args: {
            name: "string",
            suggestions: ["LastModifiedDate"],
          },
        },
        {
          name: "--sort-order",
          description: "The direction to sort results",
          args: {
            name: "string",
            suggestions: ["ASCENDING", "DESCENDING"],
          },
        },
        {
          name: "--created-after",
          description:
            "Filter results to only include marketplace revenue shares created after this timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-before",
          description:
            "Filter results to only include marketplace revenue shares created before this timestamp",
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
      name: "list-revenue-attribution-allocations",
      description:
        "Returns a paginated list of committed allocations with support for filtering by entity, customer, status, or date range",
      options: [
        {
          name: "--catalog",
          description: "The catalog that contains the resource",
          args: {
            name: "string",
            suggestions: ["AWS", "Sandbox"],
          },
        },
        {
          name: "--revenue-attribution-identifier",
          description: "The revenue attribution identifier to query",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-type-filters",
          description: "Filter by deal entity types",
          args: {
            name: "list",
          },
        },
        {
          name: "--entity-identifier-filters",
          description: "Filter by deal entity identifiers",
          args: {
            name: "list",
          },
        },
        {
          name: "--customer-aws-account-id-filters",
          description:
            "Filter by customer AWS account IDs for associated deal entities",
          args: {
            name: "list",
          },
        },
        {
          name: "--status-filter",
          description: "Filter by allocation status",
          args: {
            name: "string",
            suggestions: ["ACTIVE", "INACTIVE"],
          },
        },
        {
          name: "--after-effective-from",
          description: "Inclusive lower bound for EffectiveFrom date filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--before-effective-from",
          description:
            "Exclusive upper bound for EffectiveFrom date filter (half-open range)",
          args: {
            name: "string",
          },
        },
        {
          name: "--after-effective-until",
          description: "Inclusive lower bound for EffectiveUntil date filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--before-effective-until",
          description:
            "Exclusive upper bound for EffectiveUntil date filter (half-open range)",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description: "Field to sort by",
          args: {
            name: "string",
            suggestions: ["EffectiveFrom"],
          },
        },
        {
          name: "--sort-order",
          description: "Sort direction. Defaults to ASCENDING",
          args: {
            name: "string",
            suggestions: ["ASCENDING", "DESCENDING"],
          },
        },
        {
          name: "--revenue-attribution-revision",
          description: "Point-in-time revision number to query",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum results per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "Pagination token from previous response",
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
      name: "list-revenue-attributions",
      description:
        "Returns a paginated list of revenue attributions with optional filters",
      options: [
        {
          name: "--catalog",
          description: "The catalog to list revenue attributions from",
          args: {
            name: "string",
            suggestions: ["AWS", "Sandbox"],
          },
        },
        {
          name: "--identifiers",
          description:
            "Filter results to only include revenue attributions with the specified identifiers",
          args: {
            name: "list",
          },
        },
        {
          name: "--created-after",
          description:
            "Filter results to only include revenue attributions created after this timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-before",
          description:
            "Filter results to only include revenue attributions created before this timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description: "The field to sort revenue attributions by",
          args: {
            name: "string",
            suggestions: ["LastModifiedDate"],
          },
        },
        {
          name: "--sort-order",
          description: "The direction to sort results",
          args: {
            name: "string",
            suggestions: ["ASCENDING", "DESCENDING"],
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Token for pagination. Use the value returned in the previous response to retrieve the next page",
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
      description: "Returns the tags associated with the specified resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to list tags for",
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
      name: "start-revenue-attribution-allocations-task",
      description:
        "Submits a batch of up to 250 allocation changes (CREATE and/or UPDATE) for asynchronous processing. Returns a TaskId for tracking",
      options: [
        {
          name: "--catalog",
          description: "The catalog context for this operation",
          args: {
            name: "string",
            suggestions: ["AWS", "Sandbox"],
          },
        },
        {
          name: "--revenue-attribution-identifier",
          description: "The revenue attribution identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--revenue-attribution-revision",
          description:
            "Current revision of the revenue attribution for optimistic locking",
          args: {
            name: "string",
          },
        },
        {
          name: "--revenue-share-allocations",
          description:
            "The list of allocation changes to process in this batch",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description: "Idempotency token for deduplication and retry",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Human-readable description of the batch",
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
      description:
        "Adds or overwrites one or more tags for the specified resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to add to the resource",
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
      name: "untag-resource",
      description: "Removes one or more tags from the specified resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to remove tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag keys to remove from the resource",
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
      name: "update-marketplace-revenue-share-allocation",
      description:
        "Updates an existing marketplace revenue share allocation. Supports modifying effective dates, revenue share percentage, and status with time-based mutability rules",
      options: [
        {
          name: "--catalog",
          description: "The catalog containing the allocation",
          args: {
            name: "string",
            suggestions: ["AWS", "Sandbox"],
          },
        },
        {
          name: "--product-id",
          description:
            "The AWS Marketplace product identifier for the parent revenue share",
          args: {
            name: "string",
          },
        },
        {
          name: "--marketplace-revenue-share-allocation-id",
          description: "The identifier of the allocation to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--marketplace-revenue-share-revision",
          description:
            "The current revision of the parent share. Must match for optimistic concurrency control",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique token to ensure idempotency of the update request",
          args: {
            name: "string",
          },
        },
        {
          name: "--effective-from",
          description:
            "The new effective start date. Must be the first day of a month. Only modifiable on future-dated allocations",
          args: {
            name: "string",
          },
        },
        {
          name: "--effective-until",
          description:
            "The new effective end date. Must be the last day of a month and on or after today",
          args: {
            name: "string",
          },
        },
        {
          name: "--revenue-share-percent",
          description:
            "The new revenue share percentage. Only modifiable on future-dated allocations",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The new status. Set to INACTIVE for soft-delete. Only modifiable on future-dated allocations",
          args: {
            name: "string",
            suggestions: ["ACTIVE", "INACTIVE"],
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
      name: "update-revenue-attribution",
      description: "Updates an existing revenue attribution record",
      options: [
        {
          name: "--catalog",
          description: "The catalog that the revenue attribution belongs to",
          args: {
            name: "string",
            suggestions: ["AWS", "Sandbox"],
          },
        },
        {
          name: "--identifier",
          description:
            "The unique identifier of the revenue attribution to update. Accepts a direct ID or ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique token to ensure idempotency of the update request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The updated description of the revenue attribution",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description:
            "The current revision of the revenue attribution. Must match the server's current value",
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
