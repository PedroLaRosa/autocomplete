// wifi-password v0.1.0 (latest tag of rauchg/wifi-password, the Homebrew `wifi-password` formula; last upstream commit 2016-07-17, 2026-11-19).
// Source: option parser and usage text of wifi-password.sh read statically (macOS-only shell script, not run). The project looks unmaintained.
// Without an SSID the script reads the current network from the `airport` utility, which this spec cannot verify on current macOS.
// The SSID generator lists preferred networks with `networksetup`; that command was not run here.
const completionSpec: Fig.Spec = {
  name: "wifi-password",
  args: {
    name: "SSID",
    description:
      "The name for a Wi-Fi network. Defaults to the network you are connected to",
    isOptional: true,
    generators: {
      script: [
        "bash",
        "-c",
        "networksetup -listallhardwareports | awk '/Wi-Fi/{getline; print $2}' | xargs networksetup -listpreferredwirelessnetworks",
      ],
      postProcess: (out) =>
        out
          .split("\n")
          .slice(1)
          .filter((line) => line.trim())
          .map((line) => ({ name: line.trim() })),
    },
  },
  description:
    "People ask you for the Wi-Fi password. Answer quickly. macOS only",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for wifi-password",
    },
    {
      name: ["--quiet", "-q"],
      description: "Only output the password",
    },
    {
      name: ["--version", "-V"],
      description: "Output version",
    },
    {
      name: "--",
      description: "End of options",
    },
  ],
};

export default completionSpec;
