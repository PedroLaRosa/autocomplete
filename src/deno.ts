// Deno v2.9.8 (latest stable release: tag v2.9.8 of denoland/deno, same as the Homebrew formula; 2026-11-19).
// Source: the Deno CLI's own arg-parser tables (libs/cli_parser/src/defs.rs and permission_help.rs, convert.rs,
// runtime/permissions/lib.rs, cli/tools/upgrade.rs, cli/schemas/lint-*.json) read from a source checkout of v2.9.8;
// the `deno` binary was not run, so `--help` output was not compared. Generators in src/deno/: lint rules from
// cli/schemas/lint-rules.v1.json, `deno doc --json` types from deno_doc 0.207.0 (JSON schema version 2),
// `generateVersions` still reads cdn.deno.land/deno/meta/versions.json (host unreachable here, not re-verified).
// Not enumerated: `deno deploy` and `deno sandbox` forward every argument to their own CLIs.
// Left out: `deno vendor` and --allow-hrtime/--deny-hrtime (removed in Deno 2), internal/testing flags, and
// undocumented hidden flags without help text (--unstable-byonm, --unstable-tsgo, --no-use-env-proxy, repl --json).

import {
  generateDocs,
  generateInstalledDenoScripts,
  generateLintRules,
  generateTasks,
  generateVersions,
  generateUrlScript,
} from "./deno/generators";

// Permission flags that take an optional, comma-separated list (`--allow-read[=<PATH>...]`)
function permissionFlag(
  name: Fig.SingleOrArray<string>,
  description: string,
  argName: string,
  extra?: Fig.Arg
): Fig.Option {
  return {
    name,
    description,
    isRepeatable: true,
    requiresSeparator: true,
    args: { name: argName, isOptional: true, ...extra },
  };
}

// Valid `--allow-sys` / `--deny-sys` API names (SysDescriptor::parse in runtime/permissions)
const sysApiNames = [
  "hostname",
  "inspector",
  "osRelease",
  "osUptime",
  "loadavg",
  "networkInterfaces",
  "systemMemoryInfo",
  "uid",
  "gid",
  "cpus",
  "homedir",
  "getegid",
  "statfs",
  "getPriority",
  "setPriority",
  "userInfo",
  "setegid",
  "seteuid",
  "setgid",
  "setuid",
  "ca",
  "umask",
];

// Options repeated in several commands
const checkOption: Fig.Option = {
  name: "--check",
  description: "Enable type-checking",
  requiresSeparator: true,
  exclusiveOn: ["--no-check"],
  args: { name: "check", isOptional: true, suggestions: ["all"] },
};

const watchOption: Fig.Option = {
  name: "--watch",
  description: "Watch for file changes and restart process automatically",
  isRepeatable: true,
  requiresSeparator: true,
  exclusiveOn: ["--hmr", "--watch-hmr", "--unstable-hmr"],
  args: { name: "watch", isOptional: true, template: "filepaths" },
};

const hmrOption: Fig.Option = {
  name: ["--hmr", "--watch-hmr", "--unstable-hmr"],
  description: "Watch for file changes and hot-replace modules",
  isRepeatable: true,
  requiresSeparator: true,
  exclusiveOn: ["--watch"],
  args: { name: "hmr", isOptional: true },
};

const watchExcludeOption: Fig.Option = {
  name: "--watch-exclude",
  description: "Exclude provided files/patterns from watch mode",
  isRepeatable: true,
  requiresSeparator: true,
  args: { name: "watch-exclude", isOptional: true, template: "filepaths" },
};

const noClearScreenOption: Fig.Option = {
  name: "--no-clear-screen",
  description: "Do not clear terminal screen when under watch mode",
  dependsOn: ["--watch"],
};

const extOption: Fig.Option = {
  name: "--ext",
  description: "Set content type of the supplied file",
  args: {
    name: "ext",
    suggestions: ["ts", "tsx", "js", "jsx", "mts", "mjs", "cts", "cjs"],
  },
};

const noCodeCacheOption: Fig.Option = {
  name: "--no-code-cache",
  description: "Disable V8 code cache feature",
};

const coverageOption: Fig.Option = {
  name: "--coverage",
  description: "Collect coverage profile data into DIR",
  requiresSeparator: true,
  exclusiveOn: ["--inspect", "--inspect-brk", "--inspect-wait"],
  args: { name: "coverage", isOptional: true, template: "folders" },
};

const tunnelOption: Fig.Option = {
  name: ["--tunnel", "--connected"],
  description: "Execute tasks with a tunnel to Deno Deploy",
  hidden: true,
};

const useEnvProxyOption: Fig.Option = {
  name: "--use-env-proxy",
  description:
    "Use HTTP_PROXY, HTTPS_PROXY, and NO_PROXY for node:http/node:https",
  exclusiveOn: ["--no-use-env-proxy"],
};

const permitNoFilesOption: Fig.Option = {
  name: "--permit-no-files",
  description: "Don't return an error code if no files were found",
};

const configOption: Fig.Option = {
  name: ["-c", "--config"],
  description: "Specify the configuration file",
  args: { name: "config", template: "filepaths" },
};

const noConfigOption: Fig.Option = {
  name: "--no-config",
  description: "Disable automatic loading of the configuration file",
};

const allowImportOption: Fig.Option = permissionFlag(
  ["-I", "--allow-import"],
  "Allow importing from remote hosts",
  "ip_or_hostname"
);

const denyImportOption: Fig.Option = permissionFlag(
  "--deny-import",
  "Deny importing from remote hosts",
  "ip_or_hostname"
);

const ignoreOption: Fig.Option = {
  name: "--ignore",
  description: "Ignore files",
  isRepeatable: true,
  requiresSeparator: true,
  args: { name: "ignore", isOptional: true, template: "filepaths" },
};

const nodeModulesDirOption: Fig.Option = {
  name: "--node-modules-dir",
  description:
    "Select the node_modules directory mode for npm packages (not a path)",
  requiresSeparator: true,
  args: { name: "node-modules-dir", isOptional: true },
};

const targetOption: Fig.Option = {
  name: "--target",
  description: "Target OS architecture",
  args: {
    name: "target",
    suggestions: [
      "x86_64-unknown-linux-gnu",
      "aarch64-unknown-linux-gnu",
      "x86_64-pc-windows-msvc",
      "aarch64-pc-windows-msvc",
      "x86_64-apple-darwin",
      "aarch64-apple-darwin",
    ],
  },
};

const includeOption: Fig.Option = {
  name: "--include",
  description:
    "Includes an additional module or file/directory in the compiled executable",
  isRepeatable: true,
  args: { name: "include", template: "filepaths" },
};

const excludeOption: Fig.Option = {
  name: "--exclude",
  description: "Excludes a file/directory in the compiled executable",
  isRepeatable: true,
  args: { name: "exclude", template: "filepaths" },
};

const excludeUnusedNpmOption: Fig.Option = {
  name: "--exclude-unused-npm",
  description:
    "Embed only the npm packages reachable from the module graph (managed npm; no node_modules directory)",
};

const rootOption: Fig.Option = {
  name: "--root",
  description: "Installation root",
  dependsOn: ["-g", "--global"],
  args: { name: "root", template: "folders" },
};

const skipTypesOption: Fig.Option = {
  name: "--skip-types",
  description: "Exclude @types/* packages from installation",
  dependsOn: ["--prod", "--production"],
};

const lockfileOnlyOption: Fig.Option = {
  name: "--lockfile-only",
  description: "Install only updating the lockfile",
  exclusiveOn: ["-g", "--global"],
};

const packageJsonOption: Fig.Option = {
  name: "--package-json",
  description:
    "Force using package.json for dependency management instead of deno.json",
  exclusiveOn: ["-g", "--global"],
};

const yesOption: Fig.Option = {
  name: ["-y", "--yes"],
  description: "Bypass the prompt and run with full permissions",
};

const recursiveOption: Fig.Option = {
  name: ["-r", "--recursive"],
  description: "Include all workspace members",
};

// Permission flags (`--help` documents them in a separate "Permission options" section)
const permissionOptions: Fig.Option[] = [
  { name: ["-A", "--allow-all"], description: "Allow all permissions" },
  permissionFlag(
    ["-R", "--allow-read"],
    "Allow file system read access",
    "path",
    { template: "filepaths" }
  ),
  permissionFlag("--deny-read", "Deny file system read access", "path", {
    template: "filepaths",
  }),
  permissionFlag(
    "--ignore-read",
    "Ignore file system read access with a `NotFound` error",
    "path",
    { template: "filepaths" }
  ),
  permissionFlag(
    ["-W", "--allow-write"],
    "Allow file system write access",
    "path",
    { template: "filepaths" }
  ),
  permissionFlag("--deny-write", "Deny file system write access", "path", {
    template: "filepaths",
  }),
  permissionFlag(
    ["-N", "--allow-net"],
    "Allow network access",
    "ip_or_hostname"
  ),
  permissionFlag("--deny-net", "Deny network access", "ip_or_hostname"),
  permissionFlag(
    ["-E", "--allow-env"],
    "Allow access to environment variables",
    "variable_name"
  ),
  permissionFlag(
    "--deny-env",
    "Deny access to environment variables",
    "variable_name"
  ),
  permissionFlag(
    "--ignore-env",
    "Ignore access to environment variables returning `undefined`",
    "variable_name"
  ),
  permissionFlag("--allow-run", "Allow running subprocesses", "program_name"),
  permissionFlag("--deny-run", "Deny running subprocesses", "program_name"),
  permissionFlag(
    ["-S", "--allow-sys"],
    "Allow access to OS information",
    "api_name",
    { suggestions: sysApiNames }
  ),
  permissionFlag("--deny-sys", "Deny access to OS information", "api_name", {
    suggestions: sysApiNames,
  }),
  permissionFlag(
    "--allow-ffi",
    "(Unstable) Allow loading dynamic libraries",
    "path",
    { template: "filepaths" }
  ),
  permissionFlag(
    "--deny-ffi",
    "(Unstable) Deny loading dynamic libraries",
    "path",
    { template: "filepaths" }
  ),
  allowImportOption,
  denyImportOption,
  {
    name: "--no-prompt",
    description: "Always throw if required permission wasn't passed",
  },
  {
    name: ["-P", "--permission-set"],
    description: "Load the permission set from the config file",
    requiresSeparator: true,
    args: { name: "name", isOptional: true },
  },
];

