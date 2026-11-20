// unset shell builtin (bash 5.3 `help unset`, zsh 5.9.2 zshbuiltins(1), 2026-11-19). Source: bash 5.3 builtins/set.def (bash_5.3.orig.tar.xz) and zsh 5.9.2 Doc/Zsh/builtins.yo + Src/builtin.c option table; not run on macOS
const environmentVariableGenerator: Fig.Generator = {
  script: ["env"],
  postProcess: (out) =>
    out.length === 0
      ? []
      : out
          .split("\n")
          .map((env) => env.split("=")[0])
          .map((suggestion) => ({
            name: `${suggestion}`,
            type: "arg",
            description: "Environment Variable",
          })),
};

const completionSpec: Fig.Spec = {
  name: "unset",
  description: "Unset values and attributes of shell variables and functions",
  options: [
    {
      name: "-f",
      description: "Treat each name as a shell function",
    },
    {
      name: "-m",
      description:
        "Treat each name as a pattern and unset all matching parameters (zsh)",
    },
    {
      name: "-n",
      description:
        "Treat each name as a name reference and unset the variable itself rather than the variable it references (bash)",
    },
    {
      name: "-v",
      description: "Treat each name as a shell variable (default)",
    },
  ],
  args: {
    name: "name",
    isVariadic: true,
    generators: environmentVariableGenerator,
  },
};
export default completionSpec;
