// @electron/asar v4.3.2 (latest on npm, 2026-11-19). Source: npm tarball @electron/asar@4.3.2, bin/asar.mjs and lib/asar.js read statically (not run).
// The CLI no longer uses commander: it is a small node:util parseArgs wrapper, so `-V` (not `--V`) is the version flag.
const completionSpec: Fig.Spec = {
  name: "asar",
  description: "Manipulate asar archive files",
  subcommands: [
    {
      name: ["pack", "p"],
      description: "Create asar archive",
      options: [
        {
          name: "--ordering",
          description: "Path to a text file for ordering contents",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--unpack",
          description: "Do not pack files matching glob <expression>",
          args: {
            name: "expression",
          },
        },
        {
          name: "--unpack-dir",
          description:
            "Do not pack dirs matching glob <expression> or starting with literal <expression>",
          args: {
            name: "expression",
          },
        },
        {
          name: "--exclude-hidden",
          description: "Exclude hidden files",
        },
      ],
      args: [
        {
          name: "dir",
          description: "The directory you want to archive",
          template: "folders",
        },
        {
          name: "output",
          description: "The name of the output file",
          template: "filepaths",
        },
      ],
    },
    {
      name: ["list", "l"],
      description: "List files of asar archive",
      options: [
        {
          name: ["-i", "--is-pack"],
          description: "Each file in the asar is pack or unpack",
        },
      ],
      args: {
        name: "archive",
        description: "The archive file",
        template: "filepaths",
      },
    },
    {
      name: ["extract-file", "ef"],
      description: "Extract one file from archive",
      args: [
        {
          name: "archive",
          description: "The archive file",
          template: "filepaths",
        },
        {
          name: "filename",
          description: "The name of the file you want to extract",
        },
      ],
    },
    {
      name: ["extract", "e"],
      description: "Extract archive",
      args: [
        {
          name: "archive",
          description: "The archive file",
          template: "filepaths",
        },
        {
          name: "dest",
          description: "The directory you want to extract to",
          template: "folders",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Display help for command",
      isPersistent: true,
    },
    {
      name: ["--version", "-V"],
      description: "Output the version number",
    },
  ],
};
export default completionSpec;
