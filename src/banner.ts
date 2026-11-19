// banner (macOS 15.5 BSD banner, text_cmds-195 from the Apple OSS mirror, man page dated 2021-06-21, 2026-11-19).
// Source: banner.6 and banner.c read from github.com/apple-oss-distributions/text_cmds (not run on macOS).
const completionSpec: Fig.Spec = {
  name: "banner",
  description: "Prints a large, high quality banner on the standard output",
  args: {
    name: "message",
    description:
      "Text to print (up to 1024 characters); read from standard input if omitted",
    isOptional: true,
    isVariadic: true,
  },
  options: [
    {
      name: "-t",
      description: "Enable trace",
    },
    {
      name: "-d",
      description: "Enable debug",
    },
    {
      name: "-w",
      description:
        "Change the output from a width of 132 to width, suitable for a narrow terminal",
      args: {
        name: "width",
        description: "Output width (1-132)",
      },
    },
  ],
};

export default completionSpec;
