// clear (ncurses 6.6, released 2025-12-30, 2026-11-19). Source: man/clear.1 and progs/clear.c at tag v6_6 of
// github.com/ThomasDickey/ncurses-snapshots (-T, -V and -x unchanged); GNU/Linux `clear -V` (ncurses 6.4) run locally.
// Caveat: Apple's ncurses-79 (ncurses 6.0-20150808, macOS 15) ships a `clear` that ignores all command-line parameters.
const completionSpec: Fig.Spec = {
  name: "clear",
  description: "Clear the terminal screen",
  options: [
    {
      name: "-T",
      description: "Indicates the type of terminal",
      args: {
        name: "type",
      },
    },
    {
      name: "-V",
      description: "Reports version of ncurses used in this program, and exits",
    },
    {
      name: "-x",
      description:
        "Do not attempt to clear terminal's scrollback buffer using the extended E3 capability",
    },
  ],
};

export default completionSpec;
