// exec shell builtin (bash 5.3 `help exec`, zsh 5.9.2 zshbuiltins(1), 2026-11-19). Source: bash 5.3 builtins/exec.def (bash_5.3.orig.tar.xz) and zsh 5.9.2 Doc/Zsh/grammar.yo + Src/exec.c; not run on macOS
const completionSpec: Fig.Spec = {
  name: "exec",
  description: "Replace the current shell with a program",
  options: [
    {
      name: "-a",
      description: "Pass the given name as the zeroth argument to the command",
      args: {
        name: "name",
      },
    },
    {
      name: "-c",
      description: "Execute the command with an empty environment",
    },
    {
      name: "-l",
      description: "Place a dash in the zeroth argument to the command",
    },
  ],
  args: {
    isCommand: true,
  },
};

export default completionSpec;
