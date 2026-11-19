// kubectx v0.11.0 (latest tag of ahmetb/kubectx, same as Homebrew, 2026-11-19).
// Source: static read of cmd/kubectx/flags.go and help.go plus the shipped completion/ scripts at tag v0.11.0; the binary was not run.
// Added -V/--version, -s/--shell and -r/--readonly (isolated and read-only shells) and the NEW_NAME=NAME rename syntax.

const contextSuggestions = (out: string, priority: number) =>
  out
    .split("\n")
    .filter(Boolean)
    .map((item) => ({
      name: item,
      priority,
      icon: "fig://icon?type=kubernetes",
    })) as Fig.Suggestion[];

const contextGenerator: Fig.Generator = {
  script: ["kubectx"],
  postProcess: (out) => contextSuggestions(out, 95),
};

const shellContextOption = (
  name: Fig.SingleOrArray<string>,
  description: string
): Fig.Option => ({
  name,
  description,
  args: {
    name: "context",
    isOptional: true,
    generators: contextGenerator,
  },
});

const completionSpec: Fig.Spec = {
  name: "kubectx",
  description: "Switch between Kubernetes-contexts",
  additionalSuggestions: [
    {
      name: "-",
      priority: 85,
      description: "Switch to previous context",
      icon: "fig://icon?type=asterisk",
    },
  ],
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for kubectx",
    },
    {
      name: ["--version", "-V"],
      description: "Show version",
    },
    {
      name: ["--current", "-c"],
      description: "Show current context",
    },
    {
      name: ["--unset", "-u"],
      description: "Unset the current context",
    },
    shellContextOption(
      ["--shell", "-s"],
      "Start a shell scoped to a context (interactively select one if omitted)"
    ),
    shellContextOption(
      ["--readonly", "-r"],
      "Start a read-only shell for a context (interactively select one if omitted)"
    ),
    {
      name: "-d",
      description: "Delete context",
      isDangerous: true,
      args: {
        name: "context",
        isVariadic: true,
        generators: {
          script: ["kubectx"],
          postProcess: (out) => [
            {
              name: ".",
              description: "Delete current context",
              priority: 90,
              icon: "fig://icon?type=asterisk",
            },
            ...contextSuggestions(out, 95),
          ],
        },
      },
    },
  ],
  args: {
    name: "context",
    description:
      "Context to switch to, or NEW_NAME=NAME to rename a context (NAME can be '.' for the current one)",
    generators: [
      {
        script: ["bash", "-c", "kubectx | grep -v $(kubectx -c)"],
        postProcess: (out) => contextSuggestions(out, 90),
      },
      {
        script: ["kubectx", "-c"],
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
