// nc (macOS 15.5 BSD netcat, apple-oss-distributions/netcat netcat-56, nc.1 dated 2001-06-25, 2026-11-19). Source: nc.1 man page,
// netcat.c (getopt string, long_options table and the `nc -h` help text). Not run on macOS.
// The previous --ecn option does not exist (the real name is --apple-ecn); -l takes no argument (the port is a positional argument).
const trafficClasses = [
  "BK_SYS",
  "BK",
  "BE",
  "RD",
  "OAM",
  "AV",
  "RV",
  "VI",
  "VO",
  "CTL",
];

const netServiceTypes = [
  "BK",
  "BE",
  "VI",
  "SIG",
  "VO",
  "RV",
  "AV",
  "OAM",
  "RD",
];

const tosValues = [
  "DF",
  "EF",
  "VA",
  "CS0",
  "CS1",
  "CS2",
  "CS3",
  "CS4",
  "CS5",
  "CS6",
  "CS7",
  "AF11",
  "AF12",
  "AF13",
  "AF21",
  "AF22",
  "AF23",
  "AF31",
  "AF32",
  "AF33",
  "AF41",
  "AF42",
  "AF43",
];

const completionSpec: Fig.Spec = {
  name: "nc",
  description: "Arbitrary TCP and UDP connections and listens",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      name: "-4",
      description: "Forces nc to use IPv4 addresses only",
      exclusiveOn: ["-6"],
    },
    {
      name: "-6",
      description: "Forces nc to use IPv6 addresses only",
      exclusiveOn: ["-4"],
    },
    {
      name: ["-A", "--apple-recv-anyif"],
      description: "Set SO_RECV_ANYIF on socket",
    },
    {
      name: ["-a", "--apple-awdl-unres"],
      description: "Set SO_AWDL_UNRESTRICTED on socket",
    },
    {
      name: ["-b", "--apple-boundif"],
      description: "Specifies the interface to bind the socket to",
      args: {
        name: "boundif",
      },
    },
    {
      name: "-c",
      description: "Send CRLF as line-ending",
    },
    {
      name: "-D",
      description: "Enable debugging on the socket",
    },
    {
      name: ["-C", "--apple-no-cellular"],
      description: "Force nc not to use cellular data context",
    },
    {
      name: "-d",
      description: "Do not attempt to read from stdin",
    },
    {
      name: ["-E", "--apple-no-expensive"],
      description: "Do not use expensive interfaces",
    },
    {
      name: ["-F", "--apple-no-flowadv"],
      description:
        "Do not use flow advisory (flow advisory is enabled by default)",
    },
    {
      name: "-h",
      description: "Prints out nc help",
    },
    {
      name: "-i",
      description:
        "Specifies a delay time interval between lines of text sent and received. Also causes a delay time between connections to multiple ports",
      args: {
        name: "interval",
      },
    },
    {
      name: ["-G", "--apple-tcp-timeout"],
      description: "TCP connection timeout in seconds",
      args: {
        name: "conntimeout",
      },
    },
    {
      name: ["-H", "--apple-tcp-keepalive"],
      description: "Initial TCP keep alive timeout in seconds",
      args: {
        name: "keepidle",
      },
    },
    {
      name: ["-I", "--apple-tcp-keepintvl"],
      description: "Interval for repeating TCP keep alive timeout in seconds",
      args: {
        name: "keepintvl",
      },
    },
    {
      name: ["-J", "--apple-tcp-keepcnt"],
      description: "Number of times to repeat TCP keep alive packets",
      args: {
        name: "keepcnt",
      },
    },
    {
      name: ["-K", "--apple-tclass"],
      description: "Specify the traffic class",
      args: {
        name: "tclass",
        suggestions: trafficClasses,
      },
    },
    {
      name: "-k",
      description:
        "Force nc to stay listening for another connection after its current connection is completed. It is an error to use this option without the -l option",
      dependsOn: ["-l"],
    },
    {
      name: "-l",
      description:
        "Used to specify that nc should listen for an incoming connection rather than initiate a connection to a remote host. It is an error to use this option in conjunction with the -p, -s, or -z options. Additionally, any timeouts specified with the -w option are ignored",
      exclusiveOn: ["-p", "-s", "-z"],
    },
    {
      name: ["-L", "--apple-tcp-adp-rtimo"],
      description:
        "Number of probes to send to the peer before declaring that the peer is not reachable and generating an adaptive timeout read/write event",
      args: {
        name: "num_probes",
      },
    },
    {
      name: ["-m", "--apple-intcoproc-allow"],
      description: "Set SO_INTCOPROC_ALLOW on socket",
    },
    {
      name: "-n",
      description:
        "Do not do any DNS or service lookups on any specified addresses, hostnames or ports",
    },
    {
      name: ["-N", "--apple-tcp-adp-wtimo"],
      description:
        "Number of probes to send before generating a write timeout event",
      args: {
        name: "num_probes",
      },
    },
    {
      name: ["-o", "--apple-setsockopt-later"],
      description: "Issue socket options after connect/bind",
    },
    {
      name: ["-O", "--apple-no-connectx"],
      description: "Use old-style connect instead of connectx",
    },
    {
      name: "-p",
      description:
        "Specifies the source port nc should use, subject to privilege restrictions and availability. It is an error to use this option in conjunction with the -l option",
      args: {
        name: "source_port",
      },
      exclusiveOn: ["-l"],
    },
    {
      name: "-r",
      description:
        "Specifies that source and/or destination ports should be chosen randomly instead of sequentially within a range or in the order that the system assigns them",
    },
    {
      name: "-s",
      description:
        "Specifies the IP of the interface which is used to send the packets. It is an error to use this option in conjunction with the -l option",
      args: {
        name: "source_ip_address",
      },
      exclusiveOn: ["-l"],
    },
    {
      name: "-t",
      description:
        "Causes nc to send RFC 854 DON'T and WON'T responses to RFC 854 DO and WILL requests. This makes it possible to use nc to script telnet sessions",
    },
    {
      name: "-U",
      description: "Specifies to use Unix Domain Sockets",
    },
    {
      name: "-u",
      description: "Use UDP instead of the default option of TCP",
    },
    {
      name: "-v",
      description: "Have nc give more verbose output",
    },
    {
      name: "-w",
      description:
        "If a connection and stdin are idle for more than timeout seconds, then the connection is silently closed. The -w flag has no effect on the -l option, i.e. nc will listen forever for a connection, with or without the -w flag. The default is no timeout",
      args: {
        name: "timeout",
      },
    },
    {
      name: "-X",
      description:
        "Requests that nc should use the specified protocol when talking to the proxy server. Supported protocols are 4 (SOCKS v.4), 5 (SOCKS v.5) and connect (HTTPS proxy). If the protocol is not specified, SOCKS version 5 is used",
      args: {
        name: "proxy_version",
        suggestions: ["4", "5", "connect"],
      },
    },
    {
      name: "-x",
      description:
        "Requests that nc should connect to hostname using a proxy at proxy_address and port. If port is not specified, the well-known port for the proxy protocol is used (1080 for SOCKS, 3128 for HTTPS)",
      args: {
        name: "proxy_address[:port]",
      },
    },
    {
      name: "-z",
      description:
        "Specifies that nc should just scan for listening daemons, without sending any data to them. It is an error to use this option in conjunction with the -l option",
      exclusiveOn: ["-l"],
    },
    {
      name: "--apple-delegate-pid",
      description:
        "Requests that nc should delegate the socket for the specified PID. It is an error to use this option in conjunction with the --apple-delegate-uuid option",
      args: {
        name: "pid",
      },
      exclusiveOn: ["--apple-delegate-uuid"],
    },
    {
      name: "--apple-delegate-uuid",
      description:
        "Requests that nc should delegate the socket for the specified UUID. It is an error to use this option in conjunction with the --apple-delegate-pid option",
      args: {
        name: "uuid",
      },
      exclusiveOn: ["--apple-delegate-pid"],
    },
    {
      name: "--apple-ext-bk-idle",
      description:
        "Requests that nc marks its socket for extended background idle time when the process becomes suspended",
    },
    {
      name: "--apple-nowakefromsleep",
      description:
        "When the parameter n is greater than 0, requests that nc marks its socket to exclude the local port from the list of opened ports that is queried by drivers when the system goes to sleep. When n is greater than 1, set the socket option that generates the KEV_SOCKET_CLOSED kernel event when the socket gets closed",
      args: {
        name: "n",
      },
    },
    {
      name: "--apple-ecn",
      description:
        "Requests that nc marks to use the socket option TCP_ECN_MODE to set the ECN mode",
      args: {
        name: "mode",
        suggestions: ["default", "enable", "disable"],
        default: "default",
      },
    },
    {
      name: "--apple-kao",
      description: "Set keep alive offload",
      args: {
        name: "kao",
      },
    },
    {
      name: "--apple-netsvctype",
      description: "Set the network service type",
      args: {
        name: "svc",
        suggestions: netServiceTypes,
      },
    },
    {
      name: "--apple-notify-ack",
      description: "Receive events when data gets acknowledged",
    },
    {
      name: "--apple-sockev",
      description: "Receive and print socket events",
    },
    {
      name: ["-T", "--apple-tos"],
      description: "Set the IP_TOS or IPV6_TCLASS option",
      args: {
        name: "tos",
        suggestions: tosValues,
      },
    },
    {
      name: "--apple-tos-cmsg",
      description: "Set the IP_TOS or IPV6_TCLASS option via cmsg",
    },
    {
      name: "--apple-no-reuseport",
      description: "Do not use the SO_REUSEPORT socket option",
    },
    {
      name: "--apple-tcp-maxseg",
      description: "Set the TCP_MAXSEG option",
      args: {
        name: "mss",
      },
    },
  ],
  args: [
    {
      name: "hostname",
      description: "Hostname or IP address to listen on or connect to",
      isOptional: true,
    },
    {
      name: "port",
      description: "Port to listen on or connect to",
      isOptional: true,
      isVariadic: true,
    },
  ],
};
export default completionSpec;
