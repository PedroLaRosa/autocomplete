// wrk v4.2.0 (latest upstream tag, identical to wg/wrk master HEAD a211dd5 of 2021-02-06; matches Homebrew; 2026-11-19).
// Source: wg/wrk 4.2.0 checkout read statically (src/wrk.c usage(), longopts and getopt string; SCRIPTING); the binary was not run.
// Upstream has not changed since 4.2.0; the -T and -L short forms are accepted by the getopt string but not listed in usage().
const completionSpec: Fig.Spec = {
  name: "wrk",
  description: "HTTP benchmarking tool",
  args: [
    {
      name: "url",
      description: "URL to benchmark",
    },
    {
      name: "script args",
      description:
        "Arguments passed to the Lua script (separate them from wrk's arguments with --)",
      isOptional: true,
      isVariadic: true,
    },
  ],
  options: [
    {
      name: ["-c", "--connections"],
      description: "Connections to keep open (default: 10)",
      args: {
        name: "N",
        description: "Number, may include a SI unit (1k, 1M, 1G)",
      },
    },
    {
      name: ["-d", "--duration"],
      description: "Duration of test (default: 10s)",
      args: {
        name: "T",
        description: "Time, may include a unit (2s, 2m, 2h)",
      },
    },
    {
      name: ["-t", "--threads"],
      description: "Number of threads to use (default: 2)",
      args: {
        name: "N",
        description: "Number, may include a SI unit (1k, 1M, 1G)",
      },
    },
    {
      name: ["-s", "--script"],
      description: "Load Lua script file",
      args: {
        name: "S",
        template: "filepaths",
      },
    },
    {
      name: ["-H", "--header"],
      description: "Add header to request",
      isRepeatable: true,
      args: {
        name: "H",
        description: "Header, e.g. 'Name: value'",
      },
    },
    {
      name: ["-L", "--latency"],
      description: "Print latency statistics",
    },
    {
      name: ["-T", "--timeout"],
      description: "Socket/request timeout (default: 2s)",
      args: {
        name: "T",
        description: "Time, may include a unit (2s, 2m, 2h)",
      },
    },
    {
      name: ["-v", "--version"],
      description: "Print version details",
    },
    {
      name: ["-h", "--help"],
      description: "Show usage",
    },
  ],
};

export default completionSpec;
