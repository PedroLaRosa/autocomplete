const completionSpec: Fig.Spec = {
  name: "support",
  description:
    "Amazon Web Services Support The Amazon Web Services Support API Reference is intended for programmers who need detailed information about the Amazon Web Services Support operations and data types. You can use the API to manage your support cases programmatically. The Amazon Web Services Support API uses HTTP methods that return results in JSON format.    You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.    You can also use the Amazon Web Services Support API to access features for Trusted Advisor. You can return a list of checks and their descriptions, get check results, specify checks to refresh, and get the refresh status of checks. You can manage your support cases with the following Amazon Web Services Support API operations:   The CreateCase, DescribeCases, DescribeAttachment, and ResolveCase operations create Amazon Web Services Support cases, retrieve information about cases, and resolve cases.   The DescribeCommunications, AddCommunicationToCase, and AddAttachmentsToSet operations retrieve and add communications and attachments to Amazon Web Services Support cases.   The DescribeServices and DescribeSeverityLevels operations return Amazon Web Services service names, service codes, service categories, and problem severity levels. You use these values when you call the CreateCase operation.   You can also use the Amazon Web Services Support API to call the Trusted Advisor operations. For more information, see Trusted Advisor in the Amazon Web Services Support User Guide. For authentication of requests, Amazon Web Services Support uses Signature Version 4 Signing Process. For more information about this service and the endpoints to use, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide",
  subcommands: [
    {
      name: "add-attachments-to-set",
      description:
        "Adds one or more attachments to an attachment set.  An attachment set is a temporary container for attachments that you add to a case or case communication. The set is available for 1 hour after it's created. The expiryTime returned in the response is when the set expires.     You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support",
      options: [
        {
          name: "--attachment-set-id",
          description:
            "The ID of the attachment set. If an attachmentSetId is not specified, a new attachment set is created, and the ID of the set is returned in the response. If an attachmentSetId is specified, the attachments are added to the specified set, if it exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--attachments",
          description:
            "One or more attachments to add to the set. You can add up to three attachments per set. The size limit is 5 MB per attachment. In the Attachment object, use the data parameter to specify the contents of the attachment file. In the previous request syntax, the value for data appear as blob, which is represented as a base64-encoded string. The value for fileName is the name of the attachment, such as troubleshoot-screenshot.png",
          args: {
            name: "list",
          },
        },
        {
          name: "--dry-run",
          description:
            "Specifies whether to validate the request without actually adding the attachments. When set to true, the request is validated but no attachments are stored, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--no-dry-run",
          description:
            "Specifies whether to validate the request without actually adding the attachments. When set to true, the request is validated but no attachments are stored, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
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
      name: "add-communication-to-case",
      description:
        "Adds additional customer communication to a Amazon Web Services Support case. Use the caseId parameter to identify the case to which to add communication. To list a set of email addresses to copy on the communication, use the ccEmailAddresses parameter. The communicationBody value contains the text of the communication. To attach files larger than 5 MB to the communication, use the uploadIds parameter.  Amazon Web Services Support automatically redacts sensitive information from support cases to protect your data. The following information is replaced with [REDACTED_BY_Amazon Web Services] and is not stored:   Amazon Web Services secret keys - The complete key is replaced. Example: [REDACTED_BY_Amazon Web Services]    Private keys - The complete key is replaced. Example: [REDACTED_BY_Amazon Web Services]    Credit card numbers - The number is redacted, but the last 4 digits remain. Example: [REDACTED_BY_Amazon Web Services]-7016    This sensitive information is never required by Amazon Web Services Support.     You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support",
      options: [
        {
          name: "--case-id",
          description:
            "The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-12345678910-exen-2025-c4c1d2bf33c5cf47",
          args: {
            name: "string",
          },
        },
        {
          name: "--communication-body",
          description:
            "The body of an email communication to add to the support case",
          args: {
            name: "string",
          },
        },
        {
          name: "--cc-email-addresses",
          description:
            "The email addresses in the CC line of an email to be added to the support case",
          args: {
            name: "list",
          },
        },
        {
          name: "--attachment-set-id",
          description:
            "The ID of a set of one or more attachments for the communication to add to the case. Create the set by calling AddAttachmentsToSet. Each attachment in the set must be 5 MB or smaller. To attach files larger than 5 MB, use uploadIds",
          args: {
            name: "string",
          },
        },
        {
          name: "--upload-ids",
          description:
            "A list of upload IDs that identify attachments to add to the case. Each uploadId is returned by the GetAttachmentUploadLinks operation. The upload must reach the attachment-ready state by calling CompleteAttachmentUpload before it can be passed here. Use uploadIds to attach files of any supported size, including files larger than 5 MB",
          args: {
            name: "list",
          },
        },
        {
          name: "--dry-run",
          description:
            "Specifies whether to validate the request without actually adding the communication to the case. When set to true, the request is validated but the communication isn't added, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--no-dry-run",
          description:
            "Specifies whether to validate the request without actually adding the communication to the case. When set to true, the request is validated but the communication isn't added, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
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
      name: "complete-attachment-upload",
      description:
        "Completes an attachment upload that was started with GetAttachmentUploadLinks. After you upload a part of the file to its presigned Amazon S3 URL, call CompleteAttachmentUpload with the partIndex and eTag of that part. You can include one part per call, or multiple parts in a single call. After CompleteAttachmentUpload has been called for every part of the file, the service processes the upload asynchronously. The attachment-ready status might not be reflected immediately. Use DescribeAttachmentUploadStatus to poll for the uploadStatus to become attachment-ready before passing the uploadId to CreateCase or AddCommunicationToCase",
      options: [
        {
          name: "--upload-id",
          description: "The identifier associated with the upload to complete",
          args: {
            name: "string",
          },
        },
        {
          name: "--completed-uploads",
          description:
            "The list of parts being reported as completed in this call. Each entry must contain the partIndex of an uploaded part and the ETag returned by Amazon S3 when that part was uploaded",
          args: {
            name: "list",
          },
        },
        {
          name: "--dry-run",
          description:
            "Specifies whether to validate the request without actually completing the upload. When set to true, the request is validated but the upload isn't finalized, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--no-dry-run",
          description:
            "Specifies whether to validate the request without actually completing the upload. When set to true, the request is validated but the upload isn't finalized, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
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
      name: "create-case",
      description:
        "Creates a case in the Amazon Web Services Support Center. This operation is similar to how you create a case in the Amazon Web Services Support Center Create Case page. The Amazon Web Services Support API doesn't support requesting service limit increases. You can submit a service limit increase in the following ways:    Submit a request from the Amazon Web Services Support Center Create Case page.   Use the Service Quotas RequestServiceQuotaIncrease operation.    Amazon Web Services Support automatically redacts sensitive information from support cases to protect your data. The following information is replaced with [REDACTED_BY_Amazon Web Services] and is not stored:   Amazon Web Services secret keys - The complete key is replaced. Example: [REDACTED_BY_Amazon Web Services]    Private keys - The complete key is replaced. Example: [REDACTED_BY_Amazon Web Services]    Credit card numbers - The number is redacted, but the last 4 digits remain. Example: [REDACTED_BY_Amazon Web Services]-7016    This sensitive information is never required by Amazon Web Services Support.  A successful CreateCase request returns a Amazon Web Services Support case number. You can use the DescribeCases operation and specify the case number to get existing Amazon Web Services Support cases. After you create a case, use the AddCommunicationToCase operation to add additional communication or attachments to an existing case. The caseId is separate from the displayId that appears in the Amazon Web Services Support Center. Use the DescribeCases operation to get the displayId.    You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support",
      options: [
        {
          name: "--subject",
          description:
            "The title of the support case. The title appears in the Subject field on the Amazon Web Services Support Center Create Case page",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-code",
          description:
            "The code for the Amazon Web Services service. You can use the DescribeServices operation to get the possible serviceCode values",
          args: {
            name: "string",
          },
        },
        {
          name: "--severity-code",
          description:
            "A value that indicates the urgency of the case. This value determines the response time according to your service level agreement with Amazon Web Services Support. You can use the DescribeSeverityLevels operation to get the possible values for severityCode.  For more information, see SeverityLevel and Choosing a Severity in the Amazon Web Services Support User Guide.  The availability of severity levels depends on the support plan for the Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--category-code",
          description:
            "The category of problem for the support case. You also use the DescribeServices operation to get the category code for a service. Each Amazon Web Services service defines its own set of category codes",
          args: {
            name: "string",
          },
        },
        {
          name: "--communication-body",
          description:
            "The communication body text that describes the issue. This text appears in the Description field on the Amazon Web Services Support Center Create Case page",
          args: {
            name: "string",
          },
        },
        {
          name: "--cc-email-addresses",
          description:
            "A list of email addresses that Amazon Web Services Support copies on case correspondence. Amazon Web Services Support identifies the account that creates the case when you specify your Amazon Web Services credentials in an HTTP POST method or use the Amazon Web Services SDKs",
          args: {
            name: "list",
          },
        },
        {
          name: "--language",
          description:
            'The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1 code for the language parameter if you want support in that language',
          args: {
            name: "string",
          },
        },
        {
          name: "--issue-type",
          description:
            "The type of issue for the case. You can specify customer-service or technical. If you don't specify a value, the default is technical",
          args: {
            name: "string",
          },
        },
        {
          name: "--attachment-set-id",
          description:
            "The ID of a set of one or more attachments for the case. Create the set by using the AddAttachmentsToSet operation. Each attachment in the set must be 5 MB or smaller. To attach files larger than 5 MB, use uploadIds",
          args: {
            name: "string",
          },
        },
        {
          name: "--upload-ids",
          description:
            "A list of upload IDs that identify attachments to add to the case. Each uploadId is returned by the GetAttachmentUploadLinks operation. The upload must reach the attachment-ready state by calling CompleteAttachmentUpload before it can be passed here. Use uploadIds to attach files of any supported size, including files larger than 5 MB",
          args: {
            name: "list",
          },
        },
        {
          name: "--dry-run",
          description:
            "Specifies whether to validate the request without actually creating the case. When set to true, the request is validated but no case is created, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--no-dry-run",
          description:
            "Specifies whether to validate the request without actually creating the case. When set to true, the request is validated but no case is created, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
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
      name: "describe-attachment",
      description:
        "Returns the attachment that has the specified ID. Attachments can include screenshots, error logs, or other files that describe your issue. Attachment IDs are generated by the case management system when you add an attachment to a case or case communication. Attachment IDs are returned in the AttachmentDetails objects that are returned by the DescribeCommunications operation.    You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.      DescribeAttachment can't return attachments larger than 5 MB. If the specified attachmentId refers to an attachment larger than 5 MB, the request fails with InvalidParameterValueException. To download an attachment of any size, including attachments larger than 5 MB, use GetAttachmentDownloadLink. GetAttachmentDownloadLink returns an Amazon S3 presigned URL that you can use to download the attachment directly",
      options: [
        {
          name: "--attachment-id",
          description:
            "The ID of the attachment to return. Attachment IDs are returned by the DescribeCommunications operation. If the specified attachment is larger than 5 MB, this operation returns InvalidParameterValueException. To download attachments larger than 5 MB, use GetAttachmentDownloadLink",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Specifies whether to validate the request without actually retrieving the attachment. When set to true, the request is validated but no attachment content is returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--no-dry-run",
          description:
            "Specifies whether to validate the request without actually retrieving the attachment. When set to true, the request is validated but no attachment content is returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
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
      name: "describe-attachment-upload-status",
      description:
        "Returns the current status, file name, and progress of a multipart attachment upload that was started with GetAttachmentUploadLinks. Use this operation to track where an upload is in the workflow. While parts are still being uploaded and reported through CompleteAttachmentUpload, the uploadStatus is attachment-not-ready and uploadProgress reports the total number of parts and how many have been completed so far. After every part has been reported and the service finishes processing the upload asynchronously, the uploadStatus becomes attachment-ready and the uploadId can be attached to a case through CreateCase or AddCommunicationToCase.    You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support",
      options: [
        {
          name: "--upload-id",
          description:
            "The unique identifier for the upload. The uploadId is returned by GetAttachmentUploadLinks when you initiate the upload",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Specifies whether to validate the request without actually returning upload status. When set to true, the request is validated but no status is returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--no-dry-run",
          description:
            "Specifies whether to validate the request without actually returning upload status. When set to true, the request is validated but no status is returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
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
      name: "describe-cases",
      description:
        "Returns a list of cases that you specify by passing one or more case IDs. You can use the afterTime and beforeTime parameters to filter the cases by date. You can set values for the includeResolvedCases and includeCommunications parameters to specify how much information to return. The response returns the following in JSON format:   One or more CaseDetails data types.   One or more nextToken values, which specify where to paginate the returned records represented by the CaseDetails objects.   Case data is available for 24 months after creation. If a case was created more than 24 months ago, a request might return an error.    You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.     Each Communication returned by this operation includes attachment information in two fields:    attachmentSet: returns only attachments that are 5 MB or smaller. Attachments larger than 5 MB are not included in this field.    attachments: returns all attachments regardless of size.   Amazon Web Services recommends that you use the attachments field and download each attachment with GetAttachmentDownloadLink, which supports attachments of any size. The attachmentSet field and DescribeAttachment return only attachments that are 5 MB or smaller",
      options: [
        {
          name: "--case-id-list",
          description:
            "A list of ID numbers of the support cases you want returned. The maximum number of cases is 100",
          args: {
            name: "list",
          },
        },
        {
          name: "--display-id",
          description:
            "The ID displayed for a case in the Amazon Web Services Support Center user interface",
          args: {
            name: "string",
          },
        },
        {
          name: "--after-time",
          description:
            "The start date for a filtered date search on support case communications. Case communications are available for 24 months after creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--before-time",
          description:
            "The end date for a filtered date search on support case communications. Case communications are available for 24 months after creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-resolved-cases",
          description:
            "Specifies whether to include resolved support cases in the DescribeCases response. By default, resolved cases aren't included",
        },
        {
          name: "--no-include-resolved-cases",
          description:
            "Specifies whether to include resolved support cases in the DescribeCases response. By default, resolved cases aren't included",
        },
        {
          name: "--next-token",
          description: "A resumption point for pagination",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return before paginating",
          args: {
            name: "integer",
          },
        },
        {
          name: "--language",
          description:
            'The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1 code for the language parameter if you want support in that language',
          args: {
            name: "string",
          },
        },
        {
          name: "--include-communications",
          description:
            "Specifies whether to include communications in the DescribeCases response. By default, communications are included",
        },
        {
          name: "--no-include-communications",
          description:
            "Specifies whether to include communications in the DescribeCases response. By default, communications are included",
        },
        {
          name: "--dry-run",
          description:
            "Specifies whether to validate the request without actually returning case data. When set to true, the request is validated but no cases are returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--no-dry-run",
          description:
            "Specifies whether to validate the request without actually returning case data. When set to true, the request is validated but no cases are returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
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
      name: "describe-communications",
      description:
        "Returns communications and attachments for one or more support cases. Use the afterTime and beforeTime parameters to filter by date. You can use the caseId parameter to restrict the results to a specific case. Case data is available for 24 months after creation. If a case was created more than 24 months ago, a request for data might cause an error. You can use the maxResults and nextToken parameters to control the pagination of the results. Set maxResults to the number of cases that you want to display on each page, and use nextToken to specify the resumption of pagination.    You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.     Each Communication returned by this operation includes attachment information in two fields:    attachmentSet: returns only attachments that are 5 MB or smaller. Attachments larger than 5 MB are not included in this field.    attachments: returns all attachments regardless of size.   Amazon Web Services recommends that you use the attachments field and download each attachment with GetAttachmentDownloadLink, which supports attachments of any size. The attachmentSet field and DescribeAttachment return only attachments that are 5 MB or smaller",
      options: [
        {
          name: "--case-id",
          description:
            "The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-12345678910-exen-2025-c4c1d2bf33c5cf47",
          args: {
            name: "string",
          },
        },
        {
          name: "--before-time",
          description:
            "The end date for a filtered date search on support case communications. Case communications are available for 24 months after creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--after-time",
          description:
            "The start date for a filtered date search on support case communications. Case communications are available for 24 months after creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "A resumption point for pagination",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return before paginating",
          args: {
            name: "integer",
          },
        },
        {
          name: "--dry-run",
          description:
            "Specifies whether to validate the request without actually returning communications. When set to true, the request is validated but no communications are returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--no-dry-run",
          description:
            "Specifies whether to validate the request without actually returning communications. When set to true, the request is validated but no communications are returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
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
      name: "describe-create-case-options",
      description:
        "Returns a list of CreateCaseOption types along with the corresponding supported hours and language availability. You can specify the language categoryCode, issueType and serviceCode used to retrieve the CreateCaseOptions.    You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support",
      options: [
        {
          name: "--issue-type",
          description:
            "The type of issue for the case. You can specify customer-service or technical. If you don't specify a value, the default is technical",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-code",
          description:
            "The code for the Amazon Web Services service. You can use the DescribeServices operation to get the possible serviceCode values",
          args: {
            name: "string",
          },
        },
        {
          name: "--language",
          description:
            'The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1 code for the language parameter if you want support in that language',
          args: {
            name: "string",
          },
        },
        {
          name: "--category-code",
          description:
            "The category of problem for the support case. You also use the DescribeServices operation to get the category code for a service. Each Amazon Web Services service defines its own set of category codes",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Specifies whether to validate the request without actually returning case option data. When set to true, the request is validated but no options are returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--no-dry-run",
          description:
            "Specifies whether to validate the request without actually returning case option data. When set to true, the request is validated but no options are returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
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
      name: "describe-services",
      description:
        "Returns the current list of Amazon Web Services services and a list of service categories for each service. You then use service names and categories in your CreateCase requests. Each Amazon Web Services service has its own set of categories. The service codes and category codes correspond to the values that appear in the Service and Category lists on the Amazon Web Services Support Center Create Case page. The values in those fields don't necessarily match the service codes and categories returned by the DescribeServices operation. Always use the service codes and categories that the DescribeServices operation returns, so that you have the most recent set of service and category codes.    You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support",
      options: [
        {
          name: "--service-code-list",
          description:
            "A JSON-formatted list of service codes available for Amazon Web Services services",
          args: {
            name: "list",
          },
        },
        {
          name: "--language",
          description:
            'The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1 code for the language parameter if you want support in that language',
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Specifies whether to validate the request without actually returning the list of services. When set to true, the request is validated but no services are returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--no-dry-run",
          description:
            "Specifies whether to validate the request without actually returning the list of services. When set to true, the request is validated but no services are returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
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
      name: "describe-severity-levels",
      description:
        "Returns the list of severity levels that you can assign to a support case. The severity level for a case is also a field in the CaseDetails data type that you include for a CreateCase request.    You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support",
      options: [
        {
          name: "--language",
          description:
            'The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") , Chinese ("zh"), Spanish ("es"), Portuguese ("pt"), French ("fr"), Korean (“ko”), and Turkish ("tr"). You must specify the ISO 639-1 code for the language parameter if you want support in that language',
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Specifies whether to validate the request without actually returning severity levels. When set to true, the request is validated but no severity levels are returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--no-dry-run",
          description:
            "Specifies whether to validate the request without actually returning severity levels. When set to true, the request is validated but no severity levels are returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
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
      name: "describe-supported-languages",
      description:
        "Returns a list of supported languages for a specified categoryCode, issueType and serviceCode. The returned supported languages will include a ISO 639-1 code for the language, and the language display name.    You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support",
      options: [
        {
          name: "--issue-type",
          description:
            "The type of issue for the case. You can specify customer-service or technical",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-code",
          description:
            "The code for the Amazon Web Services service. You can use the DescribeServices operation to get the possible serviceCode values",
          args: {
            name: "string",
          },
        },
        {
          name: "--category-code",
          description:
            "The category of problem for the support case. You also use the DescribeServices operation to get the category code for a service. Each Amazon Web Services service defines its own set of category codes",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Specifies whether to validate the request without actually returning supported languages. When set to true, the request is validated but no languages are returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--no-dry-run",
          description:
            "Specifies whether to validate the request without actually returning supported languages. When set to true, the request is validated but no languages are returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
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
      name: "describe-trusted-advisor-check-refresh-statuses",
      description:
        "Returns the refresh status of the Trusted Advisor checks that have the specified check IDs. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation. Some checks are refreshed automatically, and you can't return their refresh statuses by using the DescribeTrustedAdvisorCheckRefreshStatuses operation. If you call this operation for these checks, you might see an InvalidParameterValue error.    You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.    To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide",
      options: [
        {
          name: "--check-ids",
          description:
            "The IDs of the Trusted Advisor checks to get the status.  If you specify the check ID of a check that is automatically refreshed, you might see an InvalidParameterValue error",
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
      name: "describe-trusted-advisor-check-result",
      description:
        "Returns the results of the Trusted Advisor check that has the specified check ID. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation. The response contains a TrustedAdvisorCheckResult object, which contains these three objects:    TrustedAdvisorCategorySpecificSummary     TrustedAdvisorResourceDetail     TrustedAdvisorResourcesSummary    In addition, the response contains these fields:    status - The alert status of the check can be ok (green), warning (yellow), error (red), or not_available.    timestamp - The time of the last refresh of the check.    checkId - The unique identifier for the check.      You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.    To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide",
      options: [
        {
          name: "--check-id",
          description: "The unique identifier for the Trusted Advisor check",
          args: {
            name: "string",
          },
        },
        {
          name: "--language",
          description:
            "The ISO 639-1 code for the language that you want your check results to appear in. The Amazon Web Services Support API currently supports the following languages for Trusted Advisor:   Chinese, Simplified - zh    Chinese, Traditional - zh_TW    English - en    French - fr    German - de    Indonesian - id    Italian - it    Japanese - ja    Korean - ko    Portuguese, Brazilian - pt_BR    Spanish - es",
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
      name: "describe-trusted-advisor-check-summaries",
      description:
        "Returns the results for the Trusted Advisor check summaries for the check IDs that you specified. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation. The response contains an array of TrustedAdvisorCheckSummary objects.    You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.    To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide.  Understanding the Trusted Advisor Resources processed value  The Resources processed value, resourcesProcessed, usually shows both flagged resources (those with warnings or errors) and resources in good standing (ok status resources). However, some checks report flagged resources only. To understand what a specific check reports, review the detailed check information in the Trusted Advisor check reference. If you see a Green criterion listed in the Alert criteria, then the check reports all resources. If there's no Green criterion listed in the Alert criteria, then the check reports only flagged resources. For example, the Amazon EC2 Reserved Instance optimization check (cX3c2R1chu) doesn't list a Green criterion in the Alert criteria. So, this check only reports flagged resources",
      options: [
        {
          name: "--check-ids",
          description: "The IDs of the Trusted Advisor checks",
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
      name: "describe-trusted-advisor-checks",
      description:
        "Returns information about all available Trusted Advisor checks, including the name, ID, category, description, and metadata. You must specify a language code. The response contains a TrustedAdvisorCheckDescription object for each check. You must set the Amazon Web Services Region to us-east-1.    You must have a Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API.    If you call the Amazon Web Services Support API from an account that doesn't have a Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.   The names and descriptions for Trusted Advisor checks are subject to change. We recommend that you specify the check ID in your code to uniquely identify a check.    To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide",
      options: [
        {
          name: "--language",
          description:
            "The ISO 639-1 code for the language that you want your checks to appear in. The Amazon Web Services Support API currently supports the following languages for Trusted Advisor:   Chinese, Simplified - zh    Chinese, Traditional - zh_TW    English - en    French - fr    German - de    Indonesian - id    Italian - it    Japanese - ja    Korean - ko    Portuguese, Brazilian - pt_BR    Spanish - es",
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
      name: "get-attachment-download-link",
      description:
        "Returns a presigned download URL for an attachment that is associated with a case communication. The download link works for an attachment of any size, including attachments added through AddAttachmentsToSet and attachments uploaded through GetAttachmentUploadLinks. The download URL is time-limited and expires at the date and time indicated in the downloadUrl response field. Download the attachment from the URL before it expires.    You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support",
      options: [
        {
          name: "--attachment-id",
          description:
            "The unique identifier of the attachment for which to retrieve a download link. Attachment IDs are returned in the AttachmentDetails objects in the attachments field of a Communication returned by DescribeCommunications or DescribeCases",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Specifies whether to validate the request without actually returning a download link. When set to true, the request is validated but no URL is returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--no-dry-run",
          description:
            "Specifies whether to validate the request without actually returning a download link. When set to true, the request is validated but no URL is returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
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
      name: "get-attachment-upload-links",
      description:
        "Returns one or more presigned upload URLs for uploading a large file attachment to a support case by using a multipart upload workflow. The maximum file size that you can upload with this workflow is 150 MB, and parts can be up to 100 MB each. Initiate a new upload by providing fileName and fileSizeBytes; the response returns a unique uploadId, the part size, the total number of parts, and a list of presigned upload URLs for the requested range of parts. A maximum of 10 upload URLs are returned per call. To retrieve more upload URLs for an upload that's already in progress, call GetAttachmentUploadLinks again with the existing uploadId and a new uploadRange. Upload each part to its presigned URL by using HTTP PUT and capture the ETag from the response. After you upload all parts, call CompleteAttachmentUpload with the uploadId and the list of part indexes and ETags to finalize the upload. You can then attach the upload to a case by passing the uploadId in the uploadIds parameter of CreateCase or AddCommunicationToCase. To monitor progress before completion, call DescribeAttachmentUploadStatus.    You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support",
      options: [
        {
          name: "--file-name",
          description:
            "The name of the file to upload, including the file extension. This value is required when you initiate a new upload",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-size-bytes",
          description:
            "The total size of the file in bytes. The service uses this value to calculate the total number of parts and the size of each part. Required when you initiate a new upload (when uploadId isn't provided). Valid range: 1 to 157,286,400 bytes (approximately 150 MB)",
          args: {
            name: "long",
          },
        },
        {
          name: "--upload-id",
          description:
            "The unique identifier of an in-progress multipart upload, returned by a previous call to GetAttachmentUploadLinks. Specify uploadId to retrieve additional presigned upload URLs for an upload that has already been initiated. Required when fileSizeBytes isn't provided. Length: 1 to 2,048 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--upload-range",
          description:
            "The range of part indexes for which to return presigned upload URLs. Use this parameter to page through the upload URLs for a large file across multiple calls. If you omit this parameter, the service determines the range to return",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dry-run",
          description:
            "Specifies whether to validate the request without actually generating upload URLs. When set to true, the request is validated but no URLs are returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--no-dry-run",
          description:
            "Specifies whether to validate the request without actually generating upload URLs. When set to true, the request is validated but no URLs are returned, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
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
      name: "refresh-trusted-advisor-check",
      description:
        "Refreshes the Trusted Advisor check that you specify using the check ID. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation. Some checks are refreshed automatically. If you call the RefreshTrustedAdvisorCheck operation to refresh them, you might see the InvalidParameterValue error. The response contains a TrustedAdvisorCheckRefreshStatus object.    You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support.    To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see About the Amazon Web Services Support API in the Amazon Web Services Support User Guide",
      options: [
        {
          name: "--check-id",
          description:
            "The unique identifier for the Trusted Advisor check to refresh.  Specifying the check ID of a check that is automatically refreshed causes an InvalidParameterValue error",
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
      name: "resolve-case",
      description:
        "Resolves a support case. This operation takes a caseId and returns the initial and final state of the case.    You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.   If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the SubscriptionRequiredException error message appears. For information about changing your support plan, see Amazon Web Services Support",
      options: [
        {
          name: "--case-id",
          description:
            "The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-12345678910-exen-2025-c4c1d2bf33c5cf47",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Specifies whether to validate the request without actually resolving the case. When set to true, the request is validated but the case isn't resolved, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--no-dry-run",
          description:
            "Specifies whether to validate the request without actually resolving the case. When set to true, the request is validated but the case isn't resolved, and the operation returns a DryRunOperationException. When omitted or set to false, the request runs normally",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
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
