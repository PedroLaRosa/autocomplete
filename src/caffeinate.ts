// caffeinate(8) from macOS (Xcode 27.3 beta 2 man page mirror keith/xcode-man-pages, 2026-11-19; caffeinate.8 itself is dated 2012-11-09). Source: man page and
// caffeinate.c from apple-oss-distributions/PowerManagement tag PowerManagement-1846.120.8.0.1 (2026-06-05), read statically (macOS tool, not run on macOS).
// The getopt string in caffeinate.c is "mdhisut:w:": -h is accepted but undocumented (prints usage), everything else matches the man page.
const completionSpec: Fig.Spec = {
  name: "caffeinate",
  description: "Prevent the system from sleeping on behalf of a utility",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      name: "-d",
      description: "Create an assertion to prevent the display from sleeping",
    },
    {
      name: "-i",
      description:
        "Create an assertion to prevent the system from idle sleeping",
    },
    {
      name: "-m",
      description: "Create an assertion to prevent the disk from idle sleeping",
    },
    {
      name: "-s",
      description:
        "Create an assertion to prevent the system from sleeping. This assertion is valid only when system is running on AC power",
    },
    {
      name: "-u",
      description:
        "Create an assertion to declare that user is active. If the display is off, this option turns the display on and prevents the display from going into idle sleep. If a timeout is not specified with '-t' option, then this assertion is taken with a default of 5 second timeout",
    },
    {
      name: "-t",
      description:
        "Specifies the timeout value in seconds for which this assertion has to be valid. The assertion is dropped after the specified timeout. Timeout value is not used when an utility is invoked with this command",
      args: {
        name: "timeout",
        description: "Timeout in seconds",
      },
    },
    {
      name: "-w",
      description:
        "Waits for the process with the specified pid to exit. Once the process exits, the assertion is also released. This option is ignored when used with utility option",
      args: {
        name: "pid",
        description: "Process ID to wait for",
      },
    },
    {
      name: "-h",
      description: "Print usage (undocumented)",
      hidden: true,
    },
  ],
  args: {
    name: "utility",
    description:
      "Command to run while the assertions are held (they are released when it exits)",
    isCommand: true,
    isOptional: true,
  },
};
export default completionSpec;
