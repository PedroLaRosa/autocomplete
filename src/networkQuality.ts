// networkQuality (macOS 15.5 built-in, 2026-11-19). Source: `networkQuality -h` and man networkQuality(8)
const completionSpec: Fig.Spec = {
  name: "networkQuality",
  description: "Measure the different aspects of network quality",
  options: [
    {
      name: "-h",
      description: "Show help for networkQuality",
    },
    {
      name: "-B",
      description: "Run against specified Bonjour instance",
      args: {
        name: "bonjour instance",
      },
    },
    {
      name: "-b",
      description: "Show Bonjour advertised networkQuality servers",
    },
    {
      name: "-C",
      description: "Override configuration URL or path (with scheme file://)",
      args: {
        name: "configuration_url",
      },
    },
    {
      name: "-c",
      description:
        "Produce computer-readable output (JSON), to STDOUT unless a filename is given",
      args: {
        name: "filename",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "-d",
      description: "Do not run a download test (implies -s)",
    },
    {
      name: "-f",
      description: "Enforce protocol selections (comma-separated list)",
      args: {
        name: "protocols",
        suggestions: [
          { name: "h1", description: "Force-enable HTTP/1.1" },
          { name: "h2", description: "Force-enable HTTP/2" },
          { name: "h3", description: "Force-enable HTTP/3 (QUIC)" },
          { name: "L4S", description: "Force-enable L4S" },
          { name: "noL4S", description: "Force-disable L4S" },
        ],
      },
    },
    {
      name: "-I",
      description: "Bind test to interface",
      args: {
        name: "interface",
        generators: {
          script: ["networksetup", "-listallhardwareports"],
          postProcess: (out) => {
            const suggestions: Fig.Suggestion[] = [];
            const re = /^Hardware Port: (.*?)\n.*?Device: (.*?)$/gms;
            for (const match of out.matchAll(re)) {
              suggestions.push({ name: match[2], description: match[1] });
            }
            return suggestions;
          },
        },
      },
    },
    {
      name: "-k",
      description: "Disable certificate validation",
    },
    {
      name: "-p",
      description: "Use iCloud Private Relay",
    },
    {
      name: "-r",
      description:
        "Connect to host or IP, overriding DNS for initial config request",
      args: {
        name: "host",
      },
    },
    {
      name: "-S",
      description:
        "Start and run server on specified port. Other specified options ignored",
      args: {
        name: "port",
      },
    },
    {
      name: "-s",
      description: "Run tests sequentially instead of parallel upload/download",
    },
    {
      name: "-u",
      description: "Do not run an upload test (implies -s)",
    },
    {
      name: "-v",
      description: "Verbose output",
    },
  ],
};
export default completionSpec;
