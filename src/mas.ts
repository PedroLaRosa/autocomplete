// mas v7.0.0 (GitHub release, 2026-05-04). Source: Sources/mas/Commands/**/*.swift
// at tag v7.0.0 in mas-cli/mas (not installed here)

// `mas list --json` prints one JSON object per installed app
const installedApps: Fig.Generator = {
  script: ["mas", "list", "--json"],
  postProcess: (out) =>
    out
      .split("\n")
      .filter((line) => line.startsWith("{"))
      .map((line) => {
        const app = JSON.parse(line);
        return { name: String(app.adamID), description: app.name };
      }),
};

const bundleOption: Fig.Option = {
  name: "--bundle",
  description: "Process all app IDs as bundle IDs",
};

const forceOption: Fig.Option = {
  name: "--force",
  description: "Force reinstall",
};

const jsonOption: Fig.Option = {
  name: "--json",
  description: "Output JSON",
};

const outdatedOptions: Fig.Option[] = [
  {
    name: "--accurate",
    description:
      "Use accurate, slower logic that starts then cancels a download for each queried app (can exceed download limits & open dialogs)",
    exclusiveOn: ["--inaccurate"],
  },
  {
    name: "--inaccurate",
    description: "Use inaccurate, faster logic that avoids dialogs (default)",
    exclusiveOn: ["--accurate"],
  },
  {
    name: "--check-min-os",
    description: "Check if macOS can install latest app version (default)",
    exclusiveOn: ["--no-check-min-os"],
  },
  {
    name: "--no-check-min-os",
    description: "Don't check if macOS can install latest app version",
    exclusiveOn: ["--check-min-os"],
  },
  {
    name: "--verbose",
    description: "Warn about app IDs unknown to the App Store",
  },
];

const catalogAppIDs: Fig.Arg = {
  name: "app-id",
  description: "App ID",
  isVariadic: true,
};

const installedAppIDs: Fig.Arg = {
  name: "app-id",
  description: "App ID of an installed app",
  isOptional: true,
  isVariadic: true,
  generators: installedApps,
};

const searchTerms: Fig.Arg = {
  name: "search-term",
  description: "Search terms are concatenated into a single search",
  isVariadic: true,
};

const completionSpec: Fig.Spec = {
  name: "mas",
  description: "Mac App Store command-line interface",
  options: [{ name: "--version", description: "Show the version" }],
  subcommands: [
    {
      name: "config",
      description: "Output mas config & related system info",
      options: [jsonOption],
    },
    {
      name: ["get", "purchase"],
      description: "Get & install free apps from the App Store",
      options: [forceOption, bundleOption],
      args: catalogAppIDs,
    },
    {
      name: "help",
      description: "Display general or command-specific help",
    },
    {
      name: "home",
      description: "Open App Store app pages in the default web browser",
      options: [bundleOption],
      args: catalogAppIDs,
    },
    {
      name: "install",
      description: "Install previously gotten apps from the App Store",
      options: [forceOption, bundleOption],
      args: catalogAppIDs,
    },
    {
      name: "list",
      description: "List apps installed from the App Store",
      options: [jsonOption, bundleOption],
      args: installedAppIDs,
    },
    {
      name: ["lookup", "info"],
      description: "Output app info from the App Store",
      options: [jsonOption, bundleOption],
      args: catalogAppIDs,
    },
    {
      name: "lucky",
      description:
        "Install the first app returned from searching the App Store",
      options: [forceOption],
      args: searchTerms,
    },
    {
      name: "open",
      description: "Open app page in 'App Store.app'",
      options: [bundleOption],
      args: { name: "app-id", description: "App ID", isOptional: true },
    },
    {
      name: "outdated",
      description: "List pending app updates from the App Store",
      options: [jsonOption, ...outdatedOptions, bundleOption],
      args: installedAppIDs,
    },
    {
      name: "reset",
      description:
        "Reset App Store processes & clear cached App Store downloads",
    },
    {
      name: "search",
      description: "Search for apps in the App Store",
      options: [
        jsonOption,
        { name: "--price", description: "Output the price of each app" },
      ],
      args: searchTerms,
    },
    {
      name: ["seller", "vendor"],
      description: "Open apps' seller pages in the default web browser",
      options: [bundleOption],
      args: catalogAppIDs,
    },
    {
      name: "signout",
      description: "Sign out of the App Store",
    },
    {
      name: "uninstall",
      description: "Uninstall apps installed from the App Store",
      options: [
        { name: "--dry-run", description: "Perform dry run" },
        { name: "--all", description: "Uninstall all App Store apps" },
        bundleOption,
      ],
      args: installedAppIDs,
    },
    {
      name: ["update", "upgrade"],
      description: "Update outdated apps installed from the App Store",
      options: [forceOption, ...outdatedOptions, bundleOption],
      args: installedAppIDs,
    },
    {
      name: "version",
      description: "Output version number",
    },
  ],
};
export default completionSpec;
