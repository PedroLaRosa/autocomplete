// Subversion v1.15.0 (apache/subversion tag 1.15.0 / Homebrew stable, 2026-11-19).
// Source: subversion/svn/svn.c (option table, subcommand table, global options) from the 1.15.0 release
// tarball, read statically (not built or run). Not covered: the experimental shelf commands that svn only
// enables with SVN_EXPERIMENTAL_COMMANDS, and the 'svn --version' dependency output.

const opts = {
  accept: {
    name: "--accept",
    description: "Specify automatic conflict resolution action",
    args: {
      name: "action",
      suggestions: [
        "postpone",
        "working",
        "base",
        "mine-conflict",
        "theirs-conflict",
        "mine-full",
        "theirs-full",
        "edit",
        "launch",
        "recommended",
      ],
    },
  },
  addsAsModification: {
    name: "--adds-as-modification",
    description:
      "Merge local additions with incoming additions instead of causing a tree conflict (not recommended; use 'svn resolve')",
  },
  allowMixedRevisions: {
    name: "--allow-mixed-revisions",
    description:
      "Allow operation on mixed-revision working copy (not recommended; run 'svn update' instead)",
  },
  autoProps: {
    name: "--auto-props",
    description: "Enable automatic properties",
  },
  change: {
    name: ["-c", "--change"],
    description: "The change made by revision REV (like -r REV-1:REV)",
    args: { name: "REV" },
  },
  changelist: {
    name: ["--changelist", "--cl"],
    description: "Operate only on members of the given changelist",
    isRepeatable: true,
    args: { name: "name" },
  },
  compatibleVersion: {
    name: "--compatible-version",
    description:
      "Use working copy format compatible with the given Subversion version (e.g. 1.8 or 1.9.5)",
    args: {
      name: "version",
      suggestions: [
        "1.8",
        "1.9",
        "1.10",
        "1.11",
        "1.12",
        "1.13",
        "1.14",
        "1.15",
      ],
    },
  },
  configDir: {
    name: "--config-dir",
    insertValue: "--config-dir '{cursor}'",
    description: "Read user configuration files from the given directory",
    args: { name: "directory", template: "folders" },
  },
  configOption: {
    name: "--config-option",
    insertValue: "--config-option '{cursor}'",
    description:
      "Set user configuration option in the format FILE:SECTION:OPTION=[VALUE]",
    isRepeatable: true,
    args: { name: "FILE:SECTION:OPTION=[VALUE]" },
  },
  depth: {
    name: "--depth",
    description: "Limit operation by depth",
    args: {
      name: "depth",
      suggestions: ["empty", "files", "immediates", "infinity"],
    },
  },
  diff: { name: "--diff", description: "Produce diff output" },
  diff3Cmd: {
    name: "--diff3-cmd",
    description: "Use the given command as merge command",
    args: { name: "command" },
  },
  diffCmd: {
    name: "--diff-cmd",
    description: "Use the given command as diff command",
    args: { name: "command" },
  },
  dryRun: {
    name: "--dry-run",
    description: "Try operation but make no changes",
  },
  editorCmd: {
    name: "--editor-cmd",
    description: "Use the given command as external editor",
    args: { name: "command" },
  },
  encoding: {
    name: "--encoding",
    description: "Treat value as being in charset encoding",
    args: { name: "encoding" },
  },
  extensions: {
    name: ["-x", "--extensions"],
    description:
      "Specify differencing options for external diff or internal diff or blame (default: -u)",
    args: {
      name: "args",
      suggestions: [
        "-u",
        "-b",
        "-w",
        "-p",
        "--unified",
        "--ignore-space-change",
        "--ignore-all-space",
        "--ignore-eol-style",
        "--show-c-function",
      ],
    },
  },
  file: {
    name: ["-F", "--file"],
    description: "Read log message from file",
    args: { name: "file", template: "filepaths" },
  },
  force: { name: "--force", description: "Force operation to run" },
  forceInteractive: {
    name: "--force-interactive",
    description:
      "Do interactive prompting even if standard input is not a terminal device",
  },
  forceLog: {
    name: "--force-log",
    description: "Force validity of log message source",
  },
  git: { name: "--git", description: "Use git's extended diff format" },
  humanReadable: {
    name: ["-H", "--human-readable"],
    description: "Show human-readable output",
  },
  ignoreAncestry: {
    name: "--ignore-ancestry",
    description: "Disable merge tracking; diff nodes as if related",
  },
  ignoreExternals: {
    name: "--ignore-externals",
    description: "Ignore externals definitions",
  },
  ignoreKeywords: {
    name: "--ignore-keywords",
    description: "Don't expand keywords",
  },
  ignoreProperties: {
    name: "--ignore-properties",
    description: "Ignore properties during the operation",
  },
  ignoreWhitespace: {
    name: "--ignore-whitespace",
    description: "Ignore whitespace during pattern matching",
  },
  includeExternals: {
    name: "--include-externals",
    description:
      "Also operate on externals defined by svn:externals properties",
  },
  incremental: {
    name: "--incremental",
    description: "Give output suitable for concatenation",
  },
  internalDiff: {
    name: "--internal-diff",
    description: "Override diff-cmd specified in config file",
  },
  keepChangelists: {
    name: "--keep-changelists",
    description: "Don't delete changelists after commit",
  },
  keepLocal: { name: "--keep-local", description: "Keep path in working copy" },
  limit: {
    name: ["-l", "--limit"],
    description: "Maximum number of log entries",
    args: { name: "num" },
  },
  log: {
    name: "--log",
    description: "Show revision log message, author and date",
  },
  message: {
    name: ["-m", "--message"],
    insertValue: "-m '{cursor}'",
    priority: 100,
    description: "Specify log message",
    args: { name: "message" },
  },
  nativeEol: {
    name: "--native-eol",
    description:
      "Use a different EOL marker than the standard system marker for files with svn:eol-style set to 'native'",
    args: { name: "eol", suggestions: ["LF", "CR", "CRLF"] },
  },
  new: {
    name: "--new",
    description: "Use the given target as the newer target",
    args: { name: "target" },
  },
  noAuthCache: {
    name: "--no-auth-cache",
    description: "Do not cache authentication tokens",
  },
  noAutoProps: {
    name: "--no-auto-props",
    description: "Disable automatic properties",
  },
  noDiffAdded: {
    name: "--no-diff-added",
    description: "Do not print differences for added files",
  },
  noDiffDeleted: {
    name: "--no-diff-deleted",
    description: "Do not print differences for deleted files",
  },
  noIgnore: {
    name: "--no-ignore",
    description:
      "Disregard default and svn:ignore and svn:global-ignores property ignores",
  },
  noNewline: {
    name: "--no-newline",
    description: "Do not output the trailing newline",
  },
  noUnlock: { name: "--no-unlock", description: "Don't unlock the targets" },
  nonInteractive: {
    name: "--non-interactive",
    description:
      "Do no interactive prompting (default is to prompt only if standard input is a terminal device)",
  },
  nonRecursive: {
    name: ["-N", "--non-recursive"],
    description: "Obsolete",
    deprecated: true,
  },
  noticeAncestry: {
    name: "--notice-ancestry",
    description: "Diff unrelated nodes as delete and add",
  },
  old: {
    name: "--old",
    description: "Use the given target as the older target",
    args: { name: "target" },
  },
  parents: { name: "--parents", description: "Make intermediate directories" },
  password: {
    name: "--password",
    insertValue: "--password '{cursor}'",
    priority: 94,
    description:
      "Specify a password (caution: on many operating systems, other users will be able to see this)",
    args: { name: "password" },
  },
  passwordFromStdin: {
    name: "--password-from-stdin",
    description: "Read password from stdin",
  },
  patchCompatible: {
    name: "--patch-compatible",
    description:
      "Generate diff suitable for generic third-party patch tools (same as --show-copies-as-adds --ignore-properties)",
  },
  pinExternals: {
    name: "--pin-externals",
    description:
      "Pin externals with no explicit revision to their current revision (recommended when tagging)",
  },
  propertiesOnly: {
    name: "--properties-only",
    description: "Show only properties during the operation",
  },
  quiet: {
    name: ["-q", "--quiet"],
    description: "Print nothing, or only summary information",
  },
  recordOnly: {
    name: "--record-only",
    description: "Merge only mergeinfo differences",
  },
  recursive: {
    name: ["-R", "--recursive"],
    description: "Descend recursively, same as --depth=infinity",
  },
  reintegrate: {
    name: "--reintegrate",
    description: "Deprecated",
    deprecated: true,
  },
  relocate: { name: "--relocate", description: "Relocate via URL-rewriting" },
  remove: { name: "--remove", description: "Remove changelist association" },
  removeAdded: {
    name: "--remove-added",
    description: "Reverting an added item will remove it from disk",
  },
  removeIgnored: {
    name: "--remove-ignored",
    description: "Remove ignored items",
  },
  removeUnversioned: {
    name: "--remove-unversioned",
    description: "Remove unversioned items",
  },
  reverseDiff: {
    name: "--reverse-diff",
    description: "Apply the unidiff in reverse",
  },
  revision: {
    name: ["-r", "--revision"],
    description:
      "Revision REV (some commands also take a REV1:REV2 range): NUMBER, {DATE}, HEAD, BASE, COMMITTED or PREV",
    args: { name: "REV", suggestions: ["HEAD", "BASE", "COMMITTED", "PREV"] },
  },
  revprop: {
    name: "--revprop",
    description: "Operate on a revision property (use with -r)",
  },
  search: {
    name: "--search",
    description:
      "Search pattern (glob syntax, case- and accent-insensitive, may require quotation marks to prevent shell expansion)",
    isRepeatable: true,
    args: { name: "pattern" },
  },
  searchAnd: {
    name: "--search-and",
    description: "Combine pattern with the previous search pattern",
    isRepeatable: true,
    args: { name: "pattern" },
  },
  setDepth: {
    name: "--set-depth",
    description: "Set new working copy depth",
    args: {
      name: "depth",
      suggestions: ["exclude", "empty", "files", "immediates", "infinity"],
    },
  },
  showCopiesAsAdds: {
    name: "--show-copies-as-adds",
    description: "Don't diff copied or moved files with their source",
  },
  showInheritedProps: {
    name: "--show-inherited-props",
    description: "Retrieve properties set on parents of the target",
  },
  showItem: {
    name: "--show-item",
    description: "Print only the specified item",
    args: {
      name: "item",
      suggestions: [
        "kind",
        "url",
        "relative-url",
        "repos-root-url",
        "repos-uuid",
        "repos-size",
        "revision",
        "last-changed-revision",
        "last-changed-date",
        "last-changed-author",
        "wc-root",
        "schedule",
        "depth",
        "wc-format",
        "wc-compatible-version",
        "changelist",
        "store-pristine",
      ],
    },
  },
  showPasswords: {
    name: "--show-passwords",
    description: "Show cached passwords",
  },
  showRevs: {
    name: "--show-revs",
    description: "Specify which collection of revisions to display",
    args: { name: "which", suggestions: ["merged", "eligible"] },
  },
  showUpdates: {
    name: ["-u", "--show-updates"],
    description: "Display update information",
  },
  stopOnCopy: {
    name: "--stop-on-copy",
    description: "Do not cross copies while traversing history",
  },
  storePristine: {
    name: "--store-pristine",
    description:
      "Store local copies of pristine contents ('yes') or fetch them on demand ('no'); default 'yes'",
    args: { name: "mode", suggestions: ["yes", "no"] },
  },
  strict: {
    name: "--strict",
    description: "Deprecated; use --no-newline",
    deprecated: true,
  },
  strip: {
    name: "--strip",
    description:
      "Number of leading path components to strip from paths parsed from the patch file (default 0)",
    args: { name: "num" },
  },
  summarize: {
    name: "--summarize",
    description: "Show a summary of the results",
  },
  targets: {
    name: "--targets",
    description: "Pass contents of file as additional args",
    args: { name: "file", template: "filepaths" },
  },
  trustServerCert: {
    name: "--trust-server-cert",
    description: "Deprecated; same as --trust-server-cert-failures=unknown-ca",
    deprecated: true,
  },
  trustServerCertFailures: {
    name: "--trust-server-cert-failures",
    description:
      "With --non-interactive, accept SSL server certificates with these failures (comma-separated list)",
    args: {
      name: "failures",
      description: "Comma-separated list of failures to accept",
      suggestions: [
        "unknown-ca",
        "cn-mismatch",
        "expired",
        "not-yet-valid",
        "other",
      ],
    },
  },
  useMergeHistory: {
    name: ["-g", "--use-merge-history"],
    description: "Use/display additional information from merge history",
  },
  username: {
    name: "--username",
    insertValue: "--username '{cursor}'",
    priority: 95,
    description: "Specify a username",
    args: { name: "username" },
  },
  vacuumPristines: {
    name: "--vacuum-pristines",
    description: "Remove unreferenced pristines from .svn directory",
  },
  verbose: {
    name: ["-v", "--verbose"],
    description: "Print extra information",
  },
  withAllRevprops: {
    name: "--with-all-revprops",
    description: "Retrieve all revision properties",
  },
  withNoRevprops: {
    name: "--with-no-revprops",
    description: "Retrieve no revision properties",
  },
  withRevprop: {
    name: "--with-revprop",
    description:
      "Set revision property in new revision using the name[=value] format",
    isRepeatable: true,
    args: { name: "name[=value]" },
  },
  xViewspec: {
    name: "--x-viewspec",
    description:
      "Print the working copy layout, formatted as 'classic' or 'svn11'",
    args: { name: "viewspec", suggestions: ["classic", "svn11"] },
  },
  xml: { name: "--xml", description: "Output in XML" },
} satisfies Record<string, Fig.Option>;

