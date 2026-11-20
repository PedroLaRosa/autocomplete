// source shell builtin (bash 5.3 `help source`, zsh 5.9.2 zshbuiltins(1), 2026-11-19). Source: bash 5.3 builtins/source.def (bash_5.3.orig.tar.xz) and zsh 5.9.2 Doc/Zsh/builtins.yo + Src/builtin.c (bin_dot); not run on macOS. The `.` alias is not covered here
const completionSpec: Fig.Spec = {
  name: "source",
  description: "Execute commands from a file in the current shell",
  options: [
    {
      name: "-p",
      description:
        "Search the colon-separated list of directories in path for the file instead of $PATH (bash 5.3)",
      args: {
        name: "path",
      },
    },
  ],
  args: [
    {
      name: "filename",
      description: "File to read and execute commands from",
      template: "filepaths",
    },
    {
      name: "arguments",
      description:
        "Arguments that become the positional parameters while the file runs",
      isOptional: true,
      isVariadic: true,
    },
  ],
};

export default completionSpec;
