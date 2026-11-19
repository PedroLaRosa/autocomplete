// bcd (bookmark-cd) v1.1.0 (crates.io latest, 2026-11-19). Source: src/cli.rs and src/main.rs of https://github.com/a1ecbr0wn/bcd at tag v1.1.0 (read, binary not run).
const completion: Fig.Spec = {
  name: "bcd",
  description: "Bookmark directories and move to them",
  subcommands: [
    {
      name: "init",
      description: "Initialise the shell environment",
      hidden: true,
    },
    {
      name: "completions",
      description: "Shell completions setup",
      hidden: true,
    },
  ],
  options: [
    {
      name: ["-s", "--store"],
      description: "Store the current directory as a bookmark",
      args: {
        name: "store",
        description: "Name of the bookmark to store",
      },
    },
    {
      name: ["-r", "--remove"],
      description: "Remove a specified bookmark",
      args: {
        name: "remove",
        description: "Name of the bookmark to remove",
      },
    },
    {
      name: ["-i", "--install"],
      description: "Setup the shell startup script",
      hidden: true,
    },
    {
      name: ["-l", "--list"],
      description: "List the stored bookmarks",
    },
    {
      name: ["-V", "--version"],
      description: "Print version information",
    },
    {
      name: ["-h", "--help"],
      description: "Print help",
    },
  ],
  args: {
    name: "bookmark",
    description: "Bookmarked directory to change to",
    isOptional: true,
  },
};

export default completion;
