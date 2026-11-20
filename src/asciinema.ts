// asciinema v3.2.1 (GitHub release, 2026-06-16). Source: clap definitions in
// https://github.com/asciinema/asciinema/blob/v3.2.1/src/cli.rs

const fileOrUrl = (name: string): Fig.Arg => ({
  name,
  description: "Local path, HTTP(S) URL or '-' for stdin",
  template: "filepaths",
  suggestions: [{ name: "-", description: "Stdin" }],
});

const outputFormat: Fig.Option = {
  name: ["-f", "--output-format"],
  description: "Output file format (default: asciicast-v3)",
  args: {
    name: "format",
    suggestions: [
      { name: "asciicast-v3", description: "Asciicast v3 (current)" },
      { name: "asciicast-v2", description: "Asciicast v2 (previous)" },
      {
        name: "raw",
        description: "Raw terminal output, no timing or metadata",
      },
      {
        name: "txt",
        description: "Plain text without colors or control codes",
      },
    ],
  },
};

const overwrite: Fig.Option = {
  name: "--overwrite",
  description: "Overwrite the output file if it already exists",
  exclusiveOn: ["-a", "--append"],
};

const append: Fig.Option = {
  name: ["-a", "--append"],
  description: "Append to an existing recording file",
  exclusiveOn: ["--overwrite"],
};

const idleTimeLimit: Fig.Option = {
  name: ["-i", "--idle-time-limit"],
  description: "Limit idle time to a given number of seconds",
  args: { name: "secs", description: "Can be fractional" },
};

const title = (what: string): Fig.Option => ({
  name: ["-t", "--title"],
  description: `Title of the ${what}`,
  args: { name: "title" },
});

const description = (what: string): Fig.Option => ({
  name: "--description",
  description: `Description of the ${what} (Markdown supported)`,
  args: { name: "description" },
});

const visibility: Fig.Option = {
  name: "--visibility",
  description: "Visibility level",
  args: {
    name: "visibility",
    suggestions: ["public", "unlisted", "private"],
  },
};

const audioUrl: Fig.Option = {
  name: "--audio-url",
  description: "Audio URL for synchronized playback",
  args: { name: "url" },
};

const serverUrl: Fig.Option = {
  name: "--server-url",
  description: "Asciinema server URL",
  args: { name: "url" },
};

const sessionOptions: Fig.Option[] = [
  {
    name: ["-c", "--command"],
    description: "Command to start in the session (default: $SHELL)",
    args: { name: "command" },
  },
  {
    name: ["-I", "--capture-input"],
    description: "Enable input (keyboard) capture",
  },
  {
    name: "--capture-env",
    description:
      "Comma-separated list of environment variables to capture (default: SHELL)",
    args: { name: "vars" },
  },
  {
    name: "--headless",
    description: "Headless mode - don't use the terminal for I/O",
  },
  {
    name: "--window-size",
    description: "Override session's terminal window size",
    args: { name: "COLSxROWS", description: "E.g. 80x24, 80x or x24" },
  },
  {
    name: "--return",
    description: "Return the session's exit status",
  },
  {
    name: "--log-file",
    description: "Log file path",
    args: { name: "path", template: "filepaths" },
  },
];

const streamLocal = (name: string[]): Fig.Option => ({
  name,
  description: "Stream via the local HTTP server",
  args: {
    name: "IP:PORT",
    description: "Default: 127.0.0.1 on an ephemeral port",
    isOptional: true,
  },
});

const streamRemote = (name: string[]): Fig.Option => ({
  name,
  description: "Stream via remote asciinema server",
  args: {
    name: "STREAM-ID|WS-URL",
    description: "Omit to let the server allocate a new stream ID",
    isOptional: true,
  },
});

const completionSpec: Fig.Spec = {
  name: "asciinema",
  description: "Terminal session recorder",
  options: [
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
    {
      name: ["-h", "--help"],
      description: "Print help",
      isPersistent: true,
    },
    {
      name: ["-q", "--quiet"],
      description: "Quiet mode - suppress diagnostic messages",
      isPersistent: true,
    },
  ],
  subcommands: [
    {
      name: ["record", "rec"],
      description: "Record a terminal session",
      args: { name: "file", template: "filepaths" },
      options: [
        outputFormat,
        ...sessionOptions,
        append,
        overwrite,
        title("recording"),
        idleTimeLimit,
        {
          name: "--stdin",
          description: "Enable input (keyboard) capture",
          deprecated: { description: "Use --capture-input" },
        },
        {
          name: "--raw",
          description: "Ignored",
          deprecated: { description: "Use --output-format raw" },
        },
        ...["--cols", "--rows"].map((name): Fig.Option => ({
          name,
          description: "Ignored",
          deprecated: { description: "Use --window-size" },
          args: { name: name.slice(2) },
        })),
      ],
    },
    {
      name: "stream",
      description: "Stream a terminal session",
      options: [
        streamLocal(["-l", "--local"]),
        streamRemote(["-r", "--remote"]),
        ...sessionOptions,
        title("session"),
        description("session"),
        visibility,
        audioUrl,
        serverUrl,
      ],
    },
    {
      name: "session",
      description: "Record and stream a terminal session",
      options: [
        {
          name: ["-o", "--output-file"],
          description: "Save the session to a file",
          args: { name: "path", template: "filepaths" },
        },
        outputFormat,
        streamLocal(["-l", "--stream-local"]),
        streamRemote(["-r", "--stream-remote"]),
        ...sessionOptions,
        append,
        overwrite,
        title("session"),
        description("session"),
        visibility,
        audioUrl,
        idleTimeLimit,
        serverUrl,
      ],
    },
    {
      name: "play",
      description: "Play back a terminal session",
      args: fileOrUrl("file"),
      options: [
        {
          name: ["-s", "--speed"],
          description: "Set playback speed",
          args: { name: "factor", description: "Can be fractional" },
        },
        {
          name: ["-l", "--loop"],
          description: "Loop playback continuously",
        },
        idleTimeLimit,
        {
          name: ["-m", "--pause-on-markers"],
          description: "Automatically pause on markers",
        },
        {
          name: ["-r", "--resize"],
          description: "Auto-resize terminal to match original size",
        },
      ],
    },
    {
      name: "upload",
      description: "Upload a recording to an asciinema server",
      args: { name: "file", template: "filepaths" },
      options: [
        title("recording"),
        description("recording"),
        visibility,
        audioUrl,
        serverUrl,
      ],
    },
    {
      name: "auth",
      description: "Authenticate this CLI with an asciinema server account",
      options: [serverUrl],
    },
    {
      name: "cat",
      description: "Concatenate multiple recordings",
      args: {
        name: "file",
        description: "At least two local paths or HTTP(S) URLs",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "convert",
      description: "Convert a recording to another format",
      args: [
        fileOrUrl("input"),
        {
          name: "output",
          description: "File path or '-' for stdout",
          template: "filepaths",
          suggestions: [{ name: "-", description: "Stdout" }],
        },
      ],
      options: [outputFormat, overwrite],
    },
    {
      name: "help",
      description: "Print help for a subcommand",
      args: {
        name: "command",
        isOptional: true,
        suggestions: [
          "record",
          "stream",
          "session",
          "play",
          "upload",
          "auth",
          "cat",
          "convert",
        ],
      },
    },
  ],
};
export default completionSpec;
