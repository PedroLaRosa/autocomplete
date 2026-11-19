// command shell builtin (bash 5.3 and zsh 5.9.2, the current stable releases per Homebrew formulae, 2026-11-19). Source: bash 5.3 builtins/command.def (bash_5.3.orig.tar.xz) and zsh 5.9.2 Doc/Zsh/builtins.yo + Src/exec.c; not run on macOS. fish's `command` was not checked
const completionSpec: Fig.Spec = {
  name: "command",
  description: "Run an external command",
  // Only the options shared by bash and zsh are listed (-p, -v, -V).
  // generateSpec doesn't have a `context` object to get the process.
  options: [
    {
      name: "-p",
      description:
        "Use a default PATH that is guaranteed to find all of the standard utilities",
    },
    {
      name: "-v",
      description:
        "Print a single word indicating the command or file that would be run",
    },
    {
      name: "-V",
      description: "Print a more verbose description of each command",
    },
  ],
  args: {
    isCommand: true,
  },
};

export default completionSpec;
