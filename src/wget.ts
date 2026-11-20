// GNU Wget v1.25.0 (latest stable: gitlab.com/gnuwget/wget tag v1.25.0 / Homebrew formula, 2026-11-20).
// Source: read statically, not run. src/main.c option table + print_help() and doc/wget.texi at tag v1.25.0
// (the 1.21.4 `wget --help` shipped in Ubuntu was only used to cross-check). Options that exist only in some
// builds (c-ares: --dns-servers/--bind-dns-address, Metalink, OpenSSL/LibreSSL --random-file, HAVE_DEBUG -d) are
// included as documented in the manual. Not included: VMS/Watt-32/EGD-only flags (--ftp-stmlf, --wdebug, --egd-file).
const file = (name = "FILE"): Fig.Arg => ({ name, template: "filepaths" });
const folder = (name: string): Fig.Arg => ({ name, template: "folders" });
const list = (name: string): Fig.Arg => ({ name });

const completionSpec: Fig.Spec = {
  name: "wget",
  description: "A non-interactive network retriever",
  args: {
    isVariadic: true,
    name: "url",
    description: "The url(s) to retrieve",
  },
  options: [
    // Startup
    {
      name: ["-V", "--version"],
      description: "Display the version of Wget and exit",
    },
    { name: ["-h", "--help"], description: "Print this help" },
    {
      name: ["-b", "--background"],
      description: "Go to background after startup",
    },
    {
      name: ["-e", "--execute"],
      description: "Execute a `.wgetrc'-style command",
      isRepeatable: true,
      args: { name: "COMMAND" },
    },

    // Logging and input file
    {
      name: ["-o", "--output-file"],
      description: "Log messages to FILE",
      args: file(),
    },
    {
      name: ["-a", "--append-output"],
      description: "Append messages to FILE",
      args: file(),
    },
    {
      name: ["-d", "--debug"],
      description: "Print lots of debugging information",
    },
    { name: ["-q", "--quiet"], description: "Quiet (no output)" },
    {
      name: ["-v", "--verbose"],
      description: "Be verbose (this is the default)",
    },
    {
      name: ["-nv", "--no-verbose"],
      description: "Turn off verboseness, without being quiet",
    },
    {
      name: "--report-speed",
      description: "Output bandwidth as TYPE",
      args: { name: "TYPE", suggestions: ["bits"] },
    },
    {
      name: ["-i", "--input-file"],
      description: "Download URLs found in local or external FILE",
      args: file(),
    },
    {
      name: "--input-metalink",
      description:
        "Download files covered in local Metalink FILE (needs a build with Metalink support)",
      args: file(),
    },
    { name: ["-F", "--force-html"], description: "Treat input file as HTML" },
    {
      name: ["-B", "--base"],
      description: "Resolve HTML input-file links (-i -F) relative to URL",
      args: { name: "URL" },
    },
    {
      name: "--config",
      description: "Specify config file to use",
      args: file(),
    },
    { name: "--no-config", description: "Do not read any config file" },
    {
      name: "--rejected-log",
      description: "Log reasons for URL rejection to FILE",
      args: file(),
    },

    // Download
    {
      name: ["-t", "--tries"],
      description: "Set number of retries to NUMBER (0 unlimits)",
      args: { name: "NUMBER", suggestions: ["0", "inf"] },
    },
    {
      name: "--retry-connrefused",
      description: "Retry even if connection is refused",
    },
    {
      name: "--retry-on-host-error",
      description: "Consider host errors as non-fatal, transient errors",
    },
    {
      name: "--retry-on-http-error",
      description: "Comma-separated list of HTTP errors to retry",
      args: list("ERRORS"),
    },
    {
      name: ["-O", "--output-document"],
      description: "Write documents to FILE",
      args: file(),
    },
    {
      name: ["-nc", "--no-clobber"],
      description:
        "Skip downloads that would download to existing files (overwriting them)",
    },
    {
      name: "--backups",
      description: "Before writing file X, rotate up to N backup files",
      args: { name: "N" },
    },
    {
      name: "--no-netrc",
      description: "Don't try to obtain credentials from .netrc",
    },
    {
      name: ["-c", "--continue"],
      description: "Resume getting a partially-downloaded file",
    },
    {
      name: "--start-pos",
      description: "Start downloading from zero-based position OFFSET",
      args: { name: "OFFSET" },
    },
    {
      name: "--progress",
      description: "Select progress gauge type",
      args: {
        name: "TYPE",
        suggestions: [
          { name: "bar", description: "ASCII progress bar (default)" },
          {
            name: "dot",
            description: "Print one dot per fixed amount of data",
          },
          "bar:force",
          "bar:noscroll",
          "bar:force:noscroll",
          "dot:default",
          "dot:binary",
          "dot:mega",
          "dot:giga",
        ],
      },
    },
    {
      name: "--show-progress",
      description: "Display the progress bar in any verbosity mode",
    },
    {
      name: ["-N", "--timestamping"],
      description: "Don't re-retrieve files unless newer than local",
    },
    {
      name: "--no-if-modified-since",
      description:
        "Don't use conditional if-modified-since get requests in timestamping mode",
    },
    {
      name: "--no-use-server-timestamps",
      description:
        "Don't set the local file's timestamp by the one on the server",
    },
    { name: ["-S", "--server-response"], description: "Print server response" },
    { name: "--spider", description: "Don't download anything" },
    {
      name: ["-T", "--timeout"],
      description: "Set all timeout values to SECONDS",
      args: { name: "SECONDS" },
    },
    {
      name: "--dns-servers",
      description:
        "List of DNS servers to query, comma separated (needs a build with c-ares)",
      args: list("ADDRESSES"),
    },
    {
      name: "--bind-dns-address",
      description:
        "Bind DNS resolver to ADDRESS (hostname or IP) on local host (needs a build with c-ares)",
      args: { name: "ADDRESS" },
    },
    {
      name: "--dns-timeout",
      description: "Set the DNS lookup timeout to SECS",
      args: { name: "SECS" },
    },
    {
      name: "--connect-timeout",
      description: "Set the connect timeout to SECS",
      args: { name: "SECS" },
    },
    {
      name: "--read-timeout",
      description: "Set the read timeout to SECS",
      args: { name: "SECS" },
    },
    {
      name: ["-w", "--wait"],
      description:
        "Wait SECONDS between retrievals (applies if more than 1 URL is to be retrieved)",
      args: { name: "SECONDS" },
    },
    {
      name: "--waitretry",
      description:
        "Wait 1..SECONDS between retries of a retrieval (applies if more than 1 URL is to be retrieved)",
      args: { name: "SECONDS" },
    },
    {
      name: "--random-wait",
      description:
        "Wait from 0.5*WAIT...1.5*WAIT secs between retrievals (applies if more than 1 URL is to be retrieved)",
    },
    { name: "--no-proxy", description: "Explicitly turn off proxy" },
    {
      name: ["-Q", "--quota"],
      description: "Set retrieval quota to NUMBER",
      args: { name: "NUMBER" },
    },
    {
      name: "--bind-address",
      description: "Bind to ADDRESS (hostname or IP) on local host",
      args: { name: "ADDRESS" },
    },
    {
      name: "--limit-rate",
      description: "Limit download rate to RATE",
      args: { name: "RATE" },
    },
    { name: "--no-dns-cache", description: "Disable caching DNS lookups" },
    {
      name: "--restrict-file-names",
      description: "Restrict chars in file names to ones the OS allows",
      args: {
        name: "OS",
        description: "Comma-separated list of modes",
        suggestions: [
          "unix",
          "windows",
          "nocontrol",
          "ascii",
          "lowercase",
          "uppercase",
        ],
      },
    },
    {
      name: "--ignore-case",
      description: "Ignore case when matching files/directories",
    },
    {
      name: ["-4", "--inet4-only"],
      description: "Connect only to IPv4 addresses",
    },
    {
      name: ["-6", "--inet6-only"],
      description: "Connect only to IPv6 addresses",
    },
    {
      name: "--prefer-family",
      description: "Connect first to addresses of the specified family",
      args: { name: "FAMILY", suggestions: ["IPv6", "IPv4", "none"] },
    },
    {
      name: "--user",
      description: "Set both ftp and http user to USER",
      args: { name: "USER" },
    },
    {
      name: "--password",
      description: "Set both ftp and http password to PASS",
      args: { name: "PASS" },
    },
    { name: "--ask-password", description: "Prompt for passwords" },
    {
      name: "--use-askpass",
      description:
        "Specify credential handler for requesting username and password (default: WGET_ASKPASS or SSH_ASKPASS)",
      args: { name: "COMMAND" },
    },
    { name: "--no-iri", description: "Turn off IRI support" },
    {
      name: "--local-encoding",
      description: "Use ENC as the local encoding for IRIs",
      args: { name: "ENC" },
    },
    {
      name: "--remote-encoding",
      description: "Use ENC as the default remote encoding",
      args: { name: "ENC" },
    },
    { name: "--unlink", description: "Remove file before clobber" },
    {
      name: "--keep-badhash",
      description:
        "Keep files with checksum mismatch, appending .badhash (needs a build with Metalink support)",
    },
    {
      name: "--metalink-index",
      description:
        "Metalink application/metalink4+xml metaurl ordinal NUMBER (needs a build with Metalink support)",
      args: { name: "NUMBER", suggestions: ["0", "inf"] },
    },
    {
      name: "--metalink-over-http",
      description:
        "Use Metalink metadata from HTTP response headers (needs a build with Metalink support)",
    },
    {
      name: "--preferred-location",
      description:
        "Preferred location for Metalink resources (needs a build with Metalink support)",
    },
    {
      name: "--xattr",
      description: "Turn on storage of metadata in extended file attributes",
    },

    // Directories
    {
      name: ["-nd", "--no-directories"],
      description: "Don't create directories",
    },
    {
      name: ["-x", "--force-directories"],
      description: "Force creation of directories",
    },
    {
      name: ["-nH", "--no-host-directories"],
      description: "Don't create host directories",
    },
    {
      name: "--protocol-directories",
      description: "Use protocol name in directories",
    },
    {
      name: ["-P", "--directory-prefix"],
      description: "Save files to PREFIX/",
      args: folder("PREFIX"),
    },
    {
      name: "--cut-dirs",
      description: "Ignore NUMBER remote directory components",
      args: { name: "NUMBER" },
    },

    // HTTP options
    {
      name: "--http-user",
      description: "Set http user to USER",
      args: { name: "USER" },
    },
    {
      name: "--http-password",
      description: "Set http password to PASS",
      args: { name: "PASS" },
    },
    {
      name: "--http-passwd",
      description: "Deprecated alias of --http-password",
      deprecated: true,
      args: { name: "PASS" },
    },
    { name: "--no-cache", description: "Disallow server-cached data" },
    {
      name: "--default-page",
      description: "Change the default page name (normally 'index.html')",
      args: { name: "NAME" },
    },
    {
      name: ["-E", "--adjust-extension"],
      description: "Save HTML/CSS documents with proper extensions",
    },
    {
      name: "--html-extension",
      description: "Deprecated alias of --adjust-extension",
      deprecated: true,
    },
    {
      name: "--ignore-length",
      description: "Ignore 'Content-Length' header field",
    },
    {
      name: "--header",
      description: "Insert STRING among the headers",
      isRepeatable: true,
      args: { name: "STRING" },
    },
    {
      name: "--compression",
      description: "Choose compression (default: none)",
      args: { name: "TYPE", suggestions: ["auto", "gzip", "none"] },
    },
    {
      name: "--max-redirect",
      description: "Maximum redirections allowed per page",
      args: { name: "NUMBER" },
    },
    {
      name: "--proxy-user",
      description: "Set USER as proxy username",
      args: { name: "USER" },
    },
    {
      name: "--proxy-password",
      description: "Set PASS as proxy password",
      args: { name: "PASS" },
    },
    {
      name: "--proxy-passwd",
      description: "Deprecated alias of --proxy-password",
      deprecated: true,
      args: { name: "PASS" },
    },
    {
      name: "--referer",
      description: "Include 'Referer: URL' header in HTTP request",
      args: { name: "URL" },
    },
    { name: "--save-headers", description: "Save the HTTP headers to file" },
    {
      name: ["-U", "--user-agent"],
      description: "Identify as AGENT instead of Wget/VERSION",
      args: { name: "AGENT" },
    },
    {
      name: "--no-http-keep-alive",
      description: "Disable HTTP keep-alive (persistent connections)",
    },
    { name: "--no-cookies", description: "Don't use cookies" },
    {
      name: "--load-cookies",
      description: "Load cookies from FILE before session",
      args: file(),
    },
    {
      name: "--save-cookies",
      description: "Save cookies to FILE after session",
      args: file(),
    },
    {
      name: "--keep-session-cookies",
      description: "Load and save session (non-permanent) cookies",
    },
    {
      name: "--post-data",
      description: "Use the POST method; send STRING as the data",
      args: { name: "STRING" },
    },
    {
      name: "--post-file",
      description: "Use the POST method; send contents of FILE",
      args: file(),
    },
    {
      name: "--method",
      description: 'Use method "HTTPMethod" in the request',
      args: { name: "HTTPMethod" },
    },
    {
      name: "--body-data",
      description: "Send STRING as data (--method must be set)",
      dependsOn: ["--method"],
      args: { name: "STRING" },
    },
    {
      name: "--body-file",
      description: "Send contents of FILE (--method must be set)",
      dependsOn: ["--method"],
      args: file(),
    },
    {
      name: "--content-disposition",
      description:
        "Honor the Content-Disposition header when choosing local file names (EXPERIMENTAL)",
    },
    {
      name: "--content-on-error",
      description: "Output the received content on server errors",
    },
    {
      name: "--auth-no-challenge",
      description:
        "Send Basic HTTP authentication information without first waiting for the server's challenge",
    },

    // HTTPS (SSL/TLS) options
    {
      name: "--secure-protocol",
      description: "Choose secure protocol",
      args: {
        name: "PR",
        suggestions: [
          "auto",
          "SSLv2",
          "SSLv3",
          "TLSv1",
          "TLSv1_1",
          "TLSv1_2",
          "TLSv1_3",
          "PFS",
        ],
      },
    },
    { name: "--https-only", description: "Only follow secure HTTPS links" },
    {
      name: "--no-check-certificate",
      description: "Don't validate the server's certificate",
    },
    {
      name: "--certificate",
      description: "Client certificate file",
      args: file(),
    },
    {
      name: "--certificate-type",
      description: "Client certificate type",
      args: { name: "TYPE", suggestions: ["PEM", "DER"] },
    },
    { name: "--private-key", description: "Private key file", args: file() },
    {
      name: "--private-key-type",
      description: "Private key type",
      args: { name: "TYPE", suggestions: ["PEM", "DER"] },
    },
    {
      name: "--ca-certificate",
      description: "File with the bundle of CAs",
      args: file(),
    },
    {
      name: "--ca-directory",
      description: "Directory where hash list of CAs is stored",
      args: folder("DIR"),
    },
    {
      name: "--crl-file",
      description: "File with bundle of CRLs",
      args: file(),
    },
    {
      name: "--pinnedpubkey",
      description:
        "Public key (PEM/DER) file, or base64 encoded sha256 hashes preceded by 'sha256//' and separated by ';', to verify peer against",
      args: file("FILE/HASHES"),
    },
    {
      name: "--random-file",
      description:
        "File with random data for seeding the SSL PRNG (OpenSSL and LibreSSL only)",
      args: file(),
    },
    {
      name: "--ciphers",
      description:
        "Set the priority string (GnuTLS) or cipher list string (OpenSSL) directly, overriding --secure-protocol",
      args: { name: "STR" },
    },

    // HSTS options
    { name: "--no-hsts", description: "Disable HSTS" },
    {
      name: "--hsts-file",
      description: "Path of HSTS database (will override default)",
      args: file(),
    },

    // FTP options
    {
      name: "--ftp-user",
      description: "Set ftp user to USER",
      args: { name: "USER" },
    },
    {
      name: "--ftp-password",
      description: "Set ftp password to PASS",
      args: { name: "PASS" },
    },
    {
      name: "--no-remove-listing",
      description: "Don't remove '.listing' files",
    },
    { name: "--no-glob", description: "Turn off FTP file name globbing" },
    {
      name: "--no-passive-ftp",
      description: 'Disable the "passive" transfer mode',
    },
    {
      name: "--preserve-permissions",
      description: "Preserve remote file permissions",
    },
    {
      name: "--retr-symlinks",
      description: "When recursing, get linked-to files (not dir)",
    },

    // FTPS options
    {
      name: "--ftps-implicit",
      description: "Use implicit FTPS (default port is 990)",
    },
    {
      name: "--ftps-resume-ssl",
      description:
        "Resume the SSL/TLS session started in the control connection when opening a data connection (default)",
    },
    {
      name: "--no-ftps-resume-ssl",
      description:
        "Don't resume the SSL/TLS session of the control connection in data connections",
    },
    {
      name: "--ftps-clear-data-connection",
      description:
        "Cipher the control channel only; all the data will be in plaintext",
    },
    {
      name: "--ftps-fallback-to-ftp",
      description:
        "Fall back to FTP if FTPS is not supported in the target server",
    },

    // WARC options
    {
      name: "--warc-file",
      description: "Save request/response data to a .warc.gz file",
      args: { name: "FILENAME", template: "filepaths" },
    },
    {
      name: "--warc-header",
      description: "Insert STRING into the warcinfo record",
      isRepeatable: true,
      args: { name: "STRING" },
    },
    {
      name: "--warc-max-size",
      description: "Set maximum size of WARC files to NUMBER",
      args: { name: "NUMBER" },
    },
    { name: "--warc-cdx", description: "Write CDX index files" },
    {
      name: "--warc-dedup",
      description: "Do not store records listed in this CDX file",
      args: { name: "FILENAME", template: "filepaths" },
    },
    {
      name: "--no-warc-compression",
      description: "Do not compress WARC files with GZIP",
    },
    {
      name: "--no-warc-digests",
      description: "Do not calculate SHA1 digests",
    },
    {
      name: "--no-warc-keep-log",
      description: "Do not store the log file in a WARC record",
    },
    {
      name: "--warc-tempdir",
      description: "Location for temporary files created by the WARC writer",
      args: folder("DIRECTORY"),
    },

    // Recursive download
    { name: ["-r", "--recursive"], description: "Specify recursive download" },
    {
      name: ["-l", "--level"],
      description: "Maximum recursion depth (inf or 0 for infinite)",
      args: { name: "NUMBER", suggestions: ["0", "inf"] },
    },
    {
      name: "--delete-after",
      description: "Delete files locally after downloading them",
    },
    {
      name: ["-k", "--convert-links"],
      description: "Make links in downloaded HTML or CSS point to local files",
    },
    {
      name: "--convert-file-only",
      description:
        "Convert the file part of the URLs only (usually known as the basename)",
    },
    {
      name: ["-K", "--backup-converted"],
      description: "Before converting file X, back up as X.orig",
    },
    {
      name: ["-m", "--mirror"],
      description: "Shortcut for -N -r -l inf --no-remove-listing",
    },
    {
      name: ["-p", "--page-requisites"],
      description: "Get all images, etc. needed to display HTML page",
    },
    {
      name: "--strict-comments",
      description: "Turn on strict (SGML) handling of HTML comments",
    },

    // Recursive accept/reject
    {
      name: ["-A", "--accept"],
      description: "Comma-separated list of accepted extensions",
      args: list("LIST"),
    },
    {
      name: ["-R", "--reject"],
      description: "Comma-separated list of rejected extensions",
      args: list("LIST"),
    },
    {
      name: "--accept-regex",
      description: "Regex matching accepted URLs",
      args: { name: "REGEX" },
    },
    {
      name: "--reject-regex",
      description: "Regex matching rejected URLs",
      args: { name: "REGEX" },
    },
    {
      name: "--regex-type",
      description: "Regex type (pcre needs a build with PCRE support)",
      args: { name: "TYPE", suggestions: ["posix", "pcre"] },
    },
    {
      name: ["-D", "--domains"],
      description: "Comma-separated list of accepted domains",
      args: list("LIST"),
    },
    {
      name: "--exclude-domains",
      description: "Comma-separated list of rejected domains",
      args: list("LIST"),
    },
    {
      name: "--follow-ftp",
      description: "Follow FTP links from HTML documents",
    },
    {
      name: "--follow-tags",
      description: "Comma-separated list of followed HTML tags",
      args: list("LIST"),
    },
    {
      name: "--ignore-tags",
      description: "Comma-separated list of ignored HTML tags",
      args: list("LIST"),
    },
    {
      name: ["-H", "--span-hosts"],
      description: "Go to foreign hosts when recursive",
    },
    { name: ["-L", "--relative"], description: "Follow relative links only" },
    {
      name: ["-I", "--include-directories"],
      description: "List of allowed directories",
      args: list("LIST"),
    },
    {
      name: "--trust-server-names",
      description:
        "Use the name specified by the redirection URL's last component",
    },
    {
      name: ["-X", "--exclude-directories"],
      description: "List of excluded directories",
      args: list("LIST"),
    },
    {
      name: ["-np", "--no-parent"],
      description: "Don't ascend to the parent directory",
    },
  ],
};

export default completionSpec;
