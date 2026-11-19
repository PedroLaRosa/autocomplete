// man (macOS 26 FreeBSD-derived man.sh, apple-oss-distributions/man tag man-62 which is the latest tag, 2026-11-19). Source: man/man.1, man/man.sh (getopts string and incompatible option checks) and man/man.conf (default MANSECT); not run on macOS.
// Section suggestions for -S are the nine sections named in man.1.
// Removed options that the old BSD man had but the current macOS man (man.sh) rejects: -B, -H, -D, -F/--preformat, -c.
// Kept -K, -W and --path (accepted by GNU man-db 2.13.3, which was checked via its src/man.c option table). The page-name generator (`man -k .`) is unchanged and was not run on macOS.
import { valueList } from "@tabsmith/autocomplete-generators";

const sections = {
  "1": "General Commands",
  "2": "System Calls",
  "3": "Library Functions",
  "4": "Kernel Interfaces",
  "5": "File Formats",
  "6": "Games",
  "7": "Miscellaneous Information",
  "8": "System Manager's",
  "9": "Kernel Developer's",
};

/** Cache of page suggestions. The key is the first letter of the `name` */
const pageSuggestionCache = new Map<string, Fig.Suggestion[]>();

// JS time, so this is in milliseconds
let lastCachedAt = 0;
// 60m ttl
const pageSuggestionCacheTTL = 1000 * 60 * 60;
// A lock-ish thing to prevent running the command multiple times. Without this
// lock, `man -k .` can be run multiple times, causing some visual slowness/jank
let isGeneratingSuggestions = false;

/** Suggests manual pages, caches the list once */
const generateManualPages: Fig.Generator = {
  // only trigger when the token length transitions to or from 0
  // soon: { on: "threshold", length: 0 }
  trigger: (current, previous) =>
    current.length === 0 || (previous.length === 0 && current.length > 0),

  // Most of the time, this will complete instantly. When building the cache,
  // it may take a few seconds. This is set to 15s for slower/older machines
  // where FS access may be slower.
  scriptTimeout: 15000,

  custom: async (tokens, executeShellCommand) => {
    const finalToken = tokens[tokens.length - 1];

    // Clear the cache if the TTL has elapsed
    const now = Date.now();
    if (now - lastCachedAt > pageSuggestionCacheTTL) {
      pageSuggestionCache.clear();
      lastCachedAt = now;
    }

    // If there's nothing in the cache yet, build it
    if (!isGeneratingSuggestions && pageSuggestionCache.size === 0) {
      // try/finally is unnecessary because the operations in this block
      // aren't fallible
      isGeneratingSuggestions = true;

      // Same as `apropos .`, lists all manual pages with a brief description
      const { stdout } = await executeShellCommand({
        command: "man",
        args: ["-k", "."],
      });
      const seenPageNameCache = new Set<string>();

      // Guaranteed to be one per line
      for (const line of stdout.split("\n")) {
        const splitIndex = line.indexOf(" - ");

        const pageNames = line.slice(0, splitIndex);
        let description = line.slice(splitIndex + 3) || "Manual page";
        description = description[0].toLocaleUpperCase() + description.slice(1);

        const pages = pageNames.split(", ");

        for (const page of pages) {
          const i = page.lastIndexOf("(");
          const name = page.slice(0, i);
          const section = page.slice(i);
          if (seenPageNameCache.has(name)) {
            continue;
          }
          seenPageNameCache.add(name);
          const suggestion = {
            name,
            description: `${section} ${description}`,
            icon: "fig://icon?type=string",
          };
          const arr = pageSuggestionCache.get(name[0]);

          if (arr) {
            arr.push(suggestion);
          } else {
            pageSuggestionCache.set(name[0], [suggestion]);
          }
        }
      }
      isGeneratingSuggestions = false;
    } else if (isGeneratingSuggestions) {
      // If the suggestions are being generated, try waiting 4 seconds before
      // attempting to show the results
      await new Promise<void>((resolve) => setTimeout(() => resolve(), 4000));
    }
    return pageSuggestionCache.get(finalToken[0] || "a") || [];
  },
};

const completionSpec: Fig.Spec = {
  name: "man",
  description: "Format and display the on-line manual pages",
  args: {
    generators: generateManualPages,
    isOptional: true,
    isVariadic: true,
  },
  options: [
    {
      name: "-C",
      description: "Specify the configuration file to use",
      args: {
        name: "config_file",
        template: "filepaths",
      },
    },
    {
      name: "-M",
      description:
        "Force a specific colon separated manual path instead of the default search path",
      args: {
        name: "manpath",
        generators: {
          template: "folders",
          getQueryTerm: ":",
        },
      },
    },
    {
      name: "-P",
      description: "Use the specified pager",
      args: {
        name: "pager",
      },
    },
    {
      name: "-S",
      description:
        "Restrict manual sections searched to the specified colon delimited list",
      args: {
        name: "mansect",
        generators: valueList({
          delimiter: ":",
          insertDelimiter: true,
          values: Object.entries(sections).map(([name, description]) => ({
            name,
            description,
            icon: "📑",
          })),
        }),
      },
    },
    {
      name: "-a",
      description:
        "Display all manual pages instead of just the first found for each page argument",
    },
    {
      name: "-d",
      description:
        "Print extra debugging information (repeat for more verbosity) and do not display the manual page",
      isRepeatable: true,
    },
    {
      name: "-f",
      description: "Emulate whatis",
      exclusiveOn: ["-k", "-t", "-w"],
    },
    {
      name: "-h",
      description: "Display short help message and exit",
    },
    {
      name: "-k",
      description: "Emulate apropos",
      exclusiveOn: ["-f", "-t", "-w"],
    },
    {
      name: "-K",
      description: "Search for a given string in all pages (GNU man-db only)",
    },
    {
      name: "-m",
      description:
        "Override the default architecture and machine settings (accepted but not implemented on macOS)",
      args: {
        name: "arch[:machine]",
      },
    },
    {
      name: "-o",
      description: "Force use of non-localized manual pages",
    },
    {
      name: "-p",
      description:
        "Use the given list of preprocessors before running nroff or troff: e (eqn), p (pic), r (refer), t (tbl), v (vgrind)",
      args: {
        name: "preprocessors",
      },
    },
    {
      name: "-t",
      description:
        "Send manual page source through troff, allowing transformation of the manual pages to other formats",
      exclusiveOn: ["-f", "-k", "-w"],
    },
    {
      name: ["-w", "--path"],
      description:
        "Display the location of the manual page instead of the contents",
      exclusiveOn: ["-f", "-k", "-t"],
    },
    {
      name: "-W",
      description:
        "Print the location of the cat file(s) instead (GNU man-db only)",
    },
  ],
};

export default completionSpec;
