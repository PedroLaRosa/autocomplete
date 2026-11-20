// split (macOS BSD split, Apple OSS text_cmds-199 (split unchanged since text_cmds-190.0.1 / macOS 15), man page dated 2023-05-26, 2026-11-19). Source: apple-oss-distributions/text_cmds split/split.1 + split/split.c (getopt "0::..9::a:b:cdl:n:p:"); man page and source only, not run on macOS. Changes: added -c and -n, -b/-l/-n/-p are mutually exclusive (usage() in split.c), -a default documented, descriptions refreshed. GNU-only options (--suffix-length, -e, -t, --filter, ...) are not on macOS and are not listed.
const completionSpec: Fig.Spec = {
  name: "split",
  description:
    "The split utility reads the given file and breaks it up into files of 1000 lines each (if no options are specified), leaving the file unchanged. If file is a single dash ('-') or absent, split reads from the standard input",
  options: [
    {
      name: "-a",
      description:
        "Use suffix_length letters to form the suffix of the file name (two letters by default)",
      args: {
        name: "suffix_length",
      },
    },
    {
      name: "-b",
      description:
        "Create split files byte_count bytes in length. If k or K is appended to the number, the file is split into byte_count kilobyte pieces. If m or M is appended to the number, the file is split into byte_count megabyte pieces.  If g or G is appended to the number, the file is split into byte_count gigabyte pieces",
      args: {
        name: "byte_count",
        description: "N[K|k|M|m|G|g]",
      },
      exclusiveOn: ["-l", "-n", "-p"],
    },
    {
      name: "-c",
      description:
        "Continue creating files and do not overwrite existing output files",
    },
    {
      name: "-d",
      description: "Use a numeric suffix instead of an alphabetic suffix",
    },
    {
      name: "-l",
      description:
        "Create split files line_count lines in length (1000 by default)",
      args: {
        name: "line_count",
      },
      exclusiveOn: ["-b", "-n", "-p"],
    },
    {
      name: "-n",
      description:
        "Split file into chunk_count smaller files. The first n - 1 files will be of size (size of file / chunk_count) and the last file will contain the remaining bytes",
      args: {
        name: "chunk_count",
      },
      exclusiveOn: ["-b", "-l", "-p"],
    },
    {
      name: "-p",
      description:
        "The file is split whenever an input line matches pattern, which is interpreted as an extended regular expression. The matching line will be the first line of the next output file. This option is incompatible with the -b, -l and -n options",
      args: {
        name: "pattern",
      },
      exclusiveOn: ["-b", "-l", "-n"],
    },
  ],
  args: [
    {
      name: "file",
      description: "The file to split",
      template: "filepaths",
      isOptional: true,
    },
    {
      name: "prefix",
      description:
        "Prefix for the names of the files into which the file is split",
      suggestions: ["x"],
      default: "x",
      isOptional: true,
    },
  ],
};
export default completionSpec;
