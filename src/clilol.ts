// clilol v1.1.3 (latest on the Go module proxy, published 2025-07-15; the upstream GitHub repo no longer answers, 2026-11-20).
// Source: read statically from the v1.1.3 module zip (cmd/*.go cobra definitions, docs/commands/*.md, fang v0.3.0 for the
// hidden man command and --version flag); the binary was not run.

const addressOption = (description: string): Fig.Option => ({
  name: ["--address", "-a"],
  description,
  args: { name: "address" },
});

const filenameOption = (description: string): Fig.Option => ({
  name: ["--filename", "-f"],
  description,
  args: { name: "filename", template: "filepaths" },
});

const listedOption = (description: string): Fig.Option => ({
  name: ["--listed", "-l"],
  description,
});

const emojiOption: Fig.Option = {
  name: ["--emoji", "-e"],
  description: "Emoji to add to status (default sparkles)",
  args: { name: "emoji" },
};

const dnsOptions = (priority: string, ttl: string): Fig.Option[] => [
  {
    name: ["--priority", "-p"],
    description: priority,
    args: { name: "priority", default: "0" },
  },
  {
    name: ["--ttl", "-T"],
    description: ttl,
    args: { name: "ttl", default: "3600" },
  },
];

const dangerousArg = (name: string, description: string): Fig.Arg => ({
  name,
  description,
  isDangerous: true,
});

