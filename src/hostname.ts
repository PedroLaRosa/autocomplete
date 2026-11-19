// hostname (macOS BSD hostname from Apple OSS shell_cmds-329, man page dated 2020-10-05, 2026-11-19). Source: apple-oss-distributions/shell_cmds hostname/hostname.1 + hostname.c (usage: hostname [-f] [-s | -d] [name-of-host]). Not run on macOS.
const completionSpec: Fig.Spec = {
  name: "hostname",
  description: "Set or print name of current host system",
  options: [
    {
      name: "-f",
      description:
        "Include domain information in the printed name (default behavior)",
    },
    {
      name: "-s",
      description: "Trim off any domain information from the printed name",
      exclusiveOn: ["-d"],
    },
    {
      name: "-d",
      description: "Only print domain information",
      exclusiveOn: ["-s"],
    },
  ],
  args: {
    name: "hostname",
    description:
      "Set the hostname (super-user only); use `scutil --set HostName` to keep it between reboots",
    isOptional: true,
  },
};
export default completionSpec;
