// cd shell builtin (bash 5.3 `help cd`, zsh 5.9 zshbuiltins(1), 2026-11-19). Source: `help cd` and `man zshbuiltins` on macOS 15
import { filepaths } from "@tabsmith/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "cd",
  description: "Change the shell working directory",
  options: [
    {
      name: "-L",
      description:
        "Follow symbolic links, resolving them after processing '..' (default)",
      exclusiveOn: ["-P"],
    },
    {
      name: "-P",
      description:
        "Use the physical directory structure, resolving symbolic links before processing '..'",
      exclusiveOn: ["-L"],
    },
    {
      name: "-e",
      description:
        "With -P, exit non-zero if the current directory cannot be determined (bash)",
      dependsOn: ["-P"],
    },
    {
      name: "-@",
      description:
        "Present a file with extended attributes as a directory containing them (bash)",
    },
    {
      name: "-q",
      description: "Don't call the chpwd hook functions (zsh)",
    },
    {
      name: "-s",
      description: "Refuse to change to a path that contains symlinks (zsh)",
    },
  ],
  args: {
    generators: filepaths({
      showFolders: "only",
      // editFolderSuggestions: {
      //   previewComponent: "cd/folderPreview",
      // },
    }),
    filterStrategy: "fuzzy",
    // Add an additional hidden suggestion so users can execute on it if they want to
    suggestions: [
      {
        name: "-",
        description: "Switch to the last used folder",
        hidden: true,
      },
      {
        name: "~",
        description: "Switch to the home directory",
        hidden: true,
      },
    ],
  },
};

export default completionSpec;
