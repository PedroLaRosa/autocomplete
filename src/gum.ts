// gum v2.0.2 (git tag v2.0.2 / proxy.golang.org / Homebrew, 2026-11-20). Source: kong option structs (options.go, command.go) of every subcommand in a shallow clone of charmbracelet/gum at v2.0.2, read statically (binary not run); glamour v2.0.1 and log v2.0.0 module sources for --theme and --min-level values.
// Style sub-flags (--<element>.border, .margin, .bold, ...) are hidden in upstream --help but still accepted, so they are kept visible here.
const alignValues = ["left", "center", "right", "bottom", "middle", "top"];

const borderValues = ["none", "hidden", "normal", "rounded", "thick", "double"];

const styleOptions: Fig.Option[] = [
  {
    name: "--background",
    description: "Background Color",
    args: { name: "color" },
  },
  {
    name: "--foreground",
    description: "Foreground Color",
    args: { name: "color" },
  },
  {
    name: "--border",
    description: "Border Style",
    args: { suggestions: borderValues },
  },
  {
    name: "--border-background",
    description: "Border Background Color",
    args: { name: "color" },
  },
  {
    name: "--border-foreground",
    description: "Border Foreground Color",
    args: { name: "color" },
  },
  {
    name: "--align",
    description: "Text Alignment",
    args: { suggestions: alignValues },
  },
  { name: "--height", description: "Text height", args: { name: "lines" } },
  { name: "--width", description: "Text width", args: { name: "width" } },
  { name: "--margin", description: "Text margin", args: { name: "margin" } },
  { name: "--padding", description: "Text padding", args: { name: "padding" } },
  { name: "--bold", description: "Bold text" },
  { name: "--faint", description: "Faint text" },
  { name: "--italic", description: "Italicize text" },
  { name: "--strikethrough", description: "Strikethrough text" },
  { name: "--underline", description: "Underline text" },
];

const styleOptionGenerator = (
  element: string,
  extra: Partial<Fig.Option> = {}
) =>
  styleOptions.map((style): Fig.Option => ({
    ...style,
    name: (style.name as string).replace("--", `--${element}.`),
    description: `${style.description} for ${element}`,
    priority: 45,
    ...extra,
  }));

// Kong "negatable" boolean flags accept a --no- counterpart
const negatableOptions = (
  name: string,
  description: string,
  negatedDescription: string
): Fig.Option[] => [
  { name: `--${name}`, description },
  { name: `--no-${name}`, description: negatedDescription },
];

const showHelpOptions = (description = "Show help keybinds"): Fig.Option[] =>
  negatableOptions("show-help", description, "Hide help keybinds");

const stripAnsiOptions: Fig.Option[] = negatableOptions(
  "strip-ansi",
  "Strip ANSI sequences when reading from STDIN",
  "Keep ANSI sequences when reading from STDIN"
);

const timeoutOption = (description: string): Fig.Option => ({
  name: "--timeout",
  description,
  args: { name: "duration" },
});

const paddingOption: Fig.Option = {
  name: "--padding",
  description: "Padding",
  args: { name: "padding" },
};

const headerOption = (name = "header"): Fig.Option => ({
  name: "--header",
  description: "Header value",
  args: { name },
});

const cursorModeOption: Fig.Option = {
  name: "--cursor.mode",
  description: "Cursor mode",
  args: { suggestions: ["blink", "hide", "static"] },
};

const limitOptions: Fig.Option[] = [
  {
    name: "--limit",
    description: "Maximum number of options to pick",
    args: { name: "number" },
  },
  {
    name: "--no-limit",
    description: "Pick unlimited number of options (ignores limit)",
  },
  {
    name: "--select-if-one",
    description: "Select the given option if there is only one",
  },
];

const selectedOption: Fig.Option = {
  name: "--selected",
  description: "Options that should start as selected (selects all if given *)",
  isRepeatable: true,
  args: { name: "option" },
};

const delimiterOptions = (): Fig.Option[] => [
  {
    name: "--input-delimiter",
    description: "Option delimiter when reading from STDIN",
    args: { name: "delimiter" },
  },
  {
    name: "--output-delimiter",
    description: "Option delimiter when writing to STDOUT",
    args: { name: "delimiter" },
  },
];