// Lockfile flags for commands that do not take the module options
const lockOptions: Fig.Option[] = [
  {
    name: "--lock",
    description: "Check the specified lock file",
    args: { name: "lock", isOptional: true, template: "filepaths" },
  },
  { name: "--no-lock", description: "Disable auto discovery of the lock file" },
  {
    name: ["--frozen-lockfile", "--frozen"],
    description: "Error out if lockfile is out of date",
    requiresSeparator: true,
    args: {
      name: "frozen-lockfile",
      isOptional: true,
      suggestions: ["true", "false"],
    },
  },
];

// Type-checking, module resolution, lockfile and certificate flags shared by most commands
const moduleOptions: Fig.Option[] = [
  {
    name: "--no-check",
    description:
      'Skip type-checking (with "remote", only ignore diagnostics from remote modules)',
    requiresSeparator: true,
    exclusiveOn: ["--check"],
    args: { name: "no-check", isOptional: true, suggestions: ["remote"] },
  },
  {
    name: ["--import-map", "--importmap"],
    description: "Load import map file from local file or remote URL",
    args: { name: "import-map", template: "filepaths" },
  },
  { name: "--no-remote", description: "Do not resolve remote modules" },
  { name: "--no-npm", description: "Do not resolve npm modules" },
  {
    name: "--node-modules-dir",
    description:
      "Select the node_modules directory mode for npm packages (not a path)",
    requiresSeparator: true,
    args: {
      name: "node-modules-dir",
      isOptional: true,
      suggestions: ["auto", "true", "manual", "none", "false"],
    },
  },
  {
    name: "--vendor",
    description:
      "Toggles local vendor folder usage for remote modules and a node_modules folder for npm packages",
    requiresSeparator: true,
    args: { name: "vendor", isOptional: true, suggestions: ["true", "false"] },
  },
  {
    name: ["--node-modules-linker", "--linker"],
    description: "Sets the linker mode for npm packages (isolated or hoisted)",
    requiresSeparator: true,
    args: { name: "node-modules-linker", suggestions: ["isolated", "hoisted"] },
  },
  configOption,
  {
    name: "--no-config",
    description: "Disable automatic loading of the configuration file",
    exclusiveOn: ["-c", "--config"],
  },
  ...lockOptions,
  {
    name: "--cert",
    description: "Load certificate authority from PEM encoded file",
    args: { name: "cert", template: "filepaths" },
  },
  {
    name: "--unsafely-ignore-certificate-errors",
    description: "DANGER: Disables verification of TLS certificates",
    isRepeatable: true,
    requiresSeparator: true,
    args: { name: "unsafely-ignore-certificate-errors", isOptional: true },
  },
  {
    name: ["--min-dep-age", "--minimum-dependency-age"],
    description:
      "(Unstable) Minimum age of dependencies to resolve, as minutes, an ISO-8601 duration or an RFC3339 timestamp",
    args: { name: "min-dep-age" },
  },
];

const reloadOption: Fig.Option = {
  name: ["-r", "--reload"],
  description: "Reload source code cache (recompile TypeScript)",
  isRepeatable: true,
  requiresSeparator: true,
  args: { name: "reload", isOptional: true },
};

// V8 inspector flags
const inspectorOptions: Fig.Option[] = [
  {
    name: "--inspect",
    description: "Activate inspector on host:port [default: 127.0.0.1:9229]",
    requiresSeparator: true,
    args: { name: "inspect", isOptional: true },
  },
  {
    name: "--inspect-brk",
    description:
      "Activate inspector on host:port, wait for debugger to connect and break at the start of user script",
    requiresSeparator: true,
    args: { name: "inspect-brk", isOptional: true },
  },
  {
    name: "--inspect-wait",
    description:
      "Activate inspector on host:port and wait for debugger to connect before running user code",
    requiresSeparator: true,
    args: { name: "inspect-wait", isOptional: true },
  },
  {
    name: "--inspect-publish-uid",
    description:
      "Where to publish the inspector WebSocket URL (stderr and/or http)",
    args: { name: "inspect-publish-uid", suggestions: ["stderr", "http"] },
  },
];

// Runtime flags shared by commands that execute code
const runtimeOptions: Fig.Option[] = [
  {
    name: "--cached-only",
    description: "Require that remote dependencies are already cached",
  },
  {
    name: "--location",
    description: "Value of globalThis.location used by some web APIs",
    args: { name: "location" },
  },
  {
    name: "--v8-flags",
    description: "Set V8 flags (use --v8-flags=--help to list all of them)",
    isRepeatable: true,
    requiresSeparator: true,
    args: { name: "v8-flags", isOptional: true },
  },
  {
    name: "--seed",
    description: "Set the random number generator seed",
    args: { name: "seed" },
  },
  {
    name: "--trace-ops",
    description: "Trace low-level op calls",
    hidden: true,
    isRepeatable: true,
    requiresSeparator: true,
    args: { name: "trace-ops", isOptional: true },
  },
  {
    name: ["--preload", "--import"],
    description: "A list of files that will be executed before the main module",
    isRepeatable: true,
    args: { name: "preload", template: "filepaths" },
  },
  {
    name: "--require",
    description:
      "A list of CommonJS modules that will be executed before the main module",
    isRepeatable: true,
    args: { name: "require", template: "filepaths" },
  },
  {
    name: "--conditions",
    description: "Custom conditions for npm package exports",
    isRepeatable: true,
    args: { name: "conditions" },
  },
];

// V8 CPU profiler flags (hidden upstream)
const cpuProfileOptions: Fig.Option[] = [
  {
    name: "--cpu-prof",
    description:
      "Start the V8 CPU profiler on startup and write the profile to disk on exit",
    hidden: true,
  },
  {
    name: "--cpu-prof-dir",
    description: "Directory where the V8 CPU profiles will be written",
    hidden: true,
    args: { name: "cpu-prof-dir", template: "folders" },
  },
  {
    name: "--cpu-prof-name",
    description:
      "Filename for the CPU profile (defaults to CPU.<timestamp>.<pid>.cpuprofile)",
    hidden: true,
    args: { name: "cpu-prof-name" },
  },
  {
    name: "--cpu-prof-interval",
    description:
      "Sampling interval in microseconds for CPU profiling (default: 1000)",
    hidden: true,
    args: { name: "cpu-prof-interval" },
  },
  {
    name: "--cpu-prof-md",
    description:
      "Generate a human-readable markdown report alongside the CPU profile",
    hidden: true,
  },
  {
    name: "--cpu-prof-flamegraph",
    description: "Generate an SVG flamegraph alongside the CPU profile",
    hidden: true,
  },
];

// The only permission flags accepted by commands that resolve but never run a module graph
const importPermissionOptions: Fig.Option[] = [
  allowImportOption,
  denyImportOption,
];

// npm lifecycle script flag
const allowScriptsOption: Fig.Option = {
  name: "--allow-scripts",
  description: "Allow running npm lifecycle scripts for the given packages",
  isRepeatable: true,
  requiresSeparator: true,
  args: { name: "allow-scripts", isOptional: true },
};

