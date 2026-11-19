// fzf v0.75.0 (GitHub tag junegunn/fzf v0.75.0, same as the Homebrew formula, 2026-11-19).
// Source: static read of man/man1/fzf.1, the usage text and option parser in src/options.go, and shell/completion.bash at that tag. The binary was not run.
// Undocumented and internal flags (--proxy-script, --force-tty-in, --profile-*, legacy aliases such as --inline-info) are left out.

const borderStyles = [
  "rounded",
  "sharp",
  "bold",
  "block",
  "thinblock",
  "double",
  "dashed",
  "horizontal",
  "vertical",
  "top",
  "bottom",
  "left",
  "right",
  "line",
  "none",
];

// The list border does not support the "line" style
const listBorderStyles = borderStyles.filter((style) => style !== "line");

// Header, header lines and footer borders can also be embedded in the list border
const embeddableBorderStyles = [...borderStyles, "inline"];

const borderOption = (
  name: string,
  description: string,
  styles: string[],
  defaultStyle = "rounded"
): Fig.Option => ({
  name,
  description,
  args: {
    name: "style",
    isOptional: true,
    default: defaultStyle,
    suggestions: styles,
  },
});

const labelOptions = (prefix: string, target: string): Fig.Option[] => [
  {
    name: `--${prefix}-label`,
    description: `Label to print on the ${target}`,
    args: {
      name: "label",
    },
  },
  {
    name: `--${prefix}-label-pos`,
    description: `Position of the ${prefix} label`,
    args: {
      name: "position",
      description:
        "Positive column from the left or negative column from the right, optionally followed by :bottom",
      suggestions: ["center", "top", "bottom"],
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "fzf",
  description: "A general-purpose command-line fuzzy finder",
  options: [
    // Search
    {
      name: ["-x", "--extended"],
      description: "Enable extended-search mode (default)",
      exclusiveOn: ["+x", "--no-extended"],
    },
    {
      name: ["+x", "--no-extended"],
      description: "Disable extended-search mode",
      exclusiveOn: ["-x", "--extended"],
    },
    {
      name: ["-e", "--exact"],
      description: "Enable exact-match",
    },
    {
      name: "--algo",
      description: "Fuzzy matching algorithm",
      args: {
        name: "type",
        default: "v2",
        suggestions: [
          {
            name: "v2",
            description: "Optimal scoring algorithm (quality)",
          },
          {
            name: "v1",
            description:
              "Faster but not guaranteed to find the optimal result (performance)",
          },
        ],
      },
    },
    {
      name: ["-i", "--ignore-case"],
      description: "Case-insensitive match (default: smart-case match)",
      exclusiveOn: ["+i", "--no-ignore-case", "--smart-case"],
    },
    {
      name: ["+i", "--no-ignore-case"],
      description: "Case-sensitive match (default: smart-case match)",
      exclusiveOn: ["-i", "--ignore-case", "--smart-case"],
    },
    {
      name: "--smart-case",
      description:
        "Smart-case match, case-insensitive unless the query has uppercase letters (default)",
      exclusiveOn: ["-i", "--ignore-case", "+i", "--no-ignore-case"],
    },
    {
      name: "--literal",
      description: "Do not normalize latin script letters before matching",
    },
    {
      name: "--scheme",
      description: "Scoring scheme tailored for different types of input",
      args: {
        name: "scheme",
        suggestions: [
          {
            name: "default",
            description: "Generic scheme that works well with any input",
          },
          {
            name: "path",
            description:
              "Bonus only for characters after a path separator, with --tiebreak=pathname,length",
          },
          {
            name: "history",
            description:
              "No bonus points, favors chronological order, with --tiebreak=index",
          },
        ],
      },
    },
    {
      name: ["-n", "--nth"],
      description:
        "Comma-separated list of field index expressions for limiting search scope",
      args: {
        name: "index expressions",
        description: "Non-zero integer or range expression ([BEGIN]..[END])",
      },
    },
    {
      name: "--with-nth",
      description:
        "Transform the presentation of each line using field index expressions or a template",
      args: {
        name: "index expressions or template",
        description:
          "Non-zero integer, range expression ([BEGIN]..[END]), or a template with {N} expressions",
      },
    },
    {
      name: "--accept-nth",
      description:
        "Define which fields to print on accept using field index expressions or a template",
      args: {
        name: "index expressions or template",
        description:
          "Non-zero integer, range expression ([BEGIN]..[END]), or a template with {N} expressions",
      },
    },
    {
      name: ["-d", "--delimiter"],
      description: "Field delimiter regex (default: AWK-style)",
      args: {
        name: "STR",
        default: "AWK-style",
      },
    },
    {
      name: ["+s", "--no-sort"],
      description: "Do not sort the result",
    },
    {
      name: "--tail",
      description: "Maximum number of items to keep in memory",
      args: {
        name: "num",
      },
    },
    {
      name: "--disabled",
      description: "Do not perform search",
    },
    {
      name: "--tiebreak",
      description:
        "Comma-separated list of sort criteria to apply when the scores are tied",
      args: {
        name: "criteria",
        default: "length",
        suggestions: [
          {
            name: "length",
            description: "Prefer line with shorter length",
          },
          {
            name: "chunk",
            description:
              "Prefer line with shorter matched chunk (delimited by whitespaces)",
          },
          {
            name: "pathname",
            description:
              "Prefer line with matched substring in the file name of the path",
          },
          {
            name: "begin",
            description:
              "Prefer line with matched substring closer to the beginning",
          },
          {
            name: "end",
            description: "Prefer line with matched substring closer to the end",
          },
          {
            name: "index",
            description:
              "Prefer line that appeared earlier in the input stream",
          },
        ],
      },
    },

    // Input/output
    {
      name: "--read0",
      description: "Read input delimited by ASCII NUL characters",
    },
    {
      name: "--print0",
      description: "Print output delimited by ASCII NUL characters",
    },
    {
      name: "--ansi",
      description: "Enable processing of ANSI color codes",
    },
    {
      name: "--sync",
      description: "Synchronous search for multi-staged filtering",
    },
    {
      name: "--tty-default",
      description: "Set the default TTY device (default: /dev/tty)",
      args: {
        name: "device",
      },
    },
    {
      name: "--no-tty-default",
      description:
        "Search for the current TTY device via standard error instead of defaulting to /dev/tty",
    },

    // Global style
    {
      name: "--style",
      description: "Apply a style preset",
      args: {
        name: "preset",
        description: "One of default, minimal, or full[:BORDER_STYLE]",
        suggestions: ["default", "minimal", "full"],
      },
    },
    {
      name: "--color",
      description: "Base scheme and/or custom colors",
      isRepeatable: true,
      args: {
        name: "colors",
        description:
          "Base scheme followed by COLOR_NAME[:ANSI_COLOR][:ANSI_ATTRIBUTES] entries",
        isOptional: true,
        suggestions: ["dark", "light", "base16", "16", "bw"],
      },
    },
    {
      name: ["+c", "--no-color"],
      description: "Disable colors",
    },
    {
      name: "--no-bold",
      description: "Do not use bold text",
    },
    {
      name: "--black",
      description: "Use black background",
    },

    // Display mode
    {
      name: "--height",
      description:
        "Display fzf window below the cursor with the given height instead of using fullscreen",
      args: {
        name: "height",
        description:
          "[~][-]HEIGHT[%]. A negative value is the terminal height minus the value, ~ adapts to the input size",
      },
    },
    {
      name: "--min-height",
      description: "Minimum height when --height is given in percent",
      args: {
        name: "height",
        description:
          "HEIGHT[+]. Add + to increase the value according to the other layout options",
        default: "10+",
      },
    },
    {
      name: ["--popup", "--tmux"],
      description:
        "Start fzf in a floating pane (requires tmux 3.3+ or Zellij 0.44+)",
      args: {
        name: "options",
        description:
          "[center|top|bottom|left|right][,SIZE[%]][,SIZE[%]][,border-native]",
        isOptional: true,
        default: "center,50%",
        suggestions: ["center", "top", "bottom", "left", "right"],
      },
    },

    // Layout
    {
      name: "--layout",
      description: "Choose layout",
      args: {
        name: "layout",
        default: "default",
        suggestions: [
          {
            name: "default",
            description: "Display from the bottom of the screen",
          },
          {
            name: "reverse",
            description: "Display from the top of the screen",
          },
          {
            name: "reverse-list",
            description:
              "Display from the top of the screen, prompt at the bottom",
          },
        ],
      },
    },
    {
      name: "--reverse",
      description: "A synonym for --layout=reverse",
    },
    {
      name: "--margin",
      description: "Screen margin (TRBL | TB,RL | T,RL,B | T,R,B,L)",
      args: {
        name: "margin",
        description: "Number or percentage",
      },
    },
    {
      name: "--padding",
      description: "Padding inside border (TRBL | TB,RL | T,RL,B | T,R,B,L)",
      args: {
        name: "padding",
        description: "Number or percentage",
      },
    },
    borderOption("--border", "Draw border around the finder", borderStyles),
    ...labelOptions("border", "border"),

    // List section
    {
      name: ["-m", "--multi"],
      description: "Enable multi-select with tab/shift-tab",
      args: {
        name: "MAX",
        description: "Maximum number of items that can be selected",
        isOptional: true,
      },
    },
    {
      name: ["+m", "--no-multi"],
      description: "Disable multi-select",
    },
    {
      name: "--highlight-line",
      description: "Highlight the whole current line",
    },
    {
      name: "--cycle",
      description: "Enable cyclic scroll",
    },
    {
      name: "--wrap",
      description: "Enable line wrap",
      args: {
        name: "mode",
        isOptional: true,
        default: "char",
        suggestions: [
          {
            name: "char",
            description: "Wrap lines at arbitrary character positions",
          },
          {
            name: "word",
            description: "Wrap lines at word boundaries",
          },
        ],
      },
    },
    {
      name: "--wrap-word",
      description: "Enable line wrap at word boundaries (same as --wrap=word)",
    },
    {
      name: "--wrap-sign",
      description: "Indicator for wrapped lines",
      args: {
        name: "string",
      },
    },
    {
      name: "--no-multi-line",
      description: "Disable multi-line display of items when using --read0",
    },
    {
      name: "--raw",
      description: "Enable raw mode (show non-matching items)",
    },
    {
      name: "--track",
      description: "Track the current selection when the result is updated",
    },
    {
      name: "--id-nth",
      description: "Define item identity fields for cross-reload operations",
      args: {
        name: "index expressions",
        description: "Non-zero integer or range expression ([BEGIN]..[END])",
      },
    },
    {
      name: "--tac",
      description: "Reverse the order of the input",
    },
    {
      name: "--gap",
      description: "Render empty lines between each item",
      args: {
        name: "N",
        description: "Number of empty lines",
        isOptional: true,
      },
    },
    {
      name: "--gap-line",
      description: "Draw horizontal line on each gap using the string",
      args: {
        name: "string",
        isOptional: true,
      },
    },
    {
      name: "--freeze-left",
      description: "Number of fields to freeze on the left",
      args: {
        name: "N",
      },
    },
    {
      name: "--freeze-right",
      description: "Number of fields to freeze on the right",
      args: {
        name: "N",
      },
    },
    {
      name: "--keep-right",
      description: "Keep the right end of the line visible on overflow",
    },
    {
      name: "--scroll-off",
      description:
        "Number of screen lines to keep above or below when scrolling to the top or to the bottom",
      args: {
        name: "lines",
        default: "3",
      },
    },
    {
      name: "--no-hscroll",
      description: "Disable horizontal scroll",
    },
    {
      name: "--hscroll-off",
      description:
        "Number of screen columns to keep to the right of the highlighted substring",
      args: {
        name: "columns",
        default: "10",
      },
    },
    {
      name: "--jump-labels",
      description: "Label characters for jump mode",
      args: {
        name: "characters",
      },
    },
    {
      name: "--gutter",
      description: "Character used for the gutter column",
      args: {
        name: "char",
      },
    },
    {
      name: "--gutter-raw",
      description: "Character used for the gutter column in raw mode",
      args: {
        name: "char",
      },
    },
    {
      name: "--pointer",
      description: "Pointer to the current line",
      args: {
        name: "string",
      },
    },
    {
      name: "--marker",
      description: "Multi-select marker",
      args: {
        name: "string",
      },
    },
    {
      name: "--marker-multi-line",
      description:
        "Multi-select marker for multi-line entries; 3 elements for top, middle, and bottom",
      args: {
        name: "string",
      },
    },
    {
      name: "--ellipsis",
      description: "Ellipsis to show when line is truncated",
      args: {
        name: "string",
        default: "··",
      },
    },
    {
      name: "--tabstop",
      description: "Number of spaces for a tab character",
      args: {
        name: "spaces",
        default: "8",
      },
    },
    {
      name: "--scrollbar",
      description:
        "Scrollbar character(s), each for the list section and the preview window",
      args: {
        name: "chars",
        description: "C1[C2]",
        isOptional: true,
      },
    },
    {
      name: "--no-scrollbar",
      description: "Hide scrollbar",
    },
    borderOption(
      "--list-border",
      "Draw border around the list section",
      listBorderStyles
    ),
    ...labelOptions("list", "list border"),

    // Input section
    {
      name: "--no-input",
      description: "Disable and hide the input section",
    },
    {
      name: "--prompt",
      description: "Input prompt",
      args: {
        name: "string",
        default: "'> '",
      },
    },
    {
      name: "--info",
      description: "Finder info style",
      args: {
        name: "style",
        description: "One of default, right, hidden, inline[-right][:PREFIX]",
        default: "default",
        suggestions: [
          {
            name: "default",
            description: "On the left end of the horizontal separator",
          },
          {
            name: "right",
            description: "On the right end of the horizontal separator",
          },
          {
            name: "hidden",
            description: "Do not display finder info",
          },
          {
            name: "inline",
            description: "After the prompt",
          },
          {
            name: "inline-right",
            description: "On the right end of the prompt line",
          },
        ],
      },
    },
    {
      name: "--info-command",
      description: "Command to generate the finder info line",
      args: {
        name: "command",
      },
    },
    {
      name: "--no-info",
      description: "Hide finder info (same as --info=hidden)",
    },
    {
      name: "--separator",
      description: "Draw horizontal separator on info line using the string",
      args: {
        name: "string",
      },
    },
    {
      name: "--no-separator",
      description: "Hide info line separator",
    },
    {
      name: "--ghost",
      description: "Ghost text to display when the input is empty",
      args: {
        name: "text",
      },
    },
    {
      name: "--filepath-word",
      description: "Make word-wise movements respect path separators",
    },
    borderOption(
      "--input-border",
      "Draw border around the input section",
      borderStyles
    ),
    ...labelOptions("input", "input border"),

    // Preview window
    {
      name: "--preview",
      description: "Command to preview highlighted line ({})",
      args: {
        name: "command",
      },
    },
    {
      name: "--preview-window",
      description: "Preview window layout",
      args: {
        name: "options",
        description:
          "[up|down|left|right|next][,SIZE[%]][,border-STYLE][,[no]wrap[-word]][,[no]cycle][,[no]follow][,[no]info][,[no]hidden][,+SCROLL[OFFSETS][/DENOM]][,~HEADER_LINES][,default][,<SIZE_THRESHOLD(ALTERNATIVE_LAYOUT)]",
        default: "right:50%",
        suggestions: [
          "up",
          "down",
          "left",
          "right",
          "next",
          "nowrap",
          "wrap",
          "wrap-word",
          "nocycle",
          "cycle",
          "nofollow",
          "follow",
          "noinfo",
          "info",
          "nohidden",
          "hidden",
          "default",
        ],
      },
    },
    borderOption(
      "--preview-border",
      "Short for --preview-window=border-STYLE",
      borderStyles
    ),
    ...labelOptions("preview", "preview window border"),
    {
      name: "--preview-wrap-sign",
      description: "Indicator for wrapped lines in the preview window",
      args: {
        name: "string",
      },
    },

    // Header
    {
      name: "--header",
      description: "String to print as header",
      args: {
        name: "string",
      },
    },
    {
      name: "--header-lines",
      description: "The first N lines of the input are treated as header",
      args: {
        name: "number",
      },
    },
    {
      name: "--header-first",
      description: "Print header before the prompt line",
    },
    borderOption(
      "--header-border",
      "Draw border around the header section",
      embeddableBorderStyles
    ),
    ...labelOptions("header", "header border"),
    borderOption(
      "--header-lines-border",
      "Display header from --header-lines with a separate border",
      embeddableBorderStyles
    ),

    // Footer
    {
      name: "--footer",
      description: "String to print as footer",
      args: {
        name: "string",
      },
    },
    borderOption(
      "--footer-border",
      "Draw border around the footer section",
      embeddableBorderStyles,
      "line"
    ),
    ...labelOptions("footer", "footer border"),

    // Scripting
    {
      name: ["-q", "--query"],
      description: "Start the finder with the given query",
      args: {
        name: "string",
      },
    },
    {
      name: ["-1", "--select-1"],
      description: "Automatically select the only match",
    },
    {
      name: ["-0", "--exit-0"],
      description: "Exit immediately when there's no match",
    },
    {
      name: ["-f", "--filter"],
      description: "Filter mode. Do not start interactive finder",
      args: {
        name: "string",
      },
    },
    {
      name: "--print-query",
      description: "Print query as the first line",
    },
    {
      name: "--expect",
      description: "Comma-separated list of keys to complete fzf",
      isRepeatable: true,
      args: {
        name: "keys",
      },
    },
    {
      name: "--no-clear",
      description: "Do not clear finder interface on exit",
    },

    // Key/event binding
    {
      name: "--bind",
      description: "Custom key/event bindings. Refer to the man page",
      isRepeatable: true,
      args: {
        name: "keybinds",
        description: "Comma-separated list of KEY_OR_EVENT:ACTION pairs",
      },
    },

    // Advanced
    {
      name: "--with-shell",
      description: "Shell command and flags to start child processes with",
      args: {
        name: "command",
      },
    },
    {
      name: "--listen",
      description:
        "Start HTTP server to receive actions via TCP or a Unix domain socket",
      args: {
        name: "address",
        description: "[ADDR:]PORT, or a Unix socket path that ends with .sock",
        isOptional: true,
      },
    },
    {
      name: "--listen-unsafe",
      description:
        "Start HTTP server that also allows remote process execution",
      args: {
        name: "address",
        description: "[ADDR:]PORT",
        isOptional: true,
      },
    },
    {
      name: "--threads",
      description: "Number of matcher threads to use",
      args: {
        name: "N",
        description: "Default: min(8 * NUM_CPU, 32)",
      },
    },
    {
      name: "--bench",
      description:
        "Repeatedly run --filter for the given duration and print timing statistics (requires --filter)",
      args: {
        name: "duration",
        description: "Duration such as 500ms or 10s",
      },
    },

    // Directory traversal
    {
      name: "--walker",
      description:
        "Behavior of the built-in directory walker (used when $FZF_DEFAULT_COMMAND is not set)",
      args: {
        name: "options",
        description: "Comma-separated list of [file][,dir][,follow][,hidden]",
        default: "file,follow,hidden",
        suggestions: [
          {
            name: "file",
            description: "Include files in the search result",
          },
          {
            name: "dir",
            description: "Include directories in the search result",
          },
          {
            name: "follow",
            description: "Follow symbolic links",
          },
          {
            name: "hidden",
            description: "Include and follow hidden directories",
          },
        ],
      },
    },
    {
      name: "--walker-root",
      description: "List of directories to walk",
      args: {
        name: "dir",
        isVariadic: true,
        template: "folders",
      },
    },
    {
      name: "--walker-skip",
      description: "Comma-separated list of directory names to skip",
      args: {
        name: "dirs",
        default: ".git,node_modules",
      },
    },

    // History
    {
      name: "--history",
      description: "File to store fzf search history",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--history-size",
      description: "Maximum number of entries to keep in the history file",
      args: {
        name: "number",
        default: "1000",
      },
    },

    // Shell integration
    {
      name: "--bash",
      description: "Print script to set up Bash shell integration",
    },
    {
      name: "--zsh",
      description: "Print script to set up Zsh shell integration",
    },
    {
      name: "--fish",
      description: "Print script to set up Fish shell integration",
    },
    {
      name: "--nushell",
      description: "Print script to set up Nushell integration",
    },

    // Others
    {
      name: "--no-mouse",
      description: "Disable mouse",
    },
    {
      name: "--no-unicode",
      description: "Use ASCII characters instead of Unicode drawing characters",
    },
    {
      name: "--ambidouble",
      description:
        "Treat ambiguous width characters (e.g. box-drawing characters) as 2 columns",
    },

    // Help
    {
      name: "--version",
      description: "Display version information and exit",
    },
    {
      name: ["-h", "--help"],
      description: "Show help message",
    },
    {
      name: "--man",
      description: "Show man page",
    },
  ],
};

export default completionSpec;
