// kill (macOS BSD, man page dated 2016-10-03, 2026-11-19). Source: apple-oss-distributions/shell_cmds tag shell_cmds-329 kill/kill.1 + kill/kill.c (usage string and argument parsing); man page and source only, not run on macOS. Changes: added the documented `-signal_name` / `-signal_number` forms (commonly used signals from the man page), descriptions refreshed.
// Compatibility: macOS

// Commonly used signals listed in kill(1): number, name, description
const commonSignals: [number, string, string][] = [
  [1, "HUP", "hang up"],
  [2, "INT", "interrupt"],
  [3, "QUIT", "quit"],
  [6, "ABRT", "abort"],
  [9, "KILL", "non-catchable, non-ignorable kill"],
  [14, "ALRM", "alarm clock"],
  [15, "TERM", "software termination signal"],
];

function processIcon(path: string): string {
  const idx = path.indexOf(".app/");
  if (idx === -1) {
    return "fig://icon?type=gear";
  }
  return "fig://" + path.slice(0, idx + 4);
}

const completionSpec: Fig.Spec = {
  name: "kill",
  description: "Terminate or signal a process",
  args: {
    name: "pid",
    isVariadic: true,
    generators: {
      script: ["bash", "-c", "ps axo pid,comm | sed 1d"],
      postProcess: (result: string) => {
        return result.split("\n").map((line) => {
          const [pid, path] = line.trim().split(/\s+/);
          const name = path.slice(path.lastIndexOf("/") + 1);
          return {
            name: pid,
            description: path,
            displayName: `${pid} (${name})`,
            icon: processIcon(path),
          };
        });
      },
    },
  },
  options: [
    {
      name: "-s",
      description:
        "A symbolic signal name specifying the signal to be sent instead of the default TERM",
      args: {
        name: "signal_name",
        generators: {
          // Bash's `kill` builtin has different output to /bin/kill
          script: ["env", "kill", "-l"],
          postProcess: (out) =>
            out.match(/\w+/g)?.map((name) => ({
              name,
              description: `Send ${name} instead of TERM`,
              icon: "fig://icon?type=string",
            })),
        },
      },
    },
    {
      name: "-l",
      description:
        "If no operand is given, list the signal names; otherwise, write the signal name corresponding to exit_status",
      args: {
        name: "exit_status",
        isOptional: true,
      },
    },
    ...commonSignals.map(([number, name, description]) => ({
      name: [`-${name}`, `-${number}`],
      description:
        name === "TERM"
          ? `Send TERM (${description}), the default`
          : `Send ${name} (${description}) instead of TERM`,
    })),
  ],
};

export default completionSpec;
