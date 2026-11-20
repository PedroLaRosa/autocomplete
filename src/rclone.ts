// rclone v1.76.0 (latest stable tag of github.com/rclone/rclone, 2026-11-20). Source: generated command docs
// (docs/content/commands/*.md, docs/content/flags.md) and the cobra/pflag definitions under cmd/, fs/ and vfs/ at
// tag v1.76.0, read statically (the binary was not run). Backend-specific flags (--s3-*, --drive-* ...) are not listed.

// TODO: dynamically suggest paths
const remote: Fig.Arg = {
  name: "remote:",
  generators: {
    script: ["rclone", "listremotes"],
    postProcess: (list) =>
      list
        .split("\n")
        .filter(Boolean)
        .map((remote) => ({ name: remote })),
  },
};
// Name of a configured remote without the trailing colon
const remoteName: Fig.Arg = {
  name: "name",
  generators: {
    script: ["rclone", "listremotes"],
    postProcess: (list) =>
      list
        .split("\n")
        .filter(Boolean)
        .map((remote) => ({ name: remote.replace(/:$/, "") })),
  },
};
const hashes = [
  "MD5",
  "SHA-1",
  "DropboxHash",
  "QuickXorHash",
  "Whirlpool",
  "CRC-32",
  "MailruHash",
  "SHA-256",
  "SHA-512",
  "BLAKE3",
  "XXH3",
  "XXH128",
  "CRC-32C",
  "HiDriveHash",
];
const dedupeModes: Fig.Suggestion[] = [
  {
    name: "interactive",
    description: "Interactive",
  },
  {
    name: "skip",
    description: "Removes identical files then skips anything left",
  },
  {
    name: "rename",
    description:
      "Removes identical files then renames the rest to be different",
  },
  {
    name: "list",
    description: "Lists duplicate dirs and files only and changes nothing",
  },
  ...["first", "newest", "oldest", "largest", "smallest"].map((_) => ({
    name: _,
    description: `Removes identical files then keeps the ${_} one`,
  })),
];
const lsfFormats: Fig.Suggestion[] = [
  ["p", "Path"],
  ["s", "Size"],
  ["t", "Modification time"],
  ["h", "Hash"],
  ["i", "ID of object"],
  ["o", "Original ID of underlying object"],
  ["m", "MimeType of object if known"],
  ["e", "Encrypted name"],
  ["T", 'Tier of storage if known, e.g. "Hot" or "Cool"'],
  ["M", "Metadata of object in JSON blob format"],
].map((_) => ({
  name: _[0],
  description: _[1],
}));
const cryptedremote: Fig.Arg = {
  name: "cryptedremote",
  generators: remote.generators,
  // TODO filter by crypted type
};
// TODO dynamically sugest path
const remotePath: Fig.Arg = {
  name: "remote:path",
  generators: remote.generators,
};
const sourcePath: Fig.Arg = {
  name: "source:path",
  generators: remote.generators,
};
const destPath: Fig.Arg = {
  name: "dest:path",
  generators: remote.generators,
};
const mountpoint: Fig.Arg = {
  // TODO: suggest only empty directories
  name: "mountpoint",
  template: "folders",
};
const outputFile: Fig.Arg = {
  name: "output_file",
  description:
    'If output_file is "-", then the output will be written to stdout',
  isOptional: true,
  template: "filepaths",
};
const keyValue: Fig.Arg = {
  name: "key=value",
  description: "Pairs of key value, or key=value",
  isOptional: true,
  isVariadic: true,
};

const vfsOptions: Fig.Option[] = [
  {
    name: "--no-checksum",
    description: "Don't compare checksums on up/download",
  },
  {
    name: "--no-modtime",
    description: "Don't read/write the modification time (can speed things up)",
  },
  { name: "--no-seek", description: "Don't allow seeking in files" },
  {
    name: "--dir-cache-time",
    description: "Time to cache directory entries for",
    args: { name: "duration", default: "5m0s" },
  },
  {
    name: "--vfs-refresh",
    description:
      "Refreshes the directory cache recursively in the background on start",
  },
  {
    name: "--poll-interval",
    description:
      "Time to wait between polling for changes, must be smaller than dir-cache-time and only on supported remotes (set 0 to disable)",
    args: { name: "duration", default: "1m0s" },
  },
  { name: "--read-only", description: "Only allow read-only access" },
  {
    name: "--vfs-links",
    description:
      "Translate symlinks to/from regular files with a '.rclonelink' extension for the VFS",
  },
  {
    name: "--vfs-cache-mode",
    description: "Cache mode",
    args: {
      name: "mode",
      suggestions: ["off", "minimal", "writes", "full"],
      default: "off",
    },
  },
  {
    name: "--vfs-cache-poll-interval",
    description: "Interval to poll the cache for stale objects",
    args: { name: "duration", default: "1m0s" },
  },
  {
    name: "--vfs-cache-max-age",
    description: "Max time since last access of objects in the cache",
    args: { name: "duration", default: "1h0m0s" },
  },
  {
    name: "--vfs-cache-max-size",
    description: "Max total size of objects in the cache",
    args: { name: "size", default: "off" },
  },
  {
    name: "--vfs-cache-min-free-space",
    description: "Target minimum free space on the disk containing the cache",
    args: { name: "size", default: "off" },
  },
  {
    name: "--vfs-read-chunk-size",
    description: "Read the source objects in chunks",
    args: { name: "size", default: "128Mi" },
  },
  {
    name: "--vfs-read-chunk-size-limit",
    description:
      "If greater than --vfs-read-chunk-size, double the chunk size after each chunk read, until the limit is reached ('off' is unlimited)",
    args: { name: "size", default: "off" },
  },
  {
    name: "--vfs-read-chunk-streams",
    description: "The number of parallel streams to read at once",
    args: { name: "count" },
  },
  {
    name: "--dir-perms",
    description: "Directory permissions",
    args: { name: "mode", default: "777" },
  },
  {
    name: "--file-perms",
    description: "File permissions",
    args: { name: "mode", default: "666" },
  },
  {
    name: "--link-perms",
    description: "Link permissions",
    args: { name: "mode", default: "666" },
  },
  {
    name: "--vfs-case-insensitive",
    description: "If a file name not found, find a case insensitive match",
  },
  {
    name: "--vfs-block-norm-dupes",
    description:
      "If duplicate filenames exist in the same directory (after normalization), log an error and hide the duplicates (may have a performance cost)",
  },
  {
    name: "--vfs-write-wait",
    description: "Time to wait for in-sequence write before giving error",
    args: { name: "duration", default: "1s" },
  },
  {
    name: "--vfs-read-wait",
    description: "Time to wait for in-sequence read before seeking",
    args: { name: "duration", default: "20ms" },
  },
  {
    name: "--vfs-write-back",
    description: "Time to writeback files after last use when using cache",
    args: { name: "duration", default: "5s" },
  },
  {
    name: "--vfs-read-ahead",
    description:
      "Extra read ahead over --buffer-size when using cache-mode full",
    args: { name: "size" },
  },
  {
    name: "--vfs-used-is-size",
    description: "Use the rclone size algorithm for Used size",
  },
  {
    name: "--vfs-fast-fingerprint",
    description: "Use fast (less accurate) fingerprints for change detection",
  },
  {
    name: "--vfs-disk-space-total-size",
    description: "Specify the total space of disk",
    args: { name: "size", default: "off" },
  },
  {
    name: "--umask",
    description:
      "Override the permission bits set by the filesystem (not supported on Windows)",
    args: { name: "mode" },
  },
  {
    name: "--uid",
    description:
      "Override the uid field set by the filesystem (not supported on Windows)",
    args: { name: "uint32" },
  },
  {
    name: "--gid",
    description:
      "Override the gid field set by the filesystem (not supported on Windows)",
    args: { name: "uint32" },
  },
  {
    name: "--vfs-handle-caching",
    description:
      "Time to keep file handle and downloaders alive after last close",
    args: { name: "duration", default: "5s" },
  },
  {
    name: "--vfs-metadata-extension",
    description: "Set the extension to read metadata from",
    args: { name: "extension" },
  },
];

const mountOptions: Fig.Option[] = [
  {
    name: "--allow-idmap",
    description: "Allow id-mapped mounts (Linux 6.12+, mount2 only)",
  },
  {
    name: "--allow-non-empty",
    description:
      "Allow mounting over a non-empty directory (not supported on Windows)",
  },
  {
    name: "--allow-other",
    description: "Allow access to other users (not supported on Windows)",
  },
  {
    name: "--allow-root",
    description: "Allow access to root user (not supported on Windows)",
  },
  {
    name: "--async-read",
    description:
      "Use asynchronous reads (not supported on Windows) (default true)",
  },
  {
    name: "--attr-timeout",
    description: "Time for which file/directory attributes are cached",
    args: { name: "duration", default: "1s" },
  },
  {
    name: "--daemon",
    description:
      "Run mount in background and exit parent process (as background output is suppressed, use --log-file with --log-format=pid,... to monitor) (not supported on Windows)",
  },
  {
    name: "--daemon-timeout",
    description:
      "Time limit for rclone to respond to kernel (not supported on Windows)",
    args: { name: "duration", default: "0s" },
  },
  {
    name: "--daemon-wait",
    description:
      "Time to wait for ready mount from daemon (maximum time on Linux, constant sleep time on OSX/BSD) (not supported on Windows)",
    args: { name: "duration", default: "1m0s" },
  },
  { name: "--debug-fuse", description: "Debug the FUSE internals - needs -v" },
  {
    name: "--default-permissions",
    description:
      "Makes kernel enforce access control based on the file mode (not supported on Windows)",
  },
  {
    name: "--devname",
    description: "Set the device name - default is remote:path",
    args: { name: "name" },
  },
  {
    name: "--direct-io",
    description: "Use Direct IO, disables caching of data",
  },
  {
    name: "--fuse-flag",
    description:
      "Flags or arguments to be passed direct to libfuse/WinFsp (repeat if required)",
    args: { name: "flag" },
    isRepeatable: true,
  },
  {
    name: "--max-read-ahead",
    description:
      "The number of bytes that can be prefetched for sequential reads (not supported on Windows)",
    args: { name: "size", default: "128Ki" },
  },
  {
    name: "--mount-case-insensitive",
    description:
      "Tell the OS the mount is case insensitive (true) or sensitive (false) regardless of the backend (auto)",
    args: {
      name: "bool",
      suggestions: ["true", "false", "unset"],
      default: "unset",
    },
  },
  {
    name: "--network-mode",
    description:
      "Mount as remote network drive, instead of fixed disk drive (supported on Windows only)",
  },
  {
    name: "--noappledouble",
    description:
      "Ignore Apple Double (._) and .DS_Store files (supported on OSX only) (default true)",
  },
  {
    name: "--noapplexattr",
    description:
      'Ignore all "com.apple.*" extended attributes (supported on OSX only)',
  },
  {
    name: ["-o", "--option"],
    description: "Option for libfuse/WinFsp (repeat if required)",
    args: { name: "option" },
    isRepeatable: true,
  },
  {
    name: "--volname",
    description: "Set the volume name (supported on Windows and OSX only)",
    args: { name: "name" },
  },
  {
    name: "--write-back-cache",
    description:
      "Makes kernel buffer writes before sending them to rclone (without this, writethrough caching is used) (not supported on Windows)",
  },
];

