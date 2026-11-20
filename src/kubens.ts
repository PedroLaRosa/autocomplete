// kubens v0.11.0 (latest tag of ahmetb/kubectx, same as Homebrew, 2026-11-19).
// Source: static read of cmd/kubens/flags.go and help.go plus the shipped completion/ scripts at tag v0.11.0; the binary was not run.
// Added -V/--version, -u/--unset and -f/--force.

const completionSpec: Fig.Spec = {
  name: "kubens",
  description: "Switch between Kubernetes-namespaces",
  additionalSuggestions: [
    {
      name: "-",
      priority: 85,
      description: "Switch to previous namespace within the current context",
      icon: "fig://icon?type=asterisk",
    },
  ],
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for kubens",
    },
    {
      name: ["--version", "-V"],
      description: "Show version",
    },
    {
      name: ["--current", "-c"],
      description: "Show current namespace",
    },
    {
      name: ["--unset", "-u"],
      description: "Unset the namespace choice (set to 'default')",
    },
    {
      name: ["--force", "-f"],
      description:
        "Force change the active namespace of the current context, even if it does not exist",
    },
  ],
  args: {
    name: "namespace",
    generators: [
      {
        script: ["bash", "-c", "kubens | grep -v $(kubens -c)"],
        postProcess: (out) =>
          out.split("\n").map((item) => ({
            name: item,
            priority: 90,
            icon: "fig://icon?type=kubernetes",
          })) as Fig.Suggestion[],
      },
      {
        script: ["kubens", "-c"],
        postProcess: (out) => {
          return !out
            ? []
            : [
                {
                  name: out,
                  priority: 100,
                  icon: "⭐️",
                },
              ];
        },
      },
    ],
    isOptional: true,
  },
};
export default completionSpec;
