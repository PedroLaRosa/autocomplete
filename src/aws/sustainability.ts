const completionSpec: Fig.Spec = {
  name: "sustainability",
  description:
    "The AWS Sustainability service provides programmatic access to estimated environmental impact data for your Amazon Web Services usage. Use the AWS Sustainability service to retrieve, analyze, and track the environmental impact of your cloud infrastructure over time.  With the AWS Sustainability service, you can:   Retrieve estimated carbon emissions and water allocation for your Amazon Web Services usage across different time periods    Group environmental impact data by dimensions such as account, region, and service   Filter environmental impact data to focus on specific accounts, regions, or services   Access multiple carbon emissions calculation methodologies including Location-based Method (LBM) and Market-based Method (MBM)    Aggregate environmental impact data at various time granularities including monthly, quarterly, and yearly periods     The API supports pagination for efficient data retrieval and provides dimension values to help you understand the available grouping and filtering options for your account",
  subcommands: [
    {
      name: "get-estimated-carbon-emissions",
      description:
        "Returns estimated carbon emission values based on customer grouping and filtering parameters. We recommend using pagination to ensure that the operation returns quickly and successfully",
      options: [
        {
          name: "--time-period",
          description:
            "The date range for fetching estimated carbon emissions. The range must include the start date of a month for that month's data to be included in the response",
          args: {
            name: "structure",
          },
        },
        {
          name: "--group-by",
          description:
            "The dimensions available for grouping estimated carbon emissions",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter-by",
          description:
            "The criteria for filtering estimated carbon emissions. To determine which dimensions are available to be filtered by, you can first call GetEstimatedCarbonEmissionsDimensionValues",
          args: {
            name: "structure",
          },
        },
        {
          name: "--emissions-types",
          description:
            "The emission types to include in the results. If absent, returns TOTAL_LBM_CARBON_EMISSIONS and TOTAL_MBM_CARBON_EMISSIONS emissions types",
          args: {
            name: "list",
          },
        },
        {
          name: "--granularity",
          description:
            "The time granularity for the results. If absent, uses MONTHLY time granularity. The smallest supported granularity for carbon emissions is MONTHLY.   If requesting partial time periods, data will be returned based on the smallest supported granularity. For example, requesting 2025-04-01T00:00:00Z to 2026-04-01T00:00:00Z with YEARLY_CALENDAR granularity will return the last 9 months for 2025 and the first 3 months of 2026",
          args: {
            name: "string",
            suggestions: [
              "YEARLY_CALENDAR",
              "YEARLY_FISCAL",
              "QUARTERLY_CALENDAR",
              "QUARTERLY_FISCAL",
              "MONTHLY",
            ],
          },
        },
        {
          name: "--granularity-configuration",
          description:
            "Configuration for fiscal year calculations when using YEARLY_FISCAL or QUARTERLY_FISCAL granularity",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call. Default is 1000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page",
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
      name: "get-estimated-carbon-emissions-dimension-values",
      description:
        "Returns the possible dimension values available for a customer's account. We recommend using pagination to ensure that the operation returns quickly and successfully",
      options: [
        {
          name: "--time-period",
          description:
            "The date range for fetching the dimension values. The range must include the start date of a month for that month's dimensions to be included in the response",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dimensions",
          description:
            "The dimensions available for grouping estimated carbon emissions",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call. Default is 1000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page",
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
      name: "get-estimated-water-allocation",
      description:
        "Returns estimated water allocation values based on customer grouping and filtering parameters. We recommend using pagination to ensure that the operation returns quickly and successfully",
      options: [
        {
          name: "--time-period",
          description:
            "The date range for fetching estimated water allocation. The range must include the start date of a year for that year's data to be included in the response",
          args: {
            name: "structure",
          },
        },
        {
          name: "--group-by",
          description:
            "The dimensions available for grouping estimated water allocation",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter-by",
          description:
            "The criteria for filtering estimated water allocation. To determine which dimensions are available to be filtered by, you can first call GetEstimatedWaterAllocationDimensionValues",
          args: {
            name: "structure",
          },
        },
        {
          name: "--allocation-types",
          description:
            "The allocation types to include in the results. If absent, returns TOTAL_WATER_WITHDRAWALS allocation types",
          args: {
            name: "list",
          },
        },
        {
          name: "--granularity",
          description:
            "The time granularity for the results. Only YEARLY_CALENDAR time granularity is currently supported for water allocation. Defaults to YEARLY_CALENDAR if absent.  If requesting partial time periods, data will be returned based on the smallest supported granularity. For example, requesting 2025-04-01T00:00:00Z to 2026-04-01T00:00:00Z with YEARLY_CALENDAR will return all the data for 2026 only",
          args: {
            name: "string",
            suggestions: [
              "YEARLY_CALENDAR",
              "YEARLY_FISCAL",
              "QUARTERLY_CALENDAR",
              "QUARTERLY_FISCAL",
              "MONTHLY",
            ],
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call. Default is 1000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page",
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
      name: "get-estimated-water-allocation-dimension-values",
      description:
        "Returns the possible dimension values available for a customer's account. We recommend using pagination to ensure that the operation returns quickly and successfully",
      options: [
        {
          name: "--time-period",
          description:
            "The date range for fetching the dimension values. The range must include the start date of a year for that year's data to be included in the response",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dimensions",
          description:
            "The dimensions available for grouping estimated water allocation",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call. Default is 1000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page",
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
  ],
};

export default completionSpec;
