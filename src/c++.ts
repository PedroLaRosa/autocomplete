// c++ (no release of its own: generic name of the system C++ compiler, 2026-11-20). Source: alias of src/clang++.ts, which tracks clang++ v23.1.6
// (llvmorg-23.1.6, synced 2026-11-19 from Options.td / LangStandards.def, read statically; the binary was not run). c++ is the Apple clang driver
// on macOS and an alternatives symlink to g++ on Debian/Ubuntu (checked locally; GCC options are in src/g++.ts, v16.2.0), so no option table
// is kept here. Left on the clang++ option set, as before.
import clangpp from "./clang++";
const completionSpec: Fig.Spec = {
  ...clangpp,
  name: "c++",
  description: "C++ compiler",
};
export default completionSpec;
