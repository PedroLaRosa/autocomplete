// Zellij v0.46.0 (GitHub release/tag zellij-org/zellij v0.46.0, confirmed by the Homebrew formula, 2026-11-19).
// Source: static read of the clap definitions at tag v0.46.0 (zellij-utils/src/cli.rs, setup.rs, input/options.rs,
// data.rs enums, input/terminal.rs) and CHANGELOG.md; the binary was not run (downloaded binaries and cloned
// source cannot be executed in the sandbox), so help text was taken from the doc comments in the source.

interface PaneListEntry {
  id: number;
  is_plugin: boolean;
  title?: string;
  tab_name?: string;
}

interface TabListEntry {
  tab_id: number;
  name?: string;
  position?: number;
}

const generateSessions: Fig.Generator = {
  script: {
    command: "zellij",
    args: ["list-sessions", "-n"],
  },
  postProcess: (out) => {
    if (out.includes("No active zellij sessions found")) {
      return [];
    }

    return out
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const name = line.split("[")[0].trim();
        const createdMatch = line.match(/\[Created (.+?) ago\]/);
        const isExited = line.includes("EXITED");

        let description = "";
        if (createdMatch) {
          description = `Created ${createdMatch[1]} ago`;
        }
        if (isExited) {
          description += " (EXITED)";
        }

        return {
          name: name,
          description: description,
          icon: isExited ? "⚠️" : "📟",
          priority: isExited ? 51 : 75,
        };
      });
  },
};

const generatePaneIds: Fig.Generator = {
  script: ["zellij", "action", "list-panes", "--json"],
  postProcess: (out) => {
    try {
      const panes = JSON.parse(out) as PaneListEntry[];
      return panes.map((pane) => ({
        name: `${pane.is_plugin ? "plugin" : "terminal"}_${pane.id}`,
        description: [pane.title, pane.tab_name && `Tab: ${pane.tab_name}`]
          .filter(Boolean)
          .join(" - "),
        icon: pane.is_plugin ? "🧩" : "📟",
      }));
    } catch {
      return [];
    }
  },
};

const generateTabIds: Fig.Generator = {
  script: ["zellij", "action", "list-tabs", "--json"],
  postProcess: (out) => {
    try {
      const tabs = JSON.parse(out) as TabListEntry[];
      return tabs.map((tab) => ({
        name: String(tab.tab_id),
        description: tab.name,
        icon: "🗂️",
      }));
    } catch {
      return [];
    }
  },
};

const directions = ["right", "left", "up", "down"];
const boolValues = ["true", "false"];
const inputModes = [
  "normal",
  "locked",
  "resize",
  "pane",
  "tab",
  "scroll",
  "enter-search",
  "search",
  "rename-tab",
  "rename-pane",
  "session",
  "move",
  "prompt",
  "tmux",
  "rename-session",
];
const shells = ["bash", "elvish", "fish", "powershell", "zsh"];
const keybindPresets = ["default", "unlock-first"];
const popupPlacements = [
  "pane",
  "center",
  "mouse",
  "cursor",
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
];

const boolArg = (name: string): Fig.Arg => ({
  name,
  suggestions: boolValues,
});

const paneIdArg: Fig.Arg = { name: "PANE_ID", generators: generatePaneIds };
const tabIdArg: Fig.Arg = { name: "TAB_ID", generators: generateTabIds };

const paneIdOption = (
  description = "Target a specific pane by ID (eg. terminal_1, plugin_2, or 3)"
): Fig.Option => ({
  name: ["-p", "--pane-id"],
  description,
  args: paneIdArg,
});

const tabIdOption: Fig.Option = {
  name: ["-t", "--tab-id"],
  description: "Target a specific tab by ID",
  args: tabIdArg,
};

const tabIdLongOption: Fig.Option = {
  name: "--tab-id",
  description: "Target a specific tab by ID",
  args: tabIdArg,
};

const floatingOption: Fig.Option = {
  name: ["-f", "--floating"],
  description: "Open the new pane in floating mode",
};

const inPlaceOption: Fig.Option = {
  name: ["-i", "--in-place"],
  description:
    "Open the new pane in place of the current pane, temporarily suspending it",
};

const closeReplacedPaneOption: Fig.Option = {
  name: "--close-replaced-pane",
  description:
    "Close the replaced pane instead of suspending it (only effective with --in-place)",
};

const directionOption: Fig.Option = {
  name: ["-d", "--direction"],
  description: "Direction to open the new pane in",
  args: { name: "DIRECTION", suggestions: ["right", "down"] },
};

const cwdOption = (description: string): Fig.Option => ({
  name: "--cwd",
  description,
  args: { name: "CWD", template: "folders" },
});

const nearCurrentPaneOption: Fig.Option = {
  name: "--near-current-pane",
  description:
    "If set, will open the pane near the current one rather than following the user's focus",
};

const noFocusOption = (what: string): Fig.Option => ({
  name: "--no-focus",
  description: `If set, will open the ${what} without changing the focus of any client, placing it relative to the pane the command was issued from`,
});

const borderStyleOption: Fig.Option = {
  name: "--border-style",
  description:
    'Border line style, eg. "double" or "top:double,left:single,rounded"',
  args: { name: "BORDER_STYLE" },
};

const borderlessOption = (short: boolean): Fig.Option => ({
  name: short ? ["-b", "--borderless"] : "--borderless",
  description:
    "Start this pane without a border (warning: will make it impossible to move with the mouse)",
  args: boolArg("BORDERLESS"),
});

const pinnedOption: Fig.Option = {
  name: "--pinned",
  description: "Whether to pin a floating pane so that it is always on top",
  args: boolArg("PINNED"),
};

const floatingGeometryOptions: Fig.Option[] = [
  {
    name: ["-x", "--x"],
    description:
      "The x coordinates if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)",
    args: { name: "X" },
  },
  {
    name: ["-y", "--y"],
    description:
      "The y coordinates if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)",
    args: { name: "Y" },
  },
  {
    name: "--width",
    description:
      "The width if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)",
    args: { name: "WIDTH" },
  },
  {
    name: "--height",
    description:
      "The height if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)",
    args: { name: "HEIGHT" },
  },
  pinnedOption,
];

const pluginConfigurationOption = (
  name: string | string[],
  description: string
): Fig.Option => ({
  name,
  description,
  args: { name: "CONFIGURATION" },
});

const blockUntilOptions: Fig.Option[] = [
  {
    name: "--block-until-exit-success",
    description:
      "Block until the command exits successfully (exit status 0) OR its pane has been closed",
  },
  {
    name: "--block-until-exit-failure",
    description:
      "Block until the command exits with failure (non-zero exit status) OR its pane has been closed",
  },
  {
    name: "--block-until-exit",
    description:
      "Block until the command exits (regardless of exit status) OR its pane has been closed",
  },
];

const notifyOption: Fig.Option = {
  name: "--notify",
  description:
    "Watch the pane: notify each time its command finishes or its output goes quiet, until the watch is turned off",
};

const layoutStringOption = (description: string): Fig.Option => ({
  name: "--layout-string",
  description,
  args: { name: "LAYOUT_STRING" },
});

const layoutDirOption: Fig.Option = {
  name: "--layout-dir",
  description: "Default folder to look for layouts",
  args: { name: "LAYOUT_DIR", template: "folders" },
};

const jsonOption = (description: string): Fig.Option => ({
  name: ["-j", "--json"],
  description,
});

const allOption: Fig.Option = {
  name: ["-a", "--all"],
  description: "Include all available fields",
};

const option: Fig.Option[] = [
  {
    name: ["-c", "--config"],
    description: "Change where zellij looks for the configuration file",
    args: {
      name: "CONFIG",
      template: "filepaths",
    },
  },
  {
    name: "--config-dir",
    description: "Change where zellij looks for the configuration directory",
    args: {
      name: "CONFIG_DIR",
      template: "folders",
    },
  },
  {
    name: ["-d", "--debug"],
    description: "Specify emitting additional debug information",
  },
  {
    name: "--data-dir",
    description: "Change where zellij looks for plugins",
    args: {
      name: "DATA_DIR",
      template: "folders",
    },
  },
  {
    name: ["-h", "--help"],
    description: "Print help information",
    isPersistent: true,
  },
  {
    name: ["-l", "--layout"],
    description:
      "Name of a predefined layout inside the layout directory or the path to a layout file; if inside a session (or using the --session flag) will be added to the session as a new tab or tabs, otherwise will start a new session",
    args: {
      name: "LAYOUT",
      template: "filepaths",
    },
  },
  layoutStringOption(
    "Raw KDL layout string to use directly (instead of a file path); if inside a session (or using the --session flag) will be added to the session as a new tab or tabs, otherwise will start a new session"
  ),
  {
    name: "--max-panes",
    description:
      "Maximum panes on screen, caution: opening more panes will close old ones",
    args: {
      name: "MAX_PANES",
    },
  },
  {
    name: ["-n", "--new-session-with-layout"],
    description:
      "Name of a predefined layout inside the layout directory or the path to a layout file; will always start a new session, even if inside an existing session",
    args: {
      name: "NEW_SESSION_WITH_LAYOUT",
      template: "filepaths",
    },
  },
  {
    name: "--server",
    description: "Run server listening at the specified socket path",
    hidden: true,
    args: {
      name: "SERVER",
      template: "filepaths",
    },
  },
  {
    name: ["-s", "--session"],
    description: "Specify name of a new session",
    args: {
      name: "SESSION",
    },
  },
  {
    name: ["-V", "--version"],
    description: "Print version information",
  },
];

