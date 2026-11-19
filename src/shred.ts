// shred (GNU coreutils v9.12, tag v9.12 released 2026-09-14, 2026-11-19). Source: coreutils/coreutils src/shred.c at v9.12 (long_opts table + usage() text); not run (local binary is 9.4). Changes: added -u, --remove takes an optional HOW argument (--remove[=HOW]), -v description refreshed, FILE may be - for standard output. -s accepts the size suffixes cbBkKMGTPEZYRQ0 (xnumtoumax in shred.c), -n defaults to 3 passes (DEFAULT_PASSES), --remove without HOW means wipesync. GNU-only tool: not shipped with macOS (available as gshred via Homebrew coreutils).
const completionSpec: Fig.Spec = {
  name: "shred",
  description:
    "Overwrite a file to hide its contents, and optionally delete it",
  options: [
    {
      name: ["--force", "-f"],
      description: "Change permissions to allow writing if necessary",
    },
    {
      name: ["--iterations", "-n"],
      description: "Overwrite N times instead of the default (3)",
      args: {
        name: "N",
        suggestions: ["3", "5", "7"],
        default: "3",
      },
    },
    {
      name: "--random-source",
      description: "Get random bytes from FILE",
      args: {
        name: "FILE",
        suggestions: ["/dev/urandom", "/dev/random"],
        default: "/dev/urandom",
        template: "filepaths",
      },
    },
    {
      name: ["--size", "-s"],
      description: "Shred this many bytes (suffixes like K, M, G accepted)",
      args: {
        name: "N",
        suggestions: ["1K", "1M", "1G"],
      },
    },
    {
      name: "-u",
      description: "Deallocate and remove file after overwriting",
    },
    {
      name: "--remove",
      description: "Like -u but give control on HOW to delete",
      requiresSeparator: true,
      args: {
        name: "HOW",
        isOptional: true,
        description:
          "'unlink' => use a standard unlink call, 'wipe' => also first obfuscate bytes in the name, 'wipesync' => also sync each obfuscated byte to the device",
        suggestions: ["unlink", "wipe", "wipesync"],
        default: "wipesync",
      },
    },
    {
      name: ["--verbose", "-v"],
      description: "Show details of data and metadata operations performed",
    },
    {
      name: ["--exact", "-x"],
      description:
        "Do not round file sizes up to the next full block; this is the default for non-regular files",
    },
    {
      name: ["--zero", "-z"],
      description: "Add a final overwrite with zeros to hide shredding",
    },
    {
      name: "--help",
      description: "Display this help and exit",
    },
    {
      name: "--version",
      description: "Output version information and exit",
    },
  ],
  args: {
    name: "FILE",
    description: "File(s) to shred (- shreds standard output)",
    isVariadic: true,
    template: "filepaths",
  },
};
export default completionSpec;
