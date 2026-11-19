// Locust v2.47.0 (PyPI latest, 2026-11-19). Source: locust/argument_parser.py at tag 2.47.0

const file = (name = "filename"): Fig.Arg => ({ name, template: "filepaths" });
const int = (name = "int"): Fig.Arg => ({ name });
const tags = (name: string[], description: string): Fig.Option => ({
  name,
  description,
  args: { name: "tag", isVariadic: true },
});

const completionSpec: Fig.Spec = {
  name: "locust",
  description:
    "Locust is an easy to use, scriptable and scalable Python-based performance testing tool",
  args: {
    name: "UserClass",
    description:
      "User classes to use (list them with --list). Default is to use all available User classes",
    isVariadic: true,
    isOptional: true,
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Show this help message and exit",
    },
    {
      name: ["-f", "--locustfile"],
      description:
        "The Python file or module that contains your test. Accepts multiple comma-separated .py files, a package name/directory or a url to a remote locustfile. Defaults to 'locustfile.py'",
      args: file(),
    },
    {
      name: "--config",
      description: "File to read additional configuration from",
      args: file(),
    },
    {
      name: ["-H", "--host"],
      description:
        "Host to load test, in the following format: https://www.example.com",
      args: { name: "base url" },
    },
    {
      name: ["-u", "--users"],
      description:
        "Peak number of concurrent Locust users. Primarily used together with --headless or --autostart",
      args: int(),
    },
    {
      name: ["-r", "--spawn-rate"],
      description:
        "Rate to spawn users at (users per second). Primarily used together with --headless or --autostart",
      args: { name: "float" },
    },
    {
      name: ["-t", "--run-time"],
      description:
        "Stop after the specified amount of time, e.g. (300s, 20m, 3h, 1h30m, etc.). Only used together with --headless or --autostart",
      args: { name: "time string" },
    },
    {
      name: ["-l", "--list"],
      description: "Show list of possible User classes and exit",
    },
    {
      name: "--config-users",
      description:
        "User configuration as a JSON string or file. A list of arguments or an Array of JSON configuration may be provided",
      args: { name: "json", isVariadic: true, isOptional: true },
    },
    // Web UI options
    {
      name: "--web-host",
      description:
        "Host to bind the web interface to. Defaults to '*' (all interfaces)",
      args: { name: "ip" },
    },
    {
      name: ["-P", "--web-port"],
      description: "Port on which to run web host",
      args: { name: "port number" },
    },
    {
      name: "--headless",
      description:
        "Disable the web interface, and start the test immediately. Use -u and -t to control user count and run time",
    },
    {
      name: "--autostart",
      description:
        "Starts the test immediately (like --headless, but without disabling the web UI)",
    },
    {
      name: "--autoquit",
      description:
        "Quits Locust entirely, X seconds after the run is finished. Only used together with --autostart",
      args: { name: "seconds" },
    },
    {
      name: "--headful",
      description: "Override a --headless set in a config file",
      hidden: true,
    },
    {
      name: "--web-login",
      description: "Protects the web interface with a login page",
    },
    {
      name: "--tls-cert",
      description:
        "Optional path to TLS certificate to use to serve over HTTPS",
      args: file(),
    },
    {
      name: "--tls-key",
      description:
        "Optional path to TLS private key to use to serve over HTTPS",
      args: file(),
    },
    {
      name: "--class-picker",
      description:
        "Enable select boxes in the web interface to choose from all available User classes and Shape classes",
    },
    {
      name: "--web-base-path",
      description:
        "Base path for the web interface (e.g., '/locust'). Default is empty (root path)",
      args: { name: "path" },
    },
    // Master options
    {
      name: "--master",
      description:
        "Launch locust as a master node, to which worker nodes connect",
    },
    {
      name: "--master-bind-host",
      description:
        "IP address for the master to listen on. Defaults to * (all available interfaces)",
      args: { name: "ip" },
    },
    {
      name: "--master-bind-port",
      description: "Port for the master to listen on. Defaults to 5557",
      args: { name: "port number" },
    },
    {
      name: "--expect-workers",
      description:
        "Delay starting the test until this number of workers have connected (only used in combination with --headless/--autostart)",
      args: int(),
    },
    {
      name: "--expect-workers-max-wait",
      description:
        "How long should the master wait for workers to connect before giving up. Defaults to wait forever",
      args: int(),
    },
    {
      name: "--enable-rebalancing",
      description:
        "Re-distribute users if new workers are added or removed during a test run. Experimental",
    },
    // Worker options
    {
      name: "--worker",
      description:
        "Set locust to run in distributed mode with this process as worker. Can be combined with setting --locustfile to '-' to download it from master",
    },
    {
      name: "--processes",
      description:
        "Number of times to fork the locust process. Combine with --worker or let it set --worker and --master automatically. Not available on Windows. Experimental",
      args: int(),
    },
    {
      name: "--master-host",
      description:
        "Hostname of locust master node to connect to. Defaults to 127.0.0.1",
      args: { name: "hostname" },
    },
    {
      name: "--master-port",
      description: "Port to connect to on master node. Defaults to 5557",
      args: { name: "port number" },
    },
    // Tag options
    tags(
      ["-T", "--tags"],
      "List of tags to include in the test, so only tasks with at least one matching tag will be executed"
    ),
    tags(
      ["-E", "--exclude-tags"],
      "List of tags to exclude from the test, so only tasks with no matching tags will be executed"
    ),
    // Request statistics options
    {
      name: "--csv",
      description:
        "Store request stats to files in CSV format (<filename>_stats.csv, <filename>_stats_history.csv and <filename>_failures.csv)",
      args: file("filename prefix"),
    },
    {
      name: "--csv-full-history",
      description:
        "Store each stats entry in CSV format to _stats_history.csv file. You must also specify the '--csv' argument to enable this",
    },
    {
      name: "--print-stats",
      description: "Enable periodic printing of request stats in UI runs",
    },
    {
      name: "--only-summary",
      description:
        "Disable periodic printing of request stats during --headless run",
    },
    {
      name: "--reset-stats",
      description:
        "Reset statistics once spawning has been completed. Should be set on both master and workers when running in distributed mode",
    },
    {
      name: "--html",
      description:
        "Store HTML report to file path specified. Tags {u}, {r}, {t} expand to users, spawn rate and run time",
      args: file(),
    },
    {
      name: "--json",
      description: "Prints the final stats in JSON format to stdout",
    },
    {
      name: "--json-file",
      description:
        "Prints the final stats in JSON format to file path specified",
      args: file(),
    },
    // Logging options
    {
      name: "--skip-log-setup",
      description:
        "Disable Locust's logging setup. Instead, the configuration is provided by the Locust test or Python defaults",
    },
    {
      name: ["-L", "--loglevel"],
      description:
        "Choose between DEBUG/INFO/WARNING/ERROR/CRITICAL. Default is INFO",
      args: {
        name: "level",
        suggestions: ["DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"],
      },
    },
    {
      name: "--logfile",
      description: "Path to log file. If not set, log will go to stderr",
      args: file(),
    },
    // Other options
    {
      name: "--show-task-ratio",
      description:
        "Print table of the User classes' task execution ratio. Use this with non-zero --user option if some classes define non-zero fixed_count attribute",
    },
    {
      name: "--show-task-ratio-json",
      description:
        "Print json data of the User classes' task execution ratio. Use this with non-zero --user option if some classes define non-zero fixed_count attribute",
    },
    {
      name: ["-V", "--version"],
      description: "Show program's version number and exit",
    },
    {
      name: "--exit-code-on-error",
      description:
        "Sets the process exit code to use when a test result contain any failure or error. Defaults to 1",
      args: int(),
    },
    {
      name: ["-s", "--stop-timeout"],
      description:
        "Number of seconds to wait for a simulated user to complete any executing task before exiting. Default is to terminate immediately",
      args: { name: "number" },
    },
    {
      name: "--equal-weights",
      description:
        "Use equally distributed task weights, overriding the weights specified in the locustfile",
    },
    {
      name: "--profile",
      description: "Set a profile to group the testruns together",
      args: { name: "profile" },
    },
    {
      name: "--otel",
      description: "Instrument the Locust test run with OpenTelemetry",
    },
  ],
};
export default completionSpec;
