// tmux v3.8 (release tarball tmux-3.8.tar.gz from github.com/tmux/tmux, tag 3.8 = latest stable per Homebrew formula, 2026-11-19).
// Source: tmux.1 man page (rendered with mandoc), CHANGES, and the argument tables in cmd-*.c, options-table.c, sort.c and
// server-client.c of the 3.8 tree; the binary itself was not built or run, so every command and flag comes from the 3.8 sources.
// The default command-alias entries (split-pane, splitp, server-info, info, choose-window, choose-session) are included.

type TargetKind = "session" | "client" | "window" | "pane";

const lsArg = (name: string, command: string): Fig.Arg => ({
  name,
  generators: {
    script: ["tmux", command],
    postProcess: (out) => {
      return out
        .split("\n")
        .filter((line) => line)
        .map((line) => {
          const content = line.split(":");

          return {
            name: content[0],
            description: content[1],
          };
        });
    },
  },
});

const targetCommands: Record<TargetKind, string> = {
  session: "ls",
  client: "lsc",
  window: "lsw",
  pane: "lsp",
};

const targetArg = (kind: TargetKind, name = `target-${kind}`): Fig.Arg =>
  lsArg(name, targetCommands[kind]);

const buffersArg = (name = "buffer-name"): Fig.Arg => lsArg(name, "lsb");

// -t target-*
const targetOption = (
  kind: TargetKind,
  description = `The target ${kind}`,
  argName = `target-${kind}`
): Fig.Option => ({
  name: "-t",
  description,
  args: targetArg(kind, argName),
});

// -s src-*
const sourceOption = (
  kind: "window" | "pane",
  description = `The source ${kind}`
): Fig.Option => ({
  name: "-s",
  description,
  args: targetArg(kind, `src-${kind}`),
});

const bufferOption = (description = "The target buffer"): Fig.Option => ({
  name: "-b",
  description,
  args: buffersArg(),
});

const formatOption: Fig.Option = {
  name: "-F",
  description: "The format for the output",
  args: {
    name: "format",
    description: "The format for the output of this command",
  },
};

const filterOption = (
  description = "Only show items for which the filter is true"
): Fig.Option => ({
  name: "-f",
  description,
  args: {
    name: "filter",
    description: "A format; an item is skipped if it evaluates to zero",
  },
});

const sortOption = (
  suggestions: string[],
  description = "Specify the sort order"
): Fig.Option => ({
  name: "-O",
  description,
  args: {
    name: "sort-order",
    suggestions,
  },
});

const reverseOption = (description = "Reverse the sort order"): Fig.Option => ({
  name: "-r",
  description,
});

const zoomOption = (description = "Zoom the pane"): Fig.Option => ({
  name: "-Z",
  description,
});

const keepZoomOption: Fig.Option = {
  name: "-Z",
  description: "Keep the window zoomed if it was zoomed",
};

const startDirectoryOption = (
  description: string,
  name: "-c" | "-d" = "-c"
): Fig.Option => ({
  name,
  description,
  args: {
    name: "start-directory",
    description: "The start directory",
    template: "folders",
  },
});

const environmentOption: Fig.Option = {
  name: "-e",
  description: "Set an environment variable for the new process",
  isRepeatable: true,
  args: {
    name: "environment",
    description: "Environment variables with the form VARIABLE=VALUE",
  },
};

const printOption = (description: string): Fig.Option => ({
  name: "-P",
  description,
});

const flagsOption: Fig.Option = {
  name: "-f",
  description: "Set client flags",
  args: {
    name: "flags",
    description: "Comma-separated list of flags",
    suggestions: [
      "ignore-size",
      "new-layouts",
      "no-detach-on-destroy",
      "no-output",
      "pause-after",
      "read-only",
      "wait-exit",
    ],
  },
};

const keyTableArg = (description: string): Fig.Option => ({
  name: "-T",
  description,
  args: {
    name: "key-table",
    suggestions: ["root", "prefix", "copy-mode", "copy-mode-vi", "move"],
  },
});

const promptTypeArg: Fig.Arg = {
  name: "prompt-type",
  suggestions: ["command", "search"],
};

const sessionSorts = ["index", "name", "creation", "activity"];
const windowSorts = ["index", "name", "size", "creation", "activity"];
const paneSorts = ["name", "index", "size", "creation", "activity"];
const clientSorts = ["name", "size", "creation", "activity"];
const bufferSorts = ["name", "size", "creation"];
const treeSorts = ["index", "name", "activity", "z"];
const keySorts = ["key", "modifier", "name"];

const popupBorderLines = [
  "single",
  "double",
  "heavy",
  "simple",
  "rounded",
  "padded",
  "none",
];

const paneBorderLines = [
  "single",
  "double",
  "heavy",
  "simple",
  "number",
  "spaces",
  "none",
];

const menuPositionOption = (
  name: "-x" | "-y",
  suggestions: string[]
): Fig.Option => ({
  name,
  description: `The ${name === "-x" ? "column" : "row"} position`,
  args: {
    name: "position",
    description: "A number or one of the special values",
    suggestions,
  },
});

const layouts = [
  "even-horizontal",
  "even-vertical",
  "main-horizontal",
  "main-horizontal-mirrored",
  "main-vertical",
  "main-vertical-mirrored",
  "tiled",
];

const floatingPositions = [
  "top-left",
  "top-centre",
  "top-right",
  "centre-left",
  "centre",
  "centre-right",
  "bottom-left",
  "bottom-centre",
  "bottom-right",
  "top-left-centre",
  "top-right-centre",
  "bottom-left-centre",
  "bottom-right-centre",
  "front",
  "back",
  "forward",
  "backward",
  "forward-loop",
  "backward-loop",
];

// Hooks that are not "after-<command>" hooks
const hooks = [
  "alert-activity",
  "alert-bell",
  "alert-silence",
  "client-active",
  "client-attached",
  "client-closed",
  "client-created",
  "client-dark-theme",
  "client-detached",
  "client-focus-in",
  "client-focus-out",
  "client-light-theme",
  "client-resized",
  "client-session-changed",
  "command-error",
  "marked-pane-changed",
  "pane-activity",
  "pane-bell",
  "pane-command-finished",
  "pane-command-started",
  "pane-created",
  "pane-died",
  "pane-exited",
  "pane-focus-in",
  "pane-focus-out",
  "pane-mode-changed",
  "pane-mode-entered",
  "pane-mode-exited",
  "pane-moved",
  "pane-prompt-closed",
  "pane-prompt-opened",
  "pane-resized",
  "pane-set-clipboard",
  "pane-shell-prompt",
  "pane-title-changed",
  "session-added-to-group",
  "session-closed",
  "session-created",
  "session-removed-from-group",
  "session-renamed",
  "session-window-changed",
  "window-closed",
  "window-created",
  "window-layout-changed",
  "window-linked",
  "window-pane-changed",
  "window-renamed",
  "window-resized",
  "window-unlinked",
  "window-unzoomed",
  "window-zoomed",
];

// Commands that have an "after-<command>" hook
const afterHookCommands = [
  "bind-key",
  "capture-pane",
  "copy-mode",
  "display-message",
  "display-panes",
  "kill-pane",
  "list-buffers",
  "list-clients",
  "list-keys",
  "list-panes",
  "list-sessions",
  "list-windows",
  "load-buffer",
  "lock-server",
  "new-session",
  "new-window",
  "paste-buffer",
  "pipe-pane",
  "refresh-client",
  "rename-session",
  "rename-window",
  "resize-pane",
  "resize-window",
  "save-buffer",
  "select-layout",
  "select-pane",
  "select-window",
  "send-keys",
  "set-buffer",
  "set-environment",
  "set-hook",
  "set-option",
  "show-environment",
  "show-messages",
  "show-options",
  "split-window",
  "swap-window",
  "unbind-key",
];

const hookArg: Fig.Arg = {
  name: "hook-name",
  description: "A hook name, or after-<command> for a command's after hook",
  isOptional: true,
  suggestions: [
    ...hooks,
    ...afterHookCommands.map((command) => `after-${command}`),
  ],
};

const terminalFeatures = [
  "256",
  "appesc",
  "clipboard",
  "ccolour",
  "cstyle",
  "extkeys",
  "focus",
  "hyperlinks",
  "ignorefkeys",
  "margins",
  "mouse",
  "osc7",
  "overline",
  "progressbar",
  "rectfill",
  "RGB",
  "sixel",
  "strikethrough",
  "sync",
  "title",
  "usstyle",
  "utf8",
];

