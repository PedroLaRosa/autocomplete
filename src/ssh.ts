// OpenSSH v10.6 (openssh-portable tag V_10_6_P2, 2026-11-19). Source: ssh.1 / ssh_config.5 man pages and ssh.c getopt/usage from the tagged source tree.
// Not run against a live ssh binary. Shared with the scp spec (host generators and -o keywords).
const knownHostRegex = /(?:[a-zA-Z0-9-]+\.)+[a-zA-Z0-9]+/; // will match numerical IPs as well as domains/subdomains

const resolveAbsolutePath = (
  path: string,
  basePath: string,
  home: string
): string => {
  if (path.startsWith("/") || path.startsWith("~/") || path === "~") {
    return path.replace("~", home);
  }
  if (
    basePath.startsWith("/") ||
    basePath.startsWith("~/") ||
    basePath === "~"
  ) {
    return (
      basePath.replace("~", home) +
      (basePath.replace("~", home).endsWith("/") ? "" : "/") +
      path
    );
  }
  return basePath + (basePath.endsWith("/") ? "" : "/") + path;
};

const getConfigLines = async (
  file: string,
  executeShellCommand: Fig.ExecuteCommandFunction,
  home: string,
  basePath: string
) => {
  const absolutePath = resolveAbsolutePath(file, basePath, home);

  const { stdout } = await executeShellCommand({
    command: "cat",
    // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
    args: [absolutePath],
  });
  const configLines = stdout.split("\n").map((line) => line.trim());

  // Get list of includes in the config file
  const includes = configLines
    .filter((line) => line.toLowerCase().startsWith("include "))
    .map((line) => line.split(" ")[1]);

  // Get the lines of every include file
  const includeLines: string[][] = await Promise.all(
    includes.map((file) =>
      getConfigLines(file, executeShellCommand, home, basePath)
    )
  );

  // Combine config lines with includes config lines
  return [...configLines, ...includeLines.flat()];
};

export const knownHosts: Fig.Generator = {
  custom: async (tokens, executeCommand, context) => {
    const { stdout } = await executeCommand({
      command: "cat",
      // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
      args: [`${context.environmentVariables["HOME"]}/.ssh/known_hosts`],
    });

    return stdout
      .split("\n")
      .map((line) => {
        const match = knownHostRegex.exec(line);
        if (match) {
          return String(match);
        }
      })
      .filter((value, index, self) => value && self.indexOf(value) === index)
      .map((knownHost) => ({
        name: (tokens[1].endsWith("@") ? tokens[1] : "") + knownHost, // also suggest when user@ is provided
        description: "SSH host",
      }));
  },
  trigger: "@",
};

export const configHosts: Fig.Generator = {
  custom: async (tokens, executeShellCommand, context) => {
    const configLines = await getConfigLines(
      "config",
      executeShellCommand,
      context.environmentVariables["HOME"],
      "~/.ssh"
    );

    return configLines
      .filter(
        (line) =>
          line.trim().toLowerCase().startsWith("host ") && !line.includes("*")
      )
      .map((host) => ({
        name: host.split(" ")[1],
        description: "SSH host",
        priority: 90,
      }));
  },
};