const logTimeFormats = [
  "layout",
  "ansic",
  "unixdate",
  "rubydate",
  "rfc822",
  "rfc822z",
  "rfc850",
  "rfc1123",
  "rfc1123z",
  "rfc3339",
  "rfc3339nano",
  "kitchen",
  "stamp",
  "stampmilli",
  "stampmicro",
  "stampnano",
  "datetime",
  "dateonly",
  "timeonly",
];

const completionSpec: Fig.Spec = {
  name: "gum",
  description: "A tool for glamorous shell scripts",
  subcommands: [
    {
      name: "choose",
      description: "Choose an option from a list of choices",
      args: {
        name: "options",
        isVariadic: true,
        isOptional: true,
        description: "Options to choose from",
      },
      options: [
        ...limitOptions,
        {
          name: "--ordered",
          description: "Maintain the order of the selected options",
        },
        {
          name: "--height",
          description: "Height of the list",
          args: { name: "lines" },
        },
        {
          name: "--cursor",
          description:
            "Prefix to show on item that corresponds to the cursor position",
          args: { name: "symbol" },
        },
        ...showHelpOptions(),
        timeoutOption("Timeout until choose returns selected element"),
        headerOption(),
        {
          name: "--cursor-prefix",
          description:
            "Prefix to show on the cursor item (hidden if limit is 1)",
          args: { name: "symbol" },
        },
        {
          name: "--selected-prefix",
          description:
            "Prefix to show on selected items (hidden if limit is 1)",
          args: { name: "symbol" },
        },
        {
          name: "--unselected-prefix",
          description:
            "Prefix to show on unselected items (hidden if limit is 1)",
          args: { name: "symbol" },
        },
        selectedOption,
        ...delimiterOptions(),
        {
          name: "--label-delimiter",
          description:
            "Allows to set a delimiter, so options can be set as label:value",
          args: { name: "delimiter" },
        },
        ...stripAnsiOptions,
        paddingOption,
        ...styleOptionGenerator("cursor"),
        ...styleOptionGenerator("header"),
        ...styleOptionGenerator("item", { hidden: true }),
        ...styleOptionGenerator("selected"),
      ],
    },
    {
      name: "confirm",
      description: "Ask a user to confirm an action",
      args: {
        name: "prompt",
        description: "Prompt to display",
        isOptional: true,
      },
      options: [
        {
          name: "--default",
          description: "Default confirmation action",
        },
        {
          name: "--show-output",
          description: "Print prompt and chosen action to output",
        },
        {
          name: "--affirmative",
          description: "The title of the affirmative action",
          args: { name: "title" },
        },
        {
          name: "--negative",
          description: "The title of the negative action",
          args: { name: "title" },
        },
        ...showHelpOptions("Show help key binds"),
        timeoutOption(
          "Timeout until confirm returns selected value or default if provided"
        ),
        paddingOption,
        ...styleOptionGenerator("prompt"),
        ...styleOptionGenerator("selected"),
        ...styleOptionGenerator("unselected"),
      ],
    },
    {
      name: "file",
      description: "Pick a file from a folder",
      options: [
        {
          name: ["--cursor", "-c"],
          description: "The cursor character",
          args: { name: "cursor" },
        },
        {
          name: ["--all", "-a"],
          description: "Show hidden and 'dot' files",
        },
        {
          name: ["--permissions", "-p"],
          description: "Show file permissions",
        },
        {
          name: "--no-permissions",
          description: "Hide file permissions",
        },
        {
          name: ["--size", "-s"],
          description: "Show file size",
        },
        {
          name: "--no-size",
          description: "Hide file size",
        },
        {
          name: "--file",
          description: "Allow files selection",
        },
        {
          name: "--directory",
          description: "Allow directories selection",
        },
        ...showHelpOptions("Show help key binds"),
        timeoutOption("Timeout until command aborts without a selection"),
        headerOption(),
        {
          name: "--height",
          description: "Maximum number of files to display",
          args: { name: "lines" },
        },
        paddingOption,
        ...styleOptionGenerator("cursor"),
        ...styleOptionGenerator("symlink"),
        ...styleOptionGenerator("directory"),
        ...styleOptionGenerator("file"),
        ...styleOptionGenerator("permissions"),
        ...styleOptionGenerator("selected"),
        ...styleOptionGenerator("file-size"),
        ...styleOptionGenerator("header"),
      ],
      args: {
        name: "path",
        description: "The path to the folder to begin traversing",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: "filter",
      description: "Filter items from a list",
      args: {
        name: "options",
        isVariadic: true,
        isOptional: true,
        description: "Options to filter",
      },
      options: [
        {
          name: "--indicator",
          description: "Character for selection",
          args: { name: "symbol" },
        },
        ...limitOptions,
        selectedOption,
        ...showHelpOptions(),
        ...negatableOptions(
          "strict",
          "Only returns if anything matched, otherwise return the filter",
          "Return the filter if nothing matched"
        ),
        {
          name: "--selected-prefix",
          description:
            "Character to indicate selected items (hidden if limit is 1)",
          args: { name: "symbol" },
        },
        {
          name: "--unselected-prefix",
          description:
            "Character to indicate unselected items (hidden if limit is 1)",
          args: { name: "symbol" },
        },
        headerOption(),
        {
          name: "--placeholder",
          description: "Placeholder value",
          args: { name: "placeholder" },
        },
        {
          name: "--prompt",
          description: "Prompt to display",
          args: { name: "prompt" },
        },
        {
          name: "--width",
          description: "Input width",
          args: { name: "width" },
        },
        {
          name: "--height",
          description: "Input height",
          args: { name: "lines" },
        },
        {
          name: "--value",
          description: "Initial filter value",
          args: { name: "value" },
        },
        {
          name: "--reverse",
          description: "Display from the bottom of the screen",
        },
        ...negatableOptions(
          "fuzzy",
          "Enable fuzzy matching; otherwise match from start of word",
          "Match from start of word instead of fuzzy matching"
        ),
        ...negatableOptions(
          "fuzzy-sort",
          "Sort fuzzy results by their scores",
          "Do not sort fuzzy results by their scores"
        ),
        ...negatableOptions(
          "sort",
          "Sort fuzzy results by their scores (deprecated, use --fuzzy-sort)",
          "Do not sort fuzzy results by their scores (deprecated, use --no-fuzzy-sort)"
        ).map((option): Fig.Option => ({ ...option, deprecated: true })),
        timeoutOption("Timeout until filter command aborts"),
        ...delimiterOptions(),
        ...stripAnsiOptions,
        paddingOption,
        ...styleOptionGenerator("indicator"),
        ...styleOptionGenerator("selected-indicator"),
        ...styleOptionGenerator("unselected-prefix"),
        ...styleOptionGenerator("header"),
        ...styleOptionGenerator("text"),
        ...styleOptionGenerator("cursor-text"),
        ...styleOptionGenerator("match"),
        ...styleOptionGenerator("prompt"),
        ...styleOptionGenerator("placeholder"),
      ],
    },
    {
      name: "format",
      description: "Format a string using a template",
      args: {
        name: "template",
        description:
          "Template string to format (can also be provided via stdin)",
        isVariadic: true,
        isOptional: true,
      },
      options: [
        {
          name: "--theme",
          description: "Glamour theme to use for markdown formatting",
          args: {
            name: "theme",
            suggestions: [
              "pink",
              "dark",
              "light",
              "dracula",
              "tokyo-night",
              "ascii",
              "notty",
            ],
            template: "filepaths",
          },
        },
        {
          name: ["--language", "-l"],
          description: "Programming language to parse code",
          args: { name: "language" },
        },
        ...stripAnsiOptions,
        {
          name: ["--type", "-t"],
          description: "Format to use",
          args: { suggestions: ["markdown", "template", "code", "emoji"] },
        },
      ],
    },
    {
      name: "input",
      description: "Prompt for some input",
      options: [
        {
          name: "--placeholder",
          description: "Placeholder value",
          args: { name: "placeholder" },
        },
        {
          name: "--prompt",
          description: "Prompt to display",
          args: { name: "prompt" },
        },
        cursorModeOption,
        {
          name: "--value",
          description: "Initial value (can also be passed via stdin)",
          args: { name: "value" },
        },
        {
          name: "--char-limit",
          description: "Maximum value length (0 for no limit)",
          args: { name: "limit" },
        },
        {
          name: "--width",
          description: "Input width (0 for terminal width)",
          args: { name: "width" },
        },
        {
          name: "--password",
          description: "Mask input characters",
        },
        ...showHelpOptions(),
        headerOption(),
        timeoutOption("Timeout until input aborts"),
        ...stripAnsiOptions,
        paddingOption,
        ...styleOptionGenerator("prompt"),
        ...styleOptionGenerator("placeholder"),
        ...styleOptionGenerator("cursor"),
        ...styleOptionGenerator("header"),
      ],
    },
    {
      name: "join",
      description: "Join text vertically or horizontally",
      options: [
        {
          name: "--align",
          description: "Text alignment",
          args: {
            suggestions: alignValues,
          },
        },
        {
          name: "--horizontal",
          description: "Join (potentially multi-line) strings horizontally",
        },
        {
          name: "--vertical",
          description: "Join (potentially multi-line) strings vertically",
        },
      ],
      args: {
        name: "text",
        description: "Text to join",
        isVariadic: true,
      },
    },
    {
      name: "log",
      description: "Log messages to output",
      options: [
        {
          name: ["--file", "-o"],
          description: "Log to file",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: ["--format", "-f"],
          description: "Format message using printf",
          exclusiveOn: ["--structured", "-s"],
        },
        {
          name: "--formatter",
          description: "The log formatter to use",
          args: { suggestions: ["json", "logfmt", "text"] },
        },
        {
          name: ["--level", "-l"],
          description: "The log level to use",
          args: {
            suggestions: ["none", "debug", "info", "warn", "error", "fatal"],
          },
        },
        {
          name: "--prefix",
          description: "Prefix to print before the message",
          args: { name: "prefix" },
        },
        {
          name: ["--structured", "-s"],
          description: "Use structured logging",
          exclusiveOn: ["--format", "-f"],
        },
        {
          name: ["--time", "-t"],
          description:
            "The time format to use (kitchen, layout, ansic, rfc822, etc...)",
          args: { name: "format", suggestions: logTimeFormats },
        },
        {
          name: "--min-level",
          description: "Minimal level to show",
          args: {
            name: "level",
            suggestions: ["debug", "info", "warn", "error", "fatal"],
          },
        },
        ...styleOptionGenerator("level"),
        ...styleOptionGenerator("time"),
        ...styleOptionGenerator("prefix"),
        ...styleOptionGenerator("message"),
        ...styleOptionGenerator("key"),
        ...styleOptionGenerator("value"),
        ...styleOptionGenerator("separator"),
      ],
      args: {
        name: "text",
        description: "Text to log",
        isVariadic: true,
      },
    },
    {
      name: "pager",
      description: "Scroll through a file",
      options: [
        {
          name: "--show-line-numbers",
          description: "Show line numbers",
        },
        ...negatableOptions(
          "soft-wrap",
          "Soft wrap lines",
          "Do not soft wrap lines"
        ),
        timeoutOption("Timeout until command exits"),
        ...styleOptions,
        ...styleOptionGenerator("line-number"),
        ...styleOptionGenerator("match"),
        ...styleOptionGenerator("match-highlight"),
        ...styleOptionGenerator("help", { deprecated: true, hidden: true }),
      ],
      args: {
        name: "content",
        description: "Display content to scroll",
        isOptional: true,
      },
    },
    {
      name: "spin",
      description: "Display spinner while running a command",
      args: {
        name: "command",
        description: "Command to run",
        isCommand: true,
      },
      options: [
        {
          name: "--show-output",
          description:
            "Show or pipe output of command during execution (shows both STDOUT and STDERR)",
        },
        {
          name: "--show-error",
          description: "Show output of command only if the command fails",
        },
        {
          name: "--show-stdout",
          description: "Show STDOUT output",
        },
        {
          name: "--show-stderr",
          description: "Show STDERR output",
        },
        {
          name: ["--spinner", "-s"],
          description: "Spinner type",
          args: {
            suggestions: [
              "line",
              "dot",
              "minidot",
              "jump",
              "pulse",
              "points",
              "globe",
              "moon",
              "monkey",
              "meter",
              "hamburger",
            ],
          },
        },
        {
          name: "--title",
          description: "Text to display to user while spinning",
          args: { name: "text" },
        },
        {
          name: ["--align", "-a"],
          description: "Alignment of spinner with regard to the title",
          args: { suggestions: ["left", "right"] },
        },
        timeoutOption("Timeout until spin command aborts"),
        paddingOption,
        ...styleOptionGenerator("spinner"),
        ...styleOptionGenerator("title"),
      ],
    },
    {
      name: "style",
      description: "Apply coloring, borders, spacing to text",
      options: [
        {
          name: "--trim",
          description: "Trim whitespaces on every input line",
        },
        ...stripAnsiOptions,
        ...styleOptions,
      ],
      args: {
        name: "text",
        description: "Text to which to apply the style",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "table",
      description: "Render a table of data",
      options: [
        {
          name: ["--separator", "-s"],
          description: "Row separator",
          args: { name: "separator" },
        },
        {
          name: ["--columns", "-c"],
          description: "Column names",
          args: { name: "names" },
        },
        {
          name: ["--widths", "-w"],
          description: "Column widths",
          args: { name: "widths" },
        },
        {
          name: "--height",
          description: "Table height",
          args: { name: "lines" },
        },
        {
          name: ["--print", "-p"],
          description: "Static print",
        },
        {
          name: ["--file", "-f"],
          description: "File path",
          args: { name: "filename", template: "filepaths" },
        },
        {
          name: ["--border", "-b"],
          description: "Border style",
          args: {
            suggestions: [
              "rounded",
              "thick",
              "normal",
              "hidden",
              "double",
              "none",
            ],
          },
        },
        ...showHelpOptions(),
        ...negatableOptions(
          "hide-count",
          "Hide item count on help keybinds",
          "Show item count on help keybinds"
        ),
        {
          name: "--lazy-quotes",
          description:
            "Allow a quote to appear in an unquoted field and a non-doubled quote in a quoted field",
        },
        {
          name: "--fields-per-record",
          description: "Sets the number of expected fields per record",
          args: { name: "number" },
        },
        {
          name: ["--return-column", "-r"],
          description:
            "Which column number should be returned instead of whole row as string (0 returns the whole row)",
          args: { name: "column" },
        },
        timeoutOption("Timeout until choose returns selected element"),
        paddingOption,
        ...styleOptionGenerator("border"),
        ...styleOptionGenerator("cell"),
        ...styleOptionGenerator("header"),
        ...styleOptionGenerator("selected"),
      ],
    },
    {
      name: "version-check",
      description: "Semver check current gum version",
      args: {
        name: "constraint",
        description: "Semantic version constraint (for example '~> 0.15')",
      },
    },
    {
      name: "write",
      description: "Prompt for long-form text",
      options: [
        {
          name: "--width",
          description: "Text area width (0 for terminal width)",
          args: { name: "width" },
        },
        {
          name: "--height",
          description: "Text area height",
          args: { name: "lines" },
        },
        headerOption(),
        {
          name: "--placeholder",
          description: "Placeholder value",
          args: { name: "placeholder" },
        },
        {
          name: "--prompt",
          description: "Prompt to display",
          args: { name: "prompt" },
        },
        {
          name: "--show-cursor-line",
          description: "Show cursor line",
        },
        {
          name: "--show-line-numbers",
          description: "Show line numbers",
        },
        {
          name: "--value",
          description: "Initial value (can be passed via stdin)",
          args: { name: "value" },
        },
        {
          name: "--char-limit",
          description: "Maximum value length (0 for no limit)",
          args: { name: "limit" },
        },
        {
          name: "--max-lines",
          description: "Maximum number of lines (0 for no limit)",
          args: { name: "lines" },
        },
        ...showHelpOptions("Show help key binds"),
        cursorModeOption,
        timeoutOption("Timeout until choose returns selected element"),
        ...stripAnsiOptions,
        paddingOption,
        ...styleOptionGenerator("base"),
        ...styleOptionGenerator("cursor-line-number"),
        ...styleOptionGenerator("cursor-line"),
        ...styleOptionGenerator("cursor"),
        ...styleOptionGenerator("end-of-buffer"),
        ...styleOptionGenerator("line-number"),
        ...styleOptionGenerator("header"),
        ...styleOptionGenerator("placeholder"),
        ...styleOptionGenerator("prompt"),
      ],
    },
    {
      name: "completion",
      description: "Request shell completion",
      hidden: true,
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
        },
      ],
    },
    {
      name: "man",
      description: "Generate man pages",
      hidden: true,
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show context-sensitive help",
      isPersistent: true,
    },
    {
      name: ["--version", "-v"],
      description: "Print the version number",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
