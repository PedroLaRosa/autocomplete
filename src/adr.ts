// adr-tools v3.0.0 (latest tag npryce/adr-tools, 2026-11-19; upstream last released 2018). Source: static read of
// src/adr-* and src/_adr_* scripts (usage headers and option parsing) at tag 3.0.0, not run
const adrReferenceArg: Fig.Arg = {
  name: "adr",
  description: "ADR number or partial file name",
};

const linkPrefixOption: Fig.Option = {
  name: "-p",
  description: "Prefix each decision file link with this text",
  args: {
    name: "link prefix",
  },
};

const completionSpec: Fig.Spec = {
  name: "adr",
  description: "Manage Architecture Decision Records",
  subcommands: [
    {
      name: "init",
      description:
        "Create the ADR directory and the first ADR, recording the decision to record architectural decisions",
      args: {
        name: "directory",
        description:
          "Directory to store the ADRs in, relative to the current directory (default: doc/adr)",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: "new",
      description: "Create a new, numbered ADR",
      options: [
        {
          name: "-s",
          description:
            "Supersede a previous ADR (a link to it is added to the Status section)",
          isRepeatable: true,
          args: {
            name: "adr",
            description: "Number or partial file name of the ADR to supersede",
          },
        },
        {
          name: "-l",
          description: "Link the new ADR to a previous ADR",
          isRepeatable: true,
          args: {
            name: "target:link:reverse-link",
            description:
              "Target ADR (number or partial file name), link text in the new ADR and link text in the target ADR",
          },
        },
      ],
      args: {
        name: "title",
        description: "Title of the new ADR (words are joined together)",
        isVariadic: true,
      },
    },
    {
      name: "link",
      description: "Create a link between two ADRs",
      args: [
        {
          name: "source",
          description: "ADR number or partial file name of the link source",
        },
        {
          name: "link",
          description: "Description of the link created in the source ADR",
        },
        {
          name: "target",
          description: "ADR number or partial file name of the link target",
        },
        {
          name: "reverse-link",
          description: "Description of the link created in the target ADR",
        },
      ],
    },
    {
      name: "list",
      description: "List the architecture decision records",
    },
    {
      name: "generate",
      description: "Generate summary documentation about the ADRs",
      subcommands: [
        {
          name: "toc",
          description: "Generate a table of contents in Markdown to stdout",
          options: [
            {
              name: "-i",
              description: "Precede the table of contents with the given text",
              args: {
                name: "intro",
                description: "Markdown file with the intro text",
                template: "filepaths",
              },
            },
            {
              name: "-o",
              description: "Follow the table of contents with the given text",
              args: {
                name: "outro",
                description: "Markdown file with the outro text",
                template: "filepaths",
              },
            },
            linkPrefixOption,
          ],
        },
        {
          name: "graph",
          description:
            "Generate a Graphviz visualisation of the links between ADRs",
          options: [
            {
              name: "-e",
              description:
                "File extension of the documents the generated links refer to (default: .html)",
              args: {
                name: "link extension",
              },
            },
            linkPrefixOption,
          ],
        },
      ],
    },
    {
      name: "upgrade-repository",
      description: "Upgrade the ADR documents to the latest format",
    },
    {
      name: "config",
      description: "Print the locations of the adr-tools scripts and templates",
    },
    {
      name: "help",
      description:
        "Display help for a command (or list the available commands)",
      args: [
        {
          name: "command",
          isOptional: true,
          suggestions: [
            "config",
            "generate",
            "help",
            "init",
            "link",
            "list",
            "new",
            "upgrade-repository",
          ],
        },
        {
          name: "subcommand",
          description: "Subcommand, e.g. 'toc' for 'adr help generate toc'",
          isOptional: true,
          suggestions: ["toc", "graph"],
        },
      ],
    },
  ],
};
export default completionSpec;
