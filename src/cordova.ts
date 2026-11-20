// Cordova CLI v13.0.0 (npm latest, released 2025-11-23, 2026-11-20). Source: npm tarballs cordova@13.0.0, cordova-lib@13.0.0 and cordova-create@6.0.0 read statically (src/cli.js nopt option table, doc/*.txt, doc/readme.md, cordova-lib command modules); the binary was not executed.
// Removed upstream since the previous spec: telemetry command and --no-telemetry (13.0.0), --no-update-notifier (12.0.0), serve command (cordova-lib 13.0.0), windows platform.
const commonOptions: Fig.Option[] = [
  {
    name: ["-d", "--verbose"],
    description:
      "Pipe out more verbose output to your shell. You can also subscribe to log and warn events if you are consuming cordova-cli as a node module by calling cordova.on('log', function() {}) or cordova.on('warn', function() {})",
    isPersistent: true,
  },
  {
    name: ["-v", "--version"],
    description: "Print out the version of your cordova-cli install",
    isPersistent: true,
  },
  {
    name: ["-h", "--help"],
    description: "Show the help for a command",
    isPersistent: true,
  },
  {
    name: "--silent",
    description: "Suppress all output except errors",
    isPersistent: true,
  },
  {
    name: "--nohooks",
    description:
      "Suppress executing hooks (taking RegExp hook patterns as parameters)",
    args: {
      name: "pattern",
      description: "RegExp hook pattern",
      isOptional: true,
    },
    isRepeatable: true,
    isPersistent: true,
  },
];

