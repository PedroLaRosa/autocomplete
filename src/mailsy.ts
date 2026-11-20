// mailsy v5.0.0 (npm latest, last published 2024-05-24; upstream repo HEAD 2024-12-03 has no CLI changes; checked 2026-11-19).
// Source: static read of index.js (commander 9 definitions) from the npm tarball, identical to the GitHub repo's index.js; not run.
const completionSpec: Fig.Spec = {
  name: "mailsy",
  description: "⚡️ Quickly generate a disposable email straight from terminal",
  subcommands: [
    {
      name: "g",
      description: "Generate a new email",
    },
    {
      name: "m",
      description: "Fetch messages from the inbox",
    },
    {
      name: "d",
      description: "Delete account",
    },
    {
      name: "me",
      description: "Show details of the account",
    },
    {
      name: "help",
      description: "Get help for a command",
      args: { name: "command", isOptional: true, template: "help" },
    },
  ],
  options: [
    { name: ["-v", "--version"], description: "Output the current version" },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      priority: 49,
      isPersistent: true,
    },
  ],
};

export default completionSpec;
