// barnard59 v6.0.1 (npm latest, 2026-11-20), with plugin commands from barnard59-cube 2.0.1, barnard59-graph-store 7.0.1, barnard59-shacl 2.0.1 and barnard59-n3 0.2.0.
// Source: read statically (CLI not executed) from the npm tarballs and zazuko/barnard59 @ f9612cb: packages/cli commander definitions
// (cli.js, commonOptions.js, monitoringOptions.js, dynamicCommands.js) and each plugin's manifest.ttl + pipeline variable declarations
// (every p:Variable becomes a --<name> option; required unless `p:required false`; an option with a default is never reported missing).
// Plugin command groups (cube, graph-store, n3, shacl) only exist when the matching barnard59-<name> package is installed.

const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "Display help for command",
  priority: 49,
};

const versionOption: Fig.Option = {
  name: ["-V", "--version"],
  description: "Output the version number",
};

const variableOption: Fig.Option = {
  name: "--variable",
  description: "Variable key/value pairs",
  isRepeatable: true,
  args: { name: "name=value" },
};

const variableAllOption: Fig.Option = {
  name: "--variable-all",
  description: "Import all environment variables",
};

const verboseOption: Fig.Option = {
  name: ["-v", "--verbose"],
  description: "Enable diagnostic console output",
  isRepeatable: true,
};

const quietOption: Fig.Option = {
  name: ["-q", "--quiet"],
  description: "Disable all logging",
};

const helpSubcommand: Fig.Subcommand = {
  name: "help",
  description: "Display help for command",
  priority: 49,
  args: { name: "command", isOptional: true, template: "help" },
};

// Options added to every plugin command by the CLI
const pipelineOptions: Fig.Option[] = [
  variableOption,
  variableAllOption,
  verboseOption,
  helpOption,
];

const endpointOption: Fig.Option = {
  name: "--endpoint",
  description: "SPARQL endpoint",
  isRequired: true,
  args: { name: "endpoint" },
};

const cubeOption: Fig.Option = {
  name: "--cube",
  description: "Cube URI",
  isRequired: true,
  args: { name: "cube" },
};

const cubeFetchCommand = (
  name: string,
  description: string
): Fig.Subcommand => ({
  name,
  description,
  options: [endpointOption, cubeOption, ...pipelineOptions],
});

