// zip 3.0 (Info-ZIP Zip 3.0 of 2008-07-05 as shipped in macOS 15, apple-oss-distributions/zip tag zip-27, option sources unchanged in zip-33; 2026-11-19). Source: zip30/zip.c options table, zip30/man/zip.1 and `zip -h2` / `zip -so` of Zip 3.0 on Linux (not a live run on macOS).
// Info-ZIP 3.0 is the final upstream release. Windows/VMS/OS2-only options (-AS, -AC, -ic, -S, -V, ...) are left out. -mm is accepted but unused.
const compressionLevel = (level: number): Fig.Option => ({
  name: [`-${level}`, `--compress-${level}`],
  description:
    level === 1
      ? "Compress fastest"
      : level === 9
        ? "Compress best"
        : `Compression level ${level} (default is 6)`,
});

const sizeArg = (name: string, description: string): Fig.Arg => ({
  name,
  description,
});

const completionSpec: Fig.Spec = {
  name: "zip",
  description: "Package and compress (archive) files into zip file",
  args: [
    {
      name: "zipfile",
      description: "Name of archive",
      template: "filepaths",
    },
    {
      name: "file",
      description: "Files and directories to add to the archive",
      template: "filepaths",
      isOptional: true,
      isVariadic: true,
    },
  ],
  options: [
    {
      name: ["-0", "--store"],
      description: "Store files without compression",
    },
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map(compressionLevel),
    {
      name: ["-A", "--adjust-sfx"],
      description: "Adjust self-extracting executable offsets",
    },
    {
      name: ["-b", "--temp-path"],
      description: "Create the temporary archive in this directory",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: ["-c", "--entry-comments"],
      description: "Prompt for a one-line comment for each entry",
    },
    {
      name: ["-d", "--delete"],
      description:
        "Delete entries from the archive (list the entry patterns after the archive name)",
    },
    {
      name: ["-db", "--display-bytes"],
      description: "Display running count of bytes processed and bytes to go",
    },
    {
      name: ["-dc", "--display-counts"],
      description: "Display running count of entries done and entries to go",
    },
    {
      name: ["-dd", "--display-dots"],
      description:
        "Display dots every 10 MB (or dot size) while processing files",
    },
    {
      name: ["-dg", "--display-globaldots"],
      description:
        "Display dots globally for the archive instead of for each file",
    },
    {
      name: ["-ds", "--dot-size"],
      description: "Set the size of each progress dot (0 for no dots)",
      args: sizeArg("size", "Size as number plus optional k, m, g or t"),
    },
    {
      name: ["-du", "--display-usize"],
      description: "Display original uncompressed size for each entry as added",
    },
    {
      name: ["-dv", "--display-volume"],
      description:
        "Display volume (disk) number in the format in_disk>out_disk",
    },
    {
      name: ["-D", "--no-dir-entries"],
      description:
        "Do not create entries in the archive for directories themselves",
    },
    {
      name: ["-DF", "--difference-archive", "--dif"],
      description:
        "Only include files that have changed or are new compared to the input archive (use with --out)",
    },
    {
      name: ["-e", "--encrypt"],
      description:
        "Encrypt entries with standard (weak) PKZip 2.0 encryption, prompting for a password",
    },
    {
      name: ["-F", "--fix"],
      description: "Attempt to fix a mostly intact archive (use with --out)",
    },
    {
      name: ["-FF", "--fixfix"],
      description:
        "Try to salvage what can from a damaged archive, less reliable than -F (use with --out)",
    },
    {
      name: ["-FI", "--fifo"],
      description: "Read Unix FIFOs (zip waits on an open pipe)",
    },
    {
      name: ["-FS", "--filesync"],
      description:
        "Add, update and delete entries so the archive matches the file system",
    },
    {
      name: ["-f", "--freshen"],
      description:
        "Update existing entries only if newer, without adding files",
    },
    {
      name: ["-fd", "--force-descriptors"],
      description: "Force data descriptors as if streaming",
    },
    {
      name: ["-fz", "--force-zip64"],
      description: "Force use of Zip64 format (-fz- prevents it)",
    },
    {
      name: ["-g", "--grow"],
      description: "Grow the existing archive instead of replacing it",
    },
    {
      name: ["-h", "-H", "-?", "--help"],
      description: "Show a short help",
    },
    {
      name: ["-h2", "--more-help"],
      description: "Show extended help",
    },
    {
      name: ["-i", "--include"],
      description: "Include only files matching the patterns",
      args: {
        name: "pattern",
        isVariadic: true,
      },
    },
    {
      name: ["-j", "--junk-paths"],
      description: "Junk directory names and store just file names",
    },
    {
      name: ["-J", "--junk-sfx"],
      description:
        "Remove a prepended self-extractor, leaving a plain zip archive",
    },
    {
      name: ["-k", "--DOS-names"],
      description: "Force use of 8.3 DOS names",
    },
    {
      name: ["-l", "--to-crlf"],
      description: "Convert text file line ends from LF to CR LF",
    },
    {
      name: ["-ll", "--from-crlf"],
      description: "Convert text file line ends from CR LF to LF",
    },
    {
      name: ["-lf", "--logfile-path"],
      description: "Open this file as a log file (overwriting an existing one)",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: ["-la", "--log-append"],
      description: "Append to the existing log file",
    },
    {
      name: ["-li", "--log-info"],
      description:
        "Include info messages in the log file, not just warnings and errors",
    },
    {
      name: ["-L", "--license"],
      description: "Show the software license",
    },
    {
      name: ["-m", "--move"],
      description: "Delete the original files after the archive is created",
    },
    {
      name: ["-MM", "--must-match"],
      description:
        "Exit with an error if an input pattern matches no file or a matched file is unreadable",
    },
    {
      name: ["-n", "--suffixes"],
      description: "Do not compress files with these suffixes",
      args: {
        name: "suffixes",
        description: "Colon-separated list, for example .gz:.zip",
      },
    },
    {
      name: ["-nw", "--no-wild"],
      description: "Disable wildcards, treating them like any other character",
    },
    {
      name: ["-o", "--latest-time"],
      description: "Make the archive as old as its latest entry",
    },
    {
      name: ["-O", "--output-file", "--out"],
      description:
        "Write to a new output archive, leaving the input archive unchanged",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: ["-p", "--paths"],
      description: "Store paths",
    },
    {
      name: ["-P", "--password"],
      description: "Encrypt entries using this password (insecure)",
      args: {
        name: "password",
      },
    },
    {
      name: ["-q", "--quiet"],
      description: "Quiet operation",
    },
    {
      name: ["-r", "--recurse-paths"],
      description: "Recurse into directories",
    },
    {
      name: ["-R", "--recurse-patterns"],
      description: "Recurse into the current directory and match patterns",
    },
    {
      name: ["-RE", "--regex"],
      description: "Allow [list] (regular expression) matching in patterns",
    },
    {
      name: ["-s", "--split-size"],
      description: "Create a split archive with splits of this size",
      args: sizeArg(
        "size",
        "Size as number plus optional k, m, g or t (default m), 0 to turn off splitting"
      ),
    },
    {
      name: ["-sp", "--split-pause"],
      description: "Pause after each split is closed to allow changing disks",
    },
    {
      name: ["-sv", "--split-verbose"],
      description: "Be verbose about creating splits",
    },
    {
      name: ["-sb", "--split-bell"],
      description: "Ring the bell when pausing for the next split",
    },
    {
      name: ["-sc", "--show-command"],
      description: "Show command line arguments as processed and exit",
    },
    {
      name: ["-sd", "--show-debug"],
      description: "Show debugging output as zip does each step",
    },
    {
      name: ["-sf", "--show-files"],
      description: "Show files to operate on and exit",
    },
    {
      name: ["-so", "--show-options"],
      description: "Show all available options on this system",
    },
    {
      name: ["-su", "--show-unicode"],
      description:
        "Like -sf but also show escaped UTF-8 Unicode names if they exist",
    },
    {
      name: ["-sU", "--show-just-unicode"],
      description: "Like -sf but show escaped UTF-8 Unicode names instead",
    },
    {
      name: ["-t", "--from-date"],
      description:
        "Exclude files modified before this date (include files modified on or after it)",
      args: {
        name: "date",
        description: "Date as mmddyyyy or yyyy-mm-dd",
      },
    },
    {
      name: ["-tt", "--before-date"],
      description: "Include only files modified before this date",
      args: {
        name: "date",
        description: "Date as mmddyyyy or yyyy-mm-dd",
      },
    },
    {
      name: ["-T", "--test"],
      description:
        "Test the completed temporary archive with unzip before updating the archive",
    },
    {
      name: ["-TT", "--unzip-command"],
      description:
        "Use this command instead of 'unzip -tqq' to test the archive",
      args: {
        name: "cmd",
      },
    },
    {
      name: ["-u", "--update"],
      description: "Add new files and update existing entries only if newer",
    },
    {
      name: ["-U", "--copy", "--copy-entries"],
      description:
        "Select entries in the archive to copy (reverse of delete, use with --out)",
    },
    {
      name: ["-UN", "--unicode"],
      description:
        "Set what to do when a UTF-8 path does not match the standard path",
      args: {
        name: "mode",
        suggestions: [
          { name: "Quit", description: "On mismatch, exit with an error" },
          {
            name: "Warn",
            description: "On mismatch, warn and ignore UTF-8 (default)",
          },
          { name: "Ignore", description: "On mismatch, quietly ignore UTF-8" },
          {
            name: "No",
            description: "Ignore any UTF-8 paths, use standard paths for all",
          },
          {
            name: "Escape",
            description: "Escape all non-ASCII characters (with -sU)",
          },
          {
            name: "UTF8",
            description: "Store UTF-8 in entry path and comment fields",
          },
        ],
      },
    },
    {
      name: ["-v", "--verbose"],
      description:
        "Verbose operation (plain 'zip -v' shows version information)",
    },
    {
      name: "--version",
      description: "Show version information (if no other arguments)",
    },
    {
      name: ["-ws", "--wild-stop-dirs"],
      description: "Make * not cross directory boundaries (** does)",
    },
    {
      name: ["-x", "--exclude"],
      description: "Exclude files matching the patterns",
      args: {
        name: "pattern",
        isVariadic: true,
      },
    },
    {
      name: ["-X", "--strip-extra"],
      description:
        "Strip old extra fields (default); -X- keeps all extra fields",
    },
    {
      name: ["-y", "--symlinks"],
      description:
        "Store symbolic links as the link instead of the referenced file",
    },
    {
      name: ["-z", "--archive-comment"],
      description:
        "Prompt for a comment for the archive (end with a line of just . or EOF)",
    },
    {
      name: ["-Z", "--compression-method"],
      description: "Set the compression method",
      args: {
        name: "method",
        suggestions: [
          {
            name: "store",
            description: "Store without compression, same as -0",
          },
          {
            name: "deflate",
            description: "Original zip deflate, same as -1 to -9 (default)",
          },
          {
            name: "bzip2",
            description: "Use bzip2 compression (only if compiled in)",
          },
        ],
      },
    },
    {
      name: ["-@", "--names-stdin"],
      description: "Read the names of files to zip from stdin, one per line",
    },
  ],
};

export default completionSpec;
