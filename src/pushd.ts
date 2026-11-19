// pushd shell builtin (bash 5.3 `help pushd`, zsh 5.9.2 zshbuiltins(1), 2026-11-19). Source: bash 5.3 builtins/pushd.def (bash_5.3.orig.tar.xz) and zsh 5.9.2 Doc/Zsh/builtins.yo + Src/builtin.c option table; not run on macOS. zsh's `pushd old new` substitution form is not modelled
const completionSpec: Fig.Spec = {
  name: "pushd",
  description:
    "Change the current directory, and push the old current directory onto the directory stack",
  options: [
    {
      name: "-n",
      description:
        "Suppress the normal change of directory when adding directories to the stack, so only the stack is manipulated (bash)",
    },
    {
      name: "-q",
      description:
        "Don't call the chpwd hook functions and don't print the directory stack (zsh)",
    },
    {
      name: "-s",
      description: "Refuse to change to a path that contains symlinks (zsh)",
    },
    {
      name: "-L",
      description:
        "Retain symbolic links in the directory rather than resolving them (zsh)",
    },
    {
      name: "-P",
      description: "Resolve symbolic links to their true values (zsh)",
    },
  ],
  args: {
    name: "dir",
    description:
      "Directory to add to the stack, or +N / -N to rotate the stack so that the Nth entry (from the left / right of the `dirs` list, starting at zero) is on top",
    isOptional: true,
    template: "folders",
  },
};

export default completionSpec;