const completionSpec: Fig.Spec = {
  name: "barnard59",
  subcommands: [
    {
      name: "run",
      options: [
        {
          name: "--output",
          description: "Output file",
          args: {
            name: "filename",
            isOptional: true,
            default: "-",
            template: "filepaths",
          },
        },
        {
          name: "--pipeline",
          description: "IRI of the pipeline description",
          args: { name: "iri", isOptional: true },
        },
        variableOption,
        variableAllOption,
        verboseOption,
        quietOption,
        helpOption,
      ],
      args: { name: "filename", template: "filepaths" },
    },
    {
      name: "cube",
      subcommands: [
        cubeFetchCommand(
          "fetch-metadata",
          "Retrieves cube and its constraint shape from SPARQL endpoint"
        ),
        {
          name: "check-metadata",
          description:
            "Validate input cube and its constraint against profile shapes",
          options: [
            {
              name: "--profile",
              description: "Cube constraint profile URL",
              args: {
                name: "profile",
                default:
                  "https://cube.link/latest/shape/standalone-constraint-constraint",
              },
            },
            {
              name: "--profileFormat",
              description: "Override the profile format",
              args: { name: "profileFormat" },
            },
            ...pipelineOptions,
          ],
        },
        cubeFetchCommand(
          "fetch-observations",
          "Retrieves cube observations from SPARQL endpoint"
        ),
        {
          name: "check-observations",
          description: "Validate input observations against cube constraint",
          options: [
            {
              name: "--constraint",
              description: "Cube constraint file",
              isRequired: true,
              args: { name: "constraint", template: "filepaths" },
            },
            {
              name: "--batchSize",
              description: "Batch size",
              args: { name: "batchSize", default: "50" },
            },
            {
              name: "--maxViolations",
              description: "Max number of violations",
              args: { name: "maxViolations", default: "500" },
            },
            {
              name: "--sortChunkSize",
              description: "Sort chunk size",
              args: { name: "sortChunkSize", default: "100000" },
            },
            ...pipelineOptions,
          ],
        },
        cubeFetchCommand(
          "fetch-constraint",
          "Retrieves cube constraint from SPARQL endpoint"
        ),
        cubeFetchCommand(
          "fetch-cube",
          "Retrieves cube with observations from SPARQL endpoint"
        ),
        helpSubcommand,
      ],
      options: [versionOption, helpOption],
    },
    {
      name: "graph-store",
      subcommands: [
        {
          name: "put",
          description: "Upload RDF documents using SPARQL Graph Store Protocol",
          options: [
            {
              name: "--source",
              description: "Glob of RDF documents to upload",
              isRequired: true,
              args: { name: "source" },
            },
            {
              name: "--graph",
              description: "Named graph IRI, or DEFAULT for the default graph",
              args: { name: "graph" },
            },
            {
              name: "--endpoint",
              description: "URL of the Graph Store endpoint",
              isRequired: true,
              args: { name: "endpoint" },
            },
            {
              name: "--user",
              description: "User for basic authentication",
              args: { name: "user" },
            },
            {
              name: "--password",
              description: "Password for basic authentication",
              args: { name: "password" },
            },
            ...pipelineOptions,
          ],
        },
        helpSubcommand,
      ],
      options: [versionOption, helpOption],
    },
    {
      name: "n3",
      subcommands: [
        {
          name: "apply",
          description: "Applies N3 rules to datasets in barnard59 pipelines",
          options: [
            {
              name: "--rules",
              description: "Path of the N3 rules file",
              isRequired: true,
              args: { name: "rules", template: "filepaths" },
            },
            {
              name: "--include",
              description: "Set to 'all' to include the input dataset",
              args: { name: "include", suggestions: ["all"] },
            },
            ...pipelineOptions,
          ],
        },
        helpSubcommand,
      ],
      options: [versionOption, helpOption],
    },
    {
      name: "shacl",
      subcommands: [
        {
          name: "validate",
          description:
            "Validates the RDF in standard input against a SHACL document",
          options: [
            {
              name: "--shapes",
              description: "URL or path of the shapes graph",
              args: { name: "shapes" },
            },
            {
              name: "--shapesMediaType",
              description: "Override the shapes graph format",
              args: { name: "shapesMediaType" },
            },
            ...pipelineOptions,
          ],
        },
        {
          name: "report-summary",
          description: "Human-readable summary of SHACL validation report",
          options: pipelineOptions,
        },
        helpSubcommand,
      ],
      options: [versionOption, helpOption],
    },
    helpSubcommand,
  ],
  options: [
    variableOption,
    variableAllOption,
    verboseOption,
    quietOption,
    {
      name: "--enable-buffer-monitor",
      description: "Enable histogram of buffer usage",
    },
    {
      name: "--otel-debug",
      description: "Enable OpenTelemetry console diagnostic output",
      args: {
        name: "level",
        suggestions: [
          "NONE",
          "ERROR",
          "WARN",
          "INFO",
          "DEBUG",
          "VERBOSE",
          "ALL",
        ],
        default: "ERROR",
      },
    },
    {
      name: "--otel-metrics-exporter",
      description: "OpenTelemetry Metrics exporter to use",
      args: {
        name: "exporter",
        suggestions: ["otlp", "none"],
        default: "none",
      },
    },
    {
      name: "--otel-metrics-interval",
      description: "Export Metrics interval",
      args: { name: "milliseconds", default: "10000" },
    },
    {
      name: "--otel-traces-exporter",
      description: "OpenTelemetry Traces exporter to use",
      args: {
        name: "exporter",
        suggestions: ["otlp", "none"],
        default: "none",
      },
    },
    helpOption,
  ],
};

export default completionSpec;
