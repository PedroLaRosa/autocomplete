// Firefox v160.0.1 (mozilla-firefox/firefox tag FIREFOX_160_0_1_RELEASE, cross-checked with the Homebrew cask firefox 160.0.1; 2026-11-19).
// Source: static read of the command line handlers at that tag, not a live run of the binary:
// toolkit/xre/nsAppRunner.cpp (DumpHelp), browser/components/BrowserContentHandler.sys.mjs,
// browser/components/shell/HeadlessShell.sys.mjs, devtools/startup/DevToolsStartup.sys.mjs,
// remote/components/RemoteAgent.sys.mjs and remote/components/Marionette.sys.mjs.
// Platform-specific flags that only exist on Windows (--console) are omitted; --dbus-service is Linux (GTK) only.

const completionSpec: Fig.Spec = {
  name: "firefox",
  description: "Free open-source web browser developed by Mozilla",
  args: {
    name: "URL",
    description: "URL to open",
    isOptional: true,
    isVariadic: true,
  },
  options: [
    {
      name: "--display",
      description: "Specify an X display to use",
      args: {
        name: "display",
        description: "X display to use",
      },
    },
    {
      name: "--sync",
      description: "Make X calls synchronous",
    },
    {
      name: "--g-fatal-warnings",
      description: "Make all warnings fatal",
    },
    {
      name: ["-h", "--help"],
      description: "Print help message and exit",
    },
    {
      name: ["-v", "--version"],
      description: "Print version information and exit",
    },
    {
      name: "--full-version",
      description: "Print full version, build and platform build ids and exit",
    },
    {
      name: "-P",
      description: "Start with the given profile",
      args: {
        name: "profile",
        description: "Profile to use",
      },
    },
    {
      name: "--profile",
      description: "Start with the profile at the given path",
      args: {
        name: "path",
        description: "Profile folder to use",
        template: "folders",
      },
    },
    {
      name: "--migration",
      description: "Start with migration wizard",
    },
    {
      name: "--ProfileManager",
      description: "Start with ProfileManager",
    },
    {
      name: "--origin-to-force-quic-on",
      description: "Force to use QUIC for the specified origin",
      args: {
        name: "origin",
      },
    },
    {
      name: "--no-remote",
      description: "Ignored, no longer supported (use --new-instance instead)",
      deprecated: true,
    },
    {
      name: "--new-instance",
      description: "Open new instance, not a new window in running instance",
    },
    {
      name: "--safe-mode",
      description: "Disables extensions and themes for this session",
    },
    {
      name: "--allow-downgrade",
      description: "Allows downgrading a profile",
    },
    {
      name: "--MOZ_LOG",
      description:
        "Treated as MOZ_LOG=<modules> environment variable, overrides it",
      args: {
        name: "modules",
      },
    },
    {
      name: "--MOZ_LOG_FILE",
      description:
        "Treated as MOZ_LOG_FILE=<file> environment variable, overrides it. If MOZ_LOG_FILE is not specified as an argument or as an environment variable, logging will be written to stdout",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--headless",
      description: "Run without a GUI",
    },
    {
      name: "--dbus-service",
      description:
        "Run as DBus service for org.freedesktop.Application and set a launcher (usually /usr/bin/appname script) for it",
      args: {
        name: "launcher",
        template: "filepaths",
      },
    },
    {
      name: "--jsdebugger",
      description:
        "Open the Browser Toolbox. Defaults to the local build but can be overridden by a firefox path",
      args: {
        name: "path",
        template: "filepaths",
        isOptional: true,
      },
    },
    {
      name: "--wait-for-jsdebugger",
      description:
        "Spin event loop until JS debugger connects; enables debugging (some) application startup code paths",
      dependsOn: ["--jsdebugger"],
    },
    {
      name: "--start-debugger-server",
      description:
        "Start the devtools server on a TCP port (default: 6000) or Unix domain socket path, use the ws: prefix for the WebSocket protocol",
      args: {
        name: "[ws:][port | path]",
        isOptional: true,
        template: "filepaths",
        generators: {
          // Needs to trigger on every keystroke
          trigger: () => true,

          // Suggest current token if it's a port number
          custom: async (tokens) => {
            const finalToken = tokens[tokens.length - 1];
            const port = Number(finalToken);
            if (Number.isNaN(port)) return [];
            if (!Number.isInteger(port)) return [];
            if (port < 0 || port > 65535) return [];
            return [{ name: finalToken, description: "Port number" }];
          },
        },
      },
    },
    {
      name: "--browser",
      description: "Open a browser window",
    },
    {
      name: "--new-window",
      description: "Open a URL in a new window",
      isRepeatable: true,
      args: {
        name: "URL",
        description: "URL to open",
      },
    },
    {
      name: "--new-tab",
      description: "Open a URL in a new tab",
      isRepeatable: true,
      args: {
        name: "URL",
        description: "URL to open",
      },
    },
    {
      name: "--url-background",
      description: "Open a URL in a background tab",
      isRepeatable: true,
      args: {
        name: "URL",
        description: "URL to open",
      },
    },
    {
      name: "--data",
      description: "Open a data: URL",
      isRepeatable: true,
      args: {
        name: "data-URL",
        description: "Data URL to open",
      },
    },
    {
      name: "--private-window",
      description: "Open a URL in a new private window",
      isRepeatable: true,
      args: {
        name: "URL",
        description: "URL to open",
        isOptional: true,
      },
    },
    {
      name: "--preferences",
      description: "Open the preferences dialog",
    },
    {
      name: "--screenshot",
      description:
        "Save a screenshot of the given URL to the path or in the working directory",
      args: {
        isOptional: true,
        name: "path",
        description:
          "File to save the screenshot to (default: screenshot.png in the working directory)",
        template: "filepaths",
      },
    },
    {
      name: "--window-size",
      description: "Width and optionally height of the screenshot",
      dependsOn: ["--screenshot"],
      args: {
        name: "width[,height]",
        description: "Width and optionally height of your screenshot",
      },
    },
    {
      name: "--search",
      description: "Search for a term in your default search engine",
      args: {
        name: "term",
        description: "Term to search for",
      },
    },
    {
      name: "--setDefaultBrowser",
      description: "Set Firefox as the default browser",
    },
    {
      name: "--first-startup",
      description: "Run post-install actions before opening a new window",
    },
    {
      name: "--kiosk",
      description: "Start the browser in kiosk mode",
    },
    {
      name: "--kiosk-monitor",
      description: "Place kiosk browser window on given monitor",
      args: {
        name: "num",
        description: "Monitor number",
      },
    },
    {
      name: "--disable-pinch",
      description: "Disable touch-screen and touch-pad pinch gestures",
    },
    {
      name: "--jsconsole",
      description: "Open the Browser Console",
    },
    {
      name: "--devtools",
      description: "Open DevTools on initial load",
    },
    {
      name: "--marionette",
      description: "Enable remote control server",
    },
    {
      name: "--remote-debugging-port",
      description:
        "Start the Firefox Remote Agent, which is a low-level remote debugging interface used for WebDriver BiDi",
      args: {
        name: "port",
        description: "Defaults to port 9222",
        isOptional: true,
        default: "9222",
      },
    },
    {
      name: "--remote-allow-hosts",
      description: "Values of the Host header to allow for incoming requests",
      args: {
        name: "hosts",
        description: "Comma-separated list of hosts",
      },
    },
    {
      name: "--remote-allow-origins",
      description: "Values of the Origin header to allow for incoming requests",
      args: {
        name: "origins",
        description: "Comma-separated list of origins",
      },
    },
  ],
};
export default completionSpec;
