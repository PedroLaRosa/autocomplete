// killall (macOS BSD, man page dated 2020-06-27, 2026-11-19). Source: apple-oss-distributions/shell_cmds tag shell_cmds-329 killall/killall.1 + killall/killall.c (getopt "c:dehIlmqst:u:vz", -help, -SIGNAL parsing, sys_signame list); man page and source only, not run on macOS. Changes: option descriptions refreshed from the man page, -s/-d/-v semantics corrected, -m marked dangerous, process generator no longer lists the ps header. -j (jail) is FreeBSD only and is not listed. The signal option accepts a name with or without SIG (case-insensitive) or a number; the spec lists the macOS signal names as -SIG<NAME> (TERM, the default, is omitted).
// Linux incompatible

const signals = [
  "hup",
  "int",
  "quit",
  "ill",
  "trap",
  "abrt",
  "emt",
  "fpe",
  "kill",
  "bus",
  "segv",
  "sys",
  "pipe",
  "alrm",
  // This is the default signal
  // "term",
  "urg",
  "stop",
  "tstp",
  "cont",
  "chld",
  "ttin",
  "ttou",
  "io",
  "xcpu",
  "xfsz",
  "vtalrm",
  "prof",
  "winch",
  "info",
  "usr1",
  "usr2",
];

const completionSpec: Fig.Spec = {
  name: "killall",
  description: "Kill processes by name",
  args: {
    name: "process_name",
    isVariadic: true,
    generators: {
      // All processes, only display the path
      script: ["bash", "-c", "ps -A -o comm= | sort -u"],
      postProcess: (out) =>
        out
          .trim()
          .split("\n")
          .map((path) => {
            const appExtIndex = path.indexOf(".app/");
            const isApp = appExtIndex !== -1;
            const name = path.slice(path.lastIndexOf("/") + 1);
            const nameChars = new Set(name);
            const badChars = ["(", "_", "."];
            return {
              name,
              description: path,
              priority:
                !badChars.some((char) => nameChars.has(char)) && isApp
                  ? 51
                  : 40,
              icon: isApp
                ? "fig://" + path.slice(0, appExtIndex + 4)
                : "fig://icon?type=gear",
            };
          }),
    },
  },
  options: [
    {
      name: "-d",
      description:
        "Be more verbose about what will be done, but do not send any signal; shows the number of user processes and the real user ID",
    },
    {
      name: "-e",
      description:
        "Use the effective user ID instead of the (default) real user ID for matching processes specified with -u",
    },
    {
      name: "-help",
      description: "Give help on the command usage and exit",
    },
    {
      name: "-I",
      description:
        "Request confirmation before attempting to signal each process",
    },
    {
      name: "-l",
      description: "List the names of the available signals and exit",
    },
    {
      name: "-m",
      description:
        "Match the process name as a (case sensitive) regular expression; dangerous, a single dot matches any process running under your real UID",
      isDangerous: true,
    },
    {
      name: "-v",
      description: "Be verbose about what will be done",
    },
    {
      name: "-s",
      description: "Same as -v, but do not send any signal",
    },
    ...signals.map((signal) => ({
      name: "-SIG" + signal.toUpperCase(),
      description: `Send ${signal.toUpperCase()} instead of TERM`,
    })),
    {
      name: "-u",
      description:
        "Limit potentially matching processes to those belonging to the specified user",
      args: {
        name: "user",
        generators: {
          script: ["bash", "-c", "dscl . -list /Users | grep -v '^_'"],
          postProcess: (out) =>
            out
              .trim()
              .split("\n")
              .map((username) => ({
                name: username,
                icon: "fig://template?badge=👤",
              })),
        },
      },
    },
    {
      name: "-t",
      description:
        "Limit potentially matching processes to those running on the specified tty",
      args: {
        name: "tty",
      },
    },
    {
      name: "-c",
      description:
        "Limit potentially matching processes to those matching the specified process name",
      args: {
        name: "name",
      },
    },
    {
      name: "-q",
      description: "Suppress error message if no processes are matched",
    },
    {
      name: "-z",
      description:
        "Do not skip zombies (only affects error messages for matching zombie processes)",
    },
  ],
};
export default completionSpec;
