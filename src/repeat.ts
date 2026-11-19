// repeat zsh reserved word (zsh 5.9.2 release tag zsh-5.9.2, 2026-11-19). Source: zsh Doc/Zsh/grammar.yo (zshmisc(1)) at zsh-5.9.2.
// Syntax: repeat word do list done, or the short form `repeat word sublist`; bash has no repeat keyword.
const completionSpec: Fig.Spec = {
  name: "repeat",
  description:
    "Interpret the result as a number and repeat the commands this many times",
  args: [
    {
      name: "count",
      description:
        "Word expanded and evaluated as an arithmetic expression giving the number of repetitions",
    },
    {
      isCommand: true,
    },
  ],
};

export default completionSpec;
