// Streamlit v1.67.0 (PyPI latest, 2026-11-19). Source: streamlit/web/cli.py and streamlit/config.py from the
// 1.67.0 wheel, read statically (not run; config options extracted with a Python ast script, not by importing streamlit).
// The --<section>.<option> config flags are accepted by `run`, `hello` and `config show`; options with
// visibility "hidden" (internal) and sensitive ones (e.g. server.cookieSecret, rejected on the CLI) are left out.
import { filepaths } from "@tabsmith/autocomplete-generators";

const boolArg: Fig.Arg = {
  name: "bool",
  suggestions: ["true", "false"],
};
const intArg: Fig.Arg = { name: "int" };
const floatArg: Fig.Arg = { name: "float" };
const strArg: Fig.Arg = { name: "value" };

const configOptions: Fig.Option[] = [
  {
    name: "--global.disableWidgetStateDuplicationWarning",
    description:
      "Turn off the warning logged when a widget value is set both by its default and via st.session_state",
    args: boolArg,
  },
  {
    name: "--global.showWarningOnDirectExecution",
    description:
      'If True, will show a warning when you run a Streamlit-enabled script via "python my_script.py"',
    args: boolArg,
  },
  {
    name: "--logger.level",
    description:
      'Level of logging for Streamlit\'s internal logger: "error", "warning", "info", or "debug"',
    args: { name: "value", suggestions: ["error", "warning", "info", "debug"] },
  },
  {
    name: "--logger.messageFormat",
    description: "String format for logging messages",
    args: strArg,
  },
  {
    name: "--client.showErrorDetails",
    description:
      "Control whether uncaught app exceptions and deprecation warnings are displayed in the browser",
    args: {
      name: "value",
      suggestions: ["full", "stacktrace", "type", "none"],
    },
  },
  {
    name: "--client.toolbarMode",
    description:
      "Change the visibility of items in the toolbar and options menu (top right of the app)",
    args: {
      name: "value",
      suggestions: ["auto", "developer", "viewer", "minimal"],
    },
  },
  {
    name: "--client.disableDataExport",
    description:
      "Hide the built-in controls for exporting data from components that support it",
    args: boolArg,
  },
  {
    name: "--client.showSidebarNavigation",
    description:
      "Controls whether to display the default sidebar page navigation in a multi-page app",
    args: boolArg,
  },
  {
    name: "--client.showErrorLinks",
    description:
      "Control whether to show external help links (Google, ChatGPT) in error displays",
    args: { name: "value", suggestions: ["auto", "true", "false"] },
  },
  {
    name: "--runner.magicEnabled",
    description:
      "Allows you to type a variable or string by itself in a single line of Python code to write it to the app",
    args: boolArg,
  },
  {
    name: "--runner.fastReruns",
    description:
      "Handle script rerun requests immediately, rather than waiting for script execution to reach a yield point",
    args: boolArg,
  },
  {
    name: "--runner.enforceSerializableSessionState",
    description:
      "Raise an exception after adding unserializable data to Session State",
    args: boolArg,
  },
  {
    name: "--runner.enumCoercion",
    description:
      "Adjust how certain 'options' widgets like radio, selectbox, and multiselect coerce Enum members",
    args: { name: "value", suggestions: ["off", "nameOnly", "nameAndValue"] },
  },
  {
    name: "--runner.parallelMaxWorkers",
    description:
      "Maximum number of parallel fragment worker threads per script run",
    args: intArg,
  },
  {
    name: "--runner.cacheBackgroundRefreshTTLMultiplier",
    description:
      'Multiplier of a cached function\'s ttl that sets the hard-expiration bound for refresh_mode="background"',
    args: floatArg,
  },
  {
    name: "--runner.connectionDefaultTTL",
    description:
      "Default time to live, in seconds, for `st.connection` when its `ttl` argument is omitted entirely",
    args: floatArg,
  },
  {
    name: "--runner.cacheHashSeed",
    description:
      "Integer seed (0 to 4294967295) that changes which positions are sampled when hashing large objects for st.cache_data and st.cache_resource",
    args: intArg,
  },
  {
    name: "--server.folderWatchList",
    description: "List of directories to watch for changes",
    isRepeatable: true,
    args: { name: "value", template: "folders" },
  },
  {
    name: "--server.folderWatchBlacklist",
    description: "List of directories to ignore for changes",
    isRepeatable: true,
    args: { name: "value", template: "folders" },
  },
  {
    name: "--server.fileWatcherType",
    description:
      "Change the type of file watcher used by Streamlit, or turn it off completely",
    args: { name: "value", suggestions: ["auto", "watchdog", "poll", "none"] },
  },
  {
    name: "--server.enableExpensiveMemoryStats",
    description:
      "If True, Streamlit will use a recursive object graph traversal to calculate memory usage statistics for the /_stcore/metrics endpoint",
    args: boolArg,
  },
  {
    name: "--server.maxCacheDataSize",
    description:
      "Maximum combined serialized size of all in-memory st.cache_data entries, e.g. 2gb or 500mb (unset or 0 disables the limit)",
    args: strArg,
  },
  {
    name: "--server.headless",
    description: "If false, will attempt to open a browser window on start",
    args: boolArg,
  },
  {
    name: "--server.showEmailPrompt",
    description:
      "Whether to show a terminal prompt for the user's email address when they run Streamlit (locally) for the first time",
    args: boolArg,
  },
  {
    name: "--server.runOnSave",
    description: "Automatically rerun script when the file is modified on disk",
    args: boolArg,
  },
  {
    name: "--server.address",
    description:
      "The address where the server will listen for client and browser connections",
    args: strArg,
  },
  {
    name: "--server.port",
    description:
      "The port where the server will listen for browser connections",
    args: intArg,
  },
  {
    name: "--server.baseUrlPath",
    description:
      "The base path for the URL where Streamlit should be served from",
    args: strArg,
  },
  {
    name: "--server.enableCORS",
    description:
      "Enables support for Cross-Origin Resource Sharing (CORS) protection, for added security",
    args: boolArg,
  },
  {
    name: "--server.corsAllowedOrigins",
    description: "Allowed list of origins",
    isRepeatable: true,
    args: strArg,
  },
  {
    name: "--server.allowedHosts",
    description: "Allow-list of hostnames for incoming WebSocket connections",
    isRepeatable: true,
    args: strArg,
  },
  {
    name: "--server.enableXsrfProtection",
    description:
      "Enables support for Cross-Site Request Forgery (XSRF) protection, for added security",
    args: boolArg,
  },
  {
    name: "--server.xsrfCookieSameSite",
    description:
      "Controls the SameSite attribute of the cookie Streamlit uses for Cross-Site Request Forgery (XSRF) protection",
    args: { name: "value", suggestions: ["lax", "strict", "none"] },
  },
  {
    name: "--server.maxUploadSize",
    description:
      "Max size, in megabytes, for files uploaded with the file_uploader",
    args: intArg,
  },
  {
    name: "--server.maxMessageSize",
    description:
      "Max size, in megabytes, of messages that can be sent via the WebSocket connection",
    args: intArg,
  },
  {
    name: "--server.enableWebsocketCompression",
    description: "Enables support for websocket compression",
    args: boolArg,
  },
  {
    name: "--server.websocketPingInterval",
    description:
      "Interval in seconds at which the server pings the client to keep the websocket connection alive",
    args: intArg,
  },
  {
    name: "--server.enableStaticServing",
    description:
      "Enable serving files from a `static` directory in the running app's directory",
    args: boolArg,
  },
  {
    name: "--server.disconnectedSessionTTL",
    description:
      "TTL in seconds for sessions whose websockets have been disconnected",
    args: intArg,
  },
  {
    name: "--server.enableAgentApi",
    description:
      "Enable the agent API, which lets a non-browser client drive the app over HTTP or as a remote MCP server",
    args: boolArg,
  },
  {
    name: "--server.agentWaitTimeout",
    description:
      "Maximum number of seconds an agent API request waits for the app to finish running, including any reruns it triggers, before returning `wait_timed_out`",
    args: intArg,
  },
  {
    name: "--server.agentSessionTTL",
    description: "TTL in seconds for idle agent API sessions",
    args: intArg,
  },
  {
    name: "--server.agentMaxSessions",
    description:
      "Maximum number of agent API sessions the server holds at once",
    args: intArg,
  },
  {
    name: "--server.agentPreviewRows",
    description:
      "Maximum number of rows an agent API response includes inline in the preview of a table or chart",
    args: intArg,
  },
  {
    name: "--browser.serverAddress",
    description:
      "Internet address where users should point their browsers in order to connect to the app",
    args: strArg,
  },
  {
    name: "--browser.gatherUsageStats",
    description: "Whether to send usage statistics to Streamlit",
    args: boolArg,
  },
  {
    name: "--browser.serverPort",
    description:
      "Port where users should point their browsers in order to connect to the app",
    args: intArg,
  },
  {
    name: "--server.sslCertFile",
    description:
      "Server certificate file for connecting via HTTPS (must be set together with server.sslKeyFile)",
    args: { name: "value", template: "filepaths" },
  },
  {
    name: "--server.sslKeyFile",
    description:
      "Cryptographic key file for connecting via HTTPS (must be set together with server.sslCertFile)",
    args: { name: "value", template: "filepaths" },
  },
  {
    name: "--secrets.files",
    description: "List of locations where secrets are searched",
    isRepeatable: true,
    args: { name: "value", template: "filepaths" },
  },
];

