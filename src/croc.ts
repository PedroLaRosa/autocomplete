// croc v11.6.5 (latest tag of schollz/croc and Homebrew formula, 2026-11-19). Source: read statically from the
// v11.6.5 sources (src/cli/cli.go, src/cli/store.go, src/croc/croc.go, pake v3.2.1 curve list); binary not run.
const proxyOptions: Fig.Option[] = [
  {
    name: "--socks5",
    description: "SOCKS5 proxy address (relay DNS is resolved by the proxy)",
    args: { name: "address" },
  },
  {
    name: "--connect",
    description: "Add a http proxy",
    args: { name: "address" },
  },
];

const qrcodeOption: Fig.Option = {
  name: ["--qrcode", "--qr"],
  description: "Show the web receive URL as a qrcode",
};

const storedUploadOptions = (prefix: string): Fig.Option[] => [
  {
    name: `--${prefix}downloads`,
    description: "Number of verified downloads allowed in stored mode",
    args: { name: "count", default: "1" },
  },
  {
    name: `--${prefix}expiration`,
    description:
      "Stored lifetime after upload (for example 90m, 12h, 3d, or 2w)",
    args: { name: "duration", default: "1d" },
  },
  {
    name: `--${prefix}url`,
    description: "Stored-transfer service origin",
    args: { name: "url", default: "https://getcroc.com" },
  },
];

