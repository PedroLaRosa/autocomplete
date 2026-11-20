// Agrippa v2.0.4 (npm latest dist-tag, 2026-11-19; upstream last released 2023-06). Source: yargs definitions in src/cli at
// NitzanHen/agrippa HEAD (package.json 2.0.4), cross-checked with bin/index.mjs of the npm tarball; read statically, not run.
// v2 replaced the v1 flags (--props, --children, --memo, --react-native, --flat, --separate-index) with the ones below.
const completionSpec: Fig.Spec = {
  name: "agrippa",
  description: "Generate frontend components without the boilerplate",
  subcommands: [
    {
      name: "init",
      description: "Initialize Agrippa's configuration for this project",
      options: [
        {
          name: "--bare",
          description:
            "Generate a config that does not import agrippa (used for global installations)",
        },
      ],
    },
    {
      name: ["generate", "gen"],
      description: "Generate a component",
      args: {
        name: "name",
        description: "The name of the component to be generated",
      },
      options: [
        {
          name: ["--framework", "--fw"],
          description:
            "Which framework to generate the components for. Defaults to the framework detected from package.json",
          args: {
            name: "framework",
            suggestions: ["react", "solidjs", "preact", "react-native"],
          },
        },
        {
          name: "--styling",
          description: "Which styling solution to use",
          args: {
            name: "styling",
            suggestions: [
              "css",
              "scss",
              "jss",
              "styled-components",
              "react-native",
            ],
          },
        },
        {
          name: ["--styling-module", "--stylingModule"],
          description:
            "Whether to generate a scoped `module` stylesheet. Relevant only for `css` or `scss` styling options",
        },
        {
          name: ["--typescript", "--ts"],
          description:
            "Whether to use Typescript. Defaults to true if a tsconfig.json is found",
        },
        {
          name: ["--ts-props-declaration", "--tsPropsDeclaration"],
          description:
            "For TS components, whether to declare props as an interface or a type",
          args: {
            name: "declaration",
            suggestions: ["interface", "type"],
          },
        },
        {
          name: ["--import-react", "--importReact"],
          description:
            "Whether to import React. Relevant only for `react` or `react-native`",
        },
        {
          name: "--overwrite",
          description: "Overwrite existing files, if any are found",
        },
        {
          name: ["--base-dir", "--baseDir"],
          description:
            "Path to a base directory which components should be generated in or relative to",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: ["--destination", "--dest"],
          description:
            "The path in which the component folder/files should be generated, relative to baseDir",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: ["--allow-outside-base", "--allowOutsideBase"],
          description:
            "Allow components to be generated outside the resolved baseDir",
        },
        {
          name: ["--export-type", "--exportType"],
          description:
            "Whether to use a named export or a default export for the component",
          args: {
            name: "type",
            suggestions: ["named", "default"],
          },
        },
        {
          name: "--declaration",
          description:
            "Whether to declare the component as a const with an arrow function or a function declaration",
          args: {
            name: "declaration",
            suggestions: ["const", "function"],
          },
        },
        {
          name: ["--post-command", "--postCommand"],
          description:
            "A command to run after the component has been generated (variables such as <path> are substituted)",
          args: {
            name: "command",
          },
        },
        {
          name: "--debug",
          description: "Print additional debug information",
        },
        {
          name: ["--look-for-updates", "--lookForUpdates"],
          description:
            "Whether to look for updates when running Agrippa or not",
        },
        {
          name: ["--report-telemetry", "--reportTelemetry"],
          description: "Whether to report (anonymous) telemetry or not",
        },
      ],
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show help",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Show version number",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
