// simctl from Xcode 27, CoreSimulator-1171.7 (keith/zsh-xcode-completions
// specs/simctl.txt @ bef240f2, 2026-10-02). Source: that repo's dump of
// `xcrun simctl help <subcommand>`; Xcode is not installed here.

const jsonOptions: Fig.Option[] = [
  {
    name: ["-j", "--json"],
    description: "Print as JSON",
  },
  {
    name: "--json-fd",
    description: "Specify the file descriptor to write JSON output to",
    requiresSeparator: "=",
    args: { name: "fd" },
  },
  {
    name: "--json-output",
    description: "Specify the file path to write JSON output to",
    requiresSeparator: "=",
    args: { name: "file path", template: "filepaths" },
  },
];

const checkedAllocationsOption: Fig.Option = {
  name: "--checked-allocations",
  description: "Enable checked allocations (if supported)",
};

const archOption: Fig.Option = {
  name: ["-a", "--arch"],
  description:
    "Specify an architecture to use when spawning a universal binary",
  args: { name: "arch", suggestions: ["arm64", "x86_64"] },
};

const displayOption: Fig.Option = {
  name: "--display",
  description:
    "Screen ID, name, device name, screen or port UUID, or 'internal'/'external'. See 'simctl io <device> enumerate'",
  requiresSeparator: "=",
  args: { name: "display" },
};

