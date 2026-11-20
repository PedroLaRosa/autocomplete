// m-cli v2.0.9 (GitHub tag rgcr/m-cli v2.0.9 = Homebrew m-cli stable, 2026-11-19). Source: shallow clone at tag v2.0.9 read statically
// (macOS-only bash/python plugin scripts, not run here): the `--help` heredoc and option dispatch of every plugins/* script, Readme.md,
// CHANGELOG.md and completions/{zsh,bash,fish}. v2 replaced the v1 `m <plugin> <subcommand>` syntax with `m <plugin> --option [args]`,
// so the plugin trees below were rewritten. Unreleased main (02e3f8f, 2026-06-02) only changes trash --clean/--status internals.
// Upstream quirks mirrored as documented: `hosts` and `service --load/--unload` are listed in --help but the v2.0.9 dispatcher
// only accepts bare `ls|add|remove` for hosts and does not handle --load/--unload. The timezone list is carried over from the previous
// spec (macOS `systemsetup -listtimezones`, not re-verified on a Mac).

const generateDisks: Fig.Generator = {
  script: ["ls", "/dev"],
  postProcess: (out) =>
    out
      .trim()
      .split("\n")
      .filter((disk) => disk.match(/\/dev\/disk\w/))
      .map((disk) => ({
        name: disk,
        icon: "💽",
        priority: 100,
      })),
};

const generateVolumes: Fig.Generator = {
  script: ["ls", "/Volumes"],
  postProcess: (out) =>
    out
      .trim()
      .split("\n")
      .filter((volume) => volume !== "Macintosh HD")
      .map((volume) => ({
        name: `/Volumes/${volume}`,
        type: "file",
        priority: 100,
      })),
};

const generateUsers: Fig.Generator = {
  script: ["bash", "-c", "m user --list | awk '{ print $1 }'"],
  postProcess: (out) =>
    out
      .trim()
      .split("\n")
      .map((user) => ({
        name: user,
        icon: "👤",
        hidden: user.startsWith("_"),
      })),
};

const generateGroups: Fig.Generator = {
  script: ["bash", "-c", "m group --list | awk '{ print $1 }'"],
  postProcess: (out) =>
    out
      .trim()
      .split("\n")
      .map((group) => ({
        name: group,
        icon: "👥",
        hidden: group.startsWith("_"),
      })),
};

const generateNetworkLocations: Fig.Generator = {
  script: ["bash", "-c", "m network --location list | tail -n +2"],
  splitOn: "\n",
};

const generateServices: Fig.Generator = {
  script: ["bash", "-c", "launchctl list | awk 'NR > 1 { print $3 }'"],
  splitOn: "\n",
};

function getPidIcon(path: string): string {
  const idx = path.indexOf(".app/");
  if (idx === -1) {
    return "fig://icon?type=gear";
  }
  return "fig://" + path.slice(0, idx + 4);
}

// Only the argument right after the literal `pid` of `m nosleep --until pid PID` is a process id
const generatePids: Fig.Generator = {
  custom: async (tokens, executeShellCommand) => {
    if (tokens[tokens.length - 2] !== "pid") {
      return [];
    }
    const { stdout } = await executeShellCommand({
      command: "bash",
      args: ["-c", "ps axo pid,comm | sed 1d"],
    });
    return stdout
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => {
        const [pid, path] = line.trim().split(/\s+/);
        const name = path.slice(path.lastIndexOf("/") + 1);
        return {
          name: pid,
          description: path,
          displayName: `${pid} (${name})`,
          icon: getPidIcon(path),
        };
      });
  },
};

const generateWifiNetworks: Fig.Generator = {
  script: [
    "bash",
    "-c",
    "networksetup -listallhardwareports | awk '/Wi-Fi/{getline; print $2}' | xargs networksetup -listpreferredwirelessnetworks | tail -n +2",
  ],
  postProcess: (out) =>
    out
      .trim()
      .split("\n")
      .map((network) => ({
        name: network.trim(),
        icon: "📶",
      })),
};

