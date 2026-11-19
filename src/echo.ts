// echo (macOS BSD /bin/echo from Apple OSS shell_cmds-329, man page dated 2003-04-12, 2026-11-19). Source: apple-oss-distributions/shell_cmds echo/echo.1 + echo.c; -e/-E kept from the existing spec (bash 5.2 `help echo`, GNU coreutils echo), they are not understood by macOS /bin/echo. Not run on macOS.
const environmentVariableGenerator: Fig.Generator = {
  custom: async (tokens, _, context) => {
    if (tokens.length < 3 || tokens[tokens.length - 1].startsWith("$")) {
      return Object.keys(context.environmentVariables).map((suggestion) => ({
        name: `$${suggestion}`,
        type: "arg",
        description: "Environment Variable",
      }));
    } else {
      return [];
    }
  },
  trigger: "$",
};

const completionSpec: Fig.Spec = {
  name: "echo",
  description: "Write arguments to the standard output",
  args: {
    name: "string",
    isVariadic: true,
    optionsCanBreakVariadicArg: false,
    suggestCurrentToken: true,
    generators: environmentVariableGenerator,
  },
  options: [
    {
      name: "-n",
      description: "Do not print the trailing newline character",
    },
    {
      name: "-e",
      description:
        "Interpret backslash escape sequences (shell builtin and GNU echo only)",
    },
    {
      name: "-E",
      description:
        "Disable interpretation of backslash escape sequences (shell builtin and GNU echo only)",
    },
  ],
};

export default completionSpec;
