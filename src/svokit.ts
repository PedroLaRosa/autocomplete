// svokit v3.9.1 (npm svokit latest, 2026-11-19). Source: cli.js (cac definitions) and setup.js of the svokit-3.9.1 npm tarball read statically; the CLI was not executed.
// can be found at https://github.com/mavthedev/svokit.io
/*
  Svokit is a library that combines sveltekit with socket.io.
*/

const completionSpec: Fig.Spec = {
  name: "svokit",
  description: "Runs built svokit project",
  subcommands: [
    {
      name: "setup",
      description: "Setup svokit config (beta)",
    },
    {
      name: "run",
      description: "Run built svokit project",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for svokit",
    },
  ],
};
export default completionSpec;
