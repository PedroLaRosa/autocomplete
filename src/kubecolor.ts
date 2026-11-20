// Kubecolor v0.8.0 (latest tag of kubecolor/kubecolor, same as Homebrew, 2026-11-19).
// Source: static read of command/config.go, command/color_level.go, command/complete.go, config/paging.go and config/preset.go at tag v0.8.0; the binary was not run.
// Kubecolor wraps kubectl, so every other command and flag comes from ./kubectl. The project moved from hidetatz/kubecolor (formerly dty1er/kubecolor, last tag v0.0.25) to kubecolor/kubecolor.
// Kubecolor strips its own flags from anywhere in the argument list; value flags only parse the --flag=value form.
import kubectlSpec from "./kubectl";

const kubectl = kubectlSpec as Fig.Subcommand;

const kubecolorFlags: Fig.Option[] = [
  {
    name: "--plain",
    description: "Disable colored output",
  },
  {
    name: "--light-background",
    description:
      "Switch to the light theme (or the dark theme with --light-background=false), same as --kubecolor-theme=light",
  },
  {
    name: "--force-colors",
    description:
      "Override the automatic color support detection (overrides the KUBECOLOR_FORCE_COLORS env var)",
    requiresSeparator: true,
    args: {
      name: "level",
      isOptional: true,
      suggestions: ["none", "auto", "basic", "256", "truecolor"],
    },
  },
  {
    name: "--kubecolor-version",
    description: "Print the kubecolor version and then exit",
  },
  {
    name: "--kubecolor-stdin",
    description:
      "Read command input from stdin or a file instead of executing kubectl",
    requiresSeparator: true,
    args: {
      name: "file",
      isOptional: true,
      template: "filepaths",
      suggestions: [{ name: "-", description: "Read from stdin" }],
    },
  },
  {
    name: "--kubecolor-theme",
    description:
      "Set the kubecolor theme preset (overrides the KUBECOLOR_PRESET env var)",
    requiresSeparator: true,
    args: {
      name: "preset",
      suggestions: [
        "auto",
        "dark",
        "light",
        "protanopia",
        "protanopia-dark",
        "protanopia-light",
        "deuteranopia",
        "deuteranopia-dark",
        "deuteranopia-light",
        "tritanopia",
        "tritanopia-dark",
        "tritanopia-light",
        "pre-0.3.0-dark",
        "pre-0.3.0-light",
        "pre-0.0.21-dark",
        "pre-0.0.21-light",
      ],
    },
  },
  {
    name: "--pager",
    description:
      'Set the pager, e.g "less -RF" or "more" (overrides the KUBECOLOR_PAGER and PAGER env vars)',
    requiresSeparator: true,
    args: { name: "command" },
  },
  {
    name: "--paging",
    description: "Pipe kubecolor output into a pager (default is never)",
    requiresSeparator: true,
    args: {
      name: "mode",
      isOptional: true,
      suggestions: ["auto", "never"],
    },
  },
  {
    name: "--no-paging",
    description: "Disable paging, alias of --paging=never",
  },
];

// Kubecolor flags are accepted at any position
const kubecolorOptions = kubecolorFlags.map((option) => ({
  ...option,
  isPersistent: true,
}));

const completionSpec: Fig.Spec = {
  ...kubectl,
  name: "kubecolor",
  description: "Colorize kubectl output",
  options: [...kubecolorOptions, ...(kubectl.options ?? [])],
};

export default completionSpec;
