// sw_vers (Xcode 27.2 (27B52) bundled man page, 2026-11-19). Source: sw_vers(1) HTML export from keith/xcode-man-pages
// at the Xcode 27.2 commit (page last changed in Xcode 14.3 beta 1), read statically; not run on macOS.
const completionSpec: Fig.Spec = {
  name: "sw_vers",
  description: "Print macOS system version information",
  options: [
    {
      // The single-dash spelling is still accepted for backwards compatibility
      name: ["--productName", "-productName"],
      description: "Print only the value of the ProductName property",
    },
    {
      name: ["--productVersion", "-productVersion"],
      description: "Print only the value of the ProductVersion property",
    },
    {
      name: ["--productVersionExtra", "-productVersionExtra"],
      description:
        "Print only the value of the ProductVersionExtra property (Rapid Security Response version)",
    },
    {
      name: ["--buildVersion", "-buildVersion"],
      description: "Print only the value of the BuildVersion property",
    },
  ],
};

export default completionSpec;
