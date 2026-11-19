// envchain v1.1.0 (GitHub release sorah/envchain, 2024-04-23). Source: envchain.c usage and argv parser at v1.1.0
const namespaces: Fig.Generator = {
  script: ["envchain", "--list"],
  postProcess: (output) => {
    return Array.from(new Set(output.split("\n"))).map((namespace) => {
      return {
        name: namespace,
        description: `NAMESPACE ${namespace}`,
      };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "envchain",
  description:
    "Set environment variables with macOS keychain or D-Bus secret service",
  args: [
    {
      name: "NAMESPACE",
      description: "Comma-separated list of namespaces",
      generators: namespaces,
    },
    { name: "CMD", isCommand: true },
  ],
  subcommands: [
    {
      name: ["-s", "--set"],
      description:
        "Add keychain item of environment variable +ENV+ for namespace +NAMESPACE+",
      icon: "fig://icon?type=option",
      args: [
        {
          name: "NAMESPACE",
          generators: namespaces,
        },
        {
          name: "ENV",
          isVariadic: true,
        },
      ],
      options: [
        {
          name: ["-n", "--noecho"],
          description: "Do not echo user input",
        },
        {
          name: ["-p", "--require-passphrase"],
          description: "Always ask for keychain passphrase",
          exclusiveOn: ["--no-require-passphrase"],
        },
        {
          name: ["-P", "--no-require-passphrase"],
          description: "Do not ask for keychain passphrase",
          exclusiveOn: ["--require-passphrase"],
        },
      ],
    },
    {
      name: ["-l", "--list"],
      description:
        "List namespaces, or the variables of NAMESPACE when one is given",
      icon: "fig://icon?type=option",
      args: {
        name: "NAMESPACE",
        isOptional: true,
        generators: namespaces,
      },
      options: [
        {
          name: ["-v", "--show-value"],
          description: "Print values along with variable names",
        },
      ],
    },
    {
      name: "--unset",
      description: "Remove variables ENV from namespace NAMESPACE",
      icon: "fig://icon?type=option",
      args: [
        {
          name: "NAMESPACE",
          generators: namespaces,
        },
        {
          name: "ENV",
          isVariadic: true,
        },
      ],
    },
  ],
};
export default completionSpec;