const platformGenerator: Fig.Generator = {
  script: ["cat", "package.json"],
  postProcess: function (out: string) {
    const suggestions = [];
    try {
      if (out.trim() == "") {
        return suggestions;
      }

      const packageJSON = JSON.parse(out);
      const platforms = packageJSON["cordova"]["platforms"];

      if (platforms) {
        for (const platform of platforms) {
          suggestions.push({
            name: platform,
            description: "Platform",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
    return suggestions;
  },
};

// `cordova plugin list` prints one `<id> <version> "<name>"` line per plugin
const pluginGenerator: Fig.Generator = {
  script: ["cordova", "plugin", "list"],
  postProcess: (out: string) =>
    out.split("\n").flatMap((line) => {
      const match = line.match(/^(\S+) \S+ "(.*)"$/);
      return match
        ? [
            {
              name: match[1],
              description: match[2],
              icon: "fig://icon?type=string",
            },
          ]
        : [];
    }),
};

const platformArg = (description: string): Fig.Arg => ({
  name: "platform",
  description,
  isVariadic: true,
  isOptional: true,
  generators: platformGenerator,
});

const debugOption: Fig.Option = {
  name: "--debug",
  description:
    "Perform a debug build. This typically translates to debug mode for the underlying platform being built",
};

const releaseOption: Fig.Option = {
  name: "--release",
  description:
    "Perform a release build. This typically translates to release mode for the underlying platform being built",
};

const deviceOption: Fig.Option = {
  name: "--device",
  description: "Build it for a device",
};

const emulatorOption: Fig.Option = {
  name: "--emulator",
  description:
    "Build it for an emulator. In particular, the platform architecture might be different for a device vs. emulator",
};

const buildConfigOption: Fig.Option = {
  name: "--buildConfig",
  description:
    "Use the specified build configuration file instead of the default build.json. The build.json file is used to specify parameters to customize the app build process especially related to signing the package",
  args: {
    name: "configFile",
    template: "filepaths",
  },
};

const targetOption: Fig.Option = {
  name: "--target",
  description:
    "Deploy to a specific target emulator/device. Use --list to display target options",
  args: {
    name: "target",
  },
};

const listOption: Fig.Option = {
  name: "--list",
  description:
    "Lists available targets. Displays both device and emulator deployment targets unless specified",
};

const noPrepareOption: Fig.Option = {
  name: "--noprepare",
  description: "Skip preparing",
};

const noBuildOption: Fig.Option = {
  name: "--nobuild",
  description: "Skip building",
};

const completionSpec: Fig.Spec = {
  name: "cordova",
  description: "Manage your Cordova application",
  subcommands: [
    {
      name: "create",
      description: "Create a project",
      args: [
        {
          name: "path",
          template: "folders",
          description:
            "Directory which should not already exist. Cordova will create this directory",
        },
        {
          name: "id",
          description:
            "Reverse domain-style identifier that maps to id attribute of widget element in config.xml. This can be changed but there may be code generated using this value, such as Java package names. It is recommended that you select an appropriate value",
          isOptional: true,
          default: "org.apache.cordova.hellocordova",
        },
        {
          name: "name",
          description:
            "Application's display title that maps name element in config.xml file. This can be changed but there may be code generated using this value, such as Java class names. The default value is Hello Cordova, but it is recommended that you select an appropriate value",
          isOptional: true,
          default: "Hello Cordova",
        },
      ],
      options: [
        {
          name: ["-t", "--template"],
          description:
            "Use a custom template located locally, in NPM, or GitHub",
          args: {
            name: "template",
            description: "Local path, npm package or git URL",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "help",
      description: "Get help for a command",
      args: {
        name: "command",
        suggestions: [
          "create",
          "help",
          "config",
          "info",
          "requirements",
          "platform",
          "plugin",
          "prepare",
          "compile",
          "build",
          "clean",
          "run",
          "emulate",
        ],
        isOptional: true,
      },
    },
    {
      name: "config",
      description: "Set, get, delete, edit, and list global cordova options",
      subcommands: [
        {
          name: ["ls", "list"],
          description: "Lists contents of config file",
        },
        {
          name: "edit",
          description: "Opens the config file in an editor",
        },
        {
          name: "set",
          description:
            'Sets the config key to the value. If value is omitted, then it sets it to "true"',
          args: [
            {
              name: "key",
              suggestions: [
                {
                  name: "save-exact",
                  description:
                    "Save exact plugin versions instead of semver ranges",
                },
                {
                  name: "searchpath",
                  description: "Default plugin search path",
                },
              ],
            },
            {
              name: "value",
              isOptional: true,
            },
          ],
        },
        {
          name: "get",
          description: "Echo the config value to stdout",
          args: {
            name: "key",
            suggestions: ["save-exact", "searchpath"],
          },
        },
        {
          name: "delete",
          description: "Deletes the key from all configuration files",
          args: {
            name: "key",
            suggestions: ["save-exact", "searchpath"],
          },
        },
      ],
    },
    {
      name: "info",
      description: "Generate project information",
    },
    {
      name: "requirements",
      description:
        "Checks and print out all the installation requirements for platforms specified",
      args: {
        name: "platform",
        description:
          "Platform name(s) to check. If not specified, all platforms added to the project are checked",
        isVariadic: true,
        isOptional: true,
        generators: platformGenerator,
      },
    },
    {
      name: ["platform", "platforms"],
      description: "Manage project platforms",
      subcommands: [
        {
          name: "add",
          description:
            "Add specified platforms and save them into config.xml and package.json",
          args: {
            name: "platform",
            description:
              "Platform spec: platform[@version], a path to a directory or tarball, or a git url[#commit-ish]",
            isVariadic: true,
            template: ["filepaths", "folders"],
            suggestions: ["android", "ios", "browser", "electron"],
          },
          options: [
            {
              name: "--nosave",
              description:
                "Do not save the platforms into config.xml and package.json after installing them",
            },
            {
              name: "--link",
              description:
                "When platform-spec is a local path, link the platform library directly instead of making a copy of it. Support varies by platform",
            },
          ],
        },
        {
          name: ["remove", "rm"],
          description: "Remove specified platforms",
          args: {
            name: "platform",
            isVariadic: true,
            generators: platformGenerator,
          },
          options: [
            {
              name: "--nosave",
              description:
                "Do not delete the specified platforms from config.xml and package.json after removing them",
            },
          ],
        },
        {
          name: ["update", "up"],
          description: "Update specified platforms",
          args: {
            name: "platform",
            description:
              "Platform spec: platform[@version], a path to a directory or tarball, or a git url[#commit-ish]",
            isVariadic: true,
            isOptional: true,
            generators: platformGenerator,
          },
          options: [
            {
              name: "--save",
              description:
                "Update the version specified in config.xml and package.json (default)",
              exclusiveOn: ["--nosave"],
            },
            {
              name: "--nosave",
              description:
                "Do not update the version specified in config.xml and package.json",
              exclusiveOn: ["--save"],
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List all installed and available platforms",
        },
      ],
    },
    {
      name: ["plugin", "plugins"],
      description: "Manage project plugins",
      subcommands: [
        {
          name: "add",
          description: "Add specified plugins",
          args: {
            name: "plugin",
            description:
              "Plugin spec: [@scope/]pluginID[@version], a directory, or a git url[#commit-ish][:subdir]",
            isVariadic: true,
            template: "folders",
          },
          options: [
            {
              name: "--searchpath",
              description:
                "When looking up plugins by ID, look in this directory and each of its subdirectories before hitting the registry. Multiple search paths can be specified. Use ':' as a separator in *nix based systems and ';' for Windows",
              args: {
                name: "directory",
                template: "folders",
              },
            },
            {
              name: "--noregistry",
              description: "Don't search the registry for plugins",
            },
            {
              name: "--link",
              description:
                "When installing from a local path, creates a symbolic link instead of copying files. The extent to which files are linked varies by platform. Useful for plugin development",
            },
            {
              name: "--nosave",
              description:
                "Do NOT save the <plugin-spec> as part of the plugin element into config.xml or package.json",
            },
            {
              name: "--save-exact",
              description:
                "Install the plugin with its exact version instead of a semver range (npm --save-exact). Can also be enabled with `cordova config set save-exact true`",
            },
            {
              name: "--force",
              description:
                "Forces copying source files from the plugin even if the same file already exists in the target directory",
            },
            {
              name: "--variable",
              description: "Set a plugin variable, e.g. API_KEY=value",
              args: {
                name: "NAME=VALUE",
              },
              isRepeatable: true,
            },
          ],
        },
        {
          name: ["remove", "rm"],
          description: "Remove plugins with the given IDs/name",
          options: [
            {
              name: "--nosave",
              description:
                "Do NOT remove the specified plugin from config.xml or package.json",
            },
          ],
          args: {
            name: "plugin",
            isVariadic: true,
            generators: pluginGenerator,
          },
        },
        {
          name: ["list", "ls"],
          description: "List currently installed plugins",
        },
      ],
    },
    {
      name: "prepare",
      description: "Copy files into platform(s) for building",
      args: platformArg(
        "Platform name(s) to prepare. If not specified, all platforms are prepared"
      ),
    },
    {
      name: "compile",
      description: "Compile project for platform(s)",
      options: [
        debugOption,
        releaseOption,
        deviceOption,
        emulatorOption,
        targetOption,
        buildConfigOption,
      ],
      args: platformArg(
        "Platform name(s) to compile. If not specified, all platforms are compiled"
      ),
    },
    {
      name: "build",
      description: "Build project for platform(s) (prepare + compile)",
      options: [
        debugOption,
        releaseOption,
        deviceOption,
        emulatorOption,
        buildConfigOption,
      ],
      args: platformArg(
        "Platform name(s) to build. If not specified, all platforms are built"
      ),
    },
    {
      name: "clean",
      description: "Cleanup project from build artifacts",
      args: platformArg(
        "Platform name(s) to clean. If not specified, all platforms are cleaned"
      ),
    },
    {
      name: "run",
      description: "Run project (including prepare && compile)",
      args: platformArg(
        "Platform name(s) to run. If not specified, all platforms are run"
      ),
      options: [
        listOption,
        {
          ...debugOption,
          description:
            "Deploy a debug build. This is the default behavior unless --release is specified",
        },
        { ...releaseOption, description: "Deploy a release build" },
        noPrepareOption,
        noBuildOption,
        { ...deviceOption, description: "Deploy to a device" },
        { ...emulatorOption, description: "Deploy to an emulator" },
        targetOption,
        buildConfigOption,
      ],
    },
    {
      name: "emulate",
      description:
        "Alias for run --emulator. Launches the emulator instead of a device",
      args: platformArg(
        "Platform name(s) to run. If not specified, all platforms are run"
      ),
      options: [
        listOption,
        {
          ...debugOption,
          description:
            "Deploy a debug build. This is the default behavior unless --release is specified",
        },
        { ...releaseOption, description: "Deploy a release build" },
        noPrepareOption,
        noBuildOption,
        targetOption,
        buildConfigOption,
      ],
    },
  ],
  options: commonOptions,
};
export default completionSpec;
