// figterm v1.10.1 (last aws/amazon-q-developer-cli tag that still contains crates/figterm; removed upstream 2025-07, 2026-11-19).
// Source: crates/figterm/src/cli.rs (clap 4.5.37 derive: version, about, trailing `-- <command>...`),
// identical to the 2024-10 source release. Upstream is no longer maintained (Fig became Amazon Q, now Kiro CLI);
// no standalone figterm binary was run.
const completionSpec: Fig.Spec = {
  name: "figterm",
  description: "Fig's terminal layer",
  options: [
    {
      name: ["--help", "-h"],
      description: "Print help",
    },
    {
      name: ["--version", "-V"],
      description: "Print version",
    },
    {
      name: "--",
      description: "Run the given command instead of the default shell",
      args: {
        name: "command",
        description: "Command and arguments to run in the pseudo-terminal",
        isCommand: true,
      },
    },
  ],
};

export default completionSpec;
