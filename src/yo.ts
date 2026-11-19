// yo v7.0.1 (GitHub release, 2026-04-09). Source: lib/cli.js and lib/usage.txt on yeoman/yo v7.0.1
function toTitleCase(str: string): string {
  return str
    .trim()
    .replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
    );
}

const suggestions: Fig.Suggestion[] = [
  {
    name: "doctor",
    description: "Running sanity checks on your system",
    icon: "fig://icon?type=alert",
  },
];

// GENERATORS
const yeomanGeneratorList: Fig.Generator = {
  script: ["yo", "--generators"],
  postProcess: function (out) {
    // Output: "Available Generators:", then "  <gen>" lines each followed by "    <sub>" lines
    let parent = "";
    return out.split("\n").flatMap((line) => {
      const item = line.trim();
      // Names have no spaces: this drops the header and the "Couldn't find any generators" hint
      if (!item || /\s/.test(item)) return [];
      let name = item;
      if (line.startsWith("    ")) name = `${parent}:${item}`;
      else parent = item;
      return [
        {
          name,
          icon: "https://avatars.githubusercontent.com/u/1714870?v=4",
          displayName: toTitleCase(name),
          description: `${toTitleCase(name)} Generator`,
          priority: 100,
          options: [
            {
              name: "--help",
              description: `Help of "${toTitleCase(name)}" generator`,
            },
          ],
        },
      ];
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "yo",
  description: "Yeoman generator",
  args: {
    name: "generator",
    generators: yeomanGeneratorList,
    suggestions: [...suggestions],
    isCommand: true,
    isOptional: true,
  },
  options: [
    {
      name: "--help",
      description: "Print info and generator's options and usage",
    },
    {
      name: ["-f", "--force"],
      description: "Overwrite files that already exist",
      isDangerous: true,
    },
    {
      name: "--version",
      description: "Print version",
    },
    {
      name: "--no-color",
      description: "Disable colors",
    },
    {
      name: "--generators",
      description: "Print available generators",
    },
    {
      name: "--local-only",
      description: "Disable lookup of globally-installed generators",
    },
    {
      name: "--debug",
      description: "Print the full stack trace on errors",
    },
    {
      name: "--environment-version",
      description: "Print the yeoman-environment version",
    },
  ],
};

export default completionSpec;
