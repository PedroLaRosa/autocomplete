// time shell reserved word (zsh 5.9.2 release tag zsh-5.9.2, bash `help time` from bash 5.2.21; bash 5.3 not available here, 2026-11-19).
// Source: zsh Doc/Zsh/grammar.yo (zshmisc(1)) at zsh-5.9.2, bash `help time` and a local `bash -c time`/`time -p --` run. Not the external /usr/bin/time program.
const completionSpec: Fig.Spec = {
  name: "time",
  description:
    "Time how long a command takes, reporting real, user and system time",
  options: [
    {
      name: "-p",
      description:
        "Print the timing summary in the portable POSIX format (bash; zsh has no options)",
    },
  ],
  args: {
    name: "pipeline",
    description:
      "Pipeline to time (if omitted, the shell process and its children are reported)",
    isCommand: true,
    isOptional: true,
  },
};

export default completionSpec;