const themeOptionsAllSections: [
  name: string,
  description: string,
  arg?: Fig.Arg,
][] = [
  ["primaryColor", "Primary accent color"],
  ["backgroundColor", "Background color of the app"],
  [
    "secondaryBackgroundColor",
    "Background color used for most interactive widgets",
  ],
  ["textColor", "Color used for almost all text"],
  ["redColor", "Red color used in the basic color palette"],
  ["orangeColor", "Orange color used in the basic color palette"],
  ["yellowColor", "Yellow color used in the basic color palette"],
  ["blueColor", "Blue color used in the basic color palette"],
  ["greenColor", "Green color used in the basic color palette"],
  ["violetColor", "Violet color used in the basic color palette"],
  ["grayColor", "Gray color used in the basic color palette"],
  [
    "redBackgroundColor",
    "Red background color used in the basic color palette",
  ],
  [
    "orangeBackgroundColor",
    "Orange background color used for the basic color palette",
  ],
  [
    "yellowBackgroundColor",
    "Yellow background color used for the basic color palette",
  ],
  [
    "blueBackgroundColor",
    "Blue background color used for the basic color palette",
  ],
  [
    "greenBackgroundColor",
    "Green background color used for the basic color palette",
  ],
  [
    "violetBackgroundColor",
    "Violet background color used for the basic color palette",
  ],
  [
    "grayBackgroundColor",
    "Gray background color used for the basic color palette",
  ],
  ["redTextColor", "Red text color used for the basic color palette"],
  ["orangeTextColor", "Orange text color used for the basic color palette"],
  ["yellowTextColor", "Yellow text color used for the basic color palette"],
  ["blueTextColor", "Blue text color used for the basic color palette"],
  ["greenTextColor", "Green text color used for the basic color palette"],
  ["violetTextColor", "Violet text color used for the basic color palette"],
  ["grayTextColor", "Gray text color used for the basic color palette"],
  ["linkColor", "Color used for all links"],
  [
    "linkUnderline",
    "Whether or not links should be displayed with an underline",
    boolArg,
  ],
  ["codeTextColor", "Text color used for code blocks"],
  ["codeBackgroundColor", "Background color used for code blocks"],
  ["font", "The font family for all text, except code blocks"],
  ["headingFont", "The font family to use for headings"],
  ["headingFontSizes", "One or more font sizes for h1-h6 headings"],
  ["headingFontWeights", "One or more font weights for h1-h6 headings"],
  ["codeFont", "The font family to use for code (monospace)"],
  [
    "codeFontSize",
    "The font size (in pixels or rem) for code blocks and code text",
  ],
  ["codeFontWeight", "The font weight for code blocks and code text", intArg],
  [
    "baseRadius",
    "The radius used as basis for the corners of most UI elements",
  ],
  ["buttonRadius", "The radius used as basis for the corners of buttons"],
  [
    "paddingTop",
    "The gap under the header to the first widget in the main content area or sidebar",
  ],
  [
    "paddingBottom",
    "The aesthetic bottom inset after the last widget in the main content area or sidebar",
  ],
  ["borderColor", "The color of the border around elements"],
  [
    "dataframeBorderColor",
    "The color of the border around dataframes and tables",
  ],
  [
    "dataframeHeaderBackgroundColor",
    "The background color of the dataframe's header",
  ],
  ["dataframeHeaderTextColor", "The text color of the dataframe's header"],
  [
    "showWidgetBorder",
    "Whether to show a border around input widgets",
    boolArg,
  ],
  [
    "chartCategoricalColors",
    "An array of colors to use for categorical chart data",
  ],
  [
    "chartSequentialColors",
    "An array of ten colors to use for sequential or continuous chart data",
  ],
  [
    "chartDivergingColors",
    "An array of ten colors to use for diverging chart data",
  ],
];

