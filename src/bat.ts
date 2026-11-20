// bat v0.26.1 (latest git tag/release via git ls-remote and the Homebrew formula, 2026-11-20).
// Source: src/bin/bat/clap_app.rs, assets/manual/bat.1.in and assets/completions/{bat.zsh.in,bat.fish.in} at tag v0.26.1,
// read statically from a shallow clone (the binary was not run). --lessopen/--no-lessopen only exist in builds that enable
// the optional 'lessopen' cargo feature (not part of upstream's default features).
const languageGenerator: Fig.Generator = {
  script: ["bat", "--list-languages"],
  // Each line is "Name:ext1,ext2,..."; suggest both the name and every extension
  postProcess: (out) =>
    out
      .split("\n")
      .filter((line) => line.trim().length > 0)
      .flatMap((line) => {
        const languageName = line.split(":")[0].trim();
        return line
          .replace(/:/g, ",")
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item.length > 0)
          .map((item) => ({
            name: item,
            description: `${languageName} language`,
          }));
      }),
};

const themeGenerator: Fig.Generator = {
  script: ["bat", "--list-themes"],
  postProcess: (out) =>
    out
      .split("\n")
      .map((theme) => theme.replace(/ \(default( dark| light)?\)$/, "").trim())
      .filter((theme) => theme.length > 0)
      .map((theme) => ({ name: theme, description: "Theme" })),
};

const whenArg = (values: string[], defaultValue: string): Fig.Arg => ({
  name: "when",
  default: defaultValue,
  suggestions: values,
});

const lineRangeArg = (description: string): Fig.Arg => ({
  name: "N:M",
  description,
});

