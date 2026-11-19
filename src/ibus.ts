// IBus v1.5.35 (GitHub release, 2026-09-22). Source: tools/main.vala, tools/ibus.1.in,
// tools/ibusimmodule.c and ui/gtk3/emojierapp.vala on ibus/ibus main
const verboseOption: Fig.Option = {
  name: "--verbose",
  description: "Show debug messages",
};

const typeOption = (description: string, types: string[]): Fig.Option => ({
  name: "--type",
  description,
  args: { name: "TYPE", suggestions: types },
});

const daemonOptions: Fig.Option[] = [
  typeOption("Start or restart daemon with TYPE", [
    "direct",
    "systemd",
    "kde-wayland",
    "wayland",
  ]),
  {
    name: "--service-file",
    description: "Start or restart daemon with SYSTEMD_SERVICE file",
    args: { name: "SYSTEMD_SERVICE", template: "filepaths" },
  },
  verboseOption,
];

const cacheOptions = (verb: string): Fig.Option[] => [
  {
    name: "--system",
    description: `${verb} the system registry cache`,
  },
  {
    name: "--file",
    description: `${verb} the registry cache FILE`,
    args: { name: "FILE", template: "filepaths" },
  },
];

const engineIdOption: Fig.Option = {
  name: "--engine-id",
  description:
    "Use engine schema paths instead of ibus core, which can be comma-separated values",
  args: { name: "ENGINE_ID" },
};

const completionSpec: Fig.Spec = {
  name: "ibus",
  description: "Intelligent Input Bus command line utility",
  subcommands: [
    {
      name: "engine",
      description: "Set or get engine",
      args: {
        name: "ENGINE_NAME",
        isOptional: true,
        generators: {
          script: ["ibus", "list-engine"],
          postProcess: (out) =>
            out
              .split("\n")
              .filter((line) => line.startsWith(" "))
              .map((line) => {
                const [id, name] = line.trim().split(" - ", 2);
                return {
                  name: id,
                  description: name,
                };
              }),
        },
      },
    },
    {
      name: "exit",
      description: "Exit ibus-daemon",
      options: [
        typeOption("Exit daemon with TYPE", ["direct", "kde-wayland"]),
        verboseOption,
      ],
    },
    {
      name: "list-engine",
      description: "Show available engines",
      options: [{ name: "--name-only", description: "List engine name only" }],
    },
    {
      name: "watch",
      description: "Not implemented",
      hidden: true,
    },
    {
      name: "restart",
      description: "Restart ibus-daemon",
      options: daemonOptions,
    },
    {
      name: "start",
      description: "Start ibus-daemon",
      options: daemonOptions,
    },
    {
      name: "version",
      description: "Show version",
    },
    {
      name: "read-cache",
      description: "Show the content of registry cache",
      options: cacheOptions("Read"),
    },
    {
      name: "write-cache",
      description: "Create registry cache",
      options: cacheOptions("Write"),
    },
    {
      name: "address",
      description: "Print the D-Bus address of ibus-daemon",
    },
    {
      name: "read-config",
      description: "Show the configuration values",
      options: [engineIdOption],
    },
    {
      name: "reset-config",
      description: "Reset the configuration values",
      options: [engineIdOption],
    },
    {
      name: "emoji",
      description: "Save emoji on dialog to clipboard",
      options: [
        {
          name: "--font",
          description: "FONT for emoji characters on emoji dialog",
          args: { name: "FONT" },
        },
        {
          name: "--lang",
          description: 'LANG for annotations on emoji dialog. E.g. "en"',
          args: { name: "LANG" },
        },
        {
          name: "--partial-match",
          description: "Emoji annotations can be match partially",
        },
        {
          name: "--partial-match-length",
          description: "Match with the length of the specified integer",
          args: { name: "LENGTH" },
        },
        {
          name: "--partial-match-condition",
          description: "Match with the condition of the specified integer",
          args: {
            name: "CONDITION",
            suggestions: [
              { name: "0", description: "Prefix match" },
              { name: "1", description: "Suffix match" },
              { name: "2", description: "Containment match" },
            ],
          },
        },
      ],
    },
    {
      name: "im-module",
      description: "Retrieve im-module value from GTK instance",
      options: [
        typeOption('Set im-module TYPE. Default is "gtk3"', [
          "gtk2",
          "gtk3",
          "gtk4",
        ]),
      ],
    },
    {
      name: "display",
      description: "Check if display is open",
      hidden: true,
      options: [
        typeOption("Specify DISPLAY type", ["wayland", "x11"]),
        verboseOption,
      ],
    },
    {
      name: "help",
      description: "Show this information",
    },
  ],
};
export default completionSpec;
