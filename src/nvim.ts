// Neovim v0.12.6 (neovim/neovim stable release tag v0.12.6, 2026-10-09; checked 2026-11-19). Source: shallow clone at tag v0.12.6, read statically (not run): usage() and argument parsing in src/nvim/main.c, src/man/nvim.1, runtime/doc/starting.txt, runtime/doc/remote.txt and vim._cs_remote in runtime/lua/vim/_core/editor.lua.
// Omitted on purpose: undocumented no-op switches (-N, -X, -f, -U, --literal, --luamod-dev) and the --remote-wait*, --remote-tab-wait*, --servername and --serverlist variants, which Nvim does not implement yet (E5600).
const nvimRemoteFiles: Fig.Arg = {
  name: "files",
  template: "filepaths",
  isVariadic: true,
};

const completionSpec: Fig.Spec = {
  name: "nvim",
  description: "Hyperextensible Vim-based text editor",
  args: {
    template: ["filepaths", "folders"],
    isVariadic: true,
    // suggestCurrentToken: true,
  },
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    {
      name: "+",
      description:
        "Start at end of file (+<lnum> starts at line <lnum>, +<cmd> executes <cmd> after the first file)",
    },
    {
      name: "--cmd",
      args: { name: "cmd" },
      description: "Execute <cmd> before any config",
    },
    {
      name: "-c",
      args: { name: "cmd" },
      description: "Execute <cmd> after config and first file",
    },
    {
      name: "-l",
      args: [
        { name: "script", template: "filepaths" },
        { name: "args", isOptional: true, isVariadic: true },
      ],
      description: "Execute Lua <script> (with optional args) and exit",
    },
    {
      name: "-ll",
      args: [
        { name: "script", template: "filepaths" },
        { name: "args", isOptional: true, isVariadic: true },
      ],
      description:
        "Execute Lua <script> (with optional args) without initializing the editor",
    },
    {
      name: "-b",
      description: "Binary mode",
    },
    {
      name: "-d",
      description: "Diff mode",
    },
    {
      name: ["-e", "-E"],
      description: "Ex mode",
    },
    {
      name: ["-es", "-Es"],
      description: "Silent (batch) mode",
    },
    {
      name: ["-h", "--help", "-?"],
      description: "Print this help message",
    },
    {
      name: "-i",
      args: {
        name: "shada",
        template: "filepaths",
        suggestions: [
          { name: "NONE", description: "Don't read or write a ShaDa file" },
        ],
      },
      description: "Use this shada file",
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
      name: "-n",
      description: "No swap file, use memory only",
    },
    {
      name: "-o",
      args: { name: "N", isOptional: true },
      description: "Open N windows (default: one per file)",
    },
    {
      name: "-O",
      args: { name: "N", isOptional: true },
      description: "Open N vertical windows (default: one per file)",
    },
    {
      name: "-p",
      args: { name: "N", isOptional: true },
      description: "Open N tab pages (default: one per file)",
    },
    {
      name: ["-L", "-r"],
      args: { name: "file", template: "filepaths", isOptional: true },
      description:
        "Recovery mode: recover edit state for this file, or list swap files if no file is given",
    },
    {
      name: "-R",
      description: "Read-only (view) mode",
    },
    {
      name: "-S",
      args: { name: "session", template: "filepaths", isOptional: true },
      description:
        "Source <session> (Vimscript or Lua) after loading the first file (default: Session.vim)",
    },
    {
      name: "-s",
      args: { name: "scriptin", template: "filepaths" },
      description: "Read Normal mode commands from <scriptin>",
    },
    {
      name: "-t",
      args: { name: "tag" },
      description: "Edit the file where <tag> is defined",
    },
    {
      name: "-q",
      args: { name: "errorfile", template: "filepaths", isOptional: true },
      description:
        "Quickfix mode: show the first error from <errorfile> (default: 'errorfile' option)",
    },
    {
      name: "-u",
      args: {
        name: "config",
        template: "filepaths",
        suggestions: [
          {
            name: "NONE",
            description: "Skip all initializations and plugins",
          },
          {
            name: "NORC",
            description: "Skip all initializations, load plugins",
          },
        ],
      },
      description: "Use this config file",
    },
    {
      name: "-w",
      args: { name: "scriptout", template: "filepaths" },
      description: "Append all typed keys to <scriptout>",
    },
    {
      name: "-W",
      args: { name: "scriptout", template: "filepaths" },
      description: "Write all typed keys to <scriptout>, overwriting it",
    },
    {
      name: "-A",
      description: "Arabic mode",
    },
    {
      name: "-H",
      description: "Hebrew mode",
    },
    {
      name: "-D",
      description: "Debugging mode",
    },
    {
      name: "-V",
      args: [
        { name: "N", isOptional: true },
        { name: "file", template: "filepaths", isOptional: true },
      ],
      description: "Verbose [level][file]",
    },
    {
      name: ["-v", "--version"],
      description: "Print version information",
    },
    {
      name: "--",
      description: "Only file names after this",
    },
    {
      name: "--api-info",
      description: "Write msgpack-encoded API metadata to stdout",
    },
    {
      name: "--clean",
      description: "Factory defaults (skip user config and plugins, shada)",
    },
    {
      name: "--embed",
      description: "Use stdin/stdout as a msgpack-rpc channel",
    },
    {
      name: "--headless",
      description: "Don't start a user interface",
    },
    {
      name: "--listen",
      args: { name: "address" },
      description: "Serve RPC API from this address",
    },
    {
      name: "--noplugin",
      description: "Don't load plugins",
    },
    {
      name: "--remote",
      args: nvimRemoteFiles,
      description:
        "Open files in a remote Nvim server (edit locally if no server is found)",
    },
    {
      name: "--remote-silent",
      args: nvimRemoteFiles,
      description: "Like --remote, but don't complain if there is no server",
    },
    {
      name: "--remote-tab",
      args: nvimRemoteFiles,
      description: "Like --remote, but open each file in a new tab page",
    },
    {
      name: "--remote-tab-silent",
      args: nvimRemoteFiles,
      description: "Like --remote-silent, but open each file in a new tab page",
    },
    {
      name: "--remote-send",
      args: { name: "keys" },
      description: "Send <keys> to the server and exit",
    },
    {
      name: "--remote-expr",
      args: { name: "expr" },
      description: "Evaluate <expr> in the server and print the result",
    },
    {
      name: "--remote-ui",
      description: "Display the UI of the server in the terminal",
    },
    {
      name: "--server",
      args: { name: "address" },
      description: "Connect to this Nvim server",
    },
    {
      name: "--startuptime",
      args: { name: "file", template: "filepaths" },
      description: "Write startup timing messages to <file>",
    },
  ],
};

export default completionSpec;
