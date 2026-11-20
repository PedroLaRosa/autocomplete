// GoReleaser v2.20.3 (git tag v2.20.3 of goreleaser/goreleaser, 2026-11-20). Source: cmd/*.go (cobra definitions),
// internal/skips/skips.go and cmd/root.go at that tag, plus charmbracelet/fang v1.0.0 (adds --version and the
// hidden "man" command; cobra's default "completion" command stays enabled). Read statically, the binary was not run.
// Removed upstream since the previous spec: --debug, --rm-dist and the --skip-* flags (use --skip=<option>).

const buildSkips = ["before", "post-hooks", "pre-hooks", "validate"];

const releaseSkips = [
  "announce",
  "archive",
  "aur",
  "aur-source",
  "before",
  "changelog",
  "chocolatey",
  "docker",
  "flatpak",
  "homebrew",
  "iru",
  "ko",
  "makeself",
  "mcp",
  "nfpm",
  "nix",
  "notarize",
  "publish",
  "sbom",
  "scoop",
  "sign",
  "snapcraft",
  "srpm",
  "validate",
  "winget",
];

const initLanguages = [
  "go",
  "bun",
  "deno",
  "node",
  "rust",
  "zig",
  "uv",
  "poetry",
];

const configOption = (description: string): Fig.Option => ({
  name: ["--config", "-f"],
  description,
  args: { name: "config", template: "filepaths" },
});

const parallelismOption = (description: string): Fig.Option => ({
  name: ["--parallelism", "-p"],
  description,
  args: { name: "parallelism", default: "0" },
});

const timeoutOption = (description: string): Fig.Option => ({
  name: "--timeout",
  description,
  args: { name: "timeout", default: "1h0m0s" },
});

const skipOption = (
  description: string,
  suggestions: string[]
): Fig.Option => ({
  name: "--skip",
  description,
  isRepeatable: true,
  args: { name: "skip", suggestions },
});

const autoSnapshotOption: Fig.Option = {
  name: "--auto-snapshot",
  description: "Automatically sets --snapshot if the repository is dirty",
};

const deprecatedOption: Fig.Option = {
  name: "--deprecated",
  description: "Force print the deprecation message - tests only",
  hidden: true,
};

const quietOption: Fig.Option = {
  name: ["--quiet", "-q"],
  description: "Quiet mode: no output",
};

const markdownFileOption = (name: string, description: string): Fig.Option => ({
  name,
  description,
  args: { name: name.slice(2), template: "filepaths" },
});

const completionShellSubcommand = (shell: string): Fig.Subcommand => ({
  name: shell,
  description: `Generate the autocompletion script for ${shell}`,
  options: [
    {
      name: "--no-descriptions",
      description: "Disable completion descriptions",
    },
  ],
});

const completionShells = ["bash", "fish", "powershell", "zsh"];

