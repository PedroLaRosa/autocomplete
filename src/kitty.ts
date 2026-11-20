// kitty v0.51.0 (git tag v0.51.0 and Homebrew cask, 2026-11-20). Source: static read of the v0.51.0 source tree, no kitty
// binary was run: option specs in kitty/simple_cli_definitions.py (kitty options), kitty/remote_control.py and kitty/rc/*.py
// (kitty @), kitty/entry_points.py (+ entry points) and kittens/*/main.py plus the Go entry points (kittens).
// Builtin kittens run as `kitten <name>` in 0.51 (kitty +kitten only finds custom kittens); they stay under +kitten as in
// kitty's own generated completion. Not covered: the separate kitten binary, internal pager kitten, hidden __*__ commands.

const colorSuggestions: Fig.Suggestion[] = [
  {
    name: "none",
    icon: "fig://template?color=000000",
  },
  {
    name: "black",
    icon: "fig://template?color=000000",
  },
  {
    name: "white",
    icon: "fig://template?color=ffffff",
  },
  {
    name: "gray",
    icon: "fig://template?color=808080",
  },
  {
    name: "red",
    icon: "fig://template?color=ff0000",
  },
  {
    name: "green",
    icon: "fig://template?color=00ff00",
  },
  {
    name: "blue",
    icon: "fig://template?color=0000ff",
  },
  {
    name: "yellow",
    icon: "fig://template?color=ffff00",
  },
  {
    name: "magenta",
    icon: "fig://template?color=ff00ff",
  },
  {
    name: "cyan",
    icon: "fig://template?color=00ffff",
  },
];

const matchWindowOption: Fig.Option = {
  name: ["-m", "--match"],
  description: "The window to match",
  args: {
    name: "MATCH",
  },
};

const matchTabOption: Fig.Option = {
  name: ["-m", "--match"],
  description: "The tab to match",
  args: {
    name: "MATCH",
  },
};

const matchWindowTabOption: Fig.Option = {
  name: ["-t", "--match-tab"],
  description: "The tab to match",
  args: {
    name: "MATCH_TAB",
  },
};

const noResponseOption: Fig.Option = {
  name: "--no-response",
  description: "Don't wait for a response indicating the success of the action",
};

const overrideOption: Fig.Option = {
  name: ["-o", "--override"],
  description:
    "Override individual configuration options, can be specified multiple times",
  isRepeatable: true,
  args: {
    name: "OVERRIDE",
  },
};

const noKittyResponseOption: Fig.Option = {
  name: "--no-response",
  description: "Don't wait for a response from kitty",
};

const icatCommand: Fig.Subcommand = {
  name: "icat",
  description: "Display images in the terminal",
  options: [
    {
      name: "--align",
      description: "Horizontal alignment for the displayed image",
      args: {
        name: "ALIGN",
        suggestions: ["center", "left", "right"],
        default: "center",
      },
    },
    {
      name: "--place",
      description: "Choose where on the screen to display the image",
      args: {
        name: "PLACE",
      },
    },
    {
      name: "--scale-up",
      description:
        "Cause images that are smaller than the specified area to be scaled up to use as much of the specified area as possible",
      dependsOn: ["--place"],
    },
    {
      name: "--fit",
      description:
        "When not using --place, control how the image is scaled relative to the screen",
      args: {
        name: "FIT",
        suggestions: ["width", "height", "both", "none"],
        default: "width",
      },
    },
    {
      name: "--background",
      description:
        "Specify a background color, this will cause transparent images to be composited on top of the specified color",
      args: {
        name: "BACKGROUND",
        default: "none",
        suggestions: colorSuggestions,
      },
    },
    {
      name: "--mirror",
      description:
        "Mirror the image about a horizontal or vertical axis or both",
      args: {
        name: "MIRROR",
        suggestions: ["none", "horizontal", "vertical", "both"],
        default: "none",
      },
    },
    {
      name: "--clear",
      description: "Remove all images currently displayed on the screen",
    },
    {
      name: "--clear-all",
      description: "Remove all images from screen and scrollback",
    },
    {
      name: "--transfer-mode",
      description: "Which mechanism to use to transfer images to the terminal",
      args: {
        name: "TRANSFER_MODE",
        suggestions: ["detect", "file", "stream", "memory"],
        default: "detect",
      },
    },
    {
      name: "--detect-support",
      description: "Detect support for image display in the terminal",
    },
    {
      name: "--detection-timeout",
      description:
        "The amount of time (in seconds) to wait for a response from the terminal, when detecting image display support",
      args: {
        name: "DETECTION_TIMEOUT",
        default: "10",
      },
      dependsOn: ["--detect-support"],
    },
    {
      name: "--use-window-size",
      description:
        "Instead of querying the terminal for the window size, use the specified size",
      args: {
        name: "USE_WINDOW_SIZE",
      },
    },
    {
      name: "--print-window-size",
      description:
        "Print out the window size as <width>x<height> (in pixels) and quit",
    },
    {
      name: "--stdin",
      description: "Read image data from STDIN",
      args: {
        name: "STDIN",
        suggestions: ["detect", "yes", "no"],
        default: "detect",
      },
    },
    {
      name: "--silent",
      description: "Not used, present for legacy compatibility",
    },
    {
      name: "--engine",
      description: "The engine used for decoding and processing of images",
      args: {
        name: "ENGINE",
        suggestions: ["auto", "builtin", "magick"],
        default: "auto",
      },
    },
    {
      name: ["-z", "--z-index"],
      description: "Z-index of the image",
      args: {
        name: "Z_INDEX",
        default: "0",
      },
    },
    {
      name: ["-l", "--loop"],
      description: "Number of times to loop animations",
      args: {
        name: "LOOP",
        default: "-1",
      },
    },
    {
      name: "--hold",
      description:
        "Wait for a key press before exiting after displaying the images",
    },
    {
      name: "--unicode-placeholder",
      description: "Use the Unicode placeholder method to display the images",
    },
    {
      name: "--passthrough",
      description:
        "Whether to surround graphics commands with escape sequences that allow them to passthrough programs like tmux",
      args: {
        name: "PASSTHROUGH",
        suggestions: ["detect", "tmux", "none"],
        default: "detect",
      },
    },
    {
      name: "--image-id",
      description: "The graphics protocol id to use for the created image",
      args: {
        name: "IMAGE_ID",
        default: "0",
      },
    },
    {
      name: ["-n", "--no-trailing-newline"],
      description:
        "By default, the cursor is moved to the next line after displaying an image",
    },
  ],
  args: {
    name: "IMAGE_FILE_OR_URL_OR_DIRECTORY",
    template: "filepaths",
    isOptional: true,
    isVariadic: true,
  },
};

const kittyOptions: Fig.Option[] = [
  {
    name: ["--class", "--app-id"],
    description: "On Wayland set the application id",
    args: {
      name: "CLASS",
      default: "kitty",
    },
  },
  {
    name: ["--name", "--os-window-tag"],
    description: "On Wayland, set the window tag, when specified",
    args: {
      name: "NAME",
    },
  },
  {
    name: ["-T", "--title"],
    description: "Set the OS window title",
    args: {
      name: "TITLE",
    },
  },
  {
    name: ["-c", "--config"],
    description: "Specify a path to the configuration file(s) to use",
    isRepeatable: true,
    args: {
      name: "CONFIG",
      template: "filepaths",
      suggestions: ["none", "NONE"],
    },
  },
  {
    name: ["-o", "--override"],
    description:
      "Override individual configuration options, can be specified multiple times",
    isRepeatable: true,
    args: {
      name: "OVERRIDE",
    },
  },
  {
    name: ["-d", "--directory", "--working-directory"],
    description: "Change to the specified directory when launching",
    args: {
      name: "DIRECTORY",
      template: "folders",
      default: ".",
    },
  },
  {
    name: "--detach",
    description: "Detach from the controlling terminal, if any",
  },
  {
    name: "--detached-log",
    description:
      "Path to a log file to store STDOUT/STDERR when using --detach",
    args: {
      name: "DETACHED_LOG",
    },
  },
  {
    name: "--session",
    description:
      "Path to a file containing the startup session (tabs, windows, layout, programs)",
    args: {
      name: "SESSION",
      template: "filepaths",
      suggestions: [
        {
          name: "-",
          description: "Read from stdin",
        },
        {
          name: "none",
          description: "Use no session, even if startup_session is set",
        },
      ],
    },
  },
  {
    name: "--hold",
    description: "Remain open, at a shell prompt, after child process exits",
  },
  {
    name: ["-1", "--single-instance"],
    description: "If specified only a single instance of kitty will run",
  },
  {
    name: "--instance-group",
    description: "Used in combination with the kitty --single-instance option",
    args: {
      name: "INSTANCE_GROUP",
    },
    dependsOn: ["-1", "--single-instance"],
  },
  {
    name: "--wait-for-single-instance-window-close",
    description:
      "Normally, when using kitty --single-instance, kitty will open a new window in an existing instance and quit immediately",
    dependsOn: ["-1", "--single-instance"],
  },
  {
    name: "--listen-on",
    description: "Listen on the specified socket address for control messages",
    args: {
      name: "LISTEN_ON",
    },
  },
  {
    name: "--start-as",
    description: "Control how the initial kitty OS window is created",
    args: {
      name: "START_AS",
      suggestions: ["normal", "fullscreen", "maximized", "minimized", "hidden"],
      default: "normal",
    },
  },
  {
    name: "--position",
    description:
      "The position, for example 10x20, on screen at which to place the first kitty OS Window created by this invocation",
    args: {
      name: "POSITION",
    },
  },
  {
    name: "--grab-keyboard",
    description: "Grab the keyboard",
  },
  {
    name: ["-v", "--version"],
    description: "The current kitty version",
  },
  {
    name: "--dump-commands",
    description: "Output commands received from child process to STDOUT",
  },
  {
    name: "--replay-commands",
    description: "Replay previously dumped commands",
    args: {
      name: "REPLAY_COMMANDS",
    },
  },
  {
    name: "--dump-bytes",
    description:
      "Path to file in which to store the raw bytes received from the child process",
    args: {
      name: "DUMP_BYTES",
    },
  },
  {
    name: ["--debug-rendering", "--debug-gl"],
    description: "Debug rendering commands",
  },
  {
    name: ["--debug-input", "--debug-keyboard"],
    description: "Print out key and mouse events as they are received",
  },
  {
    name: "--debug-font-fallback",
    description:
      "Print out information about the selection of fallback fonts for characters not present in the main font",
  },
  {
    name: "--watcher",
    description:
      "This option is deprecated in favor of the watcher option in kitty.conf and should not be used",
    deprecated: true,
    args: {
      name: "WATCHER",
      template: "filepaths",
    },
  },
  {
    name: ["-e", "--execute"],
    hidden: true,
    description: "Undocumented flag, hidden in the kitty help output",
  },
  {
    name: ["-h", "--help"],
    description: "Show help for kitty command line options",
  },
];

