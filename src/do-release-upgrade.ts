// do-release-upgrade (ubuntu-release-upgrader 26.10.11 in Ubuntu 26.10 "stonking"; 26.04.27 in 26.04 has an identical script, 2026-11-19).
// Source: static read of the `do-release-upgrade` optparse definitions and do-release-upgrade(8) from the
// ubuntu-release-upgrader source package / ubuntu-release-upgrader-core deb from archive.ubuntu.com (the script was not executed).
// The man page still documents `-e/--env`, but the script has no such option; `-m/--mode` was dropped from the script as well.

const completionSpec: Fig.Spec = {
  name: "do-release-upgrade",
  description: "Upgrade Ubuntu to latest release",
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help message and exit",
    },
    {
      name: ["-V", "--version"],
      description: "Show version and exit",
    },
    {
      name: ["-d", "--devel-release"],
      description:
        "If using the latest supported release, upgrade to the development release",
      exclusiveOn: ["-p", "--proposed"],
    },
    {
      name: "--data-dir",
      description: "Directory that contains the data files",
      args: {
        name: "data dir",
        template: "folders",
      },
    },
    {
      name: ["-p", "--proposed"],
      description:
        "Try upgrading to the latest release using the upgrader from Ubuntu-proposed",
      exclusiveOn: ["-d", "--devel-release"],
    },
    {
      name: ["-f", "--frontend"],
      description: "Run the specified frontend",
      args: {
        name: "frontend",
        default: "DistUpgradeViewText",
        suggestions: [
          "DistUpgradeViewText",
          "DistUpgradeViewGtk3",
          "DistUpgradeViewKDE",
          "DistUpgradeViewNonInteractive",
        ],
      },
    },
    {
      name: ["-c", "--check-dist-upgrade-only"],
      description:
        "Check only if a new distribution release is available and report the result via the exit code",
    },
    {
      name: "--allow-third-party",
      description:
        "Try the upgrade with third party mirrors and repositories enabled instead of commenting them out",
    },
    {
      name: ["-q", "--quiet"],
      description: "Do not print status messages",
    },
  ],
};
export default completionSpec;