// Flags of `zellij options` (also usable as `zellij attach <session> options ...`)
const configOptions: Fig.Option[] = [
  {
    name: "--advanced-mouse-actions",
    description:
      "Whether to enable mouse hover effects and pane grouping functionality, default is true",
    args: boolArg("ADVANCED_MOUSE_ACTIONS"),
  },
  {
    name: "--attach-to-session",
    description:
      "Whether to attach to a session specified in 'session-name' if it exists",
    args: boolArg("ATTACH_TO_SESSION"),
  },
  {
    name: "--auto-layout",
    description:
      "Whether to lay out panes in a predefined set of layouts whenever possible",
    args: boolArg("AUTO_LAYOUT"),
  },
  {
    name: "--bars-hidden-on-start",
    description:
      "Which bars a new session starts with hidden: bar names separated by commas (eg. tab-bar,status-bar), all or none, default is none",
    args: { name: "BARS", suggestions: ["none", "all"] },
  },
  {
    name: "--client-async-worker-tasks",
    description:
      "Number of background threads used by `zellij attach <url>` when it connects to a session on another machine, 0 uses the number of physical CPU cores",
    args: { name: "CLIENT_ASYNC_WORKER_TASKS" },
  },
  {
    name: "--context-menu-enabled",
    description:
      "Whether a right click opens the right-click menu (true or false), default is true",
    args: boolArg("CONTEXT_MENU_ENABLED"),
  },
  {
    name: "--copy-clipboard",
    description: "OSC52 destination clipboard",
    args: {
      name: "COPY_CLIPBOARD",
      suggestions: ["system", "primary"],
    },
  },
  {
    name: "--copy-command",
    description:
      "Switch to using a user supplied command for clipboard instead of OSC52",
    args: {
      name: "COPY_COMMAND",
    },
  },
  {
    name: "--copy-on-select",
    description: "Automatically copy when selecting text (true or false)",
    args: boolArg("COPY_ON_SELECT"),
  },
  {
    name: "--dangerously-enable-paste-buffer-read",
    description: "Allow programs to read the paste buffer (dangerous)",
    args: boolArg("DANGEROUSLY_ENABLE_PASTE_BUFFER_READ"),
  },
  {
    name: "--default-cwd",
    description: "Set the default cwd",
    args: {
      name: "DEFAULT_CWD",
      template: "folders",
    },
  },
  {
    name: "--default-layout",
    description: "Set the default layout",
    args: {
      name: "DEFAULT_LAYOUT",
      template: "filepaths",
    },
  },
  {
    name: "--default-mode",
    description: "Set the default mode",
    args: {
      name: "DEFAULT_MODE",
      suggestions: inputModes,
    },
  },
  {
    name: "--default-shell",
    description: "Set the default shell",
    args: {
      name: "DEFAULT_SHELL",
      template: "filepaths",
    },
  },
  {
    name: "--disable-session-metadata",
    description: "If true, will disable writing session metadata to disk",
    args: boolArg("DISABLE_SESSION_METADATA"),
  },
  {
    name: "--explicit-theme-hue",
    description:
      "Pin the session to a dark or light appearance, kept authoritative over host terminal reports; when unset, the session follows the host terminal",
    args: {
      name: "EXPLICIT_THEME_HUE",
      suggestions: ["dark", "light"],
    },
  },
  {
    name: "--focus-follows-mouse",
    description: "Whether to focus panes on mouse hover, default is false",
    args: boolArg("FOCUS_FOLLOWS_MOUSE"),
  },
  {
    name: "--grapheme-clusters",
    description:
      "Count each grapheme cluster (an emoji sequence, a letter with its accents) as one unit of width, as the Unicode standard does (true or false, default true)",
    args: boolArg("GRAPHEME_CLUSTERS"),
  },
  {
    name: "--hidden-bars-notification",
    description:
      "Whether to briefly show what was hidden and how to show it again when bars are hidden (true or false), default is true",
    args: boolArg("HIDDEN_BARS_NOTIFICATION"),
  },
  {
    name: "--host-notification-protocol",
    description: "Protocol used to forward notifications to the host terminal",
    args: {
      name: "HOST_NOTIFICATION_PROTOCOL",
      suggestions: ["auto", "osc9", "osc99", "bell", "off"],
    },
  },
  {
    name: "--keybinds-dir",
    description: "Set the keybinds_dir, defaults to subdirectory of config dir",
    args: {
      name: "KEYBINDS_DIR",
      template: "folders",
    },
  },
  {
    name: "--keybinds-preset",
    description:
      "Use this keybinding preset for this session: a name from the keybinds folder, a built-in preset, or a path to a preset file",
    args: {
      name: "KEYBINDS_PRESET",
      suggestions: keybindPresets,
      template: "filepaths",
    },
  },
  {
    name: "--keybinds-primary",
    description:
      'The primary leader key for the keybinding preset (for example "Ctrl")',
    args: {
      name: "KEYBINDS_PRIMARY",
    },
  },
  {
    name: "--keybinds-secondary",
    description:
      'The secondary leader key for the keybinding preset (for example "Alt")',
    args: {
      name: "KEYBINDS_SECONDARY",
    },
  },
  {
    name: "--keybinds-unlock",
    description:
      'The unlock key for the keybinding preset (for example "Ctrl g")',
    args: {
      name: "KEYBINDS_UNLOCK",
    },
  },
  {
    name: "--layout-dir",
    description: "Set the layout_dir, defaults to subdirectory of config dir",
    args: {
      name: "LAYOUT_DIR",
      template: "folders",
    },
  },
  {
    name: "--live-view-release-key",
    description:
      "An extra key that gives typing back to a plugin while a live pane view inside it is taking the keyboard",
    args: {
      name: "LIVE_VIEW_RELEASE_KEY",
    },
  },
  {
    name: "--mirror-resizes-source-pane",
    description:
      "Whether a focused mirror of a pane may resize that pane's program to the mirror's size, and whether new mirrors resize their source pane by default (true or false, default true)",
    args: boolArg("MIRROR_RESIZES_SOURCE_PANE"),
  },
  {
    name: "--mirror-session",
    description:
      "Mirror session when multiple users are connected (true or false)",
    args: boolArg("MIRROR_SESSION"),
  },
  {
    name: "--mode-hints-when-bars-hidden",
    description:
      "Whether to show the current mode's keys in a corner while a bar that would show them is hidden (true or false), default is true",
    args: boolArg("MODE_HINTS_WHEN_BARS_HIDDEN"),
  },
  {
    name: "--mouse-click-through",
    description:
      "Whether clicking a pane to focus it also sends the click into the pane (true or false), default is false",
    args: boolArg("MOUSE_CLICK_THROUGH"),
  },
  {
    name: "--mouse-hover-effects",
    description:
      "Whether to enable mouse hover visual effects (frame highlight and help text), default is true",
    args: boolArg("MOUSE_HOVER_EFFECTS"),
  },
  {
    name: "--mouse-hover-tips",
    description:
      "Whether to show mouse hover help-text tips (resize help and group shortcuts), default is true",
    args: boolArg("MOUSE_HOVER_TIPS"),
  },
  {
    name: "--mouse-mode",
    description:
      "Set the handling of mouse events (true or false) Can be temporarily bypassed by the [SHIFT] key",
    args: boolArg("MOUSE_MODE"),
  },
  {
    name: "--mouse-scroll-resize",
    description: "Whether Ctrl+ScrollWheel resizes panes, default is true",
    args: boolArg("MOUSE_SCROLL_RESIZE"),
  },
  {
    name: "--nested-session-handling",
    description: "How to handle a nested Zellij session detected inside a pane",
    args: {
      name: "NESTED_SESSION_HANDLING",
      suggestions: ["ask", "fullscreen", "descend", "never"],
    },
  },
  {
    name: "--on-force-close",
    description: "Set behaviour on force close (quit or detach)",
    args: {
      name: "ON_FORCE_CLOSE",
      suggestions: ["quit", "detach"],
    },
  },
  {
    name: "--on-quit",
    description:
      "What the quit action does: ask_quit (ask, Quit preselected), ask_detach (ask, Detach preselected), quit or detach, default is ask_quit",
    args: {
      name: "ON_QUIT",
      suggestions: ["ask_quit", "ask_detach", "quit", "detach"],
    },
  },
  {
    name: "--osc133-command-selection",
    description:
      "Whether triple-clicking inside shell-marked (OSC 133) command output selects the command and its output rather than the logical line, default is true",
    args: boolArg("OSC133_COMMAND_SELECTION"),
  },
  {
    name: "--osc8-hyperlinks",
    description: "Enable OSC8 hyperlink output (true or false)",
    args: boolArg("OSC8_HYPERLINKS"),
  },
  {
    name: "--pane-frame-style",
    description: "Set the style of the pane frames",
    args: {
      name: "PANE_FRAME_STYLE",
      suggestions: ["full", "titles", "none"],
    },
  },
  {
    name: "--pane-frames",
    description: "Set display of the pane frames (true or false)",
    args: boolArg("PANE_FRAMES"),
  },
  {
    name: "--post-command-discovery-hook",
    description:
      "A command to run after the discovery of running commands when serializing, for the purpose of manipulating the command (eg. with a regex) before it gets serialized",
    args: {
      name: "POST_COMMAND_DISCOVERY_HOOK",
    },
  },
  {
    name: "--scroll-buffer-size",
    description: "Set the scrollback buffer size",
    args: {
      name: "SCROLL_BUFFER_SIZE",
    },
  },
  {
    name: "--scroll-mode-sync",
    description:
      "Whether scrolling a pane implicitly enters (and leaving the scroll implicitly exits) Scroll mode, default is true",
    args: boolArg("SCROLL_MODE_SYNC"),
  },
  {
    name: "--scrollback-editor",
    description:
      "Explicit full path to open the scrollback editor (default is $EDITOR or $VISUAL)",
    args: {
      name: "SCROLLBACK_EDITOR",
      template: "filepaths",
    },
  },
  {
    name: "--scrollback-lines-to-serialize",
    description:
      "Scrollback lines to serialize along with the pane viewport when serializing sessions, 0 defaults to the scrollback size. If this number is higher than the scrollback size, it will also default to the scrollback size",
    args: {
      name: "SCROLLBACK_LINES_TO_SERIALIZE",
    },
  },
  {
    name: "--serialization-interval",
    description:
      "The interval at which to serialize sessions for resurrection (in seconds)",
    args: {
      name: "SERIALIZATION_INTERVAL",
    },
  },
  {
    name: "--serialize-pane-viewport",
    description:
      "Whether pane viewports are serialized along with the session, default is false",
    args: boolArg("SERIALIZE_PANE_VIEWPORT"),
  },
  {
    name: "--session-indicator",
    description:
      "Whether to show the other sessions indicator in the tab bar and compact bar (true or false), default is true",
    args: boolArg("SESSION_INDICATOR"),
  },
  {
    name: "--session-name",
    description: "The name of the session to create when starting Zellij",
    args: {
      name: "SESSION_NAME",
    },
  },
  {
    name: "--session-serialization",
    description:
      "Whether sessions should be serialized to the HD so that they can be later resurrected, default is true",
    args: boolArg("SESSION_SERIALIZATION"),
  },
  {
    name: "--show-release-notes",
    description:
      "Whether to show release notes on first run of a new version, default is true",
    args: boolArg("SHOW_RELEASE_NOTES"),
  },
  {
    name: "--show-startup-tips",
    description:
      "Whether to show startup tips when starting a new session, default is true",
    args: boolArg("SHOW_STARTUP_TIPS"),
  },
  {
    name: "--simplified-ui",
    description:
      "Allow plugins to use a more simplified layout that is compatible with more fonts (true or false)",
    args: boolArg("SIMPLIFIED_UI"),
  },
  {
    name: "--stacked-pane-list",
    description: "Whether to show a list of titles in stacks",
    args: boolArg("STACKED_PANE_LIST"),
  },
  {
    name: "--stacked-pane-list-orientation",
    description:
      "Whether new stacks show their titles in a column (vertical) or in a row (horizontal), default is vertical",
    args: {
      name: "STACKED_PANE_LIST_ORIENTATION",
      suggestions: ["vertical", "horizontal"],
    },
  },
  {
    name: "--stacked-resize",
    description:
      "Whether to stack panes when resizing beyond a certain size, default is true",
    args: boolArg("STACKED_RESIZE"),
  },
  {
    name: "--styled-underlines",
    description: "Whether to use ANSI styled underlines",
    args: boolArg("STYLED_UNDERLINES"),
  },
  {
    name: "--support-kitty-graphics-protocol",
    description:
      "Whether to enable support for the Kitty graphics (image) protocol (must also be supported by the host terminal), defaults to true if the terminal supports it",
    args: boolArg("SUPPORT_KITTY_GRAPHICS_PROTOCOL"),
  },
  {
    name: "--support-kitty-keyboard-protocol",
    description:
      "Whether to enable support for the Kitty keyboard protocol (must also be supported by the host terminal), defaults to true if the terminal supports it",
    args: boolArg("SUPPORT_KITTY_KEYBOARD_PROTOCOL"),
  },
  {
    name: "--swap-layout-notification",
    description:
      "Whether to briefly show the new swap layout name when it is changed (true or false), default is true",
    args: boolArg("SWAP_LAYOUT_NOTIFICATION"),
  },
  {
    name: "--theme",
    description: "Set the default theme",
    args: {
      name: "THEME",
    },
  },
  {
    name: "--theme-dark",
    description:
      "Theme name to apply when the host terminal reports a dark color palette (requires --theme-light to also be set)",
    args: {
      name: "THEME_DARK",
    },
  },
  {
    name: "--theme-dir",
    description: "Set the theme_dir, defaults to subdirectory of config dir",
    args: {
      name: "THEME_DIR",
      template: "folders",
    },
  },
  {
    name: "--theme-light",
    description:
      "Theme name to apply when the host terminal reports a light color palette (requires --theme-dark to also be set)",
    args: {
      name: "THEME_LIGHT",
    },
  },
  {
    name: "--visual-bell",
    description:
      "Whether to show visual bell indicators (pane/tab frame flash and [!] suffix), default is true",
    args: boolArg("VISUAL_BELL"),
  },
  {
    name: "--web-server",
    description:
      "Whether to make sure a local web server is running when a new Zellij session starts, default is false",
    args: boolArg("WEB_SERVER"),
  },
  {
    name: "--web-sharing",
    description:
      "Whether to allow new sessions to be shared through a local web server, assuming one is running, default is off",
    args: {
      name: "WEB_SHARING",
      suggestions: ["on", "off", "disabled"],
    },
  },
  {
    name: "--word-separators",
    description:
      "Characters that terminate a word when double-clicking to select it, in addition to whitespace (default is []{}<>())",
    args: {
      name: "WORD_SEPARATORS",
    },
  },
];

