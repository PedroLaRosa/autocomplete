// Azure CLI v2.93.0 added as a new version file next to 2.53.0 (PyPI azure-cli 2.93.0, 2026-11-19). Source: command table of azure-cli 2.93.0 loaded via azure.cli.core, core modules only
// 2.93.0 was generated from the CLI's own parser and help data (hidden and expired commands/options skipped); extension groups such as az ml or az spring are not part of it.
// 2.53.0 is kept unchanged for older CLI versions (it still contains many extension groups).
import { createVersionedSpec } from "@tabsmith/autocomplete-helpers";
const versionFiles = ["2.53.0", "2.93.0"];
export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) =>
  JSON.parse(
    (
      await executeShellCommand({
        command: "az",
        args: ["version", "-o", "json"],
      })
    ).stdout
  )["azure-cli"];
export default createVersionedSpec("az", versionFiles);
