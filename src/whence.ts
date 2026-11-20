// whence zsh builtin (zsh 5.9.2 release tag zsh-5.9.2, 2026-11-19). Source: zsh Doc/Zsh/builtins.yo (zshbuiltins(1)) at zsh-5.9.2 and the option string in Src/builtin.c; bash has no whence.
const completionSpec: Fig.Spec = {
  name: "whence",
  description: "For each name, indicate how it should be interpreted",
  args: {
    name: "names",
    isVariadic: true,
  },
  options: [
    {
      name: "-v",
      description: "Produce verbose output",
    },
    {
      name: "-c",
      description:
        "Print results in a csh-like format (takes precedence over -v)",
    },
    {
      name: "-w",
      description:
        "For each name, print 'name: word', where 'word' is alias, builtin, command, function, hashed, reserved or none (takes precedence over -v and -c)",
    },
    {
      name: "-f",
      description:
        "Display the contents of shell functions (otherwise only shown with -c)",
    },
    {
      name: "-p",
      description:
        "Do a path search for the name, even if it's an alias, reserved word, function or builtin",
    },
    {
      name: "-a",
      description:
        "Search for all occurrences of the name throughout the command path, not only the first (with -m, only names in the command hash table are searched)",
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
      description:
        "Expand tabs to NUM spaces when outputting shell functions with -c",
      args: { name: "num" },
    },
  ],
};

export default completionSpec;