const propNames = [
  "svn:ignore",
  "svn:global-ignores",
  "svn:keywords",
  "svn:eol-style",
  "svn:executable",
  "svn:mime-type",
  "svn:externals",
  "svn:needs-lock",
  "svn:special",
  "svn:mergeinfo",
  "svn:auto-props",
  "svn:log",
  "svn:author",
  "svn:date",
];

const subcommands: Fig.Subcommand[] = [
  {
    name: "add",
    description: "Put new files and directories under version control",
    options: [
      opts.targets,
      { ...opts.nonRecursive, description: "Obsolete; same as --depth=empty" },
      opts.depth,
      opts.quiet,
      { ...opts.force, description: "Ignore already versioned paths" },
      opts.noIgnore,
      opts.autoProps,
      opts.noAutoProps,
      { ...opts.parents, description: "Add intermediate parents" },
    ],
    args: { name: "path", isVariadic: true, template: "filepaths" },
  },
  {
    name: "auth",
    description: "Manage cached authentication credentials",
    options: [
      {
        ...opts.remove,
        description: "Remove matching authentication credentials",
      },
      opts.showPasswords,
    ],
    args: {
      name: "pattern",
      description:
        "Pattern matching cached credentials (may contain glob wildcards)",
      isVariadic: true,
      isOptional: true,
    },
  },
  {
    name: ["blame", "praise", "annotate", "ann"],
    description: "Show when each line of a file was last (or next) changed",
    options: [
      opts.revision,
      opts.verbose,
      opts.useMergeHistory,
      opts.incremental,
      opts.xml,
      opts.extensions,
      opts.force,
    ],
    args: {
      name: "target",
      description: "Working copy path or URL, optionally followed by @REV",
      isVariadic: true,
      template: "filepaths",
    },
  },
  {
    name: "cat",
    description: "Output the content of specified files or URLs",
    options: [opts.revision, opts.ignoreKeywords],
    args: {
      name: "target",
      description: "Working copy path or URL, optionally followed by @REV",
      isVariadic: true,
      template: "filepaths",
    },
  },
  {
    name: ["changelist", "cl"],
    description:
      "Associate (or dissociate) changelist CLNAME with the named files",
    options: [
      opts.quiet,
      opts.recursive,
      opts.depth,
      opts.remove,
      opts.targets,
      opts.changelist,
    ],
    args: [
      {
        name: "changelist",
        description: "Changelist name (omit when using --remove)",
        isOptional: true,
      },
      { name: "path", isVariadic: true, template: "filepaths" },
    ],
  },
  {
    name: ["checkout", "co"],
    description: "Check out a working copy from a repository",
    options: [
      opts.revision,
      opts.quiet,
      { ...opts.nonRecursive, description: "Obsolete; same as --depth=files" },
      opts.depth,
      opts.force,
      opts.ignoreExternals,
      opts.compatibleVersion,
      opts.storePristine,
    ],
    args: [
      {
        name: "url",
        description: "Repository URL, optionally followed by @REV",
        isVariadic: true,
      },
      {
        name: "path",
        description: "Destination directory",
        isOptional: true,
        template: "folders",
      },
    ],
  },
  {
    name: "cleanup",
    description:
      "Either recover from an interrupted operation that left the working copy locked, or remove unwanted files",
    options: [
      opts.removeUnversioned,
      opts.removeIgnored,
      opts.vacuumPristines,
      opts.includeExternals,
      opts.quiet,
      {
        ...opts.diff3Cmd,
        description: "Deprecated and ignored",
        deprecated: true,
      },
    ],
    args: {
      name: "wcpath",
      isVariadic: true,
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: ["commit", "ci"],
    description: "Send changes from your working copy to the repository",
    options: [
      opts.quiet,
      { ...opts.nonRecursive, description: "Obsolete; same as --depth=empty" },
      opts.depth,
      opts.targets,
      opts.noUnlock,
      opts.message,
      opts.file,
      opts.forceLog,
      opts.editorCmd,
      opts.encoding,
      opts.withRevprop,
      opts.changelist,
      opts.keepChangelists,
      opts.includeExternals,
    ],
    args: {
      name: "path",
      isVariadic: true,
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: ["copy", "cp"],
    description: "Copy files and directories in a working copy or repository",
    options: [
      opts.revision,
      opts.quiet,
      opts.ignoreExternals,
      opts.parents,
      opts.message,
      opts.file,
      opts.forceLog,
      opts.editorCmd,
      opts.encoding,
      opts.withRevprop,
      opts.pinExternals,
    ],
    args: [
      {
        name: "src",
        description: "Working copy path or URL, optionally followed by @REV",
        isVariadic: true,
        template: "filepaths",
      },
      {
        name: "dst",
        description: "Destination working copy path or URL",
        template: "filepaths",
      },
    ],
  },
  {
    name: ["delete", "del", "remove", "rm"],
    description: "Remove files and directories from version control",
    options: [
      opts.force,
      opts.quiet,
      opts.targets,
      opts.message,
      opts.file,
      opts.forceLog,
      opts.editorCmd,
      opts.encoding,
      opts.withRevprop,
      opts.keepLocal,
    ],
    args: {
      name: "target",
      description: "Working copy path or URL",
      isVariadic: true,
      template: "filepaths",
    },
  },
  {
    name: ["diff", "di"],
    description:
      "Display local changes or differences between two revisions or paths",
    options: [
      opts.revision,
      opts.change,
      opts.old,
      opts.new,
      { ...opts.nonRecursive, description: "Obsolete; same as --depth=files" },
      opts.depth,
      opts.diffCmd,
      opts.internalDiff,
      opts.extensions,
      opts.noDiffAdded,
      opts.noDiffDeleted,
      opts.ignoreProperties,
      opts.propertiesOnly,
      opts.showCopiesAsAdds,
      opts.noticeAncestry,
      opts.summarize,
      opts.changelist,
      opts.force,
      opts.xml,
      opts.git,
      opts.patchCompatible,
    ],
    args: {
      name: "target",
      description: "Working copy path or URL, optionally followed by @REV",
      isVariadic: true,
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: "export",
    description: "Create an unversioned copy of a tree",
    options: [
      opts.revision,
      opts.quiet,
      { ...opts.nonRecursive, description: "Obsolete; same as --depth=files" },
      opts.depth,
      opts.force,
      opts.nativeEol,
      opts.ignoreExternals,
      opts.ignoreKeywords,
    ],
    args: [
      {
        name: "source",
        description:
          "Repository URL or working copy path, optionally followed by @PEGREV",
        template: "filepaths",
      },
      {
        name: "path",
        description: "Destination for the unversioned copy",
        isOptional: true,
        template: "folders",
      },
    ],
  },
  {
    name: "import",
    description: "Commit an unversioned file or tree into the repository",
    options: [
      opts.quiet,
      { ...opts.nonRecursive, description: "Obsolete; same as --depth=files" },
      opts.depth,
      opts.autoProps,
      opts.force,
      opts.noAutoProps,
      opts.message,
      opts.file,
      opts.forceLog,
      opts.editorCmd,
      opts.encoding,
      opts.withRevprop,
      opts.noIgnore,
    ],
    args: [
      { name: "path", isOptional: true, template: "filepaths" },
      { name: "url", description: "Repository URL to import into" },
    ],
  },
  {
    name: "info",
    description: "Display information about a local or remote item",
    options: [
      opts.revision,
      opts.recursive,
      {
        ...opts.humanReadable,
        description:
          "Show file sizes with base-2 unit suffixes (Byte, Kilobyte, ...), limiting the number of digits to three or less",
      },
      opts.depth,
      opts.targets,
      opts.incremental,
      opts.xml,
      opts.changelist,
      opts.includeExternals,
      {
        ...opts.showItem,
        description:
          "Print only the specified item (kind, url, relative-url, revision, wc-root, ...)",
      },
      opts.noNewline,
      opts.xViewspec,
    ],
    args: {
      name: "target",
      description: "Working copy path or URL, optionally followed by @REV",
      isVariadic: true,
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: ["list", "ls"],
    description: "List directory entries in the repository",
    options: [
      opts.revision,
      opts.verbose,
      opts.recursive,
      {
        ...opts.humanReadable,
        description:
          "With --verbose, show file sizes with base-2 unit suffixes (Byte, Kilobyte, ...), limiting the number of digits to three or less",
      },
      opts.depth,
      opts.incremental,
      opts.xml,
      opts.includeExternals,
      opts.search,
    ],
    args: {
      name: "target",
      description: "Working copy path or URL, optionally followed by @REV",
      isVariadic: true,
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: "lock",
    description:
      "Lock working copy paths or URLs in the repository, so that no other user can commit changes to them",
    options: [
      opts.targets,
      { ...opts.message, description: "Specify lock comment" },
      { ...opts.file, description: "Read lock comment from file" },
      {
        ...opts.forceLog,
        description: "Force validity of lock comment source",
      },
      opts.encoding,
      { ...opts.force, description: "Steal locks" },
      opts.quiet,
    ],
    args: {
      name: "target",
      description: "Working copy path or URL",
      isVariadic: true,
      template: "filepaths",
    },
  },
  {
    name: "log",
    description:
      "Show the log messages for a set of revision(s) and/or path(s)",
    options: [
      opts.revision,
      { ...opts.change, description: "The change made in the given revision" },
      { ...opts.quiet, description: "Do not print the log message" },
      { ...opts.verbose, description: "Also print all affected paths" },
      opts.useMergeHistory,
      opts.targets,
      opts.stopOnCopy,
      opts.incremental,
      opts.xml,
      opts.limit,
      opts.withAllRevprops,
      opts.withNoRevprops,
      {
        ...opts.withRevprop,
        description: "Retrieve the given revision property",
      },
      opts.depth,
      opts.diff,
      opts.diffCmd,
      opts.internalDiff,
      opts.extensions,
      opts.search,
      opts.searchAnd,
    ],
    args: {
      name: "target",
      description: "Working copy path or URL, optionally followed by @REV",
      isVariadic: true,
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: "merge",
    description: "Merge changes into a working copy",
    options: [
      { ...opts.revision, isRepeatable: true },
      { ...opts.change, isRepeatable: true },
      { ...opts.nonRecursive, description: "Obsolete; same as --depth=files" },
      opts.depth,
      opts.quiet,
      {
        ...opts.force,
        description: "Force deletions even if deleted contents don't match",
      },
      opts.dryRun,
      opts.diff3Cmd,
      opts.recordOnly,
      opts.extensions,
      opts.ignoreAncestry,
      opts.accept,
      opts.reintegrate,
      opts.allowMixedRevisions,
      opts.verbose,
    ],
    args: [
      {
        name: "source",
        description: "Merge source, optionally followed by @REV",
        template: "filepaths",
      },
      {
        name: "target",
        description:
          "Second source (2-URL merge) or the target working copy path",
        isOptional: true,
        template: "filepaths",
      },
      {
        name: "target_wcpath",
        description: "Target working copy path",
        isOptional: true,
        template: "filepaths",
      },
    ],
  },
  {
    name: "mergeinfo",
    description: "Display merge-related information",
    options: [
      opts.revision,
      opts.recursive,
      opts.quiet,
      opts.verbose,
      opts.depth,
      opts.showRevs,
      opts.log,
      opts.incremental,
    ],
    args: [
      {
        name: "source",
        description: "Merge source, optionally followed by @REV",
        template: "filepaths",
      },
      {
        name: "target",
        description: "Working copy path or URL, optionally followed by @REV",
        isOptional: true,
        template: "filepaths",
      },
    ],
  },
  {
    name: "mkdir",
    description: "Create a new directory under version control",
    options: [
      opts.quiet,
      opts.parents,
      opts.message,
      opts.file,
      opts.forceLog,
      opts.editorCmd,
      opts.encoding,
      opts.withRevprop,
    ],
    args: {
      name: "target",
      description: "Working copy path or URL",
      isVariadic: true,
      template: "filepaths",
    },
  },
  {
    name: ["move", "mv", "rename", "ren"],
    description: "Move (rename) an item in a working copy or repository",
    options: [
      opts.quiet,
      opts.force,
      opts.parents,
      opts.allowMixedRevisions,
      opts.message,
      opts.file,
      opts.forceLog,
      opts.editorCmd,
      opts.encoding,
      opts.withRevprop,
      {
        ...opts.revision,
        description: "Deprecated and ignored",
        deprecated: true,
      },
    ],
    args: [
      {
        name: "src",
        description: "Source working copy path or URL",
        isVariadic: true,
        template: "filepaths",
      },
      {
        name: "dst",
        description: "Destination working copy path or URL",
        template: "filepaths",
      },
    ],
  },
  {
    name: "patch",
    description: "Apply a patch to a working copy",
    options: [
      opts.quiet,
      opts.dryRun,
      opts.strip,
      opts.reverseDiff,
      opts.ignoreWhitespace,
    ],
    args: [
      { name: "patchfile", template: "filepaths" },
      { name: "wcpath", isOptional: true, template: "filepaths" },
    ],
  },
  {
    name: ["propdel", "pdel", "pd"],
    description: "Remove a property from files, dirs, or revisions",
    options: [
      opts.quiet,
      opts.recursive,
      opts.depth,
      opts.revision,
      opts.revprop,
      opts.changelist,
    ],
    args: [
      { name: "propname", suggestions: propNames },
      {
        name: "target",
        description: "Working copy path or URL, optionally followed by @REV",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    ],
  },
  {
    name: ["propedit", "pedit", "pe"],
    description: "Edit a property with an external editor",
    options: [
      opts.revision,
      opts.revprop,
      opts.message,
      opts.file,
      opts.forceLog,
      opts.editorCmd,
      opts.encoding,
      opts.withRevprop,
      opts.force,
    ],
    args: [
      { name: "propname", suggestions: propNames },
      {
        name: "target",
        description: "Working copy path or URL, optionally followed by @REV",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    ],
  },
  {
    name: ["propget", "pget", "pg"],
    description: "Print the value of a property on files, dirs, or revisions",
    options: [
      {
        ...opts.verbose,
        description: "Print path, name and value on separate lines",
      },
      opts.recursive,
      opts.depth,
      opts.revision,
      opts.revprop,
      { ...opts.strict, description: "Deprecated; use --no-newline" },
      opts.noNewline,
      opts.xml,
      opts.changelist,
      opts.showInheritedProps,
    ],
    args: [
      { name: "propname", suggestions: propNames },
      {
        name: "target",
        description: "Working copy path or URL, optionally followed by @REV",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    ],
  },
  {
    name: ["proplist", "plist", "pl"],
    description: "List all properties on files, dirs, or revisions",
    options: [
      {
        ...opts.verbose,
        description: "Print path, name and value on separate lines",
      },
      opts.recursive,
      opts.depth,
      opts.revision,
      { ...opts.quiet, description: "Don't print the path" },
      opts.revprop,
      opts.xml,
      opts.changelist,
      opts.showInheritedProps,
    ],
    args: {
      name: "target",
      description: "Working copy path or URL, optionally followed by @REV",
      isVariadic: true,
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: ["propset", "pset", "ps"],
    description: "Set the value of a property on files, dirs, or revisions",
    options: [
      { ...opts.file, description: "Read property value from file" },
      opts.encoding,
      opts.quiet,
      opts.revision,
      opts.targets,
      opts.recursive,
      opts.depth,
      opts.revprop,
      opts.force,
      opts.changelist,
    ],
    args: [
      { name: "propname", suggestions: propNames },
      {
        name: "propval",
        description: "Property value (omit when using --file)",
      },
      {
        name: "target",
        description: "Working copy path or URL, optionally followed by @REV",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    ],
  },
  {
    name: "relocate",
    description:
      "Relocate the working copy to point to a different repository root URL",
    options: [opts.ignoreExternals],
    args: [
      {
        name: "from-prefix",
        description:
          "Repository URL prefix to replace, or the new URL if no second argument is given",
      },
      {
        name: "to-prefix",
        description: "New repository URL prefix",
        isOptional: true,
      },
      {
        name: "path",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    ],
  },
  {
    name: "resolve",
    description: "Resolve conflicts on working copy files or directories",
    options: [
      opts.targets,
      opts.recursive,
      opts.depth,
      opts.quiet,
      {
        ...opts.accept,
        description:
          "Specify automatic conflict resolution source (base, working, mine-conflict, theirs-conflict, mine-full, theirs-full)",
      },
    ],
    args: {
      name: "path",
      isVariadic: true,
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: "resolved",
    description:
      "Remove 'conflicted' state on working copy files or directories",
    options: [opts.targets, opts.recursive, opts.depth, opts.quiet],
    args: { name: "path", isVariadic: true, template: "filepaths" },
  },
  {
    name: "revert",
    description: "Restore pristine working copy state (undo local changes)",
    options: [
      opts.targets,
      opts.recursive,
      opts.depth,
      opts.quiet,
      opts.changelist,
      opts.removeAdded,
    ],
    args: { name: "path", isVariadic: true, template: "filepaths" },
  },
  {
    name: ["status", "stat", "st"],
    description: "Print the status of working copy files and directories",
    options: [
      opts.showUpdates,
      opts.verbose,
      {
        ...opts.nonRecursive,
        description: "Obsolete; same as --depth=immediates",
      },
      opts.depth,
      opts.revision,
      { ...opts.quiet, description: "Don't print unversioned items" },
      opts.noIgnore,
      opts.incremental,
      opts.xml,
      opts.ignoreExternals,
      opts.changelist,
    ],
    args: {
      name: "path",
      isVariadic: true,
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: ["switch", "sw"],
    description:
      "Update the working copy to a different URL within the same repository",
    options: [
      opts.revision,
      { ...opts.nonRecursive, description: "Obsolete; same as --depth=files" },
      opts.depth,
      opts.setDepth,
      opts.quiet,
      opts.diff3Cmd,
      opts.ignoreExternals,
      {
        ...opts.ignoreAncestry,
        description: "Allow switching to a node with no common ancestor",
      },
      {
        ...opts.force,
        description: "Handle unversioned obstructions as changes",
      },
      opts.accept,
      {
        ...opts.relocate,
        description: "Deprecated; use 'svn relocate'",
        deprecated: true,
      },
    ],
    args: [
      {
        name: "url",
        description: "Repository URL, optionally followed by @PEGREV",
      },
      { name: "path", isOptional: true, template: "filepaths" },
    ],
  },
  {
    name: "unlock",
    description: "Unlock working copy paths or URLs",
    options: [
      opts.targets,
      { ...opts.force, description: "Break locks" },
      opts.quiet,
    ],
    args: {
      name: "target",
      description: "Working copy path or URL",
      isVariadic: true,
      template: "filepaths",
    },
  },
  {
    name: ["update", "up"],
    description: "Bring changes from the repository into the working copy",
    options: [
      opts.revision,
      { ...opts.nonRecursive, description: "Obsolete; same as --depth=files" },
      opts.depth,
      opts.setDepth,
      opts.quiet,
      opts.diff3Cmd,
      {
        ...opts.force,
        description: "Handle unversioned obstructions as changes",
      },
      opts.ignoreExternals,
      opts.changelist,
      opts.editorCmd,
      opts.accept,
      opts.parents,
      opts.addsAsModification,
    ],
    args: {
      name: "path",
      isVariadic: true,
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: "upgrade",
    description: "Upgrade the metadata storage format for a working copy",
    options: [opts.quiet, opts.compatibleVersion],
    args: {
      name: "wcpath",
      isVariadic: true,
      isOptional: true,
      template: "filepaths",
    },
  },
];

const helpSubcommand: Fig.Subcommand = {
  name: ["help", "?", "h"],
  description: "Describe the usage of this program or its subcommands",
  options: [
    {
      ...opts.verbose,
      description: "Also show experimental subcommands and options",
    },
  ],
  args: {
    name: "subcommand",
    description: "Help about specific subcommand",
    isVariadic: true,
    isOptional: true,
    suggestions: subcommands.map(({ name }): Fig.Suggestion => ({
      name,
      type: "subcommand",
    })),
  },
};

const completionSpec: Fig.Spec = {
  name: "svn",
  description: "Subversion command-line client",
  subcommands: [helpSubcommand, ...subcommands],
  options: [
    {
      name: "--version",
      description: "Show program version information",
    },
    {
      name: ["-q", "--quiet"],
      description: "Print nothing, or only the version number",
      dependsOn: ["--version"],
    },
    {
      name: ["-v", "--verbose"],
      description: "Print extra information (dependency versions)",
      dependsOn: ["--version"],
    },
    {
      name: ["-h", "-?", "--help"],
      description: "Show help on a subcommand",
      isPersistent: true,
    },
    { ...opts.username, isPersistent: true },
    { ...opts.password, isPersistent: true },
    { ...opts.passwordFromStdin, isPersistent: true },
    { ...opts.noAuthCache, isPersistent: true },
    { ...opts.nonInteractive, isPersistent: true },
    { ...opts.forceInteractive, isPersistent: true },
    { ...opts.trustServerCert, isPersistent: true },
    { ...opts.trustServerCertFailures, isPersistent: true },
    { ...opts.configDir, isPersistent: true },
    { ...opts.configOption, isPersistent: true },
  ],
};
export default completionSpec;