const completionSpec: Fig.Spec = {
  name: "goreleaser",
  description: "Release engineering, simplified",
  subcommands: [
    {
      name: ["b", "build"],
      description: "Builds the current project",
      options: [
        autoSnapshotOption,
        {
          name: "--clean",
          description: "Removes the 'dist' directory before building",
        },
        configOption("Load configuration from file"),
        deprecatedOption,
        {
          name: "--id",
          description: "Builds only the specified build ids",
          isRepeatable: true,
          args: { name: "id" },
        },
        {
          name: ["--output", "-o"],
          description:
            "Copy the binary to the path after the build. Only taken into account when using --single-target and a single id (either with --id or if configuration only has one build)",
          args: { name: "output", template: "filepaths" },
        },
        parallelismOption(
          "Number of tasks to run concurrently (default: number of CPUs)"
        ),
        {
          name: "--single-target",
          description:
            "Builds only for current GOOS and GOARCH, regardless of what's set in the configuration file",
        },
        skipOption(
          `Skip the given options (valid options are: ${buildSkips.join(", ")})`,
          buildSkips
        ),
        {
          name: "--snapshot",
          description:
            "Generate an unversioned snapshot build, skipping all validations",
        },
        timeoutOption("Timeout to the entire build process"),
      ],
    },
    {
      name: ["c", "check"],
      description: "Checks if configuration is valid",
      options: [
        {
          ...configOption("Configuration file(s) to check"),
          hidden: true,
        },
        deprecatedOption,
        quietOption,
      ],
      args: {
        name: "configuration files",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: completionShells.map(completionShellSubcommand),
    },
    {
      name: ["hc", "healthcheck"],
      description: "Checks if needed tools are installed",
      options: [configOption("Configuration file"), quietOption],
    },
    {
      name: ["i", "init"],
      description: "Generates a .goreleaser.yaml file",
      options: [
        {
          name: ["--config", "-f"],
          description: "Load configuration from file",
          args: {
            name: "config",
            default: ".goreleaser.yaml",
            template: "filepaths",
          },
        },
        {
          name: ["--language", "-l"],
          description: "Which language will be used",
          args: {
            name: "language",
            default: "go",
            suggestions: initLanguages,
          },
        },
      ],
    },
    {
      name: "man",
      description: "Generates GoReleaser's command line manpages",
      hidden: true,
    },
    {
      name: ["schema", "jsonschema"],
      description: "Outputs goreleaser's JSON schema",
      options: [
        {
          name: ["--output", "-o"],
          description: "Where to save the JSONSchema file",
          args: { name: "output", default: "-", template: "filepaths" },
        },
      ],
    },
    {
      name: ["r", "release"],
      description: "Releases the current project",
      options: [
        autoSnapshotOption,
        { name: "--clean", description: "Removes the 'dist' directory" },
        configOption("Load configuration from file"),
        deprecatedOption,
        {
          name: "--draft",
          description:
            "Whether to set the release to draft. Overrides release.draft in the configuration file",
        },
        {
          name: "--fail-fast",
          description:
            "Whether to abort the release publishing on the first error",
        },
        parallelismOption(
          "Amount tasks to run concurrently (default: number of CPUs)"
        ),
        markdownFileOption(
          "--release-footer",
          "Load custom release notes footer from a markdown file"
        ),
        markdownFileOption(
          "--release-footer-tmpl",
          "Load custom release notes footer from a templated markdown file (overrides --release-footer)"
        ),
        markdownFileOption(
          "--release-header",
          "Load custom release notes header from a markdown file"
        ),
        markdownFileOption(
          "--release-header-tmpl",
          "Load custom release notes header from a templated markdown file (overrides --release-header)"
        ),
        markdownFileOption(
          "--release-notes",
          "Load custom release notes from a markdown file (will skip GoReleaser changelog generation)"
        ),
        markdownFileOption(
          "--release-notes-tmpl",
          "Load custom release notes from a templated markdown file (overrides --release-notes)"
        ),
        skipOption(
          `Skip the given options (valid options are ${releaseSkips.join(", ")})`,
          releaseSkips
        ),
        {
          name: "--snapshot",
          description:
            "Generate an unversioned snapshot release, skipping all validations and without publishing any artifacts (implies --skip=announce,publish,validate)",
        },
        timeoutOption("Timeout to the entire release process"),
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        { name: ["b", "build"], description: "Builds the current project" },
        {
          name: ["c", "check"],
          description: "Checks if configuration is valid",
        },
        {
          name: "completion",
          description:
            "Generate the autocompletion script for the specified shell",
          subcommands: completionShells.map((shell) => ({
            name: shell,
            description: `Generate the autocompletion script for ${shell}`,
          })),
        },
        {
          name: ["hc", "healthcheck"],
          description: "Checks if needed tools are installed",
        },
        {
          name: ["i", "init"],
          description: "Generates a .goreleaser.yaml file",
        },
        {
          name: ["schema", "jsonschema"],
          description: "Outputs goreleaser's JSON schema",
        },
        { name: ["r", "release"], description: "Releases the current project" },
      ],
    },
  ],
  options: [
    {
      name: "--verbose",
      description: "Enable verbose mode",
      isPersistent: true,
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
    {
      name: ["--version", "-v"],
      description: "Version for goreleaser",
    },
  ],
};
export default completionSpec;
