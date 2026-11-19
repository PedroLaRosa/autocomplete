// Rojo v7.7.1 (GitHub release, 2026-10-02). Source: clap structs in
// rojo-rbx/rojo src/cli/*.rs at tag v7.7.1, 2026-11-19
import { filepaths } from "@tabsmith/autocomplete-generators";

const robloxFiles = filepaths({
  extensions: ["rbxm", "rbxl", "rbxmx", "rbxlx"],
});

const project = (description: string): Fig.Arg => ({
  name: "PROJECT",
  description,
  isOptional: true,
});

const completionSpec: Fig.Spec = {
  name: "rojo",
  description:
    "Enables professional-grade development tools for Roblox developers",
  subcommands: [
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      args: {
        name: "SUBCOMMAND",
        template: "help",
        isOptional: true,
      },
    },
    {
      name: "build",
      description: "Generates a model or place file from the Rojo project",
      options: [
        {
          name: ["--output", "-o"],
          description:
            "Where to output the result. Should end in .rbxm, .rbxl, .rbxmx, or .rbxlx",
          exclusiveOn: ["--plugin", "-p"],
          args: {
            name: "OUTPUT",
            generators: robloxFiles,
            suggestCurrentToken: true,
          },
        },
        {
          name: ["--plugin", "-p"],
          description:
            "Output the result in the local plugins folder instead. Should end in .rbxm or .rbxmx",
          exclusiveOn: ["--output", "-o"],
          args: {
            name: "PLUGIN",
          },
        },
        {
          name: "--watch",
          description:
            "Whether to automatically rebuild when any input files change",
        },
      ],
      args: project(
        "Path to the project to build. Defaults to the current directory"
      ),
    },
    {
      name: "doc",
      description: "Open Rojo's documentation in your browser",
    },
    {
      name: "fmt-project",
      description:
        "Reformat a Rojo project using the standard JSON formatting rules",
      args: project(
        "Path to the project to format. Defaults to the current directory"
      ),
    },
    {
      name: "init",
      description: "Initializes a new Rojo project",
      options: [
        {
          name: "--kind",
          description:
            "The kind of project to create, 'place', 'plugin', or 'model'. Defaults to place",
          args: {
            name: "KIND",
            suggestions: ["place", "plugin", "model"],
            default: "place",
          },
        },
        {
          name: "--skip-git",
          description: "Skips the initialization of a git repository",
        },
      ],
      args: {
        name: "PATH",
        description:
          "Path to the place to create the project. Defaults to the current directory",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: "plugin",
      description: "Install Rojo's plugin",
      subcommands: [
        {
          name: "install",
          description:
            "Install the plugin in Roblox Studio's plugins folder, overwriting any installed copy",
        },
        {
          name: "uninstall",
          description: "Removes the plugin if it is installed",
        },
      ],
    },
    {
      name: "serve",
      description: "Expose a Rojo project to the Rojo Studio plugin",
      options: [
        {
          name: "--address",
          description: "The IP address to listen on. Defaults to `127.0.0.1`",
          args: {
            name: "ADDRESS",
          },
        },
        {
          name: "--port",
          description:
            "The port to listen on. Defaults to the project's preference, or `34872` if it has none",
          args: {
            name: "PORT",
          },
        },
        {
          name: "--allowed-hosts",
          description:
            "Extra Host/Origin values the server will accept. Repeat or comma-separate to allow several",
          isRepeatable: true,
          args: {
            name: "ALLOWED_HOSTS",
          },
        },
      ],
      args: project(
        "Path to the project to serve. Defaults to the current directory"
      ),
    },
    {
      name: "sourcemap",
      description: "Generates a sourcemap file from the Rojo project",
      options: [
        {
          name: "--include-non-scripts",
          description:
            "If non-script files should be included or not. Defaults to false",
        },
        {
          name: ["--output", "-o"],
          description:
            "Where to output the sourcemap. Omit this to use stdout instead of writing to a file. Should end in .json",
          args: {
            name: "OUTPUT",
            generators: filepaths({ extensions: ["json"] }),
            suggestCurrentToken: true,
          },
        },
        {
          name: "--watch",
          description:
            "Whether to automatically recreate a snapshot when any input files change",
        },
        {
          name: "--absolute",
          description:
            "Whether the sourcemap should use absolute paths instead of relative paths",
        },
      ],
      args: project(
        "Path to the project to use for the sourcemap. Defaults to the current directory"
      ),
    },
    {
      name: "syncback",
      description:
        "Performs 'syncback' for the provided project, using the input file given",
      options: [
        {
          name: ["--input", "-i"],
          description: "Path to the Roblox file to pull Instances from",
          isRequired: true,
          args: {
            name: "INPUT",
            generators: robloxFiles,
          },
        },
        {
          name: ["--list", "-l"],
          description:
            "Emit a list of all files and directories that will be added or removed into stdout",
        },
        {
          name: "--dry-run",
          description: "Don't write anything to the file system",
        },
        {
          name: ["--non-interactive", "-y"],
          description: "Skip the prompt for writing to the file system",
        },
      ],
      args: project("Path to the project to sync back to"),
    },
    {
      name: "upload",
      description: "Builds the project and uploads it to Roblox",
      options: [
        {
          name: "--api_key",
          description:
            "API key obtained from create.roblox.com/credentials. Rojo will use the Open Cloud API when this is provided. Only supports uploading to a place",
          args: {
            name: "API_KEY",
          },
        },
        {
          name: "--asset_id",
          description: "Asset ID to upload to",
          isRequired: true,
          args: {
            name: "ASSET_ID",
          },
        },
        {
          name: "--cookie",
          description:
            "Authenication cookie to use. If not specified, Rojo will attempt to find one from the system automatically",
          args: {
            name: "COOKIE",
          },
        },
        {
          name: "--universe_id",
          description:
            "The Universe ID of the given place. Required when using the Open Cloud API",
          args: {
            name: "UNIVERSE_ID",
          },
        },
      ],
      args: project(
        "Path to the project to upload. Defaults to the current directory"
      ),
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Print help information",
      isPersistent: true,
    },
    {
      name: "--color",
      description:
        "Set color behavior. Valid values are auto, always, and never [default: auto]",
      isPersistent: true,
      args: {
        name: "COLOR",
        suggestions: ["auto", "always", "never"],
        default: "auto",
      },
    },
    {
      name: ["--verbose", "-v"],
      description: "Sets verbosity level. Can be specified multiple times",
      isRepeatable: 4,
      isPersistent: true,
    },
    {
      name: ["--version", "-V"],
      description: "Print version information",
    },
  ],
};
export default completionSpec;