const kittenCommands: Fig.Subcommand[] = [
  {
    name: "ask",
    description: "Ask the user for input",
    options: [
      {
        name: ["-t", "--type"],
        description: "Type of input",
        args: {
          name: "TYPE",
          suggestions: ["line", "yesno", "choices", "password", "file"],
          default: "line",
        },
      },
      {
        name: ["-m", "--message"],
        description: "The message to display to the user",
        args: {
          name: "MESSAGE",
        },
      },
      {
        name: ["-n", "--name"],
        description: "The name for this question",
        args: {
          name: "NAME",
        },
      },
      {
        name: ["--title", "--window-title"],
        description:
          "The title for the window in which the question is displayed",
        args: {
          name: "TITLE",
        },
      },
      {
        name: ["-c", "--choice"],
        description: "A choice for the choices type",
        isRepeatable: true,
        args: {
          name: "CHOICE",
        },
      },
      {
        name: ["-d", "--default"],
        description: "A default choice or text",
        args: {
          name: "DEFAULT",
        },
      },
      {
        name: ["-p", "--prompt"],
        description:
          "The prompt to use when inputting a line of text or a password",
        args: {
          name: "PROMPT",
          default: "> ",
        },
      },
      {
        name: "--unhide-key",
        description: "The key to be pressed to unhide hidden text",
        args: {
          name: "UNHIDE_KEY",
          default: "u",
        },
      },
      {
        name: "--hidden-text-placeholder",
        description: "The text in the message to be replaced by hidden text",
        args: {
          name: "HIDDEN_TEXT_PLACEHOLDER",
        },
      },
    ],
  },
  {
    name: "broadcast",
    description: "Broadcast typed text to kitty windows",
    options: [
      {
        name: "--hide-input-toggle",
        description:
          "Key to press that will toggle hiding of the input in the broadcast window itself",
        args: {
          name: "HIDE_INPUT_TOGGLE",
          default: "Ctrl+Alt+Esc",
        },
      },
      {
        name: "--end-session",
        description: "Key to press to end the broadcast session",
        args: {
          name: "END_SESSION",
          default: "Ctrl+Esc",
        },
      },
      matchWindowOption,
      matchWindowTabOption,
    ],
    args: {
      name: "TEXT",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: ["choose_files", "choose-files"],
    description: "Choose files, fast",
    options: [
      {
        name: "--mode",
        description: "The type of object(s) to select",
        args: {
          name: "MODE",
          suggestions: [
            "file",
            "files",
            "all",
            "save-file",
            "dir",
            "save-dir",
            "dirs",
            "save-files",
          ],
          default: "file",
        },
      },
      {
        name: "--file-filter",
        description: "A list of filters to restrict the displayed files",
        isRepeatable: true,
        args: {
          name: "FILE_FILTER",
        },
      },
      {
        name: "--suggested-save-file-name",
        description: "A suggested name when picking a save file",
        args: {
          name: "SUGGESTED_SAVE_FILE_NAME",
        },
      },
      {
        name: "--suggested-save-file-path",
        description: "Path to an existing file to use as the save file",
        args: {
          name: "SUGGESTED_SAVE_FILE_PATH",
        },
      },
      {
        name: "--title",
        description: "Window title to use for this chooser",
        args: {
          name: "TITLE",
        },
      },
      {
        name: "--display-title",
        description:
          "Show the window title at the top, useful when this kitten is used in an OS window without a title bar",
      },
      overrideOption,
      {
        name: "--config",
        description: "Specify a path to the configuration file(s) to use",
        isRepeatable: true,
        args: {
          name: "CONFIG",
          template: "filepaths",
          suggestions: ["none", "NONE"],
        },
      },
      {
        name: "--write-output-to",
        description:
          "Path to a file to which the output is written in addition to STDOUT",
        args: {
          name: "WRITE_OUTPUT_TO",
        },
      },
      {
        name: "--output-format",
        description: "The format in which to write the output",
        args: {
          name: "OUTPUT_FORMAT",
          suggestions: ["text", "json", "shell", "shell-relative"],
          default: "text",
        },
      },
      {
        name: "--write-pid-to",
        description:
          "Path to a file to which to write the process ID (PID) of this process to",
        args: {
          name: "WRITE_PID_TO",
        },
      },
      {
        name: "--clear-cache",
        description: "Clear the caches used by this kitten",
      },
    ],
    args: {
      name: "DIRECTORY",
      template: "folders",
      isOptional: true,
    },
  },
  {
    name: ["choose_fonts", "choose-fonts"],
    description: "Choose the fonts used in kitty",
    options: [
      {
        name: "--reload-in",
        description:
          "Which kitty instances to signal to reload their config after changes are made",
        args: {
          name: "RELOAD_IN",
          suggestions: ["parent", "all", "none"],
          default: "parent",
        },
      },
      {
        name: "--config-file-name",
        description: "The name or path to the config file to edit",
        args: {
          name: "CONFIG_FILE_NAME",
          template: "filepaths",
          default: "kitty.conf",
        },
      },
    ],
  },
  {
    name: "clipboard",
    description: "Copy/paste with the system clipboard, even over SSH",
    options: [
      {
        name: ["-g", "--get-clipboard"],
        description: "Output the current contents of the clipboard to STDOUT",
      },
      {
        name: ["-p", "--use-primary"],
        description:
          "Use the primary selection rather than the clipboard on systems that support it, such as Linux",
      },
      {
        name: ["-m", "--mime"],
        description: "The mimetype of the specified file",
        isRepeatable: true,
        args: {
          name: "MIME",
        },
      },
      {
        name: ["-a", "--alias"],
        description: "Specify aliases for MIME types",
        isRepeatable: true,
        args: {
          name: "ALIAS",
        },
      },
      {
        name: "--wait-for-completion",
        description:
          "Wait till the copy to clipboard is complete before exiting",
      },
      {
        name: "--password",
        description: "A password to use when accessing the clipboard",
        args: {
          name: "PASSWORD",
        },
      },
      {
        name: "--human-name",
        description:
          "A human friendly name to show the user when asking for permission to access the clipboard",
        args: {
          name: "HUMAN_NAME",
        },
      },
    ],
    args: {
      name: "FILE",
      template: "filepaths",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: ["command_palette", "command-palette"],
    description: "Browse and trigger keyboard shortcuts and actions",
  },
  {
    name: ["desktop_ui", "desktop-ui"],
    description:
      "Implement various desktop components for use with lightweight compositors/window managers on Linux",
    subcommands: [
      {
        name: "run-server",
        description:
          "Start the various servers used to integrate with the Linux desktop",
        options: [
          overrideOption,
          {
            name: ["-c", "--config"],
            description: "Specify a path to the configuration file(s) to use",
            isRepeatable: true,
            args: {
              name: "CONFIG",
              template: "filepaths",
            },
          },
        ],
      },
      {
        name: "enable-portal",
        description:
          "Create or edit the files needed so that the portal from this kitten is used by xdg-desktop-portal",
      },
      {
        name: "set-color-scheme",
        description: "Change the color scheme",
        args: {
          name: "COLOR_SCHEME",
          suggestions: ["light", "dark", "no-preference", "toggle"],
        },
      },
    ],
  },
  {
    name: "diff",
    description: "Pretty, side-by-side diffing of files and images",
    options: [
      {
        name: "--context",
        description: "Number of lines of context to show between changes",
        args: {
          name: "CONTEXT",
          default: "-1",
        },
      },
      {
        name: "--config",
        description: "Specify a path to the configuration file(s) to use",
        isRepeatable: true,
        args: {
          name: "CONFIG",
          template: "filepaths",
          suggestions: ["none", "NONE"],
        },
      },
      overrideOption,
    ],
    args: [
      {
        name: "LEFT",
        template: "filepaths",
      },
      {
        name: "RIGHT",
        template: "filepaths",
      },
    ],
  },
  {
    name: "dnd",
    description: "Perform drag and drop operations, even over SSH",
    options: [
      {
        name: "--drag",
        description:
          "When starting a drag, use the specified file as the data source for the specified MIME type",
        isRepeatable: true,
        args: {
          name: "DRAG",
        },
      },
      {
        name: "--drop",
        description:
          "When receiving a drop, use the specified file as the data destination for the specified MIME type",
        isRepeatable: true,
        args: {
          name: "DROP",
        },
      },
      {
        name: "--drop-dest",
        description: "Path to the directory in which dropped data is saved",
        args: {
          name: "DROP_DEST",
        },
      },
      {
        name: "--copy-mode",
        description: "Control how local files are handled for Copy drops",
        args: {
          name: "COPY_MODE",
          suggestions: ["auto", "independent"],
          default: "auto",
        },
      },
      {
        name: "--confirm-drop-overwrite",
        description:
          "Ask for confirmation when dropping text/uri-list data if the drop will cause any existing files to be overwritten",
      },
      {
        name: "--drop-anywhere",
        description:
          "Allow dropping anywhere, not just on the Copy or Move drop regions",
        args: {
          name: "DROP_ANYWHERE",
          suggestions: ["disallowed", "copy", "move"],
          default: "disallowed",
        },
      },
      {
        name: "--drag-thumbnail",
        description:
          "Path to an image to use as the drag icon when starting a drag",
        args: {
          name: "DRAG_THUMBNAIL",
        },
      },
      {
        name: "--drag-thumbnail-size",
        description: "The thumbnail size for the image used as the drag icon",
        args: {
          name: "DRAG_THUMBNAIL_SIZE",
          default: "512",
        },
      },
      {
        name: "--exit-on",
        description: "A comma separated list of events to exit on",
        args: {
          name: "EXIT_ON",
          default: "esc-key",
        },
      },
    ],
    args: {
      name: "FILE",
      template: "filepaths",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "hints",
    description: "Select text from screen with keyboard",
    options: [
      {
        name: "--program",
        description: "What program to use to open matched text",
        isRepeatable: true,
        args: {
          name: "PROGRAM",
        },
      },
      {
        name: "--type",
        description: "The type of text to search for",
        args: {
          name: "TYPE",
          suggestions: [
            "url",
            "regex",
            "path",
            "line",
            "hash",
            "word",
            "linenum",
            "hyperlink",
            "ip",
          ],
          default: "url",
        },
      },
      {
        name: "--regex",
        description:
          "The regular expression to use when option --type is set to regex, in Perl 5 syntax",
        args: {
          name: "REGEX",
          default: "(?m)^\\s*(.+?)\\s*$",
        },
      },
      {
        name: "--linenum-action",
        description: "Where to perform the action on matched errors",
        args: {
          name: "LINENUM_ACTION",
          suggestions: [
            "self",
            "window",
            "tab",
            "os_window",
            "background",
            "remote-control",
          ],
          default: "self",
        },
      },
      {
        name: "--url-prefixes",
        description: "Comma separated list of recognized URL prefixes",
        args: {
          name: "URL_PREFIXES",
          default: "default",
        },
      },
      {
        name: "--url-excluded-characters",
        description: "Characters to exclude when matching URLs",
        args: {
          name: "URL_EXCLUDED_CHARACTERS",
          default: "default",
        },
      },
      {
        name: "--word-characters",
        description: "Characters to consider as part of a word",
        args: {
          name: "WORD_CHARACTERS",
        },
      },
      {
        name: "--minimum-match-length",
        description: "The minimum number of characters to consider a match",
        args: {
          name: "MINIMUM_MATCH_LENGTH",
          default: "3",
        },
      },
      {
        name: "--multiple",
        description:
          "Select multiple matches and perform the action on all of them together at the end",
      },
      {
        name: "--multiple-joiner",
        description:
          "String for joining multiple selections when copying to the clipboard or inserting into the terminal",
        args: {
          name: "MULTIPLE_JOINER",
          default: "auto",
        },
      },
      {
        name: "--add-trailing-space",
        description: "Add trailing space after matched text",
        args: {
          name: "ADD_TRAILING_SPACE",
          suggestions: ["auto", "always", "never"],
          default: "auto",
        },
      },
      {
        name: "--hints-offset",
        description: "The offset (from zero) at which to start hint numbering",
        args: {
          name: "HINTS_OFFSET",
          default: "1",
        },
      },
      {
        name: "--prefix-free",
        description: "Generate hints such that no hint is a prefix of another",
      },
      {
        name: "--alphabet",
        description: "The list of characters to use for hints",
        args: {
          name: "ALPHABET",
        },
      },
      {
        name: "--ascending",
        description:
          "Make the hints increase from top to bottom, instead of decreasing from top to bottom",
      },
      {
        name: "--hints-foreground-color",
        description: "The foreground color for hints",
        args: {
          name: "HINTS_FOREGROUND_COLOR",
          default: "black",
        },
      },
      {
        name: "--hints-background-color",
        description: "The background color for hints",
        args: {
          name: "HINTS_BACKGROUND_COLOR",
          default: "green",
        },
      },
      {
        name: "--hints-text-color",
        description:
          "The foreground color for text pointed to by the hints (excluding the hint label itself)",
        args: {
          name: "HINTS_TEXT_COLOR",
          default: "auto",
        },
      },
      {
        name: "--hints-text-background-color",
        description:
          "The background color for text pointed to by the hints (excluding the hint label itself)",
        args: {
          name: "HINTS_TEXT_BACKGROUND_COLOR",
          default: "auto",
        },
      },
      {
        name: "--customize-processing",
        description:
          "Name of a python file in the kitty config directory which will be imported to provide custom implementations for pattern finding and performing actions on selected matches",
        args: {
          name: "CUSTOMIZE_PROCESSING",
        },
      },
      {
        name: "--window-title",
        description:
          "The title for the hints window, default title is based on the type of text being hinted",
        args: {
          name: "WINDOW_TITLE",
        },
      },
    ],
  },
  {
    name: ["hyperlinked_grep", "hyperlinked-grep"],
    description: "Add hyperlinks to the output of ripgrep",
    loadSpec: "rg",
  },
  icatCommand,
  {
    name: "notify",
    description: "Send notifications to the user",
    options: [
      {
        name: ["-n", "--icon"],
        description: "The name of the icon to use for the notification",
        isRepeatable: true,
        args: {
          name: "ICON",
        },
      },
      {
        name: ["-p", "--icon-path"],
        description:
          "Path to an image file in PNG/JPEG/GIF formats to use as the icon",
        args: {
          name: "ICON_PATH",
        },
      },
      {
        name: ["-a", "--app-name"],
        description: "The application name for the notification",
        args: {
          name: "APP_NAME",
          default: "kitten-notify",
        },
      },
      {
        name: ["-b", "--button"],
        description: "Add a button with the specified text to the notification",
        isRepeatable: true,
        args: {
          name: "BUTTON",
        },
      },
      {
        name: ["-u", "--urgency"],
        description: "The urgency of the notification",
        args: {
          name: "URGENCY",
          suggestions: ["normal", "low", "critical"],
          default: "normal",
        },
      },
      {
        name: ["-e", "--expire-after"],
        description: "The duration, for the notification to appear on screen",
        args: {
          name: "EXPIRE_AFTER",
        },
      },
      {
        name: ["-s", "--sound-name"],
        description: "The name of the sound to play with the notification",
        args: {
          name: "SOUND_NAME",
          default: "system",
        },
      },
      {
        name: ["-t", "--type"],
        description: "The notification type",
        args: {
          name: "TYPE",
        },
      },
      {
        name: ["-i", "--identifier"],
        description: "The identifier of this notification",
        args: {
          name: "IDENTIFIER",
        },
      },
      {
        name: ["-P", "--print-identifier"],
        description: "Print the identifier for the notification to STDOUT",
      },
      {
        name: ["-w", "--wait-till-closed", "--wait-for-completion"],
        description: "Wait until the notification is closed",
      },
      {
        name: "--only-print-escape-code",
        description: "Only print the escape code to STDOUT",
      },
      {
        name: ["-g", "--icon-cache-id"],
        description:
          "Identifier to use when caching icons in the terminal emulator",
        args: {
          name: "ICON_CACHE_ID",
        },
      },
    ],
    args: [
      {
        name: "TITLE",
      },
      {
        name: "BODY",
        isOptional: true,
        isVariadic: true,
      },
    ],
  },
  {
    name: "panel",
    description:
      "Draw a GPU accelerated panel on your desktop using a command line program",
    options: [
      {
        name: "--lines",
        description: "The number of lines shown in the panel",
        args: {
          name: "LINES",
          default: "1",
        },
      },
      {
        name: "--columns",
        description: "The number of columns shown in the panel",
        args: {
          name: "COLUMNS",
          default: "1",
        },
      },
      {
        name: "--margin-top",
        description: "Set the top margin for the panel, in pixels",
        args: {
          name: "MARGIN_TOP",
          default: "0",
        },
      },
      {
        name: "--margin-left",
        description: "Set the left margin for the panel, in pixels",
        args: {
          name: "MARGIN_LEFT",
          default: "0",
        },
      },
      {
        name: "--margin-bottom",
        description: "Set the bottom margin for the panel, in pixels",
        args: {
          name: "MARGIN_BOTTOM",
          default: "0",
        },
      },
      {
        name: "--margin-right",
        description: "Set the right margin for the panel, in pixels",
        args: {
          name: "MARGIN_RIGHT",
          default: "0",
        },
      },
      {
        name: "--edge",
        description: "Which edge of the screen to place the panel on",
        args: {
          name: "EDGE",
          suggestions: [
            "top",
            "bottom",
            "left",
            "right",
            "background",
            "center",
            "center-sized",
            "none",
          ],
          default: "top",
        },
      },
      {
        name: "--layer",
        description:
          "On a Wayland compositor that supports the wlr layer shell protocol, specifies the layer on which the panel should be drawn",
        args: {
          name: "LAYER",
          suggestions: ["background", "bottom", "top", "overlay"],
          default: "bottom",
        },
      },
      {
        name: ["-c", "--config"],
        description:
          "Path to config file to use for kitty when drawing the panel",
        isRepeatable: true,
        args: {
          name: "CONFIG",
        },
      },
      {
        name: ["-o", "--override"],
        description:
          "Override individual kitty configuration options, can be specified multiple times",
        isRepeatable: true,
        args: {
          name: "OVERRIDE",
        },
      },
      {
        name: "--output-name",
        description:
          "The panel can only be displayed on a single monitor (output) at a time",
        args: {
          name: "OUTPUT_NAME",
        },
      },
      {
        name: ["--class", "--app-id"],
        description: "On Wayland set the namespace of the layer shell surface",
        args: {
          name: "CLASS",
          default: "kitty-panel",
        },
      },
      {
        name: ["--name", "--os-window-tag"],
        description:
          "On X11 sets the name part of the WM_CLASS property on X11, when unspecified uses the value from kitty --class on X11",
        args: {
          name: "NAME",
        },
      },
      {
        name: "--focus-policy",
        description:
          "On a Wayland compositor that supports the wlr layer shell protocol",
        args: {
          name: "FOCUS_POLICY",
          suggestions: ["not-allowed", "exclusive", "on-demand"],
          default: "not-allowed",
        },
      },
      {
        name: "--hide-on-focus-loss",
        description: "Automatically hide the panel window when it loses focus",
      },
      {
        name: "--grab-keyboard",
        description: "Grab the keyboard",
      },
      {
        name: "--exclusive-zone",
        description:
          "On a Wayland compositor that supports the wlr layer shell protocol, request a given exclusive zone for the panel",
        args: {
          name: "EXCLUSIVE_ZONE",
          default: "-1",
        },
      },
      {
        name: "--override-exclusive-zone",
        description:
          "On a Wayland compositor that supports the wlr layer shell protocol, override the default exclusive zone",
      },
      {
        name: ["-1", "--single-instance"],
        description:
          "If specified only a single instance of the panel will run",
      },
      {
        name: "--instance-group",
        description: "Used in combination with the --single-instance option",
        args: {
          name: "INSTANCE_GROUP",
        },
      },
      {
        name: "--wait-for-single-instance-window-close",
        description:
          "Normally, when using kitty --single-instance, kitty will open a new window in an existing instance and quit immediately",
      },
      {
        name: "--listen-on",
        description:
          "Listen on the specified socket address for control messages",
        args: {
          name: "LISTEN_ON",
        },
      },
      {
        name: "--toggle-visibility",
        description:
          "When set and using --single-instance will toggle the visibility of the existing panel rather than creating a new one",
      },
      {
        name: "--if-running",
        description:
          "When using --toggle-visibility and a program to run is specified on the command line",
        args: {
          name: "IF_RUNNING",
          suggestions: ["ignore", "new-tab", "new-window"],
          default: "ignore",
        },
      },
      {
        name: "--hold",
        description:
          "Remain open, at a shell prompt, after the program run in the panel exits",
      },
      {
        name: "--move-to-active-monitor",
        description:
          "When set and using --toggle-visibility to show an existing panel",
      },
      {
        name: "--start-as-hidden",
        description: "Start in hidden mode, useful with --toggle-visibility",
      },
      {
        name: "--detach",
        description:
          "Detach from the controlling terminal, if any, running in an independent child process, the parent process exits immediately",
      },
      {
        name: "--detached-log",
        description:
          "Path to a log file to store STDOUT/STDERR when using --detach",
        args: {
          name: "DETACHED_LOG",
        },
      },
      {
        name: "--debug-rendering",
        description: "For internal debugging use",
      },
      {
        name: "--debug-input",
        description: "For internal debugging use",
      },
    ],
    args: {
      name: "CMD",
      isCommand: true,
      isOptional: true,
    },
  },
  {
    name: ["query_terminal", "query-terminal"],
    description: "Query the terminal for various capabilities",
    options: [
      {
        name: "--wait-for",
        description:
          "The amount of time (in seconds) to wait for a response from the terminal, after querying it",
        args: {
          name: "WAIT_FOR",
          default: "10",
        },
      },
    ],
    args: {
      name: "QUERY",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: ["quick_access_terminal", "quick-access-terminal"],
    description:
      "A quick access terminal window that you can bring up instantly with a keypress or a command",
    options: [
      {
        name: ["-c", "--config"],
        description: "Specify a path to the configuration file(s) to use",
        isRepeatable: true,
        args: {
          name: "CONFIG",
          template: "filepaths",
          suggestions: ["none", "NONE"],
        },
      },
      overrideOption,
      {
        name: "--detach",
        description:
          "Detach from the controlling terminal, if any, running in an independent child process, the parent process exits immediately",
      },
      {
        name: "--detached-log",
        description:
          "Path to a log file to store STDOUT/STDERR when using --detach",
        args: {
          name: "DETACHED_LOG",
        },
      },
      {
        name: "--instance-group",
        description:
          "The unique name of this quick access terminal Use a different name if you want multiple such terminals",
        args: {
          name: "INSTANCE_GROUP",
          default: "quick-access",
        },
      },
      {
        name: "--if-running",
        description:
          "What to do when a program to run is specified on the command line and the quick access terminal is already running",
        args: {
          name: "IF_RUNNING",
          suggestions: ["ignore", "new-tab", "new-window"],
          default: "ignore",
        },
      },
      {
        name: "--hold",
        description:
          "Remain open, at a shell prompt, after the program run in the quick access terminal exits, instead of closing the tab or window",
      },
      {
        name: "--listen-on",
        description:
          "Listen on the specified socket address for remote control messages",
        args: {
          name: "LISTEN_ON",
        },
      },
      {
        name: "--debug-rendering",
        description:
          "For debugging interactions with the compositor/window manager",
      },
      {
        name: "--debug-input",
        description:
          "For debugging interactions with the compositor/window manager",
      },
    ],
    args: {
      name: "CMD",
      isCommand: true,
      isOptional: true,
    },
  },
  {
    name: ["remote_file", "remote-file"],
    description:
      "Ask the user what to do with a remote file, for internal use only",
    hidden: true,
    options: [
      {
        name: ["-m", "--mode"],
        description: "Which mode to operate in",
        args: {
          name: "MODE",
          suggestions: ["ask", "edit"],
          default: "ask",
        },
      },
      {
        name: ["-p", "--path"],
        description: "Path to the remote file",
        args: {
          name: "PATH",
        },
      },
      {
        name: "--hostname",
        description: "Hostname of the remote host",
        args: {
          name: "HOSTNAME",
        },
      },
      {
        name: "--ssh-connection-data",
        description: "The data used to connect over ssh",
        args: {
          name: "SSH_CONNECTION_DATA",
        },
      },
    ],
  },
  {
    name: ["resize_window", "resize-window"],
    description: "Resize the current window interactively",
    options: [
      {
        name: "--horizontal-increment",
        description: "The base horizontal increment",
        args: {
          name: "HORIZONTAL_INCREMENT",
          default: "2",
        },
      },
      {
        name: "--vertical-increment",
        description: "The base vertical increment",
        args: {
          name: "VERTICAL_INCREMENT",
          default: "2",
        },
      },
      {
        name: "--fraction",
        description:
          "The fraction of the remaining resize steps to take with the chosen modifier",
        args: {
          name: "FRACTION",
          default: "1/3",
        },
      },
      {
        name: "--strategy",
        description: "Choose the initial resize strategy",
        args: {
          name: "STRATEGY",
          suggestions: ["window", "edge"],
          default: "window",
        },
      },
    ],
  },
  {
    name: ["show_key", "show-key"],
    description:
      "Show the codes generated by the terminal for key presses in various keyboard modes",
    options: [
      {
        name: ["-m", "--key-mode"],
        description: "The keyboard mode to use when showing keys",
        args: {
          name: "KEY_MODE",
          suggestions: ["normal", "application", "kitty", "unchanged"],
          default: "normal",
        },
      },
    ],
  },
  {
    name: "ssh",
    description: "Truly convenient SSH",
    loadSpec: "ssh",
  },
  {
    name: "themes",
    description: "Manage kitty color schemes easily",
    options: [
      {
        name: "--cache-age",
        description:
          "Check for new themes only after the specified number of days",
        args: {
          name: "CACHE_AGE",
          default: "1",
        },
      },
      {
        name: "--reload-in",
        description:
          "By default, this kitten will signal only the parent kitty instance it is running in to reload its config, after making changes",
        args: {
          name: "RELOAD_IN",
          suggestions: ["none", "parent", "all"],
          default: "parent",
        },
      },
      {
        name: "--dump-theme",
        description:
          "When running non-interactively, dump the specified theme to STDOUT instead of changing kitty.conf",
      },
      {
        name: "--config-file-name",
        description: "The name or path to the config file to edit",
        args: {
          name: "CONFIG_FILE_NAME",
          default: "kitty.conf",
        },
      },
    ],
    args: {
      name: "THEME_NAME",
      isOptional: true,
    },
  },
  {
    name: "transfer",
    description: "Transfer files easily over the TTY device",
    options: [
      {
        name: ["-d", "--direction"],
        description: "Whether to send or receive files",
        args: {
          name: "DIRECTION",
          suggestions: ["upload", "download", "send", "receive"],
          default: "download",
        },
      },
      {
        name: ["-m", "--mode"],
        description: "How to interpret command line arguments",
        args: {
          name: "MODE",
          suggestions: ["normal", "mirror"],
          default: "normal",
        },
      },
      {
        name: "--compress",
        description: "Whether to compress data being sent",
        args: {
          name: "COMPRESS",
          suggestions: ["auto", "never", "always"],
          default: "auto",
        },
      },
      {
        name: ["-p", "--permissions-bypass"],
        description:
          "The password to use to skip the transfer confirmation popup in kitty",
        args: {
          name: "PERMISSIONS_BYPASS",
        },
      },
      {
        name: ["-c", "--confirm-paths"],
        description:
          "Before actually transferring files, show a mapping of local file names to remote file names and ask for confirmation",
      },
      {
        name: ["-x", "--transmit-deltas"],
        description:
          "If a file on the receiving side already exists, use the rsync algorithm to update it to match the file on the sending side",
      },
    ],
    args: [
      {
        name: "SOURCE",
        template: "filepaths",
        isVariadic: true,
      },
      {
        name: "DESTINATION",
        template: "filepaths",
      },
    ],
  },
  {
    name: ["unicode_input", "unicode-input"],
    description: "Browse and select unicode characters by name",
    options: [
      {
        name: "--emoji-variation",
        description:
          "Whether to use the textual or the graphical form for emoji",
        args: {
          name: "EMOJI_VARIATION",
          suggestions: ["none", "graphic", "text"],
          default: "none",
        },
      },
      {
        name: "--tab",
        description: "The initial tab to display",
        args: {
          name: "TAB",
          suggestions: ["previous", "code", "name", "emoticons", "favorites"],
          default: "previous",
        },
      },
    ],
  },
];

const remoteControlOptions: Fig.Option[] = [
  {
    name: "--to",
    description: "An address for the kitty instance to control",
    args: {
      name: "TO",
    },
  },
  {
    name: "--password",
    description: "A password to use when contacting kitty",
    args: {
      name: "PASSWORD",
    },
  },
  {
    name: "--password-file",
    description: "A file from which to read the password",
    args: {
      name: "PASSWORD_FILE",
      template: "filepaths",
      suggestions: [
        {
          name: "-",
          description: "Read from stdin",
        },
      ],
      default: "rc-pass",
    },
  },
  {
    name: "--password-env",
    description:
      "The name of an environment variable to read the password from",
    args: {
      name: "PASSWORD_ENV",
      default: "KITTY_RC_PASSWORD",
    },
  },
  {
    name: "--use-password",
    description:
      "If no password is available, kitty will usually just send the remote control command without a password",
    args: {
      name: "USE_PASSWORD",
      suggestions: ["if-available", "never", "always"],
      default: "if-available",
    },
  },
];

const remoteControlCommands: Fig.Subcommand[] = [
  {
    name: "action",
    description: "Run the specified mappable action",
    options: [
      {
        name: "--self",
        description:
          "Run the action on the window this command is run in instead of the active window",
      },
      noResponseOption,
      matchWindowOption,
    ],
    args: [
      {
        name: "ACTION",
      },
      {
        name: "ARGS",
        isOptional: true,
        isVariadic: true,
      },
    ],
  },
  {
    name: "close-tab",
    description: "Close the specified tabs",
    options: [
      matchTabOption,
      noResponseOption,
      {
        name: "--self",
        description:
          "Close the tab of the window this command is run in, rather than the active tab",
      },
      {
        name: "--ignore-no-match",
        description:
          "Do not return an error if no tabs are matched to be closed",
      },
    ],
  },
  {
    name: "close-window",
    description: "Close the specified windows",
    options: [
      matchWindowOption,
      noResponseOption,
      {
        name: "--self",
        description:
          "Close the window this command is run in, rather than the active window",
      },
      {
        name: "--ignore-no-match",
        description:
          "Do not return an error if no windows are matched to be closed",
      },
    ],
  },
  {
    name: "create-marker",
    description: "Create a marker that highlights specified text",
    options: [
      matchWindowOption,
      {
        name: "--self",
        description:
          "Apply marker to the window this command is run in, rather than the active window",
      },
    ],
    args: [
      {
        name: "MARKER",
      },
      {
        name: "SPECIFICATION",
      },
    ],
  },
  {
    name: "detach-tab",
    description:
      "Detach the specified tabs and place them in a different/new OS window",
    options: [
      matchTabOption,
      {
        name: ["-t", "--target-tab"],
        description: "The tab to match",
        args: {
          name: "TARGET_TAB",
        },
      },
      {
        name: "--self",
        description:
          "Detach the tab this command is run in, rather than the active tab",
      },
    ],
  },
  {
    name: "detach-window",
    description:
      "Detach the specified windows and place them in a different/new tab",
    options: [
      matchWindowOption,
      {
        name: ["-t", "--target-tab"],
        description: "The tab to match",
        args: {
          name: "TARGET_TAB",
        },
      },
      {
        name: "--self",
        description:
          "Detach the window this command is run in, rather than the active window",
      },
      {
        name: "--stay-in-tab",
        description:
          "Keep the focus on a window in the currently focused tab after moving the specified windows",
      },
      {
        name: "--tab-title",
        description:
          "The title for the tab, when moving to a newly created tab",
        args: {
          name: "TAB_TITLE",
        },
      },
      {
        name: "--location",
        description:
          "Where to place the newly created tab, when moving to a new tab",
        args: {
          name: "LOCATION",
          suggestions: [
            "first",
            "after",
            "before",
            "neighbor",
            "last",
            "by-title",
            "default",
          ],
          default: "default",
        },
      },
      {
        name: "--create-if-missing",
        description:
          "If no tab matches kitten @ detach-window --target-tab, create a new tab and move the windows to it, instead of failing",
      },
    ],
  },
  {
    name: "disable-ligatures",
    description: "Control ligature rendering",
    options: [
      {
        name: ["-a", "--all"],
        description:
          "By default, ligatures are only affected in the active window",
      },
      matchWindowOption,
      matchWindowTabOption,
    ],
    args: {
      name: "STRATEGY",
      suggestions: ["never", "always", "cursor"],
    },
  },
  {
    name: "env",
    description: "Change environment variables seen by future children",
    args: {
      name: "ENV",
      description:
        "Variable assignment of the form NAME=VALUE, or just NAME to remove the variable",
      isVariadic: true,
    },
  },
  {
    name: "focus-tab",
    description: "Focus the specified tab",
    options: [matchTabOption, noResponseOption],
  },
  {
    name: "focus-window",
    description: "Focus the specified window",
    options: [matchWindowOption, noKittyResponseOption],
  },
  {
    name: "get-colors",
    description: "Get terminal colors",
    options: [
      {
        name: ["-c", "--configured"],
        description:
          "Instead of outputting the colors for the specified window, output the currently configured colors",
      },
      matchWindowOption,
    ],
  },
  {
    name: "get-text",
    description: "Get text from the specified window",
    options: [
      matchWindowOption,
      {
        name: "--extent",
        description: "What text to get",
        args: {
          name: "EXTENT",
          suggestions: [
            "screen",
            "all",
            "selection",
            "first_cmd_output_on_screen",
            "last_cmd_output",
            "last_visited_cmd_output",
            "last_non_empty_output",
            "alternate",
            "alternate_scrollback",
          ],
          default: "screen",
        },
      },
      {
        name: "--ansi",
        description: "By default, only plain text is returned",
      },
      {
        name: "--add-cursor",
        description:
          "Add ANSI escape codes specifying the cursor position and style to the end of the text",
      },
      {
        name: "--add-wrap-markers",
        description:
          "Add carriage returns at every line wrap location (where long lines are wrapped at screen edges)",
      },
      {
        name: "--clear-selection",
        description: "Clear the selection in the matched window, if any",
      },
      {
        name: "--self",
        description:
          "Get text from the window this command is run in, rather than the active window",
      },
    ],
  },
  {
    name: "goto-layout",
    description: "Set the window layout",
    options: [matchTabOption],
    args: {
      name: "LAYOUT_NAME",
      suggestions: [
        "fat",
        "grid",
        "horizontal",
        "splits",
        "stack",
        "tall",
        "vertical",
      ],
    },
  },
  {
    name: "kitten",
    description: "Run a kitten",
    options: [matchWindowOption],
    args: [
      {
        name: "KITTEN_NAME",
        template: "filepaths",
      },
      {
        name: "ARGS",
        isOptional: true,
        isVariadic: true,
      },
    ],
  },
  {
    name: "last-used-layout",
    description: "Switch to the last used layout",
    options: [
      {
        name: ["-a", "--all"],
        description: "Change the layout in all tabs",
      },
      noKittyResponseOption,
      matchTabOption,
    ],
  },
  {
    name: "launch",
    description: "Run an arbitrary process in a new window/tab",
    options: [
      matchTabOption,
      {
        name: "--wait-for-child-to-exit",
        description:
          "Wait until the launched program exits and print out its exit code",
      },
      {
        name: "--response-timeout",
        description:
          "The time in seconds to wait for the started process to exit, when using the --wait-for-child-to-exit option",
        args: {
          name: "RESPONSE_TIMEOUT",
          default: "86400",
        },
      },
      {
        name: "--no-response",
        description: "Do not print out the id of the newly created window",
      },
      {
        name: "--self",
        description:
          "If specified the tab containing the window this command is run in is used instead of the active tab",
      },
      {
        name: "--source-window",
        description:
          "A match expression to select the window from which data such as title, colors, env vars, screen contents, etc. are copied",
        args: {
          name: "SOURCE_WINDOW",
        },
      },
      {
        name: ["--window-title", "--title"],
        description: "The title to set for the new window",
        args: {
          name: "WINDOW_TITLE",
        },
      },
      {
        name: "--tab-title",
        description: "The title for the new tab if launching in a new tab",
        args: {
          name: "TAB_TITLE",
        },
      },
      {
        name: "--type",
        description: "Where to launch the child process",
        args: {
          name: "TYPE",
          suggestions: [
            "window",
            "window-dock",
            "tab",
            "tab-dock",
            "os-window-dock",
            "os-window",
            "os-panel",
            "overlay",
            "overlay-main",
            "background",
            "clipboard",
            "primary",
          ],
          default: "window",
        },
      },
      {
        name: "--dock-edge",
        description:
          "The edge at which to place a window-dock, tab-dock or os-window-dock window",
        args: {
          name: "DOCK_EDGE",
          suggestions: ["left", "top", "right", "bottom"],
          default: "bottom",
        },
      },
      {
        name: "--dock-size",
        description:
          "The size of a window-dock, tab-dock or os-window-dock window",
        args: {
          name: "DOCK_SIZE",
          default: "1",
        },
      },
      {
        name: "--dock-skip-focus",
        description:
          "Prevent a window-dock, tab-dock or os-window-dock window from ever getting keyboard focus",
      },
      {
        name: ["--keep-focus", "--dont-take-focus"],
        description:
          "Keep the focus on the currently active window instead of switching to the newly opened window",
      },
      {
        name: "--focus-existing",
        description: "A match expression to select an existing window or tab",
        args: {
          name: "FOCUS_EXISTING",
        },
      },
      {
        name: "--cwd",
        description: "The working directory for the newly launched child",
        args: {
          name: "CWD",
          template: "folders",
          suggestions: ["current", "oldest", "last_reported", "root"],
        },
      },
      {
        name: "--add-to-session",
        description:
          "Add the newly created window/tab to the specified session",
        args: {
          name: "ADD_TO_SESSION",
        },
      },
      {
        name: "--env",
        description: "Environment variables to set in the child process",
        isRepeatable: true,
        args: {
          name: "ENV",
        },
      },
      {
        name: "--var",
        description: "User variables to set in the created window",
        isRepeatable: true,
        args: {
          name: "VAR",
        },
      },
      {
        name: "--hold",
        description:
          "Keep the window open even after the command being executed exits, at a shell prompt",
      },
      {
        name: "--copy-colors",
        description:
          "Set the colors of the newly created window to be the same as the colors in the source window",
      },
      {
        name: "--copy-cmdline",
        description:
          "Ignore any specified command line and instead use the command line from the source window",
      },
      {
        name: "--copy-env",
        description:
          "Copy the environment variables from the source window into the newly launched child process",
      },
      {
        name: "--location",
        description:
          "Where to place the newly created window when it is added to a tab which already has existing windows in it",
        args: {
          name: "LOCATION",
          suggestions: [
            "first",
            "after",
            "before",
            "neighbor",
            "last",
            "vsplit",
            "hsplit",
            "split",
            "by-title",
            "default",
          ],
          default: "default",
        },
      },
      {
        name: "--next-to",
        description:
          "A match expression to select the window next to which the new window is created",
        args: {
          name: "NEXT_TO",
        },
      },
      {
        name: "--bias",
        description: "The bias used to alter the size of the window",
        args: {
          name: "BIAS",
          default: "0",
        },
      },
      {
        name: "--allow-remote-control",
        description:
          "Programs running in this window can control kitty (even if remote control is not enabled in kitty.conf)",
      },
      {
        name: "--remote-control-password",
        description: "Restrict the actions remote control is allowed to take",
        isRepeatable: true,
        args: {
          name: "REMOTE_CONTROL_PASSWORD",
        },
      },
      {
        name: "--stdin-source",
        description: "Pass the screen contents as STDIN to the child process",
        args: {
          name: "STDIN_SOURCE",
          suggestions: [
            "none",
            "@selection",
            "@screen",
            "@screen_scrollback",
            "@alternate",
            "@alternate_scrollback",
            "@first_cmd_output_on_screen",
            "@last_cmd_output",
            "@last_visited_cmd_output",
          ],
          default: "none",
        },
      },
      {
        name: "--stdin-add-formatting",
        description:
          "When using --stdin-source add formatting escape codes, without this only plain text will be sent",
      },
      {
        name: "--stdin-add-line-wrap-markers",
        description:
          "When using --stdin-source add a carriage return at every line wrap location (where long lines are wrapped at screen edges)",
      },
      {
        name: "--marker",
        description:
          "Create a marker that highlights text in the newly created window",
        args: {
          name: "MARKER",
        },
      },
      {
        name: "--os-window-class",
        description:
          "Set the WM_CLASS property on X11 and the application id property on Wayland for the newly created OS window when using --type=os-window",
        args: {
          name: "OS_WINDOW_CLASS",
        },
      },
      {
        name: "--os-window-name",
        description:
          "Set the WM_NAME property on X11 for the newly created OS Window when using --type=os-window",
        args: {
          name: "OS_WINDOW_NAME",
        },
      },
      {
        name: "--os-window-title",
        description: "Set the title for the newly created OS window",
        args: {
          name: "OS_WINDOW_TITLE",
        },
      },
      {
        name: "--os-window-state",
        description: "The initial state for the newly created OS Window",
        args: {
          name: "OS_WINDOW_STATE",
          suggestions: ["normal", "fullscreen", "maximized", "minimized"],
          default: "normal",
        },
      },
      {
        name: "--os-window-position",
        description:
          "The position, for example 10x20, on screen at which to place the newly created OS Window",
        args: {
          name: "OS_WINDOW_POSITION",
        },
      },
      {
        name: "--logo",
        description:
          "Path to a PNG image to use as the logo for the newly created window",
        args: {
          name: "LOGO",
          template: "filepaths",
        },
      },
      {
        name: "--logo-position",
        description: "The position for the window logo",
        args: {
          name: "LOGO_POSITION",
        },
      },
      {
        name: "--logo-alpha",
        description:
          "The amount the window logo should be faded into the background",
        args: {
          name: "LOGO_ALPHA",
          default: "-1",
        },
      },
      {
        name: "--color",
        description: "Change colors in the newly launched window",
        isRepeatable: true,
        args: {
          name: "COLOR",
        },
      },
      {
        name: "--spacing",
        description: "Set the margin and padding for the newly created window",
        isRepeatable: true,
        args: {
          name: "SPACING",
        },
      },
      {
        name: ["-w", "--watcher"],
        description: "Path to a Python file",
        isRepeatable: true,
        args: {
          name: "WATCHER",
          template: "filepaths",
        },
      },
      {
        name: "--os-panel",
        description: "Options to control the creation of desktop panels",
        isRepeatable: true,
        args: {
          name: "OS_PANEL",
        },
      },
      {
        name: "--hold-after-ssh",
        description:
          "When using --cwd=current or similar from a window that is running the ssh kitten",
      },
    ],
    args: {
      name: "CMD",
      isCommand: true,
      isOptional: true,
    },
  },
  {
    name: "load-config",
    description: "(Re)load a config file",
    options: [
      {
        name: "--ignore-overrides",
        description:
          "By default, any config overrides previously specified at the kitty invocation command line or a previous load-config-file command are respected",
      },
      overrideOption,
      noResponseOption,
    ],
    args: {
      name: "CONF_FILE",
      template: "filepaths",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "ls",
    description: "List tabs/windows",
    options: [
      {
        name: "--all-env-vars",
        description:
          "Show all environment variables in output, not just differing ones",
      },
      {
        name: "--self",
        description: "Only list the window this command is run in",
      },
      {
        name: "--output-format",
        description: "Output in JSON or kitty session format",
        args: {
          name: "OUTPUT_FORMAT",
          suggestions: ["json", "session"],
          default: "json",
        },
      },
      matchWindowOption,
      matchWindowTabOption,
    ],
  },
  {
    name: "new-window",
    description: "Open new window",
    options: [
      matchTabOption,
      {
        name: "--title",
        description: "The title for the new window",
        args: {
          name: "TITLE",
        },
      },
      {
        name: "--cwd",
        description: "The initial working directory for the new window",
        args: {
          name: "CWD",
        },
      },
      {
        name: ["--keep-focus", "--dont-take-focus"],
        description:
          "Keep the current window focused instead of switching to the newly opened window",
      },
      {
        name: "--window-type",
        description: "What kind of window to open",
        args: {
          name: "WINDOW_TYPE",
          suggestions: ["kitty", "os"],
          default: "kitty",
        },
      },
      {
        name: "--new-tab",
        description: "Open a new tab",
      },
      {
        name: "--tab-title",
        description: "Set the title of the tab, when open a new tab",
        args: {
          name: "TAB_TITLE",
        },
      },
      {
        name: "--no-response",
        description:
          "Don't wait for a response giving the id of the newly opened window",
      },
    ],
    args: {
      name: "CMD",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "remove-marker",
    description: "Remove the currently set marker, if any",
    options: [
      matchWindowOption,
      {
        name: "--self",
        description:
          "Apply marker to the window this command is run in, rather than the active window",
      },
    ],
  },
  {
    name: "resize-os-window",
    description: "Resize/show/hide/etc. the specified OS Windows",
    options: [
      matchWindowOption,
      {
        name: "--action",
        description: "The action to perform",
        args: {
          name: "ACTION",
          suggestions: [
            "resize",
            "toggle-fullscreen",
            "toggle-maximized",
            "toggle-visibility",
            "hide",
            "show",
            "os-panel",
          ],
          default: "resize",
        },
      },
      {
        name: "--unit",
        description: "The unit in which to interpret specified sizes",
        args: {
          name: "UNIT",
          suggestions: ["cells", "pixels"],
          default: "cells",
        },
      },
      {
        name: "--width",
        description: "Change the width of the window",
        args: {
          name: "WIDTH",
          default: "0",
        },
      },
      {
        name: "--height",
        description: "Change the height of the window",
        args: {
          name: "HEIGHT",
          default: "0",
        },
      },
      {
        name: "--incremental",
        description:
          "Treat the specified sizes as increments on the existing window size instead of absolute sizes",
      },
      {
        name: "--self",
        description:
          "Resize the window this command is run in, rather than the active window",
      },
      noResponseOption,
    ],
    args: {
      name: "OS_PANEL_SETTINGS",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "resize-window",
    description: "Resize the specified windows",
    options: [
      matchWindowOption,
      {
        name: ["-i", "--increment"],
        description:
          "The number of cells to change the size by, can be negative to decrease the size",
        args: {
          name: "INCREMENT",
          default: "2",
        },
      },
      {
        name: "--fraction",
        description:
          "Take this fraction of the remaining resize steps, rounding up",
        args: {
          name: "FRACTION",
          default: "0",
        },
      },
      {
        name: ["-a", "--axis"],
        description: "The axis along which to resize",
        args: {
          name: "AXIS",
          suggestions: ["horizontal", "vertical", "reset"],
          default: "horizontal",
        },
      },
      {
        name: "--restore-entry-layout",
        description:
          "With --axis=reset, restore the proportions saved by the interactive resize page in Splits",
      },
      {
        name: "--self",
        description:
          "Resize the window this command is run in, rather than the active window",
      },
    ],
  },
  {
    name: "resize-window-edge",
    description: "Select and move an internal pane edge in the Splits layout",
    options: [
      matchWindowOption,
      {
        name: "--operation",
        description: "Select a session operation",
        args: {
          name: "OPERATION",
          suggestions: ["start", "state", "select", "move", "reset"],
          default: "move",
        },
      },
      {
        name: "--edge",
        description: "The pane edge",
        args: {
          name: "EDGE",
          suggestions: ["none", "left", "right", "top", "bottom"],
          default: "none",
        },
      },
      {
        name: ["-i", "--increment"],
        description: "Number of cells to move the divider",
        args: {
          name: "INCREMENT",
          default: "2",
        },
      },
      {
        name: "--fraction",
        description:
          "Take this fraction of the remaining resize steps, rounding up",
        args: {
          name: "FRACTION",
          default: "0",
        },
      },
      {
        name: "--divider",
        description:
          "Only move the divider with this identity, as returned by select",
        args: {
          name: "DIVIDER",
        },
      },
      {
        name: "--self",
        description:
          "Use the window this command is run in, rather than the active window",
      },
    ],
  },
  {
    name: "run",
    description:
      "Run a program on the computer in which kitty is running and get the output",
    options: [
      {
        name: "--env",
        description: "Environment variables to set in the child process",
        isRepeatable: true,
        args: {
          name: "ENV",
        },
      },
      {
        name: "--allow-remote-control",
        description:
          "The executed program will have privileges to run remote control commands in kitty",
      },
      {
        name: "--remote-control-password",
        description: "Restrict the actions remote control is allowed to take",
        isRepeatable: true,
        args: {
          name: "REMOTE_CONTROL_PASSWORD",
        },
      },
    ],
    args: {
      name: "CMD",
      isCommand: true,
    },
  },
  {
    name: "screenshot",
    description: "Take a screenshot of a kitty OS window, tab or window",
    options: [matchWindowOption, matchWindowTabOption],
    args: {
      name: "OUTPUT_FILE",
      template: "filepaths",
      isOptional: true,
    },
  },
  {
    name: "scroll-window",
    description: "Scroll the specified windows",
    options: [matchWindowOption, noResponseOption],
    args: {
      name: "SCROLL_AMOUNT",
    },
  },
  {
    name: "select-window",
    description: "Visually select a window in the specified tab",
    options: [
      matchTabOption,
      {
        name: "--response-timeout",
        description:
          "The time in seconds to wait for the user to select a window",
        args: {
          name: "RESPONSE_TIMEOUT",
          default: "60",
        },
      },
      {
        name: "--self",
        description:
          "Select window from the tab containing the window this command is run in, instead of the active tab",
      },
      {
        name: "--title",
        description:
          "A title that will be displayed to the user to describe what this selection is for",
        args: {
          name: "TITLE",
        },
      },
      {
        name: "--exclude-active",
        description:
          "Exclude the currently active window from the list of windows to pick",
      },
      {
        name: "--reactivate-prev-tab",
        description:
          "When the selection is finished, the tab in the same OS window that was activated before the selection will be reactivated",
      },
    ],
  },
  {
    name: "send-key",
    description: "Send arbitrary key presses to the specified windows",
    options: [
      matchWindowOption,
      matchWindowTabOption,
      {
        name: "--all",
        description: "Match all windows",
      },
      {
        name: "--exclude-active",
        description:
          "Do not send text to the active window, even if it is one of the matched windows",
      },
    ],
    args: {
      name: "KEYS",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "send-text",
    description: "Send arbitrary text to specified windows",
    options: [
      matchWindowOption,
      matchWindowTabOption,
      {
        name: "--all",
        description: "Match all windows",
      },
      {
        name: "--exclude-active",
        description:
          "Do not send text to the active window, even if it is one of the matched windows",
      },
      {
        name: "--stdin",
        description: "Read the text to be sent from stdin",
      },
      {
        name: "--from-file",
        description: "Path to a file whose contents you wish to send",
        args: {
          name: "FROM_FILE",
        },
      },
      {
        name: "--bracketed-paste",
        description:
          "When sending text to a window, wrap the text in bracketed paste escape codes",
        args: {
          name: "BRACKETED_PASTE",
          suggestions: ["disable", "auto", "enable"],
          default: "disable",
        },
      },
    ],
    args: {
      name: "TEXT",
      isOptional: true,
    },
  },
  {
    name: "set-background-image",
    description: "Set the background image",
    options: [
      {
        name: ["-a", "--all"],
        description:
          "By default, background image is only changed for the currently active OS window",
      },
      {
        name: ["-c", "--configured"],
        description:
          "Change the configured background image which is used for new OS windows",
      },
      {
        name: "--layout",
        description: "How the image should be displayed",
        args: {
          name: "LAYOUT",
          suggestions: [
            "tiled",
            "scaled",
            "mirror-tiled",
            "clamped",
            "centered",
            "cscaled",
            "configured",
          ],
          default: "configured",
        },
      },
      noKittyResponseOption,
      matchWindowOption,
    ],
    args: {
      name: "PATH_TO_IMAGE_OR_INDEX",
      template: "filepaths",
    },
  },
  {
    name: "set-background-opacity",
    description: "Set the background opacity",
    options: [
      {
        name: ["-a", "--all"],
        description:
          "By default, background opacity are only changed for the currently active OS window",
      },
      {
        name: "--toggle",
        description:
          "When specified, the background opacity for the matching OS windows will be reset to default if it is currently equal to the specified value, otherwise it will be set to the specified value",
      },
      matchWindowOption,
      matchWindowTabOption,
    ],
    args: {
      name: "OPACITY",
    },
  },
  {
    name: "set-colors",
    description: "Set terminal colors",
    options: [
      {
        name: ["-a", "--all"],
        description:
          "By default, colors are only changed for the currently active window",
      },
      {
        name: ["-c", "--configured"],
        description:
          "Also change the configured colors (i.e. the colors kitty will use for new windows or after a reset)",
      },
      {
        name: "--reset",
        description:
          "Restore all colors to the values they had at kitty startup",
      },
      matchWindowOption,
      matchWindowTabOption,
    ],
    args: {
      name: "COLOR_OR_FILE",
      template: "filepaths",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "set-enabled-layouts",
    description: "Set the enabled layouts in tabs",
    options: [
      matchTabOption,
      {
        name: "--configured",
        description:
          "Change the default enabled layout value so that the new value takes effect for all newly created tabs as well",
      },
    ],
    args: {
      name: "LAYOUT",
      suggestions: [
        "fat",
        "grid",
        "horizontal",
        "splits",
        "stack",
        "tall",
        "vertical",
      ],
      isVariadic: true,
    },
  },
  {
    name: "set-font-size",
    description: "Set the font size in the active top-level OS window",
    options: [
      {
        name: ["-a", "--all"],
        description:
          "By default, the font size is only changed in the active OS window, this option will cause it to be changed in all OS windows",
      },
    ],
    args: {
      name: "FONT_SIZE",
    },
  },
  {
    name: "set-os-window-title",
    description: "Set the OS window title",
    options: [matchWindowOption],
    args: {
      name: "TITLE",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "set-spacing",
    description: "Set window paddings and margins",
    options: [
      {
        name: ["-a", "--all"],
        description:
          "By default, settings are only changed for the currently active window",
      },
      {
        name: ["-c", "--configured"],
        description:
          "Also change the configured paddings and margins (i.e. the settings kitty will use for new windows)",
      },
      matchWindowOption,
      matchWindowTabOption,
    ],
    args: {
      name: "MARGIN_OR_PADDING",
      isVariadic: true,
    },
  },
  {
    name: "set-tab-color",
    description: "Change the color of the specified tabs in the tab bar",
    options: [
      matchTabOption,
      {
        name: "--self",
        description:
          "Change the color of the tab this command is run in, rather than the active tab",
      },
    ],
    args: {
      name: "COLORS",
      isVariadic: true,
    },
  },
  {
    name: "set-tab-title",
    description: "Set the tab title",
    options: [matchTabOption],
    args: {
      name: "TITLE",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "set-user-vars",
    description: "Set user variables on a window",
    options: [matchWindowOption],
    args: {
      name: "NAME=VALUE",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "set-window-logo",
    description: "Set the window logo",
    options: [
      matchWindowOption,
      {
        name: "--self",
        description:
          "Act on the window this command is run in, rather than the active window",
      },
      {
        name: "--position",
        description: "The position for the window logo",
        args: {
          name: "POSITION",
        },
      },
      {
        name: "--alpha",
        description:
          "The amount the window logo should be faded into the background",
        args: {
          name: "ALPHA",
          default: "-1",
        },
      },
      noKittyResponseOption,
    ],
    args: {
      name: "PATH_TO_IMAGE",
      template: "filepaths",
    },
  },
  {
    name: "set-window-title",
    description: "Set the window title",
    options: [
      {
        name: "--temporary",
        description:
          "By default, the title will be permanently changed and programs running in the window will not be able to change it again",
      },
      matchWindowOption,
    ],
    args: {
      name: "TITLE",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "signal-child",
    description:
      "Send a signal to the foreground process in the specified windows",
    options: [noResponseOption, matchWindowOption],
    args: {
      name: "SIGNAL",
      isOptional: true,
      isVariadic: true,
    },
  },
];

const plusCommands: Fig.Subcommand[] = [
  icatCommand,
  {
    name: "list-fonts",
    description: "List all available monospaced fonts",
  },
  {
    name: "hold",
    description:
      "Run a command and wait for Enter to be pressed after it exits",
    args: {
      name: "CMD",
      isCommand: true,
    },
  },
  {
    name: "complete",
    description: "Generate completion candidates for kitty commands",
    subcommands: [
      {
        name: "setup",
        description: "Output the completion setup script for a shell",
        args: {
          name: "SHELL",
          suggestions: ["bash", "zsh", "fish", "fish2"],
        },
      },
      {
        name: "bash",
        description: "Generate completions for bash",
      },
      {
        name: "zsh",
        description: "Generate completions for zsh",
      },
      {
        name: "fish2",
        description: "Generate completions for fish (legacy)",
      },
    ],
  },
  {
    name: "runpy",
    description: "Run Python code",
    args: {
      name: "PYTHON_CODE",
    },
  },
  {
    name: "launch",
    description: "Launch a Python script with full access to kitty internals",
    args: [
      {
        name: "SCRIPT",
        template: "filepaths",
      },
      {
        name: "ARGS",
        isOptional: true,
        isVariadic: true,
      },
    ],
  },
  {
    name: "open",
    description: "Open files and URLs",
    options: kittyOptions,
    args: {
      name: "FILE_OR_URL",
      template: "filepaths",
      isOptional: true,
      isVariadic: true,
    },
  },
  {
    name: "kitten",
    description: "Run a kitten",
    subcommands: kittenCommands,
  },
  {
    name: "shebang",
    description:
      "Run a script with confirmation, used as a shebang interpreter",
    args: [
      {
        name: "SCRIPT",
        template: "filepaths",
      },
      {
        name: "CMD",
        isOptional: true,
        isVariadic: true,
      },
    ],
  },
];

const completionSpec: Fig.Spec = {
  name: "kitty",
  options: kittyOptions,
  subcommands: [
    {
      name: "@",
      description: "Control kitty by sending it commands",
      options: remoteControlOptions,
      subcommands: remoteControlCommands,
    },
    icatCommand,
    {
      name: "list-fonts",
      description: "List all available monospaced fonts",
    },
    ...plusCommands.map((command) => ({
      ...command,
      name: `+${command.name}`,
    })),
  ],
  args: {
    isCommand: true,
  },
};

export default completionSpec;
