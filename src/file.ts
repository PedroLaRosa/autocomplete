// file 5.41 as shipped in macOS 15 (apple-oss-distributions/file tag file-103, man page file.man dated 2021-02-05, 2026-11-19). Source: doc/file.man, src/file.c and src/file_opts.h from the Apple mirror (not a live run on macOS; compared against GNU file 5.45 `--help` on Linux).
// Unix2003 mode (macOS default) is documented: -d, -D, -i, -I and -M are valid. --apple is GNU-only (not in Apple's file_opts.h).
import { keyValue } from "@tabsmith/autocomplete-generators";

const testNames = [
  "apptype",
  "ascii",
  "cdf",
  "compress",
  "csv",
  "elf",
  "encoding",
  "json",
  "soft",
  "tar",
  "text",
  "tokens",
];

const testArg: Fig.Arg = {
  name: "testname",
  suggestions: testNames,
};

const magicListArg: Fig.Arg = {
  name: "list",
  template: "filepaths",
};

const completionSpec: Fig.Spec = {
  name: "file",
  description: "Determine file type",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      name: "--help",
      description: "Print a help message and exit",
    },
    {
      name: "--apple",
      description:
        "Output the file type and creator code as used by older macOS versions (GNU file only)",
    },
    {
      name: ["--brief", "-b"],
      description: "Do not prepend filenames to output lines (brief mode)",
    },
    {
      name: ["--checking-printout", "-c"],
      description:
        "Print the parsed form of the magic file, usually combined with -m to debug a new magic file",
    },
    {
      name: ["--compile", "-C"],
      description:
        "Write a magic.mgc output file that contains a pre-parsed version of the magic file or directory",
    },
    {
      name: "-d",
      description:
        "Apply the default system tests; this is the default behavior unless -M is specified",
    },
    {
      name: ["--debug", "-D"],
      description: "Print debugging messages",
    },
    {
      name: "-E",
      description:
        "On filesystem errors (file not found etc.), issue an error message and exit instead of handling it as regular output",
    },
    {
      name: ["--exclude", "-e"],
      description:
        "Exclude the named test from the list of tests made to determine the file type",
      args: testArg,
    },
    {
      name: "--exclude-quiet",
      description:
        "Like --exclude but ignore tests that file does not know about",
      args: testArg,
    },
    {
      name: "--extension",
      description:
        "Print a slash-separated list of valid extensions for the file type found",
    },
    {
      name: ["--separator", "-F"],
      description:
        "Use the specified string as the separator between the filename and the file result returned",
      args: {
        name: "separator",
        suggestions: [":"],
        default: ":",
      },
    },
    {
      name: ["--files-from", "-f"],
      description:
        "Read the names of the files to be examined from namefile (one per line) before the argument list",
      args: {
        name: "namefile",
        template: "filepaths",
      },
    },
    {
      name: ["--no-dereference", "-h"],
      description: "Do not follow symlinks",
    },
    {
      name: "-i",
      description:
        "If the file is a regular file, do not classify its contents",
    },
    {
      name: ["--mime", "-I"],
      description:
        "Output MIME type strings rather than the more traditional human readable ones",
    },
    {
      name: "--mime-type",
      description: "Like -I, but print only the MIME type",
    },
    {
      name: "--mime-encoding",
      description: "Like -I, but print only the MIME encoding",
    },
    {
      name: ["--keep-going", "-k"],
      description: "Do not stop at the first match, keep going",
    },
    {
      name: ["--list", "-l"],
      description:
        "Show a list of patterns and their strength sorted descending by magic(5) strength",
    },
    {
      name: ["--dereference", "-L"],
      description: "Follow symlinks (this is the default behavior)",
    },
    {
      name: ["--magic-file", "-m"],
      description:
        "Specify an alternate colon-separated list of files and directories containing magic",
      args: magicListArg,
    },
    {
      name: "-M",
      description:
        "Like -m, except that the default rules are not applied unless -d is specified",
      args: magicListArg,
    },
    {
      name: ["--no-buffer", "-n"],
      description: "Force stdout to be flushed after checking each file",
    },
    {
      name: ["--no-pad", "-N"],
      description: "Do not pad filenames so that they align in the output",
    },
    {
      name: ["--preserve-date", "-p"],
      description:
        "Attempt to preserve the access time of files analyzed, to pretend that file never read them",
    },
    {
      name: ["--parameter", "-P"],
      description: "Set various parameter limits",
      isRepeatable: true,
      args: {
        name: "name=value",
        generators: keyValue({
          keys: [
            {
              name: "bytes",
              description: "Max bytes to read from file (default 1048576)",
            },
            {
              name: "elf_notes",
              description: "Max ELF notes processed (default 256)",
            },
            {
              name: "elf_phnum",
              description: "Max ELF program sections processed (default 2048)",
            },
            {
              name: "elf_shnum",
              description: "Max ELF sections processed (default 32768)",
            },
            {
              name: "encoding",
              description: "Max bytes to scan for encoding (default 65536)",
            },
            {
              name: "indir",
              description: "Recursion limit for indirect magic (default 50)",
            },
            {
              name: "name",
              description: "Use count limit for name/use magic (default 60)",
            },
            {
              name: "regex",
              description: "Length limit for regex searches (default 8192)",
            },
          ],
          values: [
            "1048576",
            "256",
            "2048",
            "32768",
            "65536",
            "50",
            "60",
            "8192",
          ],
        }),
      },
    },
    {
      name: ["--raw", "-r"],
      description: "No operation, included for historical compatibility",
    },
    {
      name: ["--special-files", "-s"],
      description:
        "Also read argument files which are block or character special files, for example raw disk partitions",
    },
    {
      name: ["--no-sandbox", "-S"],
      description: "Disable system call sandboxing",
    },
    {
      name: ["--version", "-v"],
      description: "Print the version of the program and exit",
    },
    {
      name: ["--uncompress", "-z"],
      description: "Try to look inside compressed files",
    },
    {
      name: ["--uncompress-noreport", "-Z"],
      description:
        "Try to look inside compressed files, but report information about the contents only, not the compression",
    },
    {
      name: ["--print0", "-0"],
      description: "Output a null character after the end of the filename",
    },
  ],
  args: {
    name: "file",
    description: "File name(s)",
    template: "filepaths",
    isOptional: true,
    isVariadic: true,
  },
};

export default completionSpec;