const optionsSubcommand: Fig.Subcommand = {
  name: "options",
  description: "Change the behaviour of zellij",
  options: configOptions,
};

// Flags shared by `attach` and `terminal` (AttachArgs in cli.rs)
const attachOptions: Fig.Option[] = [
  {
    name: ["-c", "--create"],
    description: "Create a session if one does not exist",
  },
  {
    name: "--index",
    description:
      "Number of the session index in the active sessions ordered creation date",
    args: {
      name: "INDEX",
    },
  },
  {
    name: ["-f", "--force-run-commands"],
    description:
      "If resurrecting a dead session, immediately run all its commands on startup",
  },
  {
    name: ["-t", "--token"],
    description: "Authentication token for remote sessions",
    args: {
      name: "TOKEN",
    },
  },
  {
    name: ["-r", "--remember"],
    description: "Save session for automatic re-authentication (4 weeks)",
  },
  {
    name: "--forget",
    description: "Delete saved session before connecting",
  },
  {
    name: "--ca-cert",
    description:
      "Path to a custom CA certificate (PEM format) for verifying the remote server",
    args: {
      name: "FILE",
      template: "filepaths",
    },
  },
  {
    name: "--insecure",
    description:
      "Skip TLS certificate validation (DANGEROUS - development only)",
  },
  {
    name: "--close-on-exit",
    description: "Close the initial command's pane immediately when it exits",
  },
  {
    name: "--start-suspended",
    description:
      "Start the initial command suspended, only running it after you first press ENTER",
  },
];

const attachArgs: Fig.Arg[] = [
  {
    name: "SESSION_NAME",
    description:
      "Name of the session to attach to (or the URL of a remote one)",
    isOptional: true,
    generators: generateSessions,
  },
  {
    name: "INITIAL_COMMAND",
    description:
      "Command to run in the first pane of the session, if it is created",
    isOptional: true,
    isVariadic: true,
  },
];

const promptAnswerOptions: Fig.Option[] = [
  {
    name: "--default",
    description:
      "Initial value, and the answer used when --timeout runs out (e.g. --default 8080)",
    args: { name: "DEFAULT" },
  },
  {
    name: "--json",
    description:
      'Print JSON with the result and why the prompt ended (e.g. {"result":"cancelled"})',
  },
  {
    name: "--at-mouse",
    description:
      "Open the popup where the mouse pointer last was, or at your cursor if the mouse has not moved yet",
    exclusiveOn: ["--at-cursor", "--at-center"],
  },
  {
    name: "--at-cursor",
    description:
      "Open the popup just below your cursor, in the pane you are focused on",
    exclusiveOn: ["--at-mouse", "--at-center"],
  },
  {
    name: "--at-center",
    description:
      "Open the popup in the middle of the screen instead of over the calling pane",
    exclusiveOn: ["--at-mouse", "--at-cursor"],
  },
  {
    name: "--capture-all-keys",
    description:
      "Send every key to the prompt, including the ones bound to Zellij actions",
  },
  {
    name: "--outside-click",
    description:
      "What a click outside the popup does: block (ignore it) or close (cancel the prompt)",
    args: { name: "OUTSIDE_CLICK", suggestions: ["block", "close"] },
  },
];

const promptItemOption: Fig.Option = {
  name: "--item",
  description: 'An item written as value=Label (e.g. --item "rm=Delete file")',
  isRepeatable: true,
  args: { name: "ITEM" },
};

