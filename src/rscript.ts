// Rscript (R v4.6.2, Homebrew core formula and wch/r-source tag R-4-6-2, 2026-11-19). Source: read statically from src/unix/Rscript.c (usage text, argument loop), src/main/CommandLineArgs.c, src/unix/system.c and src/scripts/R.sh.in at tag R-4-6-2; not run. Rscript only forwards "--" options (and -e) to R, so the R options below are the "--" ones, and the valued ones need "=".
import { filepaths } from "@tabsmith/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "Rscript",
  description: "Scripting Front-End for R",
  icon: "https://www.r-project.org/favicon-32x32.png",
  options: [
    {
      name: "-e",
      description: "R expression to run",
      isRepeatable: true,
      args: {
        name: "expression",
        description: "R expression",
      },
    },
    {
      name: "--help",
      description: "Print usage and exit",
      icon: "❔",
    },
    {
      name: "--version",
      description: "Print version and exit",
    },
    {
      name: "--verbose",
      description: "Print information on progress",
      icon: "📣",
    },
    {
      name: "--no-echo",
      description: "Run as quietly as possible",
      icon: "🙊",
    },
    {
      name: "--no-restore",
      description: "Don't restore anything",
    },
    {
      name: "--save",
      description: "Do save workspace at the end of the session",
      icon: "💾",
    },
    {
      name: "--no-environ",
      description: "Don't read the site and user environment files",
    },
    {
      name: "--no-site-file",
      description: "Don't read the site-wide Rprofile",
    },
    {
      name: "--no-init-file",
      description: "Don't read the user R profile",
    },
    {
      name: "--restore",
      description: "Do restore previously saved objects at startup",
    },
    {
      name: "--vanilla",
      description:
        "Combine --no-save, --no-restore, --no-site-file --no-init-file and --no-environ",
    },
    {
      name: "--no-save",
      description: "Don't save workspace at the end of the session",
    },
    {
      name: "--no-restore-data",
      description: "Don't restore previously saved objects",
    },
    {
      name: "--no-restore-history",
      description: "Don't restore the R history file",
    },
    {
      name: "--no-readline",
      description: "Don't use readline for command-line editing",
    },
    {
      name: ["--quiet", "--silent"],
      description: "Don't print startup message",
    },
    {
      name: "--interactive",
      description: "Force an interactive session",
    },
    {
      name: "--encoding",
      description: "Specify encoding to be used for stdin",
      requiresSeparator: true,
      args: {
        name: "encoding",
        description: "Encoding name",
      },
    },
    {
      name: "--max-connections",
      description: "Set max number of connections",
      requiresSeparator: true,
      args: {
        name: "N",
        description: "Maximum number of connections",
      },
    },
    {
      name: "--max-ppsize",
      description: "Set max size of protect stack",
      requiresSeparator: true,
      args: {
        name: "N",
        description: "Maximum size of the protect stack",
      },
    },
    {
      name: "--min-nsize",
      description: 'Set min number of fixed size objects ("cons cells")',
      requiresSeparator: true,
      args: {
        name: "N",
        description: "Minimum number of cons cells",
      },
    },
    {
      name: "--min-vsize",
      description: "Set vector heap minimum in bytes",
      requiresSeparator: true,
      args: {
        name: "N",
        description: "Minimum vector heap size in bytes ('4M' = 4 megabytes)",
      },
    },
    {
      name: "--default-packages",
      description: "Attach these packages on startup",
      requiresSeparator: true,
      icon: "📦",
      args: {
        name: "packages",
        description: "A comma-separated set of package names, or 'NULL'",
      },
    },
  ],
  args: [
    {
      name: "file",
      description: "R script to run",
      isScript: true,
      generators: filepaths({
        extensions: ["R", "r"],
        editFileSuggestions: { priority: 76 },
      }),
    },
    {
      name: "args",
      description: "Arguments to pass to the script",
      isVariadic: true,
    },
  ],
};

export default completionSpec;
