// DeepSeek Harness `dsh` v0.2.2-rc.1. Source: apps/cli/src/args.ts and
// apps/cli/reference/README.md in https://github.com/deepseek-ai/deepseek-harness
// Launcher flags come first; the first unknown token starts the booted app's
// own arguments, so only the shipped apps' documented flags are listed.

const shippedProfiles: Fig.Suggestion[] = [
  { name: "web", description: "Boot the Web profile" },
  {
    name: "headless",
    description: "Run one fresh persisted session, print the answer, exit",
  },
  { name: "sdk", description: "Serve SDK clients over JSON-RPC stdio" },
  {
    name: "sdk-minimal",
    description: "Serve SDK clients with the standalone minimal agent tree",
  },
  { name: "acp", description: "Serve automation clients over ACP stdio" },
];

// Custom profiles under $DSH_HOME/profiles (default ~/.dsh); shipped ones are
// subcommands and "desktop" is reserved for the Electron app.
const customProfiles: Fig.Generator = {
  script: [
    "bash",
    "-c",
    'ls -1 "${DSH_HOME:-$HOME/.dsh}/profiles" 2>/dev/null',
  ],
  postProcess: (out) => {
    const skip = new Set(["desktop", ...shippedProfiles.map((p) => p.name)]);
    return out
      .split("\n")
      .filter((name) => name && !skip.has(name))
      .map((name) => ({ name, description: "Custom profile", icon: "📁" }));
  },
};

const profileArg: Fig.Arg = {
  name: "name",
  generators: customProfiles,
  suggestions: shippedProfiles,
};

const launcherOptions: Fig.Option[] = [
  {
    name: "--from-default-profile",
    description:
      "Replace a custom profile with a fresh copy of a shipped template",
    args: { name: "template", suggestions: shippedProfiles },
  },
  {
    name: "--patch",
    description: "Extra patch-list overlay applied after the profile layer",
    isRepeatable: true,
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--dump-config",
    description: "Print the composed profile tree and exit",
    exclusiveOn: ["--dump-default-config", "--dump-config-schema"],
  },
  {
    name: "--dump-default-config",
    description: "Print the tree without user layer or --patch overlays, exit",
    exclusiveOn: ["--dump-config", "--dump-config-schema", "--patch"],
  },
  {
    name: "--dump-config-schema",
    description: "Print JSON Schema for profile entries and patches, exit",
    exclusiveOn: ["--dump-config", "--dump-default-config"],
  },
];

const appArgs: Fig.Arg = {
  name: "app-args",
  description: "Arguments for the booted profile's app",
  isOptional: true,
  isVariadic: true,
};

const appHelp: Fig.Option = {
  name: ["-h", "--help"],
  description: "Show the booted app's help (boots nothing)",
};

const webOptions: Fig.Option[] = [
  {
    name: "--host",
    description: "One concrete local address to listen on (no wildcard)",
    args: { name: "address" },
  },
  {
    name: "--port",
    description: "Port to listen on (default: 3080)",
    args: { name: "port" },
  },
  {
    name: "--tls-cert",
    description: "PEM certificate chain; serve HTTPS (needs --tls-key)",
    dependsOn: ["--tls-key"],
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--tls-key",
    description: "Unencrypted PEM private key; serve HTTPS (needs --tls-cert)",
    dependsOn: ["--tls-cert"],
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--trusted-host",
    description: "Extra authority accepted by the Host/Origin fence",
    isRepeatable: true,
    args: { name: "host" },
  },
  {
    name: "--public-url",
    description: "URL to advertise instead of the listener address",
    args: { name: "url" },
  },
  { name: "--no-open", description: "Do not open the default browser" },
];

const appSpecific: Record<string, Partial<Fig.Subcommand>> = {
  web: { options: [...launcherOptions, ...webOptions, appHelp] },
  headless: {
    args: { name: "job", description: "The task to answer", isOptional: true },
  },
};

const completionSpec: Fig.Spec = {
  name: "dsh",
  description:
    "Boot a DeepSeek Harness profile: an ordered stack of plugin-bundle patch layers under your own overrides",
  args: [{ ...profileArg, isOptional: true }, appArgs],
  subcommands: [
    ...shippedProfiles.map(({ name, description }): Fig.Subcommand => ({
      name: name as string,
      description: description as string,
      args: appArgs,
      options: [...launcherOptions, appHelp],
      ...appSpecific[name as string],
    })),
    {
      name: "plugin",
      description:
        "Manage a profile's plugins by forwarding the remaining arguments to pnpm",
      options: [
        {
          name: "--profile",
          description: "The profile whose plugins to manage",
          isRequired: true,
          args: profileArg,
        },
        { name: ["-h", "--help"], description: "Show this help" },
      ],
      args: {
        name: "pnpm-args",
        description: "Arguments forwarded verbatim to pnpm",
        isVariadic: true,
        suggestions: [
          { name: "add", description: "Install a plugin package or git spec" },
          { name: "remove", description: "Remove a plugin package" },
          { name: "update", description: "Update plugin packages" },
          { name: "why", description: "Show why a package is installed" },
          { name: "list", description: "List installed packages" },
        ],
      },
    },
  ],
  options: [
    {
      name: "--profile",
      description: "The profile under $DSH_HOME/profiles to boot",
      args: profileArg,
    },
    ...launcherOptions,
    { name: ["-V", "--version"], description: "Output the version number" },
    { name: ["-h", "--help"], description: "Show the launcher's help" },
  ],
};

export default completionSpec;
