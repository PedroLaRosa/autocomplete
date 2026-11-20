// rsync v3.5.2 (latest tag of RsyncProject/rsync, released 2026-11-04, same as the Homebrew formula, 2026-11-20).
// Source: static read of the tagged source (options.c popt tables and --info/--debug word tables, rsync.1.md
// option summary and per-option text, NEWS.md); the rsync binary was not built or run (sandbox policy).
// Daemon-only options (--daemon, --config, --dparam, --no-detach) are documented in rsync.1.md DAEMON OPTIONS.
// Internal options (--server, --sender, --qsort, --old-compress, --new-compress) are deliberately left out.
import { knownHosts, configHosts } from "./ssh";

const infoArg: Fig.Arg = {
  name: "FLAGS",
  suggestions: [
    { name: "BACKUP", description: "Mention files backed up" },
    {
      name: "COPY",
      description: "Mention files copied locally on the receiving side",
    },
    { name: "DEL", description: "Mention deletions on the receiving side" },
    {
      name: "FLIST",
      description: "Mention file-list receiving/sending (levels 1-2)",
    },
    {
      name: "MISC",
      description: "Mention miscellaneous information (levels 1-2)",
    },
    {
      name: "MOUNT",
      description: "Mention mounts that were found or skipped",
    },
    {
      name: "NAME",
      description: "Mention 1) updated file/dir names, 2) unchanged names",
    },
    {
      name: "NONREG",
      description: "Mention skipped non-regular files (default 1, 0 disables)",
    },
    {
      name: "PROGRESS",
      description: "Mention 1) per-file progress or 2) total transfer progress",
    },
    {
      name: "REMOVE",
      description: "Mention files removed on the sending side",
    },
    {
      name: "SKIP",
      description:
        "Mention files skipped due to transfer overrides (levels 1-2)",
    },
    {
      name: "STATS",
      description: "Mention statistics at end of run (levels 1-3)",
    },
    { name: "SYMSAFE", description: "Mention symlinks that are unsafe" },
    { name: "ALL", description: "Set all --info options (e.g. all4)" },
    {
      name: "NONE",
      description: "Silence all --info options (same as all0)",
    },
    { name: "HELP", description: "Output this help message" },
  ],
};

const debugArg: Fig.Arg = {
  name: "FLAGS",
  suggestions: [
    { name: "ACL", description: "Debug extra ACL info" },
    { name: "BACKUP", description: "Debug backup actions (levels 1-2)" },
    { name: "BIND", description: "Debug socket bind actions" },
    { name: "CHDIR", description: "Debug when the current directory changes" },
    { name: "CONNECT", description: "Debug connection events (levels 1-2)" },
    {
      name: "CMD",
      description: "Debug commands+options that are issued (levels 1-2)",
    },
    { name: "DEL", description: "Debug delete actions (levels 1-3)" },
    {
      name: "DELTASUM",
      description: "Debug delta-transfer checksumming (levels 1-4)",
    },
    { name: "DUP", description: "Debug weeding of duplicate names" },
    { name: "EXIT", description: "Debug exit events (levels 1-3)" },
    { name: "FILTER", description: "Debug filter actions (levels 1-3)" },
    { name: "FLIST", description: "Debug file-list operations (levels 1-4)" },
    { name: "FUZZY", description: "Debug fuzzy scoring (levels 1-2)" },
    { name: "GENR", description: "Debug generator functions" },
    { name: "HASH", description: "Debug hashtable code" },
    { name: "HLINK", description: "Debug hard-link actions (levels 1-3)" },
    {
      name: "ICONV",
      description: "Debug iconv character conversions (levels 1-2)",
    },
    { name: "IO", description: "Debug I/O routines (levels 1-4)" },
    { name: "NSTR", description: "Debug negotiation strings" },
    {
      name: "OWN",
      description: "Debug ownership changes in users & groups (levels 1-2)",
    },
    { name: "PROTO", description: "Debug protocol information" },
    { name: "RECV", description: "Debug receiver functions" },
    { name: "SEND", description: "Debug sender functions" },
    {
      name: "TIME",
      description: "Debug setting of modified times (levels 1-2)",
    },
    { name: "ALL", description: "Set all --debug options (e.g. all4)" },
    {
      name: "NONE",
      description: "Silence all --debug options (same as all0)",
    },
    { name: "HELP", description: "Output this help message" },
  ],
};

const folderArg = (name: string): Fig.Arg => ({ name, template: "folders" });
const fileArg = (name: string): Fig.Arg => ({ name, template: "filepaths" });

