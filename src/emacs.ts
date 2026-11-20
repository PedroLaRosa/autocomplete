// Emacs v31.1 (latest stable release; tag emacs-31.1 of the emacs-mirror/emacs GitHub mirror, matches Homebrew formula, 2026-11-19).
// Source: usage_message[] ("emacs --help" text) and the standard_args option table in src/emacs.c, lisp/startup.el and etc/NEWS at emacs-31.1,
// not a live run of the binary. No new command-line options were introduced in 31.1 itself; this sync fixes earlier errors (-nl, -nsl, -u, -t, --batch)
// and adds the options that were missing. --dump-file, --fingerprint, --module-assertions and --seccomp only exist in builds that enable them.
/*
Made by Yavko :)
I made this for fun, I don't actually use emacs so if you do use it
Here!
*/
const completionSpec: Fig.Spec = {
  name: "emacs",
  description: "An extensible, customizable, free/libre text editor — and more",
  args: {
    name: "file",
    template: "filepaths",
    isVariadic: true,
  },
  options: [
    // Initialization options
    {
      description: "Do not do interactive display; implies -q",
      name: "--batch",
    },
    {
      description: "Change to directory DIR",
      name: "--chdir",
      args: { name: "DIR", template: "folders" },
    },
    {
      description: "Start a (named) server in the background",
      name: ["--daemon", "--bg-daemon"],
      requiresSeparator: true,
      args: { name: "NAME", isOptional: true },
    },
    {
      description: "Start a (named) server in the foreground",
      name: "--fg-daemon",
      requiresSeparator: true,
      args: { name: "NAME", isOptional: true },
    },
    {
      description: "Enable Emacs Lisp debugger for init file",
      name: "--debug-init",
    },
    {
      description: "Use X server DISPLAY",
      name: ["--display", "-d"],
      args: { name: "DISPLAY" },
    },
    {
      description: "Assert behavior of dynamic modules",
      name: "--module-assertions",
    },
    {
      description: "Read dumped state from FILE",
      name: "--dump-file",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      description: "Output fingerprint and exit",
      name: "--fingerprint",
    },
    {
      description: "Read Seccomp BPF filter from FILE",
      name: "--seccomp",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      description: "Do not add build details such as time stamps",
      name: "--no-build-details",
    },
    {
      description: "Do not load a saved desktop",
      name: "--no-desktop",
    },
    {
      description: "Load neither ~/.emacs nor default.el",
      name: ["--no-init-file", "-q"],
    },
    {
      description: "Do not load loadup.el into bare Emacs",
      name: ["--no-loadup", "-nl"],
    },
    {
      description: "Do not load site-start.el",
      name: "--no-site-file",
    },
    {
      description: "Do not load X resources",
      name: "--no-x-resources",
    },
    {
      description: "Do not add site-lisp directories to load-path",
      name: ["--no-site-lisp", "-nsl"],
    },
    {
      description: "Do not display a splash screen on startup",
      name: "--no-splash",
    },
    {
      description: "Do not communicate with X, ignoring $DISPLAY",
      name: ["--no-window-system", "-nw"],
    },
    {
      description: "Use DIR when looking for the Emacs init files",
      name: "--init-directory",
      args: { name: "DIR", template: "folders" },
    },
    {
      description:
        "Equivalent to: -q --no-site-file --no-site-lisp --no-splash --no-x-resources",
      name: ["--quick", "-Q"],
    },
    {
      description: "Run FILE as an Emacs Lisp script",
      name: "--script",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      description:
        "To be used in #!/usr/bin/emacs -x, with approximately the same meaning as -Q --script",
      name: "-x",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      description: "Use DEVICE for terminal I/O",
      name: ["--terminal", "-t"],
      args: { name: "DEVICE", template: "filepaths" },
    },
    {
      description: "Load ~USER/.emacs instead of your own",
      name: ["--user", "-u"],
      args: { name: "USER" },
    },
    // Action options
    {
      description: "Prepend DIR to load-path (with :DIR, append DIR)",
      name: ["--directory", "-L"],
      isRepeatable: true,
      args: { name: "DIR", template: "folders" },
    },
    {
      description: "Evaluate Emacs Lisp expression EXPR",
      name: ["--eval", "--execute"],
      isRepeatable: true,
      args: { name: "EXPR" },
    },
    {
      description: "Visit FILE",
      name: ["--file", "--find-file", "--visit"],
      isRepeatable: true,
      args: { name: "FILE", template: "filepaths" },
    },
    {
      description: "Call Emacs Lisp function FUNC with no arguments",
      name: ["--funcall", "-f"],
      isRepeatable: true,
      args: { name: "FUNC" },
    },
    {
      description: "Insert contents of FILE into current buffer",
      name: "--insert",
      isRepeatable: true,
      args: { name: "FILE", template: "filepaths" },
    },
    {
      description: "Exit without asking for confirmation",
      name: "--kill",
    },
    {
      description: "Load Emacs Lisp FILE using the load function",
      name: ["--load", "-l"],
      isRepeatable: true,
      args: { name: "FILE", template: "filepaths" },
    },
    // Display options
    {
      description: "Window background color",
      name: ["--background-color", "-bg"],
      args: { name: "COLOR" },
    },
    {
      description: "Disable many display features; used for debugging Emacs",
      name: ["--basic-display", "-D"],
    },
    {
      description: "Main border color",
      name: ["--border-color", "-bd"],
      args: { name: "COLOR" },
    },
    {
      description: "Width of main border",
      name: ["--border-width", "-bw"],
      args: { name: "WIDTH" },
    },
    {
      description: "Override color mode for character terminals",
      name: "--color",
      requiresSeparator: true,
      args: {
        name: "MODE",
        description: "Defaults to auto; can also be a mode name like ansi8",
        isOptional: true,
        suggestions: ["auto", "never", "always", "ansi8"],
      },
    },
    {
      description: "Color of the Emacs cursor indicating point",
      name: ["--cursor-color", "-cr"],
      args: { name: "COLOR" },
    },
    {
      description: "Default font; must be fixed-width",
      name: ["--font", "-fn"],
      args: { name: "FONT" },
    },
    {
      description: "Window foreground color",
      name: ["--foreground-color", "-fg"],
      args: { name: "COLOR" },
    },
    {
      description: "Make the first frame high as the screen",
      name: ["--fullheight", "-fh"],
    },
    {
      description: "Make the first frame fullscreen",
      name: ["--fullscreen", "-fs"],
    },
    {
      description: "Make the first frame wide as the screen",
      name: ["--fullwidth", "-fw"],
    },
    {
      description: "Make the first frame maximized",
      name: ["--maximized", "-mm"],
    },
    {
      description: "Window geometry",
      name: ["--geometry", "-g"],
      args: { name: "GEOMETRY" },
    },
    {
      description: "Do not use picture of gnu for Emacs icon",
      name: ["--no-bitmap-icon", "-nbi"],
    },
    {
      description: "Start Emacs in iconified state",
      name: "--iconic",
    },
    {
      description: "Width between text and main border",
      name: ["--internal-border", "-ib"],
      args: { name: "WIDTH" },
    },
    {
      description: "Additional space to put between lines",
      name: ["--line-spacing", "-lsp"],
      args: { name: "PIXELS" },
    },
    {
      description: "Mouse cursor color in Emacs window",
      name: ["--mouse-color", "-ms"],
      args: { name: "COLOR" },
    },
    {
      description: "Title for initial Emacs frame",
      name: "--name",
      args: { name: "NAME" },
    },
    {
      description: "Disable blinking cursor",
      name: ["--no-blinking-cursor", "-nbc"],
    },
    {
      description: "Switch foreground and background",
      name: ["--reverse-video", "-r", "-rv"],
    },
    {
      description: "Title for initial Emacs frame",
      name: ["--title", "-T"],
      args: { name: "TITLE" },
    },
    {
      description: "Enable vertical scroll bars",
      name: ["--vertical-scroll-bars", "-vb"],
    },
    {
      description: "Set additional X resources",
      name: "--xrm",
      args: { name: "XRESOURCES" },
    },
    {
      description: "Set parent window",
      name: "--parent-id",
      args: { name: "XID" },
    },
    {
      description: "Display this help and exit",
      name: "--help",
    },
    {
      description: "Output version information and exit",
      name: "--version",
    },
  ],
};
export default completionSpec;
