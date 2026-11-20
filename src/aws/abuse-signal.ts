const completionSpec: Fig.Spec = {
  name: "abuse-signal",
  description:
    "Amazon Web Services Abuse Signal Amazon Web Services Abuse Signal API provides programmatic means to report suspected abuse of Amazon Web Services resources. You can use the API to submit abuse reports about Amazon Web Services resources and to track the status of your reports. Amazon Web Services Trust & Safety uses the information that you provide to investigate and try to resolve the incident that you reported. You submit reports in the eXtended Abuse Reporting Format (XARF), an open standard for structured abuse reporting. For more information, see XARF on the XARF website. Reports can cover a wide range of abuse categories, including spam, phishing, distributed denial of service (DDoS), malware distribution, and copyright infringement. With the Amazon Web Services Abuse Signal API, you can:    Submit abuse reports – Create structured abuse reports by using the XARF format, with full support for all XARF v4 report types.    Track report status – Monitor the processing status of submitted reports, from submission through resolution.    List and filter reports – Retrieve the status of all reports, with optional filtering by correlation ID.    Retry submissions safely – Safely retry report submissions without creating duplicates by using client tokens.     Cross-Region data residency: By submitting a report, you instruct Amazon Web Services to store it in all supported Regions (us-east-1, us-west-2, and eu-west-2), including across the United States and Europe. If data must remain in a single Region, do not include it in the report",
  subcommands: [
    {
      name: "create-abuse-report",
      description:
        "Submits a structured report. Amazon Web Services validates it and returns a report ID. A successful response confirms that Amazon Web Services received your report. It doesn't mean that Amazon Web Services has reached an outcome. Use GetAbuseReportStatus with the report ID to check the report's status and outcome. This operation is idempotent within a time window. If you provide a clientToken, duplicate requests within 24 hours return the existing report ID. If you omit it, the service generates a token scoped to 5 minutes.   Cross-Region data residency: By submitting a report, you instruct Amazon Web Services to store it in all supported Regions (us-east-1, us-west-2, and eu-west-2), including across the United States and Europe. If data must remain in a single Region, do not include it in the report",
      options: [
        {
          name: "--report",
          description:
            "The abuse report data in XARF format. Provide the report under the xarf key",
          args: {
            name: "structure",
          },
        },
        {
          name: "--correlation-id",
          description:
            "An optional correlation ID for tracking the report in the reporter's system. The service echoes this value back in responses, and you can use it to filter reports with ListAbuseReportStatuses",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "An optional, client-provided idempotency token that ensures the operation completes no more than once. If the token matches a previous request within 24 hours, the service returns the existing report ID instead of creating a new report. When you omit this token, the service automatically generates one that is scoped to a 5-minute window",
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
      name: "get-abuse-report-status",
      description:
        "Retrieves the current processing status of a previously submitted abuse report, including the status, submission timestamp, and last-update time. You can poll this operation to track the report's status. PROCESSING confirms that Amazon Web Services received your report and is processing it. COMPLETED means Amazon Web Services finished resolving the report, and the response includes a reasonCode. The time to reach COMPLETED may vary and can take up to several days depending on the scope and complexity of the suspected abuse.   COMPLETED is the only terminal status. To wait for a report, use the ReportProcessing waiter, which succeeds when the report reaches PROCESSING or COMPLETED. If you poll this operation yourself, wait 1–5 seconds between calls",
      options: [
        {
          name: "--report-id",
          description:
            "The unique identifier of the abuse report to retrieve status for. This is the reportId that is returned by CreateAbuseReport",
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
      name: "list-abuse-report-statuses",
      description:
        "Lists abuse report statuses for the calling account, ordered by submission time, with optional filtering and pagination. Use the correlationId parameter to filter results by the reporter-provided correlation ID that was specified during report submission. Results are paginated. Use nextToken to retrieve additional results",
      options: [
        {
          name: "--correlation-id",
          description:
            "Filters results by the reporter-provided correlation ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token for retrieving the next page of results. Omit this parameter to return the first page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single page. Valid range: 1–50. The default is 50",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "report-processing",
          description:
            "Wait until an abuse report has at least reached PROCESSING.\n\nA report advances QUEUED -> PROCESSING -> COMPLETED. A report can\ngo from QUEUED all the way to COMPLETED in well under a second,\nso a poller that only accepts PROCESSING can miss the transient\nPROCESSING window entirely and then poll forever. COMPLETED\ntherefore also satisfies this waiter: it implies the report already\npassed through PROCESSING. It will poll every 1 seconds until a successful state has been reached. This will exit with a return code of 255 after 5 failed checks",
          options: [
            {
              name: "--report-id",
              description:
                "The unique identifier of the abuse report to retrieve status for. This is the reportId that is returned by CreateAbuseReport",
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
    },
  ],
};

export default completionSpec;
