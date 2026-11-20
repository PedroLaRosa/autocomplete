// do shell reserved word (bash 5.3 bash(1) "Compound Commands" man page from Ubuntu bash 5.3-2ubuntu1, zsh 5.9.2 Doc/Zsh/grammar.yo at tag zsh-5.9.2, 2026-11-19).
// Source: bash 5.3 man page text and zsh 5.9.2 source docs read, not run (bash 5.2.21 `help for`/`help if` run locally; 5.3 binary not executed, zsh and macOS not run).
const completionSpec: Fig.Spec = {
  name: "do",
  description: "Start the body of a for, while, until or select loop",
  args: {
    isCommand: true,
  },
};

export default completionSpec;
