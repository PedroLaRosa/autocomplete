// wasm-pack v0.15.1 (GitHub release wasm-bindgen/wasm-pack, crates.io + Homebrew formula, 2026-11-19). Source: clap definitions in src/lib.rs, src/command/{mod,build,test}.rs, src/command/publish/access.rs and src/install/mode.rs at tag v0.15.1 (read statically, binary not run). Upstream moved from rustwasm/wasm-pack to wasm-bindgen/wasm-pack.
const modeFlag = (values: string[], description: string): Fig.Option => ({
  name: ["--mode", "-m"],
  description,
  args: {
    name: "mode",
    default: "normal",
    suggestions: values,
  },
});

const pkgDirFlag: Fig.Option = {
  name: ["--pkg-dir", "-d"],
  description:
    "The name of the output directory where the npm package is stored",
  args: {
    name: "pkg-dir",
    default: "pkg",
    template: "folders",
  },
};

const cratePathArg: Fig.Arg = {
  name: "path",
  description:
    "The path to the Rust crate. If not set, searches up the path from the current directory",
  isOptional: true,
  template: "folders",
};

const panicUnwindDescription =
  "Requires the nightly Rust toolchain; uses `-Z build-std` to rebuild `std` with `-Cpanic=unwind` so panics can be caught at FFI boundaries instead of aborting the WebAssembly instance";

