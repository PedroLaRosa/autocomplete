// mysql v26.10.0 Innovation (github.com/mysql/mysql-server tag mysql-26.10.0, 2026-11-20; current LTS is 9.7.4). Source: static read of client/mysql.cc (my_long_options),
// client/include/*opt-longopts.h, mysys/my_default.cc and sql-common/client.cc; the binary was not run.
// Options that exist only in 26.x (--force-pqc, --use-pqc-sign, --tls-kex) are missing from 9.7 LTS and 8.4 LTS.
const completionSpec: Fig.Spec = {
  name: "mysql",
  description: "Mysql is a terminal-based front-end to MySQL",
  args: {
    name: "database",
    description: "Database to use",
    isOptional: true,
  },
  options: [
    {
      name: "--authentication-oci-client-config-profile",
      description:
        "Configuration profile to read from the OCI configuration file. Default is DEFAULT",
      args: {
        name: "profile",
      },
    },
    {
      name: "--authentication-openid-connect-client-id-token-file",
      description: "Location of the OpenID Connect ID token file",
      args: {
        name: "file_name",
        template: "filepaths",
      },
    },
    {
      name: "--auto-rehash",
      description: "Enable automatic rehashing",
    },
    {
      name: "--auto-vertical-output",
      description: "Enable automatic vertical result set display",
    },
    {
      name: ["--batch", "-B"],
      description: "Do not use history file",
    },
    {
      name: "--binary-as-hex",
      description: "Display binary values in hexadecimal notation",
    },
    {
      name: "--binary-mode",
      description:
        "Disable \\r\\n - to - \\n translation and treatment of \\0 as end-of-query",
    },
    {
      name: "--bind-address",
      description: "Use specified network interface to connect to MySQL Server",
      args: {
        name: "ip_address",
      },
    },
    {
      name: "--character-sets-dir",
      description: "Directory where character sets are installed",
      args: {
        name: "dir_name",
        template: "folders",
        description: "Directory where character sets are installed",
      },
    },
    {
      name: "--column-names",
      description: "Write column names in results",
    },
    {
      name: "--column-type-info",
      description: "Display result set metadata",
    },
    {
      name: "--commands",
      description: "Enable or disable processing of local mysql commands",
    },
    {
      name: ["--comments", "-c"],
      description:
        "Whether to retain or strip comments in statements sent to the server",
    },
    {
      name: ["--compress", "-C"],
      description:
        "Compress all information sent between client and server. Deprecated, use --compression-algorithms instead",
      deprecated: true,
    },
    {
      name: "--compression-algorithms",
      description: "Permitted compression algorithms for connections to server",
      args: {
        name: "value",
        suggestions: [
          { name: "zlib" },
          { name: "zstd" },
          { name: "uncompressed" },
        ],
      },
    },
    {
      name: "--connect-expired-password",
      description:
        "Indicate to server that client can handle expired-password sandbox mode",
    },
    {
      name: "--connect-timeout",
      description: "Number of seconds before connection timeout",
      args: {
        name: "value",
      },
    },
    {
      name: ["-D", "--database"],
      description: "The database to use",
      args: {
        name: "db_name",
      },
    },
    {
      name: ["-#", "--debug"],
      description:
        "Write debugging log; supported only if MySQL was built with debugging support",
      args: {
        name: "debug_options",
        isOptional: true,
      },
    },
    {
      name: "--debug-check",
      description: "Print debugging information when program exits",
    },
    {
      name: ["-T", "--debug-info"],
      description:
        "Print debugging information, memory, and CPU statistics when program exits",
    },
    {
      name: "--default-auth",
      description: "Authentication plugin to use",
      args: {
        name: "plugin",
      },
    },
    {
      name: "--default-character-set",
      description: "Specify default character set",
      args: {
        name: "charset_name",
      },
    },
    {
      name: "--defaults-extra-file",
      description: "Read named option file in addition to usual option files",
      args: {
        name: "file_name",
        template: "filepaths",
      },
    },
    {
      name: "--defaults-file",
      description: "Read only named option file",
      args: {
        name: "file_name",
        template: "filepaths",
      },
    },
    {
      name: "--defaults-group-suffix",
      description: "Option group suffix value",
      args: {
        name: "str",
      },
    },
    {
      name: "--delimiter",
      description: "Set the statement delimiter",
      args: {
        name: "str",
      },
    },
    {
      name: "--disable-named-commands",
      description:
        "Disable named commands. Use the \\* form only, or use named commands only at the beginning of a line ending with a semicolon (;). mysql starts with this option enabled by default. However, even with this option, long-format commands still work from the first line",
    },
    {
      name: "--dns-srv-name",
      description: "Use DNS SRV lookup for host information",
      args: {
        name: "name",
      },
    },
    {
      name: "--enable-cleartext-plugin",
      description: "Enable cleartext authentication plugin",
    },
    {
      name: ["-e", "--execute"],
      description: "Execute the statement and quit",
      args: {
        name: "statement",
      },
    },
    {
      name: ["-f", "--force"],
      description: "Continue even if an SQL error occurs",
    },
    {
      name: "--force-pqc",
      description: "Require a PQC-compatible TLS key exchange",
    },
    {
      name: "--get-server-public-key",
      description: "Request RSA public key from server",
    },
    {
      name: ["--help", "-?", "-I"],
      description: "Display help message and exit",
    },
    {
      name: "--histignore",
      description: "Patterns specifying which statements to ignore for logging",
      args: {
        name: "pattern_list",
      },
    },
    {
      name: ["-h", "--host"],
      description: "Host on which MySQL server is located",
      args: {
        name: "host_name",
      },
    },
    {
      name: ["-H", "--html"],
      description: "Produce HTML output",
    },
    {
      name: ["-i", "--ignore-spaces"],
      description: "Ignore spaces after function names",
    },
    {
      name: "--init-command",
      description: "SQL statement to execute after connecting",
      args: {
        name: "command",
      },
      insertValue: "{cursor}'",
    },
    {
      name: "--init-command-add",
      description:
        "Add SQL statement to the list to execute after connecting. Re-executed on reconnect",
      args: {
        name: "command",
      },
      insertValue: "{cursor}'",
    },
    {
      name: "--line-numbers",
      description: "Write line numbers for errors",
    },
    {
      name: "--load-data-local-dir",
      description: "Directory for files named in LOAD DATA LOCAL statements",
      args: {
        name: "dir_name",
        template: "folders",
      },
    },
    {
      name: "--local-infile",
      description: "Enable or disable for LOCAL capability for LOAD DATA",
      requiresSeparator: true,
      args: {
        name: "is-local-infile",
        isOptional: true,
        suggestions: [
          {
            name: "0",
            description: "Disable",
          },
          {
            name: "1",
            description: "Enable",
          },
        ],
      },
    },
    {
      name: "--login-path",
      description: "Read login path options from .mylogin.cnf",
      args: {
        name: "name",
      },
    },
    {
      name: "--max-allowed-packet",
      description: "Maximum packet length to send to or receive from server",
      args: {
        name: "value",
      },
    },
    {
      name: "--max-join-size",
      description:
        "The automatic limit for rows in a join when using --safe-updates",
      args: {
        name: "value",
      },
    },
    {
      name: ["-G", "--named-commands"],
      description: "Enable named mysql commands",
    },
    {
      name: "--net-buffer-length",
      description: "Buffer size for TCP/IP and socket communication",
      args: {
        name: "value",
      },
    },
    {
      name: "--network-namespace",
      description: "Specify network namespace",
      args: {
        name: "name",
      },
    },
    {
      name: ["-A", "--no-auto-rehash"],
      description: "Disable automatic rehashing",
    },
    {
      name: ["--no-beep", "-b"],
      description: "Do not beep when errors occur",
    },
    {
      name: "--no-defaults",
      description: "Read no option files",
    },
    {
      name: "--no-login-paths",
      description: "Do not read login paths from the login path file",
    },
    {
      name: "--oci-config-file",
      description:
        "Location of the OCI configuration file. Default is ~/.oci/config on Linux",
      args: {
        name: "file_name",
        template: "filepaths",
      },
    },
    {
      name: ["-o", "--one-database"],
      description:
        "Ignore statements except those for the default database named on the command line",
    },
    {
      name: "--pager",
      description: "Use the given command for paging query output",
      requiresSeparator: true,
      args: {
        name: "command",
        isOptional: true,
      },
    },
    {
      name: ["-p", "--password"],
      description: "Password to use when connecting to server",
      args: {
        name: "password",
        isOptional: true,
      },
    },
    {
      name: "--password1",
      description: "Password for the first factor authentication plugin",
      args: {
        name: "password",
        isOptional: true,
      },
    },
    {
      name: "--password2",
      description: "Password for the second factor authentication plugin",
      args: {
        name: "password",
        isOptional: true,
      },
    },
    {
      name: "--password3",
      description: "Password for the third factor authentication plugin",
      args: {
        name: "password",
        isOptional: true,
      },
    },
    {
      name: ["--pipe", "-W"],
      description: "Connect to server using named pipe (Windows only)",
    },
    {
      name: "--plugin-authentication-kerberos-client-mode",
      description:
        "Kerberos authentication mode. Default is SSPI (Windows only)",
      args: {
        name: "mode",
        suggestions: [{ name: "SSPI" }, { name: "GSSAPI" }],
      },
    },
    {
      name: "--plugin-authentication-webauthn-client-preserve-privacy",
      description:
        "Allow selection of the discoverable credential used to sign the challenge. By default all credentials for the relying party sign it",
    },
    {
      name: "--plugin-authentication-webauthn-device",
      description:
        "Which libfido2 device to use. 0 (the first device) is the default",
      args: {
        name: "device",
      },
    },
    {
      name: "--plugin-dir",
      description: "Directory where plugins are installed",
      args: {
        name: "dir_name",
        template: "folders",
      },
    },
    {
      name: ["-P", "--port"],
      description: "TCP/IP port number for connection",
      args: {
        name: "port_num",
      },
    },
    {
      name: "--print-defaults",
      description: "Print default options",
    },
    {
      name: "--prompt",
      description: "Set the prompt to the specified format",
      args: {
        name: "format_str",
      },
    },
    {
      name: "--protocol",
      description: "Transport protocol to use",
      args: {
        name: "protocol",
        suggestions: [
          { name: "TCP" },
          { name: "SOCKET" },
          { name: "PIPE" },
          { name: "MEMORY" },
        ],
      },
    },
    {
      name: ["-q", "--quick"],
      description: "Do not cache each query result",
    },
    {
      name: ["-r", "--raw"],
      description: "Write column values without escape conversion",
    },
    {
      name: "--reconnect",
      description:
        "If the connection to the server is lost, automatically try to reconnect",
    },
    {
      name: "--register-factor",
      description: "Factor (or factors) for which to register authentication",
      args: {
        name: "factor_list",
      },
    },
    {
      name: ["-U", "--safe-updates", "--i-am-a-dummy"],
      description:
        "Allow only UPDATE and DELETE statements that specify key values",
    },
    {
      name: "--select-limit",
      description:
        "The automatic limit for SELECT statements when using --safe-updates",
      args: {
        name: "value",
      },
    },
    {
      name: "--server-public-key-path",
      description: "Path name to file containing RSA public key",
      args: {
        name: "filename",
        template: "filepaths",
      },
    },
    {
      name: "--shared-memory-base-name",
      description:
        "Shared-memory name for shared-memory connections (Windows only)",
      args: {
        name: "name",
      },
    },
    {
      name: "--show-warnings",
      description: "Show warnings after each statement if there are any",
    },
    {
      name: "--sigint-ignore",
      description:
        "Ignore SIGINT signals (typically the result of typing Control+C)",
    },
    {
      name: ["-s", "--silent"],
      description:
        "Silent mode.  Produce less output. This option can be given multiple times to produce less and less output",
      isRepeatable: true,
    },
    {
      name: "--skip-auto-rehash",
      description: "Disable automatic rehashing",
    },
    {
      name: ["-N", "--skip-column-names"],
      description: "Do not write column names in results",
    },
    {
      name: ["-L", "--skip-line-numbers"],
      description: "Skip line numbers for errors",
    },
    {
      name: "--skip-named-commands",
      description: "Disable named mysql commands",
    },
    {
      name: "--skip-pager",
      description: "Disable paging",
    },
    {
      name: "--skip-reconnect",
      description: "Disable reconnecting",
    },
    {
      name: ["-S", "--socket"],
      description:
        "Unix socket file or Windows named pipe to use for the connection",
      args: {
        name: "name",
      },
    },
    {
      name: "--ssl-ca",
      description:
        "File that contains list of trusted SSL Certificate Authorities",
      args: {
        name: "filename",
        template: "filepaths",
      },
    },
    {
      name: "--ssl-capath",
      description:
        "Directory that contains trusted SSL Certificate Authority certificate files",
      args: {
        name: "dirname",
        template: "folders",
      },
    },
    {
      name: "--ssl-cert",
      description: "File that contains X.509 certificate",
      args: {
        name: "filename",
        template: "filepaths",
      },
    },
    {
      name: "--ssl-cipher",
      description: "Permissible ciphers for connection encryption",
      args: {
        name: "cipher_list",
      },
    },
    {
      name: "--ssl-crl",
      description: "File that contains certificate revocation lists",
      args: {
        name: "filename",
        template: "filepaths",
      },
    },
    {
      name: "--ssl-crlpath",
      description: "Directory that contains certificate revocation-list files",
      args: {
        name: "dirname",
        template: "folders",
      },
    },
    {
      name: "--ssl-fips-mode",
      description: "Whether to enable FIPS mode on client side",
      args: {
        name: "mode",
        suggestions: [{ name: "OFF" }, { name: "ON" }, { name: "STRICT" }],
      },
    },
    {
      name: "--ssl-key",
      description: "File that contains X.509 key",
      args: {
        name: "filename",
        template: "filepaths",
      },
    },
    {
      name: "--ssl-mode",
      description: "Desired security state of connection to server",
      args: {
        name: "mode",
        suggestions: [
          { name: "DISABLED" },
          { name: "PREFERRED" },
          { name: "REQUIRED" },
          { name: "VERIFY_CA" },
          { name: "VERIFY_IDENTITY" },
        ],
      },
    },
    {
      name: "--ssl-session-data",
      description: "Session data file to use to enable SSL session reuse",
      args: {
        name: "filename",
        template: "filepaths",
      },
    },
    {
      name: "--ssl-session-data-continue-on-failed-reuse",
      description:
        "Allow the connection to succeed even if the session data cannot be reused",
    },
    {
      name: "--system-command",
      description: "Enable the system mysql command (disabled by default)",
    },
    {
      name: ["-j", "--syslog"],
      description: "Log interactive statements to syslog",
    },
    {
      name: ["-t", "--table"],
      description: "Display output in tabular format",
    },
    {
      name: "--tee",
      description: "Append a copy of output to named file",
      args: {
        name: "file_name",
        template: "filepaths",
      },
    },
    {
      name: "--telemetry-client",
      description: "Load the telemetry_client plugin",
    },
    {
      name: "--tls-ciphersuites",
      description: "Permissible TLSv1.3 ciphersuites for encrypted connections",
      args: {
        name: "ciphersuite_list",
      },
    },
    {
      name: "--tls-kex",
      description: "TLS key exchange groups to use",
      args: {
        name: "group_list",
      },
    },
    {
      name: "--tls-sni-servername",
      description: "SNI server name to pass to the server",
      args: {
        name: "server_name",
      },
    },
    {
      name: "--tls-version",
      description: "Permissible TLS protocols for encrypted connections",
      args: {
        name: "protocol_list",
        suggestions: [{ name: "TLSv1.2" }, { name: "TLSv1.3" }],
      },
    },
    {
      name: ["-n", "--unbuffered"],
      description: "Flush the buffer after each query",
    },
    {
      name: "--use-pqc-sign",
      description:
        "Whether to advertise PQC TLS handshake signature algorithms. OFF advertises only classical ones",
    },
    {
      name: ["-u", "--user"],
      description: "MySQL user name to use when connecting to server",
      args: {
        name: "user_name",
      },
    },
    {
      name: ["-v", "--verbose"],
      description:
        "Verbose mode. Give it three times for the table output format",
      isRepeatable: true,
    },
    {
      name: ["-V", "--version"],
      description: "Display version information and exit",
    },
    {
      name: ["-E", "--vertical"],
      description:
        "Print query output rows vertically (one line per column value)",
    },
    {
      name: ["-w", "--wait"],
      description:
        "If the connection cannot be established, wait and retry instead of aborting",
    },
    {
      name: ["-X", "--xml"],
      description: "Produce XML output",
    },
    {
      name: "--zstd-compression-level",
      description:
        "Compression level for connections to server that use zstd compression",
      args: {
        name: "level",
        description:
          "Compression level between 1-22. The default zstd compression level is 3. The compression level setting has no effect on connections that do not use zstd compression",
      },
    },
  ],
};

export default completionSpec;