const timezones: string[] = [
  "Africa/Abidjan",
  "Africa/Accra",
  "Africa/Addis_Ababa",
  "Africa/Algiers",
  "Africa/Asmara",
  "Africa/Bamako",
  "Africa/Bangui",
  "Africa/Banjul",
  "Africa/Bissau",
  "Africa/Blantyre",
  "Africa/Brazzaville",
  "Africa/Bujumbura",
  "Africa/Cairo",
  "Africa/Casablanca",
  "Africa/Ceuta",
  "Africa/Conakry",
  "Africa/Dakar",
  "Africa/Dar_es_Salaam",
  "Africa/Djibouti",
  "Africa/Douala",
  "Africa/El_Aaiun",
  "Africa/Freetown",
  "Africa/Gaborone",
  "Africa/Harare",
  "Africa/Johannesburg",
  "Africa/Juba",
  "Africa/Kampala",
  "Africa/Khartoum",
  "Africa/Kigali",
  "Africa/Kinshasa",
  "Africa/Lagos",
  "Africa/Libreville",
  "Africa/Lome",
  "Africa/Luanda",
  "Africa/Lubumbashi",
  "Africa/Lusaka",
  "Africa/Malabo",
  "Africa/Maputo",
  "Africa/Maseru",
  "Africa/Mbabane",
  "Africa/Mogadishu",
  "Africa/Monrovia",
  "Africa/Nairobi",
  "Africa/Ndjamena",
  "Africa/Niamey",
  "Africa/Nouakchott",
  "Africa/Ouagadougou",
  "Africa/Porto-Novo",
  "Africa/Sao_Tome",
  "Africa/Tripoli",
  "Africa/Tunis",
  "Africa/Windhoek",
  "America/Adak",
  "America/Anchorage",
  "America/Anguilla",
  "America/Antigua",
  "America/Araguaina",
  "America/Argentina/Buenos_Aires",
  "America/Argentina/Catamarca",
  "America/Argentina/Cordoba",
  "America/Argentina/Jujuy",
  "America/Argentina/La_Rioja",
  "America/Argentina/Mendoza",
  "America/Argentina/Rio_Gallegos",
  "America/Argentina/Salta",
  "America/Argentina/San_Juan",
  "America/Argentina/San_Luis",
  "America/Argentina/Tucuman",
  "America/Argentina/Ushuaia",
  "America/Aruba",
  "America/Asuncion",
  "America/Atikokan",
  "America/Bahia",
  "America/Bahia_Banderas",
  "America/Barbados",
  "America/Belem",
  "America/Belize",
  "America/Blanc-Sablon",
  "America/Boa_Vista",
  "America/Bogota",
  "America/Boise",
  "America/Cambridge_Bay",
  "America/Campo_Grande",
  "America/Cancun",
  "America/Caracas",
  "America/Cayenne",
  "America/Cayman",
  "America/Chicago",
  "America/Chihuahua",
  "America/Costa_Rica",
  "America/Creston",
  "America/Cuiaba",
  "America/Curacao",
  "America/Danmarkshavn",
  "America/Dawson",
  "America/Dawson_Creek",
  "America/Denver",
  "America/Detroit",
  "America/Dominica",
  "America/Edmonton",
  "America/Eirunepe",
  "America/El_Salvador",
  "America/Fort_Nelson",
  "America/Fortaleza",
  "America/Glace_Bay",
  "America/Godthab",
  "America/Goose_Bay",
  "America/Grand_Turk",
  "America/Grenada",
  "America/Guadeloupe",
  "America/Guatemala",
  "America/Guayaquil",
  "America/Guyana",
  "America/Halifax",
  "America/Havana",
  "America/Hermosillo",
  "America/Indiana/Indianapolis",
  "America/Indiana/Knox",
  "America/Indiana/Marengo",
  "America/Indiana/Petersburg",
  "America/Indiana/Tell_City",
  "America/Indiana/Vevay",
  "America/Indiana/Vincennes",
  "America/Indiana/Winamac",
  "America/Inuvik",
  "America/Iqaluit",
  "America/Jamaica",
  "America/Juneau",
  "America/Kentucky/Louisville",
  "America/Kentucky/Monticello",
  "America/Kralendijk",
  "America/La_Paz",
  "America/Lima",
  "America/Los_Angeles",
  "America/Lower_Princes",
  "America/Maceio",
  "America/Managua",
  "America/Manaus",
  "America/Marigot",
  "America/Martinique",
  "America/Matamoros",
  "America/Mazatlan",
  "America/Menominee",
  "America/Merida",
  "America/Metlakatla",
  "America/Mexico_City",
  "America/Miquelon",
  "America/Moncton",
  "America/Monterrey",
  "America/Montevideo",
  "America/Montreal",
  "America/Montserrat",
  "America/Nassau",
  "America/New_York",
  "America/Nipigon",
  "America/Nome",
  "America/Noronha",
  "America/North_Dakota/Beulah",
  "America/North_Dakota/Center",
  "America/North_Dakota/New_Salem",
  "America/Nuuk",
  "America/Ojinaga",
  "America/Panama",
  "America/Pangnirtung",
  "America/Paramaribo",
  "America/Phoenix",
  "America/Port-au-Prince",
  "America/Port_of_Spain",
  "America/Porto_Velho",
  "America/Puerto_Rico",
  "America/Punta_Arenas",
  "America/Rainy_River",
  "America/Rankin_Inlet",
  "America/Recife",
  "America/Regina",
  "America/Resolute",
  "America/Rio_Branco",
  "America/Santa_Isabel",
  "America/Santarem",
  "America/Santiago",
  "America/Santo_Domingo",
  "America/Sao_Paulo",
  "America/Scoresbysund",
  "America/Shiprock",
  "America/Sitka",
  "America/St_Barthelemy",
  "America/St_Johns",
  "America/St_Kitts",
  "America/St_Lucia",
  "America/St_Thomas",
  "America/St_Vincent",
  "America/Swift_Current",
  "America/Tegucigalpa",
  "America/Thule",
  "America/Thunder_Bay",
  "America/Tijuana",
  "America/Toronto",
  "America/Tortola",
  "America/Vancouver",
  "America/Whitehorse",
  "America/Winnipeg",
  "America/Yakutat",
  "America/Yellowknife",
  "Antarctica/Casey",
  "Antarctica/Davis",
  "Antarctica/DumontDUrville",
  "Antarctica/Macquarie",
  "Antarctica/Mawson",
  "Antarctica/McMurdo",
  "Antarctica/Palmer",
  "Antarctica/Rothera",
  "Antarctica/South_Pole",
  "Antarctica/Syowa",
  "Antarctica/Troll",
  "Antarctica/Vostok",
  "Arctic/Longyearbyen",
  "Asia/Aden",
  "Asia/Almaty",
  "Asia/Amman",
  "Asia/Anadyr",
  "Asia/Aqtau",
  "Asia/Aqtobe",
  "Asia/Ashgabat",
  "Asia/Atyrau",
  "Asia/Baghdad",
  "Asia/Bahrain",
  "Asia/Baku",
  "Asia/Bangkok",
  "Asia/Barnaul",
  "Asia/Beirut",
  "Asia/Bishkek",
  "Asia/Brunei",
  "Asia/Calcutta",
  "Asia/Chita",
  "Asia/Choibalsan",
  "Asia/Chongqing",
  "Asia/Colombo",
  "Asia/Damascus",
  "Asia/Dhaka",
  "Asia/Dili",
  "Asia/Dubai",
  "Asia/Dushanbe",
  "Asia/Famagusta",
  "Asia/Gaza",
  "Asia/Harbin",
  "Asia/Hebron",
  "Asia/Ho_Chi_Minh",
  "Asia/Hong_Kong",
  "Asia/Hovd",
  "Asia/Irkutsk",
  "Asia/Jakarta",
  "Asia/Jayapura",
  "Asia/Jerusalem",
  "Asia/Kabul",
  "Asia/Kamchatka",
  "Asia/Karachi",
  "Asia/Kashgar",
  "Asia/Kathmandu",
  "Asia/Katmandu",
  "Asia/Khandyga",
  "Asia/Krasnoyarsk",
  "Asia/Kuala_Lumpur",
  "Asia/Kuching",
  "Asia/Kuwait",
  "Asia/Macau",
  "Asia/Magadan",
  "Asia/Makassar",
  "Asia/Manila",
  "Asia/Muscat",
  "Asia/Nicosia",
  "Asia/Novokuznetsk",
  "Asia/Novosibirsk",
  "Asia/Omsk",
  "Asia/Oral",
  "Asia/Phnom_Penh",
  "Asia/Pontianak",
  "Asia/Pyongyang",
  "Asia/Qatar",
  "Asia/Qostanay",
  "Asia/Qyzylorda",
  "Asia/Rangoon",
  "Asia/Riyadh",
  "Asia/Sakhalin",
  "Asia/Samarkand",
  "Asia/Seoul",
  "Asia/Shanghai",
  "Asia/Singapore",
  "Asia/Srednekolymsk",
  "Asia/Taipei",
  "Asia/Tashkent",
  "Asia/Tbilisi",
  "Asia/Tehran",
  "Asia/Thimphu",
  "Asia/Tokyo",
  "Asia/Tomsk",
  "Asia/Ulaanbaatar",
  "Asia/Urumqi",
  "Asia/Ust-Nera",
  "Asia/Vientiane",
  "Asia/Vladivostok",
  "Asia/Yakutsk",
  "Asia/Yangon",
  "Asia/Yekaterinburg",
  "Asia/Yerevan",
  "Atlantic/Azores",
  "Atlantic/Bermuda",
  "Atlantic/Canary",
  "Atlantic/Cape_Verde",
  "Atlantic/Faroe",
  "Atlantic/Madeira",
  "Atlantic/Reykjavik",
  "Atlantic/South_Georgia",
  "Atlantic/St_Helena",
  "Atlantic/Stanley",
  "Australia/Adelaide",
  "Australia/Brisbane",
  "Australia/Broken_Hill",
  "Australia/Currie",
  "Australia/Darwin",
  "Australia/Eucla",
  "Australia/Hobart",
  "Australia/Lindeman",
  "Australia/Lord_Howe",
  "Australia/Melbourne",
  "Australia/Perth",
  "Australia/Sydney",
  "Europe/Amsterdam",
  "Europe/Andorra",
  "Europe/Astrakhan",
  "Europe/Athens",
  "Europe/Belgrade",
  "Europe/Berlin",
  "Europe/Bratislava",
  "Europe/Brussels",
  "Europe/Bucharest",
  "Europe/Budapest",
  "Europe/Busingen",
  "Europe/Chisinau",
  "Europe/Copenhagen",
  "Europe/Dublin",
  "Europe/Gibraltar",
  "Europe/Guernsey",
  "Europe/Helsinki",
  "Europe/Isle_of_Man",
  "Europe/Istanbul",
  "Europe/Jersey",
  "Europe/Kaliningrad",
  "Europe/Kiev",
  "Europe/Kirov",
  "Europe/Kyiv",
  "Europe/Lisbon",
  "Europe/Ljubljana",
  "Europe/London",
  "Europe/Luxembourg",
  "Europe/Madrid",
  "Europe/Malta",
  "Europe/Mariehamn",
  "Europe/Minsk",
  "Europe/Monaco",
  "Europe/Moscow",
  "Europe/Oslo",
  "Europe/Paris",
  "Europe/Podgorica",
  "Europe/Prague",
  "Europe/Riga",
  "Europe/Rome",
  "Europe/Samara",
  "Europe/San_Marino",
  "Europe/Sarajevo",
  "Europe/Saratov",
  "Europe/Simferopol",
  "Europe/Skopje",
  "Europe/Sofia",
  "Europe/Stockholm",
  "Europe/Tallinn",
  "Europe/Tirane",
  "Europe/Ulyanovsk",
  "Europe/Uzhgorod",
  "Europe/Vaduz",
  "Europe/Vatican",
  "Europe/Vienna",
  "Europe/Vilnius",
  "Europe/Volgograd",
  "Europe/Warsaw",
  "Europe/Zagreb",
  "Europe/Zaporozhye",
  "Europe/Zurich",
  "GMT",
  "Indian/Antananarivo",
  "Indian/Chagos",
  "Indian/Christmas",
  "Indian/Cocos",
  "Indian/Comoro",
  "Indian/Kerguelen",
  "Indian/Mahe",
  "Indian/Maldives",
  "Indian/Mauritius",
  "Indian/Mayotte",
  "Indian/Reunion",
  "Pacific/Apia",
  "Pacific/Auckland",
  "Pacific/Bougainville",
  "Pacific/Chatham",
  "Pacific/Chuuk",
  "Pacific/Easter",
  "Pacific/Efate",
  "Pacific/Enderbury",
  "Pacific/Fakaofo",
  "Pacific/Fiji",
  "Pacific/Funafuti",
  "Pacific/Galapagos",
  "Pacific/Gambier",
  "Pacific/Guadalcanal",
  "Pacific/Guam",
  "Pacific/Honolulu",
  "Pacific/Johnston",
  "Pacific/Kanton",
  "Pacific/Kiritimati",
  "Pacific/Kosrae",
  "Pacific/Kwajalein",
  "Pacific/Majuro",
  "Pacific/Marquesas",
  "Pacific/Midway",
  "Pacific/Nauru",
  "Pacific/Niue",
  "Pacific/Norfolk",
  "Pacific/Noumea",
  "Pacific/Pago_Pago",
  "Pacific/Palau",
  "Pacific/Pitcairn",
  "Pacific/Pohnpei",
  "Pacific/Ponape",
  "Pacific/Port_Moresby",
  "Pacific/Rarotonga",
  "Pacific/Saipan",
  "Pacific/Tahiti",
  "Pacific/Tarawa",
  "Pacific/Tongatapu",
  "Pacific/Truk",
  "Pacific/Wake",
  "Pacific/Wallis",
];