const completionSpec: Fig.Spec = {
  name: "simctl",
  description: "Command line utility to control the Simulator",
  options: [
    {
      name: "--set",
      description: "Use the device set at the given path",
      args: { name: "path", template: "folders" },
    },
    {
      name: "--profiles",
      description: "Use the simulator profiles at the given path",
      args: { name: "path", template: "folders" },
    },
  ],
  subcommands: [
    {
      name: "addmedia",
      description:
        "Add photos, live photos, videos, or contacts to the library of a device",
      args: [
        {
          name: "device",
        },
        {
          name: "path",
          isVariadic: true,
        },
      ],
    },
    {
      name: "appinfo",
      description: "Show information about an installed application",
      args: [{ name: "device" }, { name: "bundle identifier" }],
    },
    {
      name: "boot",
      description: "Boot a device or device pair",
      args: {
        name: "device",
      },
      options: [
        {
          name: "--arch",
          description:
            "Specify the architecture to use when booting the simulator (eg: 'arm64' or 'x86_64')",
          requiresSeparator: "=",
          isRepeatable: true,
        },
        {
          name: "--disabledJob",
          description:
            "Disables the given launchd job. Multiple jobs can be disabled by passing multiple flags",
          requiresSeparator: "=",
          isRepeatable: true,
        },
        {
          name: "--enabledJob",
          description:
            "Enables the given launchd job when it would normally be disabled. Multiple jobs can be enabled by passing multiple flags",
          requiresSeparator: "=",
          isRepeatable: true,
        },
        checkedAllocationsOption,
      ],
    },
    {
      name: "bootstatus",
      description: "Check device boot status",
      hidden: true,
      args: { name: "device" },
      options: [
        {
          name: "-b",
          description: "Boot the device if it isn't already booted",
        },
        {
          name: "-d",
          description: "Print data migration information, if it's available",
        },
        {
          name: "-c",
          description:
            "Continuously monitor boot status through multiple boot/shutdown cycles",
        },
      ],
    },
    {
      name: "clone",
      description: "Clone an existing device",
      args: [
        {
          name: "device",
        },
        {
          name: "new name",
        },
        {
          name: "destination device set",
          isVariadic: true,
        },
      ],
    },
    {
      name: "create",
      description: "Create a new device",
      args: [
        {
          name: "name",
        },
        {
          name: "device type id",
          description:
            "A valid available device type. Find these by running 'xcrun simctl list devicetypes'. Examples: ('iPhone X', 'com.apple.CoreSimulator.SimDeviceType.iPhone-X')",
        },
        {
          name: "runtime id",
          isVariadic: true,
          description:
            "A valid and available runtime. Find these by running 'xcrun simctl list runtimes'. If no runtime is specified the newest runtime compatible with the device type is chosen. Examples: ('watchOS3', 'watchOS3.2', 'watchOS 3.2', 'com.apple.CoreSimulator.SimRuntime.watchOS-3-2', '/Volumes/path/to/Runtimes/watchOS 3.2.simruntime')",
        },
      ],
    },
    {
      name: "delete",
      description:
        "Delete specified devices, unavailable devices, or all devices",
      args: [
        {
          name: "device",
          isVariadic: true,
        },
        {
          name: "unavailable",
          description:
            "Specifying unavailable will delete devices that are not supported by the current Xcode SDK",
        },
        {
          name: "all",
        },
      ],
    },
    {
      name: "diagnose",
      description: "Collect diagnostic information and logs",
      options: [
        {
          name: "-b",
          description:
            "Do NOT show the resulting archive in a Finder window upon completion",
        },
        {
          name: "-X",
          description:
            "Run all diagnostics with no timeout. It ignores the --timeout value if it is specified",
          exclusiveOn: ["--timeout"],
        },
        {
          name: "--timeout",
          description:
            "Specify a duration (in seconds) to wait for the log collection before timeout",
          requiresSeparator: "=",
        },
        {
          name: "--output",
          description:
            "Specify the output directory. If not provided the temporary directory is used",
          requiresSeparator: "=",
        },
        {
          name: "--no-archive",
          description:
            "Do not create an archive, leave the collected files uncompressed",
        },
        {
          name: "--all-logs",
          description: "Include all device logs, even for non-booted devices",
        },
        {
          name: "--data-containers",
          description:
            "Include booted device(s) data directory. Warning: May include private information, app data containers, and increases the size of the archive! Default is NOT to collect the data container",
        },
        {
          name: "--udid",
          description:
            "Collect diagnostics only from the specified device. This option may be specified more than once to consider multiple devices. The --all-logs option causes all --udid options to be ignored",
          requiresSeparator: "=",
          isRepeatable: true,
        },
      ],
    },
    {
      name: "erase",
      description: "Erase a device's contents and settings",
      args: [
        {
          name: "device",
          isVariadic: true,
        },
        {
          name: "all",
          description: "Specifying all will erase all existing devices",
        },
      ],
    },
    {
      name: "get_app_container",
      description: "Print the path of the installed app's container",
      args: [
        {
          name: "device",
        },
        {
          name: "app bundle identifier",
        },
        {
          name: "container",
          description:
            "Optionally specify the container. Defaults to app.\napp                 The .app bundle\ndata                The application's data container\ngroups              The App Group containers\n<group identifier>  A specific App Group container",
          isOptional: true,
          default: "app",
          suggestions: [
            {
              name: "app",
              description: "The .app bundle",
            },
            {
              name: "data",
              description: "The application's data container",
            },
            {
              name: "groups",
              description: "The App Group containers",
            },
            {
              name: "<group identifier>",
              description: "A specific App Group container",
            },
          ],
        },
      ],
    },
    {
      name: "getenv",
      description: "Print an environment variable from a running device",
      args: [
        {
          name: "device",
        },
        {
          name: "variable name",
        },
      ],
    },
    {
      name: "help",
      description: "Prints the usage for a given subcommand",
      loadSpec: "simctl",
    },
    {
      name: "icloud_sync",
      description: "Trigger iCloud sync on a device",
      args: {
        name: "device",
      },
    },
    {
      name: "install",
      description: "Install an app on a device",
      args: [
        {
          name: "device",
        },
        {
          name: "path",
        },
      ],
    },
    {
      name: "install_app_data",
      description:
        "Install an xcappdata package to a device, replacing the current contents of the container",
      args: [
        {
          name: "device",
        },
        {
          name: "path to xcappdata package",
        },
      ],
    },
    {
      name: "io",
      description: "Set up a device IO operation",
      args: {
        name: "device",
      },
      subcommands: [
        {
          name: "enumerate",
          description: "Lists all available IO ports and descriptor states",
          options: [
            {
              name: "--poll",
              description: "Poll after enumeration",
            },
          ],
        },
        {
          name: "poll",
          description: "Polls all available IO ports for events",
        },
        {
          name: "recordVideo",
          description:
            "Records the display to a QuickTime movie at the specified file or url",
          args: {
            name: "file or url",
          },
          options: [
            {
              name: "--codec",
              description:
                "Specifies the codec type: 'h264' or 'hevc'. Default is 'hevc'",
              requiresSeparator: "=",
            },
            displayOption,
            {
              name: "--mask",
              description:
                "For non-rectangular displays, handle the mask by policy: ignored: The mask is ignored and the unmasked framebuffer is saved. alpha: Not supported, but retained for compatibility; the mask is rendered black. black: The mask is rendered black",
              requiresSeparator: "=",
            },
            {
              name: "--force",
              description:
                "Force the output file to be written to, even if the file already exists",
            },
          ],
        },
        {
          name: "screenshot",
          description:
            "Saves a screenshot as a PNG to the specified file or url(use '-' for stdout)",
          args: {
            name: "file or url",
          },
          options: [
            {
              name: "--type",
              description:
                "Can be 'png', 'tiff', 'bmp', 'gif', 'jpeg'. Default is png",
              requiresSeparator: "=",
            },
            displayOption,
            {
              name: "--mask",
              description:
                "For non-rectangular displays, handle the mask by policy: ignored: The mask is ignored and the unmasked framebuffer is saved. alpha: The mask is used as premultiplied alpha. black: The mask is rendered black",
              requiresSeparator: "=",
            },
          ],
        },
        {
          name: "screenConfig",
          description: "Manage device screen configuration",
          options: [displayOption],
          subcommands: [
            {
              name: "power",
              description: "Set the power state of a screen",
              args: { name: "state", suggestions: ["on", "off"] },
            },
            {
              name: "geometry",
              description:
                "Change the geometry of a screen; must be compatible with the screen's current mode",
              args: { name: "<width>x<height>[@<scale>]" },
            },
          ],
        },
      ],
    },
    {
      name: "keychain",
      description: "Manipulate a device's keychain",
      subcommands: [
        {
          name: "add-root-cert",
          description: "Add a certificate to the trusted root store",
          args: {
            name: "path",
          },
        },
        {
          name: "add-cert",
          description: "Add a certificate to the keychain",
          args: {
            name: "path",
          },
        },
        {
          name: "reset",
          description: "Reset the keychain",
        },
      ],
    },
    {
      name: "launch",
      description: "Launch an application by identifier on a device",
      args: [
        {
          name: "device",
        },
        {
          name: "app bundle identifier",
        },
        {
          name: "argv",
          isVariadic: true,
        },
      ],
      options: [
        {
          name: ["-w", "--wait-for-debugger"],
          description: "Start the process suspended",
        },
        {
          ...archOption,
          description:
            "Specify an architecture to use when spawning a universal binary. Requires runtime version 26 or newer",
        },
        {
          name: "--console",
          description:
            "Block and print the application's stdout and stderr to the current terminal. Signals received by simctl are passed through to the application. (Cannot be combined with --stdout or --stderr)",
          exclusiveOn: ["--console-pty", "--stdout", "--stderr"],
        },
        {
          name: "--console-pty",
          description:
            "Block and print the application's stdout and stderr to the current terminal via a PTY. Signals received by simctl are passed through to the application. (Cannot be combined with --stdout or --stderr)",
          exclusiveOn: ["--console", "--stdout", "--stderr"],
        },
        {
          name: "--stdout",
          description: "Redirect the application's standard output to a file",
          requiresSeparator: "=",
          args: {
            name: "path",
          },
          exclusiveOn: ["--console", "--console-pty"],
        },
        {
          name: "--stderr",
          description: "Redirect the application's standard error to a file",
          requiresSeparator: "=",
          args: {
            name: "path",
          },
          exclusiveOn: ["--console", "--console-pty"],
        },
        {
          name: "--terminate-running-process",
          description: "Terminate any running copy of the application",
        },
        checkedAllocationsOption,
      ],
    },
    {
      name: "list",
      description:
        "List available devices, device types, runtimes, or device pairs",
      args: [
        {
          name: "type",
          suggestions: ["devices", "devicetypes", "runtimes", "pairs"],
          isOptional: true,
        },
        {
          name: "search term",
          suggestions: ["available"],
          isOptional: true,
        },
      ],
      options: [
        ...jsonOptions,
        {
          name: ["-e", "--no-escape-slashes"],
          description: "Encode slashes without escapes in JSON output",
        },
        {
          name: "-v",
          description: "More verbose output",
        },
      ],
    },
    {
      name: "listapps",
      description: "Show the installed applications",
      args: { name: "device" },
    },
    {
      name: "location",
      description: "Control a device's simulated location",
      args: [
        {
          name: "device",
        },
        {
          name: "empty",
        },
      ],
      subcommands: [
        {
          name: "list",
          description: "List available simulation scenarios",
        },
        {
          name: "clear",
          description:
            "Stop any running scenario and clear any simulated location",
        },
        {
          name: "set",
          description: "Set the location to a specific latitude and longitude",
          args: {
            name: "lat,lon",
          },
        },
        {
          name: "run",
          description:
            "Run a simulated location scenario (use the list action to get a list of scenarios)",
          args: {
            name: "scenario",
          },
        },
        {
          name: "start",
          description:
            "Move through two or more 'lat,lon' waypoints over time ('-' reads them from stdin, one per line). Example: start --distance=1000 --speed=260 37.629538,-122.395733 40.628083,-73.768254",
          args: {
            name: "lat,lon",
            isVariadic: true,
            suggestions: ["-"],
          },
          options: [
            {
              name: "--speed",
              description:
                "Meters per second to move between waypoints. Default is 20",
              requiresSeparator: "=",
              args: { name: "meters/sec" },
            },
            {
              name: "--distance",
              description: "Issue a location update every <meters> travelled",
              requiresSeparator: "=",
              args: { name: "meters" },
              exclusiveOn: ["--interval"],
            },
            {
              name: "--interval",
              description:
                "Issue a location update every <seconds>. Default is 1.0",
              requiresSeparator: "=",
              args: { name: "seconds" },
              exclusiveOn: ["--distance"],
            },
          ],
        },
      ],
    },
    {
      name: "logverbose",
      description:
        "Enable or disable verbose logging for a device.\nNOTE: You may need to reboot the affected device before logging changes will be effective",
      args: [
        {
          name: "device",
          description:
            "The device. If not provided all booted devices are affected",
        },
        {
          name: "enable/disable",
          description: "Enable or Disable verbose logging",
          suggestions: ["enable", "disable"],
        },
      ],
    },
    {
      name: "openurl",
      description: "Open a URL in a device",
      args: [
        {
          name: "device",
        },
        {
          name: "URL",
        },
      ],
    },
    {
      name: "pair",
      description: "Create a new watch and phone pair",
      args: [
        {
          name: "watch device",
        },
        {
          name: "phone device",
        },
      ],
    },
    {
      name: "pair_activate",
      description: "Set a given pair as active",
      args: {
        name: "pair",
      },
    },
    {
      name: "pbcopy",
      description: "Copy standard input onto the device pasteboard",
      args: {
        name: "device",
      },
      options: [
        {
          name: "-v",
        },
      ],
    },
    {
      name: "pbpaste",
      description:
        "Print the contents of the device's pasteboard to standard output",
      args: {
        name: "device",
      },
      options: [
        {
          name: "-v",
        },
      ],
    },
    {
      name: "pbinfo",
      description: "Print information about the device's pasteboard",
      hidden: true,
      args: { name: "device or 'host'", suggestions: ["host"] },
    },
    {
      name: "pbsync",
      description: "Sync the pasteboard content from one pasteboard to another",
      args: [
        {
          name: "source device or 'host'",
        },
        {
          name: "destination device or 'host'",
        },
      ],
      options: [
        {
          name: "-p",
          description:
            "Causes simctl to use promise data for secondary types.  simctl will continue to run to provide that promise data until something else replaces it on the pasteboard",
        },
        {
          name: "-v",
        },
      ],
    },
    {
      name: "personalization",
      description:
        "Provides utility when working with personalization manifests",
      subcommands: [
        {
          name: "personalize",
          description:
            "Personalize the runtime, generating a new personalization manifest",
          args: { name: "identifier" },
        },
        {
          name: "remove-manifest",
          description:
            "Remove a manifest file from /Library/Developer/CoreSimulator/Cryptex/Personalization",
          args: { name: "filename" },
        },
        {
          name: "remove-all-manifests",
          description:
            "Remove all manifests from /Library/Developer/CoreSimulator/Cryptex/Personalization",
        },
        {
          name: "remove-personalization",
          description: "Remove the runtime's personalization and remount it",
          args: { name: "id" },
        },
        {
          name: "revoke-manifests",
          description:
            "Revoke manifests, requiring all runtime cryptex mounts to be re-personalized",
        },
        {
          name: "scan-and-personalize",
          description:
            "Update personalization manifests of runtimes that need it and remount them as a cryptex",
        },
      ],
    },
    {
      name: "privacy",
      description: "Grant, revoke, or reset privacy and permissions",
      args: [
        {
          name: "device",
        },
        {
          name: "action",
          description: "",
          suggestions: ["grant", "revoke", "reset"],
        },
        {
          name: "service",
          description: "",
          suggestions: [
            "all",
            "calendar",
            "contacts-limited",
            "contacts",
            "location",
            "location-always",
            "photos-add",
            "photos",
            "media-library",
            "microphone",
            "motion",
            "reminders",
            "siri",
          ],
        },
        {
          name: "bundle identifier",
          description: "The bundle identifier of the target application",
        },
      ],
    },
    {
      name: "push",
      description: "Send a simulated push notification",
      args: [
        {
          name: "device",
        },
        {
          name: "bundle identifier",
          description:
            "The bundle identifier of the target application If the payload file contains a 'Simulator Target Bundle' top-level key this parameter may be omitted. If both are provided this argument will override the value from the payload",
        },
        {
          name: "json file",
          description:
            "Path to a JSON payload or '-' to read from stdin. The payload must:\n- Contain an object at the top level.\n- Contain an 'aps' key with valid Apple Push Notification values.\n- Be 4096 bytes or less",
          suggestions: ["-"],
        },
      ],
    },
    {
      name: "reboot",
      description: "Reboot a device",
      args: { name: "device" },
    },
    {
      name: "register",
      description: "Register a service from one bootstrap into another",
      hidden: true,
      args: [
        { name: "<source device or 'host'>/<service>" },
        { name: "<destination device>/<service>" },
      ],
    },
    {
      name: "rename",
      description: "Rename a device",
      args: [
        {
          name: "device",
        },
        {
          name: "name",
        },
      ],
    },
    {
      name: "runtime",
      description: "Perform operations on runtimes",
      subcommands: [
        {
          name: "add",
          description:
            "Add a runtime disk image to the secure storage area. The image will be staged, verified, and mounted. When possible the image file will be cloned so no additional disk space will be used. If stdout is a terminal and a copy is required then progress will be reported",
          args: {
            name: "path",
          },
          options: [
            {
              name: ["-m", "--move"],
              description:
                "Remove the original file if the image is added successfully. If the image cannot be staged or the add fails the original is not removed",
            },
            {
              name: ["-a", "--async"],
              description:
                "Print the UUID of the new image then exit, do not wait on the results of the add operation",
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a simulator runtime from the secure storage area. If runtime is a disk image any booted simulators are shutdown and the disk is unmounted first. Use the alias 'all' to delete all images",
          args: {
            name: "identifier",
            isOptional: true,
            suggestions: ["all"],
          },
          options: [
            {
              name: ["-d", "--notUsedSinceDays"],
              description: "Delete images not used within the past <days> days",
              args: { name: "days" },
            },
            {
              name: ["-u", "--unusable"],
              description: "Delete images that are marked as unusable",
            },
            {
              name: ["-o", "--outdated"],
              description:
                "Delete runtimes that have a newer version available with the same runtime identifier",
            },
            {
              name: ["-n", "--dry-run"],
              description:
                "Print what images would be deleted without actually deleting anything",
            },
            {
              name: ["-k", "--keep-asset"],
              description:
                "Keep the associated mobile asset when deleting the runtime",
            },
          ],
        },
        {
          name: "unmount",
          description:
            "Unmount a runtime disk image without deleting it; booted simulators using it are shut down",
          args: { name: "identifier" },
        },
        {
          name: "verify",
          description: "Re-verify the signature of a given runtime",
          args: {
            name: "identifier",
          },
        },
        {
          name: "list",
          description: "List runtime disk images",
          options: [
            {
              name: "-v",
              description: "Print more verbose output",
            },
            ...jsonOptions,
          ],
        },
        {
          name: "scan-and-mount",
          description:
            "Scan the runtime storage location for orphaned runtimes that need to be added",
        },
        {
          name: "match",
          description: "Show or override the SDK to runtime build mapping",
          subcommands: [
            {
              name: "list",
              description:
                "List the SDK build to runtime build mapping rules for the selected Xcode. Manual overrides using 'match set' have the highest priority",
              options: [
                {
                  name: "-v",
                  description:
                    "Verbose mode. Includes the full preferred build map, user override map, and known SDK names",
                },
                ...jsonOptions,
              ],
            },
            {
              name: "set",
              description:
                "Override which build of a runtime Xcode prefers for building and running with a given SDK",
              args: [
                {
                  name: "sdk canonical name",
                },
                {
                  name: "runtime build",
                  isOptional: true,
                },
              ],
              options: [
                {
                  name: "--default",
                  description:
                    "Clear the override for the given SDK and revert to default behavior",
                },
                {
                  name: "--sdkBuild",
                  description:
                    "Explicitly specify the SDK build, eg for an Xcode other than the selected Xcode",
                  args: { name: "sdk build" },
                },
              ],
            },
          ],
        },
        {
          name: "dyld_shared_cache",
          description: "Manage the dyld shared cache of runtimes",
          subcommands: [
            {
              name: "update",
              description:
                "Update the dyld shared cache for the runtime; no-op if it exists unless --force",
              args: { name: "runtime", isOptional: true },
              options: [
                {
                  name: "--all",
                  description:
                    "Update the shared cache for all available runtimes",
                },
                {
                  name: "--force",
                  description:
                    "Force re-creation if the shared cache already exists",
                },
              ],
            },
            {
              name: "remove",
              description: "Remove the dyld shared cache for the runtime",
              args: { name: "runtime", isOptional: true },
              options: [
                {
                  name: "--all",
                  description: "Remove the shared caches for all runtimes",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "shutdown",
      description: "Shutdown a device",
      args: [
        {
          name: "device",
        },
        {
          name: "all",
          suggestions: ["all"],
        },
      ],
    },
    {
      name: "spawn",
      description:
        "Spawn a process by executing a given executable on a device",
      args: [
        {
          name: "device",
        },
        {
          name: "path to executable",
        },
        {
          name: "argv",
          isVariadic: true,
        },
      ],
      options: [
        {
          name: ["-w", "--wait-for-debugger"],
          description: "Start the process suspended",
        },
        {
          name: ["-s", "--standalone"],
          description:
            "Use a NULL mach bootstrap port; the process cannot connect to other services",
          deprecated: true,
        },
        archOption,
        checkedAllocationsOption,
      ],
    },
    {
      name: "status_bar",
      description: "Set or clear status bar overrides",
      args: {
        name: "device",
      },
      subcommands: [
        {
          name: "list",
          description: "List existing overrides",
        },
        {
          name: "clear",
          description: "Clear all existing status bar overrides",
        },
        {
          name: "override",
          description:
            "Set status bar override values, according to these flags. You may specify any combination of these flags (at least one is required)",
          options: [
            {
              name: "--time",
              description:
                "Set the date or time to a fixed value. If the string is a valid ISO date string it will also set the date on relevant devices",
            },
            {
              name: "--dataNetwork",
              description:
                "If specified must be one of 'hide', 'wifi', '3g', '4g', 'lte', 'lte-a', 'lte+', '5g', '5g+', '5g-uwb', or '5g-uc'",
            },
            {
              name: "--wifiMode",
              description:
                "If specified must be one of 'searching', 'failed', or 'active'",
            },
            {
              name: "--wifiBars",
              description: "If specified must be 0-3",
            },
            {
              name: "--cellularMode",
              description:
                "If specified must be one of 'notSupported', 'searching', 'failed', or 'active'",
            },
            {
              name: "--cellularBars",
              description: "If specified must be 0-4",
            },
            {
              name: "--operatorName",
              description:
                "Set the cellular operator/carrier name. Use '' for the empty string",
            },
            {
              name: "--batteryState",
              description:
                "If specified must be one of 'charging', 'charged', or 'discharging'",
            },
            {
              name: "--batteryLevel",
              description: "If specified must be 0-100",
            },
          ],
        },
      ],
    },
    {
      name: "terminate",
      description: "Terminate an application by identifier on a device",
      args: [
        {
          name: "device",
        },
        {
          name: "app bundle identifier",
        },
      ],
    },
    {
      name: "ui",
      description: "Get or Set UI options",
      args: {
        name: "device",
      },
      subcommands: [
        {
          name: "appearance",
          description:
            "When invoked without arguments prints the current user interface appearance style:\nlight\nThe Light appearance style.\ndark\nThe Dark appearance style.\nunsupported\nThe platform or runtime version do not support appearance styles.\nunknown\nThe current style is unknown or there was an error detecting it",
          additionalSuggestions: ["light", "dark"],
        },
        {
          name: "increase_contrast",
          description:
            "When invoked without arguments prints whether the Increase Contrast mode is currently enabled:\nenabled\nIncrease Contrast is enabled.\ndisabled\nIncrease Contrast is disabled.\nunsupported\nThe platform or runtime version do not support the Increase Contrast setting.\nunknown\nThe current setting is unknown or there was an error detecting it",
          additionalSuggestions: ["enabled", "disabled"],
        },
        {
          name: "content_size",
          description:
            "When invoked without arguments prints the current preferred content size category, from the following possible values:",
          additionalSuggestions: [
            "extra-small",
            "small",
            "medium",
            "large",
            "extra-large",
            "extra-extra-large",
            "extra-extra-extra-large",
            "accessibility-medium",
            "accessibility-large",
            "accessibility-extra-large",
            "accessibility-extra-extra-large",
            "accessibility-extra-extra-extra-large",
            "unknown",
            "unsupported",
          ],
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall an app from a device",
      args: [
        {
          name: "device",
        },
        {
          name: "app bundle identifier",
        },
      ],
    },
    {
      name: "unpair",
      description: "Unpair a watch and phone pair",
      args: {
        name: "pair UUID",
      },
    },
    {
      name: "unregister",
      description: "Unregister a service from a device's bootstrap",
      hidden: true,
      args: [{ name: "device" }, { name: "service" }],
    },
    {
      name: "upgrade",
      description: "Upgrade a device to a newer runtime",
      args: [
        {
          name: "device",
        },
        {
          name: "runtime id",
        },
      ],
    },
  ],
};
export default completionSpec;
