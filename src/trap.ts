// trap shell builtin (bash 5.3 `help trap`, zsh 5.9.2 zshbuiltins(1), 2026-11-19). Source: bash 5.3 builtins/trap.def (bash_5.3.orig.tar.xz) and zsh 5.9.2 Doc/Zsh/builtins.yo + Src/builtin.c (bin_trap); not run on macOS
/*
 * Certain shells output signals as "1) SIGHUP 2) SIGINT 3) SIGQUIT" (bash, zsh, ...)
 * Other shells output looks like "HUP INT QUIT" (fish, csh, ...)
 */
const re = /(\d+\)\s)?([\w-+]+)/g;

/*
 * Generators
 */

const availableSignalsGenerator = (
  suggestOptions?: Partial<Fig.Suggestion>
): Fig.Generator => ({
  script: ["command", "kill", "-l"],
  postProcess: (output) =>
    [...output.matchAll(re)].map((signal) => ({
      name: signal[2],
    })),
});

const completionSpec: Fig.Spec = {
  name: "trap",
  description:
    "Automatically execute commands after receiving signals by processes or the operating system",
  options: [
    {
      name: "-l",
      description:
        "Print a list of signal names and their corresponding numbers (bash)",
    },
    {
      name: "-p",
      description:
        "Display the trap commands associated with each signal in a form that may be reused as shell input (bash)",
    },
    {
      name: "-P",
      description:
        "Display the trap commands associated with each signal; at least one signal must be given (bash 5.3)",
    },
    {
      name: "--help",
      description: "Display help about using this command (bash)",
    },
  ],
  args: [
    {
      name: "action",
      description:
        "Command to run when a signal is received; '-' resets the signals to their defaults and an empty string ignores them",
      isOptional: true,
    },
    {
      name: "signal",
      description: "Signal name or number, or a pseudo-signal",
      isVariadic: true,
      generators: availableSignalsGenerator(),
      suggestions: [
        {
          name: "EXIT",
          description: "Run on exit from the shell (same as 0)",
        },
        {
          name: "DEBUG",
          description: "Run before every simple command",
        },
        {
          name: "RETURN",
          description:
            "Run each time a function or a sourced script finishes (bash)",
        },
        {
          name: "ERR",
          description:
            "Run each time a command fails (bash: when it would exit the shell under set -e; zsh: alias for ZERR)",
        },
        {
          name: "ZERR",
          description:
            "Run after each command with a nonzero exit status (zsh)",
        },
      ],
    },
  ],
};
export default completionSpec;
