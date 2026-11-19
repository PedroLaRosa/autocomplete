// scp (OpenSSH v10.6, openssh-portable tag V_10_6_P2, 2026-11-19). Source: scp.1 man page and scp.c getopt/usage from the tagged source tree.
// Not run against a live scp binary. Transfers use the SFTP protocol by default; -O selects the legacy SCP protocol.
import { knownHosts, configHosts, sshConfigKeywords } from "./ssh";

const completionSpec: Fig.Spec = {
  name: "scp",
  description: "Copies files or directories between hosts on a network",
  args: [
    {
      name: "sources",
      description: "File or directory, local or remote ([user@]host:[path])",
      isVariadic: true,
      generators: [
        knownHosts,
        configHosts,
        { template: ["history", "filepaths", "folders"] },
      ],
    },
    {
      name: "target",
      description: "File or directory, local or remote ([user@]host:[path])",
      generators: [
        knownHosts,
        configHosts,
        { template: ["history", "filepaths", "folders"] },
      ],
    },
  ],
  options: [
    {
      name: "-3",
      description: `Copies between two remote hosts are transferred through the local
host.  This mode is the default, but see also -R for copying data
directly between two remote hosts.  Note that when using the legacy
SCP protocol (-O), this option selects batch mode for the second
host as scp cannot ask for passwords or passphrases for both hosts`,
    },
    {
      name: "-4",
      description: "Forces scp to use IPv4 addresses only",
    },
    {
      name: "-6",
      description: "Forces scp to use IPv6 addresses only",
    },
    {
      name: "-A",
      description:
        "Allows forwarding of ssh-agent(1) to the remote system. The default is not to forward an authentication agent",
    },
    {
      name: "-B",
      description:
        "Selects batch mode (prevents asking for passwords or passphrases)",
    },
    {
      name: "-C",
      description:
        "Compression enable. Passes the -C flag to ssh(1) to enable compression",
    },
    {
      name: "-c",
      description:
        "Selects the cipher to use for encrypting the data transfer. This option is directly passed to ssh(1)",
      args: {
        name: "cipher",
        description: "The selected cipher specification",
      },
    },
    {
      name: "-D",
      description:
        "Connect directly to a local SFTP server program rather than a remote one via ssh(1). This option may be useful in debugging the client and server",
      args: {
        name: "sftp_server_path",
        description: "Path to the local SFTP server program",
        template: "filepaths",
      },
    },
    {
      name: "-F",
      description:
        "Specifies an alternative per-user configuration file for ssh. This option is directly passed to ssh(1)",
      args: {
        name: "ssh_config",
        description: "The selected ssh config",
        template: "filepaths",
      },
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
      description: `Connect to the target host by first making an scp connection to the
jump host described by destination and then establishing a TCP
forwarding to the ultimate destination from there.  Multiple jump
hops may be specified separated by comma characters.  This is a
shortcut to specify a ProxyJump configuration directive.  This
option is directly passed to ssh(1)`,
      args: {
        name: "destination",
        description:
          "Jump host(s), separated by commas for multiple hops (shortcut for ProxyJump)",
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
      name: "-O",
      description:
        "Use the legacy SCP protocol for file transfers instead of the SFTP protocol",
    },
    {
      name: "-o",
      description: `Can be used to pass options to ssh in the format used in
ssh_config(5).  This is useful for specifying options for which
there is no separate scp command-line flag.  For full details of
the options listed below, and their possible values, see
ssh_config(5)`,
      args: {
        name: "option",
        suggestions: sshConfigKeywords,
      },
    },
    {
      name: "-P",
      description: `Specifies the port to connect to on the remote host.  Note that
this option is written with a capital ‘P’, because -p is already
reserved for preserving the times and modes of the file`,
      args: {
        name: "port",
      },
    },
    {
      name: "-p",
      description:
        "Preserves modification times, access times, and file mode bits from the source file",
    },
    {
      name: "-q",
      description:
        "Quiet mode: disables the progress meter as well as warning and diagnostic messages from ssh(1)",
    },
    {
      name: "-R",
      description: `Copies between two remote hosts are transferred through the local
host by default.  This option instead copies between two remote
hosts by connecting to the origin host and executing scp there.
This requires that scp running on the origin host can authenticate
to the destination host without requiring a password.  Deprecated
upstream: scp warns that this mode will soon be removed`,
    },
    {
      name: "-r",
      description:
        "Recursively copy entire directories.  Note that scp follows symbolic links encountered in the tree traversal",
    },
    {
      name: "-S",
      description:
        "Name of program to use for the encrypted connection.  The program must understand ssh(1) options",
      args: {
        name: "program",
      },
    },
    {
      name: "-T",
      description: `Disable strict filename checking.  By default when copying files
from a remote host to a local directory scp checks that the
received filenames match those requested on the command-line to
prevent the remote end from sending unexpected or unwanted files.
Because of differences in how various operating systems and shells
interpret filename wildcards, these checks may cause wanted files
to be rejected.  This option disables these checks at the expense
of fully trusting that the server will not send unexpected
filenames`,
    },
    {
      name: "-v",
      description:
        "Verbose mode.  Causes scp and ssh(1) to print debugging messages about their progress. This is helpful in debugging connection, authentication, and configuration problems",
    },
    {
      name: "-X",
      description:
        "Specify an option that controls aspects of SFTP protocol behaviour",
      isRepeatable: true,
      args: {
        name: "sftp_option",
        description: "SFTP option in the form name=value",
        suggestions: [
          {
            name: "nrequests",
            insertValue: "nrequests=",
            description:
              "Number of concurrent SFTP read or write requests (default 64)",
          },
          {
            name: "buffer",
            insertValue: "buffer=",
            description:
              "Maximum buffer size for a single SFTP read/write operation (default 32KB)",
          },
        ],
      },
    },
  ],
};

export default completionSpec;
