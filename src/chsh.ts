// chsh (macOS 15.5 chpass, man page dated 2021-05-25; util-linux v2.42.4, 2026-11-19). Source: `man chsh`
// on macOS 15 and util-linux login-utils/chsh.c (master). -l and -u mean different things on each OS.

// ponytail: /etc/shells is what both macOS and util-linux `chsh -l` read; `chsh -l` fails on macOS
const shells: Fig.Generator = {
  script: ["cat", "/etc/shells"],
  postProcess: (output) =>
    output
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .map((shell) => ({ name: shell })),
};

const completionSpec: Fig.Spec = {
  name: "chsh",
  description: "Change your login shell",
  options: [
    {
      name: ["-s", "--shell"],
      description: "Specify login shell",
      args: {
        name: "shell",
        generators: shells,
      },
    },
    {
      name: "-l",
      description:
        "Edit the user record on the directory node at this location (macOS); print list of shells and exit (Linux)",
      args: {
        name: "location",
        isOptional: true,
      },
    },
    {
      name: "--list-shells",
      description: "Print list of shells and exit (Linux)",
    },
    {
      name: "-u",
      description:
        "User name to authenticate to the directory node with (macOS); deprecated alias of --help (Linux)",
      args: {
        name: "authname",
        isOptional: true,
      },
    },
    {
      name: ["-h", "--help"],
      description: "Print help message and exit (Linux)",
    },
    {
      name: ["-V", "--version"],
      description: "Print version and exit (Linux)",
    },
    {
      name: "-v",
      description: "Print version and exit (Linux)",
      deprecated: { description: "Use -V" },
    },
  ],
  args: {
    name: "user",
    description: "Target user (Linux also accepts a UID)",
    isOptional: true,
  },
};
export default completionSpec;
