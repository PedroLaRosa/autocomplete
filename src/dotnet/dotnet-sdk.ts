const completionSpec: Fig.Spec = {
  name: "sdk",
  description: ".NET SDK Command",
  subcommands: [
    {
      name: "check",
      description: ".NET SDK Check Command",
    },
  ],
};

export default completionSpec;
