// Vim v9.2.1373 (newest vim/vim release tag v9.2.1373, 2026-11-18; checked 2026-11-19). Source: shallow clone at tag v9.2.1373, read statically (not run): usage() in src/main.c, command-line parsing in src/main.c, runtime/doc/vim.1 and runtime/doc/starting.txt.
// Omitted on purpose: GUI toolkit / platform-only switches (-display, -geometry, -font, -iconic, -reverse, -xrm, --role, --socketid, --echo-wid, --gui-dialog-file, --prg-name, -P, --windowid, -register/-unregister, Amiga -dev), -nb (NetBeans) and the obsolete -F (Farsi, removed in 8.1.0932).
const completionSpec: Fig.Spec = {
  name: "vim",
  description: "Vi IMproved, a programmer's text editor",
  args: {
    template: "filepaths",
    isVariadic: true,
    // suggestCurrentToken: true,
  },
  options: [
    {
      name: "--",
      description: "Only file names after this",
    },
    {
      name: "--literal",
      description:
        "Don't expand wildcards in file names (no effect on Unix, where the shell expands them)",
    },
    {
      name: "-g",
      description: "Run using the GUI (like 'gvim'), only with GUI support",
    },
    {
      name: ["-f", "--nofork"],
      description: "Foreground: don't fork when starting the GUI",
    },
    {
      name: "-v",
      description: "Vi mode (like 'vi')",
    },
    {
      name: "-e",
      description: "Ex mode (like 'ex')",
    },
    {
      name: "-E",
      description: "Improved Ex mode",
    },
    {
      name: "-s",
      description:
        "Enable silent mode (when in ex mode), or Read Normal mode commands from file",
      args: {
        name: "scriptin",
        template: "filepaths",
        isOptional: true,
      },
    },
    {
      name: "-d",
      description: "Diff mode (like 'vimdiff')",
    },
    {
      name: "-y",
      description: "Easy mode (like 'evim', modeless)",
    },
    {
      name: "-R",
      description: "Readonly mode (like 'view')",
    },
    {
      name: "-Z",
      description: "Restricted mode (like 'rvim')",
    },
    {
      name: "-m",
      description: "Modifications (writing files) not allowed",
    },
    {
      name: "-M",
      description: "Modifications in text not allowed",
    },
    {
      name: "-b",
      description: "Binary mode",
    },
    {
      name: "-l",
      description: "Lisp mode",
    },
    {
      name: "-C",
      description: "Compatible with Vi: 'compatible'",
    },
    {
      name: "-N",
      description: "Not fully Vi compatible: 'nocompatible'",
    },
    {
      name: "-V",
      description: "Be verbose [level N] [log messages to fname]",
      args: [
        {
          name: "N",
          isOptional: true,
        },
        {
          name: "fname",
          template: "filepaths",
          isOptional: true,
        },
      ],
    },
    {
      name: "-D",
      description: "Debugging mode",
    },
    {
      name: "-n",
      description: "No swap file, use memory only",
    },
    {
      name: "-r",
      description:
        "Recover crashed session if filename is specified, otherwise list swap files and exit",
      args: {
        name: "filename",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "-L",
      description: "Same as -r",
      args: {
        name: "filename",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "-A",
      description: "Start in Arabic mode",
    },
    {
      name: "-H",
      description: "Start in Hebrew mode",
    },
    {
      name: "-T",
      description: "Set terminal type to <terminal>",
      args: {
        name: "terminal",
      },
    },
    {
      name: "--not-a-term",
      description: "Skip warning for input/output not being a terminal",
    },
    {
      name: "--ttyfail",
      description: "Exit if input or output is not a terminal",
    },
    {
      name: "--stdio-channel",
      description:
        "Use stdin and stdout as a channel instead of a terminal (implies -es)",
    },
    {
      name: "-u",
      description: "Use <vimrc> instead of any .vimrc",
      args: {
        name: "vimrc",
        template: "filepaths",
        suggestions: [
          { name: "NONE", description: "Skip all initializations and plugins" },
          {
            name: "NORC",
            description: "Skip all initializations, load plugins",
          },
          {
            name: "DEFAULTS",
            description: "Skip all initializations, load defaults.vim",
          },
        ],
      },
    },
    {
      name: "-U",
      description: "Use <gvimrc> instead of any .gvimrc (GUI only)",
      args: {
        name: "gvimrc",
        template: "filepaths",
        suggestions: [
          { name: "NONE", description: "Skip all GUI initializations" },
        ],
      },
    },
    {
      name: "--noplugin",
      description: "Don't load plugin scripts",
    },
    {
      name: "-p",
      description: "Open N tab pages (default: one for each file)",
      args: {
        name: "N",
        isOptional: true,
      },
    },
    {
      name: "-o",
      description: "Open N windows (default: one for each file)",
      args: {
        name: "N",
        isOptional: true,
      },
    },
    {
      name: "-O",
      description: "Like -o but split vertically",
      args: {
        name: "N",
        isOptional: true,
      },
    },
    {
      name: "+",
      description:
        "Start at end of file, if line number is specified, start at that line",
      args: {
        name: "lnum",
        isOptional: true,
      },
    },
    {
      name: "--cmd",
      description: "Execute <command> before loading any vimrc file",
      args: {
        name: "command",
      },
    },
    {
      name: "-c",
      description: "Execute <command> after loading the first file",
      args: {
        name: "command",
      },
    },
    {
      name: "-S",
      description: "Source file <session> after loading the first file",
      args: {
        name: "session",
        template: "filepaths",
      },
    },
    {
      name: "-w",
      description: "Append all typed commands to file <scriptout>",
      args: {
        name: "scriptout",
        template: "filepaths",
      },
    },
    {
      name: "-W",
      description: "Write all typed commands to file <scriptout>",
      args: {
        name: "scriptout",
        template: "filepaths",
      },
    },
    {
      name: "-x",
      description: "Edit encrypted files",
    },
    {
      name: "-t",
      description: "Edit file where tag is defined",
      args: {
        name: "tag",
      },
    },
    {
      name: "-q",
      description:
        "Quickfix mode: edit file with first error from <errorfile> (default: 'errorfile' option)",
      args: {
        name: "errorfile",
        template: "filepaths",
        isOptional: true,
      },
    },
    {
      name: "-X",
      description: "Do not connect to the X server",
    },
    {
      name: "-Y",
      description: "Do not connect to the Wayland compositor",
    },
    {
      name: "--clientserver",
      description: "Backend for clientserver communication",
      args: {
        name: "backend",
        suggestions: ["socket", "x11", "mswin"],
      },
    },
    {
      name: "--remote",
      description: "Edit files in a Vim server if possible",
      args: {
        name: "files",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "--remote-silent",
      description: "Like --remote, but don't complain if there is no server",
      args: {
        name: "files",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "--remote-wait",
      description: "Like --remote, but wait for the files to have been edited",
      args: {
        name: "files",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "--remote-wait-silent",
      description:
        "Like --remote-wait, but don't complain if there is no server",
      args: {
        name: "files",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "--remote-tab",
      description: "Like --remote, but use a tab page per file",
      args: {
        name: "files",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "--remote-tab-silent",
      description: "Like --remote-silent, but use a tab page per file",
      args: {
        name: "files",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "--remote-tab-wait",
      description: "Like --remote-wait, but use a tab page per file",
      args: {
        name: "files",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "--remote-tab-wait-silent",
      description: "Like --remote-wait-silent, but use a tab page per file",
      args: {
        name: "files",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "--remote-send",
      description: "Send <keys> to a Vim server and exit",
      args: {
        name: "keys",
      },
    },
    {
      name: "--remote-expr",
      description: "Evaluate <expr> in a Vim server and print the result",
      args: {
        name: "expr",
      },
    },
    {
      name: "--serverlist",
      description: "List available Vim server names and exit",
    },
    {
      name: "--servername",
      description: "Send to or become the Vim server <name>",
      args: {
        name: "name",
      },
    },
    {
      name: "--startuptime",
      description: "Write startup timing messages to <file>",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--log",
      description: "Start logging to <file> early",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "-i",
      description: "Use <viminfo> instead of .viminfo",
      args: {
        name: "viminfo",
        template: "filepaths",
        suggestions: [
          { name: "NONE", description: "Don't read or write a viminfo file" },
        ],
      },
    },
    {
      name: "--clean",
      description: "'nocompatible', Vim defaults, no plugins, no viminfo",
    },
    {
      name: ["-h", "--help", "-?"],
      description: "Print Help message and exit",
    },
    {
      name: "--version",
      description: "Print version information and exit",
    },
  ],
};

export default completionSpec;
