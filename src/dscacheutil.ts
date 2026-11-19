// dscacheutil (macOS, Xcode 27.2 (27B52) man page dated 2007-01-14, 2026-11-19). Source: dscacheutil(1) from the keith/xcode-man-pages mirror (commit 03c4382); man page only, not run on macOS.
// Flags, categories and their keys (group, host, mount, protocol, rpc, service, user) match the man page; descriptions and the optional -entries category were corrected.
const categoryKeysMapping = {
  group: ["name", "gid"],
  host: ["name", "ip_address"],
  mount: ["name"],
  protocol: ["name", "number"],
  rpc: ["name", "number"],
  service: ["name", "port"],
  user: ["name", "uid"],
};
const categories = Array.from(Object.keys(categoryKeysMapping));

interface PostProcessQuery {
  attributeKey: string;
}

const postProcessQuery =
  (options: PostProcessQuery): Fig.Generator["postProcess"] =>
  (out) => {
    const { attributeKey } = options;
    const values = new Set<string>();
    out.split("\n\n").map((entry) => {
      entry.split("\n").forEach((line) => {
        const [key, value] = line.trim().split(": ");
        if (key === attributeKey) {
          values.add(value);
        }
      });
    });

    const suggestions = [];
    values.forEach((value) => suggestions.push({ name: value }));

    return suggestions;
  };

const dscacheutilGenerators: Record<string, Fig.Generator> = {
  keys: {
    custom: async (tokens, executeShellCommand) => {
      const category = tokens[tokens.length - 3];
      if (!categories.includes(category)) {
        return [];
      }

      return categoryKeysMapping[category].map((key: string) => ({
        name: key,
      }));
    },
  },
  values: {
    custom: async (tokens, executeShellCommand) => {
      const category = tokens[tokens.length - 4];
      const attributeKey = tokens[tokens.length - 2];
      const pp = postProcessQuery({ attributeKey });
      return pp(
        (
          await executeShellCommand({
            command: "dscacheutil",
            args: ["-q", category],
          })
        ).stdout,
        tokens
      );
    },
  },
};

const completionSpec: Fig.Spec = {
  name: "dscacheutil",
  description: "Utility for managing the Directory Service cache",
  subcommands: [
    {
      name: "-h",
      description: "List the options for calling dscacheutil",
    },
    {
      name: "-q",
      description:
        "Initiate a query using standard calls, returning cached results or live data (all results of the category by default)",
      options: [
        {
          name: "-a",
          description: "Query a specific key with a value",
          args: [
            {
              name: "attributeKey",
              generators: dscacheutilGenerators.keys,
            },
            {
              name: "attributeValue",
              generators: dscacheutilGenerators.values,
            },
          ],
        },
      ],
      args: {
        name: "category",
        description: "Category to query",
        suggestions: categories,
      },
    },
    {
      name: "-cachedump",
      description: "Dump an overview of the cache by default",
      options: [
        {
          name: "-buckets",
          description: "Also print hash bucket usage of the current cache",
        },
        {
          name: "-entries",
          description:
            "Dump detailed information about cache entries (dumping host entries requires an administrative user)",
          args: {
            name: "category",
            description: "Only dump entries of this category",
            isOptional: true,
            suggestions: categories,
          },
        },
      ],
    },
    {
      name: "-configuration",
      description:
        "Print current configuration information, such as the search policy from Directory Service and cache parameters",
    },
    {
      name: "-flushcache",
      description:
        "Flush the entire cache (should only be used in extreme cases)",
    },
    {
      name: "-statistics",
      description:
        "Print statistics from the cache, including an overview and detailed call statistics",
    },
  ],
};

export default completionSpec;
