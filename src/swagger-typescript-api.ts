// swagger-typescript-api v13.14.0 (npm "latest" = GitHub tag v13.14.0, 2026-11-20). Source: read statically from
// the v13.14.0 sources (index.ts citty command definitions, src/configuration.ts defaults, CHANGELOG.md) and
// citty 0.2.2 (builtin --help/--version handling, --no-<flag> negation); the CLI was not executed.
// Since v13.2.1 the code generator is the required `generate` subcommand (bare `swagger-typescript-api -p ...`
// no longer works). The `sta` binary is an alias of the same CLI (see src/sta.ts).
// Removed since the previous spec: --union-enums, --disableStrictSSL, --disableProxy and the root-level options.
// Note: upstream's --http-client handling selects axios for any value given (index.ts checks truthiness only).
const debugOption: Fig.Option = {
  name: "--debug",
  description: "Additional information about processes inside this tool",
};

const silentOption: Fig.Option = {
  name: "--silent",
  description: "Output only errors to console",
};

const httpClientOption = (defaultValue?: string): Fig.Option => ({
  name: "--http-client",
  description: "Http client type",
  args: {
    name: "Http client",
    suggestions: ["fetch", "axios"],
    default: defaultValue,
  },
});

const cleanOutputOption = (what: string): Fig.Option => ({
  name: "--clean-output",
  description: `Clean output folder before generate ${what}. WARNING: May cause data loss`,
  isDangerous: true,
});

