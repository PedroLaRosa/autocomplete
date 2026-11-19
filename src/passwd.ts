// passwd (macOS 15 man page dated 2008-08-18, 2026-11-19). Source: apple-oss-distributions/system_cmds passwd/passwd.1 and passwd.c getopt string "i:l:u:"; read only, not run on macOS.
// Added the optional user argument; the options themselves were already correct. Linux passwd (shadow) has a different option set and is not described here.
const generateUsers: Fig.Generator = {
  script: ["bash", "-c", "dscl . -list /Users | grep -E -v '^_'"],
  postProcess: (out) =>
    out
      .trim()
      .split("\n")
      .map((name) => ({ name, icon: "👤" })),
};

const completionSpec: Fig.Spec = {
  name: "passwd",
  description: "Modify a user's password",
  options: [
    {
      name: "-i",
      description: "Specify where the password update should be applied",
      args: {
        name: "infosystem",
        description: "The directory system",
        suggestions: [
          { name: "PAM", description: "Pluggable Authentication Modules" },
          {
            name: "opendirectory",
            description: "A system conforming to Open Directory APIs",
          },
          { name: "file", description: "The local flat-files" },
          { name: "nis", description: "A remote NIS server" },
        ],
      },
    },
    {
      name: "-l",
      description:
        "Causes the password to be updated in the given location of the chosen directory system",
      args: {
        name: "location",
        description:
          "A file name for file, a NIS domain name for nis, a directory node name for opendirectory",
        template: ["filepaths", "folders"],
      },
    },
    {
      name: "-u",
      description:
        "Specify the user name to use when authenticating to the directory node",
      args: {
        name: "authname",
        description: "The user name",
        generators: generateUsers,
      },
    },
  ],
  args: {
    name: "user",
    description: "The user account whose password will be changed",
    isOptional: true,
    generators: generateUsers,
  },
};

export default completionSpec;
