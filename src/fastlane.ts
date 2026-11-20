// fastlane v2.242.0 (RubyGems latest, 2026-11-19).
// Source: gem fastlane-2.242.0 unpacked and read statically (fastlane/lib/fastlane/commands_generator.rb) plus
// commander 4.6.0 (global -h/-v options, `help` command). The fastlane binary was not run. Per-action flags are not covered.
const completionSpec: Fig.Spec = {
  name: "fastlane",
  description:
    "Fastlane is an open source platform aimed at simplifying Android and iOS deployment",
  subcommands: [
    {
      name: "init",
      description: "Helps you with your initial fastlane setup",
      subcommands: [
        {
          name: "swift",
          description:
            "Fastlane configuration written in Swift (Beta). Swift setup is still in beta",
        },
      ],
      options: [
        {
          name: ["-u", "--user"],
          description: "Only for iOS projects: Your Apple ID",
          args: {
            name: "appleID",
            description: "Your Apple ID",
          },
        },
      ],
    },
    {
      name: "swift",
      description: "Alias namespace for `fastlane swift init`",
      subcommands: [
        {
          name: "init",
          description:
            "Fastlane configuration written in Swift (same as `fastlane init swift`)",
          options: [
            {
              name: ["-u", "--user"],
              description: "Only for iOS projects: Your Apple ID",
              args: {
                name: "appleID",
                description: "Your Apple ID",
              },
            },
          ],
        },
      ],
    },
    {
      name: "action",
      description: "Shows more information for a specific command",
      args: {
        name: "tool_name",
      },
    },
    {
      name: "actions",
      description: "Lists all available fastlane actions",
      options: [
        {
          name: "--platform",
          description: "Only show actions available on the given platform",
          args: {
            name: "platform",
            description: "One of android, ios or mac",
            suggestions: ["ios", "android", "mac"],
          },
        },
      ],
      args: {
        name: "filter",
        description: "Only show actions matching this name",
        isOptional: true,
      },
    },
    {
      name: "add_plugin",
      description: "Add a new plugin to your fastlane setup",
      args: {
        name: "plugin_name",
      },
    },
    {
      name: "console",
      description: "Opens an interactive developer console",
    },
    {
      name: "docs",
      description:
        "Generate a markdown based documentation based on the Fastfile",
      options: [
        {
          name: ["-f", "--force"],
          description:
            "Overwrite the existing README.md in the ./fastlane folder",
        },
      ],
    },
    {
      name: "enable_auto_complete",
      description: "Enable tab auto completion",
      options: [
        {
          name: ["-c", "--custom"],
          description:
            "Add custom command(s) for which tab auto complete should be enabled too",
          args: {
            name: "commands",
            description: "Comma-separated list of commands",
          },
        },
      ],
    },
    {
      name: "env",
      description:
        "Print your fastlane environment, use this when you submit an issue on GitHub",
    },
    {
      name: "generate_swift",
      description:
        "Generates additional Swift APIs for plugins and local actions (Swift fastlane projects only)",
    },
    {
      name: "help",
      description: "Display global or [command] help documentation",
    },
    {
      name: "install_plugins",
      description: "Install all plugins for this project",
    },
    {
      name: "lanes",
      description: "Lists all available lanes and shows their description",
    },
    {
      name: "list",
      description: "Lists all available lanes without description",
      options: [
        {
          name: ["-j", "--json"],
          description: "Output the lanes in JSON instead of text",
        },
      ],
    },
    {
      name: "new_action",
      description: "Create a new custom action for fastlane",
      options: [
        {
          name: "--name",
          description: "Name of your new action (prompted for if omitted)",
          args: {
            name: "action_name",
          },
        },
      ],
    },
    {
      name: "new_plugin",
      description: "Create a new plugin that can be used with fastlane",
      args: {
        name: "plugin_name",
        isOptional: true,
      },
    },
    {
      name: "run",
      description: "Run a fastlane one-off action without a full lane",
      args: {
        name: "action",
        // TODO: Depending on the current platform directory need to show only available actions for that platform
      },
    },
    {
      name: "search_plugins",
      description: "Search for plugins, search query is optional",
      args: {
        name: "search_query",
        isOptional: true,
      },
    },
    {
      name: "socket_server",
      description:
        "Starts local socket server and enables only a single local connection",
      options: [
        {
          name: ["-s", "--stay_alive"],
          description:
            "Keeps socket server up even after error or disconnects, requires CTRL-C to kill",
        },
        {
          name: ["-c", "--connection_timeout"],
          description: "Sets connection established timeout",
          args: {
            name: "seconds",
            description: "Connection timeout in seconds",
          },
        },
        {
          name: "--token_file",
          description:
            "File holding the token every command must carry (default: FASTLANE_SOCKET_SERVER_TOKEN_FILE)",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: ["-p", "--port"],
          description: "Sets the port on localhost for the socket connection",
          args: {
            name: "port",
            description: "The port on localhost",
          },
        },
      ],
    },
    {
      name: "trigger",
      description:
        "Run a specific lane. Pass the lane name and optionally the platform first",
      options: [
        {
          name: "--disable_runner_upgrades",
          description:
            "Prevents fastlane from attempting to update FastlaneRunner swift project",
        },
        {
          name: "--swift_server_port",
          description:
            "Set specific port to communicate between fastlane and FastlaneRunner",
          args: {
            name: "port",
            description:
              "Set specific port to communicate between fastlane and FastlaneRunner",
          },
        },
      ],
      args: {
        name: "lane",
        description: "Specific lane to trigger",
        // TODO: Generator to show only available lanes
      },
    },
    {
      name: "update_fastlane",
      description: "Update fastlane to the latest release",
    },
    {
      name: "update_plugins",
      description: "Update all plugin dependencies",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help for fastlane",
      isPersistent: true,
      priority: 48,
    },
    {
      name: ["-v", "--version"],
      description: "Show version information for fastlane",
      isPersistent: true,
    },
    {
      name: "--verbose",
      description: "Show verbose output",
      isPersistent: true,
      priority: 48,
    },
    {
      name: "--capture_output",
      description:
        "Captures the output of the current run, and generates a markdown issue template",
      isPersistent: true,
    },
    {
      name: "--troubleshoot",
      description:
        "Enables extended verbose mode. Use with caution, as this even includes ALL sensitive data. Cannot be used on CI",
      isPersistent: true,
    },
    {
      name: "--env",
      description: "Add environment(s) to use with `dotenv`",
      isPersistent: true,
      args: {
        name: "environments",
        description: "Comma-separated list of environment names",
      },
    },
  ],
  // Only uncomment if fastlane takes an argument
  // args: {}
};
export default completionSpec;