// Keywords documented in ssh_config(5); shared with the scp spec for `-o`
export const sshConfigKeywords: Fig.Suggestion[] = [
  { name: "AddKeysToAgent" },
  { name: "AddressFamily" },
  { name: "BatchMode" },
  { name: "BindAddress" },
  { name: "BindInterface" },
  { name: "CanonicalDomains" },
  { name: "CanonicalizeFallbackLocal" },
  { name: "CanonicalizeHostname" },
  { name: "CanonicalizeMaxDots" },
  { name: "CanonicalizePermittedCNAMEs" },
  { name: "CASignatureAlgorithms" },
  { name: "CertificateFile" },
  { name: "ChannelTimeout" },
  { name: "CheckHostIP" },
  { name: "Ciphers" },
  { name: "ClearAllForwardings" },
  { name: "Compression" },
  { name: "ConnectionAttempts" },
  { name: "ConnectTimeout" },
  { name: "ControlMaster" },
  { name: "ControlPath" },
  { name: "ControlPersist" },
  { name: "DynamicForward" },
  { name: "EnableEscapeCommandline" },
  { name: "EnableSSHKeysign" },
  { name: "EscapeChar" },
  { name: "ExitOnForwardFailure" },
  { name: "FingerprintHash" },
  { name: "ForkAfterAuthentication" },
  { name: "ForwardAgent" },
  { name: "ForwardX11" },
  { name: "ForwardX11Timeout" },
  { name: "ForwardX11Trusted" },
  { name: "GatewayPorts" },
  { name: "GlobalKnownHostsFile" },
  { name: "GSSAPIAuthentication" },
  { name: "GSSAPIDelegateCredentials" },
  { name: "HashKnownHosts" },
  { name: "Host" },
  { name: "HostbasedAcceptedAlgorithms" },
  { name: "HostbasedAuthentication" },
  { name: "HostKeyAlgorithms" },
  { name: "HostKeyAlias" },
  { name: "Hostname" },
  { name: "IdentitiesOnly" },
  { name: "IdentityAgent" },
  { name: "IdentityFile" },
  { name: "IgnoreUnknown" },
  { name: "Include" },
  { name: "IPQoS" },
  { name: "KbdInteractiveAuthentication" },
  { name: "KbdInteractiveDevices" },
  { name: "KexAlgorithms" },
  { name: "KnownHostsCommand" },
  { name: "LocalCommand" },
  { name: "LocalForward" },
  { name: "LogLevel" },
  { name: "LogVerbose" },
  { name: "MACs" },
  { name: "Match" },
  { name: "NoHostAuthenticationForLocalhost" },
  { name: "NumberOfPasswordPrompts" },
  { name: "ObscureKeystrokeTiming" },
  { name: "PasswordAuthentication" },
  { name: "PermitLocalCommand" },
  { name: "PermitRemoteOpen" },
  { name: "PKCS11Provider" },
  { name: "Port" },
  { name: "PreferredAuthentications" },
  { name: "ProxyCommand" },
  { name: "ProxyJump" },
  { name: "ProxyUseFdpass" },
  { name: "PubkeyAcceptedAlgorithms" },
  { name: "PubkeyAuthentication" },
  { name: "RefuseConnection" },
  { name: "RekeyLimit" },
  { name: "RemoteCommand" },
  { name: "RemoteForward" },
  { name: "RequestTTY" },
  { name: "RequiredRSASize" },
  { name: "RevokedHostKeys" },
  { name: "SecurityKeyProvider" },
  { name: "SendEnv" },
  { name: "ServerAliveCountMax" },
  { name: "ServerAliveInterval" },
  { name: "SessionType" },
  { name: "SetEnv" },
  { name: "StdinNull" },
  { name: "StreamLocalBindMask" },
  { name: "StreamLocalBindUnlink" },
  { name: "StrictHostKeyChecking" },
  { name: "SyslogFacility" },
  { name: "Tag" },
  { name: "TCPKeepAlive" },
  { name: "Tunnel" },
  { name: "TunnelDevice" },
  { name: "UpdateHostKeys" },
  { name: "User" },
  { name: "UserKnownHostsFile" },
  { name: "VerifyHostKeyDNS" },
  { name: "VersionAddendum" },
  { name: "VisualHostKey" },
  { name: "WarnWeakCrypto" },
  { name: "XAuthLocation" },
];

