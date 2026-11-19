// pmset (macOS 15.5 / Darwin 24.5, /usr/bin/pmset, 2026-11-19). Source: `man pmset`,
// cross-checked against the argument strings in the /usr/bin/pmset binary
const settings: Fig.Suggestion[] = [
  {
    name: "displaysleep",
    description: "Display sleep timer (value in minutes, or 0 to disable)",
  },
  {
    name: "dim",
    description: "Display sleep timer; replaced by 'displaysleep' in 10.4",
    deprecated: { description: "Use 'displaysleep'" },
  },
  {
    name: "disksleep",
    description: "Disk spindown timer (value in minutes, or 0 to disable)",
  },
  {
    name: "spindown",
    description: "Disk spindown timer; replaced by 'disksleep' in 10.4",
    deprecated: { description: "Use 'disksleep'" },
  },
  {
    name: "sleep",
    description: "System sleep timer (value in minutes, or 0 to disable)",
  },
  {
    name: "womp",
    description: "Wake on ethernet magic packet (value = 0/1)",
  },
  {
    name: "ring",
    description: "Wake on modem ring (value = 0/1)",
  },
  {
    name: "powernap",
    description: "Enable/disable Power Nap on supported machines (value = 0/1)",
  },
  {
    name: "proximitywake",
    description:
      "Wake from sleep based on proximity of devices using the same iCloud id (value = 0/1)",
  },
  {
    name: "autorestart",
    description: "Automatic restart on power loss (value = 0/1)",
  },
  {
    name: "lidwake",
    description:
      "Wake the machine when the laptop lid (or clamshell) is opened (value = 0/1)",
  },
  {
    name: "acwake",
    description:
      "Wake the machine when power source (AC/battery) is changed (value = 0/1)",
  },
  {
    name: "lessbright",
    description:
      "Slightly turn down display brightness when switching to this power source (value = 0/1)",
  },
  {
    name: "halfdim",
    description:
      "Display sleep will use an intermediate half-brightness state between full brightness and fully off  (value = 0/1)",
  },
  {
    name: "sms",
    description:
      "Use Sudden Motion Sensor to park disk heads on sudden changes in G force (value = 0/1)",
  },
  {
    name: "hibernatemode",
    description:
      "Change hibernation mode. 0 = plain sleep, 3 = safe sleep (portable default), 25 = hibernate",
  },
  {
    name: "hibernatefile",
    description:
      "Change hibernation image file location; must be on the root volume (value = path)",
  },
  {
    name: "standby",
    description:
      "Automatically hibernate after sleeping for the standby delay (value = 0/1)",
  },
  {
    name: "standbydelayhigh",
    description:
      "Seconds before entering standby when battery is above highstandbythreshold",
  },
  {
    name: "standbydelaylow",
    description:
      "Seconds before entering standby when battery is below highstandbythreshold",
  },
  {
    name: "highstandbythreshold",
    description:
      "Battery percentage that selects standbydelayhigh or standbydelaylow (default 50)",
  },
  {
    name: "autopoweroff",
    description:
      "Write a hibernation image and enter low power chipset sleep after autopoweroffdelay (value = 0/1)",
  },
  {
    name: "autopoweroffdelay",
    description: "Seconds before entering autopoweroff mode",
  },
  {
    name: "ttyskeepawake",
    description:
      "Prevent idle system sleep when any tty (e.g. remote login session) is 'active'. (value = 0/1)",
  },
  {
    name: "networkoversleep",
    description:
      "This setting affects how macOS networking presents shared network services during system sleep",
  },
  {
    name: "destroyfvkeyonstandby",
    description:
      "Destroy File Vault Key when going to standby mode. (value: 1 - Destroy, 0 - Retain)",
  },
];

const upsSettings: Fig.Suggestion[] = [
  {
    name: "haltlevel",
    description:
      "UPS battery level at which to trigger an emergency shutdown (value in %, -1 to disable)",
  },
  {
    name: "haltafter",
    description:
      "Trigger emergency shutdown after this long on UPS power (value in minutes, -1 to disable)",
  },
  {
    name: "haltremain",
    description:
      "Trigger emergency shutdown when this much UPS runtime remains (value in minutes, -1 to disable)",
  },
];

const events: string[] = [
  "sleep",
  "wake",
  "poweron",
  "shutdown",
  "wakeorpoweron",
];

