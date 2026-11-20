// pip3 v26.3 (PyPI latest, 2026-11-19). Source: pip3 is the second console_scripts entry point of the same pip wheel
// (pip-26.3 entry_points.txt: pip=pip._internal.cli.main:cli, pip3=...cli), so this spec reuses the pip spec
// (src/pip.ts, synced to pip 26.3) and only renames it; the wheel's command table matches that spec.
import pipCompletionSpec from "./pip";

const completionSpec: Fig.Spec = {
  ...pipCompletionSpec,
  name: "pip3",
};

export default completionSpec;
