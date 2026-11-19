// PHP v8.5.12 (php-src latest release, 2026-11-19). Source: `php --help` (8.5.5) and the OPTIONS table in sapi/cli/php_cli.c on PHP-8.5

const fileExists = async (
  executeCommand: Fig.ExecuteCommandFunction,
  file: string
) => {
  return (
    // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
    (await executeCommand({ command: "ls", args: [file] })).status === 0
  );
};

// `php -m` lists PHP extensions, then Zend extensions after "[Zend Modules]"
const modules = (zend: boolean): Fig.Generator => ({
  script: ["php", "-m"],
  postProcess: (out) =>
    (out.split("[Zend Modules]")[zend ? 1 : 0] ?? "")
      .split("\n")
      .filter((line) => line && !line.startsWith("["))
      .map((name) => ({ name })),
});

const completionSpec: Fig.Spec = {
  name: "php",
  description: "Run the PHP interpreter",
  generateSpec: async (tokens, executeShellCommand) => {
    const subcommands = [];

    await Promise.all([
      (async () => {
        if (await fileExists(executeShellCommand, "artisan")) {
          subcommands.push({ name: "artisan", loadSpec: "php/artisan" });
        }
      })(),
      (async () => {
        if (await fileExists(executeShellCommand, "please")) {
          subcommands.push({ name: "please", loadSpec: "php/please" });
        }
      })(),
      (async () => {
        if (await fileExists(executeShellCommand, "bin/console")) {
          subcommands.push({
            name: "bin/console",
            loadSpec: "php/bin-console",
          });
        }
      })(),
    ]);

    return {
      name: "php",
      subcommands,
      args: {
        generators: {
          template: "filepaths",
          filterTemplateSuggestions: function (suggestions) {
            return suggestions.filter((suggestion) => {
              return (
                suggestion.name.endsWith(".php") ||
                suggestion.name.indexOf(".") === -1
              );
            });
          },
        },
      },
    };
  },
  options: [
    {
      name: ["-a", "--interactive"],
      description: "Run as interactive shell (requires readline extension)",
    },
    {
      name: ["-c", "--php-ini"],
      description: "Look for php.ini file in this directory",
      args: { name: "path|file", template: ["filepaths", "folders"] },
    },
    {
      name: ["-n", "--no-php-ini"],
      description: "No configuration (ini) files will be used",
    },
    {
      name: ["-d", "--define"],
      description: "Define INI entry foo with value 'bar'",
      isRepeatable: true,
      args: { name: "foo[=bar]" },
    },
    {
      name: ["-e", "--profile-info"],
      description: "Generate extended information for debugger/profiler",
    },
    {
      name: ["-f", "--file"],
      description: "Parse and execute <file>",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: ["-h", "--help"],
      description: "This help",
    },
    {
      name: ["-i", "--info"],
      description: "PHP information",
    },
    {
      name: ["-l", "--syntax-check"],
      description: "Syntax check only (lint)",
    },
    {
      name: ["-m", "--modules"],
      description: "Show compiled in modules",
    },
    {
      name: ["-r", "--run"],
      insertValue: "-r '{cursor}'",
      description: "Run PHP <code> without using script tags <?..?>",
      args: { name: "code" },
    },
    {
      name: ["-B", "--process-begin"],
      description: "Run PHP <begin_code> before processing input lines",
      args: { name: "begin_code" },
    },
    {
      name: ["-R", "--process-code"],
      description: "Run PHP <code> for every input line",
      args: { name: "code" },
    },
    {
      name: ["-F", "--process-file"],
      description: "Parse and execute <file> for every input line",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: ["-E", "--process-end"],
      description: "Run PHP <end_code> after processing all input lines",
      args: { name: "end_code" },
    },
    {
      name: ["-H", "--hide-args"],
      description: "Hide any passed arguments from external tools",
    },
    {
      name: ["-S", "--server"],
      description: "Run with built-in web server",
      args: { name: "addr:port", suggestions: ["localhost:8000"] },
    },
    {
      name: ["-t", "--docroot"],
      description: "Specify document root <docroot> for built-in web server",
      dependsOn: ["-S", "--server"],
      args: { name: "docroot", template: "folders" },
    },
    {
      name: ["-s", "--syntax-highlight", "--syntax-highlighting"],
      description: "Output HTML syntax highlighted source",
    },
    {
      name: ["-v", "--version"],
      description: "Version number",
    },
    {
      name: ["-w", "--strip"],
      description: "Output source with stripped comments and whitespace",
    },
    {
      name: "--ini",
      description:
        "Show configuration file names, or with =diff the INI entries that differ from the built-in default",
      requiresSeparator: true,
      args: { name: "diff", isOptional: true, suggestions: ["diff"] },
    },
    {
      name: ["--rf", "--rfunction"],
      description: "Show information about function <name>",
      args: { name: "function" },
    },
    {
      name: ["--rc", "--rclass"],
      description: "Show information about class <name>",
      args: { name: "class" },
    },
    {
      name: ["--re", "--rextension"],
      description: "Show information about extension <name>",
      args: { name: "extension", generators: modules(false) },
    },
    {
      name: ["--rz", "--rzendextension"],
      description: "Show information about Zend extension <name>",
      args: { name: "zend extension", generators: modules(true) },
    },
    {
      name: ["--ri", "--rextinfo"],
      description: "Show configuration for extension <name>",
      args: { name: "extension", generators: modules(false) },
    },
    {
      name: "--repeat",
      description: "Repeat script execution <count> times (internal)",
      hidden: true,
      args: { name: "count" },
    },
    {
      name: ["-C", "--no-chdir"],
      description: "Do not chdir to the script's directory (CGI compatibility)",
      hidden: true,
    },
    {
      name: ["-q", "--no-header"],
      description: "Do not output HTTP headers (CGI compatibility)",
      hidden: true,
    },
  ],
};

export default completionSpec;
