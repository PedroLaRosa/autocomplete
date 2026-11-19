// Maven v3.10.1 (latest stable on Maven Central 2026-11, 2026-11-19). Source: CLIManager.java at tag maven-3.10.1
// (apache/maven, maven-embedder), the commons-cli option definitions behind `mvn --help`; the binary was not run.
// Maven 4.0.0-rc-7 is still a release candidate and its options are not included.
const completionSpec: Fig.Spec = {
  name: "mvn",
  description: "Maven - a Java based project management and comprehension tool",
  options: [
    {
      name: ["--also-make", "-am"],
      description:
        "If project list is specified, also build projects required by the list",
    },
    {
      name: ["--also-make-dependents", "-amd"],
      description:
        "If project list is specified, also build projects that depend on projects on the list",
    },
    {
      name: ["--batch-mode", "-B"],
      description:
        "Run in non-interactive (batch) mode (disables output color)",
    },
    {
      name: ["--builder", "-b"],
      description: "The id of the build strategy to use",
      args: {
        name: "id of build strategy",
      },
    },
    {
      name: ["--strict-checksums", "-C"],
      description: "Fail the build if checksums don't match",
    },
    {
      name: ["--lax-checksums", "-c"],
      description: "Warn if checksums don't match",
    },
    {
      name: "--color",
      description: "Defines the color mode of the output",
      args: {
        name: "color mode",
        isOptional: true,
        suggestions: ["auto", "always", "never"],
      },
    },
    {
      name: ["--check-plugin-updates", "-cpu"],
      description: "Ineffective, only kept for backward compatibility",
      deprecated: true,
    },
    {
      name: ["--define", "-D"],
      description: "Define a user property",
      args: {
        name: "user property",
      },
    },
    {
      name: ["--errors", "-e"],
      description: "Produce execution error messages",
    },
    {
      name: ["--encrypt-master-password", "-emp"],
      description: "Encrypt master security password",
      args: {
        name: "master password",
        isOptional: true,
      },
    },
    {
      name: ["--encrypt-password", "-ep"],
      description: "Encrypt server password",
      args: {
        name: "server password",
        isOptional: true,
      },
    },
    {
      name: ["--file", "-f"],
      description:
        "Force the use of an alternate POM file (or directory with pom.xml)",
      args: {
        name: "path",
        template: ["filepaths", "folders"],
      },
    },
    {
      name: ["--fail-at-end", "-fae"],
      description:
        "Only fail the build afterwards; allow all non-impacted builds to continue",
    },
    {
      name: ["--fail-fast", "-ff"],
      description: "Stop at first failure in reactorized builds",
    },
    {
      name: ["--fail-never", "-fn"],
      description: "Never fail the build, regardless of project result",
    },
    {
      name: ["--global-settings", "-gs"],
      description: "Alternate path for the global settings file",
      args: {
        name: "path",
        template: ["filepaths"],
      },
    },
    {
      name: ["--global-toolchains", "-gt"],
      description: "Alternate path for the global toolchains file",
      args: {
        name: "path",
        template: ["filepaths"],
      },
    },
    {
      name: ["--help", "-h"],
      description: "Display help information",
    },
    {
      name: ["--log-file", "-l"],
      description:
        "Log file where all build output will go (disables output color)",
      args: {
        name: "path",
        template: ["filepaths"],
      },
    },
    {
      name: ["--legacy-local-repository", "-llr"],
      description:
        "UNSUPPORTED: Use of this option will make Maven invocation fail",
      deprecated: true,
    },
    {
      name: ["--non-recursive", "-N"],
      description: "Do not recurse into sub-projects",
    },
    {
      name: ["--no-plugin-registry", "-npr"],
      description: "Ineffective, only kept for backward compatibility",
      deprecated: true,
    },
    {
      name: ["--no-plugin-updates", "-npu"],
      description: "Ineffective, only kept for backward compatibility",
      deprecated: true,
    },
    {
      name: ["--no-snapshot-updates", "-nsu"],
      description: "Suppress SNAPSHOT updates",
    },
    {
      name: ["--no-transfer-progress", "-ntp"],
      description:
        "Do not display transfer progress when downloading or uploading",
    },
    {
      name: ["--offline", "-o"],
      description: "Work offline",
    },
    {
      name: ["--activate-profiles", "-P"],
      description: "Comma-delimited list of profiles to activate",
      args: {
        name: "profiles",
      },
    },
    {
      name: ["--projects", "-pl"],
      description:
        "Comma-delimited list of specified reactor projects to build instead of all projects. A project can be specified by [groupId]:artifactId or by its relative path",
      args: {
        name: "project list",
      },
    },
    {
      name: ["--quiet", "-q"],
      description: "Quiet output - only show errors",
    },
    {
      name: ["--resume-from", "-rf"],
      description: "Resume reactor from specified project",
      args: {
        name: "project",
      },
    },
    {
      name: ["--settings", "-s"],
      description: "Alternate path for the user settings file",
      args: {
        name: "path",
        template: ["filepaths"],
      },
    },
    {
      name: ["--toolchains", "-t"],
      description: "Alternate path for the user toolchains file",
      args: {
        name: "path",
        template: ["filepaths"],
      },
    },
    {
      name: ["--threads", "-T"],
      description:
        "Thread count, for instance 4 (int) or 2C/2.5C (int/float) where C is core multiplied",
      args: {
        name: "threads",
      },
    },
    {
      name: ["--update-snapshots", "-U"],
      description:
        "Forces a check for missing releases and updated snapshots on remote repositories",
    },
    {
      name: ["--update-metadata", "-UM"],
      description:
        "Forces updates of remote repository metadata (updates plugin prefixes, version ranges and snapshots)",
    },
    {
      name: ["--update-artifacts", "-UA"],
      description:
        "Forces checks for missing artifacts (retries cached retrieval errors)",
    },
    {
      name: ["--update-plugins", "-up"],
      description: "Ineffective, only kept for backward compatibility",
      deprecated: true,
    },
    {
      name: ["--version", "-v"],
      description: "Display version information",
    },
    {
      name: ["--show-version", "-V"],
      description: "Display version information WITHOUT stopping build",
    },
    {
      name: ["--debug", "-X"],
      description: "Produce execution debug output",
    },
    {
      name: ["--ignore-transitive-repositories", "-itr"],
      description:
        "Ignore remote repositories introduced by transitive dependencies",
    },
    {
      name: "--artifacts-update-policy",
      description:
        "The update policy to apply onto artifacts. The -UA option overrides this option with 'always'",
      args: {
        name: "policy",
        suggestions: ["always", "daily", "never"],
      },
    },
    {
      name: "--metadata-update-policy",
      description:
        "The update policy to apply onto metadata. The -UM option overrides this option with 'always'",
      args: {
        name: "policy",
        suggestions: ["always", "daily", "never"],
      },
    },
    {
      name: "--raw-streams",
      description: "Ignored (Maven 4 option)",
    },
  ],
  args: {
    name: "goal/phase",
    description: "Goal or phase to execute",
    isVariadic: true,
    suggestions: [
      // clean lifecycle
      "pre-clean",
      "clean",
      "post-clean",
      // default lifecycle
      "validate",
      "initialize",
      "generate-sources",
      "process-sources",
      "generate-resources",
      "process-resources",
      "compile",
      "process-classes",
      "generate-test-sources",
      "process-test-sources",
      "generate-test-resources",
      "process-test-resources",
      "test-compile",
      "process-test-classes",
      "test",
      "prepare-package",
      "package",
      "pre-integration-test",
      "integration-test",
      "post-integration-test",
      "verify",
      "install",
      "deploy",
      // site lifecycle
      "pre-site",
      "site",
      "post-site",
      "site-deploy",
    ],
  },
};
export default completionSpec;