const completionSpec: Fig.Spec = {
  name: "pmset",
  description: "Power management settings",
  subcommands: [
    {
      name: "-g",
      description: "GETTING",
      args: [
        {
          isOptional: true,
          default: "live",
          suggestions: [
            {
              name: "live",
              description:
                "Display the settings currently in use. (default if no argument given)",
            },
            {
              name: "custom",
              description: "Display custom settings for all power sources",
            },
            {
              name: "cap",
              description:
                "Display which power management features the machine supports",
            },
            {
              name: "sched",
              description:
                "Display scheduled startup/wake and shutdown/sleep events",
            },
            {
              name: "ups",
              description: "Display UPS emergency thresholds",
            },
            {
              name: ["ps", "batt"],
              description: "Display status of batteries and UPSs",
            },
            {
              name: "pslog",
              description:
                "Display an ongoing log of power source (battery and UPS)state",
            },
            {
              name: "rawlog",
              description:
                "Display an ongoing log of battery state as read directly from battery",
            },
            {
              name: "therm",
              description:
                "Show thermal conditions that affect CPU speed. Not available on all platforms",
            },
            {
              name: "thermlog",
              description:
                "Show a log of thermal notifications that affect CPU speed. Not available on all platforms",
            },
            {
              name: "assertions",
              description: "Display a summary of power assertions. 10.6+",
            },
            {
              name: "assertionslog",
              description:
                "Show a log of assertion creations and releases. 10.6+",
            },
            {
              name: "sysload",
              description: 'Display the "system load advisory" 10.6+',
            },
            {
              name: "sysloadlog",
              description:
                "Display an ongoing log of lives changes to the system load advisory. 10.6+",
            },
            {
              name: ["ac", "adapter"],
              description: "Display details about an attached AC power adapter",
            },
            {
              name: "log",
              description:
                "Display a history of sleeps, wakes, and other power management events",
            },
            {
              name: "uuid",
              description: "Display the currently active sleep/wake UUID",
            },
            {
              name: "uuidlog",
              description:
                "Display the currently active sleep/wake UUID, and prints a new UUID as they're set by the system",
            },
            {
              name: "history",
              description:
                "A debugging tool. Prints a timeline of system sleep/wake UUIDs",
            },
            {
              name: "historydetailed",
              description:
                "Prints driver-level timings for a sleep/wake. Pass a UUID as an argument",
            },
            {
              name: "powerstate",
              description:
                "Prints the current power states for I/O Kit drivers. Optionally pass class names",
            },
            {
              name: "powerstatelog",
              description:
                "Periodically prints power state residency times for drivers ([-i interval] [class names])",
            },
            {
              name: "stats",
              description: "Prints the number of sleeps and wakes since boot",
            },
            {
              name: "systemstate",
              description:
                "Prints the current power state of the system and available capabilities",
            },
            {
              name: "everything",
              description:
                "Print output from every argument under the GETTING header 10.8+",
            },
          ],
        },
        {
          name: "UUID | class names",
          description:
            "UUID for historydetailed; I/O Kit class names for powerstate and powerstatelog",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "schedule",
      description: "For setting up one-time power events",
      options: [
        { name: "cancel", description: "Cancel a scheduled event" },
        { name: "cancelall", description: "Cancel all scheduled events" },
      ],
      args: [
        { name: "type", suggestions: events },
        {
          name: "date/time",
          description:
            '"MM/dd/yy HH:mm:ss" (in 24 hour format; must be in quotes)',
        },
        {
          name: "owner",
          description: "Who or what is scheduling this one-time power event",
          isOptional: true,
        },
      ],
    },
    {
      name: "repeat",
      description: "For setting up daily/weekly power on and power off events",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel all repeating power events",
        },
      ],
      args: [
        { name: "type", suggestions: events },
        {
          name: "weekdays",
          description:
            'A subset of MTWRFSU ("M" and "MTWRF" are valid strings)',
        },
        {
          name: "time",
          description: "HH:mm:ss (24 hour format)",
        },
      ],
    },
    {
      name: "relative",
      description:
        "Schedule a wake or power on in seconds from the end of sleep/shutdown; cannot be cancelled",
      args: [
        { name: "type", suggestions: ["wake", "poweron"] },
        { name: "seconds" },
      ],
    },
  ],
  args: {
    description: "Action to perform",
    isOptional: true,
    suggestions: [
      { name: "sleepnow", description: "Cause an immediate system sleep" },
      {
        name: "displaysleepnow",
        description: "Cause the display to go to sleep immediately",
      },
      { name: "touch", description: "Re-read existing settings from disk" },
      {
        name: "boot",
        description: "Tell the kernel that system boot is complete",
      },
      {
        name: "restoredefaults",
        description: "Restore power management settings to their defaults",
      },
      {
        name: "resetdisplayambientparams",
        description:
          "Reset the ambient light parameters for certain Apple displays",
      },
      {
        name: "noidle",
        description: "Prevent idle sleep while running",
        deprecated: { description: "Use caffeinate(8)" },
      },
    ],
  },
  options: [
    {
      name: "-a",
      description: "Settings for all",
      args: [{ name: "setting", suggestions: settings }, { name: "value" }],
    },
    {
      name: "-b",
      description: "Settings for battery",
      args: [{ name: "setting", suggestions: settings }, { name: "value" }],
    },
    {
      name: "-c",
      description: "Settings for charger",
      args: [{ name: "setting", suggestions: settings }, { name: "value" }],
    },
    {
      name: "-u",
      description: "Settings for UPS",
      args: [
        { name: "setting", suggestions: [...settings, ...upsSettings] },
        { name: "value" },
      ],
    },
  ],
};
export default completionSpec;
