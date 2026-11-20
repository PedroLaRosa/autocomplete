// create-completion-spec v1.1.9 (npm latest, last published 2022-08; 2026-11-19).
// Source: cli/create-completion-spec/src/program.ts in withfig/autocomplete-tools (HEAD 2025-01-07, same version) and the npm tarball.
// Upstream is unmaintained. Removed the `help` subcommand: commander 9.5 only adds the implicit one when a command has subcommands,
// and here `help` would be taken as the spec name.
const completionSpec: Fig.Spec = {
  name: "create-completion-spec",
  description: "Setup fig folder and create spec with the given name",
  options: [
    {
      name: "--here",
      description: "Set if the spec should be created in the current folder",
    },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      priority: 49,
    },
  ],
  args: { name: "name" },
};
export default completionSpec;