const completionSpec: Fig.Spec = {
  name: "ssh",
  description: "Log into a remote machine",
  args: {
    name: "user@hostname",
    description:
      "Address of remote machine to log into (hostname, [user@]hostname or ssh://[user@]hostname[:port])",
    generators: [knownHosts, configHosts, { template: "history" }],
  },
  options: [
    {
      name: "-2",
      description:
        "Ignored, SSH protocol 2 is the only supported protocol version",
      deprecated: true,
    },
    {
      name: "-4",
      description: "Forces ssh to use IPv4 addresses only",
    },
    {
      name: "-6",
      description: "Forces ssh to use IPv6 addresses only",
    },
    {
      name: "-A",
      description: "Enables forwarding of the authentication agent connection",
    },
    {
      name: "-a",
      description: "Disables forwarding of the authentication agent connection",
    },
    {
      name: "-B",
      description:
        "Bind to the address of bind_interface before attempting to connect to the destination host",
      args: {
        name: "bind_interface",
        description: "Network interface whose address is used as the source",
      },
    },
    {
      name: "-b",
      description:
        "Use bind_address on the local machine as the source address of the connection",
      args: {
        name: "bind address",
        description: "Source address of the connection",
      },
    },
    {
      name: "-C",
      description:
        "Requests compression of all data (including stdin, stdout, stderr, and data for forwarded X11, TCP and Unix-domain connections)",
    },
    {
      name: "-c",
      description:
        "Selects the cipher specification for encrypting the session",
      args: {
        name: "cipher spec",
        description: "Comma-separated list of ciphers in order of preference",
      },
    },
    {
      name: "-D",
      description:
        "Specifies a local 'dynamic' application-level port forwarding",
      args: {
        name: "[bind_address:]port",
        description: "Port (and optional bind address) to listen on locally",
      },
    },
    {
      name: "-E",
      description: "Append debug logs to log_file instead of standard error",
      args: {
        name: "log_file",
        description: "Path to the log file",
        template: "filepaths",
      },
    },
    {
      name: "-e",
      description:
        "Sets the escape character for sessions with a pty (default: '~')",
      args: {
        name: "escape char",
        description: "Specified escape character, or 'none' to disable escapes",
      },
    },
    {
      name: "-F",
      description: "Specifies an alternative per-user configuration file",
      args: {
        name: "configfile",
        description:
          "Path to alternative config file, or 'none' to read no configuration files",
        template: "filepaths",
      },
    },
    {
      name: "-f",
      description:
        "Requests ssh to go to background just before command execution",
    },
    {
      name: "-G",
      description:
        "Print the configuration after evaluating Host and Match blocks and exit",
    },
    {
      name: "-g",
      description: "Allows remote hosts to connect to local forwarded ports",
    },
    {
      name: "-I",
      description:
        "Specify the PKCS#11 shared library ssh should use to communicate with a PKCS#11 token providing keys for user authentication",
      args: {
        name: "pkcs11",
        description: "Path to the PKCS#11 shared library",
        template: "filepaths",
      },
    },
    {
      name: "-i",
      description:
        "Selects a file from which the identity (private key) for public key authentication is read",
      isRepeatable: true,
      args: {
        name: "identity file",
        description: "Path to identity (private key)",
        template: "filepaths",
      },
    },
    {
      name: "-J",
      description:
        "Connect to the target host by first making an ssh connection to the jump host and then establishing a TCP forwarding to the ultimate destination from there",
      args: {
        name: "destination",
        description:
          "Jump host(s), separated by commas for multiple hops (shortcut for ProxyJump)",
        generators: [knownHosts, configHosts],
      },
    },
    {
      name: "-K",
      description:
        "Enables GSSAPI-based authentication and forwarding (delegation) of GSSAPI credentials to the server",
    },
    {
      name: "-k",
      description:
        "Disables forwarding (delegation) of GSSAPI credentials to the server",
    },
    {
      name: "-L",
      description:
        "Specifies that connections to the given TCP port or Unix socket on the local (client) host are to be forwarded to the given host and port, or Unix socket, on the remote side",
      isRepeatable: true,
      args: {
        name: "address",
        description:
          "[bind_address:]port:host:hostport, [bind_address:]port:remote_socket, local_socket:host:hostport or local_socket:remote_socket",
      },
    },
    {
      name: "-l",
      description: "Specifies the user to log in as on the remote machine",
      args: {
        name: "login name",
        description: "Name of user logging into remote machine",
      },
    },
    {
      name: "-M",
      description:
        "Places the ssh client into 'master' mode for connection sharing (repeat to require confirmation before each operation that changes the multiplexing state)",
      isRepeatable: true,
    },
    {
      name: "-m",
      description:
        "A comma-separated list of MAC (message authentication code) algorithms, specified in order of preference",
      args: {
        name: "mac spec",
      },
    },
    {
      name: "-N",
      description: "Do not execute a remote command",
    },
    {
      name: "-n",
      description:
        "Redirects stdin from /dev/null (actually, prevents reading from stdin)",
    },
    {
      name: "-O",
      description: "Control an active connection multiplexing master process",
      args: {
        name: "ctl cmd",
        description: "Command that's passed to the master process",
        suggestions: [
          {
            name: "check",
            description: "Check that the master process is running",
          },
          {
            name: "conninfo",
            description: "Report information about the master connection",
          },
          {
            name: "channels",
            description: "Report information about open channels",
          },
          {
            name: "forward",
            description: "Request forwardings without command execution",
          },
          { name: "cancel", description: "Cancel forwardings" },
          {
            name: "proxy",
            description:
              "Connect to a running multiplexing master in proxy mode",
          },
          { name: "exit", description: "Request the master to exit" },
          {
            name: "stop",
            description:
              "Request the master to stop accepting further multiplexing requests",
          },
        ],
      },
    },
    {
      name: "-o",
      description:
        "Can be used to give options in the format used in the configuration file",
      isRepeatable: true,
      args: {
        name: "option",
        description:
          "Options that can be specified in the format of the config file",
        suggestions: sshConfigKeywords,
      },
    },
    {
      name: "-P",
      description:
        "Specify a tag name that may be used to select configuration in ssh_config",
      args: {
        name: "tag",
        description: "Tag name (see the Tag and Match keywords)",
      },
    },
    {
      name: "-p",
      description: "Port to connect to on the remote host",
      args: {
        name: "port",
        description: "Port to connect to",
      },
    },
    {
      name: "-Q",
      description:
        "Queries for the algorithms supported by one of the given features",
      args: {
        name: "query_option",
        description:
          "Feature to query (or any ssh_config/sshd_config keyword that takes an algorithm list)",
        suggestions: [
          { name: "cipher", description: "Supported symmetric ciphers" },
          {
            name: "cipher-auth",
            description:
              "Supported symmetric ciphers that support authenticated encryption",
          },
          { name: "compression", description: "Supported compression modes" },
          {
            name: "help",
            description: "Supported query terms for use with the -Q flag",
          },
          { name: "mac", description: "Supported message integrity codes" },
          { name: "kex", description: "Key exchange algorithms" },
          { name: "key", description: "Key types" },
          {
            name: "key-ca-sign",
            description: "Valid CA signature algorithms for certificates",
          },
          { name: "key-cert", description: "Certificate key types" },
          { name: "key-plain", description: "Non-certificate key types" },
          {
            name: "key-sig",
            description: "All key types and signature algorithms",
          },
          {
            name: "protocol-version",
            description: "Supported SSH protocol versions",
          },
          { name: "sig", description: "Supported signature algorithms" },
        ],
      },
    },
    {
      name: "-q",
      description:
        "Quiet mode.  Causes most warning and diagnostic messages to be suppressed",
    },
    {
      name: "-R",
      description:
        "Specifies that connections to the given TCP port or Unix socket on the remote (server) host are to be forwarded to the local side",
      isRepeatable: true,
      args: {
        name: "address",
        description:
          "[bind_address:]port:host:hostport, [bind_address:]port:local_socket, remote_socket:host:hostport, remote_socket:local_socket or [bind_address:]port (SOCKS proxy)",
      },
    },
    {
      name: "-S",
      description:
        "Specifies the location of a control socket for connection sharing, or the string 'none' to disable connection sharing",
      args: {
        name: "ctl_path",
        description: "Location of the control socket",
        template: "filepaths",
      },
    },
    {
      name: "-s",
      description:
        "May be used to request invocation of a subsystem on the remote system",
    },
    {
      name: "-T",
      description: "Disable pseudo-terminal allocation",
    },
    {
      name: "-t",
      description: "Force pseudo-terminal allocation",
      isRepeatable: true,
    },
    {
      name: "-V",
      description: "Display the version number and exit",
    },
    {
      name: "-v",
      description:
        "Verbose mode.  Causes ssh to print debugging messages about its progress",
      isRepeatable: 3,
    },
    {
      name: "-W",
      description:
        "Requests that standard input and output on the client be forwarded to host on port over the secure channel",
      args: {
        name: "host:port",
        description: "Host and port to forward to",
      },
    },
    {
      name: "-w",
      description:
        "Requests tunnel device forwarding with the specified tun(4) devices between the client (local_tun) and the server (remote_tun)",
      args: {
        name: "local_tun[:remote_tun]",
        description:
          "Tunnel devices, specified by numerical ID or 'any' for the next available one",
      },
    },
    {
      name: "-X",
      description: "Enables X11 forwarding",
    },
    {
      name: "-x",
      description: "Disables X11 forwarding",
    },
    {
      name: "-Y",
      description: "Enables trusted X11 forwarding",
    },
    {
      name: "-y",
      description: "Send log information using the syslog(3) system module",
    },
    {
      name: "-Z",
      description:
        "List the public keys that would be attempted for authentication to the specified destination in preferred order and exit",
    },
  ],
};

export default completionSpec;
