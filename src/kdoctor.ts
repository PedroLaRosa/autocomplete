// KDoctor v1.1.0 (latest GitHub release tag, checked via git ls-remote and the Homebrew formula, 2026-11-19).
// Source: static read of the clikt option definitions in kdoctor/src/commonMain/.../Main.kt at tag v1.1.0 and the
// README `kdoctor -h` output; macOS-only tool, not run here.
const completionSpec: Fig.Spec = {
  name: "kdoctor",
  description:
    "Tool that helps to set up the environment for Kotlin Multiplatform Mobile app development",
  options: [
    {
      name: "--version",
      description: "Report a version of KDoctor",
    },
    {
      name: ["--verbose", "-v"],
      description: "Report an extended information",
    },
    {
      name: ["--all", "-a"],
      description:
        "Run extra diagnostics such as a build of a synthetic project and an analysis of a project in the current directory",
    },
    {
      name: "--team-ids",
      description: "Report all available Apple dev team ids",
    },
    {
      name: ["--help", "-h"],
      description: "Show this message and exit",
    },
    {
      name: "--debug",
      description: "Enable debug logging",
      hidden: true,
    },
    {
      name: "--compatibilityJson",
      description: "Use a local compatibility JSON file",
      hidden: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--templateProject",
      description: "Tag of the template project to build",
      hidden: true,
      args: {
        name: "tag",
      },
    },
  ],
};
export default completionSpec;
