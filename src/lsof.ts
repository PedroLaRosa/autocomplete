// lsof v4.99.7 (latest tag of lsof-org/lsof and Homebrew stable, 2026-11-20). Source: Lsof.8, src/usage.c, src/main.c (option string) and
// lib/dialects/{linux,darwin}/machine.h of the 4.99.7 source tag, read statically (not built or run); cross-checked against Apple lsof-76 (4.91,
// macOS libproc dialect) and the Linux `lsof -h` / `lsof -F?` output of an installed 4.95.0. Not run on macOS. Options that exist only on other
// dialects (-A AFS, -C name cache, -D device cache, -k/-m kernel files, -z Solaris zones) are left out; Linux-only options are marked in their description.
const fileStructureFlags: Fig.Suggestion[] = [
  { name: "c", description: "File structure use count (not on Linux)" },
  { name: "g", description: "File flag abbreviations" },
  { name: "G", description: "File flags in hexadecimal" },
];

const completionSpec: Fig.Spec = {
  name: "lsof",
  description: "List open files",
  args: {
    name: "names",
    description: "Files or file systems (mount points) to select",
    template: "filepaths",
    isVariadic: true,
    isOptional: true,
  },
  options: [
    {
      name: ["-?", "-h"],
      description: "Print help",
    },
    {
      name: "-a",
      description: "Apply AND to the selections (defaults to OR)",
    },
    {
      name: "-b",
      description:
        "Avoid kernel functions that might block (lstat, readlink, stat)",
    },
    {
      name: "-c",
      description:
        "Select files of processes whose command begins with the given characters",
      isRepeatable: true,
      args: {
        name: "command",
        description:
          "Command prefix, ^command to exclude it, or /regex/ optionally ending with b, i or x",
      },
    },
    {
      name: "+c",
      description:
        "Maximum number of COMMAND column characters (default 9, 0 for all)",
      args: {
        name: "width",
      },
    },
    {
      name: "+d",
      description:
        "Search for open instances of a directory and the files it contains at its top level",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "-d",
      description: "Select (or, with ^, exclude) files by file descriptor list",
      args: {
        name: "FDs",
        description:
          "Comma-separated FD names, numbers or ranges, e.g. cwd,1,3 or ^0-7 (fd selects all)",
      },
    },
    {
      name: "+D",
      description:
        "Search the whole tree under a directory for open instances (can be slow)",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "+e",
      description:
        "Linux: exempt a file system from blocking stat, lstat and most readlink calls (risky)",
      isRepeatable: true,
      args: {
        name: "file system",
        template: "folders",
      },
    },
    {
      name: "-e",
      description:
        "Linux: exempt a file system from blocking stat and lstat calls (risky)",
      isRepeatable: true,
      args: {
        name: "file system",
        template: "folders",
      },
    },
    {
      name: "+E",
      description:
        "Linux: show endpoint information of pipes, sockets, ptys, message queues and eventfds, plus the endpoint files",
    },
    {
      name: "-E",
      description:
        "Linux: show endpoint information of pipes, sockets, ptys, message queues and eventfds",
    },
    {
      name: "+f",
      description:
        "Treat names as file systems; with flags, list file structure information",
      args: {
        isOptional: true,
        name: "flags",
        suggestions: fileStructureFlags,
      },
    },
    {
      name: "-f",
      description:
        "Treat names as simple files; with flags, inhibit file structure information",
      args: {
        isOptional: true,
        name: "flags",
        suggestions: fileStructureFlags,
      },
    },
    {
      name: "-F",
      description:
        "Select fields for output that is easy to parse (all fields when none are given)",
      args: {
        name: "fields",
        isOptional: true,
        isVariadic: true,
        suggestions: [
          {
            name: "a",
            description: "Access: r = read; w = write; u = read/write",
          },
          {
            name: "c",
            description: "Command name",
          },
          {
            name: "C",
            description: "File struct share count",
          },
          {
            name: "d",
            description: "Device character code",
          },
          {
            name: "D",
            description: "Major/minor device number as 0x<hex>",
          },
          {
            name: "f",
            description: "File descriptor",
          },
          {
            name: "G",
            description: "File flaGs",
          },
          {
            name: "i",
            description: "Inode number",
          },
          {
            name: "k",
            description: "Link count",
          },
          {
            name: "K",
            description: "Task ID (TID)",
          },
          {
            name: "l",
            description: "Lock: r/R = read; w/W = write; u = read/write",
          },
          {
            name: "L",
            description: "Login name",
          },
          {
            name: "m",
            description:
              "Marker between repeated output (always selected in repeat mode)",
          },
          {
            name: "M",
            description: "Task comMand name",
          },
          {
            name: "n",
            description: "Comment, name, Internet addresses",
          },
          {
            name: "o",
            description: "File offset as 0t<dec> or 0x<hex>",
          },
          {
            name: "p",
            description: "Process ID (PID, always selected)",
          },
          {
            name: "g",
            description: "Process group ID (PGID)",
          },
          {
            name: "P",
            description: "Protocol name",
          },
          {
            name: "r",
            description: "Raw device number as 0x<hex>",
          },
          {
            name: "R",
            description: "PaRent PID",
          },
          {
            name: "s",
            description: "File size",
          },
          {
            name: "S",
            description: "Stream module and device names",
          },
          {
            name: "t",
            description: "File type",
          },
          {
            name: "T",
            description: "TCP/TPI info",
          },
          {
            name: "u",
            description: "User ID (UID)",
          },
          {
            name: "Z",
            description: "SELinux security context (Linux)",
          },
          {
            name: "0",
            description: "Use NUL as field terminator instead of NL",
          },
        ],
      },
    },
    {
      name: "-F?",
      description: "Show the field identification characters for -F",
    },
    {
      name: "-g",
      description:
        "Print process group IDs; with a list, select (or, with ^, exclude) those groups",
      args: {
        name: "PGIDs",
        description: "Comma-separated process group IDs, e.g. 123,^456",
        isOptional: true,
      },
    },
    {
      name: "-H",
      description: "Print human readable sizes, e.g. 123.4K",
    },
    {
      name: "-i",
      // below you will find a valiant attempt to codify the following description into generators
      description:
        "Select Internet files, optionally by [46][protocol][@hostname|hostaddr][:service|port]",
      isRepeatable: true,
      args: {
        name: "address",
        isOptional: true,
        generators: [
          {
            script: ["echo"],
            postProcess: function () {
              const startParams = ["4", "6"];
              return startParams.map((param) => ({
                name: param,
              }));
            },
          },
          {
            script: ["echo"],
            postProcess: function (out, tokens) {
              const startParams = ["tcp", "udp", "TCP", "UDP"];
              const token =
                tokens[1].match(/^(-i[46])/) ||
                (tokens[2] && tokens[2].match(/^[46]/));
              const prefix = token && token.length > 0 ? token[1] : "";
              const result = startParams.map((param) => ({
                name: prefix + param,
              }));
              return result;
            },
          },
          {
            script: ["ifconfig"],
            postProcess: function (out, tokens) {
              const ips = out
                .split("\n")
                .filter((line) => line.match(/inet\b/))
                .map((line) => {
                  const parts = line.split(" ");
                  return parts[1];
                });
              let token = "@";
              if (tokens[1].match("@[^:]*$")) {
                token = tokens[1];
              } else if (tokens[2] && tokens[2].match("@[^:]*$")) {
                token = tokens[2];
              }
              const prefix = token.split("@")[0] + "@";
              const result = ips.map((ip) => ({
                name: prefix + ip,
              }));
              return result;
            },
            trigger: "@",
          },
          {
            script: ["echo"],
            postProcess: function (out, tokens) {
              const colonParams = ["http", "https", "who", "time"];
              let token = ":";
              if (tokens[1].match(":[^:]*")) {
                token = tokens[1];
              } else if (tokens[2] && tokens[2].match(":[^:]+")) {
                token = tokens[2];
              }
              const prefix = token.split(":")[0] + ":";

              return colonParams.map((param) => ({
                name: prefix + param,
              }));
            },
            trigger: ":",
          },
        ],
      },
    },
    {
      name: "-J",
      description: "Output a single JSON object with a processes array",
      exclusiveOn: ["-j", "-t"],
    },
    {
      name: "-j",
      description: "Output JSON Lines, one object per open file",
      exclusiveOn: ["-J", "-t"],
    },
    {
      name: "-K",
      description: "Linux: list tasks (threads), or with i ignore them",
      args: {
        name: "mode",
        isOptional: true,
        suggestions: [{ name: "i", description: "Ignore tasks" }],
      },
    },
    {
      name: "-l",
      description: "Inhibit conversion of user IDs to login names",
    },
    {
      name: "+L",
      description:
        "List file link counts, or only files with fewer links than the number (+L1 finds unlinked files)",
      args: {
        isOptional: true,
        name: "number",
      },
    },
    {
      name: "-L",
      description: "Do not list file link counts (default)",
    },
    {
      name: "+m",
      description:
        "Write a mount supplement file to stdout, or read one from the given file (Linux)",
      args: {
        isOptional: true,
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "+M",
      description: "Enable portMap registration",
    },
    {
      name: "-M",
      description: "Disable portMap registration (default)",
    },
    {
      name: "-n",
      description: "No host names",
    },
    {
      name: "-N",
      description: "Select NFS files",
    },
    {
      name: "-o",
      description:
        "List file offset at all times, or with a number set the digits printed after 0t",
      args: {
        isOptional: true,
        name: "digits",
      },
    },
    {
      name: "-O",
      description:
        "Do not fork helper processes that guard against blocking kernel calls (risky)",
    },
    {
      name: "-p",
      description: "Select (or, with ^, exclude) files of the given processes",
      args: {
        name: "PIDs",
        description: "Comma-separated process IDs, e.g. 123,^456",
      },
    },
    {
      name: "-P",
      description: "No port names",
    },
    {
      name: "-Q",
      description:
        "Ignore failed search terms: exit 0 and stay silent when nothing matches",
    },
    {
      name: "+r",
      description:
        "Repeat the listing every t seconds until no files are listed",
      args: {
        name: "t[c<N>][m<fmt>]",
        description:
          "Delay in seconds (default 15), optional repeat limit c<N> and strftime marker format m<fmt>",
        isOptional: true,
      },
    },
    {
      name: "-r",
      description: "Repeat the listing every t seconds forever",
      args: {
        name: "t[c<N>][m<fmt>]",
        description:
          "Delay in seconds (default 15), optional repeat limit c<N> and strftime marker format m<fmt>",
        isOptional: true,
      },
    },
    {
      name: "-R",
      description: "List parent PID",
    },
    {
      name: "-s",
      description:
        "List file size at all times, or select (or, with ^, exclude) TCP or UDP states",
      args: {
        isOptional: true,
        name: "protocol:state",
        description: "E.g. TCP:LISTEN or UDP:^Idle",
      },
    },
    {
      name: "-S",
      description:
        "Timeout in seconds for lstat, readlink and stat kernel calls (minimum 2, default 15)",
      args: {
        isOptional: true,
        name: "timeout",
      },
    },
    {
      name: "-T",
      description:
        "Select TCP/TPI information to report; with no value disable it",
      args: {
        name: "info",
        isOptional: true,
        suggestions: [
          {
            name: "f",
            description:
              "Selects reporting of socket options/states/values and tcp flag values",
          },
          { name: "q", description: "Selects queue length reporting" },
          { name: "s", description: "Selects connection state reporting" },
          { name: "w", description: "Selects window size reporting" },
        ],
      },
    },
    {
      name: "-t",
      description: "Terse output of process IDs only (implies -w)",
      exclusiveOn: ["-J", "-j"],
    },
    {
      name: "-u",
      description: "Select (or, with ^, exclude) files of the given users",
      args: {
        name: "users",
        description: "Comma-separated login names or user IDs",
      },
    },
    {
      name: "-U",
      description: "Select UNIX domain socket files",
    },
    {
      name: "-v",
      description: "List version information",
    },
    {
      name: "-V",
      description: "Report search items that were not found",
    },
    {
      name: "+w",
      description: "Enable warning messages",
    },
    {
      name: "-w",
      description: "Suppress warning messages",
    },
    {
      name: "-x",
      description:
        "Let +d and +D cross file system mount points and symbolic links",
      args: {
        name: "cross-over option",
        isOptional: true,
        suggestions: [
          {
            name: "f",
            description: "File system mount point cross-over processing",
          },
          {
            name: "l",
            description: "Symbolic link cross-over processing",
          },
        ],
      },
    },
    {
      name: "-X",
      description:
        "File descriptor table only on macOS; skip TCP, UDP and UDPLITE files on Linux",
    },
    {
      name: "-Z",
      description:
        "Linux: list SELinux security contexts, or select files by context",
      isRepeatable: true,
      args: {
        name: "context",
        description: "Security context such as A:B:C, *:B:C or A:B:*",
        isOptional: true,
      },
    },
    {
      name: "--",
      description: "End of options, the following arguments are names",
    },
  ],
};

export default completionSpec;