const highlightColors: string[] = [
  "graphite",
  "cayenne",
  "asparagus",
  "clover",
  "teal",
  "midnight",
  "plum",
  "tin",
  "nickel",
  "mocha",
  "fern",
  "moss",
  "ocean",
  "eggplant",
  "maroon",
  "steel",
  "aluminum",
  "maraschino",
  "lemon",
  "spring",
  "turquoise",
  "blueberry",
  "magenta",
  "iron",
  "magnesium",
  "tangerine",
  "lime",
  "seafoam",
  "aqua",
  "grape",
  "strawberry",
  "tungsten",
  "silver",
  "salmon",
  "banana",
  "flora",
  "ice",
  "orchid",
  "bubblegum",
  "lead",
  "mercery",
  "cantaloupe",
  "honeydew",
  "spindrift",
  "sky",
  "lavender",
  "carnation",
  "licorice",
  "snow",
];

const privacyServices: Fig.Suggestion[] = [
  { name: "camera", description: "Camera access" },
  { name: "microphone", description: "Microphone access" },
  { name: "location", description: "Location services" },
  { name: "contacts", description: "Address book access" },
  { name: "calendar", description: "Calendar access" },
  { name: "reminders", description: "Reminders access" },
  { name: "photos", description: "Photos library access" },
  { name: "accessibility", description: "Accessibility access" },
  { name: "screen-recording", description: "Screen recording access" },
  { name: "system-events", description: "System Events (automation)" },
  { name: "full-disk-access", description: "Full Disk Access" },
  { name: "developer-tools", description: "Developer Tools access" },
];