const completion: Fig.Spec = {
  name: "deno",
  description: "A modern JavaScript and TypeScript runtime",
  subcommands: [
    {
      name: "add",
      description: "Add dependencies",
      options: [
        {
          name: ["-D", "--dev"],
          description:
            "Add the package as a dev dependency (under `devDependencies`)",
          exclusiveOn: ["--no-save", "-O", "--save-optional"],
        },
        {
          name: ["-O", "--save-optional"],
          description:
            "Add the package as an optional dependency (under `optionalDependencies`)",
          exclusiveOn: ["-D", "--dev", "--no-save"],
        },
        {
          name: "--no-save",
          description:
            "Install the package(s) without adding them to the configuration file",
          exclusiveOn: ["-D", "--dev", "-O", "--save-optional"],
        },
        {
          name: ["--save-exact", "--exact"],
          description: "Save exact version without the caret (^)",
        },
        {
          name: "--unscoped",
          description:
            "Use the package name without its scope as the alias (ex. `jsr:@david/jsonc-morph` is added as `jsonc-morph`)",
        },
        {
          name: "--npm",
          description:
            "Assume unprefixed package names are npm packages (default)",
          exclusiveOn: ["--jsr"],
        },
        {
          name: "--jsr",
          description: "Assume unprefixed package names are jsr packages",
          exclusiveOn: ["--npm"],
        },
        {
          name: "--lockfile-only",
          description: "Install only updating the lockfile",
        },
        allowImportOption,
        denyImportOption,
        {
          name: "--package-json",
          description:
            "Force using package.json for dependency management instead of deno.json",
        },
        allowScriptsOption,
        ...moduleOptions,
        reloadOption,
      ],
      args: { name: "packages", isVariadic: true },
    },
    {
      name: ["approve-scripts", "approve-builds"],
      description: "Approve npm lifecycle scripts",
      options: [
        {
          name: "--lockfile-only",
          description: "Install only updating the lockfile",
        },
        ...moduleOptions,
        reloadOption,
      ],
      args: { name: "packages", isOptional: true, isVariadic: true },
    },
    {
      name: "audit",
      description: "Audit currently installed dependencies",
      options: [
        {
          name: ["--level", "--audit-level", "--severity"],
          description:
            "Only show advisories with severity greater or equal to the one specified",
          args: {
            name: "level",
            suggestions: ["low", "moderate", "high", "critical"],
            default: "low",
          },
        },
        {
          name: "--ignore-unfixable",
          description:
            "Ignore advisories that don't have any actions to resolve them",
        },
        {
          name: "--ignore-registry-errors",
          description:
            "Return exit code 0 if remote service(s) responds with an error",
        },
        {
          name: "--socket",
          description: "Check against socket.dev vulnerability database",
        },
        {
          name: "--fix",
          description:
            "Automatically fix vulnerabilities by upgrading packages",
        },
        {
          name: "--ignore",
          description: "Ignore advisories matching the given CVE IDs",
          isRepeatable: true,
          requiresSeparator: true,
          args: { name: "ignore", isOptional: true },
        },
        ...lockOptions,
      ],
      args: { name: "action", isOptional: true },
    },
    {
      name: "bench",
      description: "Run benchmarks",
      options: [
        {
          name: "--filter",
          description:
            "Run benchmarks with this string or regexp pattern in the bench name",
          args: { name: "filter" },
        },
        {
          name: "--json",
          description: "(Unstable) Output benchmark result in JSON format",
        },
        {
          name: "--no-run",
          description: "Cache bench modules, but don't run benchmarks",
        },
        permitNoFilesOption,
        {
          name: "--watch",
          description:
            "Watch for file changes and restart process automatically",
          isRepeatable: true,
          requiresSeparator: true,
          args: { name: "watch", isOptional: true, template: "filepaths" },
        },
        watchExcludeOption,
        noClearScreenOption,
        ignoreOption,
        {
          name: "--check",
          description: "Set type-checking behavior",
          requiresSeparator: true,
          exclusiveOn: ["--no-check"],
          args: { name: "check", isOptional: true, suggestions: ["all"] },
        },
        extOption,
        ...permissionOptions,
        ...moduleOptions,
        reloadOption,
        ...inspectorOptions,
        ...runtimeOptions,
      ],
      args: {
        name: "files",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
      parserDirectives: { optionsMustPrecedeArguments: true },
    },
    {
      name: "bump-version",
      description: "Update version in the configuration file",
      options: [
        {
          name: ["-w", "--workspace"],
          description:
            "Bump every package in the workspace (auto-detected at the workspace root)",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--no-workspace",
          description:
            "Disable workspace mode and only bump the deno.json/package.json in the current directory",
        },
        {
          name: "--dry-run",
          description: "Print the planned changes without writing any files",
        },
        {
          name: "--start",
          description: "[conventional-commits mode] Git ref to start from",
          args: { name: "start" },
        },
        {
          name: "--base",
          description: "[conventional-commits mode] Git ref to compare against",
          args: { name: "base" },
        },
        {
          name: "--import-map",
          description:
            "Path to the import map to rewrite jsr: version constraints in",
          args: { name: "import-map", template: "filepaths" },
        },
        {
          name: "--release-notes",
          description:
            "[conventional-commits mode] Path to the release notes file to prepend",
          args: { name: "release-notes", template: "filepaths" },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          exclusiveOn: ["-w", "--workspace"],
          args: { name: "config", template: "filepaths" },
        },
      ],
      args: { name: "increment", isOptional: true },
    },
    {
      name: "bundle",
      description: "Output a single JavaScript file with all dependencies",
      options: [
        {
          name: ["-o", "--output"],
          description: "Output path",
          args: { name: "output", template: "filepaths" },
        },
        {
          name: "--outdir",
          description: "Output directory for bundled files",
          args: { name: "outdir", template: "folders" },
        },
        {
          name: "--format",
          description: "Output format of the bundle",
          args: {
            name: "format",
            suggestions: ["esm", "cjs", "iife"],
            default: "esm",
          },
        },
        {
          name: "--packages",
          description: "How to handle packages",
          args: {
            name: "packages",
            suggestions: ["bundle", "external"],
            default: "bundle",
          },
        },
        {
          name: "--platform",
          description: "Platform to bundle for",
          args: {
            name: "platform",
            suggestions: ["browser", "deno"],
            default: "deno",
          },
        },
        {
          name: "--sourcemap",
          description: "Generate source map",
          requiresSeparator: true,
          args: {
            name: "sourcemap",
            isOptional: true,
            suggestions: ["linked", "inline", "external"],
          },
        },
        {
          name: "--external",
          description:
            "Mark modules or packages as external (excluded from the bundle)",
          isRepeatable: true,
          args: { name: "external", isOptional: true },
        },
        { name: "--watch", description: "Watch and rebuild on changes" },
        { name: "--minify", description: "Minify the output" },
        { name: "--keep-names", description: "Keep function and class names" },
        { name: "--code-splitting", description: "Enable code splitting" },
        {
          name: "--inline-imports",
          description:
            "Whether to inline imported modules into the importing file [default: true]",
          requiresSeparator: true,
          args: { name: "inline-imports", isOptional: true, default: "true" },
        },
        {
          name: "--declaration",
          description: "Generate .d.ts declaration files alongside the bundle",
        },
        checkOption,
        ...moduleOptions,
        reloadOption,
        ...importPermissionOptions,
        allowScriptsOption,
      ],
      args: { name: "file", isVariadic: true, template: "filepaths" },
    },
    {
      name: "cache",
      description: "Cache the dependencies",
      options: [
        checkOption,
        extOption,
        ...moduleOptions,
        reloadOption,
        ...inspectorOptions,
        ...importPermissionOptions,
        allowScriptsOption,
      ],
      args: { name: "files", isVariadic: true, template: "filepaths" },
    },
    {
      name: "check",
      description: "Type-check the dependencies",
      options: [
        {
          name: "--all",
          description:
            "Type-check all code, including remote modules and npm packages",
          exclusiveOn: ["--no-remote"],
        },
        {
          name: "--remote",
          description: "Type-check all modules, including remote ones",
          hidden: true,
          exclusiveOn: ["--no-remote"],
        },
        {
          name: "--doc",
          description: "Type-check code blocks in JSDoc as well as actual code",
          exclusiveOn: ["--doc-only"],
        },
        {
          name: "--doc-only",
          description: "Type-check code blocks in JSDoc and Markdown only",
          exclusiveOn: ["--doc"],
        },
        {
          name: "--check-js",
          description:
            "Enable type-checking of JavaScript files (equivalent to `compilerOptions.checkJs: true`)",
          hidden: true,
        },
        {
          name: "--desktop",
          description:
            "Type-check using the type definitions for `deno desktop`",
        },
        noCodeCacheOption,
        {
          name: "--watch",
          description:
            "Watch for file changes and restart process automatically",
          isRepeatable: true,
          requiresSeparator: true,
          args: { name: "watch", isOptional: true, template: "filepaths" },
        },
        watchExcludeOption,
        noClearScreenOption,
        ...moduleOptions,
        reloadOption,
        ...runtimeOptions,
        ...importPermissionOptions,
      ],
      args: { name: "files", isVariadic: true, template: "filepaths" },
    },
    {
      name: "ci",
      description: "Install dependencies from a lockfile in a frozen state",
      options: [
        {
          name: ["--prod", "--production"],
          description:
            "Only install production dependencies (excludes devDependencies)",
        },
        skipTypesOption,
      ],
    },
    {
      name: "clean",
      description: "Remove the cache directory",
      options: [
        {
          name: ["-e", "--except"],
          description: "Retain cache data needed by the given files",
        },
        {
          name: "--dry-run",
          description:
            "Show what would be removed without performing any actions",
        },
        nodeModulesDirOption,
        {
          name: "--vendor",
          description:
            "Toggles local vendor folder usage for remote modules and a node_modules folder for npm packages",
          requiresSeparator: true,
          args: { name: "vendor", isOptional: true },
        },
        {
          name: ["--node-modules-linker", "--linker"],
          description:
            "Sets the linker mode for npm packages (isolated or hoisted)",
          requiresSeparator: true,
          dependsOn: ["-e", "--except"],
          args: { name: "node-modules-linker" },
        },
      ],
      args: {
        name: "except-paths",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "compile",
      description: "Compile the script into a self contained executable",
      options: [
        {
          name: ["-o", "--output"],
          description: "Output file (defaults to $PWD/<inferred-name>)",
          args: { name: "output", template: "filepaths" },
        },
        targetOption,
        {
          name: "--engine",
          description:
            "JS engine the compiled binary runs on (quickjs is smaller and experimental, and does not receive the same security updates as v8)",
          args: { name: "engine", suggestions: ["v8", "quickjs"] },
        },
        { name: "--no-terminal", description: "Hide terminal on Windows" },
        {
          name: "--icon",
          description: "Set the icon of the executable on Windows (.ico)",
          args: { name: "icon", template: "filepaths" },
        },
        includeOption,
        excludeOption,
        noCodeCacheOption,
        extOption,
        {
          name: "--self-extracting",
          description:
            "Create a self-extracting binary that extracts the embedded file system to disk on first run and then runs from there",
        },
        {
          name: "--bundle",
          description:
            "(Experimental) Bundle the entrypoint with esbuild before embedding, instead of shipping the whole node_modules tree",
        },
        {
          name: "--minify",
          description: "(Experimental) Minify the bundled output",
          dependsOn: ["--bundle"],
        },
        {
          name: "--app-name",
          description: "Stable identity for the compiled app",
          args: { name: "app-name" },
        },
        excludeUnusedNpmOption,
        {
          name: "--check",
          description: "Set type-checking behavior",
          requiresSeparator: true,
          exclusiveOn: ["--no-check"],
          args: { name: "check", isOptional: true, suggestions: ["all"] },
        },
        {
          name: "--watch",
          description:
            "Watch for file changes and restart process automatically",
          isRepeatable: true,
          requiresSeparator: true,
          args: { name: "watch", isOptional: true, template: "filepaths" },
        },
        watchExcludeOption,
        noClearScreenOption,
        ...permissionOptions,
        ...moduleOptions,
        reloadOption,
        ...inspectorOptions,
        ...runtimeOptions,
      ],
      args: {
        name: "source_file",
        isVariadic: true,
        isScript: true,
        generators: [{ template: "filepaths" }, generateUrlScript],
      },
      parserDirectives: { optionsMustPrecedeArguments: true },
    },
    {
      name: "completions",
      description: "Generate shell completions",
      options: [
        {
          name: "--dynamic",
          description:
            "Generate dynamic completions for the given shell (unstable), currently this only provides available tasks for `deno task`",
        },
      ],
      args: {
        name: "shell",
        suggestions: ["bash", "fish", "powershell", "zsh", "fig"],
      },
    },
    {
      name: "coverage",
      description: "Print coverage reports",
      options: [
        {
          name: "--ignore",
          description: "Ignore coverage files",
          isRepeatable: true,
          requiresSeparator: true,
          args: { name: "ignore", isOptional: true, template: "filepaths" },
        },
        {
          name: "--include",
          description: "Include source files in the report",
          isRepeatable: true,
          requiresSeparator: true,
          args: { name: "include", isOptional: true },
        },
        {
          name: "--exclude",
          description: "Exclude source files from the report",
          isRepeatable: true,
          requiresSeparator: true,
          args: { name: "exclude", isOptional: true },
        },
        {
          name: "--lcov",
          description: "Output coverage report in lcov format",
        },
        {
          name: "--html",
          description:
            "Output coverage report in HTML format in the given directory",
        },
        {
          name: "--detailed",
          description:
            "Output coverage report in detailed format in the terminal",
        },
        {
          name: "--threshold",
          description: "Fail if coverage is below this percentage (0-100)",
          requiresSeparator: true,
          args: { name: "threshold" },
        },
        {
          name: "--output",
          description:
            "Export the coverage report in lcov format to the given file",
          requiresSeparator: true,
          dependsOn: ["--lcov"],
          args: { name: "output", template: "filepaths" },
        },
      ],
      args: {
        name: "files",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "create",
      description: "Create a project from a template",
      options: [
        {
          name: "--npm",
          description: "Treat unprefixed package names as npm packages",
          exclusiveOn: ["--jsr"],
        },
        {
          name: "--jsr",
          description: "Treat unprefixed package names as JSR packages",
          exclusiveOn: ["--npm"],
        },
        yesOption,
      ],
      args: { name: "package" },
    },
    {
      name: "deploy",
      description: "Deploy to Deno Deploy",
      args: { name: "args", isOptional: true, isVariadic: true },
    },
    {
      name: "desktop",
      description: "Compile a script into a desktop application",
      options: [
        {
          name: "--check",
          description: "Set type-checking behavior",
          requiresSeparator: true,
          exclusiveOn: ["--no-check"],
          args: { name: "check", isOptional: true, suggestions: ["all"] },
        },
        {
          name: "--inspect-renderer",
          description:
            "Override the CEF renderer debugger listen address; defaults to an auto-allocated port",
          requiresSeparator: true,
          args: {
            name: "inspect-renderer",
            isOptional: true,
            default: "127.0.0.1:0",
          },
        },
        includeOption,
        excludeOption,
        excludeUnusedNpmOption,
        {
          name: ["-o", "--output"],
          description:
            "Output path (e.g. MyApp.app, MyApp.dmg, MyApp.AppImage, MyApp.deb, MyApp.rpm, MyApp.msi)",
          args: { name: "output", template: "filepaths" },
        },
        targetOption,
        noCodeCacheOption,
        {
          name: "--icon",
          description:
            "Set the application icon (.ico on Windows, .icns or .png on macOS)",
          args: { name: "icon", template: "filepaths" },
        },
        {
          name: "--hmr",
          description:
            "Run the desktop app with Hot Module Replacement enabled",
        },
        {
          name: "--backend",
          description: "Backend to use for the desktop app",
          args: { name: "backend", suggestions: ["webview", "cef", "raw"] },
        },
        {
          name: "--engine",
          description:
            "JS engine the desktop binary runs on (quickjs is smaller and experimental, and does not receive the same security updates as v8)",
          args: { name: "engine", suggestions: ["v8", "quickjs"] },
        },
        {
          name: "--all-targets",
          description: "Build for all supported target platforms",
        },
        {
          name: "--compress",
          description:
            "Make the packaged app self-extracting: the payload is compressed inside the app and unpacked on first launch",
          args: {
            name: "compress",
            isOptional: true,
            suggestions: ["xz", "lzma", "zstd"],
            default: "xz",
          },
        },
        extOption,
        ...permissionOptions,
        ...moduleOptions,
        reloadOption,
        ...inspectorOptions,
        ...runtimeOptions,
        ...cpuProfileOptions,
        allowScriptsOption,
      ],
      args: { name: "script_arg", isOptional: true, isVariadic: true },
      parserDirectives: { optionsMustPrecedeArguments: true },
    },
    {
      name: "doc",
      description: "Generate and show documentation for a module or built-ins",
      options: [
        {
          name: "--json",
          description: "Output documentation in JSON format",
          exclusiveOn: ["--filter", "--html"],
        },
        { name: "--private", description: "Output private documentation" },
        {
          name: "--lint",
          description: "Output documentation diagnostics",
          exclusiveOn: ["--filter"],
        },
        {
          name: "--html",
          description: "Output documentation in HTML format",
          exclusiveOn: ["--filter", "--json"],
        },
        {
          name: "--name",
          description:
            "The name that will be used in the docs (ie for breadcrumbs)",
          args: { name: "name" },
        },
        {
          name: "--output",
          description: "Directory for HTML documentation output",
          args: { name: "output", template: "folders" },
        },
        {
          name: "--category-docs",
          description:
            "Path to a JSON file keyed by category and an optional value of a markdown doc",
          dependsOn: ["--html"],
          args: { name: "category-docs", template: "filepaths" },
        },
        {
          name: "--symbol-redirect-map",
          description:
            "Path to a JSON file keyed by file, with an inner map of symbol to an external link",
          dependsOn: ["--html"],
          args: { name: "symbol-redirect-map", template: "filepaths" },
        },
        {
          name: "--default-symbol-map",
          description:
            "Uses the provided mapping of default name to wanted name for usage blocks",
          dependsOn: ["--html"],
          args: { name: "default-symbol-map", template: "filepaths" },
        },
        {
          name: "--strip-trailing-html",
          description: "Remove trailing .html from various links",
          dependsOn: ["--html"],
        },
        {
          name: "--filter",
          description: "Dot separated path to symbol",
          exclusiveOn: ["--html", "--json", "--lint"],
          args: { name: "filter", generators: generateDocs },
        },
        {
          name: "--builtin",
          description: "Show documentation for built-in symbols",
        },
        ...moduleOptions,
        reloadOption,
        ...importPermissionOptions,
      ],
      args: {
        name: "source_file",
        isOptional: true,
        isVariadic: true,
        generators: [{ template: "filepaths" }, generateUrlScript],
      },
    },
    {
      name: "eval",
      description: "Evaluate a script from the command line",
      insertValue: "eval '{cursor}'",
      options: [
        { name: ["-p", "--print"], description: "Print result to stdout" },
        extOption,
        checkOption,
        ...permissionOptions,
        ...moduleOptions,
        reloadOption,
        ...inspectorOptions,
        ...runtimeOptions,
        ...cpuProfileOptions,
      ],
      args: { name: "code_arg" },
      parserDirectives: { optionsMustPrecedeArguments: true },
    },
    {
      name: "fmt",
      description: "Format source files",
      options: [
        {
          name: "--check",
          description: "Check if the source files are formatted",
        },
        {
          name: ["--fail-fast", "--failfast"],
          description: "Stop checking files on first format error",
          dependsOn: ["--check"],
        },
        permitNoFilesOption,
        {
          name: "--watch",
          description:
            "Watch for file changes and restart process automatically",
          isRepeatable: true,
          requiresSeparator: true,
          args: { name: "watch", isOptional: true, template: "filepaths" },
        },
        watchExcludeOption,
        noClearScreenOption,
        {
          name: "--ext",
          description: "Set content type of the supplied file",
          args: {
            name: "ext",
            suggestions: [
              "ts",
              "tsx",
              "js",
              "jsx",
              "mts",
              "mjs",
              "cts",
              "cjs",
              "md",
              "json",
              "jsonc",
              "css",
              "scss",
              "less",
              "html",
              "xml",
              "svg",
              "svelte",
              "vue",
              "astro",
              "yml",
              "yaml",
              "ipynb",
              "sql",
              "vto",
              "njk",
            ],
          },
        },
        {
          name: "--ignore",
          description: "Ignore formatting particular source files",
          isRepeatable: true,
          requiresSeparator: true,
          args: { name: "ignore", isOptional: true, template: "filepaths" },
        },
        {
          name: ["--use-tabs", "--options-use-tabs"],
          description:
            "Use tabs instead of spaces for indentation [default: false]",
          requiresSeparator: true,
          args: {
            name: "use-tabs",
            isOptional: true,
            suggestions: ["true", "false"],
          },
        },
        {
          name: ["--line-width", "--options-line-width"],
          description: "Define maximum line width [default: 80]",
          args: { name: "line-width" },
        },
        {
          name: ["--indent-width", "--options-indent-width"],
          description: "Define indentation width [default: 2]",
          args: { name: "indent-width" },
        },
        {
          name: ["--single-quote", "--options-single-quote"],
          description: "Use single quotes [default: false]",
          requiresSeparator: true,
          args: {
            name: "single-quote",
            isOptional: true,
            suggestions: ["true", "false"],
          },
        },
        {
          name: ["--prose-wrap", "--options-prose-wrap"],
          description: "Define how prose should be wrapped [default: always]",
          args: {
            name: "prose-wrap",
            suggestions: ["always", "never", "preserve"],
          },
        },
        {
          name: ["--no-semicolons", "--options-no-semicolons"],
          description:
            "Don't use semicolons except where necessary [default: false]",
          requiresSeparator: true,
          args: {
            name: "no-semicolons",
            isOptional: true,
            suggestions: ["true", "false"],
          },
        },
        configOption,
        noConfigOption,
        {
          name: "--no-editorconfig",
          description:
            "Don't read .editorconfig files to infer formatting options [default: false]",
        },
        {
          name: "--unstable-component",
          description: "Enable formatting Svelte, Vue, Astro and Angular files",
        },
        { name: "--unstable-sql", description: "Enable formatting SQL files" },
        {
          name: "--unstable-css",
          description: "Enable formatting CSS, SCSS and Less files",
          hidden: true,
        },
        {
          name: "--unstable-html",
          description: "Enable formatting HTML files",
          hidden: true,
        },
        {
          name: "--unstable-yaml",
          description: "Enable formatting YAML files",
          hidden: true,
        },
      ],
      args: {
        name: "files",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "help",
      description: "Show help for a command",
      args: { name: "subcommand", isOptional: true, template: "help" },
    },
    {
      name: "info",
      description: "Show info about cache or info related to source file",
      options: [
        {
          name: "--json",
          description: "(Unstable) Outputs the information in JSON format",
        },
        {
          name: "--location",
          description:
            "Show files used for origin bound APIs like the Web Storage API when running a script with --location=<HREF>",
          args: { name: "location" },
        },
        ...moduleOptions,
        reloadOption,
        ...importPermissionOptions,
      ],
      args: { name: "file", isOptional: true, template: "filepaths" },
    },
    {
      name: "init",
      description: "Initialize a new project",
      options: [
        {
          name: "--lib",
          description: "Generate an example library project",
          exclusiveOn: ["--empty", "--jsr", "--npm", "--serve"],
        },
        {
          name: "--serve",
          description: "Generate an example project for `deno serve`",
          exclusiveOn: ["--empty", "--jsr", "--lib", "--npm"],
        },
        {
          name: "--npm",
          description: "Generate a npm create-* project",
          exclusiveOn: ["--empty", "--jsr", "--lib", "--serve"],
        },
        {
          name: "--jsr",
          description: "Generate a project from a JSR package",
          exclusiveOn: ["--empty", "--lib", "--npm", "--serve"],
        },
        {
          name: "--empty",
          description:
            "Generate a minimal project with just main.ts and deno.json",
          exclusiveOn: ["--jsr", "--lib", "--npm", "--serve"],
        },
        yesOption,
      ],
      args: {
        name: "args",
        isOptional: true,
        isVariadic: true,
        template: "folders",
      },
      parserDirectives: { optionsMustPrecedeArguments: true },
    },
    {
      name: ["install", "i"],
      description:
        "Installs dependencies either in the local project or globally to a bin directory",
      options: [
        {
          name: ["-g", "--global"],
          description:
            "Install a package or script as a globally available executable",
          exclusiveOn: [
            "--arch",
            "-D",
            "--dev",
            "-e",
            "--entrypoint",
            "--jsr",
            "--lockfile-only",
            "--no-save",
            "--npm",
            "--os",
            "--package-json",
            "--prod",
            "--production",
            "--save-exact",
            "--exact",
            "-O",
            "--save-optional",
            "--unscoped",
          ],
        },
        {
          name: ["-n", "--name"],
          description: "Executable file name",
          dependsOn: ["-g", "--global"],
          args: { name: "name" },
        },
        rootOption,
        {
          name: ["-f", "--force"],
          description: "Forcefully overwrite existing installation",
          dependsOn: ["-g", "--global"],
        },
        {
          name: ["-D", "--dev"],
          description:
            "Add the package as a dev dependency (under `devDependencies`)",
          exclusiveOn: [
            "-e",
            "--entrypoint",
            "-g",
            "--global",
            "--no-save",
            "--prod",
            "--production",
            "-O",
            "--save-optional",
          ],
        },
        {
          name: ["-O", "--save-optional"],
          description:
            "Add the package as an optional dependency (under `optionalDependencies`)",
          exclusiveOn: [
            "-D",
            "--dev",
            "-e",
            "--entrypoint",
            "-g",
            "--global",
            "--no-save",
          ],
        },
        {
          name: "--no-save",
          description:
            "Install the package(s) without adding them to the configuration file",
          exclusiveOn: [
            "-D",
            "--dev",
            "-e",
            "--entrypoint",
            "-g",
            "--global",
            "-O",
            "--save-optional",
          ],
        },
        {
          name: ["--prod", "--production"],
          description:
            "Only install production dependencies (excludes devDependencies)",
          exclusiveOn: ["-D", "--dev", "-g", "--global"],
        },
        skipTypesOption,
        {
          name: ["-e", "--entrypoint"],
          description: "Install dependents of the specified entrypoint(s)",
          exclusiveOn: [
            "-D",
            "--dev",
            "-g",
            "--global",
            "--jsr",
            "--no-save",
            "--npm",
            "--package-json",
            "--save-exact",
            "--exact",
            "-O",
            "--save-optional",
            "--unscoped",
          ],
        },
        {
          name: "--compile",
          description: "Install the script as a compiled executable",
          dependsOn: ["-g", "--global"],
        },
        lockfileOnlyOption,
        {
          name: "--npm",
          description:
            "Assume unprefixed package names are npm packages (default)",
          exclusiveOn: ["-e", "--entrypoint", "-g", "--global", "--jsr"],
        },
        {
          name: "--jsr",
          description: "Assume unprefixed package names are jsr packages",
          exclusiveOn: ["-e", "--entrypoint", "-g", "--global", "--npm"],
        },
        {
          name: ["--save-exact", "--exact"],
          description: "Save exact version without the caret (^)",
          exclusiveOn: ["-e", "--entrypoint", "-g", "--global"],
        },
        {
          name: "--unscoped",
          description:
            "Use the package name without its scope as the alias (ex. `jsr:@david/jsonc-morph` is added as `jsonc-morph`)",
          exclusiveOn: ["-e", "--entrypoint", "-g", "--global"],
        },
        {
          name: "--package-json",
          description:
            "Force using package.json for dependency management instead of deno.json",
          exclusiveOn: ["-e", "--entrypoint", "-g", "--global"],
        },
        {
          name: "--os",
          description:
            "Target OS for npm package installation (e.g., linux, darwin, win32)",
          exclusiveOn: ["-g", "--global"],
          args: {
            name: "os",
            suggestions: [
              "aix",
              "android",
              "darwin",
              "freebsd",
              "linux",
              "openbsd",
              "sunos",
              "win32",
            ],
          },
        },
        {
          name: "--arch",
          description:
            "Target architecture for npm package installation (e.g., x64, arm64)",
          exclusiveOn: ["-g", "--global"],
          args: {
            name: "arch",
            suggestions: [
              "arm",
              "arm64",
              "ia32",
              "mips",
              "mipsel",
              "ppc",
              "ppc64",
              "s390",
              "s390x",
              "x64",
            ],
          },
        },
        {
          name: "--check",
          description: "Set type-checking behavior",
          requiresSeparator: true,
          exclusiveOn: ["--no-check"],
          args: { name: "check", isOptional: true, suggestions: ["all"] },
        },
        ...permissionOptions,
        ...moduleOptions,
        reloadOption,
        ...inspectorOptions,
        ...runtimeOptions,
        allowScriptsOption,
      ],
      args: {
        name: "cmd",
        isOptional: true,
        isVariadic: true,
        isScript: true,
        generators: [{ template: "filepaths" }, generateUrlScript],
      },
      parserDirectives: { optionsMustPrecedeArguments: true },
    },
    {
      name: "jupyter",
      description: "Deno kernel for Jupyter notebooks",
      options: [
        {
          name: "--install",
          description: "Install a kernelspec",
          exclusiveOn: ["--conn", "--kernel"],
        },
        {
          name: ["-n", "--name"],
          description: "Set a name for the kernel (defaults to 'deno')",
          exclusiveOn: ["--kernel"],
          args: { name: "name" },
        },
        {
          name: ["-d", "--display"],
          description: "Set a display name for the kernel (defaults to 'Deno')",
          dependsOn: ["--install"],
          args: { name: "display" },
        },
        {
          name: "--kernel",
          description: "Start the kernel",
          exclusiveOn: ["--install", "-n", "--name"],
          dependsOn: ["--conn"],
        },
        {
          name: "--conn",
          description:
            "Path to JSON file describing connection parameters, provided by Jupyter",
          exclusiveOn: ["--install"],
          args: { name: "conn", template: "filepaths" },
        },
        {
          name: "--force",
          description:
            "Force installation of a kernel, overwriting previously existing kernelspec",
          dependsOn: ["--install"],
        },
      ],
    },
    {
      name: "link",
      description:
        "Link a local JSR package into the current project for development",
      options: [
        {
          name: "--lockfile-only",
          description: "Install only updating the lockfile",
        },
        ...lockOptions,
      ],
      args: { name: "paths", isVariadic: true, template: "filepaths" },
    },
    {
      name: "lint",
      description: "Lint source files",
      options: [
        {
          name: "--rules",
          description: "List available rules",
          exclusiveOn: ["--rules-exclude", "--rules-include"],
        },
        {
          name: "--fix",
          description: "Fix any linting errors for rules that support it",
        },
        {
          name: "--rules-tags",
          description: "Use set of rules with a tag",
          isRepeatable: true,
          requiresSeparator: true,
          args: {
            name: "rules-tags",
            isOptional: true,
            suggestions: [
              "fresh",
              "jsr",
              "jsx",
              "react",
              "recommended",
              "workspace",
            ],
          },
        },
        {
          name: "--rules-include",
          description: "Include lint rules",
          isRepeatable: true,
          requiresSeparator: true,
          exclusiveOn: ["--rules"],
          args: {
            name: "rules-include",
            isOptional: true,
            generators: generateLintRules,
          },
        },
        {
          name: "--rules-exclude",
          description: "Exclude lint rules",
          isRepeatable: true,
          requiresSeparator: true,
          exclusiveOn: ["--rules"],
          args: {
            name: "rules-exclude",
            isOptional: true,
            generators: generateLintRules,
          },
        },
        {
          name: "--json",
          description: "Output lint result in JSON format",
          exclusiveOn: ["--compact"],
        },
        {
          name: "--compact",
          description: "Output lint result in compact format",
          exclusiveOn: ["--json"],
        },
        {
          name: "--ignore",
          description: "Ignore linting particular source files",
          isRepeatable: true,
          requiresSeparator: true,
          args: { name: "ignore", isOptional: true, template: "filepaths" },
        },
        {
          name: "--watch",
          description:
            "Watch for file changes and restart process automatically",
          isRepeatable: true,
          requiresSeparator: true,
          args: { name: "watch", isOptional: true, template: "filepaths" },
        },
        watchExcludeOption,
        noClearScreenOption,
        permitNoFilesOption,
        configOption,
        noConfigOption,
        {
          name: "--ext",
          description:
            "Specify the file extension to lint when reading from stdin",
          args: {
            name: "ext",
            suggestions: ["ts", "tsx", "js", "jsx", "mts", "mjs", "cts", "cjs"],
          },
        },
        allowImportOption,
        denyImportOption,
      ],
      args: {
        name: "files",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "list",
      description: "List the dependencies declared in deno.json / package.json",
      options: [
        {
          name: "--depth",
          description:
            "Maximum depth of the dependency tree to display (0 = direct dependencies only)",
          args: { name: "depth" },
        },
        {
          name: "--prod",
          description: "Only list production dependencies",
          exclusiveOn: ["--dev"],
        },
        {
          name: "--dev",
          description: "Only list development dependencies",
          exclusiveOn: ["--prod"],
        },
        recursiveOption,
      ],
      args: { name: "filters", isOptional: true, isVariadic: true },
    },
    { name: "lsp", description: "Start the language server" },
    {
      name: "outdated",
      description: "Find outdated dependencies",
      options: [
        recursiveOption,
        {
          name: "--compatible",
          description:
            "Only consider versions that satisfy semver requirements",
          exclusiveOn: ["--latest"],
        },
        { name: ["-u", "--update"], description: "Update dependency versions" },
        {
          name: "--latest",
          description:
            "Consider the latest version, regardless of semver constraints",
          exclusiveOn: ["--compatible"],
        },
        {
          name: ["-i", "--interactive"],
          description: "Interactively select which dependencies to update",
          dependsOn: ["-u", "--update"],
        },
        {
          name: "--lockfile-only",
          description: "Install only updating the lockfile",
        },
        ...moduleOptions,
        { ...reloadOption, name: "--reload" },
      ],
      args: { name: "filters", isOptional: true, isVariadic: true },
    },
    {
      name: "pack",
      description: "Create a tarball of the package",
      options: [
        {
          name: ["-o", "--output"],
          description: "Output file path (defaults to <name>-<version>.tgz)",
          args: { name: "output", template: "filepaths" },
        },
        {
          name: "--dry-run",
          description: "Show what would be packed without creating the tarball",
        },
        {
          name: "--allow-slow-types",
          description:
            "Skip fast-check type extraction; .d.ts files are omitted from the output",
        },
        {
          name: "--allow-dirty",
          description:
            "Allow packing if the repository has uncommitted changes",
        },
        {
          name: "--set-version",
          description: "Override the version in the tarball",
          args: { name: "set-version" },
        },
        {
          name: "--no-source-maps",
          description: "Don't include source maps in the output",
        },
        {
          name: "--ignore",
          description: "Ignore files matching these patterns",
          isRepeatable: true,
          requiresSeparator: true,
          args: { name: "ignore", isOptional: true, template: "filepaths" },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          exclusiveOn: ["--no-config"],
          args: { name: "config", template: "filepaths" },
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
      ],
      args: {
        name: "files",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "publish",
      description:
        "Publish the current working directory's package or workspace",
      options: [
        {
          name: "--token",
          description: "The API token to use when publishing",
          args: { name: "token" },
        },
        {
          name: "--dry-run",
          description:
            "Prepare the package for publishing performing all checks and validations without uploading",
        },
        {
          name: "--allow-slow-types",
          description: "Allow publishing with slow types",
        },
        {
          name: "--allow-dirty",
          description:
            "Allow publishing if the repository has uncommitted changed",
        },
        {
          name: "--no-provenance",
          description: "Disable provenance attestation",
        },
        {
          name: "--set-version",
          description: "Set version for a package to be published",
          args: { name: "set-version" },
        },
        {
          name: "--check",
          description: "Set type-checking behavior",
          requiresSeparator: true,
          exclusiveOn: ["--no-check"],
          args: { name: "check", isOptional: true, suggestions: ["all"] },
        },
        ...moduleOptions,
        reloadOption,
      ],
    },
    {
      name: ["remove", "rm"],
      description: "Remove dependencies",
      options: [
        {
          name: ["-g", "--global"],
          description: "Remove globally installed package or module",
          exclusiveOn: ["--lockfile-only", "--package-json"],
        },
        rootOption,
        lockfileOnlyOption,
        packageJsonOption,
        ...moduleOptions,
        reloadOption,
      ],
      args: { name: "packages", isVariadic: true },
    },
    {
      name: "repl",
      description: "Start an interactive Read-Eval-Print Loop (REPL) for Deno",
      options: [
        {
          name: "--eval",
          description: "Evaluates the provided code when the REPL starts",
          args: { name: "eval" },
        },
        {
          name: "--eval-file",
          description:
            "Evaluates the provided file(s) as scripts when the REPL starts",
          isRepeatable: true,
          args: { name: "eval-file", template: "filepaths" },
        },
        ...permissionOptions,
        ...moduleOptions,
        reloadOption,
        ...inspectorOptions,
        ...runtimeOptions,
      ],
    },
    {
      name: "run",
      description: "Run a JavaScript or TypeScript program, or a task",
      options: [
        checkOption,
        watchOption,
        hmrOption,
        watchExcludeOption,
        noClearScreenOption,
        extOption,
        noCodeCacheOption,
        coverageOption,
        tunnelOption,
        useEnvProxyOption,
        ...permissionOptions,
        ...moduleOptions,
        reloadOption,
        ...inspectorOptions,
        ...runtimeOptions,
        ...cpuProfileOptions,
        allowScriptsOption,
      ],
      args: {
        name: "script_arg",
        isVariadic: true,
        isScript: true,
        suggestions: [
          { name: "-", description: "Read from standard input", hidden: true },
        ],
        generators: [{ template: "filepaths" }, generateUrlScript],
      },
      parserDirectives: { optionsMustPrecedeArguments: true },
    },
    {
      name: "sandbox",
      description: "Run in sandbox mode",
      args: { name: "args", isOptional: true, isVariadic: true },
    },
    {
      name: "serve",
      description: "Run a server",
      options: [
        {
          name: "--port",
          description:
            "The TCP port to serve on, 0 picks a random free port [default: 8000]",
          args: { name: "port" },
        },
        {
          name: "--host",
          description:
            "The TCP address to serve on, defaulting to 0.0.0.0 (all interfaces)",
          args: { name: "host" },
        },
        {
          name: "--open",
          description:
            "Open the browser on the address that the server is running on",
        },
        {
          name: ["-t", "--tunnel", "--connected"],
          description: "Execute tasks with a tunnel to Deno Deploy",
          hidden: true,
        },
        {
          name: "--parallel",
          description: "Run multiple server workers in parallel",
        },
        checkOption,
        {
          name: "--watch",
          description:
            "Watch for file changes and restart process automatically",
          isRepeatable: true,
          requiresSeparator: true,
          exclusiveOn: ["--watch-hmr", "--unstable-hmr"],
          args: { name: "watch", isOptional: true, template: "filepaths" },
        },
        {
          name: ["--watch-hmr", "--unstable-hmr"],
          description: "Watch for file changes and hot-replace modules",
          isRepeatable: true,
          requiresSeparator: true,
          exclusiveOn: ["--watch"],
          args: { name: "watch-hmr", isOptional: true },
        },
        watchExcludeOption,
        noClearScreenOption,
        extOption,
        noCodeCacheOption,
        ...permissionOptions,
        ...moduleOptions,
        reloadOption,
        ...inspectorOptions,
        ...runtimeOptions,
        ...cpuProfileOptions,
        allowScriptsOption,
      ],
      args: {
        name: "script_arg",
        isVariadic: true,
        isScript: true,
        suggestions: [
          { name: "-", description: "Read from standard input", hidden: true },
        ],
        generators: [{ template: "filepaths" }, generateUrlScript],
      },
      parserDirectives: { optionsMustPrecedeArguments: true },
    },
    {
      name: "task",
      description: "Run a task defined in the configuration file",
      options: [
        {
          name: "--cwd",
          description: "Specify the directory to run the task in",
          args: { name: "cwd", template: "folders" },
        },
        configOption,
        {
          name: ["-r", "--recursive"],
          description: "Run the task in all projects in the workspace",
          exclusiveOn: ["--members"],
        },
        {
          name: "--members",
          description:
            "Run the task in all workspace members, but not in the workspace root",
          exclusiveOn: ["-f", "--filter", "-r", "--recursive"],
        },
        {
          name: ["-f", "--filter"],
          description:
            "Filter members of the workspace by name, implies --recursive flag",
          exclusiveOn: ["--members"],
          args: { name: "filter" },
        },
        {
          name: "--eval",
          description:
            "Evaluate the passed value as if it was a task in a configuration file",
        },
        {
          name: "--if-present",
          description:
            "Exit with code 0 instead of an error when the task is not found",
        },
        {
          name: "--no-prefix",
          description:
            "Disable prefixing the output of concurrently-executing tasks with the task name",
        },
        {
          name: ["-j", "--jobs", "--concurrency"],
          description: "Maximum number of tasks to run concurrently",
          args: { name: "jobs" },
        },
        nodeModulesDirOption,
        {
          name: "--tunnel",
          description: "Execute tasks with a tunnel to Deno Deploy",
          hidden: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: { name: "lock", isOptional: true, template: "filepaths" },
        },
        {
          name: "--no-lock",
          description: "Disable auto discovery of the lock file",
        },
        {
          name: ["--frozen-lockfile", "--frozen"],
          description: "Error out if lockfile is out of date",
          requiresSeparator: true,
          args: { name: "frozen-lockfile", isOptional: true },
        },
      ],
      args: [
        { name: "task_name", isOptional: true, generators: generateTasks },
        { name: "task_args", isVariadic: true, isOptional: true },
      ],
      parserDirectives: { optionsMustPrecedeArguments: true },
    },
    {
      name: "test",
      description: "Run tests",
      options: [
        {
          name: "--doc",
          description: "Evaluate code blocks in JSDoc and Markdown",
        },
        {
          name: "--no-run",
          description: "Cache test modules, but don't run tests",
          exclusiveOn: ["--watch"],
        },
        {
          name: "--coverage",
          description: "Collect coverage profile data into DIR",
          requiresSeparator: true,
          exclusiveOn: [
            "--inspect",
            "--inspect-brk",
            "--inspect-wait",
            "--watch",
          ],
          args: { name: "coverage", isOptional: true, template: "folders" },
        },
        {
          name: "--clean",
          description:
            "Empty the temporary coverage profile data directory before running tests",
        },
        {
          name: "--fail-fast",
          description: "Stop after N errors",
          requiresSeparator: true,
          args: { name: "fail-fast", isOptional: true },
        },
        {
          name: "--filter",
          description:
            "Run tests with this string or regexp pattern in the test name",
          args: { name: "filter" },
        },
        {
          name: "--shuffle",
          description: "Shuffle the order in which the tests are run",
          requiresSeparator: true,
          args: { name: "shuffle", isOptional: true },
        },
        { name: "--parallel", description: "Run test modules in parallel" },
        {
          name: "--sanitize-ops",
          description:
            "Enable the ops sanitizer, which ensures that all async ops started in a test are completed before the test ends",
        },
        {
          name: "--sanitize-resources",
          description:
            "Enable the resources sanitizer, which ensures that all resources opened in a test are closed before the test ends",
        },
        {
          name: "--coverage-threshold",
          description: "Fail if coverage is below this percentage (0-100)",
          requiresSeparator: true,
          dependsOn: ["--coverage"],
          args: { name: "coverage-threshold" },
        },
        {
          name: ["-u", "--update-snapshots"],
          description:
            "Update snapshots created with `t.assertSnapshot()` instead of failing when they do not match",
        },
        {
          name: "--trace-leaks",
          description: "Enable tracing of leaks",
          hidden: true,
        },
        {
          name: "--watch",
          description:
            "Watch for file changes and restart process automatically",
          isRepeatable: true,
          requiresSeparator: true,
          exclusiveOn: ["--changed", "--coverage", "--no-run", "--related"],
          args: { name: "watch", isOptional: true, template: "filepaths" },
        },
        watchExcludeOption,
        noClearScreenOption,
        {
          name: "--reporter",
          description: "Select reporter to use",
          args: {
            name: "reporter",
            suggestions: ["pretty", "dot", "junit", "tap"],
          },
        },
        {
          name: "--junit-path",
          description: "Write a JUnit XML test report to PATH",
          args: { name: "junit-path", template: "filepaths" },
        },
        {
          name: "--hide-stacktraces",
          description: "Hide stack traces for errors in failure test results",
        },
        {
          name: "--retry",
          description: "Re-run failing tests up to NUMBER times",
          args: { name: "retry" },
        },
        {
          name: "--repeats",
          description: "Run each test NUMBER additional times",
          args: { name: "repeats" },
        },
        {
          name: "--shard",
          description:
            "Run only the test files for shard INDEX of COUNT, e.g. --shard=2/3",
          requiresSeparator: true,
          args: { name: "shard" },
        },
        {
          name: "--changed",
          description: "Run only test modules affected by files changed in git",
          requiresSeparator: true,
          exclusiveOn: ["--watch"],
          args: { name: "changed", isOptional: true },
        },
        {
          name: "--related",
          description:
            "Run only test modules that depend on the given source files",
          isRepeatable: true,
          requiresSeparator: true,
          exclusiveOn: ["--watch"],
          args: { name: "related" },
        },
        {
          name: "--coverage-raw-data-only",
          description:
            "Only collect raw coverage data, without generating a report",
        },
        ignoreOption,
        permitNoFilesOption,
        extOption,
        {
          name: "--check",
          description: "Set type-checking behavior",
          requiresSeparator: true,
          exclusiveOn: ["--no-check"],
          args: { name: "check", isOptional: true, suggestions: ["all"] },
        },
        ...permissionOptions,
        ...moduleOptions,
        reloadOption,
        ...inspectorOptions,
        ...runtimeOptions,
        allowScriptsOption,
      ],
      args: {
        name: "files",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
      parserDirectives: { optionsMustPrecedeArguments: true },
    },
    {
      name: "transpile",
      description: "Transpile TypeScript/JSX/TSX files to JavaScript",
      options: [
        {
          name: ["-o", "--output"],
          description: "Output file path (for single file transpilation)",
          exclusiveOn: ["--outdir"],
          args: { name: "output", template: "filepaths" },
        },
        {
          name: "--outdir",
          description: "Output directory for transpiled files",
          exclusiveOn: ["-o", "--output"],
          args: { name: "outdir", template: "folders" },
        },
        {
          name: "--source-map",
          description: "Source map mode: none, inline, or separate",
          args: {
            name: "source-map",
            suggestions: ["none", "inline", "separate"],
            default: "none",
          },
        },
        {
          name: "--declaration",
          description:
            "Generate .d.ts declaration files (requires type-checking via tsc)",
        },
        ...moduleOptions,
        reloadOption,
      ],
      args: { name: "file", isVariadic: true, template: "filepaths" },
    },
    { name: "types", description: "Print runtime TypeScript declarations" },
    {
      name: "uninstall",
      description:
        "Uninstalls a dependency or an executable script in the installation root's bin directory",
      options: [
        {
          name: ["-g", "--global"],
          description: "Remove globally installed packages or modules",
          exclusiveOn: ["--package-json"],
        },
        rootOption,
        {
          name: "--lockfile-only",
          description: "Install only updating the lockfile",
        },
        packageJsonOption,
        ...moduleOptions,
        reloadOption,
      ],
      args: {
        name: "packages",
        isVariadic: true,
        generators: generateInstalledDenoScripts,
      },
    },
    {
      name: "unlink",
      description: "Remove a linked local package from the current project",
      options: [
        {
          name: "--lockfile-only",
          description: "Install only updating the lockfile",
        },
        ...lockOptions,
      ],
      args: { name: "names_or_paths", isVariadic: true },
    },
    {
      name: "update",
      description: "Update outdated dependencies",
      options: [
        recursiveOption,
        {
          name: "--latest",
          description:
            "Consider the latest version, regardless of semver constraints",
        },
        {
          name: "--compatible",
          description:
            "Only consider versions that satisfy semver requirements",
        },
        {
          name: "--lockfile-only",
          description: "Install only updating the lockfile",
        },
        {
          name: ["-i", "--interactive"],
          description: "Interactively select which dependencies to update",
        },
        ...moduleOptions,
        { ...reloadOption, name: "--reload" },
      ],
      args: { name: "filters", isOptional: true, isVariadic: true },
    },
    {
      name: "upgrade",
      description: "Upgrade deno executable to given version",
      options: [
        {
          name: "--dry-run",
          description: "Perform all checks without replacing old exe",
        },
        {
          name: ["-f", "--force"],
          description: "Replace current exe even if not out-of-date",
        },
        {
          name: "--canary",
          description: "Upgrade to canary builds",
          exclusiveOn: ["--release-candidate", "--rc"],
        },
        {
          name: ["--release-candidate", "--rc"],
          description: "Upgrade to a release candidate",
          exclusiveOn: ["--canary", "--version"],
        },
        {
          name: "--version",
          description: "The version to upgrade to",
          exclusiveOn: ["--release-candidate", "--rc"],
          args: { name: "version", generators: generateVersions },
        },
        {
          name: ["-o", "--output"],
          description: "The path to output the updated version to",
          args: { name: "output", template: "filepaths" },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: { name: "cert", template: "filepaths" },
        },
        {
          name: "--unsafely-ignore-certificate-errors",
          description: "DANGER: Disables verification of TLS certificates",
          isRepeatable: true,
          args: {
            name: "unsafely-ignore-certificate-errors",
            isOptional: true,
          },
        },
        {
          name: "--pr",
          description: "Upgrade to the build of the given pull request",
          args: { name: "pr" },
        },
        {
          name: "--checksum",
          description:
            "Verify the downloaded archive against the provided SHA256 checksum",
          args: { name: "checksum" },
        },
        {
          name: "--branch",
          description: "Upgrade to the latest build of the given git branch",
          args: { name: "branch" },
        },
        {
          name: "--no-delta",
          description:
            "Disable delta updates and always download the full archive",
        },
      ],
      args: [
        {
          name: "version-or-hash-or-channel",
          isOptional: true,
          suggestions: ["stable", "lts", "rc", "beta", "alpha", "canary", "pr"],
          generators: generateVersions,
        },
        { name: "pr-number", isOptional: true },
      ],
    },
    {
      name: "watch",
      description:
        "Run a JavaScript or TypeScript program, watching for file changes and hot-replacing modules",
      options: [
        checkOption,
        watchOption,
        hmrOption,
        watchExcludeOption,
        noClearScreenOption,
        extOption,
        noCodeCacheOption,
        coverageOption,
        tunnelOption,
        useEnvProxyOption,
        ...permissionOptions,
        ...moduleOptions,
        reloadOption,
        ...inspectorOptions,
        ...runtimeOptions,
        ...cpuProfileOptions,
        allowScriptsOption,
      ],
      args: {
        name: "script_arg",
        isVariadic: true,
        isScript: true,
        suggestions: [
          { name: "-", description: "Read from standard input", hidden: true },
        ],
        generators: [{ template: "filepaths" }, generateUrlScript],
      },
      parserDirectives: { optionsMustPrecedeArguments: true },
    },
    {
      name: "why",
      description: "Show why a package is installed",
      options: [...lockOptions],
      args: { name: "package" },
    },
    {
      name: "x",
      description: "Execute a binary from npm or jsr, like npx",
      options: [
        {
          name: ["-y", "--yes"],
          description: "Assume confirmation for all prompts",
          exclusiveOn: ["--install-alias"],
        },
        {
          name: ["-p", "--package"],
          description:
            "Package to install (use when the binary name differs from the package name)",
          exclusiveOn: ["--install-alias"],
          args: { name: "package" },
        },
        {
          name: "--ignore-scripts",
          description:
            "Do not run npm lifecycle scripts for the given packages",
          isRepeatable: true,
          requiresSeparator: true,
          exclusiveOn: ["--allow-scripts", "--install-alias"],
          args: { name: "ignore-scripts", isOptional: true },
        },
        {
          name: "--install-alias",
          description:
            "Creates a dx alias so you can run dx <command> instead of deno x <command>",
          exclusiveOn: ["--ignore-scripts", "-p", "--package", "-y", "--yes"],
          args: { name: "install-alias", isOptional: true, default: "dx" },
        },
        checkOption,
        allowScriptsOption,
        ...moduleOptions,
        reloadOption,
        ...permissionOptions,
        ...runtimeOptions,
        ...inspectorOptions,
      ],
      args: {
        name: "script_arg",
        isOptional: true,
        isVariadic: true,
        isScript: true,
      },
      parserDirectives: { optionsMustPrecedeArguments: true },
    },
  ],
  options: [
    {
      name: ["--env-file", "--env"],
      description: "Load environment variables from local file",
      isPersistent: true,
      isRepeatable: true,
      requiresSeparator: true,
      args: { name: "env-file", isOptional: true, template: "filepaths" },
    },
    {
      name: ["-h", "--help"],
      description: "Print help information",
      isPersistent: true,
      requiresSeparator: true,
      args: {
        name: "context",
        isOptional: true,
        suggestions: ["unstable", "full"],
      },
    },
    {
      name: ["-V", "-v", "--version"],
      description: "Print version",
      isPersistent: true,
    },
    {
      name: ["-L", "--log-level"],
      description: "Set log level",
      isPersistent: true,
      args: { name: "log-level", suggestions: ["trace", "debug", "info"] },
    },
    {
      name: ["-q", "--quiet"],
      description: "Suppress diagnostic output",
      isPersistent: true,
    },
    {
      name: "--unstable",
      description: "Deprecated, use the granular `--unstable-*` flags instead",
      isPersistent: true,
      hidden: true,
      deprecated: true,
    },
    {
      name: "--unstable-bare-node-builtins",
      description: "Enable unstable bare node builtins feature",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-broadcast-channel",
      description: "Enable unstable `BroadcastChannel` API",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-bundle",
      description: "Enable unstable bundle runtime API",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-cron",
      description: "Enable unstable `Deno.cron` API",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-detect-cjs",
      description:
        "Treats ambiguous .js, .jsx, .ts, .tsx files as CommonJS modules in more cases",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-ffi",
      description: "Enable unstable FFI APIs",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-fs",
      description: "Enable unstable file system APIs",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-http",
      description: "Enable unstable HTTP APIs",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-kv",
      description: "Enable unstable KV APIs",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-lazy-dynamic-imports",
      description:
        "Lazily loads statically analyzable dynamic imports when not running with type checking",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-lockfile-v5",
      description: "Enable unstable lockfile v5",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-net",
      description: "Enable unstable net APIs",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-no-legacy-abort",
      description: "Enable abort signal in Deno.serve without legacy behavior",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-node-globals",
      description:
        "(Deprecated) Node.js `setTimeout` and `setInterval` globals are now always enabled, so this flag has no effect",
      isPersistent: true,
      hidden: true,
      deprecated: true,
    },
    {
      name: "--unstable-npm-lazy-caching",
      description:
        "Enable unstable lazy caching of npm dependencies, downloading them only as needed",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-otel",
      description: "Enable unstable OpenTelemetry features",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-process",
      description: "Enable unstable process APIs",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-raw-imports",
      description: "Enable unstable 'bytes' imports",
      isPersistent: true,
      hidden: true,
    },
    {
      name: ["--unstable-sloppy-imports", "--sloppy-imports"],
      description:
        "Enable unstable resolving of specifiers by extension probing, .js to .ts, and directory probing",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-subdomain-wildcards",
      description:
        "Enable subdomain wildcards support for the `--allow-net` flag",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-temporal",
      description: "Enable unstable Temporal API",
      isPersistent: true,
      hidden: true,
    },
    {
      name: ["--unstable-unsafe-proto", "--unsafe-proto"],
      description: "Enable unsafe __proto__ support",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-vsock",
      description: "Enable unstable VSOCK APIs",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-webgpu",
      description: "Enable unstable WebGPU APIs",
      isPersistent: true,
      hidden: true,
    },
    {
      name: "--unstable-worker-options",
      description: "Enable unstable Web Worker APIs",
      isPersistent: true,
      hidden: true,
    },
  ],
};

export default completion;
