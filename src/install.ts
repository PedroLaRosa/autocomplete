// install (macOS BSD, Apple OSS file_cmds-457.140.3 and file_cmds-479 man page dated 2024-04-16, 2026-11-19). Source: apple-oss-distributions/file_cmds install/install.1 + xinstall.c (getopt "B:bCcD:df:g:h:l:M:m:N:o:pSsT:Uv"; -N is compiled out on Apple, md5/rmd160 digests are not built); man pages and source only, not run on macOS. Changes: -M now takes a metalog argument (was "disable mmap"), added -D -h -l -T -U, -S/-p/-C/-v descriptions updated.
const completionSpec: Fig.Spec = {
  name: "install",
  description:
    "Install binaries: copy (or link) files to a target file or directory, optionally setting their mode, owner, group and flags",
  options: [
    {
      name: "-B",
      description: "Use suffix as the backup suffix if -b is given",
      args: {
        name: "suffix",
      },
    },
    {
      name: "-b",
      description:
        "Back up any existing files before overwriting them by renaming them to file.old. See -B for specifying a different backup suffix",
    },
    {
      name: "-C",
      description:
        "Copy the file. If the target file already exists and the files are the same, then do not change the modification time of the target. If the target's file flags and mode need not to be changed, the target's inode change time is also unchanged",
    },
    {
      name: "-c",
      description:
        "Copy the file. This is actually the default. The -c option is only included for backwards compatibility",
    },
    {
      name: "-D",
      description:
        "Specify the DESTDIR (top of the file hierarchy) that the items are installed in to. Only used to strip the leading string from the file names logged to the -M metalog; it does not affect where the actual files are installed",
      args: {
        name: "destdir",
        template: "folders",
      },
    },
    {
      name: "-d",
      description:
        "Create directories. Missing parent directories are created as required",
    },
    {
      name: "-f",
      description:
        "Specify the target's file flags; see chflags(1) for a list of possible flags and their meanings",
      args: {
        name: "flags",
      },
    },
    {
      name: "-g",
      description: "Specify a group. A numeric GID is allowed",
      args: {
        name: "group",
      },
    },
    {
      name: "-h",
      description:
        "When copying, calculate the digest of the files with hash to store in the -M metalog. When -d is given no hash is emitted",
      args: {
        name: "hash",
        suggestions: [
          { name: "none", description: "No hash (default)" },
          {
            name: "sha1",
            description: "The SHA-1 cryptographic message digest",
          },
          {
            name: "sha256",
            description: "The 256-bits SHA-2 cryptographic message digest",
          },
          {
            name: "sha512",
            description: "The 512-bits SHA-2 cryptographic message digest",
          },
        ],
      },
    },
    {
      name: "-l",
      description:
        "Instead of copying the file make a link to the source. Absolute and relative have effect only for symbolic links. Mixed links are hard links for files on the same filesystem, symbolic otherwise",
      args: {
        name: "linkflags",
        suggestions: [
          { name: "a", description: "Absolute" },
          { name: "r", description: "Relative" },
          { name: "h", description: "Hard" },
          { name: "s", description: "Symbolic" },
          { name: "m", description: "Mixed" },
        ],
      },
    },
    {
      name: "-M",
      description:
        'Write the metadata associated with each item installed to metalog in an mtree(8) "full path" specification line',
      args: {
        name: "metalog",
        template: "filepaths",
      },
    },
    {
      name: "-m",
      description:
        "Specify an alternate mode. The default mode is set to rwxr-xr-x (0755). The specified mode may be either an octal or symbolic value; see chmod(1) for a description of possible mode values",
      args: {
        name: "mode",
      },
    },
    {
      name: "-o",
      description: "Specify an owner. A numeric UID is allowed",
      args: {
        name: "owner",
      },
    },
    {
      name: "-p",
      description:
        "Preserve the access and modification times. Copy the file, as if the -C (compare and copy) option is specified, except if the target file does not already exist or is different, then preserve the access and modification times of the source file",
    },
    {
      name: "-S",
      description:
        "Flush each file to disk after copying. This has a non-negligible impact on performance, but reduces the risk of being left with a partial file if the system crashes or loses power shortly after install runs",
    },
    {
      name: "-s",
      description:
        "Exec's the command strip(1) to strip binaries so that install can be portable over a large number of systems and binary types. Set STRIPBIN to use another program, or DONTSTRIP to ignore this option",
    },
    {
      name: "-T",
      description:
        "Specify the mtree(8) tags to write out for the file when using -M metalog",
      args: {
        name: "tags",
      },
    },
    {
      name: "-U",
      description:
        "Indicate that install is running unprivileged, and that it should not try to change the owner, the group, or the file flags of the destination. The information that would have been updated can be stored in a log file with -M metalog",
    },
    {
      name: "-v",
      description:
        "Be verbose, showing files as they are installed or backed up",
    },
  ],
  args: {
    name: "file1 file2 | file1 ... fileN directory | directory ...",
    description: "File(s) or directory(ies) installation directive",
    template: ["filepaths", "folders"],
    isVariadic: true,
  },
};
export default completionSpec;