const completionSpec: Fig.Spec = {
  name: "croc",
  description: "Securely transfer files or share a terminal",
  subcommands: [
    {
      name: "send",
      description: "Send file(s), or folder",
      args: {
        name: "file",
        template: ["filepaths", "folders"],
        isVariadic: true,
      },
      options: [
        {
          name: "--zip",
          description: "Zip folder before sending",
        },
        {
          name: ["--code", "-c"],
          description:
            "Codephrase used to connect to relay (at least 6 characters)",
          args: { name: "codephrase" },
        },
        {
          name: "--transport",
          description: "Sender file data transport",
          args: {
            name: "transport",
            default: "auto",
            suggestions: ["auto", "derp", "relay"],
          },
        },
        {
          name: "--hash",
          description: "Hash algorithm",
          args: {
            name: "algorithm",
            default: "xxhash",
            suggestions: ["xxhash", "imohash", "md5", "highway"],
          },
        },
        {
          name: ["--text", "-t"],
          description: "Send some text",
          args: {
            name: "text",
          },
        },
        {
          name: "--no-local",
          description: "Disable local relay when sending",
        },
        {
          name: "--no-multi",
          description: "Disable multiplexing",
        },
        {
          name: "--git",
          description: "Enable .gitignore respect / don't send ignored files",
        },
        {
          name: "--port",
          description: "Base port for the relay",
          args: { name: "port", default: "9009" },
        },
        {
          name: "--transfers",
          description: "Number of ports to use for transfers",
          args: { name: "count", default: "4" },
        },
        qrcodeOption,
        {
          name: "--exclude",
          description:
            "Exclude files if they contain any of the comma separated strings",
          args: { name: "strings" },
        },
        {
          name: "--exclude-file",
          description:
            "Exclude files matching any of the comma separated relative paths exactly",
          args: { name: "paths" },
        },
        ...proxyOptions,
        {
          name: "--store",
          description:
            "Upload encrypted files for a finite lifetime or a limited number of verified downloads",
        },
        ...storedUploadOptions("store-"),
      ],
    },
    {
      name: "store",
      description: "Upload encrypted files for later download",
      args: {
        name: "file",
        template: "filepaths",
        isVariadic: true,
      },
      options: [...storedUploadOptions(""), ...proxyOptions, qrcodeOption],
    },
    {
      name: "ssh",
      description: "Share or join a secure, collaborative terminal",
      args: {
        name: "six-word-code",
        description: "Code of the shared terminal to join (omit to host)",
        isOptional: true,
      },
      options: [
        {
          name: "--headless",
          description: "Host without attaching the local terminal",
        },
        {
          name: "--duration",
          description: "Maximum hosted session lifetime",
          args: { name: "duration", default: "12h" },
        },
        {
          name: "--reconnect-window",
          description: "How long a guest retries after a connection loss",
          args: { name: "duration", default: "2m" },
        },
        {
          name: "--no-reconnect",
          description: "Disable automatic guest reconnection",
        },
        {
          name: "--transport",
          description: "Guest transport",
          args: {
            name: "transport",
            default: "auto",
            suggestions: ["auto", "tailcat", "relay"],
          },
        },
        {
          name: "--dir",
          description: "Working directory for a hosted shell",
          args: { name: "directory", default: ".", template: "folders" },
        },
      ],
    },
    {
      name: ["update", "upgrade"],
      description: "Prepare croc-update to install the latest croc release",
      options: [
        {
          name: "--check",
          description: "Check for a newer release without installing it",
        },
        {
          name: "--yes",
          description:
            "Install the updater without confirmation (OS authentication may still be required)",
        },
      ],
    },
    {
      name: "relay",
      description: "Start your own relay (optional)",
      options: [
        {
          name: "--host",
          description: "Host of the relay",
          args: { name: "host" },
        },
        {
          name: "--ports",
          description: "Ports of the relay",
          args: { name: "ports", default: "9009,9010,9011,9012,9013" },
        },
        {
          name: "--port",
          description: "Base port for the relay",
          args: { name: "port", default: "9009" },
        },
        {
          name: "--transfers",
          description: "Number of ports to use for relay",
          args: { name: "count", default: "5" },
        },
        {
          name: "--max-rooms-open",
          description: "Maximum waiting rooms per relay port",
          args: { name: "count" },
        },
        {
          name: "--max-pending-handshakes",
          description: "Maximum incomplete handshakes per relay port",
          args: { name: "count" },
        },
        {
          name: "--max-pending-handshakes-per-source",
          description:
            "Maximum incomplete handshakes per source IP per relay port",
          args: { name: "count" },
        },
        {
          name: "--first-message-timeout",
          description:
            "Maximum time from accepting a connection to its first complete protocol message",
          args: { name: "duration" },
        },
        {
          name: "--handshake-timeout",
          description: "Maximum time for an initial relay handshake",
          args: { name: "duration" },
        },
        {
          name: "--source-join-limit",
          description:
            "Maximum room joins per source IP in the admission window",
          args: { name: "count" },
        },
        {
          name: "--room-join-limit",
          description: "Maximum joins per room in the admission window",
          args: { name: "count" },
        },
        {
          name: "--join-limit-window",
          description: "Sliding window for relay admission limits",
          args: { name: "duration" },
        },
      ],
    },
    {
      name: "generate-fish-completion",
      description: "Generate fish completion and output to stdout",
      hidden: true,
    },
    {
      name: ["help", "h"],
      description: "Shows a list of commands or help for one command",
      args: {
        name: "command",
        template: "help",
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for croc",
      isPersistent: true,
    },
    {
      name: "--internal-dns",
      description:
        "Use a built-in DNS stub resolver rather than the host operating system",
    },
    {
      name: "--classic",
      description:
        "Toggle between the classic mode (insecure due to local attack vector) and new mode (secure)",
    },
    {
      name: "--remember",
      description: "Save these settings to reuse next time",
    },
    {
      name: "--debug",
      description: "Toggle debug mode",
    },
    {
      name: "--yes",
      description: "Automatically agree to all prompts",
    },
    {
      name: "--stdout",
      description: "Redirect file to stdout",
    },
    {
      name: "--no-compress",
      description: "Disable compression",
    },
    {
      name: "--ask",
      description: "Make sure sender and recipient are prompted",
    },
    {
      name: "--local",
      description: "Force to use only local connections",
    },
    {
      name: "--ignore-stdin",
      description: "Ignore piped stdin",
    },
    {
      name: "--overwrite",
      description: "Do not prompt to overwrite or resume",
    },
    {
      name: "--rename",
      description:
        "Receive files that already exist under a new name instead of prompting",
    },
    {
      name: "--testing",
      description: "Flag for testing purposes",
    },
    {
      name: "--quiet",
      description: "Disable all output",
    },
    {
      name: "--disable-clipboard",
      description: "Disable copy to clipboard",
    },
    {
      name: "--extended-clipboard",
      description: "Copy full command with secret as env variable to clipboard",
    },
    {
      name: "--no-update-check",
      description: "Skip the update check on send and receive",
    },
    {
      name: "--revoke",
      description: "Revoke a stored transfer using its local sender receipt",
      args: { name: "transfer-id" },
    },
    {
      name: "--multicast",
      description: "Multicast address to use for local discovery",
      args: { name: "address", default: "239.255.255.250" },
    },
    {
      name: "--curve",
      description: "Choose an encryption curve",
      args: {
        name: "curve",
        default: "p256",
        suggestions: ["p521", "p256", "p384", "siec", "ed25519"],
      },
    },
    {
      name: "--ip",
      description: "Set sender ip if known e.g. 10.0.0.1:9009, [::1]:9009",
      args: { name: "address" },
    },
    {
      name: "--relay",
      description: "Address of the relay",
      args: { name: "ipv4 address", default: "croc.schollz.com:9009" },
    },
    {
      name: "--relay6",
      description: "Ipv6 address of the relay",
      args: { name: "ipv6 address", default: "croc6.schollz.com:9009" },
    },
    {
      name: "--out",
      description: "Specify an output folder to receive the file",
      args: { name: "output folder", default: ".", template: "folders" },
    },
    {
      name: "--pass",
      description: 'Password for the relay (default: "pass123")',
      args: { name: "password" },
    },
    ...proxyOptions,
    {
      name: "--throttleUpload",
      description: "Throttle the upload speed e.g. 500k",
      args: { name: "rate" },
    },
    {
      name: ["--version", "-v"],
      description: "Print the version",
    },
  ],
  args: {
    name: "secret-code",
    description: "Receive a file using code",
  },
};
export default completionSpec;
