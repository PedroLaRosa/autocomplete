// GNU Make v4.4.1 (latest release, tag 4.4.1 of the mirror/make GitHub mirror, Homebrew formula agrees; 2026-11-19).
// Source: static read of src/main.c (usage text and switch table), doc/make.1 and doc/make.texi at that tag; make was not run on
// macOS (Apple ships make 3.81). Removed the invented -N/--Next-option; dropped the target args that -B and -e never took.
const listTargets: Fig.Generator = {
  custom: async (tokens, executeShellCommand) => {
    // Plain target suggestions. These will be overridden if we can find a description for them.
    const { stdout } = await executeShellCommand({
      command: "bash",
      args: [
        "-c",
        "make -qp | awk -F':' '/^[a-zA-Z0-9][^$#\\/\\t=]*:([^=]|$)/ {split($1,A,/ /);for(i in A)print A[i]}' | sort -u",
      ],
    });

    const targetSuggestions = new Map<string, Fig.Suggestion>();

    for (const target of stdout.split("\n")) {
      if (target === "Makefile") continue;
      targetSuggestions.set(target, {
        name: target.trim(),
        description: "Make target",
        icon: "🎯",
        priority: 80,
      });
    }

    const { stdout: makefile } = await executeShellCommand({
      command: "cat",
      args: ["Makefile", "makefile"],
    });

    const matches = makefile.matchAll(
      /((?:^#.*\n)*)(?:^\.[A-Z_]+:.*\n)*(^\S*?):.*?(?:\s#+[ \t]*(.+))?$/gm
    );
    const specialTargets = new Set([
      ".PHONY",
      ".SUFFIXES",
      ".DEFAULT",
      ".PRECIOUS",
      ".INTERMEDIATE",
      ".SECONDARY",
      ".SECONDEXPANSION",
      ".DELETE_ON_ERROR",
      ".IGNORE",
      ".LOW_RESOLUTION_TIME",
      ".SILENT",
      ".EXPORT_ALL_VARIABLES",
      ".NOTPARALLEL",
      ".ONESHELL",
      ".POSIX",
    ]);
    for (const match of matches) {
      const [_, leadingComment, target, inlineComment] = match;

      if (specialTargets.has(target)) continue;
      if (/\$\(.+?\)/.test(target)) continue;

      const name = target.trim();

      const description = inlineComment
        ? inlineComment.trim()
        : leadingComment
          ? leadingComment.replace(/^#+\s*/gm, "").trim()
          : "Make target";

      targetSuggestions.set(name, {
        name,
        description,
        icon: "🎯",
        priority: 80,
      });
    }
    return [...targetSuggestions.values()];
  },
};

const completionSpec: Fig.Spec = {
  name: "make",
  args: {
    name: "target",
    generators: listTargets,
  },
  options: [
    {
      name: ["-b", "-m"],
      description: "Ignored for compatibility",
    },
    {
      name: ["-B", "--always-make"],
      description: "Unconditionally make all targets",
    },
    {
      name: ["-C", "--directory"],
      description: "Change to DIRECTORY before doing anything",
      isRepeatable: true,
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "-d",
      description: "Print lots of debugging information",
    },
    {
      name: "--debug",
      description: "Print various types of debugging information",
      isRepeatable: true,
      args: {
        name: "flags",
        isOptional: true,
        suggestions: [
          { name: "a", description: "All debugging output (same as -d)" },
          { name: "b", description: "Basic debugging (default)" },
          { name: "i", description: "Implicit rule searches" },
          { name: "j", description: "Invocation of specific sub-commands" },
          {
            name: "m",
            description: "Include messages while remaking makefiles",
          },
          { name: "n", description: "No debugging output" },
          { name: "p", description: "Print the recipes to be executed" },
          { name: "v", description: "Verbose, also enables basic" },
          { name: "w", description: "Explain why each target is remade" },
        ],
      },
    },
    {
      name: ["-e", "--environment-overrides"],
      description: "Environment variables override makefiles",
    },
    {
      name: ["-E", "--eval"],
      description: "Evaluate STRING as a makefile statement",
      isRepeatable: true,
      args: {
        name: "string",
      },
    },
    {
      name: ["--file", "-f", "--makefile"],
      description: "Read FILE as a makefile",
      isRepeatable: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["-h", "--help"],
      description: "Print this message and exit",
    },
    {
      name: ["-i", "--ignore-errors"],
      description: "Ignore errors from recipes",
    },
    {
      name: ["-I", "--include-dir"],
      description: "Search DIRECTORY for included makefiles",
      isRepeatable: true,
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: ["-j", "--jobs"],
      description: "Allow N jobs at once; infinite jobs with no arg",
      args: {
        name: "N",
        isOptional: true,
      },
    },
    {
      name: "--jobserver-style",
      description: "Select the style of jobserver to use",
      args: {
        name: "style",
        suggestions: [
          { name: "fifo", description: "Named pipe (POSIX default)" },
          { name: "pipe", description: "Simple unnamed pipe" },
          { name: "sem", description: "Semaphore (Windows only)" },
        ],
      },
    },
    {
      name: ["-k", "--keep-going"],
      description: "Keep going when some targets can't be made",
    },
    {
      name: ["-l", "--load-average", "--max-load"],
      description: "Don't start multiple jobs unless load is below N",
      args: {
        name: "N",
        isOptional: true,
      },
    },
    {
      name: ["-L", "--check-symlink-times"],
      description: "Use the latest mtime between symlinks and target",
    },
    {
      name: ["-n", "--just-print", "--dry-run", "--recon"],
      description: "Don't actually run any recipe; just print them",
    },
    {
      name: ["-o", "--old-file", "--assume-old"],
      description: "Consider FILE to be very old and don't remake it",
      isRepeatable: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["-O", "--output-sync"],
      description: "Synchronize output of parallel jobs by TYPE",
      args: {
        name: "type",
        isOptional: true,
        suggestions: [
          { name: "none", description: "No output synchronization" },
          { name: "line", description: "Group output of each recipe line" },
          {
            name: "target",
            description: "Group output of each target's whole recipe (default)",
          },
          {
            name: "recurse",
            description: "Group output of a whole recursive make",
          },
        ],
      },
    },
    {
      name: ["-p", "--print-data-base"],
      description: "Print make's internal database",
    },
    {
      name: ["-q", "--question"],
      description: "Run no recipe; exit status says if up to date",
    },
    {
      name: ["-r", "--no-builtin-rules"],
      description: "Disable the built-in implicit rules",
    },
    {
      name: ["-R", "--no-builtin-variables"],
      description: "Disable the built-in variable settings",
    },
    {
      name: "--shuffle",
      description: "Perform shuffle of prerequisites and goals",
      args: {
        name: "mode",
        isOptional: true,
        suggestions: [
          { name: "random", description: "Random seed (default)" },
          { name: "reverse", description: "Reverse the order" },
          { name: "none", description: "Disable shuffling" },
        ],
      },
    },
    {
      name: ["-s", "--silent", "--quiet"],
      description: "Don't echo recipes",
    },
    {
      name: "--no-silent",
      description: "Echo recipes (disable --silent mode)",
    },
    {
      name: ["-S", "--no-keep-going", "--stop"],
      description: "Turns off -k",
    },
    {
      name: ["-t", "--touch"],
      description: "Touch targets instead of remaking them",
    },
    {
      name: "--trace",
      description: "Print tracing information",
    },
    {
      name: ["-v", "--version"],
      description: "Print the version number of make and exit",
    },
    {
      name: ["-w", "--print-directory"],
      description: "Print the current directory",
    },
    {
      name: "--no-print-directory",
      description: "Turn off -w, even if it was turned on implicitly",
    },
    {
      name: ["-W", "--what-if", "--new-file", "--assume-new"],
      description: "Consider FILE to be infinitely new",
      isRepeatable: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--warn-undefined-variables",
      description: "Warn when an undefined variable is referenced",
    },
  ],
};

export default completionSpec;
