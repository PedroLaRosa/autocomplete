// shortcuts (macOS 15.5 /usr/bin/shortcuts, 2026-11-19). Source: `shortcuts help <subcommand>` on macOS 15.5
import { filepaths } from "@tabsmith/autocomplete-generators";

const shortcut: Fig.Arg = {
  generators: {
    script: ["shortcuts", "list"],
    postProcess: (list) =>
      list.split("\n").map((shortcut) => ({
        name: shortcut,
        icon: "fig:///System/Applications/Shortcuts.app",
      })),
  },
};

const subcommands: Fig.Subcommand[] = [
  {
    name: "run",
    description: "Run a shortcut",
    icon: "▶️",
    args: {
      name: "shortcut-name-or-identifier",
      description: "The shortcut name or identifier to run",
      generators: shortcut.generators,
    },
    options: [
      {
        name: ["-i", "--input-path"],
        isRepeatable: true,
        args: {
          name: "input-path",
          template: "filepaths",
        },
        description: "The input to provide to the shortcut",
      },
      {
        name: ["-o", "--output-path"],
        args: {
          name: "output-path",
          template: "filepaths",
        },
        description: "Where to write the shortcut output, if applicable",
      },
      {
        name: "--output-type",
        args: {
          name: "output-type",
          suggestions: [
            {
              name: "public.json",
              description: "JavaScript Object Notation (JSON)",
            },
            {
              name: "public.plain-text",
              description: "Plain text",
            },
            {
              name: "public.html",
              description: "HTML",
            },
            {
              name: "public.xml",
              description: "XML",
            },
            {
              name: "com.adobe.pdf",
              description: "Adobe PDF",
            },
            {
              name: "public.vcard",
              description: "VCard",
            },
          ],
        },
        description:
          "What type to output data in, in Universal Type Identifier format",
      },
    ],
  },
  {
    name: "list",
    description: "List your shortcuts",
    icon: "📂",
    options: [
      {
        name: ["--folder-name", "-f"],
        description:
          'The folder name or identifier to list shortcuts in, or "none" for shortcuts not in a folder',
        args: {
          name: "folder-name",
          suggestions: [
            { name: "none", description: "Shortcuts not in a folder" },
          ],
          generators: {
            script: ["shortcuts", "list", "--folders"],
            postProcess: (list) =>
              list.split("\n").map((folder) => ({
                name: folder,
                icon: "📂",
              })),
          },
        },
      },
      {
        name: "--folders",
        description: "List folders instead of shortcuts",
        icon: "📂",
      },
      {
        name: "--show-identifiers",
        description: "Show identifiers with each result",
      },
    ],
  },
  {
    name: "view",
    description: "View a shortcut in Shortcuts",
    icon: "🔍",
    args: {
      name: "shortcut-name",
      description: "The shortcut name to view in the Shortcuts app",
      generators: shortcut.generators,
    },
  },
  {
    name: "sign",
    description: "Sign a shortcut file",
    icon: "🔏",
    options: [
      {
        name: ["--input", "-i"],
        description: "The shortcut file to sign",
        isRequired: true,
        args: {
          name: "input",
          generators: filepaths({
            extensions: ["shortcut"],
          }),
        },
      },
      {
        name: ["--output", "-o"],
        description: "Output path for the signed shortcut file",
        isRequired: true,
        args: {
          name: "output",
          template: "filepaths",
        },
      },
      {
        name: ["--mode", "-m"],
        description: "The signing mode (default: people-who-know-me)",
        args: {
          name: "mode",
          suggestions: ["people-who-know-me", "anyone"],
        },
      },
    ],
  },
];

const completionSpec: Fig.Spec = {
  name: "shortcuts",
  description: "Command-line utility for running shortcuts",
  subcommands: [
    ...subcommands,
    {
      name: "help",
      description: "Show help information",
      subcommands: subcommands.map(({ name, description, icon }) => ({
        name,
        description,
        icon,
      })),
    },
  ],
};
export default completionSpec;