const promptSubcommands: Fig.Subcommand[] = [
  {
    name: "confirm",
    description:
      'Ask a yes/no question; the exit code is the answer (e.g. zellij prompt confirm "Force push?" --yes Push --no Cancel)',
    args: { name: "MESSAGE", description: "The question", isOptional: true },
    options: [
      {
        name: "--yes",
        description: "Label of the confirming button (e.g. --yes Push)",
        args: { name: "YES" },
      },
      {
        name: "--no",
        description: "Label of the refusing button (e.g. --no Cancel)",
        args: { name: "NO" },
      },
      ...promptAnswerOptions,
    ],
  },
  {
    name: "choose",
    description:
      "Choose one or more items from the arguments or from stdin, one per line (e.g. git branch | zellij prompt choose)",
    args: {
      name: "ITEMS",
      description: "The items; read from stdin when none are given",
      isOptional: true,
      isVariadic: true,
    },
    options: [
      promptItemOption,
      {
        name: "--multi",
        description: "Allow ticking several items",
      },
      {
        name: "--labels",
        description: "Each stdin line is value<TAB>label",
      },
      {
        name: ["-0", "--null"],
        description:
          "Input and output are NUL-separated (e.g. find . -print0 | zellij prompt choose -0)",
      },
      {
        name: "--selected",
        description: "An item ticked in advance (e.g. --selected b)",
        isRepeatable: true,
        args: { name: "SELECTED" },
      },
      ...promptAnswerOptions,
    ],
  },
  {
    name: "input",
    description:
      'Ask for a line of text (e.g. zellij prompt input "Commit message" --required)',
    args: { name: "MESSAGE", description: "The label", isOptional: true },
    options: [
      {
        name: "--placeholder",
        description:
          'Text shown while the field is empty (e.g. --placeholder "what changed")',
        args: { name: "PLACEHOLDER" },
      },
      {
        name: "--validate",
        description:
          "A regular expression the answer must match (e.g. --validate '^[a-z-]+$')",
        args: { name: "VALIDATE" },
      },
      {
        name: "--required",
        description: "Refuse an empty answer",
      },
      ...promptAnswerOptions,
    ],
  },
  {
    name: "number",
    description:
      "Ask for a whole number (e.g. zellij prompt number Port --min 1 --max 65535 --default 8080)",
    args: { name: "MESSAGE", description: "The label", isOptional: true },
    options: [
      {
        name: "--min",
        description: "Smallest allowed value (e.g. --min 1)",
        args: { name: "MIN" },
      },
      {
        name: "--max",
        description: "Largest allowed value (e.g. --max 65535)",
        args: { name: "MAX" },
      },
      {
        name: "--step",
        description: "Step used by the arrow keys (e.g. --step 10)",
        args: { name: "STEP" },
      },
      ...promptAnswerOptions,
    ],
  },
  {
    name: "toggle",
    description:
      'Ask for on or off; prints true or false (e.g. zellij prompt toggle "Enable CI" --default on)',
    args: { name: "MESSAGE", description: "The label", isOptional: true },
    options: promptAnswerOptions,
  },
  {
    name: "select",
    description:
      "Choose one value from a dropdown (e.g. zellij prompt select License MIT Apache-2.0)",
    args: [
      { name: "MESSAGE", description: "The label", isOptional: true },
      {
        name: "OPTIONS",
        description: "The options (e.g. MIT Apache-2.0)",
        isOptional: true,
        isVariadic: true,
      },
    ],
    options: promptAnswerOptions,
  },
  {
    name: "menu",
    description:
      "Show a menu and print the chosen item (e.g. zellij prompt menu Open Rename Delete)",
    args: {
      name: "ITEMS",
      description: "The menu items (e.g. Open Rename Delete)",
      isOptional: true,
      isVariadic: true,
    },
    options: [promptItemOption, ...promptAnswerOptions],
  },
  {
    name: "form",
    description:
      "Show several fields described in JSON and print one JSON object (e.g. zellij prompt form --spec form.json)",
    options: [
      {
        name: "--spec",
        description:
          "File with the form description; read from stdin when not given",
        args: { name: "SPEC", template: "filepaths" },
      },
      ...promptAnswerOptions,
    ],
  },
  {
    name: "notify",
    description:
      'Show a notice that does not take the keyboard and return at once with exit 0 (e.g. zellij prompt notify "Build finished" --timeout 5s)',
    args: {
      name: "MESSAGE",
      description: "The text to show; long text is wrapped",
      isOptional: true,
    },
    options: [
      {
        name: "--at",
        description: "Where to show it (e.g. --at bottom-right)",
        args: { name: "AT", suggestions: popupPlacements },
      },
      {
        name: "--no-pane-name",
        description:
          "Leave out the line with the name of the pane that sent the notice",
      },
      {
        name: "--no-tab-name",
        description:
          "Leave out the line with the tab name, shown when the pane that sent the notice is in another tab",
      },
    ],
  },
];

const pipeOptions: Fig.Option[] = [
  {
    name: ["-n", "--name"],
    description: "The name of the pipe",
    args: {
      name: "NAME",
    },
  },
  {
    name: ["-a", "--args"],
    description: "The args of the pipe",
    args: {
      name: "ARGS",
    },
  },
  {
    name: ["-p", "--plugin"],
    description:
      "The plugin url (eg. file:/tmp/my-plugin.wasm) to direct this pipe to, if not specified, will be sent to all plugins, if specified and is not running, the plugin will be launched",
    args: {
      name: "PLUGIN",
    },
  },
  pluginConfigurationOption(
    ["-c", "--plugin-configuration"],
    "The plugin configuration (note: the same plugin with different configuration is considered a different plugin for the purposes of determining the pipe destination)"
  ),
];

const pipePayloadArg: Fig.Arg = {
  name: "PAYLOAD",
  description:
    "The data to send down this pipe (if blank, will listen to STDIN)",
  isOptional: true,
};

