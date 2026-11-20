// dos2unix v7.5.7 (upstream release 2026-08-27 per NEWS.txt, same as Homebrew, 2026-11-19). Source: dos2unix-7.5.7 source tarball (man/man1/dos2unix.pod, PrintUsage and the option parser in common.c); read only, the binary was not built or run.
// Windows-only options (-D/--display-enc, -gb/--gb18030) are left out because the source only builds them on Windows.
const infoFlags: Fig.Suggestion[] = [
  {
    name: "0",
    description:
      "Print the file information lines followed by a null character instead of a newline",
  },
  { name: "d", description: "Print number of DOS line breaks" },
  { name: "u", description: "Print number of Unix line breaks" },
  { name: "m", description: "Print number of Mac line breaks" },
  { name: "b", description: "Print the byte order mark" },
  { name: "t", description: "Print if file is text or binary" },
  {
    name: "e",
    description:
      "Print the type of the line break of the last line, or noeol if there is none",
  },
  { name: "c", description: "Print only the files that would be converted" },
  { name: "h", description: "Print a header" },
  { name: "p", description: "Show file names without path" },
];

const infoArg: Fig.Arg = {
  name: "FLAGS",
  description: "One or more flags that change the output",
  isOptional: true,
  suggestions: infoFlags,
};

const completionSpec: Fig.Spec = {
  name: "dos2unix",
  description: "DOS to Unix file format converter",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help for dos2unix",
    },
    {
      name: "--",
      description:
        "Treat all following options as file names. Use this option if you want to convert files whose names start with a dash",
    },
    {
      name: "--allow-chown",
      description: "Allow file ownership change in old file mode",
    },
    {
      name: "-ascii",
      description:
        "Convert only line breaks. This is the default conversion mode",
    },
    {
      name: "-iso",
      description: "Conversion between DOS and ISO-8859-1 character set",
    },
    {
      name: "-1252",
      description: "Use Windows code page 1252 (Western European)",
    },
    {
      name: "-437",
      description:
        "Use DOS code page 437 (US). This is the default code page used for ISO conversion",
    },
    {
      name: "-850",
      description: "Use DOS code page 850 (Western European)",
    },
    {
      name: "-860",
      description: "Use DOS code page 860 (Portuguese)",
    },
    {
      name: "-863",
      description: "Use DOS code page 863 (French Canadian)",
    },
    {
      name: "-865",
      description: "Use DOS code page 865 (Nordic)",
    },
    {
      name: "-7",
      description: "Convert 8 bit characters to 7 bit space",
    },
    {
      name: ["-b", "--keep-bom"],
      description:
        "Keep Byte Order Mark (BOM). When the input file has a BOM, write a BOM in the output file",
    },
    {
      name: ["-c", "--convmode"],
      description: "Set conversion mode",
      args: {
        name: "CONVMODE",
        suggestions: ["ascii", "7bit", "iso", "mac"],
      },
    },
    {
      name: ["-e", "--add-eol"],
      description:
        "Add a line break to the last line if there isn't one. This works for every conversion",
    },
    {
      name: "--error-binary",
      description: "Return an error if a binary file is skipped",
    },
    {
      name: ["-f", "--force"],
      description: "Force conversion of binary files",
    },
    {
      name: "-i",
      description: "Display file information. No conversion is done",
      insertValue: "-i{cursor}",
      exclusiveOn: ["--info"],
      args: infoArg,
    },
    {
      name: "--info",
      description: "Display file information. No conversion is done",
      requiresSeparator: true,
      exclusiveOn: ["-i"],
      args: infoArg,
    },
    {
      name: ["-k", "--keepdate"],
      description: "Keep the date stamp of output file same as input file",
    },
    {
      name: ["-L", "--license"],
      description: "Display program's license",
    },
    {
      name: ["-l", "--newline"],
      description: "Add additional newline",
    },
    {
      name: ["-m", "--add-bom"],
      description:
        "Write a Byte Order Mark (BOM) in the output file. By default an UTF-8 BOM is written",
    },
    {
      name: ["-n", "--newfile"],
      description:
        "New file mode. Convert file INFILE and write output to file OUTFILE. File names must be given in pairs and wildcard names should not be used or you will lose your files",
      args: [
        {
          name: "INFILE",
          template: "filepaths",
        },
        {
          name: "OUTFILE",
          template: "filepaths",
          suggestCurrentToken: true,
        },
      ],
    },
    {
      name: "--no-add-eol",
      description:
        "Do not add a line break to the last line if there isn't one (default)",
    },
    {
      name: "--no-allow-chown",
      description:
        "Don't allow file ownership change in old file mode (default)",
    },
    {
      name: "--no-error-binary",
      description:
        "Do not return an error if a binary file is skipped (default)",
    },
    {
      name: ["-O", "--to-stdout"],
      description:
        "Write to standard output, like a Unix filter. Use option -o to go back to old file (in-place) mode",
    },
    {
      name: ["-o", "--oldfile"],
      description:
        "Old file mode. Convert file FILE and overwrite output to it. The program defaults to run in this mode",
      args: {
        name: "FILE",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: ["-q", "--quiet"],
      description:
        "Quiet mode. Suppress all warnings and messages. The return value is zero.  Except when wrong command-line options are used",
    },
    {
      name: ["-r", "--remove-bom"],
      description:
        "Remove Byte Order Mark (BOM). Do not write a BOM in the output file",
    },
    {
      name: ["-s", "--safe"],
      description: "Skip binary files (default)",
    },
    {
      name: ["-u", "--keep-utf16"],
      description: "Keep UTF-16 encoding",
    },
    {
      name: ["-ul", "--assume-utf16le"],
      description: "Assume that the input format is UTF-16LE",
    },
    {
      name: ["-ub", "--assume-utf16be"],
      description: "Assume that the input format is UTF-16BE",
    },
    {
      name: ["-v", "--verbose"],
      description: "Verbose operation",
    },
    {
      name: ["-F", "--follow-symlink"],
      description: "Follow symbolic links and convert the targets",
    },
    {
      name: ["-R", "--replace-symlink"],
      description: "Replace symbolic links with converted files",
    },
    {
      name: ["-S", "--skip-symlink"],
      description: "Keep symbolic links and targets unchanged (default)",
    },
    {
      name: ["-V", "--version"],
      description: "Display version number",
    },
  ],
  args: {
    name: "file",
    isVariadic: true,
    isOptional: true,
    template: "filepaths",
  },
};
export default completionSpec;