// Options shared by choose-client, choose-tree, choose-buffer, choose-session and choose-window
const chooseCommonOptions = (sorts: string[]): Fig.Option[] => [
  {
    name: "-k",
    description: "Kill the pane when the mode is exited",
  },
  {
    name: "-N",
    description:
      "Start without the preview (or with the larger preview if given twice)",
    isRepeatable: 2,
  },
  reverseOption(),
  {
    name: "-y",
    description: "Disable any confirmation prompts",
  },
  zoomOption(),
  formatOption,
  filterOption("Specify an initial filter"),
  {
    name: "-K",
    description: "A format for each shortcut key",
    args: {
      name: "key-format",
    },
  },
  sortOption(sorts, "Specify the initial sort order"),
  targetOption("pane"),
];

const hideOption: Fig.Option = {
  name: "-h",
  description: "Hide the pane containing the mode",
};

const chooseTreeOptions: Fig.Option[] = [
  {
    name: "-G",
    description: "Include all sessions in any session groups in the tree",
  },
  hideOption,
  ...chooseCommonOptions(treeSorts),
];

const chooseTreeTemplate = (defaultValue: string): Fig.Arg => ({
  name: "template",
  description: "A command with %% replaced by the chosen item",
  isOptional: true,
  default: defaultValue,
});

// Options shared by new-pane and split-window
const paneCreationOptions = (): Fig.Option[] => [
  {
    name: "-b",
    description: "Create the new pane to the left of or above target-pane",
  },
  {
    name: "-d",
    description: "Do not make the new pane the current pane",
  },
  {
    name: "-E",
    description: "Create an empty pane with no command running in it",
  },
  {
    name: "-f",
    description:
      "Create a pane spanning the full window height (with -h) or width (with -v)",
  },
  {
    name: "-h",
    description: "Split horizontally",
  },
  {
    name: "-I",
    description: "Create an empty pane and forward any output from stdin to it",
  },
  {
    name: "-k",
    description:
      "Keep the pane open after the command exits until a key is pressed",
  },
  {
    name: "-P",
    description: "Print information about the new pane",
  },
  {
    name: "-v",
    description: "Split vertically (the default)",
  },
  {
    name: "-W",
    description: "Wait until the command exits, then return its exit status",
  },
  zoomOption("Zoom if the window is not zoomed, or keep it zoomed"),
  {
    name: "-B",
    description: "Set the pane border lines for floating panes",
    args: {
      name: "border-lines",
      suggestions: paneBorderLines,
    },
  },
  startDirectoryOption("Specify a start directory for the new pane"),
  environmentOption,
  formatOption,
  {
    name: "-l",
    description:
      "The size of the new pane in lines or columns, or a percentage with %",
    args: {
      name: "size",
    },
  },
  {
    name: "-m",
    description: "Like -k but also set the remain-on-exit-format for this pane",
    args: {
      name: "message",
    },
  },
  {
    name: "-p",
    description: "The size of the new pane as a percentage",
    args: {
      name: "percentage",
    },
  },
  {
    name: "-R",
    description: "The border style when the pane is inactive",
    args: {
      name: "inactive-border-style",
    },
  },
  {
    name: "-s",
    description: "The style for the pane content",
    args: {
      name: "style",
    },
  },
  {
    name: "-S",
    description: "The border style when the pane is active",
    args: {
      name: "active-border-style",
    },
  },
  {
    name: "-T",
    description: "Set the pane title",
    args: {
      name: "title",
    },
  },
  targetOption("pane"),
];

const paneCommandArg: Fig.Arg = {
  name: "shell-command",
  description: "A shell command to run in the pane",
  isOptional: true,
  isVariadic: true,
};

const positionOptions = (
  description: (axis: string) => string
): Fig.Option[] => [
  {
    name: "-X",
    description: description("x"),
    args: {
      name: "x-position",
    },
  },
  {
    name: "-Y",
    description: description("y"),
    args: {
      name: "y-position",
    },
  },
];

const mouseDragOption = (description: string): Fig.Option => ({
  name: "-M",
  description,
});

const optionScopeOptions: Fig.Option[] = [
  {
    name: "-g",
    description: "Use the global session or window options",
  },
  {
    name: "-p",
    description: "Use pane options",
  },
  {
    name: "-s",
    description: "Use server options",
  },
  {
    name: "-w",
    description: "Use window options",
  },
];

