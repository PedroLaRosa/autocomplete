// @fig/publish-spec v1.2.3 (npm latest, last published 2022-07; 2026-11-19).
// Source: cli/publish-spec/src/program.ts in withfig/autocomplete-tools (HEAD 2025-01-07, same version) and the npm tarball.
// Upstream is unmaintained. Removed the `help` subcommand: commander 9.5 only adds the implicit one when a command has subcommands.
const completionSpec: Fig.Spec = {
  name: "@fig/publish-spec",
  description: "Publish a spec to fig teams",
  options: [
    { name: ["-V", "--version"], description: "Output the version number" },
    {
      name: ["-i", "--interactive"],
      description: "Publish a spec interactively",
    },
    {
      name: ["-t", "--token"],
      description: "A fig token",
      args: { name: "string" },
    },
    {
      name: "--team",
      description: "Set the namespace of the published spec",
      args: { name: "string" },
    },
    {
      name: ["-n", "--name"],
      description: "Set the name of the published spec",
      args: { name: "string" },
    },
    {
      name: ["-p", "--spec-path"],
      description: "The local path of the spec to publish",
      args: { name: "path", template: ["filepaths"] },
    },
    {
      name: ["-b", "--binary-path"],
      description: "The path of the binary to run to generate the spec",
      args: { name: "path", template: ["filepaths"] },
    },
    {
      name: ["-s", "--subcommand-name"],
      description: "The subcommand of the binary used to generate the spec",
      args: { name: "string" },
    },
    {
      name: "--is-script",
      description:
        "The spec is a local script and will only be loaded when referenced in a fig/config.json file",
    },
    {
      name: ["-f", "--framework"],
      description: "Framework used to build the CLI",
      args: { name: "string" },
    },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      priority: 49,
    },
  ],
};
export default completionSpec;