const completionSpec: Fig.Spec = {
  name: "swagger-typescript-api",
  description:
    "Generate the API client for Fetch or Axios from an OpenAPI Specification",
  icon: "https://static1.smartbear.co/swagger/media/assets/swagger_fav.png",
  subcommands: [
    {
      name: "generate",
      description:
        "Generate the API client for Fetch or Axios from an OpenAPI Specification",
      options: [
        {
          name: ["--path", "-p"],
          description: "Path/url to swagger schema",
          args: {
            name: "Path",
            template: "filepaths",
          },
        },
        {
          name: ["--output", "-o"],
          description: "Output path of typescript api file",
          args: {
            name: "Path",
            template: "folders",
            default: "./",
          },
        },
        {
          name: ["--name", "-n"],
          description: "Name of output typescript api file",
          args: {
            name: "Name",
            default: "Api.ts",
          },
        },
        {
          name: ["--templates", "-t"],
          description: "Path to folder containing templates",
          args: {
            name: "Path",
            template: "folders",
          },
        },
        {
          name: "--custom-config",
          description:
            "Custom config file name (primitiveTypeConstructs, hooks, ...)",
          args: {
            name: "Config file",
          },
        },
        {
          name: ["--default-as-success", "-d"],
          description:
            'Use "default" response status code as success response too',
        },
        {
          name: ["--responses", "-r"],
          description:
            "Generate additional information about request responses also add typings for bad responses",
        },
        {
          name: "--enum-style",
          description: "Enum output style",
          args: {
            name: "Style",
            suggestions: [
              { name: "enum", description: "TypeScript enum (default)" },
              { name: "union", description: "Union type (T1 | T2 | TN)" },
              {
                name: "const",
                description: "As const object plus a type alias",
              },
              { name: "const-enum", description: "TypeScript const enum" },
            ],
            default: "enum",
          },
        },
        {
          name: "--generate-union-enums",
          description:
            'Generate all "enum" types as union types (T1 | T2 | TN). Use --enum-style union instead',
          deprecated: true,
        },
        {
          name: "--import-file-extension",
          description:
            "Extension appended to generated relative imports (default: none)",
          args: {
            name: "Extension",
            suggestions: [
              {
                name: ".js",
                description: "For moduleResolution node16/nodenext",
              },
              {
                name: ".ts",
                description: "For allowImportingTsExtensions",
              },
            ],
          },
        },
        {
          name: "--type-only-imports",
          description:
            "Emit `import type` / inline `type` for type-only imports (verbatimModuleSyntax / isolatedModules)",
        },
        {
          name: "--add-readonly",
          description: "Generate readonly properties",
        },
        {
          name: "--route-types",
          description: "Generate type definitions for API routes",
        },
        {
          name: "--no-client",
          description: "Do not generate an API class",
        },
        {
          name: "--enum-names-as-values",
          description:
            "Use values in 'x-enumNames' as enum values (not only as keys)",
        },
        {
          name: "--extract-enums",
          description:
            "Extract all enums from inline interface/type content to typescript enum construction",
        },
        {
          name: "--extract-request-params",
          description:
            "Extract request params to data contract (Also combine path params and query params into one object)",
        },
        {
          name: "--extract-request-body",
          description: "Extract request body type to data contract",
        },
        {
          name: "--extract-response-body",
          description: "Extract response body type to data contract",
        },
        {
          name: "--extract-response-error",
          description: "Extract response error type to data contract",
        },
        {
          name: "--extract-responses",
          description:
            "Extract all responses described in /components/responses",
        },
        {
          name: "--modular",
          description:
            "Generate separated files for http client, data contracts, and routes",
        },
        {
          name: "--js",
          description: "Generate js api module with declaration file",
        },
        {
          name: "--module-name-index",
          description:
            "Determines which path index should be used for routes separation (example: GET:/fruits/getFruit -> index:0 -> moduleName -> fruits)",
          args: {
            name: "Index",
            default: "0",
          },
        },
        {
          name: "--module-name-first-tag",
          description: "Splits routes based on the first tag",
        },
        httpClientOption(),
        { name: "--axios", description: "Generate axios http client" },
        {
          name: "--unwrap-response-data",
          description: "Unwrap the data item from the response",
        },
        {
          name: "--disable-throw-on-error",
          description: "Do not throw an error when response.ok is not true",
        },
        {
          name: "--single-http-client",
          description: "Ability to send HttpClient instance to Api constructor",
        },
        {
          name: "--default-request-params",
          description: "Request parameters for each API request",
          args: {
            name: "Params",
            default: "{}",
          },
        },
        {
          name: "--default-response",
          description: "Default type for empty response schema",
          args: {
            name: "Type",
          },
        },
        {
          name: "--type-prefix",
          description: "Data contract name prefix",
          args: {
            name: "Prefix",
          },
        },
        {
          name: "--type-suffix",
          description: "Data contract name suffix",
          args: {
            name: "Suffix",
          },
        },
        {
          name: "--api-class-name",
          description: "Name of the api class",
          args: {
            name: "Name",
            default: "Api",
          },
        },
        {
          name: "--disable-format-type-names",
          description: "Disable formatting and normalization of type names",
        },
        {
          name: "--disable-external-schemas",
          description:
            "Do not resolve and generate schemas referenced from external OpenAPI files",
        },
        {
          name: "--prefer-existing-schema-names-for-external-refs",
          description:
            "Reuse existing local schema names for external refs when the file name matches the schema name or the ref targets an existing component schema fragment",
        },
        {
          name: "--patch",
          description: "Fix up small errors in the swagger source definition",
        },
        {
          name: "--another-array-type",
          description:
            "Generate array types as Array<Type> (by default Type[])",
        },
        {
          name: "--sort-types",
          description: "Sort fields and types",
        },
        {
          name: "--sort-routes",
          description: "Sort routes in alphabetical order",
        },
        {
          name: "--empty-not-as-never",
          description:
            "Generate never instead of any for not: {} and not: true",
        },
        cleanOutputOption("api"),
        debugOption,
        silentOption,
      ],
    },
    {
      name: "generate-templates",
      description: 'Generate ".ejs" templates needed for generate api',
      options: [
        {
          name: ["--output", "-o"],
          description: "Output path of generated templates",
          args: {
            name: "Path",
            template: "folders",
          },
        },
        {
          name: "--modular",
          description:
            "Generate templates needed to separate files for http client, data contracts, and routes",
        },
        httpClientOption("fetch"),
        cleanOutputOption("template"),
        {
          name: ["--rewrite", "-r"],
          description: "Rewrite content in existing templates",
        },
        debugOption,
        silentOption,
      ],
    },
  ],
  options: [
    {
      name: ["--version", "-v"],
      description: "Output the current version",
    },
    {
      name: ["--help", "-h"],
      description: "Show help for swagger-typescript-api",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
