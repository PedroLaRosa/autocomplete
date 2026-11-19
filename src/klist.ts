// klist (Apple Heimdal Kerberos klist, apple-oss-distributions/Heimdal tag Heimdal-710.100.4 shipped in macOS 26, 2026-11-19). Source: kuser/kcc-commands.in (klist option table), kuser/klist.c and kuser/klist.1; not run on macOS.
const completionSpec: Fig.Spec = {
  name: "klist",
  description:
    "Reads and displays the current tickets in the credential cache (also known as the ticket file)",
  options: [
    {
      name: "-c",
      description: "Credential cache to list",
      args: {
        name: "cache",
      },
    },
    {
      name: "--cache",
      description: "Credential cache to list",
      requiresSeparator: true,
      args: {
        name: "cache",
      },
    },
    {
      name: ["-s", "-t", "--test"],
      description:
        "Test for there being an active and valid TGT for the local realm of the user in the credential cache",
    },
    {
      name: ["-T", "--tokens"],
      description: "Display AFS tokens",
    },
    {
      name: ["-5", "--v5"],
      description: "Display v5 cred cache (this is the default)",
    },
    {
      name: "-f",
      description:
        "Include ticket flags in short form, each character stands for a specific flag",
    },
    {
      name: ["-v", "--verbose"],
      description: "Verbose output. Include all possible information",
    },
    {
      name: ["-A", "--all-content"],
      description: "List all caches with their content",
    },
    {
      name: ["-l", "--list-all"],
      description:
        "List the credential caches for the current users, not all cache types supports listing multiple caches",
    },
    {
      name: "--json",
      description: "JSON formatted output",
    },
    {
      name: "--hidden",
      description: "Include hidden credential cache configuration entries",
    },
    {
      name: ["-a", "-n"],
      description: "Undocumented, same as --verbose",
      hidden: true,
    },
    {
      name: "--version",
      description: "Print version and exit",
    },
    {
      name: "--help",
      description: "Print usage and exit",
    },
  ],
};
export default completionSpec;
