// HTTPie v3.2.4 (latest release on PyPI/GitHub, 2026-11-19). Source: static read of httpie/cli/definition.py, httpie/cli/constants.py, httpie/ssl_.py, httpie/plugins/builtin.py and the shipped man page extras/man/http.1 at tag 3.2.4 (binary not run).
// --style suggestions: styles bundled with HTTPie (auto, pie, pie-dark, pie-light, solarized) plus the built-in styles of Pygments 2.21.0; the styles actually available depend on the installed Pygments version.
// --auth-type: built-in plugins only (basic, digest, bearer); auth plugins installed via `httpie cli plugins` add more types.

const printParts: Fig.Suggestion[] = [
  { name: "H", description: "Request headers" },
  { name: "B", description: "Request body" },
  { name: "h", description: "Response headers" },
  { name: "b", description: "Response body" },
  { name: "m", description: "Response metadata" },
];

const completionSpec: Fig.Spec = {
  name: "http",
  description: "HTTPie: command-line HTTP client for the API era",
  args: [
    {
      name: "METHOD",
      isOptional: true,
      suggestions: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      description:
        "The HTTP method to be used for the request. If omitted, HTTPie uses POST if there is some data to be sent, otherwise GET",
    },
    {
      name: "URL",
      description:
        "The request URL. Scheme defaults to 'http://' if the URL does not include one (override with --default-scheme). Shorthand for localhost: ':3000' or ':/foo'",
    },
    {
      name: "REQUEST_ITEM",
      isOptional: true,
      isVariadic: true,
      description:
        "Optional key-value pairs to be included in the request. The separator used determines the type: Name:Value (HTTP header), name==value (URL parameter), field=value (data field), field:=json (raw JSON field), field@file (form file upload), field=@file (data field from file), field:=@file (raw JSON field from file)",
    },
  ],
  options: [
    {
      name: ["--json", "-j"],
      exclusiveOn: ["--form", "-f", "--multipart", "--boundary"],
      description:
        "(default) Data items from the command line are serialized as a JSON object. The Content-Type and Accept headers are set to application/json (if not specified)",
    },
    {
      name: ["--form", "-f"],
      exclusiveOn: ["--json", "-j", "--multipart"],
      description: `Data items from the command line are serialized as form fields.
The Content-Type is set to application/x-www-form-urlencoded (if not
specified). The presence of any file fields results in a
multipart/form-data request`,
    },
    {
      name: "--multipart",
      exclusiveOn: ["--json", "-j", "--form", "-f"],
      description:
        "Similar to --form, but always sends a multipart/form-data request (i.e., even without files)",
    },
    {
      name: "--boundary",
      args: {
        name: "BOUNDARY",
      },
      exclusiveOn: ["--json", "-j"],
      description:
        "Specify a custom boundary string for multipart/form-data requests. Only has effect together with --form or --multipart",
    },
    {
      name: "--raw",
      args: {
        name: "RAW",
      },
      description:
        "Pass raw request data without extra processing (as opposed to the structured request items syntax)",
    },
    {
      name: ["--compress", "-x"],
      isRepeatable: true,
      description: `Content compressed (encoded) with Deflate algorithm. The Content-Encoding
header is set to deflate. Compression is skipped if it appears that
compression ratio is negative. Compression can be forced by repeating
the argument`,
    },
    {
      name: "--pretty",
      args: {
        suggestions: ["all", "colors", "format", "none"],
      },
      description: `Controls output processing. The value can be "none" to not prettify
the output (default for redirected output), "all" to apply both colors
and formatting (default for terminal output), "colors", or "format"`,
    },
    {
      name: ["--style", "-s"],
      args: {
        name: "STYLE",
        suggestions: [
          "abap",
          "algol",
          "algol_nu",
          "arduino",
          "auto",
          "autumn",
          "borland",
          "bw",
          "coffee",
          "colorful",
          "default",
          "dracula",
          "emacs",
          "friendly",
          "friendly_grayscale",
          "fruity",
          "github-dark",
          "gruvbox-dark",
          "gruvbox-light",
          "igor",
          "inkpot",
          "lightbulb",
          "lilypond",
          "lovelace",
          "manni",
          "material",
          "monokai",
          "murphy",
          "native",
          "night-owl",
          "nord",
          "nord-darker",
          "one-dark",
          "paraiso-dark",
          "paraiso-light",
          "pastie",
          "perldoc",
          "pie",
          "pie-dark",
          "pie-light",
          "rainbow_dash",
          "rrt",
          "sas",
          "solarized",
          "solarized-dark",
          "solarized-light",
          "staroffice",
          "stata-dark",
          "stata-light",
          "tango",
          "trac",
          "vim",
          "vs",
          "xcode",
          "zenburn",
        ],
        default: "auto",
      },
      description: `Output coloring style (default is "auto"). The "auto" style follows
your terminal's ANSI color styles`,
    },
    {
      name: "--unsorted",
      description: "Disables all sorting while formatting output",
      exclusiveOn: ["--sorted"],
    },
    {
      name: "--sorted",
      description: "Re-enables all sorting options while formatting output",
      exclusiveOn: ["--unsorted"],
    },
    {
      name: "--response-charset",
      args: {
        name: "ENCODING",
      },
      description:
        "Override the response encoding for terminal display purposes (e.g. utf8, big5)",
    },
    {
      name: "--response-mime",
      args: {
        name: "MIME_TYPE",
      },
      description:
        "Override the response mime type for coloring and formatting for the terminal (e.g. application/json, text/xml)",
    },
    {
      name: "--format-options",
      args: {
        name: "FORMAT_OPTIONS",
        suggestions: [
          "headers.sort:true",
          "headers.sort:false",
          "json.format:true",
          "json.indent:4",
          "json.sort_keys:true",
          "json.sort_keys:false",
          "xml.format:true",
          "xml.indent:2",
        ],
      },
      isRepeatable: true,
      description: `Controls output formatting. Only relevant when formatting is enabled
through (explicit or implied) --pretty=all or --pretty=format. Multiple
comma-separated options can be given at once`,
    },
    {
      name: ["--print", "-p"],
      args: {
        name: "WHAT",
        suggestions: printParts,
        default: "hb",
      },
      description: "String specifying what the output should contain",
    },
    {
      name: ["--headers", "-h"],
      description: "Print only the response headers. Shortcut for --print=h",
    },
    {
      name: ["--meta", "-m"],
      description: "Print only the response metadata. Shortcut for --print=m",
    },
    {
      name: ["--body", "-b"],
      description: "Print only the response body. Shortcut for --print=b",
    },
    {
      name: ["--verbose", "-v"],
      isRepeatable: true,
      description: `Verbose output. For the level one (with single -v/--verbose), print
the whole request as well as the response. Also print any intermediary
requests/responses (such as redirects). For the second level and higher,
print these as well as the response metadata.
Level one is a shortcut for: --all --print=BHbh
Level two is a shortcut for: --all --print=BHbhm`,
    },
    {
      name: "--all",
      description: `By default, only the final request/response is shown. Use this flag to show
any intermediary requests/responses as well. Intermediary requests include
followed redirects (with --follow), the first unauthorized request when
Digest auth is used (--auth-type=digest), etc`,
    },
    {
      name: ["--history-print", "-P"],
      args: {
        name: "WHAT",
        suggestions: printParts,
      },
      deprecated: true,
      description: `Soft deprecated and hidden from --help. The same as --print, -p but applies
only to intermediary requests/responses (such as redirects) when their
inclusion is enabled with --all`,
    },
    {
      name: ["--stream", "-S"],
      description:
        "Always stream the response body by line, i.e., behave like `tail -f'",
    },
    {
      name: ["--output", "-o"],
      args: {
        name: "FILE",
        template: "filepaths",
      },
      description: `Save output to FILE instead of stdout. If --download is also set, then only
the response body is saved to FILE. Other parts of the HTTP exchange are
printed to stderr`,
    },
    {
      name: ["--download", "-d"],
      description: `Do not print the response body to stdout. Rather, download it and store it
in a file. The filename is guessed unless specified with --output
[filename]. This action is similar to the default behaviour of wget`,
    },
    {
      name: ["--continue", "-c"],
      description:
        "Resume an interrupted download. Note that the --output option needs to be specified as well",
    },
    {
      name: ["--quiet", "-q"],
      isRepeatable: 2,
      description: `Do not print to stdout or stderr, except for errors and warnings when
provided once. Provide twice to suppress warnings as well.
stdout is still redirected if --output is specified.
Flag doesn't affect behaviour of download beyond not printing to terminal`,
    },
    {
      name: "--session",
      args: {
        name: "SESSION_NAME_OR_PATH",
        template: "filepaths",
      },
      exclusiveOn: ["--session-read-only"],
      description: `Create, or reuse and update a session. Within a session, custom headers,
auth credential, as well as any cookies sent by the server persist between
requests`,
    },
    {
      name: "--session-read-only",
      args: {
        name: "SESSION_NAME_OR_PATH",
        template: "filepaths",
      },
      exclusiveOn: ["--session"],
      description:
        "Create or read a session without updating it from the request/response exchange",
    },
    {
      name: ["--auth", "-a"],
      args: {
        name: "USER[:PASS] | TOKEN",
      },
      description:
        "Credentials for the selected (-A) authentication method. For username/password based mechanisms, if only the username is provided (-a username), HTTPie will prompt for the password",
    },
    {
      name: ["--auth-type", "-A"],
      args: {
        suggestions: [
          { name: "basic", description: "Basic HTTP auth" },
          { name: "digest", description: "Digest HTTP auth" },
          { name: "bearer", description: "Bearer HTTP auth" },
        ],
      },
      description:
        'The authentication mechanism to be used. Defaults to "basic"',
    },
    {
      name: "--ignore-netrc",
      description: "Ignore credentials from .netrc",
    },
    {
      name: "--offline",
      description: "Build the request and print it but don’t actually send it",
    },
    {
      name: "--proxy",
      args: {
        name: "PROTOCOL:PROXY_URL",
      },
      isRepeatable: true,
      description: `String mapping protocol to the URL of the proxy
(e.g. http:http://foo.bar:3128). You can specify multiple proxies with
different protocols. The environment variables $ALL_PROXY, $HTTP_PROXY,
and $HTTPS_proxy are supported as well`,
    },
    {
      name: ["--follow", "-F"],
      description: "Follow 30x Location redirects",
    },
    {
      name: "--max-redirects",
      args: {
        name: "MAX_REDIRECTS",
        default: "30",
      },
      description:
        "The maximum number of redirects that should be followed (works with --follow)",
    },
    {
      name: "--max-headers",
      args: {
        name: "MAX_HEADERS",
        default: "0",
      },
      description:
        "The maximum number of response headers to be read before giving up (default 0, i.e., no limit)",
    },
    {
      name: "--timeout",
      args: {
        name: "SECONDS",
        default: "0",
      },
      description: `The connection timeout of the request in seconds.
The default value is 0, i.e., there is no timeout limit.
This is not a time limit on the entire response download; rather, an error
is reported if the server has not issued a response for timeout seconds`,
    },
    {
      name: "--check-status",
      description: `By default, HTTPie exits with 0 when no network or other fatal errors
occur. This flag instructs HTTPie to also check the HTTP status code and
exit with an error if the status indicates one (exit status 3 for 3xx
without --follow, 4 for 4xx, 5 for 5xx)`,
    },
    {
      name: "--path-as-is",
      description: "Bypass dot segment (/../ or /./) URL squashing",
    },
    {
      name: "--chunked",
      description:
        "Enable streaming via chunked transfer encoding. The Transfer-Encoding header is set to chunked",
    },
    {
      name: "--verify",
      args: {
        name: "VERIFY",
        suggestions: ["no", "yes"],
        template: "filepaths",
      },
      description: `Set to "no" (or "false") to skip checking the host's SSL certificate.
Defaults to "yes" ("true"). You can also pass the path to a CA_BUNDLE file
for private certs. (Or you can set the REQUESTS_CA_BUNDLE environment
variable instead.)`,
    },
    {
      name: "--ssl",
      args: {
        suggestions: ["ssl2.3", "ssl3", "tls1", "tls1.1", "tls1.2", "tls1.3"],
      },
      description: `The desired protocol version to use. This will default to
SSL v2.3 which will negotiate the highest protocol that both
the server and your installation of OpenSSL support. Available protocols
may vary depending on OpenSSL installation`,
    },
    {
      name: "--ciphers",
      args: {
        name: "CIPHERS",
      },
      description:
        "A string in the OpenSSL cipher list format. By default, the ciphers configured by the system are used",
    },
    {
      name: "--cert",
      args: {
        template: "filepaths",
      },
      description: `You can specify a local cert to use as client side SSL certificate.
This file may either contain both private key and certificate or you may
specify --cert-key separately`,
    },
    {
      name: "--cert-key",
      args: {
        template: "filepaths",
      },
      description:
        "The private key to use with SSL. Only needed if --cert is given and the certificate file does not contain the private key",
    },
    {
      name: "--cert-key-pass",
      args: {
        name: "PASSPHRASE",
      },
      description:
        "The passphrase to be used with the given private key. Only needed if --cert-key is given and the key file requires a passphrase. If not provided, you’ll be prompted interactively",
    },
    {
      name: ["--ignore-stdin", "-I"],
      description: "Do not attempt to read stdin",
    },
    {
      name: "--help",
      description: "Show the help message and exit",
    },
    {
      name: "--manual",
      description: "Show the full manual",
    },
    {
      name: "--version",
      description: "Show version and exit",
    },
    {
      name: "--traceback",
      description: "Prints the exception traceback should one occur",
    },
    {
      name: "--default-scheme",
      args: {
        name: "DEFAULT_SCHEME",
        suggestions: ["http", "https"],
        default: "http",
      },
      description: "The default scheme to use if not specified in the URL",
    },
    {
      name: "--debug",
      description: `Prints the exception traceback should one occur, as well as other
information useful for debugging HTTPie itself and for reporting bugs`,
    },
  ],
};

export default completionSpec;
