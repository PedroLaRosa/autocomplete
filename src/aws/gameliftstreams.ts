const completionSpec: Fig.Spec = {
  name: "gameliftstreams",
  description:
    "Amazon GameLift Streams Amazon GameLift Streams provides a global cloud solution for content streaming experiences. Use Amazon GameLift Streams tools to upload and configure content for streaming, deploy and scale computing resources to host streams, and manage stream session placement to meet customer demand. This Reference Guide describes the Amazon GameLift Streams service API. You can use the API through the Amazon Web Services SDK, the Command Line Interface (CLI), or by making direct REST calls through HTTPS. See the Amazon GameLift Streams Developer Guide for more information on how Amazon GameLift Streams works and how to work with it",
  subcommands: [
    {
      name: "add-stream-group-locations",
      description:
        "Add locations that can host stream sessions. To add a location, the stream group must be in ACTIVE status. You configure locations and their corresponding capacity for each stream group. Creating a stream group in a location that's nearest to your end users can help minimize latency and improve quality.   This operation provisions stream capacity at the specified locations. By default, all locations have 1 or 2 capacity, depending on the stream class option: 2 for 'High' and 1 for 'Ultra' and 'Win2022'. This operation also copies the content files of all associated applications to an internal S3 bucket at each location. This allows Amazon GameLift Streams to host performant stream sessions",
      options: [
        {
          name: "--identifier",
          description:
            "A stream group to add the specified locations to.  This value is an Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4",
          args: {
            name: "string",
          },
        },
        {
          name: "--location-configurations",
          description:
            "A set of one or more locations and the streaming capacity for each location",
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
      name: "associate-applications",
      description:
        "When you associate, or link, an application with a stream group, then Amazon GameLift Streams can launch the application using the stream group's allocated compute resources. The stream group must be in ACTIVE status. You can reverse this action by using DisassociateApplications. If a stream group does not already have a linked application, Amazon GameLift Streams will automatically assign the first application provided in ApplicationIdentifiers as the default",
      options: [
        {
          name: "--identifier",
          description:
            "A stream group to associate to the applications. This value is an Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-identifiers",
          description:
            "A set of applications to associate with the stream group. This value is a set of either Amazon Resource Names (ARN) or IDs that uniquely identify application resources. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6. Example ID: a-9ZY8X7Wv6",
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
      name: "create-application",
      description:
        "Creates an application resource in Amazon GameLift Streams, which specifies the application content you want to stream, such as a game build or other software, and configures the settings to run it.  Before you create an application, upload your application content files to an Amazon Simple Storage Service (Amazon S3) bucket. For more information, see Getting Started in the Amazon GameLift Streams Developer Guide.    Make sure that your files in the Amazon S3 bucket are the correct version you want to use. If you change the files at a later time, you will need to create a new Amazon GameLift Streams application.     Creating an application is the only time Amazon GameLift Streams accesses your Amazon S3 bucket. After the application reaches READY status, you can delete the original files from your Amazon S3 bucket without affecting the application.    If the request is successful, Amazon GameLift Streams begins to create an application and sets the status to INITIALIZED. When an application reaches READY status, you can use the application to set up stream groups and start streams. To track application status, call GetApplication",
      options: [
        {
          name: "--description",
          description:
            "A human-readable label for the application. You can update this value later",
          args: {
            name: "string",
          },
        },
        {
          name: "--runtime-environment",
          description:
            "Configuration settings that identify the operating system for an application resource. This can also include a compatibility layer and other drivers. A runtime environment can be one of the following:    For Linux applications     Ubuntu 22.04 LTS (Type=UBUNTU, Version=22_04_LTS)       For Windows applications    Microsoft Windows Server 2022 Base (Type=WINDOWS, Version=2022)   Proton 10.0-4 (Type=PROTON, Version=20260204)   Proton 9.0-2 (Type=PROTON, Version=20250516)   Proton 8.0-5 (Type=PROTON, Version=20241007)   Proton 8.0-2c (Type=PROTON, Version=20230704)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--executable-path",
          description:
            "The relative path and file name of the executable file that Amazon GameLift Streams will stream. Specify a path relative to the location set in ApplicationSourceUri. The file must be contained within the application's root folder. For Windows applications, the file must be a valid Windows executable or batch file with a filename ending in .exe, .cmd, or .bat. For Linux applications, the file must be a valid Linux binary executable or a script that contains an initial interpreter line starting with a shebang ('#!')",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-source-uri",
          description:
            "The location of the content that you want to stream. Enter an Amazon S3 URI to a bucket that contains your game or other application. The location can have a multi-level prefix structure, but it must include all the files needed to run the content. Amazon GameLift Streams copies everything under the specified location. This value is immutable. To designate a different content location, create a new application.  The Amazon S3 bucket and the Amazon GameLift Streams application must be in the same Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-log-paths",
          description:
            "Locations of log files that your content generates during a stream session. Enter path values that are relative to the ApplicationSourceUri location, or relative to the user's home directory when using a supported path variable. You can specify up to 10 log paths. Each individual log file cannot exceed 50 MB in size. Each path can be a directory or an exact file path. When you specify a directory, Amazon GameLift Streams collects only files with the following extensions: .txt, .log, and .utrace. To collect files with other extensions, specify the exact file path. The copy operation is not performed recursively in subfolders. The following path variables are recognized when they appear as the first component of a path: %USERPROFILE% (Windows and Proton), $HOME or ~ (Linux). Use a path variable when your application writes logs outside of the application directory. Amazon GameLift Streams uploads designated log files to the Amazon S3 bucket that you specify in ApplicationLogOutputUri at the end of a stream session. To retrieve stored log files, call GetStreamSession and get the LogFileLocationUri",
          args: {
            name: "list",
          },
        },
        {
          name: "--application-log-output-uri",
          description:
            "An Amazon S3 URI to a bucket where you would like Amazon GameLift Streams to save application logs. Required if you specify one or more ApplicationLogPaths.  The log bucket must have permissions that give Amazon GameLift Streams access to write the log files. For more information, see Application log bucket permission policy in the Amazon GameLift Streams Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of labels to assign to the new application resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource management, access management and cost allocation. See  Tagging Amazon Web Services Resources in the Amazon Web Services General Reference. You can use TagResource to add tags, UntagResource to remove tags, and ListTagsForResource to view tags on existing resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier that represents a client request. The request is idempotent, which ensures that an API request completes only once. When users send a request, Amazon GameLift Streams automatically populates this field",
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
      name: "create-stream-group",
      description:
        "Stream groups manage how Amazon GameLift Streams allocates resources and handles concurrent streams, allowing you to effectively manage capacity and costs. Within a stream group, you specify an application to stream, streaming locations and their capacity, and the stream class you want to use when streaming applications to your end-users. A stream class defines the hardware configuration of the compute resources that Amazon GameLift Streams will use when streaming, such as the CPU, GPU, and memory.   Stream capacity represents the number of concurrent streams that can be active at a time. You set stream capacity per location, per stream group. The following capacity settings are available:     Always-on capacity: This setting, if non-zero, indicates minimum streaming capacity which is allocated to you and is never released back to the service. You pay for this base level of capacity at all times, whether used or idle.     Maximum capacity: This indicates the maximum capacity that the service can allocate for you. Newly created streams may take a few minutes to start. Capacity is released back to the service when idle. You pay for capacity that is allocated to you until it is released.     Target-idle capacity: This indicates idle capacity which the service pre-allocates and holds for you in anticipation of future activity. This helps to insulate your users from capacity-allocation delays. You pay for capacity which is held in this intentional idle state.    Values for capacity must be whole number multiples of the tenancy value of the stream group's stream class.  To adjust the capacity of any ACTIVE stream group, call UpdateStreamGroup.   If the CreateStreamGroup request is successful, Amazon GameLift Streams assigns a unique ID to the stream group resource and sets the status to ACTIVATING. It can take a few minutes for Amazon GameLift Streams to finish creating the stream group while it searches for unallocated compute resources and provisions them. When complete, the stream group status will be ACTIVE and you can start stream sessions by using StartStreamSession. To check the stream group's status, call GetStreamGroup.  Stream groups should be recreated every 3-4 weeks to pick up important service updates and fixes. Stream groups that are older than 180 days can no longer be updated with new application associations. Stream groups expire when they are 365 days old, at which point they can no longer stream sessions. The exact expiration date is indicated by the date value in the ExpiresAt field",
      options: [
        {
          name: "--description",
          description: "A descriptive label for the stream group",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-class",
          description:
            "The target stream quality for sessions that are hosted in this stream group. Set a stream class that is appropriate to the type of content that you're streaming. Stream class determines the type of computing resources Amazon GameLift Streams uses and impacts the cost of streaming. The following options are available:  A stream class can be one of the following:     gen6n_pro_win2022 (NVIDIA, pro) Supports applications with extremely high 3D scene complexity which require maximum resources. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L4 Tensor Core GPUs.   Reference resolution: 1080p   Reference frame rate: 60 fps   Workload specifications: 16 vCPUs, 64 GB RAM, 24 GB VRAM   Tenancy: Supports 1 concurrent stream session       gen6n_pro (NVIDIA, pro) Supports applications with extremely high 3D scene complexity which require maximum resources. Powered by NVIDIA L4 Tensor Core GPUs.   Reference resolution: 1080p   Reference frame rate: 60 fps   Workload specifications: 16 vCPUs, 64 GB RAM, 24 GB VRAM   Tenancy: Supports 1 concurrent stream session       gen6n_ultra_win2022 (NVIDIA, ultra) Supports applications with high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L4 Tensor Core GPUs.   Reference resolution: 1080p   Reference frame rate: 60 fps   Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM   Tenancy: Supports 1 concurrent stream session       gen6n_ultra (NVIDIA, ultra) Supports applications with high 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.   Reference resolution: 1080p   Reference frame rate: 60 fps   Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM   Tenancy: Supports 1 concurrent stream session       gen6n_high (NVIDIA, high) Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.   Reference resolution: 1080p   Reference frame rate: 60 fps   Workload specifications: 4 vCPUs, 16 GB RAM, 12 GB VRAM   Tenancy: Supports up to 2 concurrent stream sessions       gen6n_medium (NVIDIA, medium) Supports applications with moderate 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.   Reference resolution: 1080p   Reference frame rate: 60 fps   Workload specifications: 2 vCPUs, 8 GB RAM, 6 GB VRAM   Tenancy: Supports up to 4 concurrent stream sessions       gen6n_small (NVIDIA, small) Supports applications with lightweight 3D scene complexity and low CPU usage. Powered by NVIDIA L4 Tensor Core GPUs.   Reference resolution: 1080p   Reference frame rate: 60 fps   Workload specifications: 1 vCPUs, 4 GB RAM, 2 GB VRAM   Tenancy: Supports up to 12 concurrent stream sessions       gen6n_medium_win2022 (NVIDIA, medium) Supports applications with low 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.   Reference resolution: 1080p   Reference frame rate: 60 fps   Workload specifications: 8 vCPUs, 32 GB RAM, 6 GB VRAM   Tenancy: Supports 1 concurrent stream session       gen6n_small_win2022 (NVIDIA, small) Supports applications with low 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.   Reference resolution: 1080p   Reference frame rate: 60 fps   Workload specifications: 2 vCPUs, 8 GB RAM, 3 GB VRAM   Tenancy: Supports 1 concurrent stream session       gen6e_pro_win2022 (NVIDIA, pro) Supports applications with extremely high 3D scene complexity which require maximum resources. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L40S Tensor Core GPUs.   Reference resolution: 1080p   Reference frame rate: 60 fps   Workload specifications: 16 vCPUs, 128 GB RAM, 48 GB VRAM   Tenancy: Supports 1 concurrent stream session       gen6e_pro (NVIDIA, pro) Supports applications with extremely high 3D scene complexity which require maximum resources. Powered by NVIDIA L40S Tensor Core GPUs.   Reference resolution: 1080p   Reference frame rate: 60 fps   Workload specifications: 16 vCPUs, 128 GB RAM, 48 GB VRAM   Tenancy: Supports 1 concurrent stream session       gen5n_win2022 (NVIDIA, ultra) Supports applications with extremely high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA A10G Tensor Core GPUs.   Reference resolution: 1080p   Reference frame rate: 60 fps   Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM   Tenancy: Supports 1 concurrent stream session       gen5n_high (NVIDIA, high) Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA A10G Tensor Core GPUs.   Reference resolution: 1080p   Reference frame rate: 60 fps   Workload specifications: 4 vCPUs, 16 GB RAM, 12 GB VRAM   Tenancy: Supports up to 2 concurrent stream sessions       gen5n_ultra (NVIDIA, ultra) Supports applications with extremely high 3D scene complexity. Powered by NVIDIA A10G Tensor Core GPUs.   Reference resolution: 1080p   Reference frame rate: 60 fps   Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM   Tenancy: Supports 1 concurrent stream session       gen4n_win2022 (NVIDIA, ultra) Supports applications with extremely high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA T4 Tensor Core GPUs.   Reference resolution: 1080p   Reference frame rate: 60 fps   Workload specifications: 8 vCPUs, 32 GB RAM, 16 GB VRAM   Tenancy: Supports 1 concurrent stream session       gen4n_high (NVIDIA, high) Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA T4 Tensor Core GPUs.   Reference resolution: 1080p   Reference frame rate: 60 fps   Workload specifications: 4 vCPUs, 16 GB RAM, 8 GB VRAM   Tenancy: Supports up to 2 concurrent stream sessions       gen4n_ultra (NVIDIA, ultra) Supports applications with high 3D scene complexity. Powered by NVIDIA T4 Tensor Core GPUs.   Reference resolution: 1080p   Reference frame rate: 60 fps   Workload specifications: 8 vCPUs, 32 GB RAM, 16 GB VRAM   Tenancy: Supports 1 concurrent stream session",
          args: {
            name: "string",
            suggestions: [
              "gen4n_high",
              "gen4n_ultra",
              "gen4n_win2022",
              "gen5n_high",
              "gen5n_ultra",
              "gen5n_win2022",
              "gen6n_small",
              "gen6n_medium",
              "gen6n_high",
              "gen6n_ultra",
              "gen6n_ultra_win2022",
              "gen6n_pro",
              "gen6n_pro_win2022",
              "gen6n_small_win2022",
              "gen6n_medium_win2022",
              "gen6e_pro",
              "gen6e_pro_win2022",
            ],
          },
        },
        {
          name: "--default-application-identifier",
          description:
            "The unique identifier of the Amazon GameLift Streams application that you want to set as the default application in a stream group. The application that you specify must be in READY status. The default application is pre-cached on always-on compute resources, reducing stream startup times. Other applications are automatically cached as needed. If you do not link an application when you create a stream group, you will need to link one later, before you can start streaming, using AssociateApplications. This value is an Amazon Resource Name (ARN) or ID that uniquely identifies the application resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6. Example ID: a-9ZY8X7Wv6",
          args: {
            name: "string",
          },
        },
        {
          name: "--location-configurations",
          description:
            "A set of one or more locations and the streaming capacity for each location",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "A list of labels to assign to the new stream group resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource management, access management and cost allocation. See  Tagging Amazon Web Services Resources in the Amazon Web Services General Reference. You can use TagResource to add tags, UntagResource to remove tags, and ListTagsForResource to view tags on existing resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier that represents a client request. The request is idempotent, which ensures that an API request completes only once. When users send a request, Amazon GameLift Streams automatically populates this field",
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
      name: "create-stream-session-admin-shell",
      description:
        "Creates an administrative terminal session with full access to the live runtime environment of the Amazon GameLift Streams stream session. Use the returned credentials (SessionId, StreamUrl and TokenValue) with the Amazon Web Services Systems Manager Session Manager plugin for the CLI to access the terminal session. The stream session must be in one of the following statuses: ACTIVE, CONNECTED, PENDING_CLIENT_RECONNECTION, or RECONNECTING. The StreamUrl is valid for 60 seconds. After it expires, call this operation again to get a new URL.  The returned credentials grant full access to the live runtime environment of the Amazon GameLift Streams stream session. The operator who connects to the terminal session has the same level of access that your Amazon GameLift Streams applications have, including potentially user input, screen images, and application data files. Grant permissions to call this operation only to trusted IAM identities that require live runtime environment access",
      options: [
        {
          name: "--identifier",
          description:
            "The stream group that runs this stream session. This value is an Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-session-identifier",
          description:
            "An Amazon Resource Name (ARN) or ID that uniquely identifies the stream session resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamsession/sg-1AB2C3De4/ABC123def4567. Example ID: ABC123def4567",
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
      name: "create-stream-session-connection",
      description:
        "Enables clients to reconnect to a stream session while preserving all session state and data in the disconnected session. This reconnection process can be initiated when a stream session is in either PENDING_CLIENT_RECONNECTION or ACTIVE status. The process works as follows:    Initial disconnect:   When a client disconnects or loses connection, the stream session transitions from CONNECTED to PENDING_CLIENT_RECONNECTION      Reconnection time window:   Clients have ConnectionTimeoutSeconds (defined in StartStreamSession) to reconnect before session termination   Your backend server must call CreateStreamSessionConnection to initiate reconnection   Session transitions to RECONNECTING status     Reconnection completion:   On successful CreateStreamSessionConnection, session status changes to ACTIVE    Provide the new connection information to the requesting client   Client must establish connection within ConnectionTimeoutSeconds    Session terminates automatically if client fails to connect in time     For more information about the stream session lifecycle, see Stream sessions in the Amazon GameLift Streams Developer Guide. To begin re-connecting to an existing stream session, specify the stream group ID and stream session ID that you want to reconnect to, and the signal request to use with the stream",
      options: [
        {
          name: "--client-token",
          description:
            "A unique identifier that represents a client request. The request is idempotent, which ensures that an API request completes only once. When users send a request, Amazon GameLift Streams automatically populates this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4.   The stream group that you want to run this stream session with. The stream group must be in ACTIVE status",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-session-identifier",
          description:
            "Amazon Resource Name (ARN) or ID that uniquely identifies the stream session resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamsession/sg-1AB2C3De4/ABC123def4567. Example ID: ABC123def4567.   The stream session must be in PENDING_CLIENT_RECONNECTION or ACTIVE status",
          args: {
            name: "string",
          },
        },
        {
          name: "--signal-request",
          description:
            "A WebRTC ICE offer string to use when initializing a WebRTC connection. The offer is a very long JSON string. Provide the string as a text value in quotes. The offer must be newly generated, not the same offer provided to StartStreamSession",
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
      name: "create-stream-url",
      description:
        "Creates a stream URL that grants temporary access to a stream session in a web browser without requiring an Amazon Web Services account or client integration. You can use the stream URL to start a stream session up to the number of times set by UsageLimit, until it expires after UrlExpiresAfterMinutes. Each successful use starts a new stream session. To make the request idempotent, provide a ClientToken",
      options: [
        {
          name: "--identifier",
          description:
            "An Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4.  The stream session runs in this stream group",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-identifier",
          description:
            "An Amazon Resource Name (ARN) or ID that uniquely identifies the application resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6. Example ID: a-9ZY8X7Wv6.  This application must be associated with the stream group",
          args: {
            name: "string",
          },
        },
        {
          name: "--protocol",
          description:
            "The data transport protocol for the stream session. Amazon GameLift Streams supports WebRTC",
          args: {
            name: "string",
            suggestions: ["WebRTC"],
          },
        },
        {
          name: "--url-expires-after-minutes",
          description:
            "The number of minutes after creation that the stream URL remains valid. After this period, the status of the stream URL changes to EXPIRED and it can no longer start stream sessions. The minimum is 1 minute. For the maximum, see Regions, quotas, and limitations in the Amazon GameLift Streams Developer Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--usage-limit",
          description:
            "The maximum number of times the stream URL can start a stream session. Each successful use reduces the remaining uses by one. The minimum is 1, and the default is 1. For the maximum, see Regions, quotas, and limitations in the Amazon GameLift Streams Developer Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--description",
          description: "A descriptive label for the stream URL",
          args: {
            name: "string",
          },
        },
        {
          name: "--locations",
          description:
            "A list of locations, in order of preference, where Amazon GameLift Streams can place the stream session. Specify each location by its Amazon Web Services Region code, for example us-east-1. For a complete list of locations that Amazon GameLift Streams supports, refer to Regions, quotas, and limitations in the Amazon GameLift Streams Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--session-length-seconds",
          description:
            "The maximum length of time, in seconds, that a stream session started from this stream URL can run. Valid values are 1-86400 seconds (1 second to 24 hours). The default is 43200 seconds (12 hours)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--additional-launch-args",
          description:
            "A list of CLI arguments that are sent to the streaming server when a stream session launches. You can use this to configure the application or stream session details. You can also provide custom arguments that Amazon GameLift Streams passes to your game client.  AdditionalEnvironmentVariables and AdditionalLaunchArgs have similar purposes. AdditionalEnvironmentVariables passes data using environment variables; while AdditionalLaunchArgs passes data using command-line arguments",
          args: {
            name: "list",
          },
        },
        {
          name: "--additional-environment-variables",
          description:
            "A set of options that you can use to control the stream session runtime environment, expressed as a set of key-value pairs. You can use this to configure the application or stream session details. You can also provide custom environment variables that Amazon GameLift Streams passes to your game client.  If you want to debug your application with environment variables, we recommend that you do so in a local environment outside of Amazon GameLift Streams. For more information, refer to the Compatibility Guidance in the troubleshooting section of the Developer Guide.   AdditionalEnvironmentVariables and AdditionalLaunchArgs have similar purposes. AdditionalEnvironmentVariables passes data using environment variables; while AdditionalLaunchArgs passes data using command-line arguments",
          args: {
            name: "map",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that Amazon GameLift Streams assumes during stream sessions started from this stream URL. For more information, see Provide AWS credentials to your streaming application in the Amazon GameLift Streams Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-configuration",
          description:
            "The display settings, such as resolution, for stream sessions started from this stream URL",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure this request is idempotent. If you retry a request with the same ClientToken, Amazon GameLift Streams returns the original response without performing the operation again",
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
      name: "delete-application",
      description:
        "Permanently deletes an Amazon GameLift Streams application resource. This also deletes the application content files stored with Amazon GameLift Streams. However, this does not delete the original files that you uploaded to your Amazon S3 bucket; you can delete these any time after Amazon GameLift Streams creates an application, which is the only time Amazon GameLift Streams accesses your Amazon S3 bucket.  You can only delete an application that meets the following conditions:    The application is in READY or ERROR status. You cannot delete an application that's in PROCESSING or INITIALIZED status.   The application is not the default application of any stream groups. You must first delete the stream group by using DeleteStreamGroup.   The application is not linked to any stream groups. You must first unlink the stream group by using DisassociateApplications.    An application is not streaming in any ongoing stream session. You must wait until the client ends the stream session or call TerminateStreamSession to end the stream.    If any active stream groups exist for this application, this request returns a ValidationException",
      options: [
        {
          name: "--identifier",
          description:
            "An Amazon Resource Name (ARN) or ID that uniquely identifies the application resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6. Example ID: a-9ZY8X7Wv6",
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
      name: "delete-stream-group",
      description:
        "Permanently deletes all compute resources and information related to a stream group. To delete a stream group, specify the unique stream group identifier. During the deletion process, the stream group's status is DELETING. This operation stops streams in progress and prevents new streams from starting. As a best practice, before deleting the stream group, call ListStreamSessions to check for streams in progress and take action to stop them. When you delete a stream group, any application associations referring to that stream group are automatically removed",
      options: [
        {
          name: "--identifier",
          description:
            "An Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4",
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
      name: "disassociate-applications",
      description:
        "When you disassociate, or unlink, an application from a stream group, you can no longer stream this application by using that stream group's allocated compute resources. Any streams in process will continue until they terminate, which helps avoid interrupting an end-user's stream. Amazon GameLift Streams will not initiate new streams in the stream group using the disassociated application. The disassociate action does not affect the stream capacity of a stream group. To disassociate an application, the stream group must be in ACTIVE status.   If you disassociate the default application, Amazon GameLift Streams will automatically choose a new default application from the remaining associated applications. To change which application is the default application, call UpdateStreamGroup and specify a new DefaultApplicationIdentifier",
      options: [
        {
          name: "--identifier",
          description:
            "A stream group to disassociate these applications from. This value is an Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-identifiers",
          description:
            "A set of applications that you want to disassociate from the stream group. This value is a set of either Amazon Resource Names (ARN) or IDs that uniquely identify application resources. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6. Example ID: a-9ZY8X7Wv6",
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
      name: "export-stream-session-files",
      description:
        "Export the files that your application modifies or generates in a stream session, which can help you debug or verify your application. When your application runs, it generates output files such as logs, diagnostic information, crash dumps, save files, user data, screenshots, and so on. The files can be defined by the engine or frameworks that your application uses, or information that you've programmed your application to output.   You can only call this action on a stream session that is in progress, specifically in one of the following statuses ACTIVE, CONNECTED, PENDING_CLIENT_RECONNECTION, and RECONNECTING. You must provide an Amazon Simple Storage Service (Amazon S3) bucket to store the files in. When the session ends, Amazon GameLift Streams produces a compressed folder that contains all of the files and directories that were modified or created by the application during the stream session. AWS uses your security credentials to authenticate and authorize access to your Amazon S3 bucket.  Amazon GameLift Streams collects the following generated and modified files. Find them in the corresponding folders in the .zip archive.    application/: The folder where your application or game is stored.       profile/: The user profile folder.    temp/: The system temp folder.    To verify the status of the exported files, use GetStreamSession.  To delete the files, delete the object in the S3 bucket",
      options: [
        {
          name: "--identifier",
          description:
            "An Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-session-identifier",
          description:
            "An Amazon Resource Name (ARN) or ID that uniquely identifies the stream session resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamsession/sg-1AB2C3De4/ABC123def4567. Example ID: ABC123def4567",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-uri",
          description:
            "The S3 bucket URI where Amazon GameLift Streams uploads the set of compressed exported files for this stream session. Amazon GameLift Streams generates a ZIP file name based on the stream session metadata. Alternatively, you can provide a custom file name with a .zip file extension.  Example 1: If you provide an S3 URI called s3://amzn-s3-demo-destination-bucket/MyGame_Session1.zip, then Amazon GameLift Streams will save the files at that location.   Example 2: If you provide an S3 URI called s3://amzn-s3-demo-destination-bucket/MyGameSessions_ExportedFiles/, then Amazon GameLift Streams will save the files at s3://amzn-s3-demo-destination-bucket/MyGameSessions_ExportedFiles/YYYYMMDD-HHMMSS-appId-sg-Id-sessionId.zip or another similar name",
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
      name: "get-application",
      description:
        "Retrieves properties for an Amazon GameLift Streams application resource. Specify the ID of the application that you want to retrieve. If the operation is successful, it returns properties for the requested application",
      options: [
        {
          name: "--identifier",
          description:
            "An Amazon Resource Name (ARN) or ID that uniquely identifies the application resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6. Example ID: a-9ZY8X7Wv6",
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
      name: "get-stream-group",
      description:
        "Retrieves properties for a Amazon GameLift Streams stream group resource. Specify the ID of the stream group that you want to retrieve. If the operation is successful, it returns properties for the requested stream group",
      options: [
        {
          name: "--identifier",
          description:
            "An Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4",
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
      name: "get-stream-session",
      description:
        "Retrieves properties for a Amazon GameLift Streams stream session resource. Specify the Amazon Resource Name (ARN) of the stream session that you want to retrieve and its stream group ARN. If the operation is successful, it returns properties for the requested resource",
      options: [
        {
          name: "--identifier",
          description:
            "The stream group that runs this stream session. This value is an Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-session-identifier",
          description:
            "An Amazon Resource Name (ARN) or ID that uniquely identifies the stream session resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamsession/sg-1AB2C3De4/ABC123def4567. Example ID: ABC123def4567",
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
      name: "get-stream-url",
      description:
        "Retrieves properties for a stream URL, including its current status, usage, and the stream sessions started through it. If you delete the stream group or application that backs the stream URL, this operation updates the status of the stream URL to REVOKED",
      options: [
        {
          name: "--identifier",
          description:
            "An Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4.  This is the stream group that owns the stream URL",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-url-identifier",
          description:
            "The unique identifier of the stream URL. Specify a stream URL ID or Amazon Resource Name (ARN). Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamurl/sg-1AB2C3De4/su-1AB2C3De4. Example ID: su-1AB2C3De4",
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
      name: "list-application-shader-caches",
      description:
        "Lists the shader caches associated with an Amazon GameLift Streams application. Each shader cache entry includes its status, associated stream groups, and size in bytes. Returns shader caches associated with the specified Amazon GameLift Streams application in all statuses",
      options: [
        {
          name: "--identifier",
          description:
            "An Amazon Resource Name (ARN) or ID that uniquely identifies the application resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6. Example ID: a-9ZY8X7Wv6",
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
      name: "list-applications",
      description:
        "Retrieves a list of all Amazon GameLift Streams applications that are associated with the Amazon Web Services account in use. This operation returns applications in all statuses, in no particular order. You can paginate the results as needed",
      options: [
        {
          name: "--next-token",
          description:
            "The token that marks the start of the next set of results. Use this token when you retrieve results as sequential pages. To get the first page of results, omit a token value. To get the remaining pages, provide the token returned with the previous result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of results to return. Use this parameter with NextToken to return results in sequential pages. Default value is 25",
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
      name: "list-stream-groups",
      description:
        "Retrieves a list of all Amazon GameLift Streams stream groups that are associated with the Amazon Web Services account in use. This operation returns stream groups in all statuses, in no particular order. You can paginate the results as needed",
      options: [
        {
          name: "--next-token",
          description:
            "A token that marks the start of the next set of results. Use this token when you retrieve results as sequential pages. To get the first page of results, omit a token value. To get the remaining pages, provide the token returned with the previous result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of results to return. Use this parameter with NextToken to return results in sequential pages. Default value is 25",
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
      name: "list-stream-sessions",
      description:
        "Retrieves a list of Amazon GameLift Streams stream sessions that a stream group is hosting. To retrieve stream sessions, specify the stream group, and optionally filter by stream session status. You can paginate the results as needed. This operation returns the requested stream sessions in no particular order",
      options: [
        {
          name: "--status",
          description:
            "Filter by the stream session status. You can specify one status in each request to retrieve only sessions that are currently in that status",
          args: {
            name: "string",
            suggestions: [
              "ACTIVATING",
              "ACTIVE",
              "CONNECTED",
              "PENDING_CLIENT_RECONNECTION",
              "RECONNECTING",
              "TERMINATING",
              "TERMINATED",
              "ERROR",
            ],
          },
        },
        {
          name: "--export-files-status",
          description:
            "Filter by the exported files status. You can specify one status in each request to retrieve only sessions that currently have that exported files status.  Exported files can be in one of the following states:     SUCCEEDED: The exported files are successfully stored in an S3 bucket.    FAILED: The session ended but Amazon GameLift Streams couldn't collect and upload the files to S3.    PENDING: Either the stream session is still in progress, or uploading the exported files to the S3 bucket is in progress",
          args: {
            name: "string",
            suggestions: ["SUCCEEDED", "FAILED", "PENDING"],
          },
        },
        {
          name: "--next-token",
          description:
            "The token that marks the start of the next set of results. Use this token when you retrieve results as sequential pages. To get the first page of results, omit a token value. To get the remaining pages, provide the token returned with the previous result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of results to return. Use this parameter with NextToken to return results in sequential pages. Default value is 25",
          args: {
            name: "integer",
          },
        },
        {
          name: "--identifier",
          description:
            "The unique identifier of a Amazon GameLift Streams stream group to retrieve the stream session for. You can use either the stream group ID or the Amazon Resource Name (ARN)",
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
      name: "list-stream-sessions-by-account",
      description:
        "Retrieves a list of Amazon GameLift Streams stream sessions that this user account has access to. In the returned list of stream sessions, the ExportFilesMetadata property only shows the Status value. To get the OutpurUri and StatusReason values, use GetStreamSession. We don't recommend using this operation to regularly check stream session statuses because it's costly. Instead, to check status updates for a specific stream session, use GetStreamSession",
      options: [
        {
          name: "--status",
          description:
            "Filter by the stream session status. You can specify one status in each request to retrieve only sessions that are currently in that status",
          args: {
            name: "string",
            suggestions: [
              "ACTIVATING",
              "ACTIVE",
              "CONNECTED",
              "PENDING_CLIENT_RECONNECTION",
              "RECONNECTING",
              "TERMINATING",
              "TERMINATED",
              "ERROR",
            ],
          },
        },
        {
          name: "--export-files-status",
          description:
            "Filter by the exported files status. You can specify one status in each request to retrieve only sessions that currently have that exported files status",
          args: {
            name: "string",
            suggestions: ["SUCCEEDED", "FAILED", "PENDING"],
          },
        },
        {
          name: "--next-token",
          description:
            "The token that marks the start of the next set of results. Use this token when you retrieve results as sequential pages. To get the first page of results, omit a token value. To get the remaining pages, provide the token returned with the previous result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of results to return. Use this parameter with NextToken to return results in sequential pages. Default value is 25",
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
      name: "list-stream-urls",
      description:
        "Retrieves a list of the stream URLs in the current Amazon Web Services Region for your Amazon Web Services account. You can filter the results by status or by stream group. Use the pagination parameters to retrieve results as a set of sequential pages. If you delete the stream group or application that backs a stream URL, this operation updates that stream URL's status to REVOKED",
      options: [
        {
          name: "--status",
          description:
            "Filters the list to stream URLs with the specified status.    ACTIVE: The stream URL is valid and can start stream sessions.    EXPIRED: The stream URL has passed its expiration time and can no longer start stream sessions.    REVOKED: The stream URL was revoked and can no longer start stream sessions.    LIMIT_REACHED: The stream URL has been used the maximum number of times and can no longer start stream sessions",
          args: {
            name: "string",
            suggestions: ["ACTIVE", "EXPIRED", "REVOKED", "LIMIT_REACHED"],
          },
        },
        {
          name: "--stream-group-identifier",
          description:
            "Filters the list to stream URLs that belong to the specified stream group. This value is an Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token that marks the start of the next set of results. Use this token when you retrieve results as sequential pages. To get the first page of results, omit a token value. To get the remaining pages, provide the token returned with the previous result set",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. Valid values are 1-100. The default is 25",
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
        "Retrieves all tags assigned to a Amazon GameLift Streams resource. To list tags for a resource, specify the ARN value for the resource.  Learn more   Tagging Amazon Web Services Resources in the Amazon Web Services General Reference    Amazon Web Services Tagging Strategies",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that you want to retrieve tags for. To get an Amazon GameLift Streams resource ARN, call a List or Get operation for the resource",
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
      name: "remove-stream-group-locations",
      description:
        "Removes a set of remote locations from this stream group. To remove a location, the stream group must be in ACTIVE status. When you remove a location, Amazon GameLift Streams releases allocated compute resources in that location. Stream sessions can no longer start from removed locations in a stream group. Amazon GameLift Streams also deletes the content files of all associated applications that were in Amazon GameLift Streams's internal Amazon S3 bucket at this location.   You cannot remove the Amazon Web Services Region location where you initially created this stream group, known as the primary location. However, you can set the stream capacity to zero to avoid incurring costs for allocated compute resources in that location",
      options: [
        {
          name: "--identifier",
          description:
            "A stream group to remove the specified locations from.   This value is an Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4",
          args: {
            name: "string",
          },
        },
        {
          name: "--locations",
          description:
            "A set of locations to remove this stream group. For example, us-east-1.  For a complete list of locations that Amazon GameLift Streams supports, refer to Regions, quotas, and limitations in the Amazon GameLift Streams Developer Guide",
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
      name: "revoke-stream-url",
      description:
        "Revokes a stream URL so that it can no longer start new stream sessions. By default, stream sessions that are already running continue until they end on their own. To also end running sessions, set RevocationMode to REVOKE_AND_TERMINATE_SESSIONS. Revoking a stream URL is permanent. The status of the stream URL changes to REVOKED",
      options: [
        {
          name: "--identifier",
          description:
            "An Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4.  This is the stream group that owns the stream URL",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-url-identifier",
          description:
            "The unique identifier of the stream URL to revoke. Specify a stream URL ID or Amazon Resource Name (ARN). Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamurl/sg-1AB2C3De4/su-1AB2C3De4. Example ID: su-1AB2C3De4",
          args: {
            name: "string",
          },
        },
        {
          name: "--revocation-mode",
          description:
            "Controls what happens to running stream sessions when you revoke the stream URL. If you do not specify a value, the default is REVOKE_URL. Possible values include the following:    REVOKE_URL: Stops the stream URL from starting new stream sessions. Running sessions continue until they end.    REVOKE_AND_TERMINATE_SESSIONS: Stops new stream sessions and ends any running stream sessions",
          args: {
            name: "string",
            suggestions: ["REVOKE_URL", "REVOKE_AND_TERMINATE_SESSIONS"],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "start-stream-session",
      description:
        "This action initiates a new stream session and outputs connection information that clients can use to access the stream. A stream session refers to an instance of a stream that Amazon GameLift Streams transmits from the server to the end-user. A stream session runs on a compute resource that a stream group has allocated. The start stream session process works as follows:    Prerequisites:   You must have a stream group in ACTIVE status   You must have idle or on-demand capacity in a stream group in the location you want to stream from   You must have at least one application associated to the stream group (use AssociateApplications if needed)     Start stream request:   Your backend server calls StartStreamSession to initiate connection   Amazon GameLift Streams creates the stream session resource, assigns an Amazon Resource Name (ARN) value, and begins searching for available stream capacity to run the stream   Session transitions to ACTIVATING status     Placement completion:   If Amazon GameLift Streams is successful in finding capacity for the stream, the stream session status changes to ACTIVE status and StartStreamSession returns stream connection information   If Amazon GameLift Streams was not successful in finding capacity within the placement timeout period (defined according to the capacity type and platform type), the stream session status changes to ERROR status and StartStreamSession returns a StatusReason of placementTimeout      Connection completion:   Provide the new connection information to the requesting client   Client must establish connection within ConnectionTimeoutSeconds (specified in StartStreamSession parameters)   Session terminates automatically if client fails to connect in time     For more information about the stream session lifecycle, see Stream sessions in the Amazon GameLift Streams Developer Guide. Timeouts to be aware of that affect a stream session:    Placement timeout: The amount of time that Amazon GameLift Streams has to find capacity for a stream request. Placement timeout varies based on the capacity type used to fulfill your stream request:    Always-on capacity: 75 seconds    On-demand capacity:   Linux/Proton runtimes: 90 seconds   Windows runtime: 10 minutes        Connection timeout: The amount of time that Amazon GameLift Streams waits for a client to connect to a stream session in ACTIVE status, or reconnect to a stream session in PENDING_CLIENT_RECONNECTION status, the latter of which occurs when a client disconnects or loses connection from a stream session. If no client connects before the timeout, Amazon GameLift Streams terminates the stream session. This value is specified by ConnectionTimeoutSeconds in the StartStreamSession parameters.    Maximum session length: A stream session will be terminated after this amount of time has elapsed since it started, regardless of any existing client connections. This value is specified by SessionLengthSeconds in the StartStreamSession parameters.   To start a new stream session, specify a stream group ID and application ID, along with the transport protocol and signal request to use with the stream session. For stream groups that have multiple locations, provide a set of locations ordered by priority using a Locations parameter. Amazon GameLift Streams will start a single stream session in the next available location. An application must be finished replicating to a remote location before the remote location can host a stream. To reconnect to a stream session after a client disconnects or loses connection, use CreateStreamSessionConnection",
      options: [
        {
          name: "--client-token",
          description:
            "A unique identifier that represents a client request. The request is idempotent, which ensures that an API request completes only once. When users send a request, Amazon GameLift Streams automatically populates this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A human-readable label for the stream session. You can update this value later",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The stream group to run this stream session with. This value is an Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4",
          args: {
            name: "string",
          },
        },
        {
          name: "--protocol",
          description:
            "The data transport protocol to use for the stream session",
          args: {
            name: "string",
            suggestions: ["WebRTC"],
          },
        },
        {
          name: "--signal-request",
          description:
            'A WebRTC ICE offer string to use when initializing a WebRTC connection. Typically, the offer is a very long JSON string. Provide the string as a text value in quotes. Amazon GameLift Streams also supports setting the field to "NO_CLIENT_CONNECTION". This will create a session without needing any browser request or Web SDK integration. The session starts up as usual and waits for a reconnection from a browser, which is accomplished using CreateStreamSessionConnection',
          args: {
            name: "string",
          },
        },
        {
          name: "--application-identifier",
          description:
            "An Amazon Resource Name (ARN) or ID that uniquely identifies the application resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6. Example ID: a-9ZY8X7Wv6",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "An opaque, unique identifier for an end-user, defined by the developer",
          args: {
            name: "string",
          },
        },
        {
          name: "--locations",
          description:
            "A list of locations, in order of priority, where you want Amazon GameLift Streams to start a stream from. For example, us-east-1. Amazon GameLift Streams selects the location with the next available capacity to start a single stream session in. If this value is empty, Amazon GameLift Streams attempts to start a stream session in the primary location.   For a complete list of locations that Amazon GameLift Streams supports, refer to Regions, quotas, and limitations in the Amazon GameLift Streams Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--connection-timeout-seconds",
          description:
            "Length of time (in seconds) that Amazon GameLift Streams should wait for a client to connect or reconnect to the stream session. Applies to both connection and reconnection scenarios. This time span starts when the stream session reaches ACTIVE state. If no client connects before the timeout, Amazon GameLift Streams terminates the stream session. Default value is 120",
          args: {
            name: "integer",
          },
        },
        {
          name: "--session-length-seconds",
          description:
            "The maximum duration of a session. Amazon GameLift Streams will automatically terminate a session after this amount of time has elapsed, regardless of any existing client connections. Default value is 43200 (12 hours)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--additional-launch-args",
          description:
            "A list of CLI arguments that are sent to the streaming server when a stream session launches. You can use this to configure the application or stream session details. You can also provide custom arguments that Amazon GameLift Streams passes to your game client.  AdditionalEnvironmentVariables and AdditionalLaunchArgs have similar purposes. AdditionalEnvironmentVariables passes data using environment variables; while AdditionalLaunchArgs passes data using command-line arguments",
          args: {
            name: "list",
          },
        },
        {
          name: "--additional-environment-variables",
          description:
            "A set of options that you can use to control the stream session runtime environment, expressed as a set of key-value pairs. You can use this to configure the application or stream session details. You can also provide custom environment variables that Amazon GameLift Streams passes to your game client.  If you want to debug your application with environment variables, we recommend that you do so in a local environment outside of Amazon GameLift Streams. For more information, refer to the Compatibility Guidance in the troubleshooting section of the Developer Guide.   AdditionalEnvironmentVariables and AdditionalLaunchArgs have similar purposes. AdditionalEnvironmentVariables passes data using environment variables; while AdditionalLaunchArgs passes data using command-line arguments",
          args: {
            name: "map",
          },
        },
        {
          name: "--performance-stats-configuration",
          description:
            "Configuration settings for sharing the stream session's performance stats with the client",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of an AWS Identity and Access Management (IAM) role that Amazon GameLift Streams assumes on your behalf during the stream session. The role grants Amazon GameLift Streams permission to obtain temporary credentials for your application. The role's trust policy must allow the gameliftstreams.amazonaws.com service principal to assume it. The role name must start with GameLiftStreams-",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-configuration",
          description:
            "The configuration for the stream session's virtual monitor, including the resolution settings. If not specified, Amazon GameLift Streams uses the default resolution of 1920 × 1080",
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
        "Assigns one or more tags to a Amazon GameLift Streams resource. Use tags to organize Amazon Web Services resources for a range of purposes. You can assign tags to the following Amazon GameLift Streams resource types:   Application   StreamGroup    Learn more   Tagging Amazon Web Services Resources in the Amazon Web Services General Reference    Amazon Web Services Tagging Strategies",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon GameLift Streams resource that you want to apply tags to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags, in the form of key-value pairs, to assign to the specified Amazon GameLift Streams resource",
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
      name: "terminate-stream-session",
      description:
        "Permanently terminates an active stream session. When called, the stream session status changes to TERMINATING. You can terminate a stream session in any status except ACTIVATING. If the stream session is in ACTIVATING status, an exception is thrown",
      options: [
        {
          name: "--identifier",
          description:
            "Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4.  The stream group that runs this stream session",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-session-identifier",
          description:
            "Amazon Resource Name (ARN) or ID that uniquely identifies the stream session resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamsession/sg-1AB2C3De4/ABC123def4567. Example ID: ABC123def4567",
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
      name: "untag-resource",
      description:
        "Removes one or more tags from a Amazon GameLift Streams resource. To remove tags, specify the Amazon GameLift Streams resource and a list of one or more tags to remove",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon GameLift Streams resource that you want to remove tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of tag keys to remove from the specified Amazon GameLift Streams resource",
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
      name: "update-application",
      description:
        "Updates the mutable configuration settings for a Amazon GameLift Streams application resource. You can change the Description, ApplicationLogOutputUri, and ApplicationLogPaths.  To update application settings, specify the application ID and provide the new values. If the operation is successful, it returns the complete updated set of settings for the application",
      options: [
        {
          name: "--identifier",
          description:
            "An Amazon Resource Name (ARN) or ID that uniquely identifies the application resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6. Example ID: a-9ZY8X7Wv6",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A human-readable label for the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-log-paths",
          description:
            "Locations of log files that your content generates during a stream session. Enter path values that are relative to the ApplicationSourceUri location, or relative to the user's home directory when using a supported path variable. You can specify up to 10 log paths. Each individual log file cannot exceed 50 MB in size. Each path can be a directory or an exact file path. When you specify a directory, Amazon GameLift Streams collects only files with the following extensions: .txt, .log, and .utrace. To collect files with other extensions, specify the exact file path. The copy operation is not performed recursively in subfolders. The following path variables are recognized when they appear as the first component of a path: %USERPROFILE% (Windows and Proton), $HOME or ~ (Linux). Use a path variable when your application writes logs outside of the application directory. Amazon GameLift Streams uploads designated log files to the Amazon S3 bucket that you specify in ApplicationLogOutputUri at the end of a stream session. To retrieve stored log files, call GetStreamSession and get the LogFileLocationUri",
          args: {
            name: "list",
          },
        },
        {
          name: "--application-log-output-uri",
          description:
            "An Amazon S3 URI to a bucket where you would like Amazon GameLift Streams to save application logs. Required if you specify one or more ApplicationLogPaths.  The log bucket must have permissions that give Amazon GameLift Streams access to write the log files. For more information, see Application log bucket permission policy in the Amazon GameLift Streams Developer Guide",
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
      name: "update-stream-group",
      description:
        "Updates the configuration settings for an Amazon GameLift Streams stream group resource. To update a stream group, it must be in ACTIVE status. You can change the description, the set of locations, and the requested capacity of a stream group per location. If you want to change the stream class, create a new stream group.   Stream capacity represents the number of concurrent streams that can be active at a time. You set stream capacity per location, per stream group. The following capacity settings are available:     Always-on capacity: This setting, if non-zero, indicates minimum streaming capacity which is allocated to you and is never released back to the service. You pay for this base level of capacity at all times, whether used or idle.     Maximum capacity: This indicates the maximum capacity that the service can allocate for you. Newly created streams may take a few minutes to start. Capacity is released back to the service when idle. You pay for capacity that is allocated to you until it is released.     Target-idle capacity: This indicates idle capacity which the service pre-allocates and holds for you in anticipation of future activity. This helps to insulate your users from capacity-allocation delays. You pay for capacity which is held in this intentional idle state.    Values for capacity must be whole number multiples of the tenancy value of the stream group's stream class. To update a stream group, specify the stream group's Amazon Resource Name (ARN) and provide the new values. If the request is successful, Amazon GameLift Streams returns the complete updated metadata for the stream group. Expired stream groups cannot be updated",
      options: [
        {
          name: "--identifier",
          description:
            "An Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4",
          args: {
            name: "string",
          },
        },
        {
          name: "--location-configurations",
          description:
            "A set of one or more locations and the streaming capacity for each location",
          args: {
            name: "list",
          },
        },
        {
          name: "--description",
          description: "A descriptive label for the stream group",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-application-identifier",
          description:
            "The unique identifier of the Amazon GameLift Streams application that you want to set as the default application in a stream group. The application that you specify must be in READY status. The default application is pre-cached on always-on compute resources, reducing stream startup times. Other applications are automatically cached as needed. Note that this parameter only sets the default application in a stream group. To associate a new application to an existing stream group, you must use AssociateApplications. When you switch default applications in a stream group, it can take up to a few hours for the new default application to be pre-cached. This value is an Amazon Resource Name (ARN) or ID that uniquely identifies the application resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6. Example ID: a-9ZY8X7Wv6",
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
          name: "application-deleted",
          description:
            "Waits until an application is deleted It will poll every 2 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--identifier",
              description:
                "An Amazon Resource Name (ARN) or ID that uniquely identifies the application resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6. Example ID: a-9ZY8X7Wv6",
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
          name: "application-ready",
          description:
            "Waits until an application is ready It will poll every 2 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--identifier",
              description:
                "An Amazon Resource Name (ARN) or ID that uniquely identifies the application resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6. Example ID: a-9ZY8X7Wv6",
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
          name: "stream-group-active",
          description:
            "Waits until a stream group is active It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 120 failed checks",
          options: [
            {
              name: "--identifier",
              description:
                "An Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4",
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
          name: "stream-group-deleted",
          description:
            "Waits until a stream group is deleted It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--identifier",
              description:
                "An Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4",
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
          name: "stream-session-active",
          description:
            "Waits until a stream session is active It will poll every 2 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--identifier",
              description:
                "The stream group that runs this stream session. This value is an Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4",
              args: {
                name: "string",
              },
            },
            {
              name: "--stream-session-identifier",
              description:
                "An Amazon Resource Name (ARN) or ID that uniquely identifies the stream session resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamsession/sg-1AB2C3De4/ABC123def4567. Example ID: ABC123def4567",
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
