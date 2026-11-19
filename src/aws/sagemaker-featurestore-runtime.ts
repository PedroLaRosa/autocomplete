const completionSpec: Fig.Spec = {
  name: "sagemaker-featurestore-runtime",
  description:
    "Contains all data plane API operations and data types for the Amazon SageMaker Feature Store. Use this API to put, delete, and retrieve (get) features from a feature store. Use the following operations to configure your OnlineStore and OfflineStore features, and to create and manage feature groups:    CreateFeatureGroup     DeleteFeatureGroup     DescribeFeatureGroup     ListFeatureGroups",
  subcommands: [
    {
      name: "batch-get-record",
      description: "Retrieves a batch of Records from a FeatureGroup",
      options: [
        {
          name: "--identifiers",
          description:
            "A list containing the name or Amazon Resource Name (ARN) of the FeatureGroup, the list of names of Features to be retrieved, and the corresponding RecordIdentifier values as strings",
          args: {
            name: "list",
          },
        },
        {
          name: "--expiration-time-response",
          description:
            "Parameter to request ExpiresAt in response. If Enabled, BatchGetRecord will return the value of ExpiresAt, if it is not null. If Disabled and null, BatchGetRecord will return null",
          args: {
            name: "string",
            suggestions: ["Enabled", "Disabled"],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
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
      name: "batch-write-record",
      description:
        "Writes a batch of Records to one or more FeatureGroups. Use this API for bulk ingestion of records into the OnlineStore and OfflineStore. You can set the ingested records to expire at a given time to live (TTL) duration after the record's event time by specifying the TtlDuration parameter. A request level TtlDuration applies to all entries that do not specify their own TtlDuration",
      options: [
        {
          name: "--entries",
          description:
            "A list of records to write. Each entry specifies the FeatureGroup, the record data, and optionally target stores and a TTL duration",
          args: {
            name: "list",
          },
        },
        {
          name: "--ttl-duration",
          description:
            "Time to live duration applied to all entries in the batch that do not specify their own TtlDuration; ExpiresAt = EventTime + TtlDuration. For information on HardDelete, see the DeleteRecord API in the Amazon SageMaker API Reference guide",
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
      name: "delete-record",
      description:
        "Deletes a Record from a FeatureGroup in the OnlineStore. Feature Store supports both SoftDelete and HardDelete. For SoftDelete (default), feature columns are set to null and the record is no longer retrievable by GetRecord or BatchGetRecord. For HardDelete, the complete Record is removed from the OnlineStore. In both cases, Feature Store appends the deleted record marker to the OfflineStore. The deleted record marker is a record with the same RecordIdentifer as the original, but with is_deleted value set to True, EventTime set to the delete input EventTime, and other feature values set to null. Note that the EventTime specified in DeleteRecord should be set later than the EventTime of the existing record in the OnlineStore for that RecordIdentifer. If it is not, the deletion does not occur:   For SoftDelete, the existing (not deleted) record remains in the OnlineStore, though the delete record marker is still written to the OfflineStore.    HardDelete returns EventTime: 400 ValidationException to indicate that the delete operation failed. No delete record marker is written to the OfflineStore.   When a record is deleted from the OnlineStore, the deleted record marker is appended to the OfflineStore. If you have the Iceberg table format enabled for your OfflineStore, you can remove all history of a record from the OfflineStore using Amazon Athena or Apache Spark. For information on how to hard delete a record from the OfflineStore with the Iceberg table format enabled, see Delete records from the offline store",
      options: [
        {
          name: "--feature-group-name",
          description:
            "The name or Amazon Resource Name (ARN) of the feature group to delete the record from",
          args: {
            name: "string",
          },
        },
        {
          name: "--record-identifier-value-as-string",
          description:
            "The value for the RecordIdentifier that uniquely identifies the record, in string format",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-time",
          description:
            "Timestamp indicating when the deletion event occurred. EventTime can be used to query data at a certain point in time",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-stores",
          description:
            "A list of stores from which you're deleting the record. By default, Feature Store deletes the record from all of the stores that you're using for the FeatureGroup",
          args: {
            name: "list",
          },
        },
        {
          name: "--deletion-mode",
          description:
            "The name of the deletion mode for deleting the record. By default, the deletion mode is set to SoftDelete",
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
      name: "get-record",
      description:
        "Use for OnlineStore serving from a FeatureStore. Only the latest records stored in the OnlineStore can be retrieved. If no Record with RecordIdentifierValue is found, then an empty result is returned",
      options: [
        {
          name: "--feature-group-name",
          description:
            "The name or Amazon Resource Name (ARN) of the feature group from which you want to retrieve a record",
          args: {
            name: "string",
          },
        },
        {
          name: "--record-identifier-value-as-string",
          description:
            "The value that corresponds to RecordIdentifier type and uniquely identifies the record in the FeatureGroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--feature-names",
          description:
            "List of names of Features to be retrieved. If not specified, the latest value for all the Features are returned",
          args: {
            name: "list",
          },
        },
        {
          name: "--expiration-time-response",
          description:
            "Parameter to request ExpiresAt in response. If Enabled, GetRecord will return the value of ExpiresAt, if it is not null. If Disabled and null, GetRecord will return null",
          args: {
            name: "string",
            suggestions: ["Enabled", "Disabled"],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
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
      name: "list-records",
      description:
        "Lists the RecordIdentifier values of all records stored in a FeatureGroup's OnlineStore. This enables you to discover which records exist without retrieving the full record data",
      options: [
        {
          name: "--feature-group-name",
          description:
            "The name or Amazon Resource Name (ARN) of the feature group to list records from",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of record identifiers to return in a single page of results. For the InMemory tier, this value is a hint and not a strict requirement. The response may contain more or fewer results than the specified MaxResults",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A token to resume pagination of ListRecords results",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-soft-deleted-records",
          description:
            "If set to true, the result includes records that have been soft deleted",
        },
        {
          name: "--no-include-soft-deleted-records",
          description:
            "If set to true, the result includes records that have been soft deleted",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
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
      name: "put-record",
      description:
        "The PutRecord API is used to ingest a list of Records into your feature group.  If a new record’s EventTime is greater, the new record is written to both the OnlineStore and OfflineStore. Otherwise, the record is a historic record and it is written only to the OfflineStore.  You can specify the ingestion to be applied to the OnlineStore, OfflineStore, or both by using the TargetStores request parameter.  You can set the ingested record to expire at a given time to live (TTL) duration after the record’s event time, ExpiresAt = EventTime + TtlDuration, by specifying the TtlDuration parameter. A record level TtlDuration is set when specifying the TtlDuration parameter using the PutRecord API call. If the input TtlDuration is null or unspecified, TtlDuration is set to the default feature group level TtlDuration. A record level TtlDuration supersedes the group level TtlDuration",
      options: [
        {
          name: "--feature-group-name",
          description:
            "The name or Amazon Resource Name (ARN) of the feature group that you want to insert the record into",
          args: {
            name: "string",
          },
        },
        {
          name: "--record",
          description:
            "List of FeatureValues to be inserted. This will be a full over-write. If you only want to update few of the feature values, do the following:   Use GetRecord to retrieve the latest record.   Update the record returned from GetRecord.    Use PutRecord to update feature values",
          args: {
            name: "list",
          },
        },
        {
          name: "--target-stores",
          description:
            "A list of stores to which you're adding the record. By default, Feature Store adds the record to all of the stores that you're using for the FeatureGroup",
          args: {
            name: "list",
          },
        },
        {
          name: "--ttl-duration",
          description:
            "Time to live duration, where the record is hard deleted after the expiration time is reached; ExpiresAt = EventTime + TtlDuration. For information on HardDelete, see the DeleteRecord API in the Amazon SageMaker API Reference guide",
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
      name: "update-record",
      description:
        "Updates one or more feature values for an existing record in the specified feature group. Features that you do not include in the request remain unchanged. You can update up to 100 features per call.  This operation is available only for feature groups that use the Standard_V2 or InMemory online store type.  The record must already exist. If the record does not exist or has been soft-deleted, the operation returns a ResourceNotFound error. To create a record, use PutRecord. If you provide an EventTime that is older than the record's current EventTime, the service rejects the update with a ConflictException. If the EventTime is equal to or newer than the current value, the service applies the update. If you omit EventTime, the service keeps the record's existing EventTime and applies the update. If you specify a TtlDuration, you must also provide an EventTime in the request. Otherwise, the operation returns a ValidationError",
      options: [
        {
          name: "--feature-group-name",
          description:
            "The identifier for the feature group that contains the record to update. You can specify one of the following:   The feature group name.   The feature group Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--record-identifier-value-as-string",
          description:
            "The value that uniquely identifies the record in the feature group. This must match the value defined by the feature group's record identifier feature",
          args: {
            name: "string",
          },
        },
        {
          name: "--features",
          description: "The feature values to write to the record",
          args: {
            name: "list",
          },
        },
        {
          name: "--target-stores",
          description:
            "The target stores for the record update. By default, Amazon SageMaker Feature Store updates the record in all stores associated with the FeatureGroup",
          args: {
            name: "list",
          },
        },
        {
          name: "--ttl-duration",
          description:
            "The time-to-live (TTL) duration for the record. Amazon SageMaker Feature Store deletes the record when EventTime + TtlDuration elapses. If you omit this parameter, the record's existing TTL setting remains unchanged. For information about HardDelete, see the DeleteRecord operation in the Amazon SageMaker API Reference",
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
