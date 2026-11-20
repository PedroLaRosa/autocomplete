// Jupyter (jupyter_core 5.9.1 meta command; notebook 7.6.5, jupyterlab 4.6.6, jupyter_server 2.21.1, nbconvert 7.17.2, jupyter_client 8.10.0, jupyter-console 6.6.3, nbclient 0.11.0, jupyter_builder 1.3.0; PyPI latest, 2026-11-19).
// Source: `--help` of every `jupyter <subcommand>` (and nested subcommand) walked in a pip venv. Legacy bundlerextension/nbextension/serverextension (removed in Notebook 7) checked against notebook 6.5.7 and kept as deprecated.
// Not verified: `jupyter labhub` options (needs jupyterhub), `jupyter qtconsole` and other third-party `jupyter-<name>` plugins are not listed.

const kernelspecGenerator: Fig.Generator = {
  script: ["jupyter", "kernelspec", "list", "--json"],
  postProcess: (out) => {
    try {
      const specs = JSON.parse(out).kernelspecs as Record<
        string,
        { spec?: { display_name?: string } }
      >;
      return Object.entries(specs).map(([name, value]) => ({
        name,
        description: value.spec?.display_name,
      }));
    } catch {
      return [];
    }
  },
};

const kernelspecNamesArg: Fig.Arg = {
  name: "kernel",
  isVariadic: true,
  generators: kernelspecGenerator,
};

const commonOptions: Fig.Option[] = [
  {
    name: "--debug",
    description: "Set log level to logging.DEBUG (maximize logging output)",
  },
  { name: ["-h", "--help"], description: "Show this message" },
  {
    name: "--help-all",
    description: "Show help including all configurable class-options",
  },
];

const showConfigOptions: Fig.Option[] = [
  {
    name: "--show-config",
    description: "Show the application's configuration (human-readable format)",
  },
  {
    name: "--show-config-json",
    description: "Show the application's configuration (json format)",
  },
];

const logConfigOptions: Fig.Option[] = [
  {
    name: "--log-level",
    description: "Set the log level by value or name",
    args: {
      name: "level",
      suggestions: ["DEBUG", "INFO", "WARN", "ERROR", "CRITICAL"],
    },
  },
  {
    name: "--config",
    description: "Full path of a config file",
    args: {
      name: "config",
      template: "filepaths",
    },
  },
];

const generateConfigOptions: Fig.Option[] = [
  {
    name: "--generate-config",
    description: "Generate default config file",
  },
  {
    name: "-y",
    description: "Answer yes to any questions instead of prompting",
  },
];

// Options shared by every JupyterApp based command
const appOptions: Fig.Option[] = [
  ...commonOptions,
  ...showConfigOptions,
  ...generateConfigOptions,
  ...logConfigOptions,
];

const kernelspecRemoveOptions: Fig.Option[] = [
  ...appOptions,
  {
    name: "-f",
    description: "Force removal, don't prompt for confirmation",
  },
  {
    name: "--missing",
    description: "Remove missing kernels",
  },
];

// Options of the nested extension commands (--debug/--show-config/--log-level/--config)
const extensionAppOptions: Fig.Option[] = [
  ...commonOptions,
  ...showConfigOptions,
  ...logConfigOptions,
];

const prefixOptions: Fig.Option[] = [
  {
    name: "--user",
    description: "Apply the operation only for the given user",
  },
  {
    name: "--system",
    description: "Apply the operation system-wide",
  },
  {
    name: "--sys-prefix",
    description:
      "Use sys.prefix as the prefix for installing extensions (for environments, packaging)",
  },
  {
    name: ["--py", "--python"],
    description: "Install from a Python package",
  },
];

const portArg = (name: string, description: string): Fig.Arg => ({
  name,
  description,
});

