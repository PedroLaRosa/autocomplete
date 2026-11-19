// WezTerm nightly (main e1eae81, 2026-11-14; latest release 20240203-110809-5046fc22).
// Source: clap definitions in wezterm/src/main.rs, wezterm/src/cli/*.rs,
// wezterm/src/asciicast.rs and wezterm-gui-subcommands/src/lib.rs

const help: Fig.Option = {
  name: ["-h", "--help"],
  description: "Print help",
};

const classOption: Fig.Option = {
  name: "--class",
  description:
    'Override the default windowing system class. The default is "org.wezfurlong.wezterm". Under X11 and Windows this changes the window class. Under Wayland this changes the app_id. This changes the class for all windows spawned by this instance of wezterm, including error, update and ssh authentication dialogs',
  args: { name: "class" },
};

const positionOption: Fig.Option = {
  name: "--position",
  description:
    "Override the position for the initial window launched by this process, e.g. 10,20, screen:10,20, main:10,20, active:10,20 or HDMI-1:10,20",
  args: { name: "position" },
};

const workspaceOption: Fig.Option = {
  name: "--workspace",
  description:
    'Override the default workspace with the provided name. The default is "default"',
  args: { name: "workspace" },
};

const newTabOption: Fig.Option = {
  name: "--new-tab",
  description:
    "When spawning into an existing GUI instance, spawn a new tab into the active window rather than spawn a new window",
};

const cwdOption: Fig.Option = {
  name: "--cwd",
  description:
    "Specify the current working directory for the initially spawned program",
  args: { name: "cwd", template: "folders" },
};

const formatOption: Fig.Option = {
  name: "--format",
  description:
    'Controls the output format. "table" and "json" are possible formats',
  args: { name: "format", suggestions: ["table", "json"], default: "table" },
};

const tmuxPassthruOption: Fig.Option = {
  name: "--tmux-passthru",
  description: "How to manage passing the escape through to tmux",
  args: { name: "mode", suggestions: ["disable", "enable", "detect"] },
};

const targetPane =
  "Specify the target pane. The default is to use the current pane based on the environment variable WEZTERM_PANE";
const currentPane =
  "Specify the current pane. The default is to use the current pane based on the environment variable WEZTERM_PANE";

const paneId = (description: string): Fig.Option => ({
  name: "--pane-id",
  description,
  args: { name: "pane-id" },
});

const directionArg: Fig.Arg = {
  name: "direction",
  suggestions: ["Up", "Down", "Left", "Right", "Next", "Prev"],
};

const progArg: Fig.Arg = {
  name: "prog",
  isVariadic: true,
  isOptional: true,
  isCommand: true,
};

const helpCommand: Fig.Subcommand = {
  name: "help",
  description: "Print this message or the help of the given subcommand(s)",
  args: { name: "subcommand", isOptional: true },
};

