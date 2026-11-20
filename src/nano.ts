// GNU nano v9.3 (brew stable, 2026-11-19). Source: nano(1) at nano-editor.org/dist/latest
// ponytail: macOS /usr/bin/nano is UW pico; this spec follows GNU nano

const flags: [string, string, string][] = [
  ["-A", "--smarthome", "Make Home jump to the first non-whitespace character"],
  ["-B", "--backup", "Keep the previous version of a file as a ~ backup"],
  ["-D", "--boldtext", "Use bold instead of reverse video for the interface"],
  ["-E", "--tabstospaces", "Convert each typed tab to spaces"],
  ["-F", "--newbuffer", "Read a file into a new buffer by default"],
  ["-G", "--locking", "Use vim-style file locking"],
  ["-H", "--historylog", "Save and reload search, replace and command history"],
  ["-I", "--ignorercfiles", "Don't read the system or user nanorc files"],
  [
    "-K",
    "--rawsequences",
    "Interpret escape sequences directly (disables mouse)",
  ],
  ["-L", "--nonewlines", "Don't add a newline to the end of the file"],
  [
    "-M",
    "--trimblanks",
    "Trim trailing whitespace when hard-wrapping or justifying",
  ],
  ["-N", "--noconvert", "Don't convert files from DOS/Mac format"],
  [
    "-O",
    "--bookstyle",
    "When justifying, an indented line starts a new paragraph",
  ],
  [
    "-P",
    "--positionlog",
    "Save and restore the cursor position of recent files",
  ],
  ["-R", "--restricted", "Restricted mode: limit file access and features"],
  ["-S", "--softwrap", "Display overlong lines on multiple rows"],
  ["-U", "--quickblank", "Clear status messages after one keystroke"],
  ["-V", "--version", "Print version information and exit"],
  ["-W", "--wordbounds", "Detect word boundaries more accurately"],
  ["-Z", "--zap", "Let Backspace and Delete erase a marked region"],
  ["-a", "--atblanks", "When soft-wrapping, wrap at whitespace"],
  ["-b", "--breaklonglines", "Automatically hard-wrap overlong lines"],
  ["-c", "--constantshow", "Constantly show the cursor position"],
  ["-d", "--rebinddelete", "Fix Backspace/Delete confusion"],
  ["-e", "--emptyline", "Keep the line below the title bar empty"],
  ["-g", "--showcursor", "Show the cursor in the file browser and help viewer"],
  ["-h", "--help", "Show a summary of the options and exit"],
  ["-i", "--autoindent", "Indent new lines like the previous line"],
  ["-j", "--jumpyscrolling", "Scroll per half-screen instead of per line"],
  ["-k", "--cutfromcursor", "Cut from the cursor to the end of the line"],
  ["-l", "--linenumbers", "Show line numbers in front of the text"],
  ["-m", "--mouse", "Enable mouse support"],
  ["-n", "--noread", "Treat files as new (e.g. named pipes)"],
  ["-p", "--preserve", "Preserve XON (^Q) and XOFF (^S) keys"],
  ["-q", "--indicator", "Show a position and portion indicator (scrollbar)"],
  ["-t", "--saveonexit", "Save changes on exit without prompting"],
  ["-u", "--unix", "Save files in Unix format by default"],
  ["-v", "--view", "View mode (read-only)"],
  ["-w", "--nowrap", "Don't hard-wrap overlong lines (default)"],
  ["-x", "--nohelp", "Don't show the two help lines"],
  ["-y", "--afterends", "Make Ctrl+Right and Ctrl+Delete stop at word ends"],
  ["-z", "--listsyntaxes", "List the names of available syntaxes and exit"],
  ["-!", "--magic", "Use libmagic to determine the syntax if needed"],
  ["-@", "--colonparsing", "Accept 'filename:line:column' as a position"],
  ["-%", "--stateflags", "Show some state flags in the title bar"],
  [
    "-_",
    "--minibar",
    "Show a feedback bar at the bottom instead of a title bar",
  ],
  ["-0", "--zero", "Hide all bars, use the whole terminal for the buffer"],
  [
    "-1",
    "--solosidescroll",
    "Scroll only the current line sideways (pre-9.0 behavior)",
  ],
  [
    "-/",
    "--modernbindings",
    "Use better-known key bindings (^X cut, ^C copy, ...)",
  ],
];

const completionSpec: Fig.Spec = {
  name: "nano",
  description: "Nano's ANOther text editor, inspired by Pico",
  options: [
    ...flags.map(([short, long, description]) => ({
      name: [short, long],
      description,
    })),
    {
      name: "--multibuffer",
      description: "Read a file into a new buffer by default",
      deprecated: { description: "Use --newbuffer" },
    },
    {
      name: ["-C", "--backupdir"],
      description: "Directory for saving unique backup files",
      args: { name: "directory", template: "folders" },
    },
    {
      name: ["-J", "--guidestripe"],
      description: "Show a guiding bar at this column",
      args: { name: "number" },
    },
    {
      name: ["-Q", "--quotestr"],
      description: "Regular expression to match the quoting part of a line",
      args: { name: "regex" },
    },
    {
      name: ["-T", "--tabsize"],
      description: "Make a tab this number of columns wide",
      args: { name: "number" },
    },
    {
      name: ["-X", "--wordchars"],
      description: "Which other characters are word parts",
      args: { name: "characters" },
    },
    {
      name: ["-Y", "--syntax"],
      description: "Syntax definition to use for coloring",
      args: { name: "name" },
    },
    {
      name: ["-f", "--rcfile"],
      description: "Use only this file for configuring nano",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: ["-o", "--operatingdir"],
      description: "Set operating directory",
      args: { name: "directory", template: "folders" },
    },
    {
      name: ["-r", "--fill"],
      description: "Set width for hard-wrap and justify (default -8)",
      args: { name: "number" },
    },
    {
      name: ["-s", "--speller"],
      description: "Use this alternative spell checker",
      args: { name: "program", isCommand: true },
    },
  ],
  args: {
    name: "file",
    description:
      "File to edit; prefix with +LINE[,COLUMN] or +[crCR]{/|?}STRING",
    template: "filepaths",
    isVariadic: true,
    isOptional: true,
  },
};

export default completionSpec;
