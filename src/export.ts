// export shell builtin (bash 5.3 `help export`, zsh 5.9.2 zshbuiltins(1), 2026-11-19). Source: bash 5.3 builtins/setattr.def (bash_5.3.orig.tar.xz) and zsh 5.9.2 Doc/Zsh/builtins.yo + Src/builtin.c option table; not run on macOS
const completionSpec: Fig.Spec = {
  name: "export",
  description: "Export variables",
  hidden: true,
  options: [
    {
      name: "-f",
      description: "Refer to shell functions",
    },
    {
      name: "-n",
      description: "Remove the export property from each name (bash)",
    },
    {
      name: "-p",
      description: "Display a list of all exported variables or functions",
    },
  ],
  args: {
    name: "name[=value]",
    description:
      "Variable to mark for export to the environment, optionally with a value to assign",
    isVariadic: true,
  },
};

export default completionSpec;
