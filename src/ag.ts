// ag (The Silver Searcher) v2.2.0 (latest tag of ggreer/the_silver_searcher, 2018-08; master at a61f178, 2020-12, has the same options, 2026-11-20).
// Source: shallow clone read statically (binary not run): doc/ag.1.md, usage() and the getopt_long option table in src/options.c,
// the file type table in src/lang.c, and the shipped zsh/bash completions. Upstream has had no release since 2.2.0.

// Each entry is a file type flag (for example `ag --html needle`); see `ag --list-file-types`
const fileTypes: Record<string, string[]> = {
  actionscript: ["as", "mxml"],
  ada: ["ada", "adb", "ads"],
  asciidoc: ["adoc", "ad", "asc", "asciidoc"],
  apl: ["apl"],
  asm: ["asm", "s"],
  asp: ["asp", "asa", "aspx", "asax", "ashx", "ascx", "asmx"],
  aspx: ["asp", "asa", "aspx", "asax", "ashx", "ascx", "asmx"],
  batch: ["bat", "cmd"],
  bazel: ["bazel"],
  bitbake: ["bb", "bbappend", "bbclass", "inc"],
  cc: ["c", "h", "xs"],
  cfmx: ["cfc", "cfm", "cfml"],
  chpl: ["chpl"],
  clojure: ["clj", "cljs", "cljc", "cljx", "edn"],
  coffee: ["coffee", "cjsx"],
  config: ["config"],
  coq: ["coq", "g", "v"],
  cpp: ["cpp", "cc", "C", "cxx", "m", "hpp", "hh", "h", "H", "hxx", "tpp"],
  crystal: ["cr", "ecr"],
  csharp: ["cs"],
  cshtml: ["cshtml"],
  css: ["css"],
  cython: ["pyx", "pxd", "pxi"],
  delphi: [
    "pas",
    "int",
    "dfm",
    "nfm",
    "dof",
    "dpk",
    "dpr",
    "dproj",
    "groupproj",
    "bdsgroup",
    "bdsproj",
  ],
  dlang: ["d", "di"],
  dot: ["dot", "gv"],
  dts: ["dts", "dtsi"],
  ebuild: ["ebuild", "eclass"],
  elisp: ["el"],
  elixir: ["ex", "eex", "exs"],
  elm: ["elm"],
  erlang: ["erl", "hrl"],
  factor: ["factor"],
  fortran: [
    "f",
    "F",
    "f77",
    "f90",
    "F90",
    "f95",
    "f03",
    "for",
    "ftn",
    "fpp",
    "FPP",
  ],
  fsharp: ["fs", "fsi", "fsx"],
  gettext: ["po", "pot", "mo"],
  glsl: ["vert", "tesc", "tese", "geom", "frag", "comp"],
  go: ["go"],
  gradle: ["gradle"],
  groovy: ["groovy", "gtmpl", "gpp", "grunit", "gradle"],
  haml: ["haml"],
  handlebars: ["hbs"],
  haskell: ["hs", "hsig", "lhs"],
  haxe: ["hx"],
  hh: ["h"],
  html: ["htm", "html", "shtml", "xhtml"],
  idris: ["idr", "ipkg", "lidr"],
  ini: ["ini"],
  ipython: ["ipynb"],
  isabelle: ["thy"],
  j: ["ijs"],
  jade: ["jade"],
  java: ["java", "properties"],
  jinja2: ["j2"],
  js: ["es6", "js", "jsx", "vue"],
  json: ["json"],
  jsp: ["jsp", "jspx", "jhtm", "jhtml", "jspf", "tag", "tagf"],
  julia: ["jl"],
  kotlin: ["kt"],
  less: ["less"],
  liquid: ["liquid"],
  lisp: ["lisp", "lsp"],
  log: ["log"],
  lua: ["lua"],
  m4: ["m4"],
  make: ["Makefiles", "mk", "mak"],
  mako: ["mako"],
  markdown: ["markdown", "mdown", "mdwn", "mkdn", "mkd", "md"],
  mason: ["mas", "mhtml", "mpl", "mtxt"],
  matlab: ["m"],
  mathematica: ["m", "wl"],
  md: ["markdown", "mdown", "mdwn", "mkdn", "mkd", "md"],
  mercury: ["m", "moo"],
  naccess: ["asa", "rsa"],
  nim: ["nim"],
  nix: ["nix"],
  objc: ["m", "h"],
  objcpp: ["mm", "h"],
  ocaml: ["ml", "mli", "mll", "mly"],
  octave: ["m"],
  org: ["org"],
  parrot: ["pir", "pasm", "pmc", "ops", "pod", "pg", "tg"],
  pdb: ["pdb"],
  perl: ["pl", "pm", "pm6", "pod", "t"],
  php: ["php", "phpt", "php3", "php4", "php5", "phtml"],
  pike: ["pike", "pmod"],
  plist: ["plist"],
  plone: ["pt", "cpt", "metadata", "cpy", "py", "xml", "zcml"],
  powershell: ["ps1"],
  proto: ["proto"],
  ps1: ["ps1"],
  pug: ["pug"],
  puppet: ["pp"],
  python: ["py"],
  qml: ["qml"],
  racket: ["rkt", "ss", "scm"],
  rake: ["Rakefile"],
  razor: ["cshtml"],
  restructuredtext: ["rst"],
  rs: ["rs"],
  r: ["r", "R", "Rmd", "Rnw", "Rtex", "Rrst"],
  rdoc: ["rdoc"],
  ruby: ["rb", "rhtml", "rjs", "rxml", "erb", "rake", "spec"],
  rust: ["rs"],
  salt: ["sls"],
  sass: ["sass", "scss"],
  scala: ["scala"],
  scheme: ["scm", "ss"],
  shell: ["sh", "bash", "csh", "tcsh", "ksh", "zsh", "fish"],
  smalltalk: ["st"],
  sml: ["sml", "fun", "mlb", "sig"],
  sql: ["sql", "ctl"],
  stata: ["do", "ado"],
  stylus: ["styl"],
  swift: ["swift"],
  tcl: ["tcl", "itcl", "itk"],
  terraform: ["tf", "tfvars"],
  tex: ["tex", "cls", "sty"],
  thrift: ["thrift"],
  tla: ["tla"],
  tt: ["tt", "tt2", "ttml"],
  toml: ["toml"],
  ts: ["ts", "tsx"],
  twig: ["twig"],
  vala: ["vala", "vapi"],
  vb: ["bas", "cls", "frm", "ctl", "vb", "resx"],
  velocity: ["vm", "vtl", "vsl"],
  verilog: ["v", "vh", "sv", "svh"],
  vhdl: ["vhd", "vhdl"],
  vim: ["vim"],
  vue: ["vue"],
  wix: ["wxi", "wxs"],
  wsdl: ["wsdl"],
  wadl: ["wadl"],
  xml: ["xml", "dtd", "xsl", "xslt", "xsd", "ent", "tld", "plist", "wsdl"],
  yaml: ["yaml", "yml"],
  zeek: ["zeek", "bro", "bif"],
  zephir: ["zep"],
};