const helpOption: Fig.Option = {
  name: "--help",
  description: "Show this help message",
};

const statusOption = (description: string): Fig.Option => ({
  name: "--status",
  description,
});

const enableOption = (description: string): Fig.Option => ({
  name: "--enable",
  description,
});

const disableOption = (description: string): Fig.Option => ({
  name: "--disable",
  description,
});

// Option taking an enable/disable value (plus `status` where the plugin supports it)
const toggleOption = (
  name: string,
  description: string,
  { status = false, isOptional = false } = {}
): Fig.Option => ({
  name,
  description,
  args: {
    name: "state",
    suggestions: status
      ? ["status", "enable", "disable"]
      : ["enable", "disable"],
    ...(isOptional && { isOptional: true }),
  },
});

const completionSpec: Fig.Spec = {
  name: "m",
  description: "Swiss Army Knife for macOS",
  subcommands: [
    {
      name: "airdrop",
      description: "Manage AirDrop settings",
      options: [
        helpOption,
        statusOption("Show AirDrop status"),
        enableOption("Enable AirDrop"),
        disableOption("Disable AirDrop"),
      ],
    },
    {
      name: "appearance",
      description: "Manage appearance settings",
      options: [
        helpOption,
        {
          name: "--antialiasthreshold",
          description:
            "Set the antialiasing threshold (1 disables antialiasing, no value shows the current one)",
          args: {
            name: "value",
            description: "Threshold, e.g. 0, 2 or 6",
            isOptional: true,
          },
        },
        toggleOption(
          "--darkmode",
          "Enable or disable dark mode (no value shows the current mode)",
          { isOptional: true }
        ),
        toggleOption(
          "--transparency",
          "Enable or disable transparency (no value shows the current setting)",
          { isOptional: true }
        ),
        {
          name: "--iconsize",
          description:
            "Set the size of the icons in window sidebars, dock and finder",
          args: {
            name: "size",
            suggestions: ["small", "medium", "large"],
          },
        },
        {
          name: "--maincolor",
          description: "Set the main color of the interface",
          args: {
            name: "color",
            suggestions: ["blue", "graphite"],
          },
        },
        {
          name: "--highlightcolor",
          description: "Set the highlight color of the text selection",
          args: {
            name: "color",
            suggestions: highlightColors,
          },
        },
      ],
    },
    {
      name: "audio",
      description: "Manage audio settings",
      options: [
        helpOption,
        {
          name: "--reset",
          description:
            "Reset audio settings (pass 'hard' to restart the coreaudiod service)",
          args: {
            name: "mode",
            isOptional: true,
            suggestions: [
              {
                name: "hard",
                description: "Restart the coreaudiod service",
              },
            ],
          },
        },
      ],
    },
    {
      name: "battery",
      description: "Battery management commands",
      options: [helpOption, statusOption("Show the current battery status")],
    },
    {
      name: "bluetooth",
      description: "Manage Bluetooth settings",
      options: [
        helpOption,
        statusOption("Show the current Bluetooth status"),
        enableOption("Turn on Bluetooth"),
        disableOption("Turn off Bluetooth"),
      ],
    },
    {
      name: "dir",
      description: "Manage directories and files in the current or given path",
      options: [
        helpOption,
        {
          name: "--delete",
          description:
            "Delete .DS_Store files or empty folders recursively in the current path or a given path",
          args: [
            {
              name: "type",
              suggestions: [
                { name: "empty", description: "Delete empty folders" },
                { name: "dsfiles", description: "Delete .DS_Store files" },
              ],
            },
            {
              name: "path",
              isOptional: true,
              template: "folders",
            },
          ],
        },
        toggleOption(
          "--dsfiles",
          "Enable or disable the generation of .DS_Store files"
        ),
        {
          name: "--size",
          description:
            "Calculate the size of the current folder or a given path",
          args: {
            name: "path",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--tree",
          description:
            "Display a tree view of folders in the current path or a given path",
          args: {
            name: "path",
            isOptional: true,
            template: "folders",
          },
        },
      ],
    },
    {
      name: "disk",
      description: "Manage disks and volumes using diskutil",
      options: [
        helpOption,
        {
          name: "--info",
          description: "Display disk information",
          args: {
            name: "disk_name",
            generators: [{ template: "filepaths" }, generateDisks],
          },
        },
        {
          name: "--list",
          description:
            "List all disks or a specific disk if a disk name is given",
          args: {
            name: "disk_name",
            isOptional: true,
            generators: [{ template: "filepaths" }, generateDisks],
          },
        },
        {
          name: "--filesystems",
          description: "List available filesystems for formatting",
        },
        {
          name: "--ejectall",
          description: "Eject all mountable volumes",
        },
        {
          name: "--verify",
          description: "Verify a volume or disk",
          args: [
            { name: "type", suggestions: ["disk", "volume"] },
            {
              name: "name",
              description: "Disk or volume name",
              generators: [
                { template: "filepaths" },
                generateDisks,
                generateVolumes,
              ],
            },
          ],
        },
        {
          name: "--repair",
          description: "Repair a volume or disk",
          args: [
            { name: "type", suggestions: ["disk", "volume"] },
            {
              name: "name",
              description: "Disk or volume name",
              generators: [
                { template: "filepaths" },
                generateDisks,
                generateVolumes,
              ],
            },
          ],
        },
        {
          name: "--reformat",
          description: "Reformat a volume",
          args: {
            name: "volume",
            generators: [{ template: "filepaths" }, generateVolumes],
          },
        },
        {
          name: "--rename",
          description: "Rename a volume",
          args: [
            {
              name: "current_name",
              generators: [{ template: "filepaths" }, generateVolumes],
            },
            { name: "new_name" },
          ],
        },
        {
          name: "--format",
          description:
            "Format a disk or volume with a specified filesystem type and name",
          args: [
            { name: "type", suggestions: ["disk", "volume"] },
            {
              name: "fs_type",
              description: "Filesystem type (see --filesystems)",
            },
            { name: "new_name", description: "New volume name" },
            {
              name: "name",
              description: "Disk or volume name",
              generators: [
                { template: "filepaths" },
                generateDisks,
                generateVolumes,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "display",
      description: "Manage display settings",
      options: [
        helpOption,
        statusOption("Show the current display status"),
        {
          name: "--up",
          description: "Increase the display brightness",
          args: {
            name: "count",
            description: "Number of steps (default 1)",
            isOptional: true,
          },
        },
        {
          name: "--down",
          description: "Decrease the display brightness",
          args: {
            name: "count",
            description: "Number of steps (default 1)",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "dns",
      description: "Manage DNS settings",
      options: [
        helpOption,
        { name: "--list", description: "List current DNS servers" },
        { name: "--flush", description: "Flush the local DNS cache" },
        {
          name: "--add",
          description: "Add a DNS server by IP or hostname",
          args: { name: "ip_or_hostname" },
        },
      ],
    },
    {
      name: "dock",
      description: "Manage the Dock settings and items",
      options: [
        helpOption,
        toggleOption(
          "--autohide",
          "Enable or disable the Dock's auto-hide feature (no value shows the current setting)",
          { isOptional: true }
        ),
        {
          name: "--autohidedelay",
          description:
            "Change how long it takes to detect that you want to show the Dock (no value shows the current delay)",
          args: { name: "seconds", isOptional: true },
        },
        {
          name: "--additem",
          description: "Add an item to the Dock, e.g. /Applications/Safari.app",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--addblankspace",
          description: "Add a blank space (separator) to the Dock",
        },
        {
          name: "--addrecentitems",
          description: "Add a stack containing your recent items to the Dock",
        },
        toggleOption(
          "--magnification",
          "Enable or disable magnification of Dock icons (no value shows the current setting)",
          { isOptional: true }
        ),
        {
          name: "--position",
          description:
            "Change the Dock's position on the screen (no value shows the current position)",
          args: {
            name: "position",
            isOptional: true,
            suggestions: ["bottom", "left", "right"],
          },
        },
        {
          name: "--prune",
          description: "Remove all items from the Dock",
        },
        {
          name: "--showdelay",
          description:
            "Change how long the Dock takes to show up when auto-hide is enabled (no value shows the current delay)",
          args: { name: "seconds", isOptional: true },
        },
      ],
    },
    {
      name: "fan",
      description: "Manage fan speed",
      options: [
        helpOption,
        { name: "--speed", description: "Show the current fan speed" },
        {
          name: "--monitor",
          description: "Monitor the fan speed in real-time",
        },
      ],
    },
    {
      name: "finder",
      description: "Manage Finder settings",
      options: [
        helpOption,
        toggleOption(
          "--showhiddenfiles",
          "Show or hide hidden files in Finder",
          { status: true }
        ),
        toggleOption(
          "--showextensions",
          "Show or hide file extensions in Finder",
          { status: true }
        ),
        toggleOption(
          "--showdesktop",
          "Enable or disable the desktop in Finder",
          { status: true }
        ),
        toggleOption(
          "--showpath",
          "Show or hide the current folder path in Finder's title bar",
          { status: true }
        ),
      ],
    },
    {
      name: "firewall",
      description: "Manage the macOS Application Firewall",
      options: [
        helpOption,
        statusOption("Show the current status of the firewall"),
        enableOption("Enable the firewall"),
        disableOption("Disable the firewall"),
        {
          name: "--list",
          description: "List applications handled by the firewall",
        },
        {
          name: "--add",
          description: "Add an application to the firewall",
          args: { name: "path_to_app", template: "filepaths" },
        },
        {
          name: "--remove",
          description: "Remove an application from the firewall",
          args: { name: "path_to_app", template: "filepaths" },
        },
        toggleOption("--blockall", "Block all connections (state 2)"),
      ],
    },
    {
      name: "flightmode",
      description: "Turn flight mode on or off (affects Wi-Fi and Bluetooth)",
      options: [
        helpOption,
        enableOption("Enable flight mode"),
        disableOption("Disable flight mode"),
      ],
    },
    {
      name: "gatekeeper",
      description: "Manage Gatekeeper rules",
      options: [
        helpOption,
        statusOption("Show the current status of Gatekeeper"),
        {
          name: "--list",
          description: "List all Gatekeeper rules",
          args: {
            name: "label",
            description: "Only list the rules with this label",
            isOptional: true,
          },
        },
        enableOption("Enable Gatekeeper"),
        disableOption("Disable Gatekeeper"),
        {
          name: "--enable-rule",
          description: "Enable a specific Gatekeeper rule",
          args: { name: "rule_name" },
        },
        {
          name: "--disable-rule",
          description: "Disable a specific Gatekeeper rule",
          args: { name: "rule_name" },
        },
        {
          name: "--create-rule",
          description:
            "Create a new Gatekeeper rule for the specified application",
          args: [
            { name: "rule_name" },
            { name: "program", template: "filepaths" },
          ],
        },
      ],
    },
    {
      name: "group",
      description: "Manage groups",
      options: [
        helpOption,
        { name: "--list", description: "List all groups" },
        {
          name: "--info",
          description: "Show information about a specific group",
          args: { name: "group", generators: generateGroups },
        },
        {
          name: "--adduser",
          description: "Add a user to a specific group",
          args: [
            { name: "user", generators: generateUsers },
            { name: "group", generators: generateGroups },
          ],
        },
        {
          name: "--removeuser",
          description: "Remove a user from a specific group",
          args: [
            { name: "user", generators: generateUsers },
            { name: "group", generators: generateGroups },
          ],
        },
        {
          name: "--ismember",
          description: "Check if a user is a member of a specific group",
          args: [
            { name: "user", generators: generateUsers },
            { name: "group", generators: generateGroups },
          ],
        },
      ],
    },
    {
      name: "hostname",
      description:
        "Manage the hostname (ComputerName, HostName, LocalHostName and NetBIOSName)",
      options: [helpOption],
      args: {
        name: "newhostname",
        description: "Set a new hostname (no value shows the current one)",
        isOptional: true,
      },
    },
    {
      name: "hosts",
      description: "Manage the /etc/hosts file",
      subcommands: [
        {
          name: "ls",
          description: "List current records in the /etc/hosts file",
        },
        {
          name: "add",
          description: "Add a new host to the /etc/hosts file",
          args: [{ name: "ip" }, { name: "host" }],
        },
        {
          name: "remove",
          description: "Remove a host from the /etc/hosts file",
          args: { name: "host" },
        },
      ],
      options: [
        helpOption,
        {
          name: "--ls",
          description: "List current records in the /etc/hosts file",
        },
        {
          name: "--add",
          description: "Add a new host to the /etc/hosts file",
          args: [{ name: "ip" }, { name: "host" }],
        },
        {
          name: "--remove",
          description: "Remove a host from the /etc/hosts file",
          args: { name: "host" },
        },
      ],
    },
    {
      name: "info",
      description: "Print macOS operating system version information",
      options: [helpOption],
    },
    {
      name: ["itunes", "music"],
      description: "Control iTunes or Music via the command line",
      options: [
        helpOption,
        statusOption("Show the current status"),
        { name: "--play", description: "Play the current track" },
        { name: "--playpause", description: "Play or pause the current track" },
        { name: "--stop", description: "Stop the current track" },
        { name: "--pause", description: "Pause the current track" },
        { name: "--next", description: "Play the next track" },
        { name: "--prev", description: "Play the previous track" },
        { name: "--mute", description: "Mute the application" },
        { name: "--unmute", description: "Unmute the application" },
        {
          name: "--vol",
          description: "Set the application volume",
          args: { name: "level", description: "Volume level (0-100)" },
        },
        { name: "--quit", description: "Quit the application" },
      ],
    },
    {
      name: "lock",
      description: "Lock the screen",
      options: [helpOption],
    },
    {
      name: "network",
      description: "Manage network interfaces and locations",
      options: [
        helpOption,
        {
          name: "--list",
          description: "List all network interfaces and their IP addresses",
        },
        {
          name: "--location",
          description:
            "Manage network locations (info and list do not require a name)",
          args: [
            {
              name: "action",
              suggestions: [
                { name: "info", description: "Show the current location" },
                { name: "list", description: "List all locations" },
                { name: "create", description: "Create a location" },
                { name: "delete", description: "Delete a location" },
                { name: "switch", description: "Switch to a location" },
              ],
            },
            {
              name: "name",
              description: "Name of the location",
              isOptional: true,
              generators: generateNetworkLocations,
            },
          ],
        },
      ],
    },
    {
      name: "nosleep",
      description: "Prevent the system from sleeping",
      options: [
        helpOption,
        {
          name: "--until",
          description:
            "Prevent sleep for the given seconds, until a script finishes or until the process with the given PID ends",
          args: {
            name: "seconds | script | pid PID",
            isVariadic: true,
            suggestions: [
              {
                name: "pid",
                description: "Wait until the process with the given PID ends",
              },
            ],
            generators: [{ template: "filepaths" }, generatePids],
          },
        },
      ],
    },
    {
      name: "notificationcenter",
      description: "Manage the macOS Notification Center",
      options: [
        helpOption,
        statusOption("Show the current status of the Notification Center"),
        enableOption("Enable the Notification Center"),
        disableOption("Disable the Notification Center"),
      ],
    },
    {
      name: "ntp",
      description: "Manage the network time service",
      options: [
        helpOption,
        statusOption("Show the current status of the network time service"),
        enableOption("Enable the clock to use network time"),
        disableOption("Disable the clock from using network time"),
        {
          name: "--set",
          description: "Set the network time server",
          args: { name: "host" },
        },
      ],
    },
    {
      name: "permissions",
      description: "Manage app permissions and privacy settings",
      options: [
        helpOption,
        {
          name: "--info",
          description: "Show apps with access to a service",
          args: { name: "service", suggestions: privacyServices },
        },
        {
          name: "--grant",
          description: "Grant an app access to a service",
          args: [
            {
              name: "app",
              description: "Bundle ID, application name or path to the app",
              template: "filepaths",
            },
            { name: "service", suggestions: privacyServices },
          ],
        },
        {
          name: "--reset",
          description: "Reset an app's permission for a service",
          args: [
            {
              name: "app",
              description: "Bundle ID, application name or path to the app",
              template: "filepaths",
            },
            { name: "service", suggestions: privacyServices },
          ],
        },
        {
          name: "--reset-all",
          description: "Reset all permissions for a service",
          args: { name: "service", suggestions: privacyServices },
        },
        {
          name: "--apps",
          description: "List all installed applications (bundle IDs)",
        },
        {
          name: "--services",
          description: "List all available privacy services",
        },
      ],
    },
    {
      name: "powermode",
      description: "Manage the power mode of your Mac",
      options: [
        helpOption,
        {
          name: "--status",
          description: "Get the current power mode for a power source",
          args: {
            name: "source",
            suggestions: ["ac", "battery", "all"],
          },
        },
        {
          name: "--set-battery",
          description: "Set the power mode used on battery power",
          args: { name: "mode", suggestions: ["auto", "low", "high"] },
        },
        {
          name: "--set-ac",
          description: "Set the power mode used on AC power",
          args: { name: "mode", suggestions: ["auto", "low", "high"] },
        },
        {
          name: "--set-all",
          description: "Set the power mode for both AC and battery power",
          args: { name: "mode", suggestions: ["auto", "low", "high"] },
        },
      ],
    },
    {
      name: "printer",
      description: "Manage printers on the system",
      options: [
        helpOption,
        { name: "--settings", description: "Show printer settings" },
        {
          name: ["--names", "--name"],
          description: "Show printer names on the system",
        },
        { name: "--queue", description: "Show items in the printer queue" },
        { name: "--drivers", description: "Show all printer drivers" },
        {
          name: "--open-web",
          description: "Enable and show the web interface for printers",
        },
      ],
    },
    {
      name: "remotelogin",
      description: "Manage Remote Login (SSH)",
      options: [
        helpOption,
        statusOption("Show the current Remote Login status"),
        enableOption("Enable Remote Login for all users"),
        disableOption("Disable Remote Login"),
        {
          name: "--list-users",
          description: "List users explicitly allowed to use Remote Login",
        },
        {
          name: "--allow",
          description: "Add a user to the Remote Login allow list",
          args: { name: "username", generators: generateUsers },
        },
        {
          name: "--remove",
          description: "Remove a user from the Remote Login allow list",
          args: { name: "username", generators: generateUsers },
        },
        {
          name: "--allow-all",
          description: "Allow all users to connect by clearing the allow list",
        },
      ],
    },
    {
      name: "restart",
      description: "Restart the computer",
      options: [
        helpOption,
        {
          name: ["--force", "-f"],
          description: "Force restart without confirmation",
        },
        {
          name: ["--auth", "-a"],
          description:
            "Authenticated restart, keeps the FileVault unlock active across the reboot",
        },
      ],
    },
    {
      name: "safeboot",
      description: "Enable or disable safe boot",
      options: [
        helpOption,
        statusOption("Get the current boot arguments"),
        enableOption("Enable safe boot-args"),
        disableOption("Disable safe boot-args"),
      ],
    },
    {
      name: "screensaver",
      description:
        "Launch the screensaver or manage the password requirement to unlock it",
      options: [
        helpOption,
        toggleOption(
          "--askforpassword",
          "Get or set the password requirement to unlock the screensaver (no value shows the current setting)",
          { isOptional: true }
        ),
      ],
    },
    {
      name: "service",
      description: "Manage services using launchctl",
      options: [
        helpOption,
        { name: "--list", description: "List all services" },
        {
          name: "--info",
          description: "Show information about a specific service",
          args: { name: "service", generators: generateServices },
        },
        {
          name: "--start",
          description: "Start a service",
          args: { name: "service", generators: generateServices },
        },
        {
          name: "--stop",
          description: "Stop a service",
          args: { name: "service", generators: generateServices },
        },
        {
          name: "--status",
          description: "Show the status of a service",
          args: { name: "service", generators: generateServices },
        },
        {
          name: "--enable",
          description: "Enable a service",
          args: { name: "service", generators: generateServices },
        },
        {
          name: "--disable",
          description: "Disable a service",
          args: { name: "service", generators: generateServices },
        },
        {
          name: "--load",
          description: "Load a plist file as a service",
          args: { name: "plistpath", template: "filepaths" },
        },
        {
          name: "--unload",
          description: "Unload a plist file as a service",
          args: { name: "plistpath", template: "filepaths" },
        },
      ],
    },
    {
      name: "shutdown",
      description: "Shut down the computer",
      options: [
        helpOption,
        {
          name: "--force",
          description: "Shut down without confirmation",
        },
      ],
    },
    {
      name: "sleep",
      description: "Put the Mac to sleep immediately",
      options: [helpOption],
    },
    {
      name: "timezone",
      description:
        "Manage the system timezone (no option shows the current timezone)",
      options: [
        helpOption,
        { name: "--list", description: "List available timezones" },
        {
          name: "--set",
          description: "Set the system timezone",
          args: {
            name: "timezone",
            suggestions: timezones.map((name) => ({ name, icon: "🕑" })),
          },
        },
      ],
    },
    {
      name: "touchbar",
      description: "Manage the Touch Bar",
      options: [
        helpOption,
        { name: "--reset", description: "Reset the Touch Bar" },
      ],
    },
    {
      name: "trash",
      description:
        "Manage the trash (requires Full Disk Access for the terminal)",
      options: [
        helpOption,
        statusOption("Show the status of the trash"),
        { name: "--clean", description: "Clean the trash" },
      ],
    },
    {
      name: "update",
      description: "Manage software updates",
      options: [
        helpOption,
        { name: "--list", description: "List available updates" },
        {
          name: "--install",
          description: "Install a specific update by name",
          args: { name: "name" },
        },
        {
          name: "--install-all",
          description: "Install all available updates",
        },
      ],
    },
    {
      name: "usb",
      description: "List USB devices connected to the system",
      options: [helpOption],
    },
    {
      name: "user",
      description: "Manage users",
      options: [
        helpOption,
        { name: "--list", description: "List all users" },
        {
          name: "--info",
          description: "Display information about a user",
          args: { name: "username", generators: generateUsers },
        },
        {
          name: "--delete",
          description: "Delete a user",
          args: { name: "username", generators: generateUsers },
        },
        {
          name: "--create",
          description:
            "Create a new user, asking for username, full name, shell and password",
        },
      ],
    },
    {
      name: "volume",
      description:
        "Manage the system volume (no option shows the volume level and mute state)",
      options: [
        helpOption,
        {
          name: "--set",
          description: "Set the volume",
          args: { name: "level", description: "Volume level (0-100)" },
        },
        { name: "--mute", description: "Mute the system volume" },
        { name: "--unmute", description: "Unmute the system volume" },
      ],
    },
    {
      name: "vpn",
      description: "Manage VPN connections",
      options: [
        helpOption,
        { name: "--list", description: "List available VPN connections" },
        {
          name: "--start",
          description:
            "Start a VPN connection (interactive when no arguments are provided)",
          args: [
            {
              name: "vpn",
              description: "Name of the VPN connection",
              isOptional: true,
            },
            { name: "user", isOptional: true },
            { name: "password", isOptional: true },
            { name: "secret", isOptional: true },
          ],
        },
        {
          name: "--stop",
          description: "Stop a VPN connection",
          args: { name: "vpn", description: "Name of the VPN connection" },
        },
        {
          name: "--status",
          description: "Show the status of a VPN connection",
          args: { name: "vpn", description: "Name of the VPN connection" },
        },
      ],
    },
    {
      name: "wallpaper",
      description: "Set the desktop wallpaper to the specified image file",
      options: [
        helpOption,
        {
          name: "--set",
          description: "Set the wallpaper to the specified image file",
          args: { name: "image_path", template: "filepaths" },
        },
      ],
    },
    {
      name: "wifi",
      description: "Manage your Wi-Fi connections",
      options: [
        helpOption,
        statusOption("Show the current Wi-Fi status"),
        { name: "--scan", description: "Scan for available Wi-Fi networks" },
        {
          name: "--showpassword",
          description: "Show the password for a Wi-Fi network",
          args: {
            name: "essid",
            isOptional: true,
            generators: generateWifiNetworks,
          },
        },
        { name: "--list", description: "List known Wi-Fi networks" },
        {
          name: "--forget",
          description: "Forget a Wi-Fi network",
          args: { name: "essid", generators: generateWifiNetworks },
        },
        { name: "--history", description: "Show Wi-Fi connection history" },
        disableOption("Turn off Wi-Fi"),
        enableOption("Turn on Wi-Fi"),
        {
          name: "--connect",
          description:
            "Connect to a Wi-Fi network (prompts for the password if not provided)",
          args: [
            { name: "essid", generators: generateWifiNetworks },
            { name: "password", isOptional: true },
          ],
        },
      ],
    },
  ],
  options: [
    helpOption,
    {
      name: "--update",
      description: "Update m-cli to the latest version",
    },
    {
      name: "--uninstall",
      description: "Uninstall m-cli",
    },
    {
      name: "--version",
      description: "Show the version of m-cli",
    },
  ],
};

export default completionSpec;
