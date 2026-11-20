// @swc/cli v0.8.2 (npm "latest", 2026-11-19). Source: packages/cli/src/swc/options.ts in swc-project/pkgs
const globArg: Fig.Arg = {
  name: "glob",
  description: "Comma-separated glob paths",
  template: ["filepaths", "folders"],
};

const completionSpec: Fig.Spec = {
  name: "swc",
  description:
    "SWC is a super-fast compiler written in rust; producing widely-supported javascript from modern standards and typescript",
  args: {
    name: "files",
    description: "Files or directories to compile",
    isVariadic: true,
    isOptional: true,
    template: ["filepaths", "folders"],
  },
  options: [
    {
      name: ["--filename", "-f"],
      description:
        "Filename to use when reading from stdin. This will be used in source maps and errors",
      args: {
        name: "FILE",
        description: "Path to the file",
        template: ["filepaths"],
      },
    },
    {
      name: "--config-file",
      description: "Path to a .swcrc file to use",
      args: {
        name: "CONFIG_FILE",
        description: "Path to a .swcrc file to use",
        template: ["filepaths"],
      },
    },
    {
      name: "--cli-config-file",
      description:
        "Path to a JSON file containing CLI options; options given on the command line override it",
      args: {
        name: "path",
        template: ["filepaths"],
      },
    },
    {
      name: "--env-name",
      description:
        "The name of the 'env' to use when loading configs and plugins. Defaults to the value of SWC_ENV, or else NODE_ENV, or else development",
      args: {
        name: "ENV_NAME",
        suggestions: ["production", "development", "test"],
        description:
          "The name of the 'env' to use when loading configs and plugins. Defaults to the value of SWC_ENV, or else NODE_ENV, or else development",
      },
    },
    {
      name: "--no-swcrc",
      description: "Whether or not to look up .swcrc files",
    },
    {
      name: "--delete-dir-on-start",
      description: "Delete the output directory on start",
    },
    {
      name: "--ignore",
      description: "List of glob paths to not compile",
      isRepeatable: true,
      args: globArg,
    },
    {
      name: "--only",
      description: "List of glob paths to only compile",
      isRepeatable: true,
      args: globArg,
    },
    {
      name: ["--watch", "-w"],
      description: "Recompile files on changes",
    },
    {
      name: ["--quiet", "-q"],
      description: "Suppress compilation output",
    },
    {
      name: ["--source-maps", "-s"],
      description: "Generate source maps",
      args: {
        name: "SOURCE_MAP",
        description: "Source map type",
        isOptional: true,
        suggestions: ["true", "false", "inline", "both"],
      },
    },
    {
      name: "--source-map-target",
      description: "Set `file` on returned source map",
      args: {
        name: "FILE",
        description: "The file for the source map",
        template: ["filepaths"],
      },
    },
    {
      name: "--source-file-name",
      description: "Set sources[0] on returned source map",
      args: { name: "string" },
    },
    {
      name: "--source-root",
      description: "The root from which all sources are relative",
      args: { name: "filename", template: ["folders"] },
    },
    {
      name: ["--out-file", "-o"],
      description: "Compile all input files into a single file",
      exclusiveOn: ["--out-dir", "-d"],
      args: {
        name: "OUTPUT_FILE",
        description: "The output file",
        template: ["filepaths"],
      },
    },
    {
      name: ["--out-dir", "-d"],
      description:
        "Compile an input directory of modules into an output directory",
      exclusiveOn: ["--out-file", "-o"],
      args: {
        name: "OUTPUT_DIR",
        description: "The output directory",
        template: ["folders"],
      },
    },
    {
      name: "--out-file-extension",
      description: "Use a specific extension for the output files",
      args: {
        name: "extension",
        suggestions: ["js", "mjs", "cjs"],
      },
    },
    {
      name: ["--copy-files", "-D"],
      description: "When compiling a directory, copy over non-compilable files",
    },
    {
      name: "--strip-leading-paths",
      description:
        "Remove the leading directory (including all parent relative paths) when building the final output path",
    },
    {
      name: "--include-dotfiles",
      description:
        "Include dotfiles when compiling and copying non-compilable files",
    },
    {
      name: ["--config", "-C"],
      description:
        "Override a config from .swcrc file, e.g. -C module.type=amd -C module.moduleId=hello",
      isRepeatable: true,
      args: {
        name: "key=value",
      },
    },
    {
      name: "--sync",
      description: "Invoke swc synchronously. Useful for debugging",
    },
    {
      name: "--workers",
      description: "The number of workers to use for parallel processing",
      args: { name: "number" },
    },
    {
      name: "--log-watch-compilation",
      description: "Log a message when a watched file is successfully compiled",
    },
    {
      name: "--extensions",
      description: "Use specific extensions",
      isRepeatable: true,
      args: {
        name: "list",
        description: "Comma-separated extensions",
        suggestions: [
          ".js",
          ".jsx",
          ".es6",
          ".es",
          ".mjs",
          ".ts",
          ".tsx",
          ".cts",
          ".mts",
        ],
      },
    },
    {
      name: ["--version", "-V"],
      description: "Output the version number",
    },
    {
      name: ["--help", "-h"],
      description: "Display help for command",
    },
  ],
};
export default completionSpec;