const subcommands: Fig.Subcommand[] = [
  {
    name: "create",
    description: "Create things",
    subcommands: [
      {
        name: "dns",
        description: "Create a DNS record",
        args: [
          { name: "name", description: "Name of the DNS record" },
          { name: "type", description: "Type of the DNS record" },
          { name: "data", description: "Data of the DNS record" },
        ],
        options: dnsOptions(
          "Priority of the DNS record",
          "Time to live of the DNS record"
        ),
      },
      {
        name: "paste",
        description: "Create or update a paste",
        args: { name: "title", description: "Title of the paste" },
        options: [
          filenameOption("File to read paste from (default stdin)"),
          listedOption("Create paste as listed (default false)"),
        ],
      },
      {
        name: "picture",
        description: "Upload a picture to some.pics",
        args: {
          name: "filename",
          description: "Filename of the image file",
          template: "filepaths",
        },
        options: [
          {
            name: ["--description", "-d"],
            description: "Description of the picture (default empty/unlisted)",
            args: { name: "description" },
          },
        ],
      },
      {
        name: "purl",
        description: "Create a PURL",
        args: [
          { name: "name", description: "Name of the PURL" },
          { name: "url", description: "URL that the PURL redirects to" },
        ],
        options: [listedOption("Create as listed (default false)")],
      },
      {
        name: "status",
        description: "Create a status",
        args: { name: "text", description: "Text of the status" },
        options: [
          emojiOption,
          {
            name: "--skip-mastodon-post",
            description: "Do not cross-post to Mastodon",
          },
        ],
      },
      {
        name: "weblog",
        description: "Create a weblog entry",
        options: [filenameOption("File to read entry from (default stdin)")],
      },
    ],
  },
  {
    name: "delete",
    description: "Delete things",
    subcommands: [
      {
        name: "account",
        description: "Delete information about your account",
        subcommands: [
          {
            name: "session",
            description: "Delete a session",
            args: dangerousArg("id", "ID of the session to delete"),
          },
        ],
      },
      {
        name: "dns",
        description: "Delete a DNS record",
        args: dangerousArg("id", "ID of the record to delete"),
      },
      {
        name: "paste",
        description: "Delete a paste",
        args: dangerousArg("title", "Title of the paste to delete"),
      },
      {
        name: "picture",
        description: "Delete a picture from some.pics",
        args: dangerousArg("id", "ID of the picture to delete"),
      },
      {
        name: "purl",
        description: "Delete a PURL",
        args: dangerousArg("name", "Name of the PURL to delete"),
      },
      {
        name: "status",
        description: "Delete a status",
        args: dangerousArg("id", "ID of the status to delete"),
      },
      {
        name: "weblog",
        description: "Delete a weblog entry",
        args: dangerousArg("id", "ID of the weblog entry to delete"),
      },
    ],
  },
  {
    name: "get",
    description: "Get things",
    subcommands: [
      {
        name: "account",
        description: "Get information about your account",
        subcommands: [
          { name: "info", description: "Get info about your account" },
          { name: "name", description: "Get your account name" },
          { name: "settings", description: "Get your account settings" },
        ],
      },
      {
        name: "address",
        description: "Get information about an address",
        subcommands: [
          {
            name: "availability",
            description: "Get address availability",
            args: { name: "address", description: "Address to get" },
          },
          {
            name: "expiration",
            description: "Get address expiration",
            args: { name: "address", description: "Address to get" },
          },
          {
            name: "info",
            description: "Get information about an address",
            args: { name: "name", description: "Address to get" },
          },
        ],
      },
      {
        name: "dns",
        description: "Get a DNS record",
        args: [
          { name: "name", description: "Name of the DNS record" },
          { name: "type", description: "Type of the DNS record" },
          { name: "data", description: "Data of the DNS record" },
        ],
        options: dnsOptions(
          "Priority of the DNS record",
          "Time to live of the DNS record"
        ),
      },
      { name: "email", description: "Get email forwarding address(es)" },
      {
        name: "now",
        description: "Get a Now page",
        options: [
          addressOption("Address whose Now page to get"),
          filenameOption("File to write Now page to (default stdout)"),
        ],
      },
      {
        name: "paste",
        description: "Get a paste",
        args: { name: "title", description: "Title of the paste" },
        options: [
          addressOption("Address whose paste to get"),
          filenameOption("File to write paste to (default stdout)"),
        ],
      },
      {
        name: "purl",
        description: "Get a PURL",
        args: { name: "name", description: "Name of the PURL" },
        options: [addressOption("Address whose PURL to get")],
      },
      { name: "service", description: "Get service stats" },
      {
        name: "status",
        description: "Get status",
        args: { name: "id", description: "ID of the status" },
        options: [addressOption("Address whose status to get")],
      },
      {
        name: "status-bio",
        description: "Get status bio",
        options: [addressOption("Address whose status bio to get")],
      },
      {
        name: "theme",
        description: "Get theme information",
        args: { name: "theme-name", description: "Name of the theme" },
        subcommands: [
          {
            name: "preview",
            description: "Get theme preview",
            args: { name: "theme-name", description: "Name of the theme" },
            options: [
              filenameOption("File to write preview to (default stdout)"),
            ],
          },
        ],
      },
      {
        name: "web",
        description: "Get your webpage content",
        options: [filenameOption("File to write webpage to (default stdout)")],
      },
      {
        name: "weblog",
        description: "Get a weblog entry",
        args: { name: "id", description: "ID of the weblog entry" },
        subcommands: [
          {
            name: "config",
            description: "Get your weblog config",
            options: [
              filenameOption("File to write configuration to (default stdout)"),
            ],
          },
          { name: "latest", description: "Get the latest weblog entry" },
          {
            name: "template",
            description: "Get your weblog template",
            options: [
              filenameOption("File to write template to (default stdout)"),
            ],
          },
        ],
      },
    ],
  },
  {
    name: "list",
    description: "List things",
    subcommands: [
      {
        name: "account",
        description: "List information about your account",
        subcommands: [
          {
            name: ["addresses", "address"],
            description: "List your addresses",
          },
          { name: ["sessions", "session"], description: "List your sessions" },
        ],
      },
      { name: "directory", description: "List the address directory" },
      { name: "dns", description: "List your dns records" },
      { name: "now", description: "List Now pages" },
      {
        name: ["pastes", "paste"],
        description: "List pastes",
        options: [addressOption("Address whose pastes to list")],
      },
      { name: ["pictures", "picture"], description: "List pictures" },
      {
        name: ["purls", "purl"],
        description: "List all PURLs",
        options: [addressOption("Address whose PURLs to get")],
      },
      {
        name: ["statuses", "status"],
        description: "List statuses",
        options: [
          addressOption("Address whose status(es) to get"),
          {
            name: ["--limit", "-l"],
            description: "How many status(es) to get (default all)",
            args: { name: "limit", default: "0" },
          },
        ],
      },
      {
        name: "statuslog",
        description: "List the statuslog",
        options: [
          {
            name: ["--all", "-A"],
            description:
              "Get the entire statuslog (default is latest statuses only)",
          },
        ],
      },
      { name: ["themes", "theme"], description: "List profile themes" },
      { name: ["weblogs", "weblog"], description: "List all weblog entries" },
    ],
  },
  {
    name: "update",
    description: "Update things",
    subcommands: [
      {
        name: "account",
        description: "Update information about your account",
        subcommands: [
          {
            name: "name",
            description: "Set the name on your account",
            args: { name: "name", description: "The name to set" },
          },
          {
            name: "settings",
            description: "Set the settings on your account",
            options: [
              {
                name: ["--communication", "-c"],
                description: "Communication preference",
                args: { name: "communication" },
              },
              {
                name: ["--date-format", "-d"],
                description: "Date format preference",
                args: { name: "date-format" },
              },
              {
                name: ["--web-editor", "-w"],
                description: "Web editor preference",
                args: { name: "web-editor" },
              },
            ],
          },
        ],
      },
      {
        name: "dns",
        description: "Update a DNS record",
        args: [
          { name: "id", description: "The ID of the record to update" },
          { name: "name", description: "Updated name" },
          { name: "type", description: "Updated type" },
          { name: "data", description: "Updated data" },
        ],
        options: dnsOptions("Updated priority", "Updated TTL"),
      },
      {
        name: ["email", "emails"],
        description: "Set email forwarding address(es)",
        args: {
          name: "address",
          description: "Address(es) to forward to, separated by commas",
        },
      },
      {
        name: "now",
        description: "Update Now page content",
        options: [
          filenameOption("File to read Now page from (default stdin)"),
          listedOption("Create Now page as listed (default false)"),
        ],
      },
      {
        name: "preference",
        description: "Set a preference",
        args: [
          { name: "item", description: "Preferences item to set" },
          { name: "value", description: "Value to set" },
        ],
      },
      {
        name: "status",
        description: "Update a status",
        args: [
          { name: "id", description: "The ID of the status to update" },
          { name: "text", description: "New text for the status" },
        ],
        options: [emojiOption],
      },
      {
        name: "status-bio",
        description: "Update your status bio",
        args: { name: "text", description: "New text for the status bio" },
      },
      {
        name: "web",
        description: "Set webpage content",
        subcommands: [
          {
            name: "pfp",
            description: "Set your profile picture",
            args: {
              name: "filename",
              description: "The filename of the image to set",
              template: "filepaths",
            },
          },
        ],
        options: [
          filenameOption("File to read webpage from (default stdin)"),
          {
            name: ["--publish", "-p"],
            description: "Publish the updated page (default false)",
          },
        ],
      },
      {
        name: "weblog",
        description: "Set your weblog config",
        subcommands: [
          {
            name: "config",
            description: "Set your weblog config",
            options: [
              filenameOption("File to read config from (default stdin)"),
            ],
          },
          {
            name: "template",
            description: "Set your weblog template",
            options: [
              filenameOption("File to read template from (default stdin)"),
            ],
          },
        ],
      },
    ],
  },
  {
    name: "completion",
    description: "Generate completion script",
    hidden: true,
    args: {
      name: "shell",
      suggestions: ["bash", "zsh", "fish", "powershell"],
    },
  },
  {
    name: "man",
    description: "Generate manpages",
    hidden: true,
  },
  {
    name: "markdown-doc",
    description: "Generate markdown docs",
    hidden: true,
  },
];

// `help` mirrors the visible command tree, names and descriptions only
const helpSubcommands = (commands: Fig.Subcommand[]): Fig.Subcommand[] =>
  commands
    .filter((command) => !command.hidden)
    .map(({ name, description, subcommands: children }) => ({
      name,
      description,
      ...(children ? { subcommands: helpSubcommands(children) } : {}),
    }));

const completionSpec: Fig.Spec = {
  name: "clilol",
  description: "A CLI for omg.lol",
  subcommands: [
    ...subcommands,
    {
      name: "help",
      description: "Help about any command",
      subcommands: helpSubcommands(subcommands),
    },
  ],
  options: [
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
    { name: ["--version", "-v"], description: "Display version" },
  ],
};
export default completionSpec;
