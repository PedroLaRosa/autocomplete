// Aftman v0.3.0 (latest GitHub tag LPGhatguy/aftman, 2024-05; project is deprecated/no longer maintained upstream, 2026-11-19).
// Source: static read of src/cli/mod.rs (clap derive definitions) at tag v0.3.0, not run
const completionSpec: Fig.Spec = {
  name: "aftman",
  description:
    "A toolchain manager, enabling project-specific command line tools",
  subcommands: [
    {
      name: "init",
      description: "Initialize a new Aftman manifest file",
      args: {
        name: "path",
        description:
          "The folder to initialize the manifest file in. Defaults to the current directory",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: "list",
      description: "List all existing tools managed by Aftman",
    },
    {
      name: "add",
      description: "Add a new tool to Aftman and install it",
      options: [
        {
          name: "--global",
          description:
            "Install this tool globally by adding it to ~/.aftman/aftman.toml instead of the nearest aftman.toml file",
        },
      ],
      args: [
        {
          name: "tool_spec",
          description:
            "A tool spec describing where to get the tool and what version to install (owner/repo[@version])",
        },
        {
          name: "tool_alias",
          description: "The name that will be used to run the tool",
          isOptional: true,
        },
      ],
    },
    {
      name: "update",
      description:
        "Update one or more tools that are managed by Aftman (not yet implemented in v0.3.0)",
      options: [
        {
          name: "--global",
          description:
            "Update this tool globally by adding it to ~/.aftman/aftman.toml instead of the nearest aftman.toml file that mentions it",
        },
        {
          name: "--latest",
          description:
            "Ignore semantic versioning and upgrade to the latest stable versions",
        },
      ],
      args: {
        name: "aliases_or_specs",
        description:
          "One or more tools to update, by alias or by name. If none are given, update all tools",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "install",
      description:
        "Install all tools listed by Aftman files from the current directory",
      options: [
        {
          name: "--no-trust-check",
          description:
            "Skip checking if these tools have been installed before. Recommended only on CI machines",
        },
        {
          name: "--skip-untrusted",
          description: "Skip, rather than error, if a tool was not trusted",
        },
      ],
    },
    {
      name: "trust",
      description: "Mark the given tool name as being trusted",
      args: {
        name: "name",
        description: "The tool to mark as trusted",
      },
    },
    {
      name: "self-update",
      description:
        "Update Aftman from the internet (not yet implemented in v0.3.0)",
    },
    {
      name: "self-install",
      description:
        "Install Aftman and update all references to it. Run this after upgrading Aftman manually",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help information",
      isPersistent: true,
    },
    {
      name: ["-V", "--version"],
      description: "Print version information",
    },
  ],
};
export default completionSpec;
