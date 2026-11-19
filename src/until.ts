// until shell reserved word (zsh 5.9.2 release tag zsh-5.9.2, bash `help until` from bash 5.2.21; bash 5.3 not available here, 2026-11-19).
// Source: zsh Doc/Zsh/grammar.yo (zshmisc(1)) at zsh-5.9.2 and bash `help until`. Syntax: until list; do list; done (zsh also accepts `until list { list }`).
const completionSpec: Fig.Spec = {
  name: "until",
  description: "Repeat a command until this is true",
  args: {
    isCommand: true,
  },
};

export default completionSpec;