// jupyter console / jupyter run (JupyterConsoleApp)
const kernelClientOptions: Fig.Option[] = [
  {
    name: "--existing",
    description:
      "Connect to an existing kernel (guesses the most recent if no connection file is given)",
    args: {
      name: "connection file",
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: "--confirm-exit",
    description: "Set to display confirmation dialog on exit",
  },
  {
    name: "--no-confirm-exit",
    description:
      "Don't prompt the user when exiting (terminates the kernel if it is owned by the frontend)",
  },
  {
    name: "--ip",
    description:
      "Set the kernel's IP address [default localhost]. If the IP address is something other than localhost, then Consoles on other machines will be able to connect to the Kernel, so be careful!",
    args: { name: "ip" },
  },
  {
    name: "--transport",
    description: "Kernel transport",
    args: { name: "transport", suggestions: ["tcp", "ipc"] },
  },
  {
    name: "--hb",
    description: "Set the heartbeat port [default: random]",
    args: portArg("port", "Heartbeat port"),
  },
  {
    name: "--shell",
    description: "Set the shell (ROUTER) port [default: random]",
    args: portArg("port", "Shell port"),
  },
  {
    name: "--iopub",
    description: "Set the iopub (PUB) port [default: random]",
    args: portArg("port", "IOPub port"),
  },
  {
    name: "--stdin",
    description: "Set the stdin (ROUTER) port [default: random]",
    args: portArg("port", "Stdin port"),
  },
  {
    name: "--control",
    description: "Set the control (ROUTER) port [default: random]",
    args: portArg("port", "Control port"),
  },
  {
    name: "-f",
    description:
      "JSON file in which to store connection info [default: kernel-<pid>.json]",
    args: {
      name: "connection file",
      template: "filepaths",
    },
  },
  {
    name: "--kernel",
    description: "The name of the default kernel to start",
    args: {
      name: "kernel",
      generators: kernelspecGenerator,
    },
  },
  {
    name: "--ssh",
    description: "The SSH server to use to connect to the kernel",
    args: { name: "sshserver" },
  },
  {
    name: "--sshkey",
    description: "Path to the ssh key to use for logging in to the ssh server",
    args: {
      name: "sshkey",
      template: "filepaths",
    },
  },
];

// jupyter server / lab / notebook (ServerApp based)
const serverCommonOptions: Fig.Option[] = [
  {
    name: "--debug",
    description:
      "Set debug level for the extension and underlying server applications",
  },
  { name: ["-h", "--help"], description: "Show this message" },
  {
    name: "--help-all",
    description: "Show help including all configurable class-options",
  },
  ...showConfigOptions,
  ...generateConfigOptions,
  {
    name: "--allow-root",
    description: "Allow the server to be run from root user",
  },
  {
    name: "--no-browser",
    description: "Prevent the opening of the default url in the browser",
  },
  {
    name: "--autoreload",
    description:
      "Autoreload the webapp when any changes are made to any Python src files in server or extensions",
  },
  {
    name: "--script",
    description: "Deprecated and ignored",
    deprecated: true,
  },
  {
    name: "--no-script",
    description: "Deprecated and ignored",
    deprecated: true,
  },
  ...logConfigOptions,
];

const serverAliasOptions: Fig.Option[] = [
  {
    name: "--ip",
    description: "The IP address the Jupyter server will listen on",
    args: { name: "ip", suggestions: ["localhost", "0.0.0.0"] },
  },
  {
    name: "--port",
    description: "The port the server will listen on (env: JUPYTER_PORT)",
    args: { name: "port" },
  },
  {
    name: "--port-retries",
    description:
      "The number of additional ports to try if the specified port is not available (env: JUPYTER_PORT_RETRIES)",
    args: { name: "retries" },
  },
  {
    name: "--keyfile",
    description: "The full path to a private key file for usage with SSL/TLS",
    args: { name: "keyfile", template: "filepaths" },
  },
  {
    name: "--certfile",
    description: "The full path to an SSL/TLS certificate file",
    args: { name: "certfile", template: "filepaths" },
  },
  {
    name: "--client-ca",
    description:
      "The full path to a certificate authority certificate for SSL/TLS client authentication",
    args: { name: "client-ca", template: "filepaths" },
  },
  {
    name: "--notebook-dir",
    description: "The directory to use for notebooks and kernels",
    args: { name: "directory", template: "folders" },
  },
  {
    name: "--browser",
    description:
      "Specify what command to use to invoke a web browser when starting the server",
    args: { name: "browser" },
  },
  {
    name: "--pylab",
    description:
      "Disabled: use %pylab or %matplotlib in the notebook to enable matplotlib",
    args: { name: "pylab" },
    deprecated: true,
  },
];

const serverRootArg: Fig.Arg = {
  name: "path",
  description: "Notebook or directory to open",
  isOptional: true,
  template: "filepaths",
};

// jupyter labextension / jupyter builder
const labExtensionBuildOptions: Fig.Option[] = [
  {
    name: "--no-build",
    description: "Defer building the app after the action",
  },
  {
    name: "--dev-build",
    description: "Build in development mode",
  },
  {
    name: "--no-minimize",
    description: "Do not minimize a production build",
  },
  {
    name: "--clean",
    description: "Cleanup intermediate files after the action",
  },
  {
    name: "--splice-source",
    description: "Splice source packages into app directory",
  },
  {
    name: "--app-dir",
    description: "The app directory to target",
    args: { name: "directory", template: "folders" },
  },
  {
    name: "--minimize",
    description: "Whether to minimize a production build (defaults to True)",
    args: { name: "bool", suggestions: ["True", "False"] },
  },
  {
    name: "--debug-log-path",
    description: "Path to use for the debug log file",
    args: { name: "path", template: "filepaths" },
  },
];

const labExtensionLevelOption = (action: string): Fig.Option => ({
  name: "--level",
  description: `Level at which to ${action}`,
  args: { name: "level", suggestions: ["sys_prefix", "user", "system"] },
});

const labExtensionNameArg: Fig.Arg = {
  name: "extension",
  description: "Extension name",
  isVariadic: true,
};

const extensionBuildOptions: Fig.Option[] = [
  {
    name: "--development",
    description: "Build in development mode",
  },
  {
    name: "--source-map",
    description: "Generate source maps",
  },
  {
    name: "--static-url",
    description: "Sets the url for static assets when building",
    args: { name: "url" },
  },
  {
    name: "--core-package-file",
    description: "Path to the core application package definition file",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--core-path",
    description: "Directory containing core application package.json file",
    deprecated: true,
    args: { name: "directory", template: "folders" },
  },
  {
    name: "--core-version",
    description:
      "Version of JupyterLab core to use when building, e.g. 'X.Y.Z' or 'vX.Y.Z' (ignored if core-package-file is given)",
    args: { name: "version" },
  },
];

const extensionWatchOptions: Fig.Option[] = [
  {
    name: "--development",
    description: "Build in development mode",
  },
  {
    name: "--source-map",
    description: "Generate source maps",
  },
  {
    name: "--core-package-file",
    description: "Path to the core application package definition file",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--core-version",
    description:
      "Version of JupyterLab core to use when watching, e.g. 'X.Y.Z' or 'vX.Y.Z' (ignored if core-package-file is given)",
    args: { name: "version" },
  },
];

const extensionDevelopOptions: Fig.Option[] = [
  {
    name: "--overwrite",
    description: "Overwrite files",
  },
  {
    name: "--debug-log-path",
    description: "Path to use for the debug log file",
    args: { name: "path", template: "filepaths" },
  },
];

const extensionPathArg: Fig.Arg = {
  name: "path",
  description: "Extension directory (defaults to the current directory)",
  isOptional: true,
  template: "folders",
};

// Legacy (Notebook < 7 / nbclassic) extension commands
const legacyExtensionSubcommands = (
  noun: string,
  nounPlural: string
): Fig.Subcommand[] => [
  {
    name: "enable",
    description: `Enable ${noun}`,
    args: { name: "extension" },
    options: [...extensionAppOptions, ...prefixOptions],
  },
  {
    name: "disable",
    description: `Disable ${noun}`,
    args: { name: "extension" },
    options: [...extensionAppOptions, ...prefixOptions],
  },
  {
    name: "list",
    description: `List ${nounPlural}`,
    options: [...extensionAppOptions, ...prefixOptions],
  },
];

const nbconvertOptions: Fig.Option[] = [
  ...appOptions,
  {
    name: "--execute",
    description: "Execute the notebook prior to export",
  },
  {
    name: "--allow-errors",
    description:
      "Continue notebook execution even if one of the cells throws an error and include the error message in the cell output (only relevant with --execute)",
  },
  {
    name: "--stdin",
    description:
      "Read a single notebook file from stdin and write the result with default basename 'notebook.*'",
  },
  {
    name: "--stdout",
    description: "Write notebook output to stdout instead of files",
  },
  {
    name: "--inplace",
    description:
      "Run nbconvert in place, overwriting the existing notebook (only relevant when converting to notebook format)",
  },
  {
    name: "--clear-output",
    description:
      "Clear output of current file and save in place, overwriting the existing notebook",
  },
  {
    name: "--coalesce-streams",
    description:
      "Coalesce consecutive stdout and stderr outputs into one stream (within each cell)",
  },
  {
    name: "--no-prompt",
    description: "Exclude input and output prompts from converted document",
  },
  {
    name: "--no-input",
    description:
      "Exclude input cells and output prompts from converted document (ideal for code-free reports)",
  },
  {
    name: "--allow-chromium-download",
    description:
      "Whether to allow downloading chromium if no suitable version is found on the system",
  },
  {
    name: "--disable-chromium-sandbox",
    description: "Disable chromium security sandbox when converting to PDF",
  },
  {
    name: "--show-input",
    description: "Show code input (only useful for dejavu users)",
  },
  {
    name: "--embed-images",
    description:
      "Embed the images as base64 dataurls in the output (only useful for the HTML, WebPDF and Slides exports)",
  },
  {
    name: "--sanitize-html",
    description:
      "Whether the HTML in Markdown cells and cell outputs should be sanitized",
  },
  {
    name: "--sanitize_html",
    description:
      "Whether the HTML in Markdown cells and cell outputs should be sanitized (should be set to True by nbviewer or similar tools)",
    args: { name: "bool", suggestions: ["True", "False"] },
  },
  {
    name: "--to",
    description:
      "The export format to be used, either one of the built-in formats or a dotted object name that represents the import path for an Exporter class",
    args: {
      name: "format",
      suggestions: [
        "asciidoc",
        "custom",
        "html",
        "latex",
        "markdown",
        "notebook",
        "pdf",
        "python",
        "qtpdf",
        "qtpng",
        "rst",
        "script",
        "slides",
        "webpdf",
      ],
    },
  },
  {
    name: "--template",
    description: "Name of the template to use",
    args: {
      name: "template",
      suggestions: ["lab", "classic", "basic", "base", "article", "report"],
    },
  },
  {
    name: "--template-file",
    description: "Name of the template file to use",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--theme",
    description:
      "Template specific theme (e.g. the name of a JupyterLab CSS theme distributed as prebuilt extension for the lab template)",
    args: { name: "theme", suggestions: ["light", "dark"] },
  },
  {
    name: "--writer",
    description: "Writer class used to write the results of the conversion",
    args: { name: "class", suggestions: ["FilesWriter", "StdoutWriter"] },
  },
  {
    name: "--post",
    description:
      "PostProcessor class used to write the results of the conversion",
    args: { name: "class", suggestions: ["serve"] },
  },
  {
    name: "--output",
    description:
      "Overwrite base name use for output files (supports pattern replacements '{notebook_name}')",
    args: { name: "name" },
  },
  {
    name: "--output-dir",
    description:
      "Directory to write output(s) to (defaults to the directory of each notebook, use . for the current directory)",
    args: { name: "directory", template: "folders" },
  },
  {
    name: "--reveal-prefix",
    description:
      "The URL prefix for reveal.js (version 3.x), defaults to the reveal CDN",
    args: { name: "prefix" },
  },
  {
    name: "--nbformat",
    description:
      "The nbformat version to write (use this to downgrade notebooks)",
    args: { name: "version", suggestions: ["1", "2", "3", "4"] },
  },
];

const notebooksArg: Fig.Arg = {
  name: "notebook",
  description: "Notebook file (*.ipynb)",
  template: "filepaths",
  isVariadic: true,
};

const completionSpec: Fig.Spec = {
  name: "jupyter",
  description: "An interactive computing environment for notebook programming",
  subcommands: [
    {
      name: "builder",
      description: "Build JupyterLab extensions",
      subcommands: [
        {
          name: "develop",
          description: "Develop labextension(s)",
          options: [...appOptions, ...extensionDevelopOptions],
          args: { ...extensionPathArg, isVariadic: true },
        },
        {
          name: "build",
          description: "Build labextension",
          options: [
            ...commonOptions,
            ...showConfigOptions,
            ...generateConfigOptions,
            ...extensionBuildOptions,
          ],
          args: extensionPathArg,
        },
        {
          name: "watch",
          description: "Watch labextension",
          options: [
            ...commonOptions,
            ...showConfigOptions,
            ...generateConfigOptions,
            ...extensionWatchOptions,
          ],
          args: extensionPathArg,
        },
      ],
      options: appOptions,
    },
    {
      name: "bundlerextension",
      description:
        "Work with Jupyter bundler extensions (Notebook < 7 only, removed in Notebook 7)",
      deprecated: true,
      subcommands: legacyExtensionSubcommands(
        "a bundler extension",
        "bundler extensions"
      ),
      options: [...extensionAppOptions, ...prefixOptions],
    },
    {
      name: "console",
      description: "Launch the Jupyter terminal-based console",
      options: [
        ...appOptions,
        ...kernelClientOptions,
        {
          name: "--simple-prompt",
          description: "Force simple minimal prompt using raw_input",
        },
        {
          name: "--no-simple-prompt",
          description: "Use a rich interactive prompt with prompt_toolkit",
        },
      ],
    },
    {
      name: "dejavu",
      description:
        "Execute a notebook and convert it to HTML without input (nbconvert preset)",
      options: nbconvertOptions,
      args: notebooksArg,
    },
    {
      name: "events",
      description: "Validate Jupyter Events schemas",
      subcommands: [
        {
          name: "validate",
          description:
            "Validate a schema against Jupyter Events' meta schema (JSON/YAML string or file path)",
          options: [{ name: "--help", description: "Show this message" }],
          args: {
            name: "schema",
            template: "filepaths",
          },
        },
      ],
      options: [
        { name: "--version", description: "Show the version and exit" },
        { name: "--help", description: "Show this message" },
      ],
    },
    {
      name: "execute",
      description: "Execute notebook files (*.ipynb)",
      options: [
        { name: ["-h", "--help"], description: "Show this message" },
        {
          name: "--help-all",
          description: "Show help including all configurable class-options",
        },
        {
          name: "--allow-errors",
          description:
            "Errors are ignored and execution is continued until the end of the notebook",
        },
        {
          name: "--inplace",
          description: "Overwrite input notebook with executed results",
        },
        {
          name: "--timeout",
          description:
            "The time to wait (in seconds) for output from executions (-1 disables the timeout)",
          args: { name: "seconds" },
        },
        {
          name: "--startup_timeout",
          description:
            "The time to wait (in seconds) for the kernel to start (default 60)",
          args: { name: "seconds" },
        },
        {
          name: "--kernel_name",
          description:
            "Name of kernel to use to execute the cells (defaults to the kernel_spec embedded in the notebook)",
          args: { name: "kernel", generators: kernelspecGenerator },
        },
        {
          name: "--output",
          description:
            "Write executed notebook to this file base name (supports pattern replacements '{notebook_name}')",
          args: { name: "name" },
        },
      ],
      args: notebooksArg,
    },
    {
      name: "kernel",
      description: "Run a kernel locally in a subprocess",
      options: [
        ...commonOptions,
        {
          name: "--kernel",
          description: "The name of a kernel type to start",
          args: { name: "kernel", generators: kernelspecGenerator },
        },
        {
          name: "--ip",
          description:
            "Set the kernel's IP address [default localhost]. If the IP address is something other than localhost, then Consoles on other machines will be able to connect to the Kernel, so be careful!",
          args: { name: "ip" },
        },
      ],
    },
    {
      name: "kernelspec",
      description: "Manage Jupyter kernel specifications",
      options: [{ name: ["-h", "--help"], description: "Show this message" }],
      subcommands: [
        {
          name: "list",
          description: "List installed kernel specifications",
          options: [
            ...commonOptions,
            ...logConfigOptions,
            {
              name: "--json",
              description:
                "Output spec name and location as machine-readable json",
            },
            {
              name: "--missing",
              description: "Output only missing kernels",
            },
          ],
        },
        {
          name: "install",
          description: "Install a kernel specification directory",
          options: [
            ...commonOptions,
            ...logConfigOptions,
            {
              name: "--user",
              description: "Install to the per-user kernel registry",
            },
            {
              name: "--replace",
              description: "Replace any existing kernel spec with this name",
            },
            {
              name: "--sys-prefix",
              description:
                "Install to Python's sys.prefix (useful in conda/virtual environments)",
            },
            {
              name: "--name",
              description: "Install the kernel spec with this name",
              args: { name: "name" },
            },
            {
              name: "--prefix",
              description:
                "Specify a prefix to install to, e.g. an env (the kernelspec will be installed in PREFIX/share/jupyter/kernels/)",
              args: { name: "prefix", template: "folders" },
            },
          ],
          args: {
            name: "source directory",
            description: "Directory containing the kernel spec",
            template: "folders",
          },
        },
        {
          name: "uninstall",
          description: "Alias for remove",
          options: kernelspecRemoveOptions,
          args: kernelspecNamesArg,
        },
        {
          name: "remove",
          description: "Remove one or more Jupyter kernelspecs by name",
          options: kernelspecRemoveOptions,
          args: kernelspecNamesArg,
        },
        {
          name: "install-self",
          description:
            "Install the IPython kernel spec directory for this Python",
          deprecated: true,
          options: [
            ...commonOptions,
            ...logConfigOptions,
            {
              name: "--user",
              description: "Install to the per-user kernel registry",
            },
          ],
        },
        {
          name: "provisioners",
          description:
            "List available provisioners for use in kernel specifications",
          options: appOptions,
        },
      ],
    },
    {
      name: "lab",
      description:
        "JupyterLab, an extensible computational environment for Jupyter",
      subcommands: [
        {
          name: "build",
          description: "Build the JupyterLab application",
          options: [
            ...appOptions,
            {
              name: "--dev-build",
              description: "Build in development mode",
            },
            {
              name: "--no-minimize",
              description: "Do not minimize a production build",
            },
            {
              name: "--splice-source",
              description: "Splice source packages into app directory",
            },
            {
              name: "--app-dir",
              description: "The app directory to build in",
              args: { name: "directory", template: "folders" },
            },
            {
              name: "--name",
              description: "The name of the built application",
              args: { name: "name" },
            },
            {
              name: "--version",
              description: "The version of the built application",
              args: { name: "version" },
            },
            {
              name: "--minimize",
              description:
                "Whether to minimize a production build (defaults to True)",
              args: { name: "bool", suggestions: ["True", "False"] },
            },
            {
              name: "--debug-log-path",
              description: "Path to use for the debug log file",
              args: { name: "path", template: "filepaths" },
            },
          ],
        },
        {
          name: "clean",
          description: "Clean the JupyterLab application",
          options: [
            ...appOptions,
            {
              name: "--extensions",
              description:
                "Also delete <app-dir>/extensions (this deletes all of your extensions, which will need to be reinstalled)",
            },
            {
              name: "--settings",
              description: "Also delete <app-dir>/settings",
            },
            {
              name: "--static",
              description: "Also delete <app-dir>/static",
            },
            {
              name: "--all",
              description:
                "Delete the entire contents of the app directory (this deletes all of your extensions, which will need to be reinstalled)",
            },
            {
              name: "--app-dir",
              description: "The app directory to clean",
              args: { name: "directory", template: "folders" },
            },
          ],
        },
        {
          name: "path",
          description:
            "Print the configured paths for the JupyterLab application",
          options: appOptions,
        },
        {
          name: "paths",
          description:
            "Print the configured paths for the JupyterLab application",
          options: appOptions,
        },
        {
          name: ["workspace", "workspaces"],
          description:
            "Import or export a JupyterLab workspace or list all the JupyterLab workspaces",
          options: appOptions,
          subcommands: [
            {
              name: "export",
              description:
                "Export a JupyterLab workspace (the default workspace if no name is given)",
              options: appOptions,
              args: {
                name: "workspace",
                description: "Workspace name",
                isOptional: true,
              },
            },
            {
              name: "import",
              description: "Import a JupyterLab workspace",
              options: [
                ...appOptions,
                {
                  name: "--name",
                  description:
                    "Workspace name (the workspace ID in the imported file will be replaced with a new ID pointing to this name)",
                  args: { name: "name" },
                },
              ],
              args: {
                name: "file",
                description: "Workspace JSON file",
                template: "filepaths",
              },
            },
            {
              name: "list",
              description: "Print all the workspaces available",
              options: [
                ...appOptions,
                {
                  name: "--jsonlines",
                  description: "Produce machine-readable JSON Lines output",
                },
                {
                  name: "--json",
                  description: "Produce machine-readable JSON object output",
                },
              ],
            },
          ],
        },
        {
          name: "licenses",
          description: "Report frontend licenses",
          options: [
            ...appOptions,
            {
              name: "--full-text",
              description: "Print out full license text (if available)",
            },
            {
              name: "--json",
              description: "Print out report as JSON (implies --full-text)",
            },
            {
              name: "--csv",
              description: "Print out report as CSV (implies --full-text)",
            },
            {
              name: "--dev-mode",
              description: "Start the app in dev mode for running from source",
            },
            {
              name: "--bundles",
              description: "A regular expression of bundles to print",
              args: { name: "regex" },
            },
            {
              name: "--report-format",
              description: "Reporter format",
              args: {
                name: "format",
                suggestions: ["markdown", "json", "csv"],
              },
            },
            {
              name: "--app-dir",
              description: "The app directory for which to show licenses",
              args: { name: "directory", template: "folders" },
            },
          ],
        },
      ],
      options: [
        ...serverCommonOptions,
        ...serverAliasOptions,
        {
          name: "--core-mode",
          description: "Start the app in core mode",
        },
        {
          name: "--dev-mode",
          description: "Start the app in dev mode for running from source",
        },
        {
          name: "--skip-dev-build",
          description:
            "Skip the initial install and JS build of the app in dev mode",
        },
        {
          name: "--watch",
          description: "Start the app in watch mode",
        },
        {
          name: "--splice-source",
          description: "Splice source packages into app directory",
        },
        {
          name: "--expose-app-in-browser",
          description:
            "Expose the global app instance to browser via window.jupyterapp",
        },
        {
          name: "--extensions-in-dev-mode",
          description: "Load prebuilt extensions in dev-mode",
        },
        {
          name: "--collaborative",
          description:
            "Enable real-time collaboration (requires the jupyter_collaboration extension, deprecated and to be removed in JupyterLab v5)",
          deprecated: true,
        },
        {
          name: "--custom-css",
          description: "Load custom CSS in template html files",
        },
        {
          name: "--app-dir",
          description: "The app directory to launch JupyterLab from",
          args: { name: "directory", template: "folders" },
        },
      ],
      args: serverRootArg,
    },
    {
      name: "labextension",
      description: "Work with JupyterLab extensions",
      subcommands: [
        {
          name: "install",
          description: "Install labextension(s)",
          options: [
            ...appOptions,
            ...labExtensionBuildOptions,
            {
              name: "--pin-version-as",
              description: "Pin this version with a certain alias",
              args: { name: "alias" },
            },
          ],
          args: labExtensionNameArg,
        },
        {
          name: "update",
          description: "Update labextension(s)",
          options: [
            ...appOptions,
            ...labExtensionBuildOptions,
            {
              name: "--all",
              description: "Update all extensions",
            },
          ],
          args: { ...labExtensionNameArg, isOptional: true },
        },
        {
          name: "uninstall",
          description: "Uninstall labextension(s) by name",
          options: [
            ...appOptions,
            ...labExtensionBuildOptions,
            {
              name: "--all",
              description: "Uninstall all extensions",
            },
          ],
          args: { ...labExtensionNameArg, isOptional: true },
        },
        {
          name: "list",
          description: "List the installed labextensions",
          options: [
            ...appOptions,
            ...labExtensionBuildOptions,
            {
              name: "--verbose",
              description: "Increase verbosity level",
            },
          ],
        },
        {
          name: "link",
          description: "Link local npm packages that are not lab extensions",
          options: [...appOptions, ...labExtensionBuildOptions],
          args: {
            name: "path",
            description:
              "Package directory (defaults to the current directory)",
            isOptional: true,
            isVariadic: true,
            template: "folders",
          },
        },
        {
          name: "unlink",
          description: "Unlink packages by name or path",
          options: [...appOptions, ...labExtensionBuildOptions],
          args: {
            name: "package",
            description: "Package name or path",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "enable",
          description: "Enable labextension(s) by name",
          options: [
            ...appOptions,
            ...labExtensionBuildOptions,
            labExtensionLevelOption("enable: sys_prefix, user, system"),
          ],
          args: labExtensionNameArg,
        },
        {
          name: "disable",
          description: "Disable labextension(s) by name",
          options: [
            ...appOptions,
            ...labExtensionBuildOptions,
            labExtensionLevelOption("disable: sys_prefix, user, system"),
          ],
          args: labExtensionNameArg,
        },
        {
          name: "lock",
          description: "Lock labextension(s) by name",
          options: [
            ...appOptions,
            ...labExtensionBuildOptions,
            labExtensionLevelOption("lock: sys_prefix, user, system"),
          ],
          args: labExtensionNameArg,
        },
        {
          name: "unlock",
          description: "Unlock labextension(s) by name",
          options: [
            ...appOptions,
            ...labExtensionBuildOptions,
            labExtensionLevelOption("unlock: sys_prefix, user, system"),
          ],
          args: labExtensionNameArg,
        },
        {
          name: "check",
          description: "Check labextension(s) by name",
          options: [
            ...appOptions,
            ...labExtensionBuildOptions,
            {
              name: "--installed",
              description: "Check only if the extension is installed",
            },
          ],
          args: labExtensionNameArg,
        },
        {
          name: "build",
          description: "Build labextension (use jupyter builder build instead)",
          deprecated: true,
          options: [
            ...commonOptions,
            ...showConfigOptions,
            ...generateConfigOptions,
            ...extensionBuildOptions,
          ],
          args: extensionPathArg,
        },
        {
          name: "develop",
          description:
            "Develop labextension (use jupyter builder develop instead)",
          deprecated: true,
          options: [...appOptions, ...extensionDevelopOptions],
          args: { ...extensionPathArg, isVariadic: true },
        },
        {
          name: "watch",
          description: "Watch labextension (use jupyter builder watch instead)",
          deprecated: true,
          options: [
            ...commonOptions,
            ...showConfigOptions,
            ...generateConfigOptions,
            ...extensionWatchOptions,
          ],
          args: extensionPathArg,
        },
      ],
      options: appOptions,
    },
    {
      name: "labhub",
      description:
        "Start JupyterLab as a JupyterHub single-user server (requires jupyterhub)",
    },
    {
      name: "migrate",
      description:
        "Migrate configuration and data from .ipython prior to 4.0 to Jupyter locations",
      options: appOptions,
    },
    {
      name: "nbconvert",
      description:
        "This application is used to convert notebook files (*.ipynb) to various other formats",
      options: nbconvertOptions,
      args: notebooksArg,
    },
    {
      name: "nbextension",
      description:
        "Work with Jupyter notebook extensions (Notebook < 7 only, removed in Notebook 7)",
      deprecated: true,
      options: [...extensionAppOptions, ...prefixOptions],
      subcommands: [
        {
          name: "install",
          description: "Install an nbextension",
          options: [
            ...extensionAppOptions,
            ...prefixOptions,
            {
              name: "--overwrite",
              description: "Force overwrite of existing files",
            },
            {
              name: ["--symlink", "-s"],
              description: "Create symlink instead of copying files",
            },
            {
              name: "--prefix",
              description: "Installation prefix",
              args: { name: "prefix", template: "folders" },
            },
            {
              name: "--nbextensions",
              description:
                "Full path to nbextensions dir (probably use prefix or user)",
              args: { name: "directory", template: "folders" },
            },
            {
              name: "--destination",
              description: "Destination for the copy or symlink",
              args: { name: "destination" },
            },
          ],
          args: {
            name: "extension",
            template: "filepaths",
          },
        },
        {
          name: "uninstall",
          description: "Uninstall an nbextension",
          options: [
            ...extensionAppOptions,
            ...prefixOptions,
            {
              name: "--prefix",
              description:
                "Installation prefix (overrides --user, --sys-prefix and --system)",
              args: { name: "prefix", template: "folders" },
            },
            {
              name: "--nbextensions",
              description:
                "Full path to nbextensions dir (probably use prefix or user)",
              args: { name: "directory", template: "folders" },
            },
            {
              name: "--require",
              description: "Require.js module to disable loading",
              args: { name: "module" },
            },
          ],
          args: {
            name: "extension",
          },
        },
        {
          name: "enable",
          description: "Enable an nbextension",
          options: [
            ...extensionAppOptions,
            ...prefixOptions,
            {
              name: "--section",
              description:
                "Which config section to add the extension to ('common' will affect all pages)",
              args: { name: "section", suggestions: ["notebook", "common"] },
            },
          ],
          args: {
            name: "extension",
          },
        },
        {
          name: "disable",
          description: "Disable an nbextension",
          options: [
            ...extensionAppOptions,
            ...prefixOptions,
            {
              name: "--section",
              description:
                "Which config section to remove the extension from ('common' will affect all pages)",
              args: { name: "section", suggestions: ["notebook", "common"] },
            },
          ],
          args: {
            name: "extension",
          },
        },
        {
          name: "list",
          description: "List nbextensions",
          options: [...extensionAppOptions, ...prefixOptions],
        },
      ],
    },
    {
      name: "notebook",
      description:
        "Jupyter Notebook, a web-based notebook environment for interactive computing",
      options: [
        ...serverCommonOptions,
        {
          name: "--expose-app-in-browser",
          description:
            "Expose the global app instance to browser via window.jupyterapp",
        },
        {
          name: "--custom-css",
          description: "Load custom CSS in template html files",
        },
      ],
      args: serverRootArg,
    },
    {
      name: "run",
      description: "Run Jupyter kernel code",
      options: [...appOptions, ...kernelClientOptions],
      args: {
        name: "file",
        description: "Code file to run",
        template: "filepaths",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "server",
      description: "Launch the Jupyter Server",
      subcommands: [
        {
          name: "list",
          description: "List currently running Jupyter servers",
          options: [
            { name: "--debug", description: "Output debug information" },
            {
              name: ["-h", "--help"],
              description: "Show this message",
            },
            {
              name: "--jsonlist",
              description: "Produce machine-readable JSON list output",
            },
            {
              name: "--json",
              description:
                "Produce machine-readable JSON object on each line of output",
            },
          ],
        },
        {
          name: "stop",
          description:
            "Stop currently running Jupyter server for a given port or socket",
          options: appOptions,
          args: {
            name: "port or socket",
            description: "Port or UNIX socket of the server to stop",
            isOptional: true,
          },
        },
        {
          name: "password",
          description: "Set a password for the Jupyter server",
          options: appOptions,
        },
        {
          name: "extension",
          description: "Work with Jupyter server extensions",
          options: [...extensionAppOptions, ...prefixOptions],
          subcommands: [
            {
              name: "list",
              description:
                "List all server extensions known by the configuration system",
              options: [...extensionAppOptions, ...prefixOptions],
            },
            {
              name: "enable",
              description: "Enable a server extension in configuration",
              options: [...extensionAppOptions, ...prefixOptions],
              args: { name: "extension" },
            },
            {
              name: "disable",
              description: "Disable a server extension in configuration",
              options: [...extensionAppOptions, ...prefixOptions],
              args: { name: "extension" },
            },
          ],
        },
      ],
      options: [
        ...serverCommonOptions,
        ...serverAliasOptions,
        {
          name: "--sock",
          description: "The UNIX socket the Jupyter server will listen on",
          args: { name: "socket", template: "filepaths" },
        },
        {
          name: "--sock-mode",
          description:
            "The permissions mode for UNIX socket creation (default: 0600)",
          args: { name: "mode" },
        },
        {
          name: "--transport",
          description: "Kernel transport",
          args: { name: "transport", suggestions: ["tcp", "ipc"] },
        },
        {
          name: "--preferred-dir",
          description:
            "Preferred starting directory to use for notebooks and kernels",
          args: { name: "directory", template: "folders" },
        },
        {
          name: "--gateway-url",
          description:
            "The url of the Kernel or Enterprise Gateway server where kernel specifications are defined and kernel management takes place (env: JUPYTER_GATEWAY_URL)",
          args: { name: "url" },
        },
      ],
      args: serverRootArg,
    },
    {
      name: "serverextension",
      description:
        "Manage server extensions (Notebook < 7 only, use jupyter server extension instead)",
      deprecated: true,
      options: [...extensionAppOptions, ...prefixOptions],
      subcommands: legacyExtensionSubcommands(
        "a server extension",
        "server extensions"
      ),
    },
    {
      name: "troubleshoot",
      description:
        "Print environment information (PATH, sys.path, installed Jupyter packages) for troubleshooting",
    },
    {
      name: "trust",
      description:
        "Sign one or more Jupyter notebooks with your key, to trust their dynamic (HTML, Javascript) output",
      options: [
        ...appOptions,
        {
          name: "--reset",
          description:
            "Delete the trusted notebook cache (all previously signed notebooks will become untrusted)",
        },
      ],
      args: notebooksArg,
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for jupyter",
    },
    {
      name: "--version",
      description: "Show the versions of core jupyter packages and exit",
    },
    {
      name: "--config-dir",
      description: "Show Jupyter config dir",
    },
    {
      name: "--data-dir",
      description: "Show Jupyter data dir",
    },
    {
      name: "--runtime-dir",
      description: "Show Jupyter runtime dir",
    },
    {
      name: "--paths",
      description:
        "Show all Jupyter paths. Add --json for machine-readable format",
    },
    {
      name: "--json",
      description: "Output paths as machine-readable json",
    },
    {
      name: "--debug",
      description: "Output debug information about paths",
    },
  ],
};
export default completionSpec;
