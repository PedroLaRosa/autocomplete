// login (macOS 15 man page dated 2022-09-29, 2026-11-19). Source: apple-oss-distributions/system_cmds login/login.1 and login.c getopt string "1fh:lpq"; read only, not run on macOS.
// Removed -r (rlogin autologin): it is not in macOS login and is no longer handled by shadow 4.x or util-linux 2.42 login.
const completionSpec: Fig.Spec = {
  name: "login",
  description: "Log into the computer",
  options: [
    {
      name: "-p",
      description: "Preserve environment",
    },
    {
      name: "-h",
      description:
        "Specify the host from which the connection was received. Can only be used by the super-user",
      args: {
        name: "host",
      },
    },
    {
      name: "-f",
      description:
        "Don't authenticate user, user is preauthenticated. Can only be used by the super-user or when logging in as oneself",
    },
    {
      name: "-l",
      description:
        "Do not mark the program as a login session and do not change to the user's home directory",
    },
    {
      name: "-q",
      description: "Force a quiet login, as if a .hushlogin file is present",
    },
  ],
  args: [
    {
      name: "username",
      isOptional: true,
      generators: {
        script: ["cat", "/etc/passwd"],
        postProcess: (out) => {
          return out
            .split("\n")
            .filter((line) => line.trim() !== "" && !line.startsWith("#"))
            .map((line) => {
              const [username] = line.split(":");
              return {
                name: username,
                icon: "👤",
              };
            });
        },
      },
    },
    {
      name: "prog",
      description: "Program to run instead of the user's shell (with -f)",
      isOptional: true,
      template: "filepaths",
    },
    {
      name: "args",
      description: "Arguments for the program (with -f)",
      isOptional: true,
      isVariadic: true,
    },
  ],
};
export default completionSpec;