const actionSubcommands: Fig.Subcommand[] = [
  {
    name: "write",
    description: "Write bytes to the terminal",
    args: { name: "BYTES", isVariadic: true },
    options: [paneIdOption()],
  },
  {
    name: "write-chars",
    description: "Write characters to the terminal",
    args: { name: "CHARS" },
    options: [paneIdOption()],
  },
  {
    name: "paste",
    description: "Paste text to the terminal (using bracketed paste mode)",
    args: { name: "CHARS" },
    options: [paneIdOption()],
  },
  {
    name: "send-keys",
    description:
      'Send one or more keys to the terminal (e.g., "Ctrl a", "F1", "Alt Shift b")',
    args: {
      name: "KEYS",
      description: "Keys to send as space-separated strings",
      isVariadic: true,
    },
    options: [paneIdOption()],
  },
  {
    name: "resize",
    description:
      "Increase or decrease the focused pane's area at the left, down, up or right border",
    args: [
      {
        name: "RESIZE",
        suggestions: ["increase", "decrease", "+", "-"],
      },
      {
        name: "DIRECTION",
        isOptional: true,
        suggestions: directions,
      },
    ],
    options: [paneIdOption()],
  },
  {
    name: "focus-next-pane",
    description: "Change focus to the next pane",
  },
  {
    name: "focus-previous-pane",
    description: "Change focus to the previous pane",
  },
  {
    name: "focus-pane-id",
    description: "Focus a specific pane by its ID",
    args: paneIdArg,
  },
  {
    name: "focus-last-pane",
    description: "Change focus to the last focused frame",
  },
  {
    name: "move-focus",
    description: "Move focus in the specified direction",
    args: { name: "DIRECTION", suggestions: directions },
  },
  {
    name: "move-focus-or-tab",
    description:
      "Move focus to the pane or tab (if on screen edge) in the specified direction",
    args: { name: "DIRECTION", suggestions: directions },
  },
  {
    name: "move-pane",
    description:
      "Change the location of the focused pane in the specified direction or rotate forwards",
    args: { name: "DIRECTION", isOptional: true, suggestions: directions },
    options: [paneIdOption()],
  },
  {
    name: "move-pane-backwards",
    description: "Rotate the location of the previous pane backwards",
    options: [paneIdOption()],
  },
  {
    name: "clear",
    description: "Clear all buffers for a focused pane",
    options: [paneIdOption()],
  },
  {
    name: "dump-screen",
    description:
      "Dump the viewport and optionally the scrollback of a pane to a file or STDOUT",
    options: [
      {
        name: "--path",
        description:
          "File path to dump the pane content to. If omitted, prints to STDOUT",
        args: { name: "PATH", template: "filepaths" },
      },
      {
        name: ["-f", "--full"],
        description: "Dump the pane with full scrollback",
      },
      paneIdOption(
        "The pane_id of the pane, eg. terminal_1, plugin_2 or 3 (equivalent to terminal_3). If not specified, dumps the focused pane"
      ),
      {
        name: ["-a", "--ansi"],
        description: "Preserve ANSI styling in the dump output",
      },
    ],
  },
  {
    name: "dump-layout",
    description: "Dump current layout to stdout",
  },
  {
    name: "save-session",
    description: "Save the current session state to disk immediately",
  },
  {
    name: "edit-scrollback",
    description: "Open the pane scrollback in your default editor",
    options: [
      paneIdOption(),
      {
        name: ["-a", "--ansi"],
        description: "Preserve ANSI styling in the scrollback dump",
      },
    ],
  },
  {
    name: "scroll-up",
    description: "Scroll up in the focused pane",
    options: [paneIdOption()],
  },
  {
    name: "scroll-down",
    description: "Scroll down in focus pane",
    options: [paneIdOption()],
  },
  {
    name: "scroll-to-bottom",
    description: "Scroll down to bottom in focus pane",
    options: [paneIdOption()],
  },
  {
    name: "scroll-to-top",
    description: "Scroll up to top in focus pane",
    options: [paneIdOption()],
  },
  {
    name: "page-scroll-up",
    description: "Scroll up one page in focus pane",
    options: [paneIdOption()],
  },
  {
    name: "page-scroll-down",
    description: "Scroll down one page in focus pane",
    options: [paneIdOption()],
  },
  {
    name: "half-page-scroll-up",
    description: "Scroll up half page in focus pane",
    options: [paneIdOption()],
  },
  {
    name: "half-page-scroll-down",
    description: "Scroll down half page in focus pane",
    options: [paneIdOption()],
  },
  {
    name: "toggle-fullscreen",
    description: "Toggle between fullscreen focus pane and normal layout",
    options: [paneIdOption()],
  },
  {
    name: "toggle-no-ui-fullscreen",
    description:
      "Toggle between fullscreen over the entire display (including the UI bars) and normal layout",
    options: [paneIdOption()],
  },
  {
    name: "toggle-pane-frames",
    description: "Toggle frames around panes in the UI",
  },
  {
    name: "toggle-stack-list-orientation",
    description:
      "Switch the focused stack between showing its titles in a column (vertical) and in a row (horizontal)",
    options: [
      paneIdOption(
        "Target the stack holding a specific pane by ID (eg. terminal_1, plugin_2, or 3)"
      ),
    ],
  },
  {
    name: "set-pane-frame-style",
    description: "Set the style of the pane frames",
    args: { name: "STYLE", suggestions: ["full", "titles", "none"] },
  },
  {
    name: "toggle-bars",
    description:
      "Show all bars if any are hidden, otherwise hide the named bars (all bars if none are named)",
    args: {
      name: "BARS",
      description:
        "Bars to hide, eg. tab-bar, status-bar, compact-bar, a plugin alias or location, or all",
      isOptional: true,
      isVariadic: true,
      suggestions: ["tab-bar", "status-bar", "compact-bar", "all"],
    },
  },
  {
    name: "hide-bars",
    description:
      "Hide the named bars (all bars if none are named) in every tab",
    args: {
      name: "BARS",
      description:
        "Bars to hide, eg. tab-bar, status-bar, compact-bar, a plugin alias or location, or all",
      isOptional: true,
      isVariadic: true,
      suggestions: ["tab-bar", "status-bar", "compact-bar", "all"],
    },
  },
  {
    name: "show-bars",
    description: "Show all hidden bars",
  },
  {
    name: "toggle-active-sync-tab",
    description:
      "Toggle between sending text commands to all panes on the current tab and normal mode",
    options: [tabIdOption],
  },
  {
    name: "new-pane",
    description:
      "Open a new pane in the specified direction (right or down), or in the biggest available space if none is given",
    args: {
      name: "COMMAND",
      description: "Command to run in the new pane",
      isOptional: true,
      isVariadic: true,
    },
    options: [
      directionOption,
      {
        name: ["-p", "--plugin"],
        description: "Open a plugin in the new pane instead of a command",
        args: { name: "PLUGIN" },
      },
      cwdOption("Change the working directory of the new pane"),
      floatingOption,
      inPlaceOption,
      closeReplacedPaneOption,
      {
        name: "--pane-id",
        description:
          "The pane to replace when opening in place, eg. terminal_1, plugin_2 or 3 (only effective with --in-place; defaults to the focused pane)",
        args: paneIdArg,
      },
      {
        name: ["-n", "--name"],
        description: "Name of the new pane",
        args: { name: "NAME" },
      },
      {
        name: ["-c", "--close-on-exit"],
        description: "Close the pane immediately when its command exits",
      },
      {
        name: ["-s", "--start-suspended"],
        description:
          "Start the command suspended, only running it after you first press ENTER",
      },
      notifyOption,
      pluginConfigurationOption("--configuration", "Plugin configuration"),
      {
        name: "--skip-plugin-cache",
        description:
          "Skip the memory and HD cache and force recompile of the plugin (good for development)",
      },
      ...floatingGeometryOptions,
      {
        name: "--stacked",
        description: "Open the new pane in a stack",
      },
      {
        name: ["-b", "--blocking"],
        description:
          "Block until the command has finished and its pane has been closed",
      },
      ...blockUntilOptions,
      nearCurrentPaneOption,
      noFocusOption("pane"),
      borderlessOption(false),
      tabIdLongOption,
      borderStyleOption,
    ],
  },
  {
    name: "edit",
    description:
      "Open the specified file in a new zellij pane with your default EDITOR",
    args: { name: "FILE", template: "filepaths" },
    options: [
      directionOption,
      {
        name: ["-l", "--line-number"],
        description: "Open the file in the specified line number",
        args: { name: "LINE_NUMBER" },
      },
      floatingOption,
      inPlaceOption,
      closeReplacedPaneOption,
      cwdOption("Change the working directory of the editor"),
      ...floatingGeometryOptions,
      nearCurrentPaneOption,
      noFocusOption("pane"),
      borderlessOption(true),
      tabIdLongOption,
      borderStyleOption,
    ],
  },
  {
    name: "switch-mode",
    description: "Switch input mode of all connected clients",
    args: { name: "INPUT_MODE", suggestions: inputModes },
  },
  {
    name: "toggle-pane-embed-or-floating",
    description:
      "Embed focused pane if floating or float focused pane if embedded",
    options: [paneIdOption()],
  },
  {
    name: "toggle-floating-panes",
    description:
      "Toggle the visibility of all floating panes in the current Tab, open one if none exist",
    options: [tabIdOption],
  },
  {
    name: "show-floating-panes",
    description:
      "Show all floating panes in the specified tab (or the active tab if no tab ID is given)",
    options: [tabIdOption],
  },
  {
    name: "hide-floating-panes",
    description:
      "Hide all floating panes in the specified tab (or the active tab if no tab ID is given)",
    options: [tabIdOption],
  },
  {
    name: "are-floating-panes-visible",
    description:
      "Check if floating panes are visible in the specified tab (or active tab)",
    options: [tabIdOption],
  },
  {
    name: "close-pane",
    description: "Close the focused pane",
    options: [paneIdOption()],
  },
  {
    name: "rename-pane",
    description: "Rename the focused pane",
    args: { name: "NAME" },
    options: [paneIdOption()],
  },
  {
    name: "undo-rename-pane",
    description: "Remove a previously set pane name",
    options: [paneIdOption()],
  },
  {
    name: "go-to-next-tab",
    description: "Go to the next tab",
  },
  {
    name: "go-to-previous-tab",
    description: "Go to the previous tab",
  },
  {
    name: "close-tab",
    description: "Close the current tab",
    options: [tabIdOption],
  },
  {
    name: "go-to-tab",
    description: "Go to tab with index [index]",
    args: { name: "INDEX" },
  },
  {
    name: "go-to-tab-name",
    description: "Go to tab with name [name]",
    args: { name: "NAME" },
    options: [
      {
        name: ["-c", "--create"],
        description: "Create a tab if one does not exist",
      },
    ],
  },
  {
    name: "rename-tab",
    description: "Rename the focused tab",
    args: { name: "NAME" },
    options: [tabIdOption],
  },
  {
    name: "undo-rename-tab",
    description: "Remove a previously set tab name",
    options: [tabIdOption],
  },
  {
    name: "go-to-tab-by-id",
    description: "Go to tab with stable ID",
    args: tabIdArg,
  },
  {
    name: "close-tab-by-id",
    description: "Close tab with stable ID",
    args: tabIdArg,
  },
  {
    name: "rename-tab-by-id",
    description: "Rename tab by stable ID",
    args: [tabIdArg, { name: "NAME" }],
  },
  {
    name: "new-tab",
    description:
      "Create a new tab, optionally with a specified tab layout and name",
    args: {
      name: "INITIAL_COMMAND",
      description: "Optional initial command to run in the new tab",
      isOptional: true,
      isVariadic: true,
    },
    options: [
      {
        name: ["-l", "--layout"],
        description: "Layout to use for the new tab",
        args: { name: "LAYOUT", template: "filepaths" },
      },
      layoutStringOption(
        "Raw KDL layout string to use directly (instead of a layout file path)"
      ),
      layoutDirOption,
      {
        name: ["-n", "--name"],
        description: "Name of the new tab",
        args: { name: "NAME" },
      },
      {
        name: ["-c", "--cwd"],
        description: "Change the working directory of the new tab",
        args: { name: "CWD", template: "folders" },
      },
      {
        name: "--initial-plugin",
        description: "Initial plugin to load in the new tab",
        args: { name: "INITIAL_PLUGIN" },
      },
      {
        name: "--close-on-exit",
        description: "Close the pane immediately when its command exits",
      },
      {
        name: "--start-suspended",
        description:
          "Start the command suspended, only running it after you first press ENTER",
      },
      ...blockUntilOptions,
      {
        name: "--no-focus",
        description:
          "If set, will create the tab without changing the focus of any client",
      },
    ],
  },
  {
    name: "move-tab",
    description: "Move the focused tab in the specified direction",
    args: { name: "DIRECTION", suggestions: ["right", "left"] },
    options: [tabIdOption],
  },
  {
    name: "previous-swap-layout",
    description: "Swap to the previous layout",
    options: [tabIdOption],
  },
  {
    name: "next-swap-layout",
    description: "Swap to the next layout",
    options: [tabIdOption],
  },
  {
    name: "apply-tiled-swap-layout",
    description:
      "Apply the tiled swap layout with the given name, leaving floating pane visibility and focus untouched",
    args: {
      name: "NAME",
      description:
        "The name of the tiled swap layout, as declared in the layout file",
    },
    options: [tabIdOption],
  },
  {
    name: "apply-floating-swap-layout",
    description:
      "Apply the floating swap layout with the given name, leaving floating pane visibility and focus untouched",
    args: {
      name: "NAME",
      description:
        "The name of the floating swap layout, as declared in the layout file",
    },
    options: [tabIdOption],
  },
  {
    name: "override-layout",
    description: "Override the layout of the active tab",
    args: {
      name: "LAYOUT",
      description: "Path to the layout file",
      isOptional: true,
      template: "filepaths",
    },
    options: [
      layoutStringOption(
        "Raw KDL layout string to use directly (instead of a layout file path)"
      ),
      layoutDirOption,
      {
        name: "--retain-existing-terminal-panes",
        description:
          "Retain existing terminal panes that do not fit in the layout (default: false)",
      },
      {
        name: "--retain-existing-plugin-panes",
        description:
          "Retain existing plugin panes that do not fit with the layout (default: false)",
      },
      {
        name: "--apply-only-to-active-tab",
        description:
          "Only apply the layout to the active tab (uses just the first layout tab if it has multiple)",
      },
    ],
  },
  {
    name: "query-tab-names",
    description: "Query all tab names",
  },
  {
    name: "start-or-reload-plugin",
    description: "Start or reload a plugin",
    args: { name: "URL" },
    options: [
      pluginConfigurationOption(
        ["-c", "--configuration"],
        "Plugin configuration"
      ),
    ],
  },
  {
    name: "launch-or-focus-plugin",
    description: "Launch or focus a plugin",
    args: { name: "URL" },
    options: [
      {
        name: ["-f", "--floating"],
        description: "Open the plugin in floating mode",
      },
      {
        name: ["-i", "--in-place"],
        description:
          "Open the plugin in place of the current pane, temporarily suspending it",
      },
      closeReplacedPaneOption,
      {
        name: ["-m", "--move-to-focused-tab"],
        description:
          "Move the plugin to the focused tab if it is already running",
      },
      pluginConfigurationOption(
        ["-c", "--configuration"],
        "Plugin configuration"
      ),
      {
        name: ["-s", "--skip-plugin-cache"],
        description:
          "Skip the memory and HD cache and force recompile of the plugin (good for development)",
      },
      tabIdLongOption,
    ],
  },
  {
    name: "launch-plugin",
    description: "Launch a plugin",
    args: { name: "URL" },
    options: [
      {
        name: ["-f", "--floating"],
        description: "Open the plugin in floating mode",
      },
      {
        name: ["-i", "--in-place"],
        description:
          "Open the plugin in place of the current pane, temporarily suspending it",
      },
      closeReplacedPaneOption,
      pluginConfigurationOption(
        ["-c", "--configuration"],
        "Plugin configuration"
      ),
      {
        name: ["-s", "--skip-plugin-cache"],
        description:
          "Skip the memory and HD cache and force recompile of the plugin (good for development)",
      },
      {
        name: "--no-focus",
        description:
          "If set, will open the plugin pane without changing the focus of any client",
      },
      tabIdLongOption,
    ],
  },
  {
    name: "rename-session",
    description: "Rename the current session",
    args: { name: "NAME" },
  },
  {
    name: "pipe",
    description:
      "Send data to one or more plugins, launch them if they are not running",
    args: pipePayloadArg,
    options: [
      ...pipeOptions,
      {
        name: ["-l", "--force-launch-plugin"],
        description: "Launch a new plugin even if one is already running",
      },
      {
        name: ["-s", "--skip-plugin-cache"],
        description:
          "If launching a new plugin, skip cache and force-compile the plugin",
      },
      {
        name: ["-f", "--floating-plugin"],
        description:
          "If launching a plugin, should it be floating or not, defaults to floating",
        args: boolArg("FLOATING_PLUGIN"),
      },
      {
        name: ["-i", "--in-place-plugin"],
        description:
          "If launching a plugin, launch it in-place (on top of the current pane)",
        args: boolArg("IN_PLACE_PLUGIN"),
      },
      {
        name: ["-w", "--plugin-cwd"],
        description: "If launching a plugin, specify its working directory",
        args: { name: "PLUGIN_CWD", template: "folders" },
      },
      {
        name: ["-t", "--plugin-title"],
        description: "If launching a plugin, specify its pane title",
        args: { name: "PLUGIN_TITLE" },
      },
      {
        name: "--popup",
        description:
          "If launching a plugin, open it as a popup for the user looking at the calling pane",
        args: { name: "POPUP", suggestions: popupPlacements },
      },
      {
        name: "--popup-no-focus",
        description:
          "Open the --popup as an information popup that does not take key focus (e.g. --popup top-right --popup-no-focus)",
      },
      {
        name: "--popup-capture-all-keys",
        description:
          "Send every key to the --popup, including the ones bound to Zellij actions (e.g. --popup center --popup-capture-all-keys)",
      },
      {
        name: "--popup-outside-click",
        description:
          "What a click outside the --popup does: block (ignore it) or close (close the popup)",
        args: { name: "POPUP_OUTSIDE_CLICK", suggestions: ["block", "close"] },
      },
    ],
  },
  {
    name: "list-clients",
    description: "List connected clients",
  },
  {
    name: "list-panes",
    description: "List all panes in the current session",
    options: [
      {
        name: ["-t", "--tab"],
        description: "Include tab information (name, position, ID)",
      },
      {
        name: ["-c", "--command"],
        description: "Include running command information",
      },
      {
        name: ["-s", "--state"],
        description: "Include pane state (focused, floating, exited, etc.)",
      },
      {
        name: ["-g", "--geometry"],
        description: "Include geometry (position, size)",
      },
      allOption,
      jsonOption("Output as JSON"),
    ],
  },
  {
    name: "list-tabs",
    description: "List all tabs with their information",
    options: [
      {
        name: ["-s", "--state"],
        description:
          "Include state information (active, fullscreen, sync, floating visibility)",
      },
      {
        name: ["-d", "--dimensions"],
        description: "Include dimension information (viewport, display area)",
      },
      {
        name: ["-p", "--panes"],
        description: "Include pane counts",
      },
      {
        name: ["-l", "--layout"],
        description:
          "Include layout information (swap layout name and dirty state)",
      },
      allOption,
      jsonOption("Output as JSON"),
    ],
  },
  {
    name: "current-tab-info",
    description: "Get information about the currently active tab",
    options: [jsonOption("Output as JSON with full TabInfo")],
  },
  {
    name: "toggle-pane-pinned",
    description:
      "Toggle whether a floating pane is pinned so that it is always on top",
    options: [paneIdOption()],
  },
  {
    name: "toggle-mirror-resize",
    description:
      "Toggle whether the live view in the focused plugin pane resizes the program of the pane it shows",
  },
  {
    name: "mute-pane",
    description:
      "Mute or unmute the attention status of a pane (the focused pane by default)",
    options: [
      paneIdOption("Target a specific pane by ID (eg. terminal_1 or 3)"),
    ],
  },
  {
    name: "ignore-pane-output",
    description:
      "Stop or start reporting new output of a pane (the focused pane by default)",
    options: [
      paneIdOption("Target a specific pane by ID (eg. terminal_1 or 3)"),
    ],
  },
  {
    name: "watch-pane",
    description:
      "Watch a pane: notify each time its command finishes or its output goes quiet, until turned off again (toggles; the focused pane by default)",
    options: [
      paneIdOption("Target a specific pane by ID (eg. terminal_1 or 3)"),
    ],
  },
  {
    name: "mute-tab",
    description:
      "Mute or unmute the attention status of all panes in a tab (the active tab by default)",
    options: [
      {
        name: ["-t", "--tab-id"],
        description: "Target a specific tab by its ID",
        args: tabIdArg,
      },
    ],
  },
  {
    name: "mute-session",
    description: "Mute or unmute the attention status of the whole session",
  },
  {
    name: "toggle-session",
    description:
      "Switch to the session this client was in before (run again to return), or to the next running session if there is none",
  },
  {
    name: "go-to-previous-session",
    description: "Go back to the previous session in this client's history",
  },
  {
    name: "go-to-next-session",
    description: "Go forward in this client's session history",
  },
  {
    name: "go-to-next-attention",
    description:
      "Jump to the next pane that needs attention in any session, switching session if needed",
  },
  {
    name: "toggle-tray-icon",
    description:
      "Show or hide the desktop app's tray / menu-bar icon until the app restarts (sessions and notifications continue)",
  },
  {
    name: "mark-pane-seen",
    description:
      "Mark a pane as seen, clearing past events (the focused pane by default)",
    options: [
      paneIdOption("Target a specific pane by ID (eg. terminal_1 or 3)"),
    ],
  },
  {
    name: "mark-all-seen",
    description: "Mark every pane of every running session as seen",
    options: [
      {
        name: "--this-session",
        description: "Only mark the panes of the current session",
      },
    ],
  },
  {
    name: "stack-panes",
    description:
      "Stack pane ids (terminal_<int>, plugin_<int> or bare integers, which are considered terminals)",
    args: {
      name: "PANE_IDS",
      description: "Space separated list of pane ids, given after --",
      isVariadic: true,
      generators: generatePaneIds,
    },
  },
  {
    name: "change-floating-pane-coordinates",
    description:
      "Change the coordinates and other properties of a floating pane",
    options: [
      {
        name: ["-p", "--pane-id"],
        description:
          "The pane_id of the floating pane, eg. terminal_1, plugin_2 or 3 (equivalent to terminal_3)",
        isRequired: true,
        args: paneIdArg,
      },
      ...floatingGeometryOptions,
      {
        name: ["-b", "--borderless"],
        description:
          "Change this pane to be with/without a border (warning: will make it impossible to move with the mouse if without a border)",
        args: boolArg("BORDERLESS"),
      },
      borderStyleOption,
    ],
  },
  {
    name: "toggle-pane-borderless",
    description: "Toggle whether a pane has a border",
    options: [
      {
        name: ["-p", "--pane-id"],
        description:
          "The pane_id of the pane, eg. terminal_1, plugin_2 or 3 (equivalent to terminal_3)",
        isRequired: true,
        args: paneIdArg,
      },
    ],
  },
  {
    name: "set-pane-borderless",
    description: "Set whether a pane has a border",
    options: [
      {
        name: ["-p", "--pane-id"],
        description:
          "The pane_id of the pane, eg. terminal_1, plugin_2 or 3 (equivalent to terminal_3)",
        isRequired: true,
        args: paneIdArg,
      },
      {
        name: ["-b", "--borderless"],
        description:
          "Whether the pane should be borderless (flag present) or bordered (flag absent)",
      },
    ],
  },
  {
    name: "set-pane-border-style",
    description: "Change the border line style of an existing pane",
    options: [
      {
        name: ["-p", "--pane-id"],
        description:
          "The pane_id of the pane, eg. terminal_1, plugin_2 or 3 (equivalent to terminal_3)",
        isRequired: true,
        args: paneIdArg,
      },
      borderStyleOption,
    ],
  },
  {
    name: "detach",
    description: "Detach from the current session",
  },
  {
    name: "set-dark-theme",
    description: "Switch the theme to dark (uses configured `theme_dark`)",
  },
  {
    name: "set-light-theme",
    description: "Switch the theme to light (uses configured `theme_light`)",
  },
  {
    name: "toggle-theme",
    description:
      "Toggle between dark and light themes (uses configured `theme_dark` and `theme_light`)",
  },
  {
    name: "dismiss-info-popups",
    description:
      "Close the information popups (such as `zellij prompt notify`) shown to you",
  },
  {
    name: "open-context-menu",
    description:
      "Open the right-click menu for the focused pane, at that pane's position",
  },
  {
    name: "switch-session",
    description: "Switch to a different session",
    args: {
      name: "NAME",
      description: "Name of the session to switch to",
      generators: generateSessions,
    },
    options: [
      {
        name: "--tab-position",
        description: "Optional tab position to focus",
        args: { name: "TAB_POSITION" },
      },
      {
        name: "--pane-id",
        description:
          'Optional pane ID to focus (eg. "terminal_1" for terminal pane with id 1, or "plugin_2" for plugin pane with id 2)',
        args: { name: "PANE_ID" },
      },
      {
        name: ["-l", "--layout"],
        description:
          "Layout to apply when switching to the session (relative paths start at layout-dir)",
        args: { name: "LAYOUT", template: "filepaths" },
      },
      layoutStringOption("Raw KDL layout string to use directly"),
      layoutDirOption,
      {
        name: ["-c", "--cwd"],
        description: "Change the working directory when switching",
        args: { name: "CWD", template: "folders" },
      },
      {
        name: "--close-current",
        description:
          "Close the current session after switching, if no command has been run in it and no other client is attached",
      },
    ],
  },
  {
    name: "set-pane-color",
    description: "Set the default foreground/background color of a pane",
    options: [
      paneIdOption(
        "The pane_id of the pane, eg. terminal_1, plugin_2 or 3 (equivalent to terminal_3). Defaults to $ZELLIJ_PANE_ID if not provided"
      ),
      {
        name: "--fg",
        description: 'Foreground color (e.g. "#00e000", "rgb:00/e0/00")',
        args: { name: "FG" },
      },
      {
        name: "--bg",
        description: 'Background color (e.g. "#001a3a", "rgb:00/1a/3a")',
        args: { name: "BG" },
      },
      {
        name: "--reset",
        description: "Reset pane colors to terminal defaults",
        exclusiveOn: ["--fg", "--bg"],
      },
    ],
  },
  {
    name: "set-resurrect-command",
    description:
      "Set the command a terminal pane will be resurrected with, instead of the detected one, until cleared with --clear or until the pane is closed",
    args: {
      name: "COMMAND",
      description: "The command and its arguments, given after --",
      isOptional: true,
      isVariadic: true,
    },
    options: [
      paneIdOption(
        "The pane_id of the terminal pane, eg. terminal_1 or 3 (equivalent to terminal_3). Defaults to $ZELLIJ_PANE_ID if not provided"
      ),
      {
        name: "--cwd",
        description: "Working directory to resurrect the pane in",
        args: { name: "CWD", template: "folders" },
        exclusiveOn: ["--clear"],
      },
      {
        name: "--clear",
        description: "Remove a previously set resurrect command",
      },
    ],
  },
  {
    name: "help",
    description: "Print this message or the help of the given subcommand(s)",
  },
];

