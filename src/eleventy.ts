// Eleventy v3.1.8 (@11ty/eleventy npm "latest" dist-tag, 2026-11-19).
// Source: cmd.cjs (minimist option definitions) and Eleventy.getHelp() read statically from the npm tarball; binary not run.
// Note: the CLI rejects unknown arguments (including positionals and -h/-v), so it takes no positional args and no short flags.
// Author: Yavko
const completionSpec: Fig.Spec = {
  name: "eleventy",
  icon: "https://www.11ty.dev/favicon.ico",
  description: "Eleventy is a simpler static site generator",
  options: [
    {
      description: "Show help message and exit",
      name: "--help",
    },
    {
      description: "Show program's version number and exit",
      name: "--version",
    },
    {
      description: "Input template files",
      name: "--input",
      args: {
        name: "input",
        default: ".",
        template: ["filepaths", "folders"],
      },
    },
    {
      description: "Write HTML output to this folder",
      name: "--output",
      args: {
        name: "output",
        default: "_site",
        template: "folders",
      },
    },
    {
      description: "Run web server on --port and watch for changes too",
      name: "--serve",
    },
    {
      description: "Run the --serve web server on this port",
      name: "--port",
      args: {
        name: "port",
        default: "8080",
      },
    },
    {
      description:
        "Wait for files to change and automatically rewrite (no web server)",
      name: "--watch",
    },
    {
      description:
        "Only build the files that have changed, or run an incremental build targeting a single file",
      name: "--incremental",
      args: {
        name: "filename",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      description:
        "Start without a build and build when files change. Works best with watch/serve/incremental",
      name: "--ignore-initial",
    },
    {
      description:
        "Allow only certain template types, separated by commas (default: *)",
      name: "--formats",
      args: {
        name: "formats",
        suggestions: [
          "liquid",
          "md",
          "njk",
          "html",
          "11ty.js",
          "ejs",
          "hbs",
          "mustache",
          "haml",
          "pug",
        ],
      },
    },
    {
      description: "Don't print all written files",
      name: "--quiet",
    },
    {
      description: "Override the eleventy config file path",
      name: "--config",
      args: {
        name: "config",
        default: ".eleventy.js",
        template: "filepaths",
      },
    },
    {
      description: "Change all url template filters to use this subdirectory",
      name: "--pathprefix",
      args: {
        name: "prefix",
        default: "/",
      },
    },
    {
      description: "Don't write any files. Useful in DEBUG mode",
      name: "--dryrun",
    },
    {
      description: "Force ESM or CommonJS mode, or infer it from package.json",
      name: "--loader",
      args: {
        name: "loader",
        default: "auto",
        suggestions: [
          { name: "esm", description: "Force ESM mode" },
          { name: "cjs", description: "Force CommonJS mode" },
          { name: "auto", description: "Infer it from package.json" },
        ],
      },
    },
    {
      description: "Change the output to JSON or NDJSON",
      name: "--to",
      args: {
        name: "output type",
        default: "fs",
        suggestions: [
          { name: "fs", description: "Write files to the output folder" },
          { name: "json", description: "Print JSON to stdout" },
          { name: "ndjson", description: "Stream NDJSON to stdout" },
        ],
      },
    },
  ],
};
export default completionSpec;