const themeOptionsMainOnly: [
  name: string,
  description: string,
  arg?: Fig.Arg,
][] = [
  [
    "base",
    "The theme that your custom theme inherits from",
    { name: "value", suggestions: ["light", "dark"] },
  ],
  ["fontFaces", "An array of fonts to use in your app"],
  ["baseFontSize", "The root font size (in pixels) for the app", intArg],
  ["baseFontWeight", "The root font weight for the app", intArg],
  ["metricValueFontSize", "The font size for st.metric value text"],
  ["metricValueFontWeight", "The font weight for st.metric value text", intArg],
  [
    "showSidebarBorder",
    "Whether to show a vertical separator between the sidebar and the main content area",
    boolArg,
  ],
];

const themeSections = [
  "theme",
  "theme.sidebar",
  "theme.light",
  "theme.dark",
  "theme.light.sidebar",
  "theme.dark.sidebar",
];

const themeOption = (
  section: string,
  [name, description, args = strArg]: [string, string, Fig.Arg?]
): Fig.Option => ({
  name: `--${section}.${name}`,
  description,
  args,
});

const themeOptions: Fig.Option[] = [
  ...themeSections.flatMap((section) =>
    themeOptionsAllSections.map((entry) => themeOption(section, entry))
  ),
  ...themeOptionsMainOnly.map((entry) => themeOption("theme", entry)),
];

