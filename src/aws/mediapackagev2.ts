const completionSpec: Fig.Spec = {
  name: "mediapackagev2",
  description:
    "This guide is intended for creating AWS Elemental MediaPackage resources in MediaPackage Version 2 (v2) starting from May 2023. To get started with MediaPackage v2, create your MediaPackage resources. There isn't an automated process to migrate your resources from MediaPackage v1 to MediaPackage v2.  The names of the entities that you use to access this API, like URLs and ARNs, all have the versioning information added, like \"v2\", to distinguish from the prior version. If you used MediaPackage prior to this release, you can't use the MediaPackage v2 CLI or the MediaPackage v2 API to access any MediaPackage v1 resources. If you created resources in MediaPackage v1, use video on demand (VOD) workflows, and aren't looking to migrate to MediaPackage v2 yet, see the MediaPackage v1 Live API Reference.  This is the AWS Elemental MediaPackage v2 Live REST API Reference. It describes all the MediaPackage API operations for live content in detail, and provides sample requests, responses, and errors for the supported web services protocols. We assume that you have the IAM permissions that you need to use MediaPackage via the REST API. We also assume that you are familiar with the features and operations of MediaPackage, as described in the AWS Elemental MediaPackage User Guide",
  subcommands: [
    {
      name: "cancel-harvest-job",
      description: "Cancels an in-progress harvest job",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name of the channel group containing the channel from which the harvest job is running",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name of the channel from which the harvest job is running",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin-endpoint-name",
          description:
            "The name of the origin endpoint that the harvest job is harvesting from. This cannot be changed after the harvest job is submitted",
          args: {
            name: "string",
          },
        },
        {
          name: "--harvest-job-name",
          description:
            "The name of the harvest job to cancel. This name must be unique within the channel and cannot be changed after the harvest job is submitted",
          args: {
            name: "string",
          },
        },
        {
          name: "--e-tag",
          description:
            "The current Entity Tag (ETag) associated with the harvest job. Used for concurrency control",
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
      name: "create-channel",
      description:
        "Create a channel to start receiving content streams. The channel represents the input to MediaPackage for incoming live content from an encoder such as AWS Elemental MediaLive. The channel receives content, and after packaging it, outputs it through an origin endpoint to downstream devices (such as video players or CDNs) that request the content. You can create only one channel with each request. We recommend that you spread out channels between channel groups, such as putting redundant channels in the same AWS Region in different channel groups",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. You can't change the name after you create the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive token that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-type",
          description:
            "The input type is an immutable field. It defines whether the channel allows CMAF ingest, HLS ingest, or server-side multiview output. Multiview channels receive no ingest of their own. If unprovided, the value defaults to HLS. The allowed values are:    HLS - The HLS streaming specification (which defines M3U8 manifests and TS segments).    CMAF - The DASH-IF CMAF Ingest specification (which defines CMAF segments with optional DASH manifests).    MULTIVIEW – Server-side multiview. The channel receives no ingest of its own. Instead, it composites video from the source channels in its MultiviewConfiguration into a single tiled output stream",
          args: {
            name: "string",
            suggestions: ["HLS", "CMAF", "MULTIVIEW"],
          },
        },
        {
          name: "--description",
          description:
            "Enter any descriptive text that helps you to identify the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-switch-configuration",
          description:
            "The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive. This setting is valid only when InputType is CMAF",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-header-configuration",
          description:
            "The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN. This setting is valid only when InputType is CMAF",
          args: {
            name: "structure",
          },
        },
        {
          name: "--multiview-configuration",
          description:
            "The multiview configuration for the channel. This setting is required when InputType is MULTIVIEW, and can't be set for any other input type",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-locking-mode",
          description:
            "The output locking mode for the channel. This setting is only valid when InputType is CMAF. This value is immutable after channel creation. If you don't specify a value, the default is EPOCH_LOCKED. The allowed values are:    EPOCH_LOCKED - The channel uses epoch-locked behavior with deterministic sequence numbering and fixed segment boundaries aligned to epoch time. This mode supports cross-region synchronization and failover.    NON_EPOCH_LOCKED - The channel uses non-epoch-locked behavior with duration-based segment combining and monotonically increasing sequence numbers starting from 0. This mode does not support cross-region synchronization or failover",
          args: {
            name: "string",
            suggestions: ["EPOCH_LOCKED", "NON_EPOCH_LOCKED"],
          },
        },
        {
          name: "--tags",
          description:
            'A comma-separated list of tag key:value pairs that you define. For example:  "Key1": "Value1",   "Key2": "Value2"',
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
      name: "create-channel-group",
      description:
        "Create a channel group to group your channels and origin endpoints. A channel group is the top-level resource that consists of channels and origin endpoints that are associated with it and that provides predictable URLs for stream delivery. All channels and origin endpoints within the channel group are guaranteed to share the DNS. You can create only one channel group with each request",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region. You can't use spaces in the name. You can't change the name after you create the channel group",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive token that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "Enter any descriptive text that helps you to identify the channel group",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'A comma-separated list of tag key:value pairs that you define. For example:  "Key1": "Value1",   "Key2": "Value2"',
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
      name: "create-harvest-job",
      description:
        "Creates a new harvest job to export content from a MediaPackage v2 channel to an S3 bucket",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name of the channel group containing the channel from which to harvest content",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description: "The name of the channel from which to harvest content",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin-endpoint-name",
          description:
            "The name of the origin endpoint from which to harvest content",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An optional description for the harvest job",
          args: {
            name: "string",
          },
        },
        {
          name: "--harvested-manifests",
          description: "A list of manifests to be harvested",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schedule-configuration",
          description:
            "The configuration for when the harvest job should run, including start and end times",
          args: {
            name: "structure",
          },
        },
        {
          name: "--destination",
          description:
            "The S3 destination where the harvested content will be placed",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--harvest-job-name",
          description:
            "A name for the harvest job. This name must be unique within the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A collection of tags associated with the harvest job",
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
      name: "create-origin-endpoint",
      description:
        "The endpoint is attached to a channel, and represents the output of the live content. You can associate multiple endpoints to a single channel. Each endpoint gives players and downstream CDNs (such as Amazon CloudFront) access to the content for playback. Content can't be served from a channel until it has an endpoint. You can create only one endpoint with each request",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin-endpoint-name",
          description:
            "The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and must be unique for your account in the AWS Region and channel. You can't use spaces in the name. You can't change the name after you create the endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--container-type",
          description:
            "The type of container to attach to this origin endpoint. A container type is a file format that encapsulates one or more media streams, such as audio and video, into a single file. You can't change the container type after you create the endpoint",
          args: {
            name: "string",
            suggestions: ["TS", "CMAF", "ISM"],
          },
        },
        {
          name: "--segment",
          description:
            "The segment configuration, including the segment name, duration, and other configuration values",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive token that you provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "Enter any descriptive text that helps you to identify the origin endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--startover-window-seconds",
          description:
            "The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--hls-manifests",
          description: "An HTTP live streaming (HLS) manifest configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--low-latency-hls-manifests",
          description: "A low-latency HLS manifest configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--dash-manifests",
          description: "A DASH manifest configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--mss-manifests",
          description:
            "A list of Microsoft Smooth Streaming (MSS) manifest configurations for the origin endpoint. You can configure multiple MSS manifests to provide different streaming experiences or to support different client requirements",
          args: {
            name: "list",
          },
        },
        {
          name: "--force-endpoint-error-configuration",
          description: "The failover settings for the endpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--uri-separator",
          description:
            "The separator character to use in generated URIs for this origin endpoint. This setting applies to all manifest types on the endpoint. If you don't specify a value, the default is UNDERSCORE",
          args: {
            name: "string",
            suggestions: ["UNDERSCORE", "HYPHEN"],
          },
        },
        {
          name: "--stream-name-output-mode",
          description:
            "The output mode for stream names in egress manifests. This setting is valid only when the associated channel's InputType is HLS. You can't change the stream name output mode after you create the endpoint.  INDEX uses numeric indices for stream names (for example, 1, 2, 3). PASSTHROUGH_NAME uses the stream names from the input manifest. If you don't specify a value, the default is INDEX",
          args: {
            name: "string",
            suggestions: ["INDEX", "PASSTHROUGH_NAME"],
          },
        },
        {
          name: "--tags",
          description:
            'A comma-separated list of tag key:value pairs that you define. For example:  "Key1": "Value1",   "Key2": "Value2"',
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
      name: "delete-channel",
      description:
        "Delete a channel to stop AWS Elemental MediaPackage from receiving further content. You must delete the channel's origin endpoints before you can delete the channel",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group",
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
      name: "delete-channel-group",
      description:
        "Delete a channel group. You must delete the channel group's channels and origin endpoints before you can delete the channel group. If you delete a channel group, you'll lose access to the egress domain and will have to create a new channel group to replace it",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
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
      name: "delete-channel-policy",
      description: "Delete a channel policy",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group",
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
      name: "delete-origin-endpoint",
      description:
        "Origin endpoints can serve content until they're deleted. Delete the endpoint if it should no longer respond to playback requests. You must delete all endpoints from a channel before you can delete the channel",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin-endpoint-name",
          description:
            "The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel",
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
      name: "delete-origin-endpoint-policy",
      description: "Delete an origin endpoint policy",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin-endpoint-name",
          description:
            "The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel",
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
      name: "get-channel",
      description:
        "Retrieves the specified channel that's configured in AWS Elemental MediaPackage",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group",
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
      name: "get-channel-group",
      description:
        "Retrieves the specified channel group that's configured in AWS Elemental MediaPackage",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
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
      name: "get-channel-policy",
      description:
        "Retrieves the specified channel policy that's configured in AWS Elemental MediaPackage. With policies, you can specify who has access to AWS resources and what actions they can perform on those resources",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group",
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
      name: "get-harvest-job",
      description: "Retrieves the details of a specific harvest job",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name of the channel group containing the channel associated with the harvest job",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name of the channel associated with the harvest job",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin-endpoint-name",
          description:
            "The name of the origin endpoint associated with the harvest job",
          args: {
            name: "string",
          },
        },
        {
          name: "--harvest-job-name",
          description: "The name of the harvest job to retrieve",
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
      name: "get-origin-endpoint",
      description:
        "Retrieves the specified origin endpoint that's configured in AWS Elemental MediaPackage to obtain its playback URL and to view the packaging settings that it's currently using",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin-endpoint-name",
          description:
            "The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel",
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
      name: "get-origin-endpoint-policy",
      description:
        "Retrieves the specified origin endpoint policy that's configured in AWS Elemental MediaPackage",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin-endpoint-name",
          description:
            "The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel",
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
      name: "list-channel-groups",
      description:
        "Retrieves all channel groups that are configured in Elemental MediaPackage",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token from the GET list request. Use the token to fetch the next page of results",
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
      name: "list-channels",
      description:
        "Retrieves all channels in a specific channel group that are configured in AWS Elemental MediaPackage",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token from the GET list request. Use the token to fetch the next page of results",
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
      name: "list-harvest-jobs",
      description:
        "Retrieves a list of harvest jobs that match the specified criteria",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name of the channel group to filter the harvest jobs by. If specified, only harvest jobs associated with channels in this group will be returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name of the channel to filter the harvest jobs by. If specified, only harvest jobs associated with this channel will be returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin-endpoint-name",
          description:
            "The name of the origin endpoint to filter the harvest jobs by. If specified, only harvest jobs associated with this origin endpoint will be returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The status to filter the harvest jobs by. If specified, only harvest jobs with this status will be returned",
          args: {
            name: "string",
            suggestions: [
              "QUEUED",
              "IN_PROGRESS",
              "CANCELLED",
              "COMPLETED",
              "FAILED",
            ],
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of harvest jobs to return in a single request. If not specified, a default value will be used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token used for pagination. Provide this value in subsequent requests to retrieve the next set of results",
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
      name: "list-origin-endpoints",
      description:
        "Retrieves all origin endpoints in a specific channel that are configured in AWS Elemental MediaPackage",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token from the GET list request. Use the token to fetch the next page of results",
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
      description: "Lists the tags assigned to a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the CloudWatch resource that you want to view tags for",
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
      name: "put-channel-policy",
      description:
        "Attaches an IAM policy to the specified channel. With policies, you can specify who has access to AWS resources and what actions they can perform on those resources. You can attach only one policy with each request",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description: "The policy to attach to the specified channel",
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
      name: "put-origin-endpoint-policy",
      description:
        "Attaches an IAM policy to the specified origin endpoint. You can attach only one policy with each request",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin-endpoint-name",
          description:
            "The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description: "The policy to attach to the specified origin endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--cdn-auth-configuration",
          description:
            "The settings for using authorization headers between the MediaPackage endpoint and your CDN.  For information about CDN authorization, see CDN authorization in Elemental MediaPackage in the MediaPackage user guide",
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
      name: "reset-channel-state",
      description:
        "Resetting the channel can help to clear errors from misconfigurations in the encoder. A reset refreshes the ingest stream and removes previous content.   Be sure to stop the encoder before you reset the channel, and wait at least 30 seconds before you restart the encoder",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name of the channel group that contains the channel that you are resetting",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description: "The name of the channel that you are resetting",
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
      name: "reset-origin-endpoint-state",
      description:
        "Resetting the origin endpoint can help to resolve unexpected behavior and other content packaging issues. It also helps to preserve special events when you don't want the previous content to be available for viewing. A reset clears out all previous content from the origin endpoint. MediaPackage might return old content from this endpoint in the first 30 seconds after the endpoint reset. For best results, when possible, wait 30 seconds from endpoint reset to send playback requests to this endpoint",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name of the channel group that contains the channel with the origin endpoint that you are resetting",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name of the channel with the origin endpoint that you are resetting",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin-endpoint-name",
          description: "The name of the origin endpoint that you are resetting",
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
        "Assigns one of more tags (key-value pairs) to the specified MediaPackage resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values. You can use the TagResource operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the MediaPackage resource that you're adding tags to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Contains a map of the key-value pairs for the resource tag or tags assigned to the resource",
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
      description: "Removes one or more tags from the specified resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the MediaPackage resource that you're removing tags from",
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
      name: "update-channel",
      description:
        "Update the specified channel. You can edit if MediaPackage sends ingest or egress access logs to the CloudWatch log group, if content will be encrypted, the description on a channel, and your channel's policy settings. You can't edit the name of the channel or CloudFront distribution details. Any edits you make that impact the video output may not be reflected for a few minutes",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group",
          args: {
            name: "string",
          },
        },
        {
          name: "--e-tag",
          description:
            "The expected current Entity Tag (ETag) for the resource. If the specified ETag does not match the resource's current entity tag, the update request will be rejected",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "Any descriptive information that you want to add to the channel for future identification purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-switch-configuration",
          description:
            "The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive. This setting is valid only when InputType is CMAF",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-header-configuration",
          description:
            "The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN. This setting is valid only when InputType is CMAF",
          args: {
            name: "structure",
          },
        },
        {
          name: "--multiview-configuration",
          description:
            "The multiview configuration for the channel. This setting is required when the channel's InputType is MULTIVIEW, and can't be set for any other input type. Because InputType is immutable, you can change a multiview channel's sources and layouts. You can't add or remove the multiview configuration itself",
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
      name: "update-channel-group",
      description:
        "Update the specified channel group. You can edit the description on a channel group for easier identification later from the AWS Elemental MediaPackage console. You can't edit the name of the channel group. Any edits you make that impact the video output may not be reflected for a few minutes",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--e-tag",
          description:
            "The expected current Entity Tag (ETag) for the resource. If the specified ETag does not match the resource's current entity tag, the update request will be rejected",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "Any descriptive information that you want to add to the channel group for future identification purposes",
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
      name: "update-origin-endpoint",
      description:
        "Update the specified origin endpoint. Edit the packaging preferences on an endpoint to optimize the viewing experience. You can't edit the name of the endpoint. Any edits you make that impact the video output may not be reflected for a few minutes",
      options: [
        {
          name: "--channel-group-name",
          description:
            "The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin-endpoint-name",
          description:
            "The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--container-type",
          description:
            "The type of container attached to this origin endpoint. A container type is a file format that encapsulates one or more media streams, such as audio and video, into a single file",
          args: {
            name: "string",
            suggestions: ["TS", "CMAF", "ISM"],
          },
        },
        {
          name: "--segment",
          description:
            "The segment configuration, including the segment name, duration, and other configuration values",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description:
            "Any descriptive information that you want to add to the origin endpoint for future identification purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--startover-window-seconds",
          description:
            "The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--hls-manifests",
          description: "An HTTP live streaming (HLS) manifest configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--low-latency-hls-manifests",
          description: "A low-latency HLS manifest configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--dash-manifests",
          description: "A DASH manifest configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--mss-manifests",
          description:
            "A list of Microsoft Smooth Streaming (MSS) manifest configurations to update for the origin endpoint. This replaces the existing MSS manifest configurations",
          args: {
            name: "list",
          },
        },
        {
          name: "--force-endpoint-error-configuration",
          description: "The failover settings for the endpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--uri-separator",
          description:
            "The separator character to use in generated URIs for this origin endpoint. This setting applies to all manifest types on the endpoint. If you don't specify a value in the update request, the current value is preserved",
          args: {
            name: "string",
            suggestions: ["UNDERSCORE", "HYPHEN"],
          },
        },
        {
          name: "--stream-name-output-mode",
          description:
            "The output mode for stream names in egress manifests. If you provide a value, it must match the current value. You can't change the stream name output mode after you create the endpoint",
          args: {
            name: "string",
            suggestions: ["INDEX", "PASSTHROUGH_NAME"],
          },
        },
        {
          name: "--e-tag",
          description:
            "The expected current Entity Tag (ETag) for the resource. If the specified ETag does not match the resource's current entity tag, the update request will be rejected",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "harvest-job-finished",
          description:
            "Wait until JMESPath query Status returns COMPLETED when polling with ``get-harvest-job``. It will poll every 2 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--channel-group-name",
              description:
                "The name of the channel group containing the channel associated with the harvest job",
              args: {
                name: "string",
              },
            },
            {
              name: "--channel-name",
              description:
                "The name of the channel associated with the harvest job",
              args: {
                name: "string",
              },
            },
            {
              name: "--origin-endpoint-name",
              description:
                "The name of the origin endpoint associated with the harvest job",
              args: {
                name: "string",
              },
            },
            {
              name: "--harvest-job-name",
              description: "The name of the harvest job to retrieve",
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
