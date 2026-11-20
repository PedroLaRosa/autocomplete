// Newman v6.2.3 (npm latest and git tag v6.2.3, released 2026-10-09, 2026-11-19). Source: postmanlabs/newman v6.2.3
// (bin/newman.js commander definitions for `newman run`, README reporter options); the binary was not run.
// Originally generated with @fig/complete-commander. Reporter options (--reporter-*) are parsed dynamically by newman and
// only the built-in cli, json and junit reporter options documented in the README are listed.

const completionSpec: Fig.Spec = {
  name: "newman",
  description: "Newman is a command-line collection runner for Postman",
  subcommands: [
    {
      name: "run",
      description: "Initiate a Postman Collection run from a given URL or path",
      options: [
        {
          name: ["-e", "--environment"],
          description: "Specify a URL or path to a Postman Environment",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: ["-g", "--globals"],
          description:
            "Specify a URL or path to a file containing Postman Globals",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: ["-r", "--reporters"],
          description: "Specify the reporters to use for this run",
          args: {
            name: "reporters",
            description: "Comma-separated list of reporters",
            isOptional: true,
            default: "cli",
            suggestions: ["cli", "json", "junit", "progress", "emojitrain"],
          },
        },
        {
          name: ["-n", "--iteration-count"],
          description: "Define the number of iterations to run",
          args: { name: "n" },
        },
        {
          name: ["-d", "--iteration-data"],
          description:
            "Specify a data file to use for iterations (either JSON or CSV)",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--folder",
          description:
            "Specify the folder to run from a collection. Can be specified multiple times to run multiple folders",
          isRepeatable: true,
          args: { name: "name" },
        },
        {
          name: "--global-var",
          description:
            "Allows the specification of global variables via the command line, in a key=value format",
          isRepeatable: true,
          args: { name: "value" },
        },
        {
          name: "--env-var",
          description:
            "Allows the specification of environment variables via the command line, in a key=value format",
          isRepeatable: true,
          args: { name: "value" },
        },
        {
          name: "--export-environment",
          description:
            "Exports the final environment to a file after completing the run",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--export-globals",
          description:
            "Exports the final globals to a file after completing the run",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--export-collection",
          description:
            "Exports the executed collection to a file after completing the run",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--postman-api-key",
          description:
            "API Key used to load the resources from the Postman API",
          args: { name: "apiKey" },
        },
        {
          name: "--bail",
          description:
            "Specify whether or not to gracefully stop a collection run on encountering an error and whether to end the run with an error based on the optional modifier",
          args: {
            name: "modifiers",
            description: "Comma-separated list of modifiers",
            isOptional: true,
            suggestions: ["folder", "failure"],
          },
        },
        {
          name: "--ignore-redirects",
          description:
            "Prevents Newman from automatically following 3XX redirect responses",
        },
        {
          name: ["-x", "--suppress-exit-code"],
          description:
            "Specify whether or not to override the default exit code for the current run",
        },
        {
          name: "--silent",
          description: "Prevents Newman from showing output to CLI",
        },
        {
          name: "--disable-unicode",
          description:
            "Forces Unicode compliant symbols to be replaced by their plain text equivalents",
        },
        {
          name: "--color",
          description: "Enable/Disable colored output (auto|on|off)",
          args: {
            name: "value",
            default: "auto",
            suggestions: ["auto", "on", "off"],
          },
        },
        {
          name: "--delay-request",
          description:
            "Specify the extent of delay between requests (milliseconds)",
          args: { name: "n", isOptional: true },
        },
        {
          name: "--timeout",
          description: "Specify a timeout for collection run (milliseconds)",
          args: { name: "n", isOptional: true },
        },
        {
          name: "--timeout-request",
          description: "Specify a timeout for requests (milliseconds)",
          args: { name: "n", isOptional: true },
        },
        {
          name: "--timeout-script",
          description: "Specify a timeout for scripts (milliseconds)",
          args: { name: "n", isOptional: true },
        },
        {
          name: "--working-dir",
          description: "Specify the path to the working directory",
          args: { name: "path", template: "folders" },
        },
        {
          name: "--no-insecure-file-read",
          description:
            "Prevents reading the files situated outside of the working directory",
        },
        { name: ["-k", "--insecure"], description: "Disables SSL validations" },
        {
          name: "--ssl-client-cert-list",
          description:
            "Specify the path to a client certificates configurations (JSON)",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--ssl-client-cert",
          description: "Specify the path to a client certificate (PEM)",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--ssl-client-key",
          description: "Specify the path to a client certificate private key",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--ssl-client-passphrase",
          description:
            "Specify the client certificate passphrase (for protected key)",
          args: { name: "passphrase" },
        },
        {
          name: "--ssl-extra-ca-certs",
          description: "Specify additionally trusted CA certificates (PEM)",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--cookie-jar",
          description:
            "Specify the path to a custom cookie jar (serialized tough-cookie JSON)",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--export-cookie-jar",
          description:
            "Exports the cookie jar to a file after completing the run",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--verbose",
          description:
            "Show detailed information of collection run and each request sent",
        },
        {
          name: "--reporter-cli-silent",
          description:
            "The CLI reporter is internally disabled and you see no output to terminal",
        },
        {
          name: "--reporter-cli-show-timestamps",
          description: "Print the local time for each request made",
        },
        {
          name: "--reporter-cli-no-summary",
          description: "The statistical summary table is not shown",
        },
        {
          name: "--reporter-cli-no-failures",
          description: "Prevent the run failures from being separately printed",
        },
        {
          name: "--reporter-cli-no-assertions",
          description:
            "Turn off the output for request-wise assertions as they happen",
        },
        {
          name: "--reporter-cli-no-success-assertions",
          description:
            "Turn off the output for successful assertions as they happen",
        },
        {
          name: "--reporter-cli-no-console",
          description:
            "Turn off the output of console.log (and other console calls) from the collection's scripts",
        },
        {
          name: "--reporter-cli-no-banner",
          description:
            "Turn off the newman banner shown at the beginning of each collection run",
        },
        {
          name: "--reporter-json-export",
          description:
            "Specify a path where the output JSON file will be written to disk (default: newman/ in the current working directory)",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--reporter-junit-export",
          description:
            "Specify a path where the output XML file will be written to disk (default: newman/ in the current working directory)",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: ["-h", "--help"],
          description: "Display help for command",
          priority: 49,
        },
      ],
      args: {
        name: "collection",
        template: "filepaths",
      },
    },
  ],
  options: [
    { name: ["-v", "--version"], description: "Output the version number" },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      priority: 49,
    },
  ],
};

export default completionSpec;