const subcommands: Fig.Subcommand[] = [
  optionsSubcommand,
  {
    name: "setup",
    description: "Setup zellij and check its configuration",
    options: [
      {
        name: "--check",
        description:
          "Checks the configuration of zellij and displays currently used directories",
      },
      {
        name: "--clean",
        description:
          "Disables loading of configuration file at default location, loads the defaults that zellij ships with",
      },
      {
        name: "--copy-to-permanent-folder",
        description:
          "Copy this Zellij to a permanent folder, or update an older Zellij that is already installed, as the setup screen does",
      },
      {
        name: "--dump-config",
        description: "Dump the default configuration file to stdout",
      },
      {
        name: "--dump-keybinds",
        description: "Dump the specified keybinding preset to stdout",
        args: {
          name: "PRESET",
          suggestions: keybindPresets,
        },
      },
      {
        name: "--dump-layout",
        description: "Dump specified layout to stdout",
        args: {
          name: "DUMP_LAYOUT",
        },
      },
      {
        name: "--dump-plugins",
        description:
          "Dump the builtin plugins to DIR or 'DATA DIR' if unspecified",
        args: {
          name: "DIR",
          isOptional: true,
          template: "folders",
        },
      },
      {
        name: "--dump-swap-layout",
        description: "Dump the specified swap layout file to stdout",
        args: {
          name: "DUMP_SWAP_LAYOUT",
        },
      },
      {
        name: "--generate-auto-start",
        description: "Generates auto-start script for the specified shell",
        args: {
          name: "SHELL",
          suggestions: ["bash", "fish", "zsh"],
        },
      },
      {
        name: "--generate-completion",
        description: "Generates completion for the specified shell",
        args: {
          name: "SHELL",
          suggestions: shells,
        },
      },
      {
        name: "--install-desktop-entry",
        description:
          'Install the desktop entry, as the setup screen does: a launcher and icons on Linux, a Start menu shortcut and an "Open Zellij here" Explorer item on Windows',
      },
      {
        name: "--keybinding-preset",
        description:
          'Choose the keybinding preset (for example "unlock-first") and save it to the config file',
        args: {
          name: "PRESET",
          suggestions: keybindPresets,
        },
      },
      {
        name: "--make-default-terminal",
        description:
          "Make Zellij the default terminal, installing the desktop entry if it is missing, as the setup screen does",
      },
      {
        name: "--replace-existing",
        description:
          "Replace a different file that is in the way of --copy-to-permanent-folder",
      },
      {
        name: "--uninstall-desktop-entry",
        description:
          "Remove the desktop entry Zellij installed, as the setup screen's Uninstall button does",
      },
    ],
  },
  {
    name: "web",
    description: "Run a web server to serve terminal sessions",
    options: [
      {
        name: "--start",
        description:
          "Start the server (default unless other arguments are specified)",
      },
      {
        name: "--stop",
        description: "Stop the server",
      },
      {
        name: "--status",
        description: "Get the server status",
      },
      {
        name: "--timeout",
        description: "Timeout in seconds for the status check (default: 30)",
        args: { name: "TIMEOUT" },
      },
      {
        name: ["-d", "--daemonize"],
        description: "Run the server in the background",
      },
      {
        name: "--server-startup-timeout",
        description:
          "Timeout in seconds waiting for the server to start (default: 10), only used on Windows",
        args: { name: "SERVER_STARTUP_TIMEOUT" },
      },
      {
        name: "--create-token",
        description:
          "Create a login token for the web interface, will only be displayed once and cannot later be retrieved. Returns the token name and the token",
      },
      {
        name: "--token-name",
        description: "Optional name for the token",
        args: { name: "TOKEN_NAME" },
      },
      {
        name: "--create-read-only-token",
        description:
          "Create a read-only login token (can only attach to existing sessions as watcher)",
      },
      {
        name: "--revoke-token",
        description: "Revoke a login token by its name",
        args: { name: "TOKEN_NAME" },
      },
      {
        name: "--revoke-all-tokens",
        description: "Revoke all login tokens",
      },
      {
        name: "--list-tokens",
        description:
          "List token names and their creation dates (cannot show actual tokens)",
      },
      {
        name: "--ip",
        description:
          "The ip address to listen on locally for connections (defaults to 127.0.0.1)",
        args: { name: "IP" },
      },
      {
        name: "--port",
        description:
          "The port to listen on locally for connections (defaults to 8082)",
        args: { name: "PORT" },
      },
      {
        name: "--cert",
        description:
          "The path to the SSL certificate (required if not listening on 127.0.0.1)",
        args: { name: "CERT", template: "filepaths" },
      },
      {
        name: "--key",
        description:
          "The path to the SSL key (required if not listening on 127.0.0.1)",
        args: { name: "KEY", template: "filepaths" },
      },
    ],
  },
  {
    name: ["action", "ac"],
    description: "Send actions to a specific session",
    subcommands: actionSubcommands,
  },
  {
    name: ["list-sessions", "ls"],
    description: "List active sessions",
    options: [
      {
        name: ["-n", "--no-formatting"],
        description:
          "Do not add colors and formatting to the list (useful for parsing)",
      },
      {
        name: ["-r", "--reverse"],
        description:
          "List the sessions in reverse order (default is ascending order)",
      },
      {
        name: ["-s", "--short"],
        description: "Print just the session name",
      },
    ],
  },
  {
    name: ["list-aliases", "la"],
    description: "List existing plugin aliases",
  },
  {
    name: ["attach", "a"],
    description: "Attach to a session",
    options: [
      {
        name: ["-b", "--create-background"],
        description:
          "Create a detached session in the background if one does not exist",
      },
      ...attachOptions,
    ],
    subcommands: [optionsSubcommand],
    args: attachArgs,
  },
  {
    name: ["watch", "w"],
    description: "Watch a session (read-only)",
    args: {
      name: "SESSION_NAME",
      description: "Name of the session to watch",
      isOptional: true,
      generators: generateSessions,
    },
  },
  {
    name: ["kill-session", "k"],
    description: "Kill a specific session",
    args: {
      name: "TARGET_SESSION",
      description: "Name of the session to kill",
      isOptional: true,
      generators: generateSessions,
    },
  },
  {
    name: ["delete-session", "d"],
    description: "Delete a specific session",
    options: [
      {
        name: ["-f", "--force"],
        description: "Kill the session if it's running before deleting it",
      },
    ],
    args: {
      name: "TARGET_SESSION",
      description: "Name of the session to delete",
      isOptional: true,
      generators: generateSessions,
    },
  },
  {
    name: ["kill-all-sessions", "ka"],
    description: "Kill all sessions",
    options: [
      {
        name: ["-y", "--yes"],
        description: "Automatic yes to prompts",
      },
    ],
  },
  {
    name: ["delete-all-sessions", "da"],
    description: "Delete all sessions",
    options: [
      {
        name: ["-y", "--yes"],
        description: "Automatic yes to prompts",
      },
      {
        name: ["-f", "--force"],
        description:
          "Kill the sessions if they're running before deleting them",
      },
    ],
  },
  {
    name: ["run", "r"],
    description: "Run a command in a new pane",
    args: {
      name: "COMMAND",
      description: "Command to run, given after --",
      isVariadic: true,
    },
    options: [
      directionOption,
      cwdOption("Change the working directory of the new pane"),
      floatingOption,
      inPlaceOption,
      closeReplacedPaneOption,
      {
        name: ["-n", "--name"],
        description: "Name of the new pane",
        args: { name: "NAME" },
      },
      {
        name: ["-c", "--close-on-exit"],
        description: "Close the pane immediately when its command exits",
      },
      {
        name: ["-s", "--start-suspended"],
        description:
          "Start the command suspended, only running after you first press ENTER",
      },
      notifyOption,
      ...floatingGeometryOptions,
      {
        name: "--stacked",
        description: "Open the new pane in a stack",
      },
      {
        name: "--blocking",
        description:
          "Block until the command has finished and its pane has been closed",
      },
      ...blockUntilOptions,
      nearCurrentPaneOption,
      noFocusOption("pane"),
      borderlessOption(true),
      tabIdLongOption,
      borderStyleOption,
    ],
  },
  {
    name: ["plugin", "p"],
    description: "Load a plugin",
    args: {
      name: "URL",
      description:
        "Plugin URL, can either start with http(s), file: or zellij:",
    },
    options: [
      pluginConfigurationOption(
        ["-c", "--configuration"],
        "Plugin configuration"
      ),
      floatingOption,
      inPlaceOption,
      closeReplacedPaneOption,
      {
        name: ["-s", "--skip-plugin-cache"],
        description:
          "Skip the memory and HD cache and force recompile of the plugin (good for development)",
      },
      ...floatingGeometryOptions,
      noFocusOption("plugin pane"),
      borderlessOption(true),
      tabIdLongOption,
      borderStyleOption,
    ],
  },
  {
    name: ["edit", "e"],
    description: "Edit file with default $EDITOR / $VISUAL",
    args: {
      name: "FILE",
      template: "filepaths",
    },
    options: [
      {
        name: ["-l", "--line-number"],
        description: "Open the file in the specified line number",
        args: { name: "LINE_NUMBER" },
      },
      directionOption,
      inPlaceOption,
      closeReplacedPaneOption,
      floatingOption,
      cwdOption("Change the working directory of the editor"),
      ...floatingGeometryOptions,
      nearCurrentPaneOption,
      noFocusOption("pane"),
      borderlessOption(true),
      tabIdLongOption,
      borderStyleOption,
    ],
  },
  {
    name: "pipe",
    description:
      "Send data to one or more plugins, launch them if they are not running",
    args: pipePayloadArg,
    options: pipeOptions,
  },
  {
    name: "subscribe",
    description: "Subscribe to pane render updates (viewport and scrollback)",
    options: [
      {
        name: ["-p", "--pane-id"],
        description:
          "Pane ID(s) to subscribe to (e.g. terminal_1, plugin_2, or bare number like 1)",
        isRequired: true,
        args: { ...paneIdArg, isVariadic: true },
      },
      {
        name: ["-s", "--scrollback"],
        description:
          "Include scrollback lines in initial delivery (bare --scrollback = all scrollback, --scrollback N = last N lines)",
        args: { name: "LINES", isOptional: true },
      },
      {
        name: ["-f", "--format"],
        description: "Output format (default: raw)",
        args: { name: "FORMAT", suggestions: ["raw", "json"] },
      },
      {
        name: "--ansi",
        description: "Preserve ANSI styling in the output",
      },
    ],
  },
  {
    name: "prompt",
    description:
      'Show a UI element to the person at the terminal and print their answer (e.g. zellij prompt confirm "Deploy?")',
    options: [
      {
        name: "--title",
        description: 'Title shown at the top of the popup (e.g. --title "Git")',
        isPersistent: true,
        args: { name: "TITLE" },
      },
      {
        name: "--timeout",
        description:
          "How long the popup stays open; an unanswered prompt then exits 124 and a notice just closes (e.g. --timeout 30s)",
        isPersistent: true,
        args: { name: "TIMEOUT" },
      },
    ],
    subcommands: promptSubcommands,
  },
  {
    name: "terminal",
    description:
      "Open a session in the Zellij terminal, without another terminal emulator",
    options: [
      ...attachOptions,
      {
        name: "--watch",
        description:
          "Follow the screen of the session's first client, read-only",
      },
      {
        name: "--startup-mode",
        description:
          "Open the window windowed, maximized, fullscreen, or the way the last one was closed (remember), overriding startup_mode in the terminal section of the configuration",
        args: {
          name: "MODE",
          suggestions: ["windowed", "maximized", "fullscreen", "remember"],
        },
      },
      {
        name: "--standalone",
        description:
          "Open this window on its own instead of handing it to the running desktop app (no tray, no notifications from this process)",
      },
      {
        name: "--socket-dir",
        description:
          "Use this folder for session sockets instead of the default, so this window, its desktop app and its sessions are separate from every other Zellij (same as setting ZELLIJ_SOCKET_DIR)",
        args: { name: "PATH", template: "folders" },
      },
      {
        name: "--inbox",
        description:
          "Show or hide the inbox panel of the running desktop app (starting it if needed), for a desktop keyboard shortcut",
      },
      {
        name: "--sessions",
        description:
          "Show or hide the sessions panel of the running desktop app (starting it if needed), for a desktop keyboard shortcut",
      },
      {
        name: "-e",
        description:
          "Run this command (and every argument after it) as the first pane, close the pane when it exits, and wait for it, exiting with its exit code (as terminal emulators do)",
        args: { name: "COMMAND", isVariadic: true },
      },
      {
        name: "--working-directory",
        description: "Start in this folder instead of the current one",
        args: { name: "DIR", template: "folders" },
      },
      {
        name: "--hold",
        description:
          "Keep the command's pane open after the command exits, showing its output (requires a command)",
      },
      {
        name: "--background",
        description: "Start the desktop app without opening a window",
        hidden: true,
      },
      {
        name: "--headless",
        description:
          "Render nothing and open no window; for fixture capture and debugging",
        hidden: true,
      },
      {
        name: "--record",
        description: "Record the received message stream to a fixture file",
        hidden: true,
        args: { name: "PATH", template: "filepaths" },
      },
      {
        name: "--rows",
        description: "Rows to advertise while headless",
        hidden: true,
        args: { name: "ROWS" },
      },
      {
        name: "--cols",
        description: "Columns to advertise while headless",
        hidden: true,
        args: { name: "COLS" },
      },
      {
        name: "--cell-width",
        description:
          "Character cell width in pixels to advertise while headless",
        hidden: true,
        args: { name: "CELL_WIDTH" },
      },
      {
        name: "--cell-height",
        description:
          "Character cell height in pixels to advertise while headless",
        hidden: true,
        args: { name: "CELL_HEIGHT" },
      },
      {
        name: "--duration-secs",
        description: "Detach after this many seconds",
        hidden: true,
        args: { name: "SECONDS" },
      },
    ],
    subcommands: [optionsSubcommand],
    args: attachArgs,
  },
  {
    name: "help",
    description: "Print this message or the help of the given subcommand(s)",
  },
];

const completion: Fig.Spec = {
  name: "zellij",
  description: "A terminal workspace with batteries included",
  options: option,
  subcommands: subcommands,
};

export default completion;
