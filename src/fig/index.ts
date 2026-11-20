// Fig CLI v2.16.0 (newest version in src/fig/2.0.0.ts; kept as is, 2026-11-19). Not re-verified against a fig binary: the Fig product is
// discontinued (withfig/fig README: "Fig is now part of Amazon Q"), its CLI continued as `q` (aws/amazon-q-developer-cli, now Kiro CLI,
// see src/q.ts) and no fig 2.x binary or source is obtainable. Only the top-level command list was compared with the successor's
// 2024-10 source release (q_cli 1.4.5); commands Q dropped (ssh, team, invite, plugins, ...) stay because they existed in fig 2.x.
import { createVersionedSpec } from "@tabsmith/autocomplete-helpers";
const versionFiles = ["1.0.0", "2.0.0"];
export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  const { stdout } = await executeShellCommand({
    command: "fig",
    // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
    args: ["--version"],
  });
  return stdout.slice(stdout.indexOf(" ") + 1);
};
export default createVersionedSpec("fig", versionFiles);