const completionSpec: Fig.Spec = {
  name: "wasm-pack",
  description: "Pack and publish your wasm",
  subcommands: [
    {
      name: ["build", "init"],
      icon: "🏗️",
      description: "Build an npm package",
      options: [
        {
          name: ["--scope", "-s"],
          description: "The npm scope to use in package.json, if any",
          args: { name: "scope" },
        },
        modeFlag(["no-install", "normal", "force"], "Sets steps to be run"),
        {
          name: "--no-typescript",
          description:
            "Do not generate a *.d.ts file for the generated JS file",
        },
        {
          name: "--no-gitignore",
          description:
            "Skip generating `.gitignore` file in the output directory",
        },
        {
          name: "--weak-refs",
          description: "Enable usage of the JS weak references proposal",
        },
        {
          name: "--reference-types",
          description: "Enable usage of WebAssembly reference types",
        },
        {
          name: ["--target", "-t"],
          description: "Sets the target environment",
          args: {
            name: "target",
            default: "bundler",
            suggestions: ["bundler", "nodejs", "web", "no-modules", "deno"],
          },
        },
        {
          name: "--debug",
          description: "Deprecated. Renamed to `--dev`",
          deprecated: true,
        },
        {
          name: "--dev",
          description:
            "Create a development build. Enable debug info, and disable optimizations",
          exclusiveOn: ["--release", "--profiling", "--profile"],
        },
        {
          name: "--release",
          description:
            "Create a release build. Enable optimizations and disable debug info",
          exclusiveOn: ["--dev", "--profiling", "--profile"],
        },
        {
          name: "--profiling",
          description:
            "Create a profiling build. Enable optimizations and debug info",
          exclusiveOn: ["--dev", "--release", "--profile"],
        },
        {
          name: "--profile",
          description: "User-defined cargo profile",
          exclusiveOn: ["--dev", "--release", "--profiling"],
          args: { name: "profile" },
        },
        {
          name: ["--out-dir", "-d"],
          description: "Sets the output directory with a relative path",
          args: {
            name: "out-dir",
            default: "pkg",
            template: "folders",
          },
        },
        {
          name: "--out-name",
          description: "Sets the output file names. Defaults to package name",
          args: { name: "out-name" },
        },
        {
          name: ["--no-pack", "--no-package"],
          description: "Do not generate a package.json",
        },
        {
          name: ["--no-opt", "--no-optimization"],
          description: "Skip optimization with wasm-opt",
        },
        {
          name: "--panic-unwind",
          description: `Build with panic=unwind. ${panicUnwindDescription}`,
        },
      ],
      args: [
        cratePathArg,
        {
          name: "extra-options",
          description: "List of extra options to pass to `cargo build`",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      args: {
        name: "subcommand",
        isOptional: true,
        template: "help",
      },
    },
    {
      name: ["login", "adduser", "add-user"],
      icon: "👤",
      description: "Add an npm registry user account",
      options: [
        {
          name: ["--registry", "-r"],
          description:
            "The base URL of the npm package registry. If scope is also specified, this registry will only be used for packages with that scope",
          args: {
            name: "registry",
            default: "https://registry.npmjs.org/",
          },
        },
        {
          name: ["--scope", "-s"],
          description:
            "Associate the user and login credentials given with the specified scope",
          args: { name: "scope" },
        },
        {
          name: ["--auth-type", "-t"],
          description: "What authentication strategy to use with adduser/login",
          args: {
            name: "auth-type",
            default: "legacy",
            suggestions: ["legacy", "sso", "saml", "oauth"],
          },
        },
      ],
    },
    {
      name: "new",
      icon: "🐑",
      description: "Create a new project with a template",
      options: [
        {
          name: "--template",
          description: "The URL to the template",
          args: {
            name: "template",
            default: "https://github.com/wasm-bindgen/wasm-pack",
          },
        },
        modeFlag(
          ["no-install", "normal", "force"],
          "Should we install or check the presence of binary tools"
        ),
      ],
      args: {
        name: "name",
        description: "The name of the project",
      },
    },
    {
      name: "pack",
      icon: "📦",
      description: "Create a tarball of the npm package (does not publish)",
      options: [pkgDirFlag],
      args: cratePathArg,
    },
    {
      name: "publish",
      icon: "🎆",
      description: "Pack and publish a package to npm",
      options: [
        {
          name: ["--target", "-t"],
          description: "Sets the target environment",
          args: {
            name: "target",
            default: "bundler",
            suggestions: ["bundler", "nodejs", "web", "no-modules"],
          },
        },
        {
          name: ["--access", "-a"],
          description: "The access level for the package to be published",
          args: {
            name: "access",
            suggestions: [
              { name: "public", description: "Access is granted to all" },
              {
                name: "restricted",
                description:
                  "Access is restricted, granted via npm permissions (must be a scoped package)",
              },
              {
                name: "private",
                description: "Alias for restricted",
              },
            ],
          },
        },
        {
          name: "--tag",
          description:
            "The distribution tag being used for publishing. See https://docs.npmjs.com/cli/dist-tag",
          args: { name: "tag" },
        },
        pkgDirFlag,
      ],
      args: cratePathArg,
    },
    {
      name: "test",
      description: "Run tests for WebAssembly module",
      options: [
        {
          name: "--node",
          description: "Run the tests in Node.js",
        },
        {
          name: "--firefox",
          description:
            "Run the tests in Firefox. This machine must have a Firefox installation",
        },
        {
          name: "--geckodriver",
          description:
            "The path to the `geckodriver` WebDriver client for testing in Firefox. Implies `--firefox`",
          args: { name: "geckodriver", template: "filepaths" },
        },
        {
          name: "--chrome",
          description:
            "Run the tests in Chrome. This machine must have a Chrome installation",
        },
        {
          name: "--chromedriver",
          description:
            "The path to the `chromedriver` WebDriver client for testing in Chrome. Implies `--chrome`",
          args: { name: "chromedriver", template: "filepaths" },
        },
        {
          name: "--safari",
          description:
            "Run the tests in Safari. This machine must have a Safari installation, and the `safaridriver` WebDriver client must be on the `$PATH` or given with `--safaridriver`",
        },
        {
          name: "--safaridriver",
          description:
            "The path to the `safaridriver` WebDriver client for testing in Safari. Implies `--safari`",
          args: { name: "safaridriver", template: "filepaths" },
        },
        {
          name: "--headless",
          description:
            "When running browser tests, run the browser in headless mode without any UI or windows",
        },
        modeFlag(["no-install", "normal"], "Sets steps to be run"),
        {
          name: ["--release", "-r"],
          description: "Build with the release profile",
        },
        {
          name: "--panic-unwind",
          description: `Build tests with panic=unwind. ${panicUnwindDescription}`,
        },
      ],
      args: {
        name: "path-and-extra-options",
        description:
          "Path to the Rust crate, and extra options to pass to `cargo test`",
        isOptional: true,
        isVariadic: true,
        template: "folders",
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Print help",
      isPersistent: true,
    },
    {
      name: ["--quiet", "-q"],
      description: "No output printed to stdout",
    },
    {
      name: ["--version", "-V"],
      description: "Print version",
    },
    {
      name: ["--verbose", "-v"],
      description: "Log verbosity is based off the number of v used",
      isRepeatable: true,
    },
    {
      name: "--log-level",
      description:
        "The maximum level of messages that should be logged by wasm-pack",
      args: {
        name: "log-level",
        default: "info",
        suggestions: ["info", "warn", "error"],
      },
    },
  ],
};

export default completionSpec;
