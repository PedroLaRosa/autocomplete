// @usermn/sdc v0.0.8 (npm latest dist-tag, 2026-11-19; last published 2023-02, upstream mrhappyma/sdc). Source: built/sdc.js of the
// npm tarballs for 0.0.7 and 0.0.8 (commander definitions; the two differ only in the version string), read statically, not run.
// Not covered: the `generate-fig-spec` helper that @fig/complete-commander adds, which is a spec-generation aid rather than a user command.
import { createVersionedSpec } from "@tabsmith/autocomplete-helpers";
const versionFiles = ["0.0.0"];
export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  return (
    await executeShellCommand({
      command: "npx",
      args: ["@usermn/sdc", "--version"],
    })
  ).stdout;
};
export default createVersionedSpec("@usermn/sdc", versionFiles);
