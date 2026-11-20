// fly v0.5.13 (alias of flyctl; GitHub tag superfly/flyctl v0.5.13, cross-checked with the Homebrew formula flyctl 0.5.13, the current stable release; 2026-11-19).
// Source: re-exports the flyctl completion spec in ./flyctl.ts (itself synced to v0.5.13 from the cobra command tree in the Go source) under the name "fly".
// Newer upstream tags (v2026.x-prNNNN) are PR builds, not releases. Nothing in this file besides the header changed.

// Completion spec for fly, alias to the flyctl CLI.
// See completion spec in the ./flyctl.ts file

// Note: Most installations of flyctl also alias flyctl to fly as a command
// name and this will become the default name in the future. During the
// transition, note that where you see flyctl as a command it can be replaced
// with fly.

import completionSpec from "./flyctl";

export default {
  ...completionSpec,
  name: "fly",
};
