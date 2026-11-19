// fzf-tmux v0.75.0 (wrapper script shipped with junegunn/fzf tag v0.75.0, same as the Homebrew formula, 2026-11-19).
// Source: static read of bin/fzf-tmux and man/man1/fzf-tmux.1 at that tag; everything else is passed through to fzf, so the fzf options come from ./fzf (v0.75.0). The script was not run.
// The wrapper uses -d and -x as layout flags (so only --delimiter and --extended reach fzf) and appends --no-height and --no-tmux to fzf.
import fzfSpec from "./fzf";

// Handled or overridden by the wrapper, so they are not offered as fzf options
const wrapperOptions = new Set([
  "--height",
  "--popup",
  "--tmux",
  "--help",
  "--version",
  "--man",
  "--bash",
  "--zsh",
  "--fish",
  "--nushell",
]);

// Short flags that are layout options of the wrapper and are never passed to fzf
const wrapperShortFlags = new Set(["-d", "-h", "-x"]);

const fzfOptions: Fig.Option[] = (
  (fzfSpec as Fig.Subcommand).options ?? []
).flatMap((option) => {
  const names = Array.isArray(option.name) ? option.name : [option.name];
  if (names.some((name) => wrapperOptions.has(name))) {
    return [];
  }
  const kept = names.filter((name) => !wrapperShortFlags.has(name));
  return [{ ...option, name: kept.length === 1 ? kept[0] : kept }];
});

const sizeArg = (name: string, description: string): Fig.Arg => ({
  name,
  description,
});

const completionSpec: Fig.Spec = {
  name: "fzf-tmux",
  description: "Opens a fuzzy finder in a tmux pane",
  options: [
    // Popup window (requires tmux 3.2 or above)
    {
      name: "-p",
      description: "Open fzf in a tmux popup window (requires tmux 3.2+)",
      args: {
        name: "size",
        description: "WIDTH[%][,HEIGHT[%]]",
        isOptional: true,
        default: "50%",
      },
    },
    {
      name: "-w",
      description: "Width of the popup window",
      args: sizeArg("width", "WIDTH[%]"),
    },
    {
      name: "-h",
      description: "Height of the popup window",
      args: sizeArg("height", "HEIGHT[%]"),
    },
    {
      name: "-x",
      description: "Column position of the popup window",
      args: sizeArg("column", "COL"),
    },
    {
      name: "-y",
      description: "Row position of the popup window",
      args: sizeArg("row", "ROW"),
    },

    // Split pane (default layout: -d 50%)
    {
      name: "-u",
      description: "Split above (up)",
      args: {
        ...sizeArg("height", "HEIGHT[%]"),
        isOptional: true,
      },
    },
    {
      name: "-d",
      description: "Split below (down), the default layout is -d 50%",
      args: {
        ...sizeArg("height", "HEIGHT[%]"),
        isOptional: true,
      },
    },
    {
      name: "-l",
      description: "Split left",
      args: {
        ...sizeArg("width", "WIDTH[%]"),
        isOptional: true,
      },
    },
    {
      name: "-r",
      description: "Split right",
      args: {
        ...sizeArg("width", "WIDTH[%]"),
        isOptional: true,
      },
    },
    {
      name: "--",
      description: "Separate fzf-tmux layout options from fzf options",
    },
    {
      name: "--help",
      description: "Show help message",
    },
    {
      name: "--version",
      description: "Display version information and exit",
    },
    ...fzfOptions,
  ],
};

export default completionSpec;
