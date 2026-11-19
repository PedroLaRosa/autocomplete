// trash, macOS 15.5 /usr/bin/trash (sw_vers, 2026-11-19). Source: trash --help and man 8 trash
// ponytail: hasseg trash (-F -l -e -y) dropped; Homebrew ships it keg_only :shadowed_by_macos, so `trash` is Apple's

const completionSpec: Fig.Spec = {
  name: "trash",
  description: "Move files and directories to the user trash folder",
  args: {
    name: "file",
    isVariadic: true,
    template: ["folders", "filepaths"],
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Display usage information for the tool and exit",
    },
    {
      name: ["-v", "--verbose"],
      description: "Display more verbose status",
    },
    {
      name: ["-s", "--stopOnError"],
      description: "Exit with an error if any move to a trash folder fails",
    },
  ],
};

export default completionSpec;