const serverOptions: Fig.Option[] = [
  {
    name: "--allow-origin",
    description:
      "Origin which cross-domain request (CORS) can be executed from",
    args: { name: "origin" },
  },
  {
    name: "--baseurl",
    description: "Prefix for URLs - leave blank for root",
    args: { name: "baseurl" },
  },
  {
    name: "--cert",
    description:
      "TLS PEM key (concatenation of certificate and CA certificate)",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--client-ca",
    description: "Client certificate authority to verify clients with",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--htpasswd",
    description: "A htpasswd file - if not provided no authentication is done",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--key",
    description: "TLS PEM Private key",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--max-header-bytes",
    description: "Maximum size of request header",
    args: { name: "int", default: "4096" },
  },
  {
    name: "--min-tls-version",
    description: "Minimum TLS version that is acceptable",
    args: {
      name: "version",
      suggestions: ["tls1.0", "tls1.1", "tls1.2", "tls1.3"],
      default: "tls1.0",
    },
  },
  {
    name: "--pass",
    description: "Password for authentication",
    args: { name: "password" },
  },
  {
    name: "--realm",
    description: "Realm for authentication",
    args: { name: "realm" },
  },
  {
    name: "--response-header",
    description:
      "Set HTTP header for all responses, overriding existing values",
    args: { name: "header" },
    isRepeatable: true,
  },
  {
    name: "--salt",
    description: "Password hashing salt",
    args: { name: "salt" },
  },
  {
    name: "--server-read-timeout",
    description: "Timeout for server reading data",
    args: { name: "duration", default: "1h0m0s" },
  },
  {
    name: "--server-write-timeout",
    description: "Timeout for server writing data",
    args: { name: "duration", default: "1h0m0s" },
  },
  {
    name: "--user",
    description: "User name for authentication",
    args: { name: "user" },
  },
  {
    name: "--user-from-header",
    description: "User name from a defined HTTP header",
    args: { name: "header" },
  },
];

const reportOptions: Fig.Option[] = [
  {
    name: "--combined",
    description: "Make a combined report of changes to this file",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--differ",
    description: "Report all non-matching files to this file",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--error",
    description:
      "Report all files with errors (hashing or reading) to this file",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--match",
    description: "Report all matching files to this file",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--missing-on-dst",
    description: "Report all files missing from the destination to this file",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--missing-on-src",
    description: "Report all files missing from the source to this file",
    args: { name: "file", template: "filepaths" },
  },
];

const transferReportOptions: Fig.Option[] = [
  { name: "--absolute", description: "Put a leading / in front of path names" },
  { name: "--csv", description: "Output in CSV format" },
  {
    name: ["-d", "--dir-slash"],
    description: "Append a slash to directory names (default true)",
  },
  { name: "--dirs-only", description: "Only list directories" },
  { name: "--files-only", description: "Only list files (default true)" },
  {
    name: ["-F", "--format"],
    description: "Output format - see lsf help for details",
    args: { name: "format", suggestions: lsfFormats, default: "p" },
  },
  {
    name: "--hash",
    description:
      "Use this hash when h is used in the format MD5|SHA-1|DropboxHash",
    args: { name: "hash", suggestions: hashes, default: "md5" },
  },
  {
    name: ["-s", "--separator"],
    description: "Separator for the items in the format",
    args: { name: "separator", default: ";" },
  },
  {
    name: ["-t", "--timeformat"],
    description:
      "Specify a custom time format - see docs for details (default: 2006-01-02 15:04:05)",
    args: { name: "format" },
  },
  {
    name: "--dest-after",
    description: "Report all files that exist on the dest post-sync",
    args: { name: "file", template: "filepaths" },
  },
];

const configOptions: Fig.Option[] = [
  { name: "--all", description: "Ask the full set of config questions" },
  {
    name: "--continue",
    description: "Continue the configuration process with an answer",
  },
  {
    name: "--no-obscure",
    description: "Force any passwords not to be obscured",
  },
  { name: "--no-output", description: "Don't provide any output" },
  {
    name: "--non-interactive",
    description: "Don't interact with user and return questions",
  },
  { name: "--obscure", description: "Force any passwords to be obscured" },
  {
    name: "--result",
    description: "Result - use with --continue",
    args: { name: "result" },
  },
  {
    name: "--state",
    description: "State - use with --continue",
    args: { name: "state" },
  },
];

const hashsumOptions: Fig.Option[] = [
  { name: "--base64", description: "Output base64 encoded hashsum" },
  {
    name: ["-C", "--checkfile"],
    description:
      "Validate hashes against a given SUM file instead of printing them",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--download",
    description:
      "Download the file and hash it locally; if this flag is not specified, the hash is requested from the remote",
  },
  {
    name: "--output-file",
    description: "Output hashsums to a file rather than the terminal",
    args: { name: "file", template: "filepaths" },
  },
];

const testFileOptions: Fig.Option[] = [
  {
    name: "--ascii",
    description: "Fill files with random ASCII printable bytes only",
  },
  { name: "--chargen", description: "Fill files with a ASCII chargen pattern" },
  { name: "--pattern", description: "Fill files with a periodic pattern" },
  {
    name: "--seed",
    description: "Seed for the random number generator (0 for random)",
    args: { name: "seed", default: "1" },
  },
  {
    name: "--sparse",
    description: "Make the files sparse (appear to be filled with ASCII 0x00)",
  },
  { name: "--zero", description: "Fill files with ASCII 0x00" },
];

const nfsOptions: Fig.Option[] = [
  {
    name: "--nfs-cache-dir",
    description: "The directory the NFS handle cache will use if set",
    args: { name: "dir", template: "folders" },
  },
  {
    name: "--nfs-cache-handle-limit",
    description: "Max file handles cached simultaneously (min 5)",
    args: { name: "int", default: "1000000" },
  },
  {
    name: "--nfs-cache-type",
    description: "Type of NFS handle cache to use",
    args: {
      name: "type",
      suggestions: ["memory", "disk", "symlink"],
      default: "memory",
    },
  },
];