// ag accepts both the --noX and --no-X spellings of its negated flags
const negated = (name: string): string[] => [`--no${name}`, `--no-${name}`];

// Builds a --X / --noX pair; `shortName` is an optional short alias of --X
const toggle = (
  name: string,
  description: { on: string; off: string },
  shortName?: string
): Fig.Option[] => {
  const on = shortName ? [shortName, `--${name}`] : [`--${name}`];
  const off = negated(name);
  return [
    {
      name: shortName ? on : on[0],
      description: description.on,
      exclusiveOn: off,
    },
    { name: off, description: description.off, exclusiveOn: on },
  ];
};

const colorCodeArg = (what: string, defaultValue: string): Fig.Arg => ({
  name: "CODE",
  description: `ANSI color codes for ${what}`,
  default: defaultValue,
});

const linesArg: Fig.Arg = {
  name: "LINES",
  description: "The amount of lines",
  isOptional: true,
  default: "2",
};

const completionSpec: Fig.Spec = {
  name: "ag",
  description:
    "Recursively search for PATTERN in PATH. Like grep or ack, but faster",
  args: [
    {
      name: "pattern",
      description: "The pattern to search for",
      isOptional: true,
    },
    {
      name: "path",
      isOptional: true,
      isVariadic: true,
      template: ["filepaths"],
    },
  ],
  options: [
    {
      name: "--ackmate",
      description:
        "Output results in a format parseable by AckMate https://github.com/protocool/AckMate",
    },
    {
      name: "--ackmate-dir-filter",
      description: "Set a directory name filter regex (used by AckMate)",
      args: {
        name: "REGEX",
        description: "The directory filter regex",
      },
      hidden: true,
    },
    ...toggle("affinity", {
      on: "Set thread affinity (if platform supports it). Default is true",
      off: "Don't set thread affinity (if platform supports it)",
    }),
    {
      name: ["-a", "--all-types"],
      description:
        "Search all files. This doesn't include hidden files, and doesn't respect any ignore files",
    },
    {
      name: ["-A", "--after"],
      description: "Print lines after match",
      args: linesArg,
    },
    {
      name: ["-B", "--before"],
      description: "Print lines before match",
      args: linesArg,
    },
    ...toggle("break", {
      on: "Print a newline between matches in different files. Enabled by default",
      off: "Don't print a newline between matches in different files",
    }),
    {
      name: ["-c", "--count"],
      description:
        "Only print the number of matches in each file. Note: This is the number of matches, not the number of matching lines. Pipe output to wc -l if you want the number of matching lines",
    },
    ...toggle("color", {
      on: "Print color codes in results. Enabled by default",
      off: "Don't print color codes in results",
    }),
    {
      name: "--color-line-number",
      description: "Color codes for line numbers. Default is 1;33",
      args: colorCodeArg("line numbers", "1;33"),
    },
    {
      name: "--color-match",
      description: "Color codes for result match numbers. Default is 30;43",
      args: colorCodeArg("matches", "30;43"),
    },
    {
      name: "--color-path",
      description: "Color codes for path names. Default is 1;32",
      args: colorCodeArg("path names", "1;32"),
    },
    {
      name: "--color-win-ansi",
      description:
        "Use ANSI colors on Windows even where native colors can be used (Windows only)",
    },
    { name: "--column", description: "Print column numbers in results" },
    {
      name: ["-C", "--context"],
      description: "Print lines before and after matches",
      args: linesArg,
    },
    {
      name: ["-D", "--debug"],
      description:
        "Output ridiculous amounts of debugging info. Not useful unless you're actually debugging",
    },
    {
      name: "--depth",
      description: "Search up to NUM directories deep, -1 for unlimited",
      args: {
        name: "NUM",
        description: "The depth in directories to search",
        default: "25",
      },
    },
    ...toggle("filename", {
      on: "Print file names. Enabled by default, except when searching a single file",
      off: "Don't print file names",
    }),
    ...toggle(
      "follow",
      {
        on: "Follow symlinks. Default is false",
        off: "Don't follow symlinks",
      },
      "-f"
    ),
    {
      name: ["-F", "--fixed-strings"],
      description: "Alias for --literal for compatibility with grep",
    },
    ...toggle("group", {
      on: "Lump multiple matches in the same file together and present them under a single occurrence of the filename. This is the default",
      off: "Refrain from lumping matches in the same file together, and instead place the filename at the start of each match line",
    }),
    {
      name: ["-g", "--filename-pattern"],
      description: "Print filenames matching PATTERN",
      args: {
        name: "PATTERN",
        description: "The pattern to look for",
      },
    },
    {
      name: ["-G", "--file-search-regex"],
      description: "Only search files whose names match PATTERN",
      args: {
        name: "PATTERN",
        description: "The pattern to look for",
      },
    },
    ...toggle(
      "heading",
      {
        on: "Print filenames above matching contents",
        off: "Don't print filenames above matching contents",
      },
      "-H"
    ),
    { name: ["-h", "--help"], description: "Show help" },
    {
      name: "--hidden",
      description: "Search hidden files. This option obeys ignored files",
    },
    {
      name: "--ignore",
      description:
        "Ignore files/directories whose names match this pattern. Literal file and directory names are also allowed",
      args: {
        name: "PATTERN",
        description: "The pattern to look for",
        template: ["filepaths", "folders"],
      },
    },
    {
      name: "--ignore-dir",
      description: "Alias for --ignore for compatibility with ack",
      args: {
        name: "NAME",
        description: "The directory to ignore",
        template: ["filepaths", "folders"],
      },
    },
    { name: ["-i", "--ignore-case"], description: "Match case-insensitively" },
    {
      name: ["-l", "--files-with-matches"],
      description:
        "Only print the names of files containing matches, not the matching lines. An empty query will print all files that would be searched",
    },
    {
      name: ["-L", "--files-without-matches"],
      description: "Only print the names of files that don't contain matches",
    },
    {
      name: "--line-numbers",
      description: "Print line numbers. Deprecated, use --numbers instead",
      deprecated: true,
    },
    {
      name: "--list-file-types",
      description: "List the supported file types and their file extensions",
    },
    {
      name: ["-m", "--max-count"],
      description:
        "Skip the rest of a file after NUM matches. Default is 0, which never skips",
      args: {
        name: "NUM",
        description: "The number of matches to skip after",
      },
    },
    {
      name: "--match",
      description: "Accepted but has no effect",
      hidden: true,
    },
    ...toggle("mmap", {
      on: "Use memory-mapped I/O. Defaults to true on platforms where mmap() is faster than read() (all but macOS)",
      off: "Don't use memory-mapped I/O",
    }),
    ...toggle("multiline", {
      on: "Match regexes across newlines. Enabled by default",
      off: "Don't match regexes across newlines",
    }),
    {
      name: ["-n", "--norecurse", "--no-recurse"],
      description: "Don't recurse into directories",
      exclusiveOn: ["-r", "--recurse"],
    },
    ...toggle("numbers", {
      on: "Print line numbers. Default is to omit line numbers when searching streams",
      off: "Don't print line numbers",
    }),
    {
      name: ["-o", "--only-matching"],
      description: "Print only the matching part of the lines",
    },
    {
      name: "--one-device",
      description:
        "When recursing directories, don't scan dirs that reside on other storage devices. This lets you avoid scanning slow network mounts. This feature is not supported on all platforms",
    },
    {
      name: ["-p", "--path-to-ignore"],
      description: "Provide a path to a specific .ignore file",
      args: {
        name: "STRING",
        description: "The path to the ignore file",
        template: "filepaths",
      },
    },
    {
      name: "--pager",
      description:
        "Use a pager such as less. Use --nopager to override. This option is also ignored if output is piped to another program",
      args: {
        name: "COMMAND",
        description: "The pager",
        suggestions: ["more", "less", "most"],
      },
    },
    {
      name: negated("pager"),
      description: "Don't use a pager",
    },
    {
      name: "--parallel",
      description:
        'Parse the input stream as a search term, not data to search. This is meant to be used with tools such as GNU parallel. For example: echo "foo\\nbar\\nbaz" | parallel "ag {} ." will run 3 instances of ag, searching the current directory for "foo", "bar", and "baz"',
    },
    {
      name: ["--passthrough", "--passthru"],
      description:
        "When searching a stream, print all lines even if they don't match",
    },
    {
      name: "--print-all-files",
      description:
        "Print headings for all files searched, even those that don't contain matches",
    },
    {
      name: "--print-long-lines",
      description:
        "Print matches on very long lines (> 2k characters by default)",
    },
    {
      name: ["-Q", "--literal"],
      description:
        "Do not parse PATTERN as a regular expression. Try to match it literally",
    },
    {
      name: ["-r", "--recurse"],
      description: "Recurse into directories when searching. Default is true",
      exclusiveOn: ["-n", "--norecurse", "--no-recurse"],
    },
    {
      name: ["-s", "--case-sensitive"],
      description: "Match case-sensitively",
    },
    {
      name: ["-S", "--smart-case"],
      description:
        "Match case-sensitively if there are any uppercase letters in PATTERN, case-insensitively otherwise. Enabled by default",
    },
    {
      name: "--search-binary",
      description: "Search binary files for matches",
    },
    {
      name: "--search-files",
      description: "Search files instead of the data piped to standard input",
      hidden: true,
    },
    {
      name: "--silent",
      description: "Suppress all log messages, including errors",
    },
    {
      name: "--stats",
      description: "Print stats (files scanned, time taken, etc)",
    },
    {
      name: "--stats-only",
      description:
        "Print stats (files scanned, time taken, etc) and nothing else",
    },
    {
      name: ["-t", "--all-text"],
      description: "Search all text files. This doesn't include hidden files",
    },
    {
      name: ["-u", "--unrestricted"],
      description:
        "Search all files. This ignores .ignore, .gitignore, etc. It searches binary and hidden files as well",
    },
    {
      name: ["-U", "--skip-vcs-ignores"],
      description:
        "Ignore VCS ignore files (.gitignore, .hgignore), but still use .ignore",
    },
    {
      name: ["-v", "--invert-match"],
      description: "Match every line not containing the specified pattern",
    },
    { name: ["-V", "--version"], description: "Print version info" },
    {
      name: "--vimgrep",
      description:
        "Output results in the same form as Vim's :vimgrep /pattern/g. Use it with set grepprg=ag\\ --vimgrep\\ $* and set grepformat=%f:%l:%c:%m in ~/.vimrc, then use :grep, :copen, :cn, :cp, etc",
    },
    { name: ["-w", "--word-regexp"], description: "Only match whole words" },
    {
      name: "--workers",
      description:
        "Use NUM worker threads. Default is the number of CPU cores, with a max of 8",
      args: {
        name: "NUM",
        description: "The NUM of worker threads",
      },
    },
    {
      name: ["-W", "--width"],
      description: "Truncate match lines after NUM characters",
      args: {
        name: "NUM",
        description: "The maximum number of characters per match line",
      },
    },
    {
      name: ["-z", "--search-zip"],
      description:
        "Search contents of compressed files. Currently, gz and xz are supported. This option requires that ag is built with lzma and zlib",
    },
    {
      name: ["-0", "--null", "--print0"],
      description:
        "Separate the filenames with \\0, rather than \\n: this allows xargs -0 <command> to correctly process filenames containing spaces or newlines",
    },
    ...Object.entries(fileTypes).map(([name, extensions]): Fig.Option => ({
      name: `--${name}`,
      description: `Search only ${extensions.map((e) => `.${e}`).join(", ")} files`,
    })),
  ],
};

export default completionSpec;
