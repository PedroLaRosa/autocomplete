// Infracost v2.19.1 (Homebrew formula infracost -> github.com/infracost/cli tag v2.19.1 released 2026-11-12, 2026-11-20). Source: see below.
// 2.0.0.ts: cobra command and flag definitions read in main.go, internal/cmds/*.go, internal/config and pkg/auth at v2.19.1 (not run, source only).
// 0.10.0.ts: legacy v0.10.50 CLI (github.com/infracost/infracost), compared against cmd/infracost/*.go at v0.10.50. 0.9.0.ts is unchanged and was not re-verified.
import { createVersionedSpec } from "@tabsmith/autocomplete-helpers";
import { clean } from "semver";
const versionFiles = ["0.9.0", "0.10.0", "2.0.0"];

export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  const { stdout } = await executeShellCommand({
    command: "infracost",
    // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
    args: ["--version"],
  });
  // v0.x prints "Infracost v0.10.50", v2 prints "infracost version v2.19.1"
  return clean(stdout.match(/\d+\.\d+\.\d+/)?.[0] ?? "");
};

export default createVersionedSpec("infracost", versionFiles);
