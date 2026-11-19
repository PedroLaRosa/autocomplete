// su (macOS 15 man page dated 2020-03-26, 2026-11-19). Source: apple-oss-distributions/shell_cmds su/su.1 and su.c getopt string "-flm" (the -c and -s options are compiled out on macOS); read only, not run on macOS.
// Linux (util-linux) su has additional options that are not described here.
const completionSpec: Fig.Spec = {
  name: "su",
  description: "Substitute user identity",
  options: [
    {
      name: "-f",
      description:
        "If the invoked shell is csh, this option prevents it from reading the .cshrc file",
    },
    {
      name: "-l",
      description:
        "Simulate a full login. The environment is discarded except for HOME, SHELL, PATH, TERM, and USER. HOME and SHELL are modified as above. USER is set to the target login. PATH is set to /bin:/usr/bin. TERM is imported from your current environment. The invoked shell is the target login's, and su will change directory to the target login's home directory",
    },
    { name: "-", description: "(No letter) The same as -l" },
    {
      name: "-m",
      description:
        "Leave the environment unmodified. The invoked shell is your login shell, and no directory changes are made. As a security precaution, if the target user's shell is a non-standard shell (as defined by getusershell(3)) and the caller's real uid is non-zero, su will fail",
    },
  ],
  args: [
    { name: "login", isOptional: true },
    {
      name: "args",
      description: "Arguments passed to the login shell of the target login",
      isOptional: true,
      isVariadic: true,
    },
  ],
};

export default completionSpec;
