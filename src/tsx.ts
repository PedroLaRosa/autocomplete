// tsx v4.23.15 (npm latest, 2026-11-19). Source: installed tsx@4.23.15 from npm and ran `tsx --help`,
// `tsx watch --help` and read dist/cli.mjs flag definitions. Node.js flags that tsx forwards to node are not listed.
import { filepaths } from "@tabsmith/autocomplete-generators";

const scriptPathArgs: Fig.Arg = {
  name: "script path",
  isScript: true,
  generators: filepaths({
    extensions: ["ts"],
    editFileSuggestions: { priority: 76 },
    editFolderSuggestions: { priority: 70 },
  }),
};

const completionSpec: Fig.Spec = {
  name: "tsx",
  description: "Run TypeScript file using tsx",
  subcommands: [
    {
      name: "watch",
      description: "Run the script and watch for changes",
      args: scriptPathArgs,
      options: [
        {
          name: "--clear-screen",
          description: "Disable clearing the screen on rerun",
          insertValue: "--clear-screen=false",
        },
        {
          name: "--exclude",
          description: "Paths & globs to exclude from being watched",
          isRepeatable: true,
          args: {
            name: "path or glob",
            template: ["filepaths", "folders"],
          },
        },
        {
          name: "--ignore",
          description:
            "Paths & globs to exclude from being watched (use --exclude)",
          deprecated: true,
          isRepeatable: true,
          args: {
            name: "path or glob",
            template: ["filepaths", "folders"],
          },
        },
        {
          name: "--include",
          description: "Additional paths & globs to watch",
          isRepeatable: true,
          args: {
            name: "path or glob",
            template: ["filepaths", "folders"],
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for tsx",
      isPersistent: true,
    },
    {
      name: "--no-cache",
      description: "Disable caching",
      isPersistent: true,
    },

    {
      name: ["-v", "--version"],
      description: "Show version",
    },
    {
      name: "--tsconfig",
      description: "Custom tsconfig.json path",
      args: {
        name: "tsconfig.json path",
        generators: filepaths({
          extensions: ["json"],
          editFileSuggestions: { priority: 76 },
          editFolderSuggestions: { priority: 70 },
        }),
      },
    },
  ],

  args: scriptPathArgs,
};
export default completionSpec;
