// visudo v1.9.17p2 (upstream sudo-project/sudo v1.9.17p2 = Apple sudo-114.100.11 shipped in macOS 26, 2026-11-19). Source: plugins/sudoers/visudo.c option table + help() and docs/visudo.mdoc.in from apple-oss-distributions/sudo tag sudo-114.100.11; not run on macOS.
const completionSpec: Fig.Spec = {
  name: "visudo",
  description:
    "Edit the sudoers file safely, which defines the users and groups with administrator rights",
  options: [
    {
      name: ["--check", "-c"],
      description:
        "Check the existing sudoers file (and files it includes) for syntax errors without editing",
    },
    {
      name: ["--file", "-f"],
      description: "Set an alternative sudoers file location",
      args: {
        name: "sudoers",
        description: "Alternate sudoers file location",
        template: "filepaths",
      },
    },
    {
      name: ["--help", "-h"],
      description: "Display a short help message and exit",
    },
    {
      name: ["--no-includes", "-I"],
      description:
        "Do not edit include files unless there is a pre-existing syntax error",
    },
    {
      name: ["--owner", "-O"],
      description: "Enforce the default ownership of the sudoers file",
    },
    {
      name: ["--perms", "-P"],
      description: "Enforce the default permissions of the sudoers file",
    },
    {
      name: ["--quiet", "-q"],
      description:
        "Enable quiet mode (syntax error details are not printed), useful with --check",
    },
    {
      name: ["--strict", "-s"],
      description: "Enable strict checking of the sudoers file",
    },
    {
      name: ["--version", "-V"],
      description: "Display visudo and sudoers grammar versions and exit",
    },
    {
      name: ["--export", "-x"],
      description:
        "Export sudoers in JSON format to the output file (deprecated, use cvtsudoers -f json instead)",
      deprecated: true,
      args: {
        name: "output_file",
        template: "filepaths",
        suggestCurrentToken: true,
      },
    },
  ],
  args: {
    name: "sudoers",
    description:
      "Alternate sudoers file location (can be - with --check to read from standard input)",
    template: "filepaths",
    isOptional: true,
  },
};
export default completionSpec;
