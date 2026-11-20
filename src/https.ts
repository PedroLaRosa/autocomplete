// HTTPie https v3.2.4 (latest release on PyPI/GitHub, 2026-11-19). Source: same parser definition as `http` (httpie/cli/definition.py at tag 3.2.4, see src/http.ts); `https` is the same command with the default scheme set to https.
import completionSpec from "./http";
export default {
  ...completionSpec,
  name: "https",
};
