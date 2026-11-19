// xcrun version 70 (macOS 15 Command Line Tools, 2026-11-19). Source: `xcrun --help`,
// `man xcrun`, and `--help` of notarytool and stapler.
const pathArg: Fig.Arg = { name: "path", template: "filepaths" };

const completionSpec: Fig.Spec = {
  name: "xcrun",
  description:
    "Find and execute the named command line tool from the active xCode developer directory",
  subcommands: [
    {
      name: "scntool",
      description: "SceneKit CLI utilities",
      options: [
        {
          name: "--convert",
          description: "File to convert",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--format",
          description: "Format to convert to",
          args: {
            suggestions: ["scn", "dae", "c3d"],
            name: "format",
          },
        },
        {
          name: "--output",
          description: "Path to the output file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--force-y-up",
          description: "Convert objects to use y axis up",
        },
        {
          name: "--force-interleaved",
          description:
            "Interleave the vertex data for multiple semantics in the same array to achieve better rendering performance",
        },
        {
          name: "--prefer-compressed-textures",
          description:
            "Use .ktx, .astc and .pvrtc files for textures if available in the asset catalog",
        },
        {
          name: "--verbose",
          description: "Get pretty error message",
        },
      ],
    },
    {
      name: "xcodebuild",
      loadSpec: "xcodebuild",
    },
    {
      name: "simctl",
      loadSpec: "simctl",
    },
    {
      name: "notarytool",
      description: "Manage submissions to the Apple notary service",
      subcommands: [
        {
          name: "store-credentials",
          description: "Save Notary service credentials to the Keychain",
        },
        {
          name: "submit",
          description: "Submit an archive to the Notary service",
        },
        {
          name: "info",
          description: "Get status information for a submission",
        },
        {
          name: "wait",
          description: "Wait for completion of a previous submission",
        },
        {
          name: "history",
          description: "Get a list of previous submissions for your team",
        },
        {
          name: "log",
          description:
            "Retrieve notarization log for a single completed submission",
        },
      ],
    },
    {
      name: "stapler",
      description: "Attach and validate notarization tickets",
      subcommands: [
        {
          name: "staple",
          description: "Retrieve a ticket and attach it to the file at path",
          options: [{ name: "-q" }, { name: "-v" }],
          args: pathArg,
        },
        {
          name: "validate",
          description: "Validate an existing stapled ticket",
          options: [{ name: "-q" }, { name: "-v" }],
          args: pathArg,
        },
      ],
    },
    {
      name: "devicectl",
      description: "Interact with connected Apple devices (requires Xcode)",
    },
    {
      name: "xctrace",
      description:
        "Record, import and export Instruments traces (requires Xcode)",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Help message",
    },
    {
      name: "--version",
      description: "Show the xcrun version",
    },
    {
      name: ["-v", "--verbose"],
      description: "Show verbose logging output",
    },
    {
      name: "--sdk",
      description: "Find the tool for the given SDK name",
      // ponytail: static list; `xcodebuild -showsdks` needs full Xcode and is slow
      args: {
        name: "sdk name",
        suggestions: [
          "macosx",
          "iphoneos",
          "iphonesimulator",
          "appletvos",
          "appletvsimulator",
          "watchos",
          "watchsimulator",
          "xros",
          "xrsimulator",
          "driverkit",
        ],
      },
    },
    {
      name: "--toolchain",
      description: "Find the tool for the given toolchain",
      args: { name: "name" },
    },
    {
      name: ["-l", "--log"],
      description: "Show commands to be executed (with --run)",
    },
    {
      name: ["-f", "--find"],
      description: "Only find and print the tool path",
    },
    {
      name: ["-r", "--run"],
      description: "Find and execute the tool (the default behavior)",
    },
    {
      name: ["-n", "--no-cache"],
      description: "Do not use the lookup cache",
    },
    {
      name: ["-k", "--kill-cache"],
      description: "Invalidate all existing cache entries",
      isDangerous: true,
    },
    {
      name: "--show-sdk-path",
      description: "Show selected SDK install path",
    },
    {
      name: "--show-sdk-version",
      description: "Show selected SDK version",
    },
    {
      name: "--show-sdk-build-version",
      description: "Show selected SDK build version",
    },
    {
      name: "--show-sdk-platform-path",
      description: "Show selected SDK platform path",
    },
    {
      name: "--show-sdk-platform-version",
      description: "Show selected SDK platform version",
    },
  ],
};

export default completionSpec;
