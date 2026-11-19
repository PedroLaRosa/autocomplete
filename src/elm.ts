// Elm v0.19.3 (GitHub tag elm/compiler 0.19.3, npm "elm" 0.19.3-0, 2026-11-19; 0.19.4-beta ignored). Source:
// terminal/src/Main.hs, terminal/src/Make.hs, terminal/impl/Terminal.hs and terminal/impl/Terminal/Helpers.hs at
// tag 0.19.3 of https://github.com/elm/compiler (Haskell command definitions read statically, not run).
import { filepaths } from "@tabsmith/autocomplete-generators";

const packageList: Fig.Generator = {
  script: [
    "curl",
    "-sH",
    "accept-encoding: gzip",
    "--compressed",
    "https://package.elm-lang.org/search.json",
  ],
  cache: {
    ttl: 1000 * 24 * 60 * 60 * 3, // 3 days
  },
  postProcess: (output) => {
    return JSON.parse(output).map((package_) => ({
      name: package_.name,
      description: package_.summary,
    }));
  },
};

const icon =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Elm_logo.svg/1200px-Elm_logo.svg.png";

const completionSpec: Fig.Spec = {
  name: "elm",
  description: "The Elm language compiler and package manager",
  subcommands: [
    {
      name: "init",
      icon,
      description: "Initialize a new Elm project",
    },
    {
      name: "repl",
      icon,
      description: "Start an Elm repl",
      options: [
        {
          name: "--no-colors",
          description: "Turn off colors in the repl",
        },
        {
          name: "--interpreter",
          description:
            "Path to an alternate JS interpreter, such as Node or Deno",
          args: {
            name: "interpreter",
            suggestions: ["node", "nodejs"],
          },
        },
      ],
    },
    {
      name: "reactor",
      description: "Start an Elm development server",
      options: [
        {
          name: "--port",
          description: "The port of the server (default: 8000)",
          args: {
            name: "port",
            description: "The port number",
          },
        },
      ],
    },
    {
      name: "install",
      icon,
      description: "Install an Elm dependency",
      args: {
        name: "package",
        description: "The name of the package to install",
        isOptional: true,
        debounce: true,
        generators: packageList,
      },
    },
    {
      name: "make",
      description: "Build your Elm code",
      args: {
        name: "source files",
        description: "The source files to compile",
        isOptional: true,
        isVariadic: true,
        generators: filepaths({ extensions: ["elm"] }),
      },
      options: [
        {
          name: "--debug",
          description:
            "Compile in debug mode with the time-travelling debugger",
        },
        {
          name: "--optimize",
          description: "Compile in production mode with optimizations",
        },
        {
          name: "--output",
          description:
            "Where to output the compiled code (.js, .html or /dev/null)",
          args: {
            name: "output file",
            description: "Name and location of output",
            suggestions: ["elm.js", "index.html", "/dev/null"],
            template: "filepaths",
          },
        },
        {
          name: "--report",
          description: "Report error messages in a machine-readable format",
          args: {
            name: "report type",
            suggestions: ["json"],
          },
        },
        {
          name: "--docs",
          description: "Generate a JSON file of documentation",
          args: {
            name: "output json",
            description: "Name and location of output",
            suggestions: ["docs.json", "documentation.json"],
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "bump",
      description: "Bump the version of your package",
    },
    {
      name: "diff",
      description: "See what changed between versions of a package",
      args: [
        {
          name: "package",
          description:
            "A published package, only when two versions are given too (e.g. elm/html 1.0.0 2.0.0)",
          isOptional: true,
          debounce: true,
          generators: packageList,
        },
        {
          name: "version",
          description: "Versions to compare, e.g. 1.0.0 or 1.0.0 2.0.0",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "publish",
      icon,
      description: "Publish your package",
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show help for elm or one of its commands",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Show the Elm compiler version",
    },
  ],
};
export default completionSpec;
