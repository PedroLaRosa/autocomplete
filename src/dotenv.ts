// dotenv v3.2.0 (RubyGems latest / GitHub tag v3.2.0, 2026-11-19). Source: static read of lib/dotenv/cli.rb (OptionParser definitions) and README.md at tag v3.2.0; the executable was not run.
// This is the Ruby gem's `dotenv` executable.
// https://github.com/bkeepers/dotenv
const completionSpec: Fig.Spec = {
  name: "dotenv",
  description: "Loads environment variables from .env",
  args: {
    isCommand: true,
  },
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      name: "-f",
      exclusiveOn: ["-h", "-v"],
      description:
        "Comma-separated list of env files to parse, most important first",
      args: {
        name: "files",
        template: "filepaths",
      },
    },
    {
      name: ["-i", "--ignore"],
      exclusiveOn: ["-h", "-v"],
      description: "Ignore missing env files",
    },
    {
      name: ["-o", "--overwrite"],
      exclusiveOn: ["-h", "-v"],
      description: "Overwrite existing ENV variables",
    },
    {
      name: "--overload",
      exclusiveOn: ["-h", "-v"],
      description: "Alias for --overwrite",
      hidden: true,
    },
    {
      name: ["-h", "--help"],
      exclusiveOn: ["-f", "-i", "-o", "--overload", "-v", "-t"],
      description: "Display help",
    },
    {
      name: ["-v", "--version"],
      exclusiveOn: ["-f", "-i", "-o", "--overload", "-h", "-t"],
      description: "Show version",
    },
    {
      name: ["-t", "--template"],
      exclusiveOn: ["-h", "-v"],
      description: "Create a template env file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
  ],
};
export default completionSpec;
