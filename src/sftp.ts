// OpenSSH sftp v10.6p2 (openssh-portable tag V_10_6_P2, 2026-11-19). Source:
// sftp.1 and the sftp.c getopt string on master, cross-checked with the
// installed 10.3p1 `sftp -h` and man page (same flags)
import { knownHosts, configHosts } from "./ssh";

const completionSpec: Fig.Spec = {
  name: "sftp",
  description: "OpenSSH secure file transfer",
  args: [
    {
      name: "destination",
      description: "[user@]host[:path] or sftp://[user@]host[:port][/path]",
      generators: [knownHosts, configHosts, { template: "history" }],
    },
    {
      name: "local_path",
      description: "Local file or directory to download to",
      isOptional: true,
      template: ["filepaths", "folders"],
    },
  ],
  options: [
    {
      name: "-h",
      description: "Show usage",
    },
    {
      name: "-4",
      description: "Forces sftp to use IPv4 addresses only",
    },
    {
      name: "-6",
      description: "Forces sftp to use IPv6 addresses only",
    },
    {
      name: "-A",
      description:
        "Allows forwarding of ssh-agent(1) to the remote system. The default is not to forward an authentication agent",
    },
    {
      name: "-a",
      description: `Attempt to continue interrupted transfers rather than overwriting
existing partial or complete copies of files.  If the partial
contents differ from those being transferred, then the resultant
file is likely to be corrupt`,
    },
    {
      name: "-B",
      description: `Specify the size of the buffer that sftp uses when transferring
files.  Larger buffers require fewer round trips at the cost of
higher memory consumption.  The default is 32768 bytes`,
      args: {
        name: "buffer_size",
        description: "The buffer size",
        suggestions: ["32768"],
        default: "32768",
      },
    },
    {
      name: "-b",
      description: `Batch mode reads a series of commands from an input batchfile
instead of stdin ('-' for stdin).  Since it lacks user interaction it
should be used in conjunction with non-interactive authentication to
obviate the need to enter a password at connection time (see sshd(8)
and ssh-keygen(1) for details)`,
      args: {
        name: "batchfile",
        description: "The batch file",
        template: "filepaths",
        suggestions: ["-"],
      },
    },
    {
      name: "-C",
      description: "Enables compression (via ssh's -C flag)",
    },
    {
      name: "-c",
      description:
        "Selects the cipher to use for encrypting the data transfers. This option is directly passed to ssh(1)",
      args: {
        name: "cipher",
        description: "The selected cipher specification",
      },
    },
    {
      name: "-D",
      description: `Connect directly to a local sftp server (rather than via ssh(1)).
A command and arguments may be specified, for example
"/path/sftp-server -el debug3".  This option may be useful in
debugging the client and server`,
      args: {
        name: "sftp_server_command",
        description: "Path to the SFTP server, optionally with arguments",
        template: "filepaths",
      },
    },
    {
      name: "-F",
      description:
        "Specifies an alternative per-user configuration file for ssh(1). This option is directly passed to ssh(1)",
      args: {
        name: "ssh_config",
        description: "The selected ssh config",
        template: "filepaths",
      },
    },
    {
      name: "-f",
      description:
        "Requests that files be flushed to disk immediately after transfer",
    },
    {
      name: "-i",
      description:
        "Selects the file from which the identity (private key) for public key authentication is read. This option is directly passed to ssh(1)",
      args: {
        name: "identity_file",
        description: "Specified identity file",
        template: "filepaths",
      },
    },
    {
      name: "-J",
      description: `Connect to the target host by first making an sftp connection to the
jump host described by destination and then establishing a TCP
forwarding to the ultimate destination from there.  Multiple jump
hops may be specified separated by comma characters.  This is a
shortcut to specify a ProxyJump configuration directive.  This
option is directly passed to ssh(1)`,
      args: {
        name: "destination",
        description: "Jump host destination",
        generators: [knownHosts, configHosts],
      },
    },
    {
      name: "-l",
      description: "Limits the used bandwidth, specified in Kbit/s",
      args: {
        name: "limit",
        description: "Limit bandwidth in Kbit/s",
      },
    },
    {
      name: "-N",
      description:
        "Disables quiet mode, e.g. to override the implicit quiet mode set by the -b flag",
    },
    {
      name: "-o",
      description: `Can be used to pass options to ssh in the format used in
ssh_config(5).  This is useful for specifying options for which
there is no separate sftp command-line flag.  For example, to
specify an alternate port use: sftp -oPort=24`,
      isRepeatable: true,
      args: {
        name: "ssh_option",
        suggestions: [
          "AddKeysToAgent",
          "AddressFamily",
          "BatchMode",
          "BindAddress",
          "BindInterface",
          "CASignatureAlgorithms",
          "CanonicalDomains",
          "CanonicalizeFallbackLocal",
          "CanonicalizeHostname",
          "CanonicalizeMaxDots",
          "CanonicalizePermittedCNAMEs",
          "CertificateFile",
          "ChannelTimeout",
          "CheckHostIP",
          "Ciphers",
          "ClearAllForwardings",
          "Compression",
          "ConnectTimeout",
          "ConnectionAttempts",
          "ControlMaster",
          "ControlPath",
          "ControlPersist",
          "DynamicForward",
          "EnableEscapeCommandline",
          "EnableSSHKeysign",
          "EscapeChar",
          "ExitOnForwardFailure",
          "FingerprintHash",
          "ForkAfterAuthentication",
          "ForwardAgent",
          "ForwardX11",
          "ForwardX11Timeout",
          "ForwardX11Trusted",
          "GSSAPIAuthentication",
          "GSSAPIDelegateCredentials",
          "GatewayPorts",
          "GlobalKnownHostsFile",
          "HashKnownHosts",
          "Host",
          "HostKeyAlgorithms",
          "HostKeyAlias",
          "HostbasedAcceptedAlgorithms",
          "HostbasedAuthentication",
          "Hostname",
          "IPQoS",
          "IdentitiesOnly",
          "IdentityAgent",
          "IdentityFile",
          "IgnoreUnknown",
          "Include",
          "KbdInteractiveAuthentication",
          "KbdInteractiveDevices",
          "KexAlgorithms",
          "KnownHostsCommand",
          "LocalCommand",
          "LocalForward",
          "LogLevel",
          "LogVerbose",
          "MACs",
          "NoHostAuthenticationForLocalhost",
          "NumberOfPasswordPrompts",
          "ObscureKeystrokeTiming",
          "PKCS11Provider",
          "PasswordAuthentication",
          "PermitLocalCommand",
          "PermitRemoteOpen",
          "Port",
          "PreferredAuthentications",
          "ProxyCommand",
          "ProxyJump",
          "ProxyUseFdpass",
          "PubkeyAcceptedAlgorithms",
          "PubkeyAuthentication",
          "RekeyLimit",
          "RemoteCommand",
          "RemoteForward",
          "RequestTTY",
          "RequiredRSASize",
          "RevokedHostKeys",
          "SecurityKeyProvider",
          "SendEnv",
          "ServerAliveCountMax",
          "ServerAliveInterval",
          "SessionType",
          "SetEnv",
          "StdinNull",
          "StreamLocalBindMask",
          "StreamLocalBindUnlink",
          "StrictHostKeyChecking",
          "SyslogFacility",
          "TCPKeepAlive",
          "Tag",
          "Tunnel",
          "TunnelDevice",
          "UpdateHostKeys",
          "User",
          "UserKnownHostsFile",
          "VerifyHostKeyDNS",
          "VisualHostKey",
          "XAuthLocation",
        ],
      },
    },
    {
      name: "-P",
      description: "Specifies the port to connect to on the remote host",
      args: {
        name: "port",
      },
    },
    {
      name: "-p",
      description:
        "Preserves modification times, access times, and modes from the original files transferred",
    },
    {
      name: "-q",
      description:
        "Quiet mode: disables the progress meter as well as warning and diagnostic messages from ssh(1)",
    },
    {
      name: "-R",
      description: `Specify how many requests may be outstanding at any one time.
Increasing this may slightly improve file transfer speed but will
increase memory usage.  The default is 64 outstanding requests`,
      args: {
        name: "num_requests",
        description: "The number of requests",
        suggestions: ["64"],
        default: "64",
      },
    },
    {
      name: "-r",
      description:
        "Recursively copy entire directories when uploading and downloading. Note that sftp does not follow symbolic links encountered in the tree traversal",
    },
    {
      name: "-S",
      description:
        "Name of the program to use for the encrypted connection. The program must understand ssh(1) options",
      args: {
        name: "program",
        template: "filepaths",
      },
    },
    {
      name: "-s",
      description: `Specifies the SSH2 subsystem or the path for an sftp server on the
remote host.  A path is useful when the remote sshd(8) does not
have an sftp subsystem configured`,
      args: {
        name: "subsystem | sftp_server",
        description: "Path to the SFTP server",
      },
    },
    {
      name: "-v",
      description: "Raise logging level. This option is also passed to ssh",
      isRepeatable: 3,
    },
    {
      name: "-X",
      description:
        "Specify an option that controls aspects of SFTP protocol behaviour",
      isRepeatable: true,
      args: {
        name: "sftp_option",
        suggestions: [
          {
            name: "nrequests",
            insertValue: "nrequests=",
            description:
              "How many concurrent SFTP read or write requests may be in progress during a download or upload (default 64)",
          },
          {
            name: "buffer",
            insertValue: "buffer=",
            description:
              "Maximum buffer size for a single SFTP read/write operation during download or upload (default 32KB)",
          },
        ],
      },
    },
  ],
};

export default completionSpec;