const completion: Fig.Spec = {
  name: "wezterm",
  description: "Wez's Terminal Emulator",
  subcommands: [
    {
      name: "start",
      description: "Start the GUI, optionally running an alternative program",
      options: [
        {
          name: "--no-auto-connect",
          description:
            "If true, do not connect to domains marked as connect_automatically in your wezterm configuration file",
        },
        {
          name: "--always-new-process",
          description:
            "If enabled, don't try to ask an existing wezterm GUI instance to start the command.  Instead, always start the GUI in this invocation of wezterm so that you can wait for the command to complete by waiting for this wezterm process to finish",
          exclusiveOn: ["--new-tab"],
        },
        { ...newTabOption, exclusiveOn: ["--always-new-process"] },
        cwdOption,
        classOption,
        workspaceOption,
        positionOption,
        {
          name: "--domain",
          description:
            "Name of the multiplexer domain section from the configuration to which you'd like to connect. If omitted, the default domain will be used",
          args: { name: "domain" },
        },
        {
          name: "--attach",
          description:
            "When used with --domain, if the domain already has running panes, wezterm will simply attach and will NOT spawn the specified PROG. If you omit --attach when using --domain, wezterm will attach AND then spawn PROG",
          dependsOn: ["--domain"],
        },
        help,
      ],
      args: progArg,
    },
    {
      name: "ssh",
      description: "Establish an ssh session",
      options: [
        {
          name: ["-o", "--ssh-option"],
          description:
            "Override specific SSH configuration options. `wezterm ssh` is able to parse some (but not all!) options from your `~/.ssh/config` and `/etc/ssh/ssh_config` files. This command line switch allows you to override or otherwise specify ssh_config style options",
          isRepeatable: true,
          args: { name: "name=value" },
        },
        {
          name: "-v",
          description:
            "Enable verbose ssh protocol tracing. The trace information is printed to the stderr stream of the process",
        },
        classOption,
        positionOption,
        help,
      ],
      args: [{ name: "user-at-host-and-port" }, progArg],
    },
    {
      name: "serial",
      description: "Open a serial port",
      options: [
        {
          name: "--baud",
          description: "Set the baud rate.  The default is 9600 baud",
          args: { name: "baud" },
        },
        classOption,
        positionOption,
        help,
      ],
      args: { name: "port" },
    },
    {
      name: "connect",
      description: "Connect to wezterm multiplexer",
      options: [
        newTabOption,
        classOption,
        workspaceOption,
        positionOption,
        help,
      ],
      args: [{ name: "domain-name" }, progArg],
    },
    {
      name: "ls-fonts",
      description: "Display information about fonts",
      options: [
        {
          name: "--list-system",
          description: "Whether to list all fonts available to the system",
        },
        {
          name: "--text",
          description:
            "Explain which fonts are used to render the supplied text string",
          exclusiveOn: ["--list-system", "--codepoints"],
          args: { name: "text" },
        },
        {
          name: "--codepoints",
          description:
            "Explain which fonts are used to render the specified unicode code point sequence. Code points are comma separated hex values",
          exclusiveOn: ["--list-system", "--text"],
          args: { name: "codepoints" },
        },
        {
          name: "--rasterize-ascii",
          description:
            "Show rasterized glyphs for the text in --text or --codepoints using ascii blocks",
          dependsOn: ["--text"],
        },
        help,
      ],
    },
    {
      name: "show-keys",
      description: "Show key assignments",
      options: [
        {
          name: "--lua",
          description: "Show the keys as lua config statements",
        },
        {
          name: "--key-table",
          description: "In lua mode, show only the named key table",
          args: { name: "key-table" },
        },
        help,
      ],
    },
    {
      name: "cli",
      description: "Interact with experimental mux server",
      subcommands: [
        {
          name: "list",
          description: "List windows, tabs and panes",
          options: [formatOption, help],
        },
        {
          name: "list-clients",
          description: "List clients",
          options: [formatOption, help],
        },
        {
          name: "proxy",
          description: "Start rpc proxy pipe",
          options: [help],
        },
        {
          name: "tlscreds",
          description: "Obtain tls credentials",
          options: [
            {
              name: "--pem",
              description:
                "Output a PEM file encoded copy of the credentials. They will be valid for the lifetime of the mux server process",
            },
            help,
          ],
        },
        {
          name: "move-pane-to-new-tab",
          description: "Move a pane into a new tab",
          options: [
            paneId(
              "Specify the pane that should be moved. The default is to use the current pane based on the environment variable WEZTERM_PANE"
            ),
            {
              name: "--window-id",
              description:
                "Specify the window into which the new tab will be created. If omitted, the window associated with the current pane is used",
              args: { name: "window-id" },
            },
            {
              name: "--new-window",
              description:
                "Create tab in a new window, rather than the window currently containing the pane",
              exclusiveOn: ["--window-id"],
            },
            {
              name: "--workspace",
              description:
                'If creating a new window, override the default workspace name with the provided name.  The default name is "default"',
              args: { name: "workspace" },
            },
            help,
          ],
        },
        {
          name: "split-pane",
          description:
            "Split the current pane. Outputs the pane-id for the newly created pane on success",
          options: [
            paneId(
              "Specify the pane that should be split. The default is to use the current pane based on the environment variable WEZTERM_PANE"
            ),
            {
              name: "--horizontal",
              description:
                "Equivalent to `--right`. If neither this nor any other direction is specified, the default is equivalent to `--bottom`",
              exclusiveOn: ["--left", "--right", "--top", "--bottom"],
            },
            {
              name: "--left",
              description: "Split horizontally, with the new pane on the left",
              exclusiveOn: ["--right", "--top", "--bottom"],
            },
            {
              name: "--right",
              description: "Split horizontally, with the new pane on the right",
              exclusiveOn: ["--left", "--top", "--bottom"],
            },
            {
              name: "--top",
              description: "Split vertically, with the new pane on the top",
              exclusiveOn: ["--left", "--right", "--bottom"],
            },
            {
              name: "--bottom",
              description: "Split vertically, with the new pane on the bottom",
              exclusiveOn: ["--left", "--right", "--top"],
            },
            {
              name: "--top-level",
              description:
                "Rather than splitting the active pane, split the entire window",
            },
            {
              name: "--cells",
              description:
                "The number of cells that the new split should have. If omitted, 50% of the available space is used",
              args: { name: "cells" },
            },
            {
              name: "--percent",
              description:
                "Specify the number of cells that the new split should have, expressed as a percentage of the available space",
              exclusiveOn: ["--cells"],
              args: { name: "percent" },
            },
            cwdOption,
            {
              name: "--move-pane-id",
              description:
                "Instead of spawning a new command, move the specified pane into the newly created split",
              exclusiveOn: ["--cwd"],
              args: { name: "move-pane-id" },
            },
            help,
          ],
          args: progArg,
        },
        {
          name: "spawn",
          description:
            "Spawn a command into a new window or tab. Outputs the pane-id for the newly created pane on success",
          options: [
            paneId(
              `${currentPane}. The pane is used to determine the current domain and window`
            ),
            {
              name: "--domain-name",
              args: { name: "domain-name" },
            },
            {
              name: "--window-id",
              description:
                "Specify the window into which to spawn a tab. If omitted, the window associated with the current pane is used. Cannot be used with `--workspace` or `--new-window`",
              exclusiveOn: ["--workspace", "--new-window"],
              args: { name: "window-id" },
            },
            {
              name: "--new-window",
              description: "Spawn into a new window, rather than a new tab",
            },
            cwdOption,
            {
              name: "--workspace",
              description:
                'When creating a new window, override the default workspace name with the provided name.  The default name is "default"',
              dependsOn: ["--new-window"],
              args: { name: "workspace" },
            },
            help,
          ],
          args: progArg,
        },
        {
          name: "send-text",
          description:
            "Send text to a pane as though it were pasted. If bracketed paste mode is enabled in the pane, then the text will be sent as a bracketed paste",
          options: [
            paneId(targetPane),
            {
              name: "--no-paste",
              description:
                "Send the text directly, rather than as a bracketed paste",
            },
            help,
          ],
          args: {
            name: "text",
            description: "The text to send. If omitted, read from stdin",
            isOptional: true,
          },
        },
        {
          name: "get-text",
          description:
            "Retrieves the textual content of a pane and output it to stdout",
          options: [
            paneId(targetPane),
            {
              name: "--start-line",
              description:
                "The starting line number. 0 is the first line of terminal screen. Negative numbers proceed backwards into the scrollback",
              args: { name: "start-line" },
            },
            {
              name: "--end-line",
              description:
                "The ending line number. 0 is the first line of terminal screen. Negative numbers proceed backwards into the scrollback. Defaults to the bottom of the terminal screen",
              args: { name: "end-line" },
            },
            {
              name: "--escapes",
              description:
                "Include escape sequences that color and style the text",
            },
            help,
          ],
        },
        {
          name: "activate-pane-direction",
          description: "Activate an adjacent pane in the specified direction",
          options: [paneId(currentPane), help],
          args: directionArg,
        },
        {
          name: "get-pane-direction",
          description:
            "Determine the adjacent pane in the specified direction. Prints the pane id in that direction, or nothing if there is no pane in that direction",
          options: [paneId(currentPane), help],
          args: directionArg,
        },
        {
          name: "kill-pane",
          description: "Kill a pane",
          options: [paneId(targetPane), help],
        },
        {
          name: "activate-pane",
          description: "Activate (focus) a pane",
          options: [paneId(targetPane), help],
        },
        {
          name: "adjust-pane-size",
          description: "Adjust the size of a pane directionally",
          options: [
            paneId(targetPane),
            {
              name: "--amount",
              description:
                "Specify the number of cells to resize by, defaults to 1",
              args: { name: "amount" },
            },
            help,
          ],
          args: directionArg,
        },
        {
          name: "activate-tab",
          description: "Activate a tab",
          options: [
            {
              name: "--tab-id",
              description: "Specify the target tab by its id",
              exclusiveOn: [
                "--tab-index",
                "--tab-relative",
                "--no-wrap",
                "--pane-id",
              ],
              args: { name: "tab-id" },
            },
            {
              name: "--tab-index",
              description:
                "Specify the target tab by its 0-based index within the window that holds the current pane. Negative numbers count from the right-most tab",
              args: { name: "tab-index" },
            },
            {
              name: "--tab-relative",
              description:
                "Specify the target tab by its relative offset. -1 selects the tab to the left, 1 the tab to the right. Wraps around unless --no-wrap is given",
              args: { name: "tab-relative" },
            },
            {
              name: "--no-wrap",
              description:
                "When used with tab-relative, prevents wrapping around and will instead clamp to the left-most when moving left or right-most when moving right",
              dependsOn: ["--tab-relative"],
            },
            {
              ...paneId(
                `${currentPane}. The pane is used to figure out which window contains appropriate tabs`
              ),
              exclusiveOn: ["--tab-id"],
            },
            help,
          ],
        },
        {
          name: "set-tab-title",
          description: "Change the title of a tab",
          options: [
            {
              name: "--tab-id",
              description: "Specify the target tab by its id",
              exclusiveOn: ["--pane-id"],
              args: { name: "tab-id" },
            },
            {
              ...paneId(
                `${currentPane}. The pane is used to figure out which tab should be renamed`
              ),
              exclusiveOn: ["--tab-id"],
            },
            help,
          ],
          args: { name: "title" },
        },
        {
          name: "set-window-title",
          description: "Change the title of a window",
          options: [
            {
              name: "--window-id",
              description: "Specify the target window by its id",
              exclusiveOn: ["--pane-id"],
              args: { name: "window-id" },
            },
            {
              ...paneId(
                `${currentPane}. The pane is used to figure out which window should be renamed`
              ),
              exclusiveOn: ["--window-id"],
            },
            help,
          ],
          args: { name: "title" },
        },
        {
          name: "rename-workspace",
          description: "Rename a workspace",
          options: [
            {
              name: "--workspace",
              description: "Specify the workspace to rename",
              args: { name: "workspace" },
            },
            paneId(
              `${currentPane}. The pane is used to figure out which workspace should be renamed`
            ),
            help,
          ],
          args: { name: "new-workspace" },
        },
        {
          name: "zoom-pane",
          description: "Zoom, unzoom, or toggle zoom state",
          options: [
            paneId(targetPane),
            {
              name: "--zoom",
              description: "Zooms the pane if it wasn't already zoomed",
              exclusiveOn: ["--unzoom", "--toggle"],
            },
            {
              name: "--unzoom",
              description: "Unzooms the pane if it was zoomed",
              exclusiveOn: ["--zoom", "--toggle"],
            },
            {
              name: "--toggle",
              description: "Toggles the zoom state of the pane",
              exclusiveOn: ["--zoom", "--unzoom"],
            },
            help,
          ],
        },
        helpCommand,
      ],
      options: [
        {
          name: "--no-auto-start",
          description: "Don't automatically start the server",
        },
        {
          name: "--prefer-mux",
          description:
            "Prefer connecting to a background mux server. The default is to prefer connecting to a running wezterm gui instance",
        },
        {
          name: "--class",
          description:
            "When connecting to a gui instance, if you started the gui with `--class SOMETHING`, you should also pass that same value here in order for the client to find the correct gui instance",
          args: { name: "class" },
        },
        help,
      ],
    },
    {
      name: "imgcat",
      description: "Output an image to the terminal",
      options: [
        {
          name: "--width",
          description:
            'Specify the display width; defaults to "auto" which automatically selects an appropriate size.  You may also use an integer value `N` to specify the number of cells, or `Npx` to specify the number of pixels, or `N%` to size relative to the terminal width',
          args: { name: "width" },
        },
        {
          name: "--height",
          description:
            'Specify the display height; defaults to "auto" which automatically selects an appropriate size.  You may also use an integer value `N` to specify the number of cells, or `Npx` to specify the number of pixels, or `N%` to size relative to the terminal height',
          args: { name: "height" },
        },
        {
          name: "--no-preserve-aspect-ratio",
          description:
            "Do not respect the aspect ratio.  The default is to respect the aspect ratio",
        },
        {
          name: "--position",
          description:
            "Set the cursor position (x,y in cells, 0,0 being the top left) prior to displaying the image. The default is to use the current cursor position",
          args: { name: "x,y" },
        },
        {
          name: "--no-move-cursor",
          description:
            "Do not move the cursor after displaying the image. The shell prompt may overwrite the image; consider also using `--hold`",
        },
        {
          name: "--hold",
          description:
            "Wait for enter/escape/ctrl-c/ctrl-d to be pressed after displaying the image",
        },
        tmuxPassthruOption,
        {
          name: "--max-pixels",
          description:
            "Set the maximum number of pixels per image frame. Images are scaled down to fit unless `--no-resample` is used",
          args: { name: "max-pixels", default: "25000000" },
        },
        {
          name: "--no-resample",
          description:
            "Do not resample images whose frames are larger than the max-pixels value",
        },
        {
          name: "--resample-format",
          description:
            "Specify the image format to use to encode resampled/resized images",
          args: {
            name: "format",
            suggestions: ["png", "jpeg", "input"],
            default: "input",
          },
        },
        {
          name: "--resample-filter",
          description:
            "Specify the filtering technique used when resizing/resampling images",
          args: {
            name: "filter",
            suggestions: [
              "nearest",
              "triangle",
              "catmull-rom",
              "gaussian",
              "lanczos3",
            ],
            default: "catmull-rom",
          },
        },
        {
          name: "--resize",
          description:
            "Pre-process the image to resize it to the specified dimensions, e.g. 800x600 (width x height)",
          args: { name: "WIDTHxHEIGHT" },
        },
        {
          name: "--show-resample-timing",
          description:
            "When resampling or resizing, display some diagnostics around the timing/performance of that operation",
        },
        help,
      ],
      args: {
        name: "file-name",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "set-working-directory",
      description:
        "Advise the terminal of the current working directory by emitting an OSC 7 escape sequence",
      options: [tmuxPassthruOption, help],
      args: [
        {
          name: "cwd",
          isOptional: true,
          template: "folders",
        },
        {
          name: "host",
          isOptional: true,
        },
      ],
    },
    {
      name: "record",
      description: "Record a terminal session as an asciicast",
      options: [
        {
          name: "--cwd",
          description:
            "Start in the specified directory, instead of the default_cwd defined by your wezterm configuration",
          args: { name: "cwd", template: "folders" },
        },
        {
          name: "-o",
          description:
            "Save asciicast to the specified file, instead of using a random file name in the temp directory",
          args: { name: "outfile", template: "filepaths" },
        },
        help,
      ],
      args: progArg,
    },
    {
      name: "replay",
      description: "Replay an asciicast terminal session",
      options: [
        {
          name: "--explain",
          description: "Explain what is being sent/received",
          exclusiveOn: ["--explain-only", "--cat"],
        },
        {
          name: "--explain-only",
          description: "Don't replay, just show the explanation",
          exclusiveOn: ["--explain"],
        },
        {
          name: "--cat",
          description:
            "Just emit raw escape sequences all at once, with no timing information",
          exclusiveOn: ["--explain"],
        },
        help,
      ],
      args: {
        name: "cast-file",
        template: "filepaths",
      },
    },
    {
      name: "shell-completion",
      description: "Generate shell completion information",
      options: [
        {
          name: "--shell",
          description: "Which shell to generate for",
          isRequired: true,
          args: {
            name: "shell",
            suggestions: [
              "bash",
              "elvish",
              "fish",
              "power-shell",
              "zsh",
              "fig",
            ],
          },
        },
        help,
      ],
    },
    helpCommand,
  ],
  options: [
    {
      name: ["-n", "--skip-config"],
      description: "Skip loading wezterm.lua",
    },
    {
      name: "--config-file",
      description:
        "Specify the configuration file to use, overrides the normal configuration file resolution",
      exclusiveOn: ["-n", "--skip-config"],
      args: {
        name: "config-file",
        template: "filepaths",
      },
    },
    {
      name: "--config",
      description: "Override specific configuration values",
      isRepeatable: true,
      args: { name: "name=value" },
    },
    help,
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
  ],
};

export default completion;
