// Nuxt v4.6.4 (npm "latest", 2026-11-20). The nuxt package's `nuxt` binary is the
// same CLI as nuxi (@nuxt/cli 4.0.3, published 2026-11-03), so this spec reuses
// ./nuxi. Source: command and argument definitions in the published @nuxt/cli
// 4.0.3 npm package, read statically; the binary was not run.
// The old Nuxt 2 commands (webpack, nuxt start as a production server, ...) were
// removed: Nuxt 2 is end-of-life and no longer what `nuxt` installs.
import nuxiSpec from "./nuxi";

const completionSpec: Fig.Spec = {
  ...(nuxiSpec as Fig.Subcommand),
  name: "nuxt",
};

export default completionSpec;