const completionSpec: Fig.Spec = {
  name: "rsync",
  description:
    "Rsync is a file transfer program capable of efficient remote update via a fast differencing algorithm",
  args: [
    {
      name: "SRC",
      isVariadic: true,
      generators: [
        knownHosts,
        configHosts,
        { template: ["history", "filepaths", "folders"] },
      ],
    },
    {
      name: "DEST",
      generators: [
        knownHosts,
        configHosts,
        { template: ["history", "filepaths", "folders"] },
      ],
    },
  ],
  options: [
    {
      name: ["-v", "--verbose"],
      description: "Increase verbosity",
      isRepeatable: true,
    },
    {
      name: "--info",
      description: "Fine-grained informational verbosity",
      requiresSeparator: true,
      args: infoArg,
    },
    {
      name: "--debug",
      description: "Fine-grained debug verbosity",
      requiresSeparator: true,
      args: debugArg,
    },
    {
      name: "--stderr",
      description: "Change stderr output mode (default: errors)",
      requiresSeparator: true,
      args: {
        name: "MODE",
        suggestions: [
          {
            name: "errors",
            description: "Send errors directly to stderr from every process",
          },
          {
            name: "all",
            description: "Write all messages directly to stderr",
          },
          {
            name: "client",
            description: "Send all messages to the client side",
          },
        ],
      },
    },
    {
      name: "--msgs2stderr",
      description: "Same as --stderr=all (use --stderr instead)",
      deprecated: true,
    },
    {
      name: ["--quiet", "-q"],
      description: "Suppress non-error messages",
    },
    {
      name: "--no-motd",
      description: "Suppress daemon-mode MOTD",
    },
    {
      name: ["--checksum", "-c"],
      description: "Skip based on checksum, not mod-time & size",
    },
    {
      name: ["-a", "--archive"],
      description: "Archive mode; equals -rlptgoD (no -A,-X,-U,-N,-H)",
    },
    {
      name: "--no-OPTION",
      description: "Turn off an implied OPTION (e.g. --no-D)",
    },
    { name: ["-r", "--recursive"], description: "Recurse into directories" },
    {
      name: ["--inc-recursive", "--i-r"],
      description: "Enable incremental recursion",
    },
    {
      name: ["--no-inc-recursive", "--no-i-r"],
      description: "Disable incremental recursion",
    },
    { name: ["-R", "--relative"], description: "Use relative path names" },
    {
      name: "--no-implied-dirs",
      description: "Don't send implied dirs with --relative",
      dependsOn: ["--relative"],
    },
    {
      name: ["-b", "--backup"],
      description: "Make backups (see --suffix & --backup-dir)",
    },
    {
      name: "--backup-dir",
      description: "Make backups into hierarchy based in DIR",
      requiresSeparator: true,
      args: folderArg("DIR"),
    },
    {
      name: "--suffix",
      description: "Set backup suffix (default ~ w/o --backup-dir)",
      requiresSeparator: true,
      args: {
        name: "SUFFIX",
      },
    },
    {
      name: ["-u", "--update"],
      description: "Skip files that are newer on the receiver",
    },
    {
      name: "--inplace",
      description: "Update destination files in-place",
    },
    { name: "--append", description: "Append data onto shorter files" },
    {
      name: "--append-verify",
      description: "Like --append, but with old data in file checksum",
    },
    {
      name: ["-d", "--dirs"],
      description: "Transfer directories without recursing",
    },
    {
      name: ["--old-dirs", "--old-d"],
      description: "Works like --dirs when talking to old rsync",
    },
    {
      name: "--mkpath",
      description: "Create destination's missing path components",
    },
    { name: ["-l", "--links"], description: "Copy symlinks as symlinks" },
    {
      name: ["-L", "--copy-links"],
      description: "Transform symlink into referent file/dir",
    },
    {
      name: "--copy-unsafe-links",
      description: 'Only "unsafe" symlinks are transformed',
    },
    {
      name: "--safe-links",
      description: "Ignore symlinks that point outside the source tree",
    },
    {
      name: "--insecure-links",
      description: "Follow attacker-owned symlinks in operator paths",
    },
    {
      name: "--confine-root",
      description: "Refuse operator paths resolving outside DIR",
      requiresSeparator: true,
      args: folderArg("DIR"),
    },
    {
      name: "--munge-links",
      description: "Munge symlinks to make them safer (but unusable)",
    },
    {
      name: ["-k", "--copy-dirlinks"],
      description: "Transform symlink to a dir into referent dir",
    },
    {
      name: ["-K", "--keep-dirlinks"],
      description: "Treat symlinked dir on receiver as dir",
    },
    { name: ["-H", "--hard-links"], description: "Preserve hard links" },
    { name: ["-p", "--perms"], description: "Preserve permissions" },
    {
      name: ["-E", "--executability"],
      description: "Preserve the file's executability",
    },
    {
      name: "--chmod",
      description: "Affect file and/or directory permissions",
      requiresSeparator: true,
      isRepeatable: true,
      args: {
        name: "CHMOD",
      },
    },
    {
      name: ["-A", "--acls"],
      description: "Preserve ACLs (implies --perms)",
    },
    {
      name: ["-X", "--xattrs"],
      description: "Preserve extended attributes",
      isRepeatable: true,
    },
    {
      name: ["-o", "--owner"],
      description: "Preserve owner (super-user only)",
    },
    { name: ["-g", "--group"], description: "Preserve group" },
    {
      name: "--devices",
      description: "Preserve device files (super-user only)",
    },
    {
      name: "--copy-devices",
      description: "Copy device contents as regular file",
    },
    {
      name: "--write-devices",
      description: "Write to devices as files (implies --inplace)",
    },
    { name: "--specials", description: "Preserve special files" },
    {
      name: "--drop-D",
      description: "Receiver refuses to create devices/specials",
    },
    { name: "-D", description: "Same as --devices --specials" },
    { name: ["-t", "--times"], description: "Preserve modification times" },
    {
      name: ["-U", "--atimes"],
      description: "Preserve access (use) times",
      isRepeatable: true,
    },
    {
      name: "--open-noatime",
      description: "Avoid changing the atime on opened files",
    },
    {
      name: ["-N", "--crtimes"],
      description: "Preserve create times (newness)",
    },
    {
      name: ["-O", "--omit-dir-times"],
      description: "Omit directories from --times",
    },
    {
      name: ["-J", "--omit-link-times"],
      description: "Omit symlinks from --times",
    },
    { name: "--super", description: "Receiver attempts super-user activities" },
    {
      name: "--fake-super",
      description: "Store/recover privileged attrs using xattrs",
    },
    {
      name: ["-S", "--sparse"],
      description: "Turn sequences of nulls into sparse blocks",
    },
    {
      name: "--preallocate",
      description: "Allocate dest files before writing them",
    },
    {
      name: ["-n", "--dry-run"],
      description: "Perform a trial run with no changes made",
    },
    {
      name: ["-W", "--whole-file"],
      description: "Copy files whole (without delta-xfer algorithm)",
    },
    {
      name: ["--no-whole-file", "--no-W"],
      description: "Use the delta-xfer algorithm",
    },
    {
      name: ["--checksum-choice", "--cc"],
      description: "Choose the checksum algorithm",
      requiresSeparator: true,
      args: {
        name: "ALGORITHM",
        suggestions: [
          "auto",
          "xxh128",
          "xxh3",
          "xxh64",
          "xxhash",
          "md5",
          "md4",
          "sha1",
          "none",
        ],
      },
    },
    {
      name: ["-x", "--one-file-system"],
      description: "Don't cross filesystem boundaries",
      isRepeatable: true,
    },
    {
      name: ["-B", "--block-size"],
      description: "Force a fixed checksum block-size",
      requiresSeparator: true,
      args: {
        name: "SIZE",
      },
    },
    {
      name: ["-e", "--rsh"],
      description: "Specify the remote shell to use",
      requiresSeparator: true,
      args: {
        name: "COMMAND",
      },
    },
    {
      name: "--rsync-path",
      description: "Specify the rsync to run on the remote machine",
      requiresSeparator: true,
      args: {
        name: "PATH",
      },
    },
    {
      name: ["--existing", "--ignore-non-existing"],
      description: "Skip creating new files on receiver",
    },
    {
      name: "--ignore-existing",
      description: "Skip updating files that already exist on receiver",
    },
    {
      name: "--remove-source-files",
      description: "Sender removes synchronized files (non-dirs)",
    },
    {
      name: "--remove-sent-files",
      description: "Same as --remove-source-files (use that instead)",
      deprecated: true,
    },
    {
      name: "--delete",
      description: "Delete extraneous files from destination dirs",
    },
    {
      name: "--delete-before",
      description: "Receiver deletes before transfer, not during",
    },
    {
      name: ["--delete-during", "--del"],
      description: "Receiver deletes during the transfer",
    },
    {
      name: "--delete-delay",
      description: "Find deletions during, delete after",
    },
    {
      name: "--delete-after",
      description: "Receiver deletes after transfer, not during",
    },
    {
      name: "--delete-excluded",
      description: "Also delete excluded files from destination dirs",
    },
    {
      name: "--ignore-missing-args",
      description: "Ignore missing source args without error",
    },
    {
      name: "--delete-missing-args",
      description: "Delete missing source args from destination",
    },
    {
      name: "--ignore-errors",
      description: "Delete even if there are I/O errors",
    },
    {
      name: "--force",
      description: "Force deletion of directories even if not empty",
    },
    {
      name: "--max-delete",
      description: "Don't delete more than NUM files",
      requiresSeparator: true,
      args: {
        name: "NUM",
      },
    },
    {
      name: "--max-size",
      description: "Don't transfer any file larger than SIZE",
      requiresSeparator: true,
      args: {
        name: "SIZE",
      },
    },
    {
      name: "--min-size",
      description: "Don't transfer any file smaller than SIZE",
      requiresSeparator: true,
      args: {
        name: "SIZE",
      },
    },
    {
      name: "--max-alloc",
      description: "Change a limit relating to memory alloc",
      requiresSeparator: true,
      args: {
        name: "SIZE",
      },
    },
    { name: "--partial", description: "Keep partially transferred files" },
    {
      name: "--partial-dir",
      description: "Put a partially transferred file into DIR",
      requiresSeparator: true,
      args: folderArg("DIR"),
    },
    {
      name: "--delay-updates",
      description: "Put all updated files into place at transfer's end",
    },
    {
      name: "--delay-symlinks",
      description: "Create symlinks after all files are in place",
    },
    {
      name: ["-m", "--prune-empty-dirs"],
      description: "Prune empty directory chains from the file-list",
    },
    {
      name: "--numeric-ids",
      description: "Don't map uid/gid values by user/group name",
    },
    {
      name: "--usermap",
      description: "Custom username mapping",
      requiresSeparator: true,
      args: {
        name: "STRING",
      },
    },
    {
      name: "--groupmap",
      description: "Custom groupname mapping",
      requiresSeparator: true,
      args: {
        name: "STRING",
      },
    },
    {
      name: "--chown",
      description: "Simple username/groupname mapping",
      requiresSeparator: true,
      args: {
        name: "USER:GROUP",
      },
    },
    {
      name: "--timeout",
      description: "Set I/O timeout in seconds",
      requiresSeparator: true,
      args: {
        name: "SECONDS",
      },
    },
    {
      name: "--contimeout",
      description: "Set daemon connection timeout in seconds",
      requiresSeparator: true,
      args: {
        name: "SECONDS",
      },
    },
    {
      name: ["-I", "--ignore-times"],
      description: "Don't skip files that match in size and mod-time",
    },
    { name: "--size-only", description: "Skip files that match in size" },
    {
      name: "-@",
      description: "Set the accuracy for mod-time comparisons",
      args: {
        name: "NUM",
      },
    },
    {
      name: "--modify-window",
      description: "Set the accuracy for mod-time comparisons",
      requiresSeparator: true,
      args: {
        name: "NUM",
      },
    },
    {
      name: "-T",
      description: "Create temporary files in directory DIR",
      args: folderArg("DIR"),
    },
    {
      name: "--temp-dir",
      description: "Create temporary files in directory DIR",
      requiresSeparator: true,
      args: folderArg("DIR"),
    },
    {
      name: ["-y", "--fuzzy"],
      description: "Find similar file for basis if no dest file",
      isRepeatable: true,
    },
    {
      name: "--compare-dest",
      description: "Also compare destination files relative to DIR",
      requiresSeparator: true,
      isRepeatable: true,
      args: folderArg("DIR"),
    },
    {
      name: "--copy-dest",
      description:
        "Also compare destination files relative to DIR and include copies of unchanged files",
      requiresSeparator: true,
      isRepeatable: true,
      args: folderArg("DIR"),
    },
    {
      name: "--link-dest",
      description: "Hardlink to files in DIR when unchanged",
      requiresSeparator: true,
      isRepeatable: true,
      args: folderArg("DIR"),
    },
    {
      name: ["-z", "--compress"],
      description: "Compress file data during the transfer",
    },
    {
      name: ["--compress-choice", "--zc"],
      description: "Choose the compression algorithm",
      requiresSeparator: true,
      args: {
        name: "ALGORITHM",
        suggestions: ["zstd", "lz4", "zlibx", "zlib", "none"],
      },
    },
    {
      name: ["--compress-level", "--zl"],
      description: "Explicitly set compression level",
      requiresSeparator: true,
      args: {
        name: "NUM",
        suggestions: Array.from(Array(10).keys()).map((v) => v.toString()),
      },
    },
    {
      name: ["--compress-threads", "--zt"],
      description: "Explicitly set compression threads",
      requiresSeparator: true,
      args: {
        name: "NUM",
      },
    },
    {
      name: "--skip-compress",
      description: "Skip compressing files with a suffix in LIST",
      requiresSeparator: true,
      args: {
        name: "LIST",
      },
    },
    {
      name: ["-C", "--cvs-exclude"],
      description: "Auto-ignore files the same way CVS does",
    },
    {
      name: "-f",
      description: "Add a file-filtering RULE",
      isRepeatable: true,
      args: {
        name: "RULE",
      },
    },
    {
      name: "--filter",
      description: "Add a file-filtering RULE",
      requiresSeparator: true,
      isRepeatable: true,
      args: {
        name: "RULE",
      },
    },
    {
      name: "-F",
      description:
        "Same as --filter='dir-merge /.rsync-filter'; repeated: --filter='- .rsync-filter'",
      isRepeatable: true,
    },
    {
      name: "--exclude",
      description: "Exclude files matching PATTERN",
      requiresSeparator: true,
      isRepeatable: true,
      args: {
        name: "PATTERN",
      },
    },
    {
      name: "--exclude-from",
      description: "Read exclude patterns from FILE",
      requiresSeparator: true,
      isRepeatable: true,
      args: fileArg("FILE"),
    },
    {
      name: "--include",
      description: "Don't exclude files matching PATTERN",
      requiresSeparator: true,
      isRepeatable: true,
      args: {
        name: "PATTERN",
      },
    },
    {
      name: "--include-from",
      description: "Read include patterns from FILE",
      requiresSeparator: true,
      isRepeatable: true,
      args: fileArg("FILE"),
    },
    {
      name: "--files-from",
      description: "Read list of source-file names from FILE",
      requiresSeparator: true,
      args: fileArg("FILE"),
    },
    {
      name: ["-0", "--from0"],
      description: "All *-from/filter files are delimited by 0s",
    },
    {
      name: "--old-args",
      description: "Disable the modern argument-protection idiom",
      exclusiveOn: ["-s", "--secluded-args"],
    },
    {
      name: ["-s", "--secluded-args", "--protect-args"],
      description: "Use the protocol to safely send the arguments",
    },
    {
      name: "--trust-sender",
      description: "Trust the remote sender's file list",
    },
    {
      name: "--copy-as",
      description: "Specify user & optional group for the copy",
      requiresSeparator: true,
      args: {
        name: "USER[:GROUP]",
      },
    },
    {
      name: "--address",
      description: "Bind address for outgoing socket to daemon",
      requiresSeparator: true,
      args: {
        name: "ADDRESS",
      },
    },
    {
      name: "--port",
      description: "Specify double-colon alternate port number",
      requiresSeparator: true,
      args: {
        name: "PORT",
      },
    },
    {
      name: "--sockopts",
      description: "Specify custom TCP options",
      requiresSeparator: true,
      args: {
        name: "OPTIONS",
      },
    },
    {
      name: "--blocking-io",
      description: "Use blocking I/O for the remote shell",
    },
    {
      name: "--outbuf",
      description: "Set out buffering to None, Line, or Block",
      requiresSeparator: true,
      args: {
        name: "BUFFER",
        suggestions: ["N", "L", "B"],
      },
    },
    { name: "--stats", description: "Give some file-transfer stats" },
    {
      name: ["-8", "--8-bit-output"],
      description: "Leave high-bit chars unescaped in output",
    },
    {
      name: ["-h", "--human-readable"],
      description: "Output numbers in a human-readable format",
      isRepeatable: true,
    },
    { name: "--progress", description: "Show progress during transfer" },
    { name: "-P", description: "Same as --partial --progress" },
    {
      name: ["-i", "--itemize-changes"],
      description: "Output a change-summary for all updates",
      isRepeatable: true,
    },
    {
      name: "-M",
      description: "Send OPTION to the remote side only",
      isRepeatable: true,
      args: {
        name: "OPTION",
      },
    },
    {
      name: "--remote-option",
      description: "Send OPTION to the remote side only",
      requiresSeparator: true,
      isRepeatable: true,
      args: {
        name: "OPTION",
      },
    },
    {
      name: "--out-format",
      description: "Output updates using the specified FORMAT",
      requiresSeparator: true,
      args: {
        name: "FORMAT",
      },
    },
    {
      name: "--log-format",
      description: "Same as --out-format (use that instead)",
      deprecated: true,
      requiresSeparator: true,
      args: {
        name: "FORMAT",
      },
    },
    {
      name: "--log-file",
      description: "Log what we're doing to the specified FILE",
      requiresSeparator: true,
      args: fileArg("FILE"),
    },
    {
      name: "--log-file-format",
      description: "Log updates using the specified FMT",
      requiresSeparator: true,
      args: {
        name: "FMT",
      },
    },
    {
      name: "--password-file",
      description: "Read daemon-access password from FILE",
      requiresSeparator: true,
      args: fileArg("FILE"),
    },
    {
      name: "--early-input",
      description: "Use FILE for daemon's early exec input",
      requiresSeparator: true,
      args: fileArg("FILE"),
    },
    {
      name: "--list-only",
      description: "List the files instead of copying them",
    },
    {
      name: "--bwlimit",
      description: "Limit socket I/O bandwidth",
      requiresSeparator: true,
      args: {
        name: "RATE",
      },
    },
    {
      name: "--stop-after",
      description: "Stop rsync after MINS minutes have elapsed",
      requiresSeparator: true,
      args: {
        name: "MINS",
      },
    },
    {
      name: "--time-limit",
      description: "Same as --stop-after (use that instead)",
      deprecated: true,
      requiresSeparator: true,
      args: {
        name: "MINS",
      },
    },
    {
      name: "--stop-at",
      description: "Stop rsync at the specified point in time",
      requiresSeparator: true,
      args: {
        name: "y-m-dTh:m",
      },
    },
    { name: "--fsync", description: "Fsync every written file" },
    {
      name: "--write-batch",
      description: "Write a batched update to FILE",
      requiresSeparator: true,
      args: fileArg("FILE"),
    },
    {
      name: "--only-write-batch",
      description: "Like --write-batch but w/o updating destination",
      requiresSeparator: true,
      args: fileArg("FILE"),
    },
    {
      name: "--read-batch",
      description: "Read a batched update from FILE",
      requiresSeparator: true,
      args: fileArg("FILE"),
    },
    {
      name: "--protocol",
      description: "Force an older protocol version to be used",
      requiresSeparator: true,
      args: {
        name: "NUM",
      },
    },
    {
      name: "--iconv",
      description: "Request charset conversion of filenames",
      requiresSeparator: true,
      args: {
        name: "CONVERT_SPEC",
      },
    },
    {
      name: "--checksum-seed",
      description: "Set block/file checksum seed (advanced)",
      requiresSeparator: true,
      args: {
        name: "NUM",
      },
    },
    { name: ["-4", "--ipv4"], description: "Prefer IPv4" },
    { name: ["-6", "--ipv6"], description: "Prefer IPv6" },
    {
      name: "--nice",
      description: "Adjust rsync CPU and I/O priorities",
      requiresSeparator: true,
      isRepeatable: true,
      args: {
        name: "SETTINGS",
        suggestions: [
          "19/idle",
          "local:10,remote:idle",
          "local:19/be_7,remote:5",
        ],
      },
    },
    {
      name: "--no-nice",
      description: "Clear earlier --nice settings",
    },
    {
      name: "--daemon",
      description: "Run as an rsync daemon",
    },
    {
      name: "--config",
      description: "Specify alternate rsyncd.conf file (with --daemon)",
      requiresSeparator: true,
      dependsOn: ["--daemon"],
      args: fileArg("FILE"),
    },
    {
      name: "--dparam",
      description: "Override global daemon config parameter (-M with --daemon)",
      requiresSeparator: true,
      dependsOn: ["--daemon"],
      args: {
        name: "OVERRIDE",
      },
    },
    {
      name: "--no-detach",
      description: "Do not detach from the parent (with --daemon)",
      dependsOn: ["--daemon"],
    },
    {
      name: ["-V", "--version"],
      description: "Print the version + other info and exit",
      isRepeatable: true,
    },
    {
      /*
       * This is according with rsync spec.
       */
      // eslint-disable-next-line @tabsmith/fig-linter/no-duplicate-options-subcommands
      name: ["-h", "--help"],
      description: "Show help for rsync (-h is --help only if used alone)",
    },
  ],
};
export default completionSpec;