const completionSpec: Fig.Spec = {
  name: "bat",
  description: "A cat(1) clone with syntax highlighting and Git integration",
  subcommands: [
    {
      name: "cache",
      description: "Modify the syntax-definition and theme cache",
      options: [
        {
          name: ["-b", "--build"],
          description: "Initialize (or update) the syntax/theme cache",
        },
        {
          name: ["-c", "--clear"],
          description: "Remove the cached syntax definitions and themes",
        },
        {
          name: "--source",
          description:
            "Use a different directory to load syntaxes and themes from",
          dependsOn: ["--build"],
          args: { name: "dir", template: "folders" },
        },
        {
          name: "--target",
          description:
            "Use a different directory to store the cached syntax and theme set",
          dependsOn: ["--build"],
          args: { name: "dir", template: "folders" },
        },
        {
          name: "--blank",
          description:
            "Create completely new syntax and theme sets (instead of appending to the default sets)",
          dependsOn: ["--build"],
        },
        {
          name: "--acknowledgements",
          description: "Build acknowledgements.bin",
          dependsOn: ["--build"],
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-A", "--show-all"],
      description: "Show non-printable characters (space, tab, newline)",
    },
    {
      name: "--nonprintable-notation",
      description:
        "Set notation for non-printable characters when using '--show-all'",
      args: {
        name: "notation",
        default: "unicode",
        suggestions: [
          {
            name: "unicode",
            description:
              "Use special Unicode code points (for example ␇, ␊, ␀)",
          },
          {
            name: "caret",
            description: "Use character sequences like ^G, ^J and ^@",
          },
        ],
      },
    },
    {
      name: "--binary",
      description: "How to treat binary content",
      args: {
        name: "behavior",
        default: "no-printing",
        suggestions: [
          {
            name: "no-printing",
            description: "Do not print any binary content",
          },
          {
            name: "as-text",
            description: "Treat binary content as normal text",
          },
        ],
      },
    },
    {
      name: "--completion",
      description: "Show shell completion for a certain shell",
      args: {
        name: "shell",
        suggestions: ["bash", "fish", "zsh", "ps1"],
      },
    },
    {
      name: ["-p", "--plain"],
      description:
        "Show plain style (alias for '--style=plain'); use twice (-pp) to also disable automatic paging",
      isRepeatable: 2,
    },
    {
      name: ["-l", "--language"],
      description:
        "Explicitly set the language for syntax highlighting (name or file extension)",
      args: {
        name: "language",
        generators: languageGenerator,
      },
    },
    {
      name: ["-H", "--highlight-line"],
      description:
        "Highlight the specified line ranges (e.g. 40, 30:40, :40, 40:, 30:+10)",
      isRepeatable: true,
      args: lineRangeArg("Line range to highlight"),
    },
    {
      name: "--file-name",
      description:
        "Specify the name to display for a file, also used for syntax detection (useful when piping data from STDIN)",
      isRepeatable: true,
      args: {
        name: "name",
        template: "filepaths",
      },
    },
    {
      name: ["-d", "--diff"],
      description:
        "Only show lines that have been added/removed/modified with respect to the Git index",
    },
    {
      name: "--diff-context",
      description:
        "Include N lines of context around added/removed/modified lines when using '--diff'",
      args: {
        name: "N",
        description: "Lines of context",
      },
    },
    {
      name: "--tabs",
      description:
        "Set the tab width to T spaces. Use a width of 0 to pass tabs through directly",
      args: {
        name: "T",
        description: "Spaces of tab width",
        suggestions: [
          { name: "0", description: "Pass tabs through directly" },
          "1",
          "2",
          "4",
          "8",
        ],
      },
    },
    {
      name: "--wrap",
      description:
        "Specify the text-wrapping mode (use '--terminal-width' to control the output width)",
      args: {
        name: "mode",
        default: "auto",
        suggestions: ["auto", "never", "character"],
      },
    },
    {
      name: ["-S", "--chop-long-lines"],
      description:
        "Truncate all lines longer than screen width. Alias for '--wrap=never'",
    },
    {
      name: "--terminal-width",
      description:
        "Explicitly set the width of the terminal instead of determining it automatically. If prefixed with '+' or '-', the value is treated as an offset",
      args: {
        name: "width",
        description: "Width, or an offset prefixed with '+' or '-'",
      },
    },
    {
      name: ["-n", "--number"],
      description:
        "Show line numbers, no other decorations (alias for '--style=numbers')",
    },
    {
      name: "--color",
      description: "Specify when to use colored output",
      args: whenArg(["auto", "never", "always"], "auto"),
    },
    {
      name: "--italic-text",
      description:
        "Specify when to use ANSI sequences for italic text in the output",
      args: whenArg(["always", "never"], "never"),
    },
    {
      name: "--decorations",
      description:
        "Specify when to use the decorations that have been specified via '--style'",
      args: whenArg(["auto", "never", "always"], "auto"),
    },
    {
      name: ["-f", "--force-colorization"],
      description: "Alias for '--decorations=always --color=always'",
    },
    {
      name: "--paging",
      description: "Specify when to use the pager",
      args: whenArg(["auto", "never", "always"], "auto"),
    },
    {
      name: ["-P", "--no-paging"],
      description: "Alias for '--paging=never'",
    },
    {
      name: "--pager",
      description: "Determine which pager is used",
      args: {
        name: "command",
        description: "Pager command (e.g. 'less -RF'), or 'builtin'",
        suggestions: [
          { name: "builtin", description: "Use the built-in 'minus' pager" },
          { name: "less", description: "Default pager" },
        ],
      },
    },
    {
      name: ["-m", "--map-syntax"],
      description: "Map a glob pattern to an existing syntax name",
      isRepeatable: true,
      args: {
        name: "glob:syntax",
        description: "Glob pattern and syntax name, e.g. '*.build:Python'",
      },
    },
    {
      name: "--ignored-suffix",
      description: "Ignore a file extension when detecting the syntax",
      isRepeatable: true,
      args: {
        name: "ignored-suffix",
        description: "Extension to ignore, e.g. '.dev'",
      },
    },
    {
      name: "--theme",
      description: "Set the color theme for syntax highlighting",
      args: {
        name: "theme",
        suggestions: [
          {
            name: "auto",
            description:
              "Pick a dark or light theme depending on the terminal's colors (default)",
          },
          {
            name: "auto:always",
            description:
              "Detect the terminal's colors even when the output is redirected",
          },
          {
            name: "auto:system",
            description:
              "Detect the color scheme from the system-wide preference (macOS only)",
          },
          {
            name: "dark",
            description: "Use the dark theme specified by '--theme-dark'",
          },
          {
            name: "light",
            description: "Use the light theme specified by '--theme-light'",
          },
        ],
        generators: themeGenerator,
      },
    },
    {
      name: "--theme-light",
      description:
        "Set the color theme for syntax highlighting used for light backgrounds",
      args: {
        name: "theme",
        generators: themeGenerator,
      },
    },
    {
      name: "--theme-dark",
      description:
        "Set the color theme for syntax highlighting used for dark backgrounds",
      args: {
        name: "theme",
        generators: themeGenerator,
      },
    },
    {
      name: "--list-themes",
      description: "Display a list of supported themes for syntax highlighting",
    },
    {
      name: ["-s", "--squeeze-blank"],
      description: "Squeeze consecutive empty lines into a single empty line",
    },
    {
      name: "--squeeze-limit",
      description:
        "Set the maximum number of consecutive empty lines to be printed",
      args: {
        name: "limit",
        description: "Non-negative number",
      },
    },
    {
      name: "--strip-ansi",
      description: "Specify when to strip ANSI escape sequences from the input",
      args: whenArg(["auto", "always", "never"], "never"),
    },
    {
      name: "--style",
      description:
        "Comma-separated list of style components to display (prefix with '+' or '-' to modify the previous set)",
      isRepeatable: true,
      args: {
        name: "components",
        default: "default",
        suggestions: [
          {
            name: "default",
            description: "Enable recommended style components",
          },
          { name: "full", description: "Enable all available components" },
          {
            name: "auto",
            description: "Same as 'default', unless the output is piped",
          },
          { name: "plain", description: "Disable all available components" },
          { name: "changes", description: "Show Git modification markers" },
          { name: "header", description: "Alias for 'header-filename'" },
          {
            name: "header-filename",
            description: "Show filenames before the content",
          },
          {
            name: "header-filesize",
            description: "Show file sizes before the content",
          },
          {
            name: "grid",
            description:
              "Vertical/horizontal lines to separate side bar and the header from the content",
          },
          { name: "rule", description: "Horizontal lines to delimit files" },
          { name: "numbers", description: "Show line numbers in the side bar" },
          {
            name: "snip",
            description: "Draw separation lines between distinct line ranges",
          },
        ],
      },
    },
    {
      name: ["-r", "--line-range"],
      description:
        "Only print the specified range of lines for each file (e.g. 40, 30:40, :40, 40:, -10:, 30:+10, 35::5)",
      isRepeatable: true,
      args: lineRangeArg("Line range to print"),
    },
    {
      name: ["-L", "--list-languages"],
      description:
        "Display a list of supported languages for syntax highlighting",
    },
    {
      name: ["-u", "--unbuffered"],
      description:
        "Make output unbuffered (exists for POSIX-compliance reasons and is simply ignored)",
    },
    {
      name: "--no-config",
      description: "Do not use the configuration file",
    },
    {
      name: "--no-custom-assets",
      description: "Do not load custom assets",
    },
    {
      name: "--lessopen",
      description:
        "Enable the $LESSOPEN preprocessor (builds with lessopen support only)",
    },
    {
      name: "--no-lessopen",
      description:
        "Disable the $LESSOPEN preprocessor if enabled (overrides '--lessopen')",
    },
    {
      name: "--config-file",
      description: "Show path to the configuration file",
    },
    {
      name: "--generate-config-file",
      description: "Generate a default configuration file",
    },
    {
      name: "--config-dir",
      description: "Show bat's configuration directory",
    },
    {
      name: "--cache-dir",
      description: "Show bat's cache directory",
    },
    {
      name: "--diagnostic",
      description: "Show diagnostic information for bug reports",
    },
    {
      name: "--acknowledgements",
      description: "Show acknowledgements",
    },
    {
      name: "--set-terminal-title",
      description: "Set terminal title to filenames when using a pager",
    },
    {
      name: ["-h", "--help"],
      description: "Print help message",
    },
    {
      name: ["-V", "--version"],
      description: "Show version information",
    },
  ],
  args: {
    name: "file",
    isVariadic: true,
    template: "filepaths",
    description: "File(s) to print / concatenate. Use '-' for standard input",
  },
};

export default completionSpec;
