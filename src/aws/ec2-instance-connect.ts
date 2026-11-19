const completionSpec: Fig.Spec = {
  name: "ec2-instance-connect",
  description:
    "This is the  Amazon EC2 Instance Connect API Reference. It provides descriptions, syntax, and usage examples for each of the actions for Amazon EC2 Instance Connect. Amazon EC2 Instance Connect enables system administrators to publish one-time use SSH public keys to EC2, providing users a simple and secure way to connect to their instances. To view the Amazon EC2 Instance Connect content in the  Amazon EC2 User Guide, see Connect to your Linux instance using EC2 Instance Connect. For Amazon EC2 APIs, see the Amazon EC2 API Reference",
  subcommands: [
    {
      name: "send-ssh-public-key",
      description:
        "Pushes an SSH public key to the specified EC2 instance for use by the specified user. The key remains for 60 seconds. For more information, see Connect to your Linux instance using EC2 Instance Connect in the Amazon EC2 User Guide",
      options: [
        {
          name: "--instance-id",
          description: "The ID of the EC2 instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-os-user",
          description:
            "The OS user on the EC2 instance for whom the key can be used to authenticate",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssh-public-key",
          description:
            "The public key material. To use the public key, you must have the matching private key",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone",
          description:
            "The Availability Zone in which the EC2 instance was launched",
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
      name: "send-serial-console-ssh-public-key",
      description:
        "Pushes an SSH public key to the specified EC2 instance. The key remains for 60 seconds, which gives you 60 seconds to establish a serial console connection to the instance using SSH. For more information, see EC2 Serial Console in the Amazon EC2 User Guide",
      options: [
        {
          name: "--instance-id",
          description: "The ID of the EC2 instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--serial-port",
          description:
            "The serial port of the EC2 instance. Currently only port 0 is supported. Default: 0",
          args: {
            name: "integer",
          },
        },
        {
          name: "--ssh-public-key",
          description:
            "The public key material. To use the public key, you must have the matching private key. For information about the supported key formats and lengths, see Requirements for key pairs in the Amazon EC2 User Guide",
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
      name: "open-tunnel",
      description:
        "Opens a websocket tunnel to the specified EC2 Instance or IP address",
      options: [
        {
          name: "--instance-id",
          description:
            "Specify the id of the EC2 instance that a tunnel should be opened for",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-connect-endpoint-id",
          description:
            "Specify the EC2 Instance Connect Endpoint Id that should be used to open the tunnel",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-connect-endpoint-dns-name",
          description:
            "Specify the EC2 Instance Connect Endpoint DNS Name that should be used to open the tunnel. If this is specified, you must specify instance-connect-endpoint-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--private-ip-address",
          description:
            "Specify the private IPv4 (or IPv6) address to open a tunnel for. If this is specified, you must specify instance-connect-endpoint-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--remote-port",
          description:
            "Specify the remote port to connect to on the instance. This defaults to port 22",
          args: {
            name: "integer",
          },
        },
        {
          name: "--local-port",
          description:
            "Specify the local port to listen on. Each new connection will have a separate websocket tunnel read and write to it",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-tunnel-duration",
          description:
            "Specify the maximum time, in seconds, to keep a websocket tunnel alive for. This defaults to 3600 seconds",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-websocket-connections",
          description:
            "Specify the maximum amount of websocket connections allowed when local-port is specified. This value defaults to 10",
          args: {
            name: "integer",
          },
        },
      ],
    },
    {
      name: "ssh",
      description: "Connect to your EC2 instance using your OpenSSH client",
      options: [
        {
          name: "--instance-id",
          description: "Specify the ID of the EC2 instance to connect to",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-ip",
          description: "Specify the IP address of the instance to connect to",
          args: {
            name: "string",
          },
        },
        {
          name: "--private-key-file",
          description: "Specify the path to the private key file for login",
          args: {
            name: "string",
            template: "filepaths",
          },
        },
        {
          name: "--os-user",
          description: "Specify the OS SSH user. (Default: ec2-user)",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssh-port",
          description: "Specify the SSH port. (Default: 22)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--local-forwarding",
          description:
            "Specify the local forwarding specification as defined by your OpenSSH client. (Example: 3336:remote.host:3306)",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-type",
          description:
            "Specify how to SSH into the instance. (Default: auto)direct: SSH directly to the instance. The CLI tries to connect using the IP addresses in the following order: Public IPv4IPv6Private IPv4eice: SSH using EC2 Instance Connect Endpoint. The CLI tries to connect using the private IPv4 address, falling back to IPv6 if the instance has no private IPv4.auto: The CLI automatically determines the connection type (direct or eice) to use based on the instance info. Currently the CLI tries to connect using the IP addresses in the following order and with the corresponding connection type:Public IPv4: directPrivate IPv4: eiceIPv6: directIn the future, we might change the behavior of the auto connection type. To ensure that your desired connection type is used, we recommend that you explicitly set the --connection-type to either direct or eice",
          args: {
            name: "string",
            suggestions: ["auto", "direct", "eice"],
          },
        },
        {
          name: "--eice-options",
          description:
            "Specify the options for your EC2 Instance Connect Endpoint",
          args: {
            name: "structure",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
