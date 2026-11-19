const completionSpec: Fig.Spec = {
  name: "help",
  description: ".NET CLI help utility",
  args: {
    name: "command_name",
    description: "The SDK command to launch online help for",
    isOptional: true,
    isVariadic: true,
  },
};

export default completionSpec;
