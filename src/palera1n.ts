// palera1n v2.4 (latest stable upstream tag, released 2026-07-27; v3.0.0-beta.x are pre-releases and not covered, 2026-11-19).
// Source: getopt_long table and usage() text in src/optparse.c at tag v2.4 (palera1n/palera1n).
// Flags only built into some variants (rootful -B/-c/-C/-f/-l, TUI -t/--cli, macOS-only --override-libcheckra1nhelper) are kept.
// DEV_BUILD-only flags (-1/--test1, -2/--test2) are intentionally omitted.
// The usage text lists --jbinit-log-to-file for -L but v2.4 does not register that long name in getopt_long, so only -L works.
const completionSpec: Fig.Spec = {
  name: "palera1n",
  description:
    "Jailbreaking tool for iOS/iPadOS/tvOS 15-26 and bridgeOS 5-10 arm64",
  options: [
    {
      name: "--version",
      description: "Print version",
    },
    {
      name: "--force-revert",
      description: "Remove jailbreak",
    },
    {
      name: "--force-enable-ssv",
      description: "Force SSV detection to result in YES",
    },
    {
      name: ["--setup-partial-fakefs", "-B"],
      description: "Setup partial fakefs",
    },
    {
      name: ["--setup-fakefs", "-c"],
      description: "Setup fakefs",
    },
    {
      name: ["--clean-fakefs", "-C"],
      description: "Clean fakefs",
    },
    {
      name: ["--demote", "-d"],
      description: "Demote",
    },
    {
      name: ["--dfuhelper", "-D"],
      description: "Exit after entering DFU",
    },
    {
      name: ["--boot-args", "-e"],
      description: "XNU boot arguments",
      args: { name: "BOOT_ARGUMENTS" },
    },
    {
      name: ["--enter-recovery", "-E"],
      description: "Enter recovery mode",
    },
    {
      name: ["--fakefs", "-f"],
      description: "Boot fakefs",
    },
    {
      name: ["--help", "-h"],
      description: "Show help for palera1n",
    },
    {
      name: ["--override-checkra1n", "-i"],
      description: "Override checkra1n",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: "--override-libcheckra1nhelper",
      description: "Custom checkra1n hook dylib (macOS only)",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: ["--override-pongo", "-k"],
      description: "Override Pongo image",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: ["--override-kpf", "-K"],
      description: "Override kernel patchfinder",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: ["--rootless", "-l"],
      description: "Boot rootless. This is the default",
    },
    {
      name: ["--jbinit-log-to-file", "-L"],
      description:
        "Make jbinit log to /cores/jbinit.log (can be read from sandbox while jailbroken)",
    },
    {
      name: ["--exit-recovery", "-n"],
      description: "Exit recovery mode",
    },
    {
      name: ["--device-info", "-I"],
      description: "Print info about the connected device",
    },
    {
      name: ["--override-overlay", "-o"],
      description: "Override overlay",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: ["--pongo-shell", "-p"],
      description: "Boots to PongoOS shell",
    },
    {
      name: ["--pongo-full", "-P"],
      description:
        "Boots to a PongoOS shell with default images already uploaded",
    },
    {
      name: ["--override-ramdisk", "-r"],
      description: "Override ramdisk",
      args: { name: "FILE", template: "filepaths" },
    },
    {
      name: ["--reboot-device", "-R"],
      description: "Reboot connected device in normal mode",
    },
    {
      name: ["--safe-mode", "-s"],
      description: "Enter safe mode",
    },
    {
      name: ["--no-colors", "-S"],
      description: "Disable colors on the command line",
    },
    {
      name: ["--telnetd", "-T"],
      description: "Enable TELNET daemon on port 46 (insecure)",
    },
    {
      name: ["--tui", "-t"],
      description: "Force interactive TUI",
      exclusiveOn: ["--cli"],
    },
    {
      name: "--cli",
      description: "Force CLI mode",
      exclusiveOn: ["--tui", "-t"],
    },
    {
      name: ["--debug-logging", "-v"],
      description:
        "Enable debug logging. This option can be repeated for extra verbosity",
    },
    {
      name: ["--verbose-boot", "-V"],
      description: "Verbose boot",
    },
  ],
};

export default completionSpec;
