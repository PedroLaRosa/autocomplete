// where zsh builtin (zsh 5.9.2 release tag zsh-5.9.2, 2026-11-19). Source: zsh Doc/Zsh/builtins.yo (zshbuiltins(1)) at zsh-5.9.2 and the option string in Src/builtin.c; equivalent to `whence -ca`, bash has no where.
const completionSpec: Fig.Spec = {
  name: "where",
  description:
    "For each name, indicate how it would be interpreted as a command (equivalent to whence -ca)",
  args: {
    name: "names",
    isVariadic: true,
  },
  options: [
    {
      name: "-w",
      description:
        "For each name, print 'name: word', where 'word' is alias, builtin, command, function, hashed, reserved or none",
    },
    {
      name: "-p",
      description:
        "Do a path search for the name, even if it's an alias, reserved word, function or builtin",
    },
    {
      name: "-m",
      description:
        "The arguments are taken as patterns (pattern characters must be quoted) matched against entries in the command hash table, which is refilled first",
    },
    {
      name: "-s",
      description:
        "If the pathname contains symlinks, print the symlink-free pathname as well",
    },
    {
      name: "-S",
      description:
        "As -s, but if the pathname had to be resolved through multiple symlinks, print the intermediate steps too",
    },
    {
      name: "-x",
      description: "Expand tabs to NUM spaces when outputting shell functions",
      args: { name: "num" },
    },
  ],
};

export default completionSpec;
