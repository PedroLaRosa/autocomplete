// Splash CLI v4.2.0 (GitHub release rawnly/splash-cli tag 4.2.0, 2026-11-20). Source: Go/cobra sources (cmd/**/*.go, config/*.go) read statically at tag 4.2.0, plus its README usage; the binary was not run.
// The old Node.js v3 CLI (npm splash-cli 3.4.x, subcommands dir/user and flags like --curated/--flip/--rotate) was replaced by this Go rewrite, so the v3 tree was dropped.
// Notes: main (post-4.2.0, 2026-10) changes no commands or flags; `--scale` is declared but unused in the 4.2.0 source, so it has no value list; no generators (every run needs UNSPLASH_CLIENT_ID/SECRET and may hit the network).
const noDescriptionsOption: Fig.Option = {
  name: "--no-descriptions",
  description: "Disable completion descriptions",
};

const completionShell = (shell: string): Fig.Subcommand => ({
  name: shell,
  description: `Generate the autocompletion script for ${shell}`,
  options: [noDescriptionsOption],
});

const settingsKeys: Fig.Suggestion[] = [
  {
    name: "downloads-dir",
    description: "Directory where photos are downloaded",
  },
  { name: "auto-like", description: "Automatically like downloaded photos" },
  {
    name: "username-storage",
    description: "Store photos by author username",
  },
];

const completionSpec: Fig.Spec = {
  name: ["splash", "splash-cli"],
  displayName: "Splash",
  description: "Download Unsplash wallpapers and set them as your wallpaper",
  subcommands: [
    {
      name: "alias",
      description: "Manage collection aliases",
      icon: "🔗",
      subcommands: [
        {
          name: "get",
          description:
            "Show the collection ID of an alias, or list all aliases",
          args: {
            name: "alias",
            description: "Alias name",
            isOptional: true,
          },
        },
        {
          name: "set",
          description: "Alias a collection ID to a name",
          args: [
            { name: "name", description: "Alias name" },
            { name: "collection-id", description: "Collection ID" },
          ],
        },
        {
          name: ["remove", "delete", "rm"],
          description: "Remove an alias",
          args: { name: "alias", description: "Alias name" },
        },
        {
          name: ["rename", "mv"],
          description: "Rename an alias",
          args: [
            { name: "old name", description: "Current alias name" },
            { name: "new name", description: "New alias name" },
          ],
        },
      ],
    },
    {
      name: "auth",
      description: "Authenticate with Unsplash",
      subcommands: [
        {
          name: "login",
          description: "Authenticate with Unsplash",
          options: [
            {
              name: "--no-hyperlinks",
              description: "Disable hyperlinks",
              hidden: true,
            },
          ],
        },
        {
          name: "logout",
          description: "Logout from Unsplash",
        },
        {
          name: ["whoami", "user", "me"],
          description: "Info about the current user",
        },
      ],
    },
    {
      name: "collection",
      description: "CRUD on collections",
      icon: "🗃",
      subcommands: [
        {
          name: "get",
          description: "Get collection infos",
          args: {
            name: "collection",
            description: "Collection ID, URL or alias",
          },
        },
      ],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: ["bash", "fish", "powershell", "zsh"].map(completionShell),
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: ["settings", "config"],
      description: "Manage user settings",
      icon: "⚙️",
      subcommands: [
        {
          name: "get",
          description: "Get the value of a setting",
          args: {
            name: "key",
            description: "Setting key",
            suggestions: settingsKeys,
          },
        },
        {
          name: "set",
          description: "Set the value of a setting",
          args: [
            {
              name: "key",
              description: "Setting key",
              suggestions: settingsKeys,
            },
            { name: "value", description: "New value" },
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Help for splash",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Version for splash",
    },
    {
      name: "--plain",
      description: "Plain output. Good for tty",
      isPersistent: true,
    },
    {
      name: "--day",
      description: "Retrieve the photo of the day",
    },
    {
      name: "--id",
      description: "Retrieve a single photo by ID",
      args: { name: "photo id", description: "Photo ID or Unsplash photo URL" },
    },
    {
      name: ["-q", "--query"],
      description: "Limit selection to photos matching a search term",
      args: { name: "query" },
    },
    {
      name: ["-o", "--orientation"],
      description: "Filter by photo orientation",
      args: {
        name: "orientation",
        default: "landscape",
        suggestions: ["landscape", "portrait", "squarish"],
      },
    },
    {
      name: ["-u", "--user"],
      description: "Limit selection to a single user",
      args: { name: "username" },
    },
    {
      name: ["-c", "--collections"],
      description:
        "Public collection ID(s) to filter selection. If multiple, comma-separated",
      isRepeatable: true,
      args: {
        name: "collections",
        description: "Collection ID, URL or alias",
      },
    },
    {
      name: ["-t", "--topics"],
      description:
        "Public topic ID(s) to filter selection. If multiple, comma-separated",
      isRepeatable: true,
      args: { name: "topics", description: "Topic ID" },
    },
    {
      name: ["-s", "--save"],
      description: "Save the photo without setting it as wallpaper",
    },
    {
      name: "--scale",
      description: "Set wallpaper scale",
      args: { name: "scale", default: "auto" },
    },
    {
      name: "--screen",
      description: "Set wallpaper on a specific screen (macOS only)",
      args: { name: "screen", default: "-1" },
    },
    {
      name: "--no-cache",
      description: "Ignore cache",
    },
  ],
};

export default completionSpec;
