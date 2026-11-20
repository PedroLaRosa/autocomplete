// Capacitor CLI v8.6.2 (npm @capacitor/cli dist-tag latest, 2026-11-20). `cap` is the second bin alias of @capacitor/cli
// (package.json bin: capacitor, cap); this spec re-exports src/capacitor.ts, which was synced from the statically read
// @capacitor/cli@8.6.2 package (commander definitions) and the capacitor-docs CLI pages; the CLI was not executed.
import capacitor from "./capacitor";

const completionSpec: Fig.Spec = {
  ...capacitor,
  name: "cap",
};

export default completionSpec;
