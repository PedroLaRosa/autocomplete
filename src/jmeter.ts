// JMeter v5.6.3 (latest release on Maven Central, 2026-11-19). Source: apache/jmeter tag v5.6.3-rc2 (src/core/.../JMeter.java option descriptors, xdocs/usermanual/get-started.xml full option list)

const completionSpec: Fig.Spec = {
  name: "jmeter",
  description: "Apache JMeter - 100% Java Load Testing Tool",
  options: [
    {
      name: ["-?", "--?"],
      description: "Print command line options and exit",
    },
    {
      name: ["-v", "--version"],
      description: "Print the JMeter version information and exit",
    },
    {
      name: ["-h", "--help"],
      description: "Print usage information and exit",
    },
    {
      name: ["-p", "--propfile"],
      description: "The jmeter property file to use",
      args: {
        name: "property",
        description: "Your jmeter property file",
        template: "filepaths",
      },
    },
    {
      name: ["-q", "--addprop"],
      description: "Additional JMeter property file(s)",
      isRepeatable: true,
      args: {
        name: "file",
        template: "filepaths",
        description: "Additional JMeter property file",
      },
    },
    {
      name: ["-t", "--testfile"],
      description:
        'The JMeter test(.jmx) file to run. "-t LAST" will load last used file',
      args: {
        name: "testfile",
        description:
          'The JMeter test(.jmx) file to run. "-t LAST" will load last used file',
        template: "filepaths",
      },
    },
    {
      name: ["-l", "--logfile"],
      description: "The file to log samples to",
      args: {
        name: "logfile",
        description: "The file to log samples to",
        template: "filepaths",
        suggestCurrentToken: true,
      },
    },
    {
      name: ["-i", "--jmeterlogconf"],
      description: "JMeter logging configuration file (log4j2.xml)",
      args: {
        name: "jmeterlogconf",
        description: "JMeter logging configuration file (log4j2.xml)",
        template: "filepaths",
      },
    },
    {
      name: ["-j", "--jmeterlogfile"],
      description: "JMeter run log file (jmeter.log)",
      args: {
        name: "jmeterlogfile",
        description: "JMeter run log file (jmeter.log)",
        template: "filepaths",
        suggestCurrentToken: true,
      },
    },
    {
      name: ["-n", "--nongui"],
      description: "Run JMeter in nongui mode",
    },
    {
      name: ["-s", "--server"],
      description: "Run the JMeter server",
    },
    {
      name: ["-E", "--proxyScheme"],
      description: "Set a proxy scheme to use for the proxy server",
      args: {
        name: "proxyScheme",
        description: "Set a proxy scheme to use for the proxy server",
      },
    },
    {
      name: ["-H", "--proxyHost"],
      description: "Set a proxy server for JMeter to use",
      args: {
        name: "server",
      },
    },
    {
      name: ["-P", "--proxyPort"],
      description: "Set proxy server port for JMeter to use",
      args: {
        name: "port",
      },
    },
    {
      name: ["-N", "--nonProxyHosts"],
      description: "Set nonproxy host list (e.g. *.apache.org|localhost)",
      args: {
        name: "nonProxyHosts",
        description: "Set nonproxy host list (e.g. *.apache.org|localhost)",
      },
    },
    {
      name: ["-u", "--username"],
      description: "Set username for proxy server that JMeter is to use",
      args: {
        name: "username",
        description: "Set username for proxy server that JMeter is to use",
      },
    },
    {
      name: ["-a", "--password"],
      description: "Set password for proxy server that JMeter is to use",
      args: {
        name: "password",
        description: "Set password for proxy server that JMeter is to use",
      },
    },
    {
      name: ["-J", "--jmeterproperty"],
      description: "Define additional JMeter properties",
      isRepeatable: true,
      args: {
        name: "name=value",
        description: "JMeter property, e.g. -Jthreads=10",
      },
    },
    {
      name: ["-G", "--globalproperty"],
      description:
        "Define Global properties (sent to servers) e.g. -Gport=123 or -Gglobal.properties",
      isRepeatable: true,
      args: {
        name: "name=value",
        description: "Global property, e.g. -Gport=123",
      },
    },
    {
      name: ["-D", "--systemproperty"],
      description: "Define additional system properties",
      isRepeatable: true,
      args: {
        name: "name=value",
        description: "System property, e.g. -Dhttp.proxyHost=localhost",
      },
    },
    {
      name: ["-S", "--systemPropertyFile"],
      description: "Additional system property file(s)",
      isRepeatable: true,
      args: {
        name: "systemPropertyFile",
        description: "Additional system property file(s)",
        template: "filepaths",
      },
    },
    {
      name: ["-f", "--forceDeleteResultFile"],
      description:
        "Force delete existing results files and web report folder if present before starting the test",
    },
    {
      name: ["-L", "--loglevel"],
      description:
        "[category=]level e.g. jorphan=INFO, jmeter.util=DEBUG or com.example.foo=WARN",
      isRepeatable: true,
      args: {
        name: "[category=]level",
        suggestions: [
          "OFF",
          "FATAL",
          "ERROR",
          "WARN",
          "INFO",
          "DEBUG",
          "TRACE",
          "ALL",
        ],
      },
    },
    {
      name: ["-r", "--runremote"],
      description: "Start remote servers (as defined in remote_hosts)",
    },
    {
      name: ["-R", "--remotestart"],
      description: "Start these remote servers (overrides remote_hosts)",
      args: {
        name: "servers",
        description: "Comma-separated list of remote servers",
      },
    },
    {
      name: ["-d", "--homedir"],
      description: "The JMeter home directory to use",
      args: {
        name: "homedir",
      },
    },
    {
      name: ["-X", "--remoteexit"],
      description: "Exit the remote servers at end of test (non-GUI)",
    },
    {
      name: ["-g", "--reportonly"],
      description: "Generate report dashboard only, from a test results file",
      args: {
        name: "resultsfile",
        description: "Test results file (.jtl)",
        template: "filepaths",
      },
    },
    {
      name: ["-e", "--reportatendofloadtests"],
      description: "Generate report dashboard after load test",
    },
    {
      name: ["-o", "--reportoutputfolder"],
      description: "Output folder for report dashboard",
      args: {
        name: "reportoutputfolder",
        description: "Output folder for report dashboard",
        template: "folders",
      },
    },
  ],
};
export default completionSpec;
