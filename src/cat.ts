// cat (macOS 15 BSD, `man cat` dated 2013-01-29, 2026-11-19). Source: apple-oss-distributions/text_cmds tag text_cmds-195 (2025-04-30 drop; cat/cat.1 and cat/cat.c flags "belnstuv"); not a live run on macOS. Spec already matched upstream
const completionSpec: Fig.Spec = {
  name: "cat",
  description: "Concatenate and print files",
  args: {
    isVariadic: true,
    template: "filepaths",
  },
  options: [
    {
      name: "-b",
      description: "Number the non-blank output lines, starting at 1",
    },

    {
      name: "-e",
      description:
        "Display non-printing characters (see the -v option), and display a dollar sign (‘$’) at the end of each line",
    },

    {
      name: "-l",
      description:
        "Set an exclusive advisory lock on the standard output file descriptor.  This lock is set using fcntl(2) with the F_SETLKW command. If the output file is already locked, cat will block until the lock is acquired",
    },

    { name: "-n", description: "Number the output lines, starting at 1" },

    {
      name: "-s",
      description:
        "Squeeze multiple adjacent empty lines, causing the output to be single spaced",
    },

    {
      name: "-t",
      description:
        "Display non-printing characters (see the -v option), and display tab characters as ‘^I’",
    },

    { name: "-u", description: "Disable output buffering" },

    {
      name: "-v",
      description:
        "Display non-printing characters so they are visible.  Control characters print as ‘^X’ for control-X; the delete character (octal 0177) prints as ‘^?’.  Non-ASCII characters (with the high bit set) are printed as ‘M-’ (for meta) followed by the character for the low 7 bits",
    },
  ],
};

export default completionSpec;
