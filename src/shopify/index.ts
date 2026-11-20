// Shopify CLI v5.0.2 (npm @shopify/cli "latest" dist-tag, 2026-11-19). Source: oclif.manifest.json shipped in @shopify/cli@5.0.2
// (command tree, flags, enums, args) cross-checked against `shopify <command> --help` for all 112 visible commands; 5.0.0.ts is generated from it.
// Hidden/internal commands (plugins, kitchen-sink, docs:generate, ...) are left out. 2.0.0.ts and 3.0.0.ts are unchanged; 3.x/4.x CLIs still use 3.0.0.ts.
import { createVersionedSpec } from "@tabsmith/autocomplete-helpers";
const versionFiles = ["2.0.0", "3.0.0", "5.0.0"];
export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  const versionRegex = /\d+\.\d+\.\d+/;
  const { stdout } = await executeShellCommand({
    command: "shopify",
    // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
    args: ["version"],
  });
  return stdout.match(versionRegex)?.[0] ?? "";
};
export default createVersionedSpec("shopify", versionFiles);