// Options generated from Streamlit's config for `run`, `hello` and `config show`
const allConfigOptions: Fig.Option[] = [...configOptions, ...themeOptions];

const completionSpec: Fig.Spec = {
  name: "streamlit",
  description: "Streamlit",
  subcommands: [
    {
      name: "activate",
      description: "Activate Streamlit by entering your email",
      icon: "✉️",
      subcommands: [
        {
          name: "reset",
          description: "Reset activation credentials",
        },
      ],
    },
    {
      name: "cache",
      description: "Manage the Streamlit cache",
      icon: "🗂",
      subcommands: [
        {
          name: "clear",
          description: "Clear st.cache_data and st.cache_resource caches",
          icon: "🗑",
        },
      ],
    },
    {
      name: "config",
      description: "Manage Streamlit's config settings",
      icon: "⚙️",
      subcommands: [
        {
          name: "show",
          description: "Show all of Streamlit's config settings",
          icon: "👀",
          options: allConfigOptions,
        },
      ],
    },
    {
      name: "docs",
      description:
        "Look up a Streamlit command, or open the docs in your browser",
      icon: "💡",
      args: {
        name: "command",
        description:
          "Streamlit command to look up, like st.number_input (opens the docs website if omitted)",
        isOptional: true,
      },
    },
    {
      name: "hello",
      description: "Runs the Hello World script",
      icon: "👋",
      options: allConfigOptions,
    },
    {
      name: "help",
      description: "Print this help message",
      icon: "❓",
    },
    {
      name: "init",
      description: "Initialize a new Streamlit project",
      icon: "🌱",
      args: {
        name: "directory",
        description:
          "Directory to create and initialize the project in (default is the current directory)",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: "run",
      description: "Run a Python script, piping stderr to Streamlit",
      icon: "🎈",
      options: allConfigOptions,
      args: [
        {
          name: "file",
          description:
            "A local Python file or folder containing streamlit_app.py, or a URL to a Python file",
          default: "streamlit_app.py",
          isOptional: true,
          generators: filepaths({
            extensions: ["py", "py3"],
            editFileSuggestions: { priority: 76 },
          }),
        },
        {
          name: "args",
          description:
            "Command-line arguments passed to the script (put them after --)",
          isVariadic: true,
          isOptional: true,
        },
      ],
    },
    {
      name: "skills",
      description: "Install Streamlit AI-agent skills",
      icon: "🧰",
      options: [
        {
          name: ["-g", "--global"],
          description: "Install globally (in user directory)",
        },
        {
          name: ["-y", "--yes"],
          description: "Skip confirmation prompts",
        },
      ],
    },
    {
      name: "test",
      description: "Internal-only commands used for testing",
      hidden: true,
      subcommands: [
        {
          name: "prog_name",
          description:
            "Assert that the program name is set to `streamlit test`",
        },
      ],
    },
    {
      name: "version",
      description: "Print Streamlit's version number",
      icon: "💯",
    },
  ],
  options: [
    {
      name: "--log_level",
      description:
        "Set the log level (unsupported, use --logger.level after the command instead)",
      deprecated: true,
      args: {
        name: "level",
        suggestions: [
          { name: "error", icon: "🔥" },
          { name: "warning", icon: "⚠️" },
          { name: "info", icon: "ℹ️" },
          { name: "debug", icon: "🐛" },
        ],
      },
    },
    {
      name: "--help",
      description: "Show a help message and exit",
    },
    {
      name: "--version",
      description: "Show the version and exit",
    },
  ],
};
export default completionSpec;
