// noglob zsh precommand modifier (zsh 5.9.2 zshmisc(1) 'Precommand Modifiers', 2026-11-19). Source: zsh 5.9.2 Doc/Zsh/grammar.yo (git tag zsh-5.9.2); not run on macOS. Spec unchanged: it already matches the docs
const completionSpec: Fig.Spec = {
  name: "noglob",
  description: "ZSH pre-command modifier that disables glob expansion",
  hidden: true,
  args: {
    isCommand: true,
  },
};

export default completionSpec;