const globalFlags: Fig.Option[] = [
  {
    name: "--allow-https-downgrade",
    description: "Follow redirects from HTTPS to HTTP (insecure)",
  },
  {
    name: "--ask-password",
    description:
      "Allow prompt for password for encrypted configuration (default true)",
  },
  {
    name: "--auto-confirm",
    description: "If enabled, do not request console confirmation",
  },
  {
    name: "--backup-dir",
    description: "Make backups into hierarchy based in DIR",
    args: { name: "path", generators: remote.generators, template: "folders" },
  },
  {
    name: "--bind",
    description:
      "Local address to bind to for outgoing connections, IPv4, IPv6 or name",
    args: { name: "address" },
  },
  {
    name: "--buffer-size",
    description: "In memory buffer size when reading files for each --transfer",
    args: { name: "size", default: "16Mi" },
  },
  {
    name: "--bwlimit",
    description:
      "Bandwidth limit in KiB/s, or use suffix B|K|M|G|T|P or a full timetable",
    args: { name: "bwlimit" },
  },
  {
    name: "--bwlimit-file",
    description:
      "Bandwidth limit per file in KiB/s, or use suffix B|K|M|G|T|P or a full timetable",
    args: { name: "bwlimit" },
  },
  {
    name: "--ca-cert",
    description: "CA certificate used to verify servers",
    args: { name: "file", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: "--cache-dir",
    description: "Directory rclone will use for caching",
    args: { name: "dir", template: "folders" },
  },
  {
    name: "--check-first",
    description: "Do all the checks before starting transfers",
  },
  {
    name: "--checkers",
    description: "Number of checkers to run in parallel",
    args: { name: "count", default: "8" },
  },
  {
    name: ["-c", "--checksum"],
    description:
      "Check for changes with size & checksum (if available, or fallback to size only)",
  },
  {
    name: "--client-cert",
    description: "Client SSL certificate (PEM) for mutual TLS auth",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--client-key",
    description: "Client SSL private key (PEM) for mutual TLS auth",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--client-pass",
    description:
      "Password for client SSL private key (PEM) for mutual TLS auth (obscured)",
    args: { name: "password" },
  },
  {
    name: "--color",
    description: "When to show colors (and other ANSI codes)",
    args: {
      name: "mode",
      suggestions: ["AUTO", "NEVER", "ALWAYS"],
      default: "AUTO",
    },
  },
  {
    name: "--compare-dest",
    description: "Include additional server-side paths during comparison",
    args: { name: "path", generators: remote.generators, template: "folders" },
    isRepeatable: true,
  },
  {
    name: "--config",
    description: "Config file",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--contimeout",
    description: "Connect timeout",
    args: { name: "duration", default: "1m0s" },
  },
  {
    name: "--copy-dest",
    description:
      "Implies --compare-dest but also copies files from paths into destination",
    args: { name: "path", generators: remote.generators, template: "folders" },
    isRepeatable: true,
  },
  {
    name: "--cpuprofile",
    description: "Write cpu profile to file",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--cutoff-mode",
    description: "Mode to stop transfers when reaching the max transfer limit",
    args: {
      name: "mode",
      suggestions: ["HARD", "SOFT", "CAUTIOUS"],
      default: "HARD",
    },
  },
  {
    name: "--default-time",
    description: "Time to show if modtime is unknown for files and directories",
    args: { name: "time" },
  },
  {
    name: "--delete-after",
    description:
      "When synchronizing, delete files on destination after transferring (default)",
  },
  {
    name: "--delete-before",
    description:
      "When synchronizing, delete files on destination before transferring",
  },
  {
    name: "--delete-during",
    description: "When synchronizing, delete files during transfer",
  },
  {
    name: "--delete-excluded",
    description: "Delete files on dest excluded from sync",
  },
  {
    name: "--disable",
    description:
      "Disable a comma separated list of features (use --disable help to see a list)",
    args: { name: "features" },
  },
  {
    name: "--disable-http-keep-alives",
    description: "Disable HTTP keep-alives and use each connection once",
  },
  {
    name: "--disable-http2",
    description: "Disable HTTP/2 in the global transport",
  },
  {
    name: ["-n", "--dry-run"],
    description: "Do a trial run with no permanent changes",
  },
  {
    name: "--dscp",
    description:
      "Set DSCP value to connections, value or name, e.g. CS1, LE, DF, AF21",
    args: { name: "dscp" },
  },
  {
    name: "--dump",
    description:
      "List of items to dump from: headers, bodies, requests, responses, auth, filters, goroutines, openfiles, mapper, curl, errors, trace",
    args: {
      name: "flags",
      suggestions: [
        "headers",
        "bodies",
        "requests",
        "responses",
        "auth",
        "filters",
        "goroutines",
        "openfiles",
        "mapper",
        "curl",
        "errors",
        "trace",
      ],
    },
  },
  {
    name: "--dump-bodies",
    description: "Dump HTTP headers and bodies - may contain sensitive info",
  },
  {
    name: "--dump-headers",
    description: "Dump HTTP headers - may contain sensitive info",
  },
  {
    name: "--error-on-no-transfer",
    description:
      "Sets exit code 9 if no files are transferred, useful in scripts",
  },
  {
    name: "--exclude",
    description: "Exclude files matching pattern",
    args: { name: "pattern" },
    isRepeatable: true,
  },
  {
    name: "--exclude-from",
    description:
      "Read file exclude patterns from file (use - to read from stdin)",
    args: { name: "file", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: "--exclude-if-present",
    description: "Exclude directories if filename is present",
    args: { name: "filename" },
    isRepeatable: true,
  },
  {
    name: "--expect-continue-timeout",
    description: "Timeout when using expect / 100-continue in HTTP",
    args: { name: "duration", default: "1s" },
  },
  {
    name: "--fast-list",
    description:
      "Use recursive list if available; uses more memory but fewer transactions",
  },
  {
    name: "--files-from",
    description:
      "Read list of source-file names from file (use - to read from stdin)",
    args: { name: "file", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: "--files-from-raw",
    description:
      "Read list of source-file names from file without any processing of lines (use - to read from stdin)",
    args: { name: "file", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: "--files-from0",
    description:
      "Read list of source-file names from file using NUL as separator (use - to read from stdin)",
    args: { name: "file", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: ["-f", "--filter"],
    description: "Add a file filtering rule",
    args: { name: "rule" },
    isRepeatable: true,
  },
  {
    name: "--filter-from",
    description:
      "Read file filtering patterns from a file (use - to read from stdin)",
    args: { name: "file", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: "--fix-case",
    description: "Force rename of case insensitive dest to match source",
  },
  {
    name: "--fs-cache-expire-duration",
    description: "Cache remotes for this long (0 to disable caching)",
    args: { name: "duration", default: "5m0s" },
  },
  {
    name: "--fs-cache-expire-interval",
    description: "Interval to check for expired remotes",
    args: { name: "duration", default: "1m0s" },
  },
  {
    name: "--hash-filter",
    description: "Partition filenames by hash k/n or randomly @/n",
    args: { name: "partition" },
  },
  {
    name: "--header",
    description: "Set HTTP header for all transactions",
    args: { name: "header" },
    isRepeatable: true,
  },
  {
    name: "--header-download",
    description: "Set HTTP header for download transactions",
    args: { name: "header" },
    isRepeatable: true,
  },
  {
    name: "--header-upload",
    description: "Set HTTP header for upload transactions",
    args: { name: "header" },
    isRepeatable: true,
  },
  {
    name: "--http-proxy",
    description: "HTTP proxy URL",
    args: { name: "url" },
  },
  {
    name: "--human-readable",
    description:
      "Print numbers in a human-readable format, sizes with suffix Ki|Mi|Gi|Ti|Pi",
  },
  {
    name: "--ignore-case",
    description: "Ignore case in filters (case insensitive)",
  },
  { name: "--ignore-case-sync", description: "Ignore case when synchronizing" },
  {
    name: "--ignore-checksum",
    description: "Skip post copy check of checksums",
  },
  {
    name: "--ignore-errors",
    description: "Delete even if there are I/O errors",
  },
  {
    name: "--ignore-existing",
    description: "Skip all files that exist on destination",
  },
  {
    name: "--ignore-size",
    description: "Ignore size when skipping use modtime or checksum",
  },
  {
    name: ["-I", "--ignore-times"],
    description:
      "Don't skip items that match size and time - transfer all unconditionally",
  },
  {
    name: "--immutable",
    description:
      "Do not modify files, fail if existing files have been modified",
  },
  {
    name: "--include",
    description: "Include files matching pattern",
    args: { name: "pattern" },
    isRepeatable: true,
  },
  {
    name: "--include-from",
    description:
      "Read file include patterns from file (use - to read from stdin)",
    args: { name: "file", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: "--inplace",
    description:
      "Download directly to destination file instead of atomic download to temp/rename",
  },
  { name: ["-i", "--interactive"], description: "Enable interactive mode" },
  {
    name: "--kv-lock-time",
    description: "Maximum time to keep key-value database locked by process",
    args: { name: "duration", default: "1s" },
  },
  {
    name: ["-l", "--links"],
    description:
      "Translate symlinks to/from regular files with a '.rclonelink' extension",
  },
  {
    name: "--list-cutoff",
    description:
      "To save memory, sort directory listings on disk above this threshold",
    args: { name: "int", default: "1000000" },
  },
  {
    name: "--log-file",
    description: "Log everything to this file",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--log-file-compress",
    description: "If set, compress rotated log files using gzip",
  },
  {
    name: "--log-file-max-age",
    description: 'Maximum duration to retain old log files (eg "7d")',
    args: { name: "duration", default: "0s" },
  },
  {
    name: "--log-file-max-backups",
    description: "Maximum number of old log files to retain",
    args: { name: "int" },
  },
  {
    name: "--log-file-max-size",
    description: 'Maximum size of the log file before it\'s rotated (eg "10M")',
    args: { name: "size", default: "off" },
  },
  {
    name: "--log-format",
    description: "Comma separated list of log format options",
    args: {
      name: "format",
      suggestions: [
        "date",
        "time",
        "microseconds",
        "UTC",
        "longfile",
        "shortfile",
        "pid",
        "nolevel",
        "json",
      ],
      default: "date,time",
    },
  },
  {
    name: "--log-level",
    description: "Log level",
    args: {
      name: "level",
      suggestions: [
        "EMERGENCY",
        "ALERT",
        "CRITICAL",
        "ERROR",
        "WARNING",
        "NOTICE",
        "INFO",
        "DEBUG",
        "OFF",
      ],
      default: "NOTICE",
    },
  },
  {
    name: "--log-systemd",
    description: "Activate systemd integration for the logger",
  },
  {
    name: "--low-level-retries",
    description: "Number of low level retries to do",
    args: { name: "count", default: "10" },
  },
  {
    name: "--max-age",
    description:
      "Only transfer files younger than this in s or suffix ms|s|m|h|d|w|M|y",
    args: { name: "duration", default: "off" },
  },
  {
    name: "--max-backlog",
    description: "Maximum number of objects in sync or check backlog",
    args: { name: "count", default: "10000" },
  },
  {
    name: "--max-buffer-memory",
    description:
      "If set, don't allocate more than this amount of memory as buffers",
    args: { name: "size", default: "off" },
  },
  {
    name: "--max-connections",
    description:
      "Maximum number of simultaneous backend API connections, 0 for unlimited",
    args: { name: "int" },
  },
  {
    name: "--max-delete",
    description: "When synchronizing, limit the number of deletes",
    args: { name: "count", default: "-1" },
  },
  {
    name: "--max-delete-size",
    description: "When synchronizing, limit the total size of deletes",
    args: { name: "size", default: "off" },
  },
  {
    name: "--max-depth",
    description: "If set limits the recursion depth to this",
    args: { name: "depth", default: "-1" },
  },
  {
    name: "--max-duration",
    description: "Maximum duration rclone will transfer data for",
    args: { name: "duration", default: "0s" },
  },
  {
    name: "--max-size",
    description:
      "Only transfer files smaller than this in KiB or suffix B|K|M|G|T|P",
    args: { name: "size", default: "off" },
  },
  {
    name: "--max-stats-groups",
    description:
      "Maximum number of stats groups to keep in memory, on max oldest is discarded",
    args: { name: "int", default: "1000" },
  },
  {
    name: "--max-transfer",
    description: "Maximum size of data to transfer",
    args: { name: "size", default: "off" },
  },
  {
    name: "--memprofile",
    description: "Write memory profile to file",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: ["-M", "--metadata"],
    description: "If set, preserve metadata when copying objects",
  },
  {
    name: "--metadata-exclude",
    description: "Exclude metadatas matching pattern",
    args: { name: "pattern" },
    isRepeatable: true,
  },
  {
    name: "--metadata-exclude-from",
    description:
      "Read metadata exclude patterns from file (use - to read from stdin)",
    args: { name: "file", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: "--metadata-filter",
    description: "Add a metadata filtering rule",
    args: { name: "rule" },
    isRepeatable: true,
  },
  {
    name: "--metadata-filter-from",
    description:
      "Read metadata filtering patterns from a file (use - to read from stdin)",
    args: { name: "file", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: "--metadata-include",
    description: "Include metadatas matching pattern",
    args: { name: "pattern" },
    isRepeatable: true,
  },
  {
    name: "--metadata-include-from",
    description:
      "Read metadata include patterns from file (use - to read from stdin)",
    args: { name: "file", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: "--metadata-mapper",
    description: "Program to run to transforming metadata before upload",
    args: { name: "command" },
  },
  {
    name: "--metadata-set",
    description: "Add metadata key=value when uploading",
    args: { name: "key=value" },
    isRepeatable: true,
  },
  {
    name: "--metrics-addr",
    description: "IPaddress:Port or :Port to bind server to",
    args: { name: "addr" },
    isRepeatable: true,
  },
  {
    name: "--metrics-allow-origin",
    description:
      "Origin which cross-domain request (CORS) can be executed from",
    args: { name: "origin" },
  },
  {
    name: "--metrics-baseurl",
    description: "Prefix for URLs - leave blank for root",
    args: { name: "baseurl" },
  },
  {
    name: "--metrics-cert",
    description:
      "TLS PEM key (concatenation of certificate and CA certificate)",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--metrics-client-ca",
    description: "Client certificate authority to verify clients with",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--metrics-htpasswd",
    description: "A htpasswd file - if not provided no authentication is done",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--metrics-key",
    description: "TLS PEM Private key",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--metrics-max-header-bytes",
    description: "Maximum size of request header",
    args: { name: "int", default: "4096" },
  },
  {
    name: "--metrics-min-tls-version",
    description: "Minimum TLS version that is acceptable",
    args: {
      name: "version",
      suggestions: ["tls1.0", "tls1.1", "tls1.2", "tls1.3"],
      default: "tls1.0",
    },
  },
  {
    name: "--metrics-pass",
    description: "Password for authentication",
    args: { name: "password" },
  },
  {
    name: "--metrics-realm",
    description: "Realm for authentication",
    args: { name: "realm" },
  },
  {
    name: "--metrics-response-header",
    description:
      "Set HTTP header for all responses, overriding existing values",
    args: { name: "header" },
    isRepeatable: true,
  },
  {
    name: "--metrics-salt",
    description: "Password hashing salt",
    args: { name: "salt" },
  },
  {
    name: "--metrics-server-read-timeout",
    description: "Timeout for server reading data",
    args: { name: "duration", default: "1h0m0s" },
  },
  {
    name: "--metrics-server-write-timeout",
    description: "Timeout for server writing data",
    args: { name: "duration", default: "1h0m0s" },
  },
  {
    name: "--metrics-template",
    description: "User-specified template",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--metrics-user",
    description: "User name for authentication",
    args: { name: "user" },
  },
  {
    name: "--metrics-user-from-header",
    description: "User name from a defined HTTP header",
    args: { name: "header" },
  },
  {
    name: "--min-age",
    description:
      "Only transfer files older than this in s or suffix ms|s|m|h|d|w|M|y",
    args: { name: "duration", default: "off" },
  },
  {
    name: "--min-size",
    description:
      "Only transfer files bigger than this in KiB or suffix B|K|M|G|T|P",
    args: { name: "size", default: "off" },
  },
  {
    name: "--modify-window",
    description: "Max time diff to be considered the same",
    args: { name: "duration", default: "1ns" },
  },
  {
    name: "--multi-thread-chunk-size",
    description:
      "Chunk size for multi-thread downloads / uploads, if not set by filesystem",
    args: { name: "size", default: "64Mi" },
  },
  {
    name: "--multi-thread-cutoff",
    description: "Use multi-thread downloads for files above this size",
    args: { name: "size", default: "256Mi" },
  },
  {
    name: "--multi-thread-streams",
    description: "Number of streams to use for multi-thread downloads",
    args: { name: "int", default: "4" },
  },
  {
    name: "--multi-thread-write-buffer-size",
    description: "In memory buffer size for writing when in multi-thread mode",
    args: { name: "size", default: "128Ki" },
  },
  {
    name: "--name-transform",
    description: "Transform paths during the copy process",
    args: { name: "transform" },
    isRepeatable: true,
  },
  {
    name: "--no-check-certificate",
    description: "Do not verify the server SSL certificate (insecure)",
  },
  {
    name: "--no-check-dest",
    description: "Don't check the destination, copy regardless",
  },
  {
    name: "--no-console",
    description: "Hide console window (supported on Windows only)",
  },
  {
    name: "--no-gzip-encoding",
    description: "Don't set Accept-Encoding: gzip",
  },
  {
    name: "--no-traverse",
    description: "Don't traverse destination file system on copy",
  },
  {
    name: "--no-unicode-normalization",
    description: "Don't normalize unicode characters in filenames",
  },
  {
    name: "--no-update-dir-modtime",
    description: "Don't update directory modification times",
  },
  {
    name: "--no-update-modtime",
    description: "Don't update destination modtime if files identical",
  },
  {
    name: "--order-by",
    description:
      "Instructions on how to order the transfers, e.g. 'size,descending'",
    args: { name: "order" },
  },
  {
    name: "--partial-suffix",
    description:
      "Add partial-suffix to temporary file name when --inplace is not used",
    args: { name: "suffix", default: ".partial" },
  },
  {
    name: "--password-command",
    description: "Command for supplying password for encrypted configuration",
    args: { name: "command" },
  },
  { name: ["-P", "--progress"], description: "Show progress during transfer" },
  {
    name: "--progress-terminal-title",
    description: "Show progress on the terminal title (requires -P/--progress)",
  },
  { name: ["-q", "--quiet"], description: "Print as little stuff as possible" },
  { name: "--rc", description: "Enable the remote control server" },
  {
    name: "--rc-addr",
    description: "IPaddress:Port or :Port to bind server to",
    args: { name: "addr" },
    isRepeatable: true,
  },
  {
    name: "--rc-allow-origin",
    description:
      "Origin which cross-domain request (CORS) can be executed from",
    args: { name: "origin" },
  },
  {
    name: "--rc-baseurl",
    description: "Prefix for URLs - leave blank for root",
    args: { name: "baseurl" },
  },
  {
    name: "--rc-cert",
    description:
      "TLS PEM key (concatenation of certificate and CA certificate)",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--rc-client-ca",
    description: "Client certificate authority to verify clients with",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--rc-enable-metrics",
    description:
      "Enable the Prometheus metrics path at the remote control server",
  },
  {
    name: "--rc-files",
    description: "Path to local files to serve on the HTTP server",
    args: { name: "dir", template: "folders" },
  },
  {
    name: "--rc-htpasswd",
    description: "A htpasswd file - if not provided no authentication is done",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--rc-job-expire-duration",
    description: "Expire finished async jobs older than this value",
    args: { name: "duration", default: "1m0s" },
  },
  {
    name: "--rc-job-expire-interval",
    description: "Interval to check for expired async jobs",
    args: { name: "duration", default: "10s" },
  },
  {
    name: "--rc-key",
    description: "TLS PEM Private key",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--rc-max-header-bytes",
    description: "Maximum size of request header",
    args: { name: "int", default: "4096" },
  },
  {
    name: "--rc-min-tls-version",
    description: "Minimum TLS version that is acceptable",
    args: {
      name: "version",
      suggestions: ["tls1.0", "tls1.1", "tls1.2", "tls1.3"],
      default: "tls1.0",
    },
  },
  {
    name: "--rc-no-auth",
    description: "Don't require auth for certain methods",
  },
  {
    name: "--rc-pass",
    description: "Password for authentication",
    args: { name: "password" },
  },
  {
    name: "--rc-realm",
    description: "Realm for authentication",
    args: { name: "realm" },
  },
  {
    name: "--rc-response-header",
    description:
      "Set HTTP header for all responses, overriding existing values",
    args: { name: "header" },
    isRepeatable: true,
  },
  {
    name: "--rc-salt",
    description: "Password hashing salt",
    args: { name: "salt" },
  },
  { name: "--rc-serve", description: "Enable the serving of remote objects" },
  {
    name: "--rc-serve-no-modtime",
    description: "Don't read the modification time (can speed things up)",
  },
  {
    name: "--rc-server-read-timeout",
    description: "Timeout for server reading data",
    args: { name: "duration", default: "1h0m0s" },
  },
  {
    name: "--rc-server-write-timeout",
    description: "Timeout for server writing data",
    args: { name: "duration", default: "1h0m0s" },
  },
  {
    name: "--rc-template",
    description: "User-specified template",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--rc-user",
    description: "User name for authentication",
    args: { name: "user" },
  },
  {
    name: "--rc-user-from-header",
    description: "User name from a defined HTTP header",
    args: { name: "header" },
  },
  {
    name: "--refresh-times",
    description: "Refresh the modtime of remote files",
  },
  {
    name: "--retries",
    description: "Retry operations this many times if they fail",
    args: { name: "count", default: "3" },
  },
  {
    name: "--retries-sleep",
    description:
      "Interval between retrying operations if they fail, e.g. 500ms, 60s, 5m (0 to disable)",
    args: { name: "duration", default: "0s" },
  },
  {
    name: "--server-side-across-configs",
    description:
      "Allow server-side operations (e.g. copy) to work across different configs",
  },
  {
    name: "--size-only",
    description: "Skip based on size only, not modtime or checksum",
  },
  {
    name: "--stats",
    description:
      "Interval between printing stats, e.g. 500ms, 60s, 5m (0 to disable)",
    args: { name: "duration", default: "1m0s" },
  },
  {
    name: "--stats-file-name-length",
    description: "Max file name length in stats (0 for no limit)",
    args: { name: "length", default: "45" },
  },
  {
    name: "--stats-log-level",
    description: "Log level to show --stats output",
    args: {
      name: "level",
      suggestions: [
        "EMERGENCY",
        "ALERT",
        "CRITICAL",
        "ERROR",
        "WARNING",
        "NOTICE",
        "INFO",
        "DEBUG",
        "OFF",
      ],
      default: "INFO",
    },
  },
  { name: "--stats-one-line", description: "Make the stats fit on one line" },
  {
    name: "--stats-one-line-date",
    description: "Enable --stats-one-line and add current date/time prefix",
  },
  {
    name: "--stats-one-line-date-format",
    description:
      'Enable --stats-one-line-date and use custom formatted date: Enclose date string in double quotes ("), see https://golang.org/pkg/time/#Time.Format',
    args: { name: "format" },
  },
  {
    name: "--stats-unit",
    description:
      "Show data rate in stats as either 'bits' or 'bytes' per second",
    args: { name: "unit", suggestions: ["bits", "bytes"], default: "bytes" },
  },
  {
    name: "--streaming-upload-cutoff",
    description:
      "Cutoff for switching to chunked upload if file size is unknown, upload starts after reaching cutoff or when file ends",
    args: { name: "size", default: "100Ki" },
  },
  {
    name: "--suffix",
    description: "Suffix to add to changed files",
    args: { name: "suffix" },
  },
  {
    name: "--suffix-keep-extension",
    description: "Preserve the extension when using --suffix",
  },
  { name: "--syslog", description: "Use Syslog for logging" },
  {
    name: "--syslog-facility",
    description: "Facility for syslog, e.g. KERN,USER",
    args: { name: "facility", default: "DAEMON" },
  },
  {
    name: "--temp-dir",
    description: "Directory rclone will use for temporary files",
    args: { name: "dir", template: "folders" },
  },
  {
    name: "--timeout",
    description: "IO idle timeout",
    args: { name: "duration", default: "5m0s" },
  },
  {
    name: "--tpslimit",
    description: "Limit HTTP transactions per second to this",
    args: { name: "float" },
  },
  {
    name: "--tpslimit-burst",
    description: "Max burst of transactions for --tpslimit",
    args: { name: "int", default: "1" },
  },
  {
    name: "--track-renames",
    description:
      "When synchronizing, track file renames and do a server-side move if possible",
  },
  {
    name: "--track-renames-strategy",
    description:
      "Strategies to use when synchronizing using track-renames hash|modtime|leaf",
    args: {
      name: "strategy",
      suggestions: ["hash", "modtime", "leaf"],
      default: "hash",
    },
  },
  {
    name: "--transfers",
    description: "Number of file transfers to run in parallel",
    args: { name: "count", default: "4" },
  },
  {
    name: ["-u", "--update"],
    description: "Skip files that are newer on the destination",
  },
  { name: "--use-cookies", description: "Enable session cookiejar" },
  { name: "--use-json-log", description: "Use json log format" },
  { name: "--use-mmap", description: "Use mmap allocator (see docs)" },
  {
    name: "--use-server-modtime",
    description: "Use server modified time instead of object metadata",
  },
  {
    name: "--user-agent",
    description: "Set the user-agent to a specified string",
    args: { name: "user-agent" },
  },
  {
    name: ["-v", "--verbose"],
    description: "Print lots more stuff (repeat for more)",
    isRepeatable: true,
  },
];
const globalOptions: Fig.Option[] = globalFlags.map((option) => ({
  ...option,
  isPersistent: true,
}));

const completionSpec: Fig.Spec = {
  name: "rclone",
  description: "The Swiss army knife of cloud storage",
  subcommands: [
    {
      name: "about",
      description: "Get quota information from the remote",
      args: remote,
      options: [
        {
          name: "--full",
          description: "Full numbers instead of human-readable",
        },
        { name: "--json", description: "Format output as JSON" },
      ],
    },
    {
      name: "archive",
      description: "Perform an action on an archive",
      subcommands: [
        {
          name: "create",
          description: "Archive source file(s) to destination",
          args: [sourcePath, { ...destPath, isOptional: true }],
          options: [
            {
              name: "--format",
              description:
                "Create the archive with format or guess from extension",
              args: {
                name: "format",
                suggestions: [
                  "zip",
                  "tar",
                  "tar.gz",
                  "tar.bz2",
                  "tar.lz",
                  "tar.lz4",
                  "tar.xz",
                  "tar.zst",
                  "tar.br",
                  "tar.sz",
                  "tar.mz",
                ],
              },
            },
            {
              name: "--full-path",
              description: "Set prefix for files in archive to source path",
            },
            {
              name: "--prefix",
              description:
                "Set prefix for files in archive to entered value or source path",
              args: { name: "prefix" },
            },
          ],
        },
        {
          name: "extract",
          description: "Extract archives from source to destination",
          args: [sourcePath, destPath],
        },
        {
          name: "list",
          description: "List archive contents from source",
          args: sourcePath,
          options: [
            { name: "--dirs-only", description: "Only list directories" },
            { name: "--files-only", description: "Only list files" },
            { name: "--long", description: "List extra attributes" },
            { name: "--plain", description: "Only list file names" },
          ],
        },
      ],
    },
    {
      name: "authorize",
      description: "Remote authorization",
      args: [
        { name: "backendname" },
        {
          name: "client_id",
          description: "Client ID, or a base64 encoded JSON blob of the config",
          isOptional: true,
        },
        { name: "client_secret", isOptional: true },
      ],
      options: [
        {
          name: "--auth-no-open-browser",
          description: "Do not automatically open auth link in default browser",
        },
        {
          name: "--template",
          description:
            "The path to a custom Go template for generating HTML responses",
          args: { name: "file", template: "filepaths" },
        },
      ],
    },
    {
      name: "backend",
      description: "Run a backend-specific command",
      args: [
        {
          name: "command",
          description: "Backend specific command, e.g. features, help",
        },
        remotePath,
        { name: "args", isOptional: true, isVariadic: true },
      ],
      options: [
        { name: "--json", description: "Always output in JSON format" },
        {
          name: ["-o", "--option"],
          description: "Option in the form name=value or name",
          args: { name: "option" },
          isRepeatable: true,
        },
      ],
    },
    {
      name: "bisync",
      description: "Perform bidirectional synchronization between two paths",
      args: [
        { ...sourcePath, name: "remote1:path1" },
        { ...destPath, name: "remote2:path2" },
      ],
      options: [
        {
          name: "--backup-dir1",
          description:
            "--backup-dir for Path1. Must be a non-overlapping path on the same remote",
          args: {
            name: "path",
            generators: remote.generators,
            template: "folders",
          },
        },
        {
          name: "--backup-dir2",
          description:
            "--backup-dir for Path2. Must be a non-overlapping path on the same remote",
          args: {
            name: "path",
            generators: remote.generators,
            template: "folders",
          },
        },
        {
          name: "--check-access",
          description:
            "Ensure expected RCLONE_TEST files are found on both Path1 and Path2 filesystems, else abort",
        },
        {
          name: "--check-filename",
          description: "Filename for --check-access (default: RCLONE_TEST)",
          args: { name: "filename" },
        },
        {
          name: "--check-sync",
          description:
            "Controls comparison of final listings: true|false|only (default: true)",
          args: {
            name: "mode",
            suggestions: ["true", "false", "only"],
            default: "true",
          },
        },
        {
          name: "--compare",
          description:
            "Comma-separated list of bisync-specific compare options ex. 'size,modtime,checksum' (default: 'size,modtime')",
          args: { name: "options" },
        },
        {
          name: "--conflict-loser",
          description:
            "Action to take on the loser of a sync conflict (when there is a winner) or on both files (when there is no winner): num, pathname, delete (default: num)",
          args: { name: "action", suggestions: ["num", "pathname", "delete"] },
        },
        {
          name: "--conflict-resolve",
          description:
            "Automatically resolve conflicts by preferring the version that is: none, path1, path2, newer, older, larger, smaller (default: none)",
          args: {
            name: "mode",
            suggestions: [
              "none",
              "path1",
              "path2",
              "newer",
              "older",
              "larger",
              "smaller",
            ],
            default: "none",
          },
        },
        {
          name: "--conflict-suffix",
          description:
            "Suffix to use when renaming a --conflict-loser. Can be either one string or two comma-separated strings to assign different suffixes to Path1/Path2. (default: 'conflict')",
          args: { name: "suffix" },
        },
        {
          name: "--create-empty-src-dirs",
          description:
            "Sync creation and deletion of empty directories. (Not compatible with --remove-empty-dirs)",
        },
        {
          name: "--download-hash",
          description:
            "Compute hash by downloading when otherwise unavailable. (warning: may be slow and use lots of data!)",
        },
        {
          name: "--filters-file",
          description: "Read filtering patterns from a file",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--force",
          description:
            "Bypass --max-delete safety check and run the sync. Consider using with --verbose",
        },
        {
          name: "--ignore-listing-checksum",
          description:
            "Do not use checksums for listings (add --ignore-checksum to additionally skip post-copy checksum checks)",
        },
        {
          name: "--max-delete-renames-aware",
          description:
            "Exclude tracked renames from the --max-delete safety check (requires --track-renames)",
        },
        {
          name: "--max-lock",
          description:
            "Consider lock files older than this to be expired (default: 0 (never expire)) (minimum: 2m)",
          args: { name: "duration", default: "0s" },
        },
        {
          name: "--no-cleanup",
          description:
            "Retain working files (useful for troubleshooting and testing)",
        },
        {
          name: "--no-slow-hash",
          description:
            "Ignore listing checksums only on backends where they are slow",
        },
        {
          name: "--recover",
          description:
            "Automatically recover from interruptions without requiring --resync",
        },
        {
          name: "--remove-empty-dirs",
          description: "Remove ALL empty directories at the final cleanup step",
        },
        {
          name: "--resilient",
          description:
            "Allow future runs to retry after certain less-serious errors, instead of requiring --resync",
        },
        {
          name: ["-1", "--resync"],
          description:
            "Performs the resync run. Equivalent to --resync-mode path1. Consider using --verbose or --dry-run first",
        },
        {
          name: "--resync-mode",
          description:
            "During resync, prefer the version that is: path1, path2, newer, older, larger, smaller (default: path1 if --resync, otherwise none for no resync.)",
          args: {
            name: "mode",
            suggestions: [
              "none",
              "path1",
              "path2",
              "newer",
              "older",
              "larger",
              "smaller",
            ],
            default: "none",
          },
        },
        {
          name: "--slow-hash-sync-only",
          description:
            "Ignore slow checksums for listings and deltas, but still consider them during sync calls",
        },
        {
          name: "--workdir",
          description:
            "Use custom working dir - useful for testing. (default: $HOME/.cache/rclone/bisync)",
          args: { name: "dir", template: "folders" },
        },
      ],
    },
    {
      name: "cat",
      description: "Concatenates any files and sends them to stdout",
      args: remotePath,
      options: [
        {
          name: "--count",
          description: "Only print N characters",
          args: { name: "int", default: "-1" },
        },
        {
          name: "--discard",
          description: "Discard the output instead of printing",
        },
        {
          name: "--head",
          description: "Only print the first N characters",
          args: { name: "int" },
        },
        {
          name: "--offset",
          description: "Start printing at offset N (or from end if -ve)",
          args: { name: "int" },
        },
        {
          name: "--separator",
          description:
            "Separator to use between objects when printing multiple files",
          args: { name: "separator" },
        },
        {
          name: "--tail",
          description: "Only print the last N characters",
          args: { name: "int" },
        },
      ],
    },
    {
      name: "check",
      description: "Checks the files in the source and destination match",
      args: [sourcePath, destPath],
      options: [
        {
          name: ["-C", "--checkfile"],
          description:
            "Treat source:path as a SUM file with hashes of given type",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--download",
          description: "Check by downloading rather than with hash",
        },
        {
          name: "--one-way",
          description: "Check one way only, source files must exist on remote",
        },
        ...reportOptions,
      ],
    },
    {
      name: "checksum",
      description: "Checks the files in the destination against a SUM file",
      args: [
        { name: "hash", suggestions: hashes },
        { name: "sumfile", template: "filepaths" },
        destPath,
      ],
      options: [
        { name: "--download", description: "Check by hashing the contents" },
        {
          name: "--one-way",
          description: "Check one way only, source files must exist on remote",
        },
        ...reportOptions,
      ],
    },
    {
      name: "cleanup",
      description: "Clean up the remote if possible",
      args: remotePath,
    },
    {
      name: ["completion", "genautocomplete"],
      description: "Output completion script for a given shell",
      subcommands: [
        {
          name: "bash",
          description: "Output bash completion script for rclone",
          args: outputFile,
        },
        {
          name: "fish",
          description: "Output fish completion script for rclone",
          args: outputFile,
        },
        {
          name: "powershell",
          description: "Output powershell completion script for rclone",
          args: outputFile,
        },
        {
          name: "zsh",
          description: "Output zsh completion script for rclone",
          args: outputFile,
        },
      ],
    },
    {
      name: "config",
      description: "Enter an interactive configuration session",
      subcommands: [
        {
          name: "create",
          description: "Create a new remote with name, type and options",
          args: [{ name: "name" }, { name: "type" }, keyValue],
          options: configOptions,
        },
        {
          name: "delete",
          description: "Delete an existing remote",
          args: remoteName,
        },
        {
          name: "disconnect",
          description: "Disconnects user from remote",
          args: remote,
        },
        { name: "dump", description: "Dump the config file as JSON" },
        {
          name: "edit",
          description: "Enter an interactive configuration session",
        },
        {
          name: "encryption",
          description:
            "Set, remove and check the encryption for the config file",
          subcommands: [
            {
              name: "check",
              description: "Check that the config file is encrypted",
            },
            {
              name: "remove",
              description: "Remove the config file encryption password",
            },
            {
              name: "set",
              description: "Set or change the config file encryption password",
            },
          ],
        },
        { name: "file", description: "Show path of configuration file in use" },
        {
          name: "password",
          description: "Update password in an existing remote",
          args: [remoteName, keyValue],
        },
        {
          name: "paths",
          description: "Show paths used for configuration, cache, temp etc",
        },
        {
          name: "providers",
          description: "List in JSON format all the providers and options",
        },
        {
          name: "reconnect",
          description: "Re-authenticates user with remote",
          args: remote,
        },
        {
          name: "redacted",
          description:
            "Print redacted (decrypted) config file, or the redacted config for a single remote",
          args: { ...remoteName, isOptional: true },
        },
        {
          name: "show",
          description:
            "Print (decrypted) config file, or the config for a single remote",
          args: { ...remoteName, isOptional: true },
        },
        {
          name: "string",
          description: "Print connection string for a single remote",
          args: remoteName,
        },
        { name: "touch", description: "Ensure configuration file exists" },
        {
          name: "unset",
          description: "Unset options in an existing remote",
          args: [remoteName, { name: "key", isVariadic: true }],
        },
        {
          name: "update",
          description: "Update options in an existing remote",
          args: [remoteName, keyValue],
          options: configOptions,
        },
        {
          name: "userinfo",
          description: "Prints info about logged in user of remote",
          args: remote,
          options: [{ name: "--json", description: "Format output as JSON" }],
        },
      ],
    },
    {
      name: "convmv",
      description: "Convert file and directory names in place",
      args: destPath,
      options: [
        {
          name: "--create-empty-src-dirs",
          description: "Create empty source dirs on destination after move",
        },
        {
          name: "--delete-empty-src-dirs",
          description: "Delete empty source dirs after move",
        },
      ],
    },
    {
      name: "copy",
      description: "Copy files from source to dest, skipping identical files",
      args: [sourcePath, destPath],
      options: [
        {
          name: "--create-empty-src-dirs",
          description: "Create empty source dirs on destination after copy",
        },
        ...reportOptions,
        ...transferReportOptions,
      ],
    },
    {
      name: "copyto",
      description: "Copy files from source to dest, skipping identical files",
      args: [sourcePath, destPath],
      options: [...reportOptions, ...transferReportOptions],
    },
    {
      name: "copyurl",
      description: "Copy the contents of the URL supplied content to dest:path",
      args: [{ name: "url" }, destPath],
      options: [
        {
          name: ["-a", "--auto-filename"],
          description:
            "Get the file name from the URL and use it for destination file path",
        },
        {
          name: "--header-filename",
          description: "Get the file name from the Content-Disposition header",
        },
        {
          name: "--no-clobber",
          description: "Prevent overwriting file with same name",
        },
        {
          name: ["-p", "--print-filename"],
          description: "Print the resulting name from --auto-filename",
        },
        {
          name: "--stdout",
          description: "Write the output to stdout rather than a file",
        },
        {
          name: "--urls",
          description: "Use a CSV file of links to process multiple URLs",
        },
      ],
    },
    {
      name: "cryptcheck",
      description: "Cryptcheck checks the integrity of an encrypted remote",
      args: [remotePath, cryptedremote],
      options: [
        {
          name: "--one-way",
          description: "Check one way only, source files must exist on remote",
        },
        ...reportOptions,
      ],
    },
    {
      name: "cryptdecode",
      description: "Cryptdecode returns unencrypted file names",
      args: [cryptedremote, { name: "encryptedfilename", isVariadic: true }],
      options: [
        {
          name: "--reverse",
          description: "Reverse cryptdecode, encrypts filenames",
        },
      ],
    },
    {
      name: "dedupe",
      description:
        "Interactively find duplicate filenames and delete/rename them",
      args: [
        { name: "mode", isOptional: true, suggestions: dedupeModes },
        remotePath,
      ],
      options: [
        {
          name: "--by-hash",
          description: "Find identical hashes rather than names",
        },
        {
          name: "--dedupe-mode",
          description: "Dedupe mode",
          args: {
            name: "mode",
            suggestions: dedupeModes,
            default: "interactive",
          },
        },
      ],
    },
    {
      name: "delete",
      description: "Remove the files in path",
      isDangerous: true,
      args: remotePath,
      options: [
        {
          name: "--rmdirs",
          description:
            "Rmdirs removes empty directories but leaves root intact",
        },
      ],
    },
    {
      name: "deletefile",
      description: "Remove a single file from remote",
      isDangerous: true,
      args: remotePath,
    },
    {
      name: "gendocs",
      description: "Output markdown docs for rclone to the directory supplied",
      args: { name: "output_directory", template: "folders" },
    },
    {
      name: "gitannex",
      description: "Speaks with git-annex over stdin/stdout",
    },
    {
      name: "gui",
      description: "Open the web based GUI",
      args: {
        name: "path",
        description: "Path to local files to serve",
        template: "folders",
        isOptional: true,
      },
      options: [
        {
          name: "--addr",
          description: "IPaddress:Port for the GUI server",
          args: { name: "addr" },
          isRepeatable: true,
        },
        {
          name: "--api-addr",
          description: "IPaddress:Port for the RC API server",
          args: { name: "addr" },
          isRepeatable: true,
        },
        {
          name: "--enable-metrics",
          description:
            "Enable OpenMetrics/Prometheus compatible endpoint at /metrics",
        },
        { name: "--no-auth", description: "Don't require auth for the RC API" },
        {
          name: "--no-open-browser",
          description: "Skip opening the browser automatically",
        },
        {
          name: "--pass",
          description: "Password for RC authentication",
          args: { name: "password" },
        },
        {
          name: "--user",
          description: "User name for RC authentication",
          args: { name: "user" },
        },
      ],
    },
    {
      name: "hashsum",
      description: "Produces a hashsum file for all the objects in the path",
      args: [
        { name: "hash", suggestions: hashes, isOptional: true },
        { ...remotePath, isOptional: true },
      ],
      options: hashsumOptions,
    },
    {
      name: "help",
      description: "Show help for rclone commands, flags and backends",
      subcommands: [
        {
          name: "backend",
          description: "List full info about a backend",
          args: { name: "name" },
        },
        {
          name: "backends",
          description: "List the backends available",
        },
        {
          name: "flags",
          description: "Show the global flags for rclone",
          args: { name: "filter", isOptional: true },
          options: [
            {
              name: "--group",
              description: "Only include flags from specific group",
              args: { name: "group" },
            },
            {
              name: "--name",
              description: "Apply filter only on flag names",
            },
          ],
        },
      ],
    },
    {
      name: "index",
      description: "Write static directory listings into a remote",
      args: remotePath,
      options: [
        {
          name: "--changed",
          description:
            "Only re-index directories affected by this changed path (directories end in /)",
          args: { name: "path" },
          isRepeatable: true,
        },
        {
          name: "--changed-combined",
          description:
            "Read changed paths from a sync --combined report (use - to read from stdin)",
          args: { name: "file", template: "filepaths" },
          isRepeatable: true,
        },
        {
          name: "--changed-from",
          description:
            "Read changed paths from file, one per line (use - to read from stdin)",
          args: { name: "file", template: "filepaths" },
          isRepeatable: true,
        },
        {
          name: "--changed-max-dirs",
          description:
            "Do a full index if a partial one would list more than this many directories (0 for no limit)",
          args: { name: "int" },
        },
        {
          name: "--dir-time",
          description: "How to work out the time shown for a directory",
          args: {
            name: "mode",
            suggestions: ["newest", "dir", "none"],
            default: "newest",
          },
        },
        {
          name: "--index-exclude",
          description: "Don't write listings in directories matching pattern",
          args: { name: "pattern" },
          isRepeatable: true,
        },
        {
          name: "--index-exclude-from",
          description:
            "Read directory exclude patterns from file (use - to read from stdin)",
          args: { name: "file", template: "filepaths" },
          isRepeatable: true,
        },
        {
          name: "--index-filter",
          description: "Add a rule for which directories get listings",
          args: { name: "rule" },
          isRepeatable: true,
        },
        {
          name: "--index-filter-from",
          description:
            "Read directory rules from a file (use - to read from stdin)",
          args: { name: "file", template: "filepaths" },
          isRepeatable: true,
        },
        {
          name: "--index-include",
          description: "Only write listings in directories matching pattern",
          args: { name: "pattern" },
          isRepeatable: true,
        },
        {
          name: "--index-include-from",
          description:
            "Read directory include patterns from file (use - to read from stdin)",
          args: { name: "file", template: "filepaths" },
          isRepeatable: true,
        },
        {
          name: "--index-max-depth",
          description:
            "Only write listings this many directories deep (-1 for no limit)",
          args: { name: "depth", default: "-1" },
        },
        {
          name: "--index-rewrite",
          description: "Write every listing even if it is unchanged",
        },
        {
          name: "--link-index",
          description:
            "Link to dir/NAME rather than dir/ for hosts without index documents",
        },
        {
          name: "--no-modtime",
          description: "Don't show modification times in listings",
        },
        {
          name: "--output",
          description: "Listing to write in each directory as NAME=FORMAT",
          args: { name: "name=format" },
          isRepeatable: true,
        },
        {
          name: "--print-template",
          description: "Print the built-in template for FORMAT and exit",
          args: { name: "format" },
        },
      ],
    },
    {
      name: "link",
      description: "Generate public link to file/folder",
      args: remotePath,
      options: [
        {
          name: "--expire",
          description: "The amount of time that the link will be valid",
          args: { name: "duration", default: "off" },
        },
        {
          name: "--unlink",
          description: "Remove existing public link to file/folder",
        },
      ],
    },
    {
      name: "listremotes",
      description:
        "List all the remotes in the config file and defined in environment variables",
      args: { name: "filter", isOptional: true },
      options: [
        {
          name: "--description",
          description: "Filter remotes by description",
          args: { name: "description" },
        },
        {
          name: "--exact",
          description:
            "Match filter strings exactly instead of using non-anchored glob matching",
        },
        { name: "--json", description: "Format output as JSON" },
        {
          name: "--long",
          description: "Show type and description in addition to name",
        },
        {
          name: "--name",
          description: "Filter remotes by name",
          args: { name: "name" },
        },
        {
          name: "--source",
          description: "Filter remotes by source, e.g. 'file' or 'environment'",
          args: { name: "source" },
        },
        {
          name: "--type",
          description: "Filter remotes by type",
          args: { name: "type" },
        },
      ],
    },
    {
      name: "ls",
      description: "List the objects in the path with size and path",
      args: remotePath,
    },
    {
      name: "lsd",
      description: "List all directories/containers/buckets in the path",
      args: remotePath,
      options: [
        {
          name: ["-R", "--recursive"],
          description: "Recurse into the listing",
        },
      ],
    },
    {
      name: "lsf",
      description:
        "List directories and objects in remote:path formatted for parsing",
      args: remotePath,
      options: [
        {
          name: "--absolute",
          description: "Put a leading / in front of path names",
        },
        { name: "--csv", description: "Output in CSV format" },
        {
          name: ["-d", "--dir-slash"],
          description: "Append a slash to directory names (default true)",
        },
        { name: "--dirs-only", description: "Only list directories" },
        { name: "--files-only", description: "Only list files" },
        {
          name: ["-F", "--format"],
          description: "Output format - see lsf help for details",
          args: { name: "format", suggestions: lsfFormats, default: "p" },
        },
        {
          name: "--hash",
          description:
            "Use this hash when h is used in the format MD5|SHA-1|DropboxHash",
          args: { name: "hash", suggestions: hashes, default: "md5" },
        },
        {
          name: ["-R", "--recursive"],
          description: "Recurse into the listing",
        },
        {
          name: ["-s", "--separator"],
          description: "Separator for the items in the format",
          args: { name: "separator", default: ";" },
        },
        {
          name: ["-t", "--time-format"],
          description:
            "Specify a custom time format - see docs for details (default: 2006-01-02 15:04:05)",
          args: { name: "format" },
        },
      ],
    },
    {
      name: "lsjson",
      description: "List directories and objects in the path in JSON format",
      args: remotePath,
      options: [
        {
          name: "--dirs-only",
          description: "Show only directories in the listing",
        },
        { name: "--encrypted", description: "Show the encrypted names" },
        { name: "--files-only", description: "Show only files in the listing" },
        {
          name: "--hash",
          description: "Include hashes in the output (may take longer)",
        },
        {
          name: "--hash-type",
          description: "Show only this hash type (may be repeated)",
          args: { name: "hash", suggestions: hashes },
          isRepeatable: true,
        },
        {
          name: "--no-mimetype",
          description: "Don't read the mime type (can speed things up)",
        },
        {
          name: "--no-modtime",
          description: "Don't read the modification time (can speed things up)",
        },
        {
          name: "--original",
          description: "Show the ID of the underlying Object",
        },
        {
          name: ["-R", "--recursive"],
          description: "Recurse into the listing",
        },
        {
          name: "--stat",
          description: "Just return the info for the pointed to file",
        },
      ],
    },
    {
      name: "lsl",
      description:
        "List the objects in path with modification time, size and path",
      args: remotePath,
    },
    {
      name: "md5sum",
      description: "Produces an md5sum file for all the objects in the path",
      args: remotePath,
      options: hashsumOptions,
    },
    {
      name: "mkdir",
      description: "Make the path if it doesn't already exist",
      args: remotePath,
    },
    {
      name: "mount",
      description: "Mount the remote as file system on a mountpoint",
      args: [remotePath, mountpoint],
      options: [...vfsOptions, ...mountOptions],
    },
    {
      name: "move",
      description: "Move files from source to dest",
      args: [sourcePath, destPath],
      options: [
        {
          name: "--create-empty-src-dirs",
          description: "Create empty source dirs on destination after move",
        },
        {
          name: "--delete-empty-src-dirs",
          description: "Delete empty source dirs after move",
        },
        ...reportOptions,
        ...transferReportOptions,
      ],
    },
    {
      name: "moveto",
      description: "Move file or directory from source to dest",
      args: [sourcePath, destPath],
      options: [...reportOptions, ...transferReportOptions],
    },
    {
      name: "ncdu",
      description: "Explore a remote with a text based user interface",
      args: remotePath,
    },
    {
      name: "nfsmount",
      description: "Mount the remote as file system on a mountpoint",
      args: [remotePath, mountpoint],
      options: [
        {
          name: "--addr",
          description: "IPaddress:Port or :Port to bind server to",
          args: { name: "addr" },
        },
        {
          name: "--nfs-mount-path",
          description:
            "Subpath of the remote to mount via NFS (must be an existing directory)",
          args: { name: "path" },
        },
        {
          name: "--sudo",
          description: "Use sudo to run the mount/umount commands as root",
        },
        ...vfsOptions,
        ...mountOptions,
        ...nfsOptions,
      ],
    },
    {
      name: "obscure",
      description: "Obscure password for use in the rclone config file",
      args: { name: "password" },
    },
    {
      name: "purge",
      description: "Remove the path and all of its contents",
      isDangerous: true,
      args: remotePath,
    },
    {
      name: "rc",
      description: "Run a command against a running rclone",
      args: [
        {
          name: "command",
          description: "Remote control command, e.g. core/stats",
        },
        {
          name: "parameter",
          description: "Parameter as key=value",
          isOptional: true,
          isVariadic: true,
        },
      ],
      options: [
        {
          name: ["-a", "--arg"],
          description: 'Argument placed in the "arg" array',
          args: { name: "arg" },
          isRepeatable: true,
        },
        {
          name: "--json",
          description: "Input JSON - use instead of key=value args",
          args: { name: "json" },
        },
        {
          name: "--loopback",
          description: "If set connect to this rclone instance not via HTTP",
        },
        {
          name: "--no-output",
          description: "If set, don't output the JSON result",
        },
        {
          name: ["-o", "--opt"],
          description:
            'Option in the form name=value or name placed in the "opt" array',
          args: { name: "option" },
          isRepeatable: true,
        },
        {
          name: "--pass",
          description: "Password to use to connect to rclone remote control",
          args: { name: "password" },
        },
        {
          name: "--unix-socket",
          description:
            "Path to a unix domain socket to dial to, instead of opening a TCP connection directly",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--url",
          description: "URL to connect to rclone remote control",
          args: { name: "url", default: "http://localhost:5572/" },
        },
        {
          name: "--user",
          description: "Username to use to rclone remote control",
          args: { name: "user" },
        },
      ],
    },
    {
      name: "rcat",
      description: "Copies standard input to file on remote",
      args: remotePath,
      options: [
        {
          name: "--size",
          description: "File size hint to preallocate",
          args: { name: "int", default: "-1" },
        },
      ],
    },
    {
      name: "rcd",
      description: "Run rclone listening to remote control commands only",
      args: {
        name: "path",
        description: "Path to files to serve",
        template: "folders",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "rmdir",
      description: "Remove the empty directory at path",
      args: remotePath,
    },
    {
      name: "rmdirs",
      description: "Remove empty directories under the path",
      args: remotePath,
      options: [
        {
          name: "--leave-root",
          description: "Do not remove root directory if empty",
        },
      ],
    },
    {
      name: ["selfupdate", "self-update"],
      description: "Update the rclone binary",
      options: [
        { name: "--beta", description: "Install beta release" },
        {
          name: "--check",
          description: "Check for latest release, do not download",
        },
        {
          name: "--output",
          description:
            "Save the downloaded binary at a given path (default: replace running binary)",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--package",
          description: "Package format: zip|deb|rpm (default: zip)",
          args: { name: "format", suggestions: ["zip", "deb", "rpm"] },
        },
        {
          name: "--stable",
          description: "Install stable release (this is the default)",
        },
        {
          name: "--version",
          description: "Install the given rclone version (default: latest)",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "serve",
      description: "Serve a remote over a protocol",
      subcommands: [
        {
          name: "dlna",
          description: "Serve remote:path over DLNA",
          args: remotePath,
          options: [
            {
              name: "--addr",
              description:
                "The ip:port or :port to bind the DLNA http server to",
              args: { name: "addr" },
            },
            {
              name: "--announce-interval",
              description: "The interval between SSDP announcements",
              args: { name: "duration", default: "12m0s" },
            },
            {
              name: "--interface",
              description:
                "The interface to use for SSDP (repeat as necessary)",
              args: { name: "interface" },
              isRepeatable: true,
            },
            {
              name: "--log-trace",
              description: "Enable trace logging of SOAP traffic",
            },
            {
              name: "--name",
              description: "Name of DLNA server",
              args: { name: "name" },
            },
            ...vfsOptions,
          ],
        },
        {
          name: "docker",
          description: "Serve any remote on docker's volume plugin API",
          options: [
            {
              name: "--base-dir",
              description: "Base directory for volumes",
              args: { name: "dir", template: "folders" },
            },
            {
              name: "--forget-state",
              description: "Skip restoring previous state",
            },
            { name: "--no-spec", description: "Do not write spec file" },
            {
              name: "--socket-addr",
              description:
                "Address <host:port> or absolute path (default: /run/docker/plugins/rclone.sock)",
              args: { name: "address" },
            },
            {
              name: "--socket-gid",
              description: "GID for unix socket (default: current process GID)",
              args: { name: "gid" },
            },
            ...vfsOptions,
            ...mountOptions,
          ],
        },
        {
          name: "ftp",
          description: "Serve remote:path over FTP",
          args: remotePath,
          options: [
            {
              name: "--addr",
              description: "IPaddress:Port or :Port to bind server to",
              args: { name: "addr" },
            },
            {
              name: "--auth-proxy",
              description:
                "A program to use to create the backend from the auth",
              args: { name: "program", template: "filepaths" },
            },
            {
              name: "--cert",
              description:
                "TLS PEM key (concatenation of certificate and CA certificate)",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--key",
              description: "TLS PEM Private key",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--pass",
              description:
                "Password for authentication (empty value allow every password)",
              args: { name: "password" },
            },
            {
              name: "--passive-port",
              description: "Passive port range to use",
              args: { name: "range", default: "30000-32000" },
            },
            {
              name: "--public-ip",
              description:
                "Public IP address to advertise for passive connections",
              args: { name: "ip" },
            },
            {
              name: "--user",
              description: "User name for authentication",
              args: { name: "user", default: "anonymous" },
            },
            ...vfsOptions,
          ],
        },
        {
          name: "http",
          description: "Serve the remote over HTTP",
          args: remotePath,
          options: [
            {
              name: "--addr",
              description: "IPaddress:Port or :Port to bind server to",
              args: { name: "addr" },
              isRepeatable: true,
            },
            {
              name: "--auth-proxy",
              description:
                "A program to use to create the backend from the auth",
              args: { name: "program", template: "filepaths" },
            },
            {
              name: "--disable-dir-list",
              description:
                "Disable HTML directory list on GET request for a directory",
            },
            {
              name: "--disable-zip",
              description: "Disable zip download of directories",
            },
            {
              name: "--template",
              description: "User-specified template",
              args: { name: "file", template: "filepaths" },
            },
            ...vfsOptions,
            ...serverOptions,
          ],
        },
        {
          name: "nfs",
          description: "Serve the remote as an NFS mount",
          args: remotePath,
          options: [
            {
              name: "--addr",
              description: "IPaddress:Port or :Port to bind server to",
              args: { name: "addr" },
            },
            ...vfsOptions,
            ...nfsOptions,
          ],
        },
        {
          name: "restic",
          description: "Serve the remote for restic's REST API",
          args: remotePath,
          options: [
            {
              name: "--addr",
              description: "IPaddress:Port or :Port to bind server to",
              args: { name: "addr" },
              isRepeatable: true,
            },
            {
              name: "--append-only",
              description: "Disallow deletion of repository data",
            },
            {
              name: "--cache-objects",
              description: "Cache listed objects (default true)",
            },
            {
              name: "--private-repos",
              description: "Users can only access their private repo",
            },
            {
              name: "--stdio",
              description: "Run an HTTP2 server on stdin/stdout",
            },
            ...serverOptions,
          ],
        },
        {
          name: "s3",
          description: "Serve remote:path over s3",
          args: remotePath,
          options: [
            {
              name: "--addr",
              description: "IPaddress:Port or :Port to bind server to",
              args: { name: "addr" },
              isRepeatable: true,
            },
            {
              name: "--auth-key",
              description:
                "Set key pair for v4 authorization: access_key_id,secret_access_key",
              args: { name: "key_pair" },
              isRepeatable: true,
            },
            {
              name: "--auth-proxy",
              description:
                "A program to use to create the backend from the auth",
              args: { name: "program", template: "filepaths" },
            },
            {
              name: "--directory-markers",
              description: "List every directory as a directory marker object",
            },
            {
              name: "--disable-multipart-streaming",
              description:
                "Buffer multipart uploads in memory instead of streaming them to the backend",
            },
            {
              name: "--etag-hash",
              description:
                "Which hash to use for the ETag, or auto or blank for off",
              args: {
                name: "hash",
                suggestions: ["auto", ...hashes],
                default: "MD5",
              },
            },
            {
              name: "--force-path-style",
              description:
                "If true use path style access if false use virtual hosted style (default true)",
            },
            {
              name: "--metadata-max-objects",
              description:
                "Maximum number of objects of a user whose metadata is kept in memory, 0 for unlimited",
              args: { name: "int", default: "100000" },
            },
            {
              name: "--multipart-expiry",
              description:
                "Abort incomplete multipart uploads idle for longer than this, 0 to keep forever",
              args: { name: "duration", default: "1d" },
            },
            {
              name: "--multipart-max-uploads",
              description:
                "Maximum number of streamed multipart uploads a user can have in progress at once, 0 for unlimited",
              args: { name: "int", default: "1000" },
            },
            {
              name: "--multipart-streaming-buffer-limit",
              description:
                "Maximum memory buffered per streamed multipart upload for parts arriving out of order, 0 for unlimited",
              args: { name: "size", default: "256Mi" },
            },
            {
              name: "--multipart-streaming-buffer-total",
              description:
                "Maximum memory buffered by all the streamed multipart uploads of a user for parts arriving out of order, 0 for unlimited",
              args: { name: "size", default: "1Gi" },
            },
            {
              name: "--no-cleanup",
              description: "Deprecated: use --directory-markers instead",
            },
            ...vfsOptions,
            ...serverOptions,
          ],
        },
        {
          name: "sftp",
          description: "Serve the remote over SFTP",
          args: remotePath,
          options: [
            {
              name: "--addr",
              description: "IPaddress:Port or :Port to bind server to",
              args: { name: "addr" },
            },
            {
              name: "--auth-proxy",
              description:
                "A program to use to create the backend from the auth",
              args: { name: "program", template: "filepaths" },
            },
            {
              name: "--authorized-keys",
              description: "Authorized keys file",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--key",
              description:
                "SSH private host key file (Can be multi-valued, leave blank to auto generate)",
              args: { name: "file", template: "filepaths" },
              isRepeatable: true,
            },
            {
              name: "--no-auth",
              description: "Allow connections with no authentication if set",
            },
            {
              name: "--pass",
              description: "Password for authentication",
              args: { name: "password" },
            },
            {
              name: "--stdio",
              description: "Run an sftp server on stdin/stdout",
            },
            {
              name: "--user",
              description: "User name for authentication",
              args: { name: "user" },
            },
            ...vfsOptions,
          ],
        },
        {
          name: "webdav",
          description: "Serve remote:path over WebDAV",
          args: remotePath,
          options: [
            {
              name: "--addr",
              description: "IPaddress:Port or :Port to bind server to",
              args: { name: "addr" },
              isRepeatable: true,
            },
            {
              name: "--auth-proxy",
              description:
                "A program to use to create the backend from the auth",
              args: { name: "program", template: "filepaths" },
            },
            {
              name: "--disable-dir-list",
              description:
                "Disable HTML directory list on GET request for a directory",
            },
            {
              name: "--disable-zip",
              description: "Disable zip download of directories",
            },
            {
              name: "--etag-hash",
              description:
                "Which hash to use for the ETag, or auto or blank for off",
              args: { name: "hash", suggestions: ["auto", ...hashes] },
            },
            {
              name: "--template",
              description: "User-specified template",
              args: { name: "file", template: "filepaths" },
            },
            ...vfsOptions,
            ...serverOptions,
          ],
        },
      ],
    },
    {
      name: "settier",
      description: "Changes storage class/tier of objects in remote",
      args: [
        {
          name: "tier",
          description: "Storage class or tier, e.g. Hot, Cool, Archive",
        },
        remotePath,
      ],
    },
    {
      name: "sha1sum",
      description: "Produces an sha1sum file for all the objects in the path",
      args: remotePath,
      options: hashsumOptions,
    },
    {
      name: "size",
      description: "Prints the total size and number of objects in remote:path",
      args: remotePath,
      options: [{ name: "--json", description: "Format output as JSON" }],
    },
    {
      name: "sync",
      description: "Make source and dest identical, modifying destination only",
      args: [sourcePath, destPath],
      options: [
        {
          name: "--create-empty-src-dirs",
          description: "Create empty source dirs on destination after sync",
        },
        ...reportOptions,
        ...transferReportOptions,
      ],
    },
    {
      name: "test",
      description: "Run a test command",
      subcommands: [
        {
          name: "changenotify",
          description:
            "Log any change notify requests for the remote passed in",
          args: remote,
          options: [
            {
              name: "--poll-interval",
              description: "Time to wait between polling for changes",
              args: { name: "duration", default: "10s" },
            },
          ],
        },
        {
          name: "histogram",
          description: "Makes a histogram of file name characters",
          args: { ...remotePath, isOptional: true },
        },
        {
          name: "info",
          description: "Discovers file name or other limitations for paths",
          args: { ...remotePath, isVariadic: true },
          options: [
            { name: "--all", description: "Run all tests" },
            {
              name: "--check-base32768",
              description: "Check can store all possible base32768 characters",
            },
            {
              name: "--check-control",
              description: "Check control characters",
            },
            {
              name: "--check-length",
              description: "Check max filename length",
            },
            {
              name: "--check-normalization",
              description: "Check UTF-8 Normalization",
            },
            {
              name: "--check-streaming",
              description: "Check uploads with indeterminate file size",
            },
            {
              name: "--keep-test-files",
              description: "Keep test files after execution",
            },
            {
              name: "--upload-wait",
              description: "Wait after writing a file",
              args: { name: "duration", default: "0s" },
            },
            {
              name: "--write-json",
              description: "Write results to file",
              args: { name: "file", template: "filepaths" },
            },
          ],
        },
        {
          name: "makefile",
          description: "Make files with random contents of the size given",
          args: [
            { name: "size" },
            { name: "file", template: "filepaths", isVariadic: true },
          ],
          options: testFileOptions,
        },
        {
          name: "makefiles",
          description: "Make a random file hierarchy in a directory",
          args: { name: "dir", template: "folders" },
          options: [
            {
              name: "--files",
              description: "Number of files to create",
              args: { name: "int", default: "1000" },
            },
            {
              name: "--files-per-directory",
              description: "Average number of files per directory",
              args: { name: "int", default: "10" },
            },
            {
              name: "--flat",
              description: "If set create all files in the root directory",
            },
            {
              name: "--max-file-size",
              description: "Maximum size of files to create",
              args: { name: "size", default: "100" },
            },
            {
              name: "--max-name-length",
              description: "Maximum size of file names",
              args: { name: "int", default: "12" },
            },
            {
              name: "--min-file-size",
              description: "Minimum size of file to create",
              args: { name: "size" },
            },
            {
              name: "--min-name-length",
              description: "Minimum size of file names",
              args: { name: "int", default: "4" },
            },
            ...testFileOptions,
          ],
        },
        {
          name: "memory",
          description:
            "Load all the objects at remote:path into memory and report memory stats",
          args: remotePath,
        },
        {
          name: "speed",
          description: "Run a speed test to the remote",
          args: remote,
          options: [
            {
              name: "--file-cap",
              description: "Maximum number of files to use in each test",
              args: { name: "int", default: "100" },
            },
            {
              name: "--json",
              description: "Output only results in JSON format",
            },
            {
              name: "--large",
              description: "Size of large files",
              args: { name: "size", default: "1Gi" },
            },
            {
              name: "--medium",
              description: "Size of medium files",
              args: { name: "size", default: "10Mi" },
            },
            {
              name: "--small",
              description: "Size of small files",
              args: { name: "size", default: "1Ki" },
            },
            {
              name: "--test-time",
              description: "Length for each test to run",
              args: { name: "duration", default: "15s" },
            },
            ...testFileOptions,
          ],
        },
      ],
    },
    {
      name: "touch",
      description: "Create new file or change file modification time",
      args: remotePath,
      options: [
        {
          name: "--localtime",
          description: "Use localtime for timestamp, not UTC",
        },
        {
          name: ["-C", "--no-create"],
          description:
            "Do not create the file if it does not exist (implied with --recursive)",
        },
        {
          name: ["-R", "--recursive"],
          description: "Recursively touch all files",
        },
        {
          name: ["-t", "--timestamp"],
          description: "Use specified time instead of the current time of day",
          args: { name: "time" },
        },
      ],
    },
    {
      name: "tree",
      description: "List the contents of the remote in a tree like fashion",
      args: remotePath,
      options: [
        {
          name: ["-a", "--all"],
          description: "All files are listed (list . files too)",
        },
        { name: ["-d", "--dirs-only"], description: "List directories only" },
        {
          name: "--dirsfirst",
          description: "List directories before files (-U disables)",
        },
        {
          name: "--full-path",
          description: "Print the full path prefix for each file",
        },
        {
          name: "--level",
          description: "Descend only level directories deep",
          args: { name: "depth" },
        },
        {
          name: ["-D", "--modtime"],
          description: "Print the date of last modification",
        },
        { name: "--noindent", description: "Don't print indentation lines" },
        {
          name: "--noreport",
          description: "Turn off file/directory count at end of tree listing",
        },
        {
          name: ["-o", "--output"],
          description: "Output to file instead of stdout",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: ["-p", "--protections"],
          description: "Print the protections for each file",
        },
        {
          name: ["-Q", "--quote"],
          description: "Quote filenames with double quotes",
        },
        {
          name: ["-s", "--size"],
          description: "Print the size in bytes of each file",
        },
        {
          name: "--sort",
          description: "Select sort: name,version,size,mtime,ctime",
          args: {
            name: "sort",
            suggestions: ["name", "version", "size", "mtime", "ctime"],
          },
        },
        {
          name: "--sort-ctime",
          description: "Sort files by last status change time",
        },
        {
          name: ["-t", "--sort-modtime"],
          description: "Sort files by last modification time",
        },
        {
          name: ["-r", "--sort-reverse"],
          description: "Reverse the order of the sort",
        },
        { name: ["-U", "--unsorted"], description: "Leave files unsorted" },
        {
          name: "--version",
          description: "Sort files alphanumerically by version",
        },
      ],
    },
    {
      name: "version",
      description: "Show the version number",
      options: [
        { name: "--check", description: "Check for new version" },
        { name: "--deps", description: "Show the Go dependencies" },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for rclone commands, flags and backends",
      isPersistent: true,
    },
    {
      name: ["--version", "-V"],
      description: "Print the version number",
    },
    ...globalOptions,
  ],
};

export default completionSpec;
