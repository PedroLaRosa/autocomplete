// ps (macOS 15 BSD ps, Darwin 24.5, 2026-11-19). Source: `man ps` and `ps -L`
// on macOS 15; Linux procps-ng options the spec already had are kept.

// ponytail: static list from macOS `ps -L`; on Linux `-L` shows threads, so no generator
const keywords = (
  "%cpu %mem acflag acflg args blocked comm command cpu cputime etime f flags " +
  "gid group inblk inblock jobc ktrace ktracep lim login logname lstart majflt " +
  "minflt msgrcv msgsnd ni nice nivcsw nsignals nsigs nswap nvcsw nwchan oublk " +
  "oublock p_ru paddr pagein pcpu pending pgid pid pmem ppid pri prsna pstime " +
  "putime re rgid rgroup rss ruid ruser sess sig sigmask sl start stat state " +
  "stime svgid svuid tdev time tpgid tsess tsiz tt tty ucomm uid upr user " +
  "usrpri utime vsize vsz wchan wq wqb wql wqr xstat"
)
  .split(" ")
  .map((name) => ({ name }));

const formatArg: Fig.Arg = {
  name: "format",
  generators: { getQueryTerm: ",", custom: async () => keywords },
};

const completionSpec: Fig.Spec = {
  name: "ps",
  description: "Report a snapshot of the current processes",
  options: [
    { name: ["-A", "-e"], description: "Select all processes" },
    {
      name: "-a",
      description:
        "Select other users' processes too, skipping those without a controlling terminal unless -x is given",
    },
    {
      name: "-C",
      description:
        "Use a raw CPU calculation that ignores resident time (Linux: select by command name)",
      args: { name: "cmdlist", isOptional: true },
    },
    {
      name: "-c",
      description:
        "Show only the executable name in the command column (Linux: show scheduler info for -l)",
    },
    {
      name: "-d",
      description: "Select all processes except session leaders",
    },
    {
      name: "--deselect",
      description:
        "Select all processes except those that fulfill the specified conditions",
    },
    {
      name: "-E",
      description: "Display the environment as well",
    },
    {
      name: "-G",
      description: "Select by real group ID",
      args: { name: "gidlist" },
    },
    {
      name: "-g",
      description:
        "Select by process group leader (Linux: by session or effective group name)",
      args: { name: "grplist" },
    },
    {
      name: "-N",
      description:
        "Select all processes except those that fulfill the specified conditions (negates the selection)",
    },
    {
      name: ["-p", "--pid"],
      description: "Select by process ID",
      args: { name: "pidlist" },
    },
    {
      name: "--ppid",
      description:
        "Select by parent process ID. This selects the processes with a parent process ID in pidlist",
      args: { name: "pidlist" },
    },
    {
      name: "--sid",
      description: "Select by session ID",
      args: { name: "sesslist" },
    },
    {
      name: ["-t", "--tty"],
      description: "Select by terminal",
      args: { name: "ttylist" },
    },
    {
      name: "-T",
      description:
        "Select processes attached to standard input's terminal (Linux: show threads with SPID column)",
    },
    {
      name: "U",
      description: "Select by effective user ID (EUID) or name",
      args: { name: "userlist" },
    },
    {
      name: "-U",
      description: "Select by real user ID (RUID) or name",
      args: { name: "userlist" },
    },
    {
      name: "-u",
      description: "Select by effective user ID (EUID) or name",
      args: { name: "userlist" },
    },
    {
      name: "--User",
      description: "Select by real user ID (RUID) or name",
      args: { name: "userlist" },
    },
    {
      name: "--user",
      description: "Select by effective user ID (EUID) or name",
      args: { name: "userlist" },
    },
    {
      name: "-X",
      description: "Skip processes without a controlling terminal",
    },
    {
      name: "-x",
      description: "Include processes without a controlling terminal",
    },
    {
      name: "--context",
      description: "Display security context format (for SE Linux)",
    },
    { name: "-f", description: "Do full-format listing" },
    { name: "-F", description: "Extra full format" },
    {
      name: "-j",
      description:
        "Jobs format: user, pid, ppid, pgid, sess, jobc, state, tt, time and command",
    },
    { name: "-l", description: "Long format" },
    {
      name: "-y",
      description: "Do not show flags; show rss in place of addr (with -l)",
      dependsOn: ["-l"],
    },
    {
      name: "-v",
      description:
        "Virtual memory format: pid, state, time, sl, re, pagein, vsz, rss, lim, tsiz, %cpu, %mem and command",
    },
    {
      name: ["--format", "-o", "o"],
      description: "Display the given comma-separated keywords",
      args: formatArg,
      isRepeatable: true,
    },
    {
      name: "-O",
      description: "Add the given keywords after the PID in the default format",
      args: formatArg,
    },
    {
      name: "-L",
      description:
        "List the keywords for -o and -O (Linux: show threads with LWP and NLWP columns)",
    },
    {
      name: "-M",
      description:
        "Print the threads of each task (Linux: add a security data column, same as Z)",
    },
    { name: "Z", description: "Add a column of security data (for SE Linux)" },
    {
      name: "-m",
      description: "Sort by memory usage (Linux: show threads after processes)",
    },
    { name: "-r", description: "Sort by current CPU usage" },
    {
      name: "--sort",
      description: "Specify sorting order",
      args: { name: "spec" },
    },
    {
      name: "--cols",
      description: "Set screen width",
      args: { name: "n" },
    },
    {
      name: "--columns",
      description: "Set screen width",
      args: { name: "n" },
    },
    {
      name: "--width",
      description: "Set screen width",
      args: { name: "n" },
    },
    {
      name: "-w",
      description: "Use 132 columns; repeat for unlimited width",
      isRepeatable: true,
    },
    {
      name: "--cumulative",
      description:
        "Include some dead child process data (as a sum with the parent)",
    },
    {
      name: "-S",
      description: "Sum the CPU time of exited children into their parent",
    },
    { name: "--forest", description: "ASCII art process tree" },
    { name: "-H", description: "Show process hierarchy (forest)" },
    {
      name: ["-h", "--headers"],
      description: "Repeat header lines, one per page of output",
    },
    {
      name: "-n",
      description: "Set namelist file",
      args: { name: "namelist" },
    },
    {
      name: "--lines",
      description: "Set screen height",
      args: { name: "n" },
    },
    {
      name: ["--no-headers", "--no-heading"],
      description: "Print no header line at all",
    },
    {
      name: "--rows",
      description: "Set screen height",
      args: { name: "n" },
    },
    { name: "--help", description: "Print a help message" },
    { name: "--info", description: "Print debugging info" },
    { name: "--version", description: "Print the procps version" },
  ],
};

export default completionSpec;