const completionSpec: Fig.Spec = {
  name: "tmux",
  description: "A terminal multiplexer",
  options: [
    {
      name: "-2",
      description: "Force tmux to assume the terminal supports 256 colours",
    },
    {
      name: "-C",
      description: "Start in control mode (given twice, -CC, disables echo)",
      isRepeatable: 2,
    },
    {
      name: "-c",
      description: "Execute shell-command using the default shell",
      args: {
        name: "shell-command",
      },
    },
    {
      name: "-D",
      description: "Do not start the tmux server as a daemon",
    },
    {
      name: "-f",
      description: "Specify an alternative configuration file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "-h",
      description: "Print usage information and exit",
    },
    {
      name: "-L",
      description: "Specify the name of the server socket",
      args: {
        name: "socket-name",
      },
    },
    {
      name: "-l",
      description: "Behave as a login shell (currently has no effect)",
    },
    {
      name: "-N",
      description: "Do not start the server even if the command would",
    },
    {
      name: "-S",
      description: "Specify a full alternative path to the server socket",
      args: {
        name: "socket-path",
        template: "filepaths",
      },
    },
    {
      name: "-T",
      description: "Set terminal features for the client",
      args: {
        name: "features",
        description: "Comma-separated list of terminal features",
        suggestions: terminalFeatures,
      },
    },
    {
      name: "-u",
      description: "Write UTF-8 output to the terminal",
    },
    {
      name: "-V",
      description: "Report the tmux version",
    },
    {
      name: "-v",
      description: "Request verbose logging (twice also logs terminal output)",
      isRepeatable: 2,
    },
  ],
  subcommands: [
    {
      name: ["a", "at", "attach", "attach-session"],
      description: "Attach to a session",
      options: [
        {
          name: "-d",
          description: "Detach all other clients from the session",
        },
        {
          name: "-E",
          description: "Don't use update-environment option",
        },
        {
          name: "-r",
          description: "Read-only, an alias for -f read-only,ignore-size",
        },
        {
          name: "-x",
          description:
            "Send SIGHUP to the parent process and detach the client",
        },
        startDirectoryOption("Set the session's working directory"),
        flagsOption,
        targetOption("session", "Attach to a session with the given name"),
      ],
    },
    {
      name: ["bind", "bind-key"],
      description: "Bind a key to a command",
      args: [
        {
          name: "key",
          description: "The key to bind",
        },
        {
          name: "command",
          description: "The command to bind to the key",
          isOptional: true,
        },
        {
          name: "arguments",
          description: "Arguments for the command",
          isVariadic: true,
          isOptional: true,
        },
      ],
      options: [
        {
          name: "-n",
          description: "Alias for -T root",
        },
        {
          name: "-r",
          description: "Indicate that this key may repeat",
        },
        {
          name: "-N",
          description: "Attach a note to the key",
          args: {
            name: "note",
          },
        },
        keyTableArg("The key table to bind the key in"),
      ],
    },
    {
      name: ["breakp", "break-pane"],
      description: "Break a pane from an existing window into a new window",
      options: [
        {
          name: "-a",
          description: "Move the window to the next index after",
        },
        {
          name: "-b",
          description: "Move the window to the next index before",
        },
        {
          name: "-d",
          description: "The new window does not become the current window",
        },
        printOption("Print information about the new window"),
        {
          name: "-W",
          description:
            "Lift the pane out of the tiled layout and make it floating",
        },
        formatOption,
        {
          name: "-n",
          description: "The name of the new window",
          args: {
            name: "window-name",
          },
        },
        sourceOption("pane"),
        targetOption("window", "The destination window", "dst-window"),
        {
          name: "-x",
          description: "The width of the floating pane (with -W)",
          args: {
            name: "width",
          },
        },
        {
          name: "-y",
          description: "The height of the floating pane (with -W)",
          args: {
            name: "height",
          },
        },
        ...positionOptions(
          (axis) => `The ${axis} position of the floating pane (with -W)`
        ),
      ],
    },
    {
      name: ["capturep", "capture-pane"],
      description: "Capture the contents of a pane",
      options: [
        {
          name: "-a",
          description:
            "Use the alternate screen (the history is not accessible)",
        },
        {
          name: "-C",
          description: "Escape non-printable characters as octal \\xxx",
        },
        {
          name: "-e",
          description:
            "Include escape sequences for text and background attributes",
        },
        {
          name: "-F",
          description: "Include the flags of each line",
        },
        {
          name: "-H",
          description: "Capture only the hyperlinks in the specified lines",
        },
        {
          name: "-I",
          description:
            "Include the time each line entered the history, or zero if not available",
        },
        {
          name: "-J",
          description: "Preserve trailing spaces and join any wrapped lines",
        },
        {
          name: "-L",
          description: "Include the line number at the start of each line",
        },
        {
          name: "-M",
          description: "Use the screen of the mode if the pane is in a mode",
        },
        {
          name: "-N",
          description: "Preserve trailing spaces at each line's end",
        },
        {
          name: "-p",
          description: "Redirect output to stdout",
        },
        {
          name: "-P",
          description:
            "Capture only output that is the beginning of an as-yet incomplete escape sequence",
        },
        {
          name: "-q",
          description: "Do not throw an error if no alternate screen is found",
        },
        {
          name: "-R",
          description: "Dump the internal grid data for diagnostics",
        },
        {
          name: "-T",
          description:
            "Ignore trailing positions that do not contain a character",
        },
        bufferOption("The buffer to capture into"),
        {
          name: "-E",
          description: "Ending line number",
          args: {
            name: "end-line",
          },
        },
        {
          name: "-S",
          description: "Starting line number",
          args: {
            name: "start-line",
          },
        },
        targetOption("pane"),
      ],
    },
    {
      name: "choose-buffer",
      description: "Put a pane into buffer mode",
      args: chooseTreeTemplate("paste-buffer -p -b '%%'"),
      options: chooseCommonOptions(bufferSorts),
    },
    {
      name: "choose-client",
      description: "Put a pane into client mode",
      args: chooseTreeTemplate("detach-client -t '%%'"),
      options: [
        hideOption,
        {
          name: "-i",
          description:
            "Start showing client information instead of the preview",
        },
        ...chooseCommonOptions(clientSorts),
      ],
    },
    {
      name: "choose-session",
      description:
        "Put a pane into tree mode with only sessions (default alias)",
      args: chooseTreeTemplate("switch-client -t '%%'"),
      options: chooseTreeOptions,
    },
    {
      name: "choose-tree",
      description: "Put a pane into tree mode",
      args: chooseTreeTemplate("switch-client -t '%%'"),
      options: [
        ...chooseTreeOptions,
        {
          name: "-s",
          description: "Start with sessions collapsed",
        },
        {
          name: "-w",
          description: "Start with windows collapsed",
        },
      ],
    },
    {
      name: "choose-window",
      description:
        "Put a pane into tree mode with windows collapsed (default alias)",
      args: chooseTreeTemplate("switch-client -t '%%'"),
      options: chooseTreeOptions,
    },
    {
      name: ["clearhist", "clear-history"],
      description: "Remove and clear history for a pane",
      options: [
        {
          name: "-H",
          description: "Also remove all hyperlinks",
        },
        targetOption("pane"),
      ],
    },
    {
      name: ["clearphist", "clear-prompt-history"],
      description: "Clear status prompt history",
      options: [
        {
          name: "-T",
          description:
            "The prompt type to clear history for (all types if omitted)",
          args: promptTypeArg,
        },
      ],
    },
    {
      name: "clock-mode",
      description: "Enter clock mode",
      options: [targetOption("pane")],
    },
    {
      name: "command-prompt",
      description: "Open the tmux command prompt in a client",
      args: {
        name: "template",
        description: "If specified, used as the command",
        isOptional: true,
      },
      options: [
        {
          name: "-1",
          description: "The prompt only accepts one key press",
        },
        {
          name: "-b",
          description:
            "Show the prompt in the background, the invoking client does not exit until it is dismissed",
        },
        {
          name: "-C",
          description: "Continue to update panes while the prompt is displayed",
        },
        {
          name: "-e",
          description: "Make BSpace cancel an empty prompt",
        },
        {
          name: "-F",
          description: "Expand template as a format",
        },
        {
          name: "-i",
          description:
            "Execute the command every time the prompt input changes",
        },
        {
          name: "-k",
          description: "Like -1 but the key press is translated to a key name",
        },
        {
          name: "-l",
          description:
            "Do not split inputs and prompts at commas and treat them literally",
        },
        {
          name: "-N",
          description: "The prompt only accepts numeric key presses",
        },
        {
          name: "-P",
          description:
            "Open the prompt inside a pane instead of on the status line",
        },
        {
          name: "-I",
          description:
            "Comma-separated list of the initial text for each prompt",
          args: {
            name: "inputs",
          },
        },
        {
          name: "-p",
          description:
            "Comma-separated list of prompts which are displayed in order",
          args: {
            name: "prompts",
          },
        },
        targetOption("client"),
        {
          name: "-T",
          description: "The prompt type, which affects the completions offered",
          args: promptTypeArg,
        },
      ],
    },
    {
      name: ["confirm", "confirm-before"],
      description: "Run a command but ask for confirmation before",
      args: {
        name: "command",
        description: "The command to run",
      },
      options: [
        {
          name: "-b",
          description:
            "Show the prompt in the background, the invoking client does not exit until it is dismissed",
        },
        {
          name: "-y",
          description: "Make the default answer (Enter alone) run the command",
        },
        {
          name: "-c",
          description: "Change the confirmation key",
          args: {
            name: "confirm-key",
            default: "y",
          },
        },
        {
          name: "-p",
          description: "A prompt to display for confirmation",
          args: {
            name: "prompt",
          },
        },
        targetOption("client"),
      ],
    },
    {
      name: "copy-mode",
      description: "Enter copy mode",
      options: [
        {
          name: "-d",
          description: "Scroll one page down",
        },
        {
          name: "-e",
          description: "Scrolling to the bottom should exit copy mode",
        },
        {
          name: "-H",
          description: "Hide the position indicator",
        },
        {
          name: "-k",
          description: "Kill the pane when the mode is exited",
        },
        mouseDragOption("Begin a mouse drag"),
        {
          name: "-q",
          description: "Cancel copy mode and any other modes",
        },
        {
          name: "-S",
          description: "Enter copy mode and scroll when bound to a mouse drag",
        },
        {
          name: "-u",
          description: "Scroll one page up",
        },
        sourceOption("pane", "Copy from this pane instead of the target pane"),
        targetOption("pane"),
      ],
    },
    {
      name: "customize-mode",
      description: "Put a pane into customize mode",
      options: [
        {
          name: "-k",
          description: "Kill the pane when the mode is exited",
        },
        {
          name: "-N",
          description: "Start without the option information",
        },
        zoomOption(),
        formatOption,
        filterOption("Specify an initial filter"),
        targetOption("pane"),
      ],
    },
    {
      name: ["deleteb", "delete-buffer"],
      description: "Delete a paste buffer",
      options: [bufferOption()],
    },
    {
      name: ["detach", "detach-client"],
      description: "Detach a client from the server",
      options: [
        {
          name: "-a",
          description: "Detach all but the client given with -t",
        },
        {
          name: "-P",
          description: "Send SIGHUP to the parent process of the client",
        },
        {
          name: "-E",
          description: "Run the given shell-command to replace the client",
          args: {
            name: "shell-command",
            description: "The shell-command to run",
          },
        },
        {
          name: "-s",
          description: "Detach all clients attached to the specified session",
          args: targetArg("session"),
        },
        targetOption("client"),
      ],
    },
    {
      name: ["menu", "display-menu"],
      description: "Display a menu on a client",
      args: [
        {
          name: "name",
          description: "The menu item name (a leading - disables the item)",
        },
        {
          name: "key",
          description: "The key shortcut of the item",
        },
        {
          name: "command",
          description: "The command to run when the item is chosen",
          isVariadic: true,
        },
      ],
      options: [
        {
          name: "-M",
          description: "The menu handles mouse events",
        },
        {
          name: "-O",
          description:
            "Do not close the menu when the mouse button is released without an item selected",
        },
        {
          name: "-b",
          description: "The type of characters used for drawing menu borders",
          args: {
            name: "border-lines",
            suggestions: popupBorderLines,
          },
        },
        {
          name: "-c",
          description: "The target client",
          args: targetArg("client"),
        },
        {
          name: "-C",
          description: "The menu item selected by default",
          args: {
            name: "starting-choice",
          },
        },
        {
          name: "-H",
          description: "The style for the selected menu item",
          args: {
            name: "selected-style",
          },
        },
        {
          name: "-s",
          description: "The style for the menu",
          args: {
            name: "style",
          },
        },
        {
          name: "-S",
          description: "The style for the menu border",
          args: {
            name: "border-style",
          },
        },
        targetOption("pane", "The target pane for commands run from the menu"),
        {
          name: "-T",
          description: "A format for the menu title",
          args: {
            name: "title",
          },
        },
        menuPositionOption("-x", ["C", "R", "P", "M", "L", "W"]),
        menuPositionOption("-y", ["C", "P", "M", "L", "W", "S"]),
      ],
    },
    {
      name: ["display", "display-message"],
      description: "Display a message",
      args: {
        name: "message",
        description: "The message to display",
        isOptional: true,
      },
      options: [
        {
          name: "-a",
          description: "List the format variables and their values",
        },
        {
          name: "-C",
          description: "Continue to update the pane while the message is shown",
        },
        {
          name: "-I",
          description:
            "Forward any input read from stdin to the empty pane target-pane",
        },
        {
          name: "-j",
          description: "Parse the message as JSON and print it",
        },
        {
          name: "-l",
          description: "Print the message unchanged",
        },
        {
          name: "-N",
          description:
            "Ignore key presses and close only after the delay expires",
        },
        {
          name: "-p",
          description: "Print output to stdout",
        },
        {
          name: "-v",
          description: "Print verbose logging as the format is parsed",
        },
        {
          name: "-c",
          description: "The target client",
          args: targetArg("client"),
        },
        {
          name: "-d",
          description: "How long to show the message in milliseconds",
          args: {
            name: "delay",
          },
        },
        {
          name: "-F",
          description: "A format to display instead of the message argument",
          args: {
            name: "format",
          },
        },
        targetOption("pane"),
      ],
    },
    {
      name: ["displayp", "display-panes"],
      description: "Display an indicator for each visible pane",
      args: chooseTreeTemplate("select-pane -t '%%'"),
      options: [
        {
          name: "-k",
          description: "Kill the pane when the mode is exited",
        },
        {
          name: "-N",
          description: "Do not close the indicator when a key is pressed",
        },
        zoomOption("Start the mode unzoomed"),
        {
          name: "-d",
          description: "Specify the duration",
          args: {
            name: "duration",
            description:
              "The duration to close the indicator after in milliseconds (zero stays until a key is pressed)",
          },
        },
        {
          name: "-s",
          description:
            "Display the panes in this window instead of the window containing the target pane",
          args: targetArg("window", "source-window"),
        },
        targetOption("pane"),
      ],
    },
    {
      name: ["popup", "display-popup"],
      description: "Display a popup running a shell command on a client",
      args: paneCommandArg,
      options: [
        {
          name: "-B",
          description: "Do not surround the popup by a border",
        },
        {
          name: "-C",
          description: "Close any popup on the client",
        },
        {
          name: "-E",
          description:
            "Close the popup when the command exits (twice: only if it exited with success)",
          isRepeatable: 2,
        },
        {
          name: "-k",
          description: "Allow any key to dismiss the popup",
        },
        {
          name: "-N",
          description: "Disable any previously specified -E, -EE or -k option",
        },
        {
          name: "-b",
          description: "The type of characters used for drawing popup borders",
          args: {
            name: "border-lines",
            suggestions: popupBorderLines,
          },
        },
        {
          name: "-c",
          description: "The target client",
          args: targetArg("client"),
        },
        startDirectoryOption("Specify a start directory for the popup", "-d"),
        environmentOption,
        {
          name: "-h",
          description: "The height (a number or a percentage)",
          args: {
            name: "height",
          },
        },
        {
          name: "-s",
          description: "The style for the popup",
          args: {
            name: "style",
          },
        },
        {
          name: "-S",
          description: "The style for the popup border",
          args: {
            name: "border-style",
          },
        },
        targetOption("pane"),
        {
          name: "-T",
          description: "A format for the popup title",
          args: {
            name: "title",
          },
        },
        {
          name: "-w",
          description: "The width (a number or a percentage)",
          args: {
            name: "width",
          },
        },
        menuPositionOption("-x", ["C", "R", "P", "M", "L", "W"]),
        menuPositionOption("-y", ["C", "P", "M", "L", "W", "S"]),
      ],
    },
    {
      name: ["findw", "find-window"],
      description: "Search for a pattern in windows",
      args: {
        name: "match-string",
        description: "A glob pattern (or a regular expression with -r)",
      },
      options: [
        {
          name: "-C",
          description: "Match only visible window contents",
        },
        {
          name: "-i",
          description: "Make the search ignore case",
        },
        {
          name: "-N",
          description: "Match only the window name",
        },
        {
          name: "-r",
          description: "Search for a regular expression",
        },
        {
          name: "-T",
          description: "Match only the window title",
        },
        zoomOption(),
        targetOption("pane"),
      ],
    },
    {
      name: ["has", "has-session"],
      description: "Check and report if a session exists on the server",
      options: [targetOption("session", "Specify the target session")],
    },
    {
      name: ["if", "if-shell"],
      description: "Execute a tmux command if a shell command succeeds",
      args: [
        {
          name: "shell-command",
          description: "The shell command to test",
        },
        {
          name: "command",
          description: "The tmux command to run on success",
        },
        {
          name: "else-command",
          description: "The tmux command to run on failure",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "-b",
          description: "Run the shell command in the background",
        },
        {
          name: "-F",
          description:
            "Do not run the shell command; succeed if it is neither empty nor zero after format expansion",
        },
        targetOption("pane"),
      ],
    },
    {
      name: ["info", "server-info"],
      description:
        "Show server messages and debugging information (default alias for show-messages -JT)",
    },
    {
      name: ["joinp", "join-pane"],
      description: "Split a pane and move an existing one into the new space",
      options: [
        {
          name: "-b",
          description: "Join src-pane to the left of or above dst-pane",
        },
        {
          name: "-d",
          description: "Do not make the joined pane the current pane",
        },
        {
          name: "-f",
          description:
            "Create a pane spanning the full window height (with -h) or width (with -v)",
        },
        {
          name: "-h",
          description: "Split horizontally",
        },
        {
          name: "-v",
          description: "Split vertically (the default)",
        },
        {
          name: "-l",
          description: "Set the size of the new space",
          args: {
            name: "size",
            description: "The size in lines or columns, or a percentage with %",
          },
        },
        sourceOption("pane"),
        targetOption("pane", "The destination pane", "dst-pane"),
      ],
    },
    {
      name: ["killp", "kill-pane"],
      description: "Destroy a given pane",
      options: [
        {
          name: "-a",
          description: "Kill all panes in the window except the target pane",
        },
        filterOption("With -a, only kill panes for which the filter is true"),
        targetOption("pane"),
      ],
    },
    {
      name: "kill-server",
      description: "Kill clients, sessions and the server",
    },
    {
      name: ["kill-ses", "kill-session"],
      description: "Kill/delete sessions",
      options: [
        {
          name: "-a",
          description: "Kill all sessions but the target session",
        },
        {
          name: "-C",
          description:
            "Clear alerts (bell, activity, or silence) in all windows linked to the session",
        },
        {
          name: "-g",
          description:
            "Kill all sessions in the group if the session is in a session group",
        },
        filterOption(
          "With -a, only kill sessions for which the filter is true"
        ),
        targetOption("session", "Kill/delete session with the given name"),
      ],
    },
    {
      name: ["killw", "kill-window"],
      description: "Destroy a given window",
      options: [
        {
          name: "-a",
          description:
            "Kill all windows in the session except the target window",
        },
        filterOption("With -a, only kill windows for which the filter is true"),
        targetOption("window"),
      ],
    },
    {
      name: ["lastp", "last-pane"],
      description: "Select the previously selected pane",
      options: [
        {
          name: "-d",
          description: "Disable input to the pane",
        },
        {
          name: "-e",
          description: "Enable input to the pane",
        },
        keepZoomOption,
        targetOption("window"),
      ],
    },
    {
      name: ["last", "last-window"],
      description: "Select the previously selected window",
      options: [
        targetOption(
          "session",
          "Select the previously selected window of the target session"
        ),
      ],
    },
    {
      name: ["linkw", "link-window"],
      description: "Link a window to another",
      options: [
        {
          name: "-a",
          description: "Move the window to the next index after dst-window",
        },
        {
          name: "-b",
          description: "Move the window to the next index before dst-window",
        },
        {
          name: "-d",
          description: "Do not select the newly linked window",
        },
        {
          name: "-k",
          description: "Kill dst-window if it exists",
        },
        sourceOption("window"),
        targetOption("window", "The destination window", "dst-window"),
      ],
    },
    {
      name: ["lsb", "list-buffers"],
      description: "List paste buffers",
      options: [
        reverseOption(),
        formatOption,
        filterOption(),
        sortOption(bufferSorts),
      ],
    },
    {
      name: ["lsc", "list-clients"],
      description: "List clients attached to a server",
      options: [
        reverseOption(),
        formatOption,
        filterOption(),
        sortOption(clientSorts),
        targetOption("session", "List only clients connected to that session"),
      ],
    },
    {
      name: ["lscm", "list-commands"],
      description: "List supported sub-commands",
      args: {
        name: "command",
        description: "The command to list syntax of",
        isOptional: true,
      },
      options: [formatOption],
    },
    {
      name: ["lsk", "list-keys"],
      description: "List key bindings",
      args: {
        name: "key",
        description: "Only list this key",
        isOptional: true,
      },
      options: [
        {
          name: "-1",
          description: "List only the first matching key",
        },
        {
          name: "-a",
          description:
            "With -N, list the command of keys that do not have a note",
        },
        {
          name: "-N",
          description:
            "List only keys with attached notes, showing the key and the note",
        },
        reverseOption(),
        formatOption,
        sortOption(keySorts),
        {
          name: "-P",
          description: "A prefix to print before each key",
          args: {
            name: "prefix-string",
          },
        },
        keyTableArg("The key table to list from"),
      ],
    },
    {
      name: ["lsp", "list-panes"],
      description: "List panes of a window",
      options: [
        {
          name: "-a",
          description: "Ignore the target and list all panes on the server",
        },
        reverseOption(),
        {
          name: "-s",
          description: "The target is a session instead of a window",
        },
        formatOption,
        filterOption(),
        sortOption(paneSorts),
        targetOption("window", "The target window (or session with -s)"),
      ],
    },
    {
      name: ["ls", "list-sessions"],
      description: "List sessions managed by a server",
      options: [
        reverseOption(),
        formatOption,
        filterOption(),
        sortOption(sessionSorts),
      ],
    },
    {
      name: ["lsw", "list-windows"],
      description: "List windows of a session",
      options: [
        {
          name: "-a",
          description: "Ignore the target session and list all windows",
        },
        reverseOption(),
        formatOption,
        filterOption(),
        sortOption(windowSorts),
        targetOption("session"),
      ],
    },
    {
      name: ["loadb", "load-buffer"],
      description: "Load a file into a paste buffer",
      args: {
        name: "path",
        description: "Load from this path (- reads from stdin)",
        template: "filepaths",
      },
      options: [
        {
          name: "-w",
          description: "Also send the buffer to the clipboard of the client",
        },
        bufferOption(),
        targetOption("client"),
      ],
    },
    {
      name: ["lockc", "lock-client"],
      description: "Lock a client",
      options: [targetOption("client")],
    },
    {
      name: ["lock", "lock-server"],
      description: "Lock all clients attached to the server",
    },
    {
      name: ["locks", "lock-session"],
      description: "Lock all clients attached to a session",
      options: [
        targetOption("session", "Lock all clients attached to target-session"),
      ],
    },
    {
      name: ["movep", "move-pane"],
      description:
        "Move a pane like join-pane, or move a floating pane when given a position",
      options: [
        {
          name: "-b",
          description: "Join src-pane to the left of or above dst-pane",
        },
        {
          name: "-d",
          description: "Do not make the joined pane the current pane",
        },
        {
          name: "-f",
          description:
            "Create a pane spanning the full window height (with -h) or width (with -v)",
        },
        {
          name: "-h",
          description: "Split horizontally",
        },
        mouseDragOption("Begin a mouse drag"),
        {
          name: "-v",
          description: "Split vertically (the default)",
        },
        {
          name: "-D",
          description: "Move the floating pane down",
          args: {
            name: "lines",
            isOptional: true,
          },
        },
        {
          name: "-L",
          description: "Move the floating pane left",
          args: {
            name: "columns",
            isOptional: true,
          },
        },
        {
          name: "-R",
          description: "Move the floating pane right",
          args: {
            name: "columns",
            isOptional: true,
          },
        },
        {
          name: "-U",
          description: "Move the floating pane up",
          args: {
            name: "lines",
            isOptional: true,
          },
        },
        {
          name: "-l",
          description: "Set the size of the new space",
          args: {
            name: "size",
            description: "The size in lines or columns, or a percentage with %",
          },
        },
        {
          name: "-P",
          description: "Move the floating pane to a position",
          args: {
            name: "position",
            suggestions: floatingPositions,
          },
        },
        sourceOption("pane"),
        targetOption("pane", "The destination pane", "dst-pane"),
        ...positionOptions(
          (axis) => `Move the floating pane to an absolute ${axis} position`
        ),
        {
          name: "-z",
          description:
            "Move the floating pane to the given z-index (zero is the front)",
          args: {
            name: "z-index",
          },
        },
      ],
    },
    {
      name: ["movew", "move-window"],
      description: "Move a window to another",
      options: [
        {
          name: "-a",
          description: "Move the window to the next index after dst-window",
        },
        {
          name: "-b",
          description: "Move the window to the next index before dst-window",
        },
        {
          name: "-d",
          description: "Do not select the newly moved window",
        },
        {
          name: "-k",
          description: "Kill dst-window if it exists",
        },
        {
          name: "-r",
          description:
            "Renumber all windows in the session in sequential order",
        },
        sourceOption("window"),
        targetOption("window", "The destination window", "dst-window"),
      ],
    },
    {
      name: ["newp", "new-pane"],
      description: "Create a new floating pane",
      args: paneCommandArg,
      options: [
        {
          name: "-A",
          description:
            "Create a floating pane which remains visible above a zoomed pane",
        },
        {
          name: "-C",
          description:
            "Close the modal pane when the mouse is clicked outside it",
        },
        {
          name: "-D",
          description: "Close the modal pane when Escape or C-c is pressed",
        },
        {
          name: "-K",
          description:
            "Pass all keys, including the prefix key, to the modal pane",
        },
        {
          name: "-L",
          description: "Behave like split-window",
        },
        mouseDragOption(
          "Resize the new floating pane to follow a mouse drag (only valid if bound to a mouse key binding)"
        ),
        {
          name: "-O",
          description: "Create a modal pane",
        },
        ...paneCreationOptions(),
        {
          name: "-x",
          description:
            "The width of the floating pane in columns, or a percentage with %",
          args: {
            name: "width",
          },
        },
        {
          name: "-y",
          description:
            "The height of the floating pane in lines, or a percentage with %",
          args: {
            name: "height",
          },
        },
        ...positionOptions(
          (axis) =>
            `The ${axis} position of the upper-left corner of the floating pane`
        ),
      ],
    },
    {
      name: ["new", "new-session"],
      description: "Create a new session",
      args: {
        name: "shell-command",
        description: "A shell command to run when creating the session",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "-A",
          description:
            "Behave like attach-session if session-name already exists",
        },
        {
          name: "-d",
          description:
            "Do not attach the new session to the current terminal (use the initial size from default-size)",
        },
        {
          name: "-D",
          description: "Behave like -d if -A is set",
        },
        {
          name: "-E",
          description: "Do not use the update-environment option",
        },
        printOption("Print information about the new session"),
        {
          name: "-X",
          description: "Behave like -x if -A is set",
        },
        startDirectoryOption("Specify a start directory for the session"),
        environmentOption,
        flagsOption,
        formatOption,
        {
          name: "-n",
          description: "The name of the initial window",
          args: {
            name: "window-name",
          },
        },
        {
          name: "-s",
          description: "Start a new session with the given name",
          args: {
            name: "session-name",
          },
        },
        {
          name: "-t",
          description: "The name of the session group",
          args: {
            name: "group-name",
          },
        },
        {
          name: "-x",
          description: "The width of the session",
          args: {
            name: "width",
          },
        },
        {
          name: "-y",
          description: "The height of the session",
          args: {
            name: "height",
          },
        },
      ],
    },
    {
      name: ["neww", "new-window"],
      description: "Create a new window",
      args: {
        name: "shell-command",
        description: "A shell command to run when creating the window",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "-a",
          description:
            "Insert the new window at the next index after target-window",
        },
        {
          name: "-b",
          description:
            "Insert the new window at the next index before target-window",
        },
        {
          name: "-d",
          description:
            "The session does not make the new window the current window",
        },
        {
          name: "-E",
          description: "Create the initial pane without a running command",
        },
        {
          name: "-k",
          description: "Kill the target window if it exists",
        },
        printOption("Print information about the new window"),
        {
          name: "-S",
          description:
            "Select an existing window instead of creating one if it exists",
        },
        startDirectoryOption("Specify a start directory for the window"),
        environmentOption,
        formatOption,
        {
          name: "-n",
          description: "The name of the new window",
          args: {
            name: "window-name",
          },
        },
        targetOption("window"),
      ],
    },
    {
      name: ["nextl", "next-layout"],
      description: "Move a window to the next layout",
      options: [targetOption("window")],
    },
    {
      name: ["next", "next-window"],
      description: "Move to the next window in a session",
      options: [
        {
          name: "-a",
          description: "Move to the next window with an alert",
        },
        targetOption(
          "session",
          "Move to the next window of the target session"
        ),
      ],
    },
    {
      name: ["pasteb", "paste-buffer"],
      description: "Insert a paste buffer into a pane",
      options: [
        {
          name: "-d",
          description: "Also delete the paste buffer",
        },
        {
          name: "-p",
          description:
            "Insert paste bracket control codes if the application has requested bracketed paste mode",
        },
        {
          name: "-r",
          description: "Do not replace linefeeds (use LF as the separator)",
        },
        {
          name: "-S",
          description: "Do not sanitize control characters with vis(3)",
        },
        bufferOption(),
        {
          name: "-s",
          description:
            "The separator that replaces linefeeds (carriage return by default)",
          args: {
            name: "separator",
          },
        },
        targetOption("pane"),
      ],
    },
    {
      name: ["pipep", "pipe-pane"],
      description: "Pipe output from a pane to a shell command",
      args: {
        name: "shell-command",
        description:
          "The shell command to run (omit to close the current pipe)",
        isOptional: true,
      },
      options: [
        {
          name: "-I",
          description: "Connect stdout of the command to the pane",
        },
        {
          name: "-O",
          description: "Connect stdin of the command to the pane (the default)",
        },
        {
          name: "-o",
          description: "Only open a new pipe if no previous pipe exists",
        },
        targetOption("pane"),
      ],
    },
    {
      name: ["prevl", "previous-layout"],
      description: "Move a window to the previous layout",
      options: [targetOption("window")],
    },
    {
      name: ["prev", "previous-window"],
      description: "Move to the previous window in a session",
      options: [
        {
          name: "-a",
          description: "Move to the previous window with an alert",
        },
        targetOption(
          "session",
          "Move to the previous window of the target session"
        ),
      ],
    },
    {
      name: ["refresh", "refresh-client"],
      description: "Refresh a client",
      args: {
        name: "adjustment",
        description: "The number of rows or columns to move (1 if omitted)",
        isOptional: true,
      },
      options: [
        {
          name: "-c",
          description: "Return to tracking the cursor automatically",
        },
        {
          name: "-D",
          description: "Move the visible part of the window down",
        },
        {
          name: "-l",
          description:
            "Request the clipboard from the client and store it in a new paste buffer",
        },
        {
          name: "-L",
          description: "Move the visible part of the window left",
        },
        {
          name: "-R",
          description: "Move the visible part of the window right",
        },
        {
          name: "-S",
          description: "Only update the client's status line",
        },
        {
          name: "-U",
          description: "Move the visible part of the window up",
        },
        {
          name: "-A",
          description:
            "Let a control mode client trigger an action on a pane (on, off, continue or pause)",
          isRepeatable: true,
          args: {
            name: "pane:state",
          },
        },
        {
          name: "-B",
          description:
            "Set a subscription to a format for a control mode client",
          isRepeatable: true,
          args: {
            name: "name:what:format",
          },
        },
        {
          name: "-C",
          description:
            "Set the width and height of a control mode client or of a window",
          args: {
            name: "size",
            description: "Either widthxheight or window-id:widthxheight",
          },
        },
        flagsOption,
        {
          name: "-r",
          description:
            "Let a control mode client provide information about a pane via a report",
          isRepeatable: true,
          args: {
            name: "pane:report",
          },
        },
        targetOption("client"),
      ],
    },
    {
      name: ["rename", "rename-session"],
      description: "Rename a session",
      args: {
        name: "new-name",
        description: "The new name of the session",
      },
      options: [targetOption("session", "Rename the target session")],
    },
    {
      name: ["renamew", "rename-window"],
      description: "Rename a window",
      args: {
        name: "new-name",
        description: "The new name of the window",
      },
      options: [targetOption("window")],
    },
    {
      name: ["resizep", "resize-pane"],
      description: "Resize a pane",
      args: {
        name: "adjustment",
        description: "Adjustment used with -U, -D, -L and -R",
        isOptional: true,
      },
      options: [
        mouseDragOption("Begin mouse resizing"),
        {
          name: "-T",
          description:
            "Trim all lines below the cursor position and move lines out of the history to replace them",
        },
        zoomOption("Toggle the pane between zoomed and unzoomed"),
        {
          name: "-D",
          description: "Resize down by adjustment",
          args: {
            name: "lines",
            isOptional: true,
          },
        },
        {
          name: "-L",
          description: "Resize left by adjustment",
          args: {
            name: "columns",
            isOptional: true,
          },
        },
        {
          name: "-R",
          description: "Resize right by adjustment",
          args: {
            name: "columns",
            isOptional: true,
          },
        },
        {
          name: "-U",
          description: "Resize up by adjustment",
          args: {
            name: "lines",
            isOptional: true,
          },
        },
        {
          name: "-x",
          description: "Resize to an absolute width",
          args: {
            name: "width",
            description: "Columns, or a percentage of the window size with %",
          },
        },
        {
          name: "-y",
          description: "Resize to an absolute height",
          args: {
            name: "height",
            description: "Lines, or a percentage of the window size with %",
          },
        },
        targetOption("pane"),
      ],
    },
    {
      name: ["resizew", "resize-window"],
      description: "Resize a window",
      args: {
        name: "adjustment",
        description: "Adjustment used with -U, -D, -L and -R",
        isOptional: true,
      },
      options: [
        {
          name: "-a",
          description:
            "Set the size of the smallest session containing the window",
        },
        {
          name: "-A",
          description:
            "Set the size of the largest session containing the window",
        },
        {
          name: "-D",
          description: "Resize down by adjustment",
        },
        {
          name: "-L",
          description: "Resize left by adjustment",
        },
        {
          name: "-R",
          description: "Resize right by adjustment",
        },
        {
          name: "-U",
          description: "Resize up by adjustment",
        },
        {
          name: "-x",
          description: "Resize to an absolute width",
          args: {
            name: "width",
          },
        },
        {
          name: "-y",
          description: "Resize to an absolute height",
          args: {
            name: "height",
          },
        },
        targetOption("window"),
      ],
    },
    {
      name: ["respawnp", "respawn-pane"],
      description: "Reactivate a pane in which the command has exited",
      args: paneCommandArg,
      options: [
        {
          name: "-E",
          description: "Leave the pane without a running command",
        },
        {
          name: "-k",
          description: "Kill any existing command in the pane",
        },
        startDirectoryOption("Specify a new working directory for the pane"),
        environmentOption,
        targetOption("pane"),
      ],
    },
    {
      name: ["respawnw", "respawn-window"],
      description: "Reactivate a window in which the command has exited",
      args: {
        name: "shell-command",
        description: "A shell command to run in the window",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "-E",
          description: "Leave the window with one pane and no running command",
        },
        {
          name: "-k",
          description: "Kill any existing command in the window",
        },
        startDirectoryOption("Specify a new working directory for the window"),
        environmentOption,
        targetOption("window"),
      ],
    },
    {
      name: ["rotatew", "rotate-window"],
      description: "Rotate positions of panes in a window",
      options: [
        {
          name: "-D",
          description: "Rotate downward (numerically higher)",
        },
        {
          name: "-U",
          description: "Rotate upward (numerically lower)",
        },
        keepZoomOption,
        targetOption("window"),
      ],
    },
    {
      name: ["run", "run-shell"],
      description: "Execute a command without creating a new window",
      args: {
        name: "shell-command",
        description: "The shell command (or tmux command with -C) to run",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "-b",
          description: "Run the command in the background",
        },
        {
          name: "-C",
          description: "Run a tmux command instead of a shell command",
        },
        {
          name: "-E",
          description: "Redirect the command's stderr to stdout",
        },
        startDirectoryOption("Set the working directory for the command"),
        {
          name: "-d",
          description: "Wait this many seconds before starting the command",
          args: {
            name: "delay",
          },
        },
        targetOption("pane", "The pane to show the output in"),
      ],
    },
    {
      name: ["saveb", "save-buffer"],
      description: "Save a paste buffer to a file",
      args: {
        name: "path",
        description: "Save to this path (- writes to stdout)",
        template: "filepaths",
      },
      options: [
        {
          name: "-a",
          description: "Append to the file instead of overwriting it",
        },
        bufferOption(),
      ],
    },
    {
      name: ["selectl", "select-layout"],
      description: "Choose a layout for a window",
      args: {
        name: "layout-name",
        description: "Use the last preset layout used if not specified",
        isOptional: true,
        suggestions: layouts,
      },
      options: [
        {
          name: "-E",
          description:
            "Spread the current pane and any panes next to it out evenly",
        },
        {
          name: "-n",
          description: "Equivalent to next-layout",
        },
        {
          name: "-o",
          description: "Apply the last set layout if possible",
        },
        {
          name: "-p",
          description: "Equivalent to previous-layout",
        },
        targetOption("pane"),
      ],
    },
    {
      name: ["selectp", "select-pane"],
      description: "Make a pane the active one in the window",
      options: [
        {
          name: "-D",
          description: "Use the pane below the target pane",
        },
        {
          name: "-d",
          description: "Disable input to the pane",
        },
        {
          name: "-e",
          description: "Enable input to the pane",
        },
        {
          name: "-L",
          description: "Use the pane to the left of the target pane",
        },
        {
          name: "-l",
          description: "Same as the last-pane command",
        },
        {
          name: "-M",
          description: "Clear the marked pane",
        },
        {
          name: "-m",
          description: "Set the marked pane",
        },
        {
          name: "-R",
          description: "Use the pane to the right of the target pane",
        },
        {
          name: "-U",
          description: "Use the pane above the target pane",
        },
        keepZoomOption,
        {
          name: "-T",
          description: "Set the pane title",
          args: {
            name: "title",
          },
        },
        {
          name: "-g",
          description:
            "Show the pane style (deprecated, use the window-style option)",
          deprecated: true,
        },
        {
          name: "-P",
          description:
            "Set the pane style (deprecated, use set-option -p window-style)",
          deprecated: true,
          args: {
            name: "style",
          },
        },
        targetOption("pane"),
      ],
    },
    {
      name: ["selectw", "select-window"],
      description: "Select a window",
      options: [
        {
          name: "-l",
          description: "Same as last-window",
        },
        {
          name: "-n",
          description: "Same as next-window",
        },
        {
          name: "-p",
          description: "Same as previous-window",
        },
        {
          name: "-T",
          description:
            "Same as last-window if the selected window is already the current window",
        },
        targetOption("window"),
      ],
    },
    {
      name: ["send", "send-keys"],
      description: "Send key(s) to a window",
      args: {
        name: "key",
        description: "The name of a key, or text to send as characters",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "-F",
          description: "Expand formats in arguments where appropriate",
        },
        {
          name: "-H",
          description:
            "Expect each key to be a hexadecimal number for an ASCII character",
        },
        {
          name: "-K",
          description:
            "Send keys to the client so they are looked up in its key table",
        },
        {
          name: "-l",
          description:
            "Disable key name lookup and send the keys as literal UTF-8 characters",
        },
        {
          name: "-M",
          description:
            "Pass through a mouse event (only valid if bound to a mouse key binding)",
        },
        {
          name: "-R",
          description: "Reset the terminal state",
        },
        {
          name: "-X",
          description: "Send a command into copy mode",
        },
        {
          name: "-c",
          description: "The target client",
          args: targetArg("client"),
        },
        {
          name: "-N",
          description: "Specify a repeat count",
          args: {
            name: "repeat-count",
          },
        },
        targetOption("pane"),
      ],
    },
    {
      name: "send-prefix",
      description: "Send the prefix key to a window",
      options: [
        {
          name: "-2",
          description: "Send the secondary prefix key instead",
        },
        targetOption("pane"),
      ],
    },
    {
      name: "server-access",
      description:
        "Change the access or read/write permission of a user or group",
      args: {
        name: "user-or-group",
        isOptional: true,
      },
      options: [
        {
          name: "-a",
          description: "Give access to the user or group",
        },
        {
          name: "-d",
          description:
            "Revoke access (and detach its clients) for the user or group",
        },
        {
          name: "-g",
          description: "Change a group rather than a user",
        },
        {
          name: "-l",
          description: "List current access permissions",
        },
        {
          name: "-r",
          description: "Make matching clients read-only",
        },
        {
          name: "-w",
          description: "Make matching clients writable",
        },
      ],
    },
    {
      name: ["setb", "set-buffer"],
      description: "Set content of a paste buffer",
      args: {
        name: "data",
        description: "The data to set in the buffer",
        isOptional: true,
      },
      options: [
        {
          name: "-a",
          description: "Append to the buffer instead of overwriting it",
        },
        {
          name: "-w",
          description: "Also send the buffer to the clipboard of the client",
        },
        bufferOption(),
        targetOption("client"),
        {
          name: "-n",
          description: "Rename the buffer",
          args: {
            name: "new-buffer-name",
          },
        },
      ],
    },
    {
      name: ["setenv", "set-environment"],
      description: "Set or unset an environment variable",
      args: [
        {
          name: "variable",
          description: "The name of the environment variable",
        },
        {
          name: "value",
          description: "The value of the environment variable",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "-F",
          description: "Expand value as a format",
        },
        {
          name: "-h",
          description: "Mark the variable as hidden",
        },
        {
          name: "-g",
          description: "Change the global environment",
        },
        {
          name: "-r",
          description:
            "Remove the variable from the environment before starting a new process",
        },
        {
          name: "-u",
          description: "Unset the variable",
        },
        targetOption("session"),
      ],
    },
    {
      name: "set-hook",
      description: "Set or unset a hook",
      args: [
        hookArg,
        {
          name: "command",
          description: "The command to run when the hook fires",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "-a",
          description: "Append to the existing hook array",
        },
        {
          name: "-E",
          description:
            "Fire the user event named hook-name (which must begin with @)",
        },
        {
          name: "-g",
          description: "Set a global hook",
        },
        {
          name: "-p",
          description: "Set a pane hook",
        },
        {
          name: "-R",
          description: "Run hook-name immediately",
        },
        {
          name: "-T",
          description: "Run the monitor hook only when its format is true",
        },
        {
          name: "-u",
          description: "Unset the hook (or the subscription named by -B)",
        },
        {
          name: "-w",
          description: "Set a window hook",
        },
        {
          name: "-B",
          description:
            "Add a monitor hook that checks a format every second, using the refresh-client -B syntax",
          args: {
            name: "name:what:format",
          },
        },
        targetOption("pane"),
      ],
    },
    {
      name: ["set", "set-option"],
      description: "Set a tmux option",
      args: [
        {
          name: "option",
          description: "The name of the option",
        },
        {
          name: "value",
          description: "The value of the option",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "-a",
          description:
            "Append the value to the existing setting (for string and style options)",
        },
        {
          name: "-F",
          description: "Expand formats in the option value",
        },
        {
          name: "-g",
          description: "Set the global session or window option",
        },
        {
          name: "-o",
          description: "Do not set an option that is already set",
        },
        {
          name: "-p",
          description: "Set a pane option",
        },
        {
          name: "-q",
          description: "Suppress errors about unknown or ambiguous options",
        },
        {
          name: "-s",
          description: "Set a server option",
        },
        {
          name: "-u",
          description: "Unset the option so it is inherited (or reset with -g)",
        },
        {
          name: "-U",
          description:
            "Unset the option like -u, also on any panes in the window for pane options",
        },
        {
          name: "-w",
          description: "Set a window option",
        },
        targetOption("pane"),
      ],
    },
    {
      name: ["setw", "set-window-option"],
      description: "Set a window option (deprecated, use set-option -w)",
      deprecated: true,
      args: [
        {
          name: "option",
          description: "The name of the option",
        },
        {
          name: "value",
          description: "The value of the option",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "-a",
          description: "Append the value to the existing setting",
        },
        {
          name: "-F",
          description: "Expand formats in the option value",
        },
        {
          name: "-g",
          description: "Set the global window option",
        },
        {
          name: "-o",
          description: "Do not set an option that is already set",
        },
        {
          name: "-q",
          description: "Suppress errors about unknown or ambiguous options",
        },
        {
          name: "-u",
          description: "Unset the option",
        },
        targetOption("window"),
      ],
    },
    {
      name: ["showb", "show-buffer"],
      description: "Display the contents of a paste buffer",
      options: [bufferOption()],
    },
    {
      name: ["showenv", "show-environment"],
      description: "Display the environment",
      args: {
        name: "variable",
        description: "Only show this variable",
        isOptional: true,
      },
      options: [
        {
          name: "-g",
          description: "Show the global environment",
        },
        {
          name: "-h",
          description: "Show hidden variables",
        },
        {
          name: "-s",
          description: "Format the output as Bourne shell commands",
        },
        targetOption("session"),
      ],
    },
    {
      name: "show-hooks",
      description: "Show hooks",
      args: hookArg,
      options: [
        {
          name: "-B",
          description: "Show the subscriptions installed with set-hook -B",
        },
        {
          name: "-g",
          description: "Show global hooks",
        },
        {
          name: "-p",
          description: "Show pane hooks",
        },
        {
          name: "-w",
          description: "Show window hooks",
        },
        {
          name: "-F",
          description: "The format used for each hook",
          args: {
            name: "format",
          },
        },
        targetOption("pane"),
      ],
    },
    {
      name: ["showmsgs", "show-messages"],
      description: "Show server messages or information",
      options: [
        {
          name: "-J",
          description: "Show debugging information about jobs",
        },
        {
          name: "-T",
          description: "Show debugging information about terminals",
        },
        targetOption("client"),
      ],
    },
    {
      name: ["show", "show-options"],
      description: "Show tmux options",
      args: {
        name: "option",
        description: "Only show this option",
        isOptional: true,
      },
      options: [
        {
          name: "-A",
          description:
            "Include options inherited from a parent set of options (marked with an asterisk)",
        },
        {
          name: "-g",
          description: "Show the global session or window options",
        },
        {
          name: "-H",
          description: "Include hooks",
        },
        {
          name: "-p",
          description: "Show pane options",
        },
        {
          name: "-q",
          description: "Do not return an error if the option is unset",
        },
        {
          name: "-s",
          description: "Show server options",
        },
        {
          name: "-v",
          description: "Show only the option value, not the name",
        },
        {
          name: "-w",
          description: "Show window options",
        },
        {
          name: "-F",
          description: "The format used for each option",
          args: {
            name: "format",
          },
        },
        targetOption("pane"),
      ],
    },
    {
      name: ["showphist", "show-prompt-history"],
      description: "Display status prompt history",
      options: [
        {
          name: "-T",
          description:
            "The prompt type to show history for (all types if omitted)",
          args: promptTypeArg,
        },
      ],
    },
    {
      name: ["showw", "show-window-options"],
      description: "Show window options (deprecated, use show-options -w)",
      deprecated: true,
      args: {
        name: "option",
        description: "Only show this option",
        isOptional: true,
      },
      options: [
        {
          name: "-g",
          description: "Show the global window options",
        },
        {
          name: "-v",
          description: "Show only the option value, not the name",
        },
        {
          name: "-F",
          description: "The format used for each option",
          args: {
            name: "format",
          },
        },
        targetOption("window"),
      ],
    },
    {
      name: ["source", "source-file"],
      description: "Execute tmux commands from a file",
      args: {
        name: "path",
        description: "A file to execute (may be a glob pattern)",
        isVariadic: true,
        template: "filepaths",
      },
      options: [
        {
          name: "-F",
          description: "Expand path as a format",
        },
        {
          name: "-n",
          description: "Parse the file but do not execute any commands",
        },
        {
          name: "-q",
          description: "Do not return an error if the path does not exist",
        },
        {
          name: "-v",
          description: "Show the parsed commands and line numbers if possible",
        },
        targetOption("pane"),
      ],
    },
    {
      name: ["splitw", "split-window", "splitp", "split-pane"],
      description: "Create a new pane by splitting an existing one",
      args: paneCommandArg,
      options: paneCreationOptions(),
    },
    {
      name: ["start", "start-server"],
      description: "Start the tmux server if not already running",
    },
    {
      name: ["suspendc", "suspend-client"],
      description: "Suspend a client by sending SIGTSTP",
      options: [targetOption("client")],
    },
    {
      name: ["swapp", "swap-pane"],
      description: "Swap two panes",
      options: [
        {
          name: "-d",
          description: "Do not change the active pane",
        },
        {
          name: "-D",
          description: "Swap with the next pane (after it numerically)",
        },
        {
          name: "-U",
          description: "Swap with the previous pane (before it numerically)",
        },
        keepZoomOption,
        sourceOption("pane"),
        targetOption("pane", "The destination pane", "dst-pane"),
      ],
    },
    {
      name: ["swapw", "swap-window"],
      description: "Swap two windows",
      options: [
        {
          name: "-d",
          description: "Do not make the new window the current window",
        },
        sourceOption("window"),
        targetOption("window", "The destination window", "dst-window"),
      ],
    },
    {
      name: ["switchc", "switch-client"],
      description: "Switch the current session of a client",
      options: [
        {
          name: "-E",
          description: "Do not apply the update-environment option",
        },
        {
          name: "-l",
          description: "Move the client to the last session",
        },
        {
          name: "-n",
          description: "Move the client to the next session",
        },
        {
          name: "-p",
          description: "Move the client to the previous session",
        },
        {
          name: "-r",
          description: "Toggle the client read-only and ignore-size flags",
        },
        keepZoomOption,
        {
          name: "-c",
          description: "The target client",
          args: targetArg("client"),
        },
        sortOption(clientSorts, "The field to sort on with -n and -p"),
        targetOption(
          "session",
          "The target session (or a pane to change session, window and pane)"
        ),
        keyTableArg(
          "Set the client's key table for the next key, then return to the default"
        ),
      ],
    },
    {
      name: "switch-mode",
      description:
        "Put a pane into switch mode (a fast session or window switcher)",
      args: {
        name: "command",
        description: "A command with %% replaced by the chosen item",
        isOptional: true,
        default: "switch-client -Zt '%%'",
      },
      options: [
        {
          name: "-k",
          description: "Kill the pane when the mode is exited",
        },
        {
          name: "-s",
          description: "List sessions (the default)",
        },
        {
          name: "-w",
          description: "List windows",
        },
        zoomOption(),
        formatOption,
        targetOption("pane"),
      ],
    },
    {
      name: ["unbind", "unbind-key"],
      description: "Unbind the command bound to a key",
      args: {
        name: "key",
        description: "The key to unbind",
        isOptional: true,
      },
      options: [
        {
          name: "-a",
          description: "Remove all key bindings",
        },
        {
          name: "-n",
          description: "Alias for -T root",
        },
        {
          name: "-q",
          description: "Do not return errors",
        },
        keyTableArg("The key table to unbind the key from"),
      ],
    },
    {
      name: ["unlinkw", "unlink-window"],
      description: "Unlink a window",
      options: [
        {
          name: "-k",
          description:
            "Unlink and destroy the window even if it is linked to only one session",
        },
        targetOption("window"),
      ],
    },
    {
      name: ["wait", "wait-for"],
      description: "Wait for, signal or lock a channel",
      args: {
        name: "name",
        description: "The name of the channel (or event with -E)",
      },
      options: [
        {
          name: "-E",
          description:
            "Wait for the next event (a hook, notification or user event) with this name",
        },
        {
          name: "-L",
          description: "Lock the channel",
        },
        {
          name: "-S",
          description: "Wake up clients waiting on the channel",
        },
        {
          name: "-U",
          description: "Unlock the channel",
        },
        {
          name: "-l",
          description: "List the waiters for the channel",
        },
        {
          name: "-v",
          description: "Print the event payload keys",
        },
        {
          name: "-F",
          description: "With -E, a format which must also be true",
          args: {
            name: "format",
          },
        },
        {
          name: "-w",
          description: "Wake the given waiter on the channel immediately",
          args: {
            name: "waiter",
          },
        },
      ],
    },
  ],
  additionalSuggestions: [
    {
      name: "new -s 'name'",
      description: "Create a new session shortcut",
      insertValue: "new -s '{cursor}'",
      icon: "fig://template?color=2ecc71&badge=🔥",
      // type: "shortcut",
    },
  ],
};

export default completionSpec;
