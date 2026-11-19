// sort (macOS BSD sort 2.3-Apple, Apple OSS text_cmds-199 (identical to text_cmds-190.0.1 / macOS 15), man page dated 2019-09-04, 2026-11-19). Source: apple-oss-distributions/text_cmds sort/sort.1.in + sort/sort.c (getopt_long OPTIONS "bcCdfghik:Mmno:RrsS:t:T:uVz", long_options table, SORT_THREADS enabled in xcconfigs/sort.xcconfig); man pages and source only, not run on macOS. Changes: -c is a plain flag and --check[=diagnose-first|silent|quiet] takes an optional argument (separate -C added), added --stable, -k takes one field1[,field2] argument and is repeatable, --parallel takes a thread count, descriptions refreshed. No GNU-only options are listed.
const completionSpec: Fig.Spec = {
  name: "sort",
  description: "Sort or merge records (lines) of text and binary files",
  args: {
    name: "file",
    isVariadic: true,
    template: "filepaths",
  },
  options: [
    {
      name: "--help",
      description: "Print the help text and exit",
    },
    {
      name: "--version",
      description: "Print the version and exit",
    },
    {
      name: "-c",
      description:
        "Check that the single input file is sorted. Exit with code 1 and a diagnostic if it is not",
    },
    {
      name: "--check",
      description:
        "Check that the single input file is sorted. With silent or quiet, produce no output",
      requiresSeparator: true,
      args: {
        name: "mode",
        isOptional: true,
        suggestions: [
          {
            name: "diagnose-first",
            description: "Print a diagnostic for the first disorder (default)",
          },
          { name: "silent", description: "Produce no output, same as -C" },
          { name: "quiet", description: "Produce no output, same as -C" },
        ],
      },
    },
    {
      name: "-C",
      description:
        "Check that the single input file is sorted, without producing any output (same as --check=silent)",
    },
    {
      name: ["-m", "--merge"],
      description:
        "Merge only. The input files are assumed to be pre-sorted. If they are not sorted the output order is undefined",
    },
    {
      name: ["-o", "--output"],
      description:
        "Print the output to the output file instead of the standard output",
      args: {
        name: "output",
        template: "filepaths",
      },
    },
    {
      name: ["-S", "--buffer-size"],
      description:
        "Use size for the maximum size of the memory buffer (size modifiers %, b, K, M, G, T, P, E, Z, Y can be used)",
      args: {
        name: "size",
      },
    },
    {
      name: ["-T", "--temporary-directory"],
      description:
        "Store temporary files in the directory dir (default is $TMPDIR or /var/tmp)",
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: ["-u", "--unique"],
      description:
        "Unique keys. Suppress all lines that have a key that is equal to an already processed one (implies a stable sort)",
    },
    {
      name: ["-s", "--stable"],
      description:
        "Stable sort. This option maintains the original record order of records that have an equal key",
    },
    {
      name: ["-b", "--ignore-leading-blanks"],
      description: "Ignore leading blank characters when comparing lines",
    },
    {
      name: ["-d", "--dictionary-order"],
      description:
        "Consider only blank spaces and alphanumeric characters in comparisons",
    },
    {
      name: ["-f", "--ignore-case"],
      description:
        "Convert all lowercase characters to their uppercase equivalent before comparison",
    },
    {
      name: ["-g", "--general-numeric-sort"],
      description: "Sort by general numerical value",
    },
    {
      name: ["-h", "--human-numeric-sort"],
      description:
        "Sort by numerical value, but take into account the SI suffix, if present",
    },
    {
      name: ["-i", "--ignore-nonprinting"],
      description: "Ignore all non-printable characters",
    },
    {
      name: ["-M", "--month-sort"],
      description:
        "Sort by month abbreviations.  Unknown strings are considered smaller than the month names",
    },
    {
      name: ["-n", "--numeric-sort"],
      description: "Sort fields numerically by arithmetic value",
    },
    {
      name: ["-R", "--random-sort"],
      description:
        "Sort by a random order (a random permutation in which equal keys sort together)",
    },
    {
      name: ["-r", "--reverse"],
      description: "Sort in reverse order",
    },
    {
      name: ["-V", "--version-sort"],
      description: "Sort version numbers",
    },
    {
      name: ["-k", "--key"],
      args: {
        name: "field1[,field2]",
      },
      isRepeatable: true,
      description:
        "Define a restricted sort key that has the starting position field1, and optional ending position field2",
    },
    {
      name: ["-t", "--field-separator"],
      args: {
        name: "char",
      },
      description: "Use char as a field separator character",
    },
    {
      name: ["-z", "--zero-terminated"],
      description: "Use NUL as record separator",
    },
    {
      name: "--batch-size",
      args: {
        name: "num",
      },
      description:
        "Specify maximum number of files that can be opened by sort at once (default is 16)",
    },
    {
      name: "--compress-program",
      args: {
        name: "PROGRAM",
        template: "filepaths",
      },
      description: "Use PROGRAM to compress temporary files (e.g. bzip2)",
    },
    {
      name: "--random-source",
      args: {
        name: "filename",
        template: "filepaths",
      },
      description:
        "In random sort, the file content is used as the source of the 'seed' data for the hash function choice (default is /dev/random)",
    },
    {
      name: "--debug",
      description:
        "Print some extra information about the sorting process to the standard output",
    },
    {
      name: "--parallel",
      args: {
        name: "thread_no",
      },
      description:
        "Set the maximum number of execution threads. Default number equals to the number of CPUs",
    },
    {
      name: "--files0-from",
      args: {
        name: "filename",
        template: "filepaths",
      },
      description: "Take the input file list from the file filename",
    },
    {
      name: "--radixsort",
      description: "Try to use radix sort, if the sort specifications allow",
    },
    {
      name: "--mergesort",
      description:
        "Use mergesort.  This is a universal algorithm that can always be used, but it is not always the fastest",
    },
    {
      name: "--qsort",
      description:
        "Try to use quick sort, if the sort specifications allow.  This sort algorithm cannot be used with -u and -s",
    },
    {
      name: "--heapsort",
      description:
        "Try to use heap sort, if the sort specifications allow.  This sort algorithm cannot be used with -u and -s",
    },
    {
      name: "--mmap",
      description:
        "Try to use file memory mapping system call.  It may increase speed in some cases",
    },
    {
      name: "--sort",
      args: {
        name: "type",
        suggestions: [
          "general-numeric",
          "human-numeric",
          "month",
          "numeric",
          "random",
        ],
      },
      description: "Select how to sort values",
    },
  ],
};

export default completionSpec;
