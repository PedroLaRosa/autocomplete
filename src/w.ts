// w (macOS 15.5 BSD, man w, 2026-11-19). Source: `man w`
const completionSpec: Fig.Spec = {
  name: "w",
  description: "Display who is logged in and what they are doing",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      name: "--libxo",
      description:
        "Generate output via libxo in human or machine readable formats",
      args: {
        name: "options",
        suggestions: ["json", "xml", "html", "text", "pretty", "warn"],
      },
    },
    {
      name: "-h",
      description: "Suppress the heading",
    },
    {
      name: "-i",
      description: "Output is sorted by idle time",
    },
    {
      name: "-n",
      description:
        "Do not resolve network addresses; twice resolves utmp hostnames to addresses",
      isRepeatable: 2,
    },
  ],
  args: {
    name: "user",
    isVariadic: true,
    isOptional: true,
  },
};
export default completionSpec;
