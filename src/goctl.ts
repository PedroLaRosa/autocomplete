// goctl v1.11.0 (Go module proxy tag tools/goctl/v1.11.0 of zeromicro/go-zero and the Homebrew formula, 2026-11-19).
// Source: static read of tools/goctl at that tag (cobra definitions in */cmd.go, help strings in internal/flags/default_en.json,
// rpc/cli, tpl/templates.go, pkg/env, config/readme.md); the binary was not built or run. The hidden generate-fig-spec command is omitted.
const homeOption: Fig.Option = {
  name: "--home",
  description:
    "The goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority",
  args: { name: "home", template: "folders" },
};

const remoteOption: Fig.Option = {
  name: "--remote",
  description:
    "The remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority. The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure",
  args: { name: "remote" },
};

const branchOption: Fig.Option = {
  name: "--branch",
  description: "The branch of the remote repo, it does work with --remote",
  args: { name: "branch" },
};

const styleOption = (withDefault = false): Fig.Option => ({
  name: "--style",
  description:
    "The file naming format, see [https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md]",
  args: {
    name: "style",
    suggestions: ["gozero", "goZero", "go_zero"],
    ...(withDefault && { default: "gozero" }),
  },
});

const dirOption = (
  name: string | string[] = "--dir",
  description = "The target dir"
): Fig.Option => ({
  name,
  description,
  args: { name: "dir", template: "folders" },
});

const apiFileOption: Fig.Option = {
  name: "--api",
  description: "The api file",
  args: { name: "api", template: "filepaths" },
};

const verboseOption = (name: string | string[]): Fig.Option => ({
  name,
  description: "Enable log output",
});

const cacheOption: Fig.Option = {
  name: ["--cache", "-c"],
  description: "Generate code with cache [optional]",
};

const ideaOption: Fig.Option = {
  name: "--idea",
  description: "For idea plugin [optional]",
};

const moduleOption: Fig.Option = {
  name: "--module",
  description: "Custom module name for go.mod (default: directory name)",
  args: { name: "module" },
};

const nameFromFilenameOption: Fig.Option = {
  name: "--name-from-filename",
  description:
    "Derive the service name from the proto filename instead of the proto package name",
};

const clientOption: Fig.Option = {
  name: ["--client", "-c"],
  description: "Whether to generate rpc client (default true)",
};

const noDescriptionsOption: Fig.Option = {
  name: "--no-descriptions",
  description: "Disable completion descriptions",
};

const modelDirOption = dirOption(["--dir", "-d"]);

const modelStrictOption: Fig.Option = {
  name: "--strict",
  description: "Generate model in strict mode",
};

const modelIgnoreColumnsOption: Fig.Option = {
  name: ["--ignore-columns", "-i"],
  description: "Ignore columns while creating or updating rows",
  args: {
    name: "columns",
    default:
      "create_at,created_at,create_time,update_at,updated_at,update_time",
  },
  isRepeatable: true,
  isPersistent: true,
};

const modelPrefixOption: Fig.Option = {
  name: ["--prefix", "-p"],
  description: "The cache prefix, effective when --cache is true",
  args: { name: "prefix", default: "cache" },
  isPersistent: true,
};

const modelTableOption: Fig.Option = {
  name: ["--table", "-t"],
  description: "The table or table globbing patterns in the database",
  args: { name: "table" },
  isRepeatable: true,
};

const templateHomeOption: Fig.Option = {
  name: "--home",
  description: "The goctl home path of the template",
  args: { name: "home", template: "folders" },
};

const templateCategoryOption: Fig.Option = {
  name: ["--category", "-c"],
  description: "The category of template, enum [api,rpc,model,docker,kube]",
  args: {
    name: "category",
    suggestions: [
      "api",
      "rpc",
      "model",
      "docker",
      "kube",
      "mongo",
      "newapi",
      "gateway",
    ],
  },
};

const completionSubcommand = (shell: string): Fig.Subcommand => ({
  name: shell,
  description: `Generate the autocompletion script for ${shell}`,
  options: [noDescriptionsOption],
});

const subcommands: Fig.Subcommand[] = [
  {
    name: "api",
    description: "Generate api related files",
    subcommands: [
      {
        name: "dart",
        description: "Generate dart files for provided api in api file",
        options: [
          apiFileOption,
          dirOption(),
          {
            name: "--hostname",
            description: "Hostname of the server",
            args: { name: "hostname" },
          },
          {
            name: "--legacy",
            description: "Legacy generator for flutter v1",
          },
          {
            name: "--scheme",
            description: "Scheme of the server",
            args: { name: "scheme" },
          },
        ],
      },
      {
        name: "doc",
        description: "Generate doc files",
        options: [
          dirOption(),
          {
            name: "--o",
            description: "The output markdown directory",
            args: { name: "o", template: "folders" },
          },
        ],
      },
      {
        name: "format",
        description: "Format api files",
        options: [
          {
            name: "--declare",
            description:
              "Use to skip check api types already declare, deprecated if goctl version >= 1.8.3",
            deprecated: true,
          },
          dirOption("--dir", "The format target dir"),
          { name: "--iu", description: "Ignore update" },
          {
            name: "--stdin",
            description:
              'Use stdin to input api doc content, press "ctrl + d" to send EOF',
          },
        ],
      },
      {
        name: "go",
        description: "Generate go files for provided api in api file",
        options: [
          apiFileOption,
          branchOption,
          dirOption(),
          homeOption,
          remoteOption,
          styleOption(true),
          { name: "--test", description: "Generate test files" },
          { name: "--type-group", description: "Generate type group files" },
        ],
      },
      {
        name: "java",
        description: "Generate java files for provided api in api file",
        hidden: true,
        options: [apiFileOption, dirOption()],
      },
      {
        name: "kt",
        description: "Generate kotlin code for provided api file",
        options: [
          apiFileOption,
          dirOption(),
          {
            name: "--pkg",
            description: "Define package name for kotlin file",
            args: { name: "pkg" },
          },
        ],
      },
      {
        name: "new",
        description: "Fast create api service",
        options: [
          branchOption,
          homeOption,
          moduleOption,
          remoteOption,
          styleOption(true),
        ],
        args: { name: "service-name" },
      },
      {
        name: "plugin",
        description: "Custom file generator",
        options: [
          apiFileOption,
          dirOption(),
          {
            name: ["--plugin", "-p"],
            description: "The plugin file",
            args: { name: "plugin", template: "filepaths" },
          },
          styleOption(),
        ],
      },
      {
        name: "swagger",
        description: "Generate swagger file from api",
        options: [
          apiFileOption,
          dirOption(),
          {
            name: "--filename",
            description:
              "The generated swagger file name without the extension",
            args: { name: "filename" },
          },
          {
            name: "--yaml",
            description: "Generate swagger yaml file, default to json",
          },
        ],
      },
      {
        name: "ts",
        description: "Generate ts files for provided api in api file",
        options: [
          apiFileOption,
          {
            name: "--caller",
            description: "The web api caller",
            args: { name: "caller" },
          },
          dirOption(),
          {
            name: "--unwrap",
            description: "Unwrap the webapi caller for import",
          },
        ],
      },
      {
        name: "validate",
        description: "Validate api file",
        options: [apiFileOption],
      },
    ],
    options: [
      branchOption,
      homeOption,
      {
        name: "--o",
        description: "Output a sample api file",
        args: { name: "o", template: "filepaths" },
      },
      remoteOption,
    ],
  },
  { name: "bug", description: "Report a bug" },
  {
    name: "completion",
    description: "Generate the autocompletion script for the specified shell",
    subcommands: ["bash", "fish", "powershell", "zsh"].map(
      completionSubcommand
    ),
  },
  {
    name: "config",
    description: "Manage the goctl config file",
    subcommands: [
      { name: "clean", description: "Clean goctl config file" },
      { name: "init", description: "Initialize goctl config file" },
    ],
  },
  {
    name: "docker",
    description: "Generate Dockerfile",
    options: [
      {
        name: "--base",
        description:
          "The base image to build the docker image, default scratch",
        args: { name: "base", default: "scratch" },
      },
      branchOption,
      {
        name: "--exe",
        description: "The executable name in the built image",
        args: { name: "exe" },
      },
      {
        name: "--go",
        description: "The file that contains main function",
        args: { name: "go", template: "filepaths" },
      },
      homeOption,
      {
        name: "--port",
        description: "The port to expose, default none",
        args: { name: "port" },
      },
      remoteOption,
      {
        name: "--tz",
        description: "The timezone of the container",
        args: { name: "tz", default: "Asia/Shanghai" },
      },
      {
        name: "--version",
        description: "The goctl builder golang image version",
        args: { name: "version" },
      },
    ],
  },
  {
    name: "env",
    description: "Check or edit goctl environment",
    subcommands: [
      {
        name: "check",
        description: "Detect goctl env and dependency tools",
        options: [
          {
            name: ["--install", "-i"],
            description: "Install dependencies if not found",
          },
        ],
      },
      { name: "install", description: "Goctl env installation" },
    ],
    options: [
      {
        name: ["--write", "-w"],
        description: "Edit goctl environment",
        args: { name: "key=value" },
        isRepeatable: true,
      },
      {
        name: ["--force", "-f"],
        description: "Silent installation of non-existent dependencies",
        isPersistent: true,
      },
      { ...verboseOption(["--verbose", "-v"]), isPersistent: true },
    ],
    args: {
      name: "key",
      description: "Environment variable to print",
      isOptional: true,
      isVariadic: true,
      suggestions: [
        "GOCTL_OS",
        "GOCTL_ARCH",
        "GOCTL_HOME",
        "GOCTL_DEBUG",
        "GOCTL_CACHE",
        "GOCTL_VERSION",
        "GOCTL_EXPERIMENTAL",
        "PROTOC_VERSION",
        "PROTOC_GEN_GO_VERSION",
        "PROTO_GEN_GO_GRPC_VERSION",
      ],
    },
  },
  {
    name: "gateway",
    description: "Gateway is a tool to generate gateway code",
    options: [
      { ...branchOption, isPersistent: true },
      { ...dirOption("--dir", "The output dir"), isPersistent: true },
      { ...homeOption, isPersistent: true },
      { ...remoteOption, isPersistent: true },
    ],
  },
  {
    name: "kube",
    description: "Generate kubernetes files",
    subcommands: [
      {
        name: "deploy",
        description: "Generate deployment yaml file",
        options: [
          branchOption,
          homeOption,
          {
            name: "--image",
            description: "The docker image of deployment (required)",
            args: { name: "image" },
          },
          {
            name: "--imagePullPolicy",
            description:
              "The image pull policy of the deployment, default to IfNotPresent",
            args: {
              name: "imagePullPolicy",
              suggestions: ["Always", "IfNotPresent", "Never"],
            },
          },
          {
            name: "--limitCpu",
            description: "The limit cpu to deploy",
            args: { name: "limitCpu", default: "1000" },
          },
          {
            name: "--limitMem",
            description: "The limit memory to deploy",
            args: { name: "limitMem", default: "1024" },
          },
          {
            name: "--maxReplicas",
            description: "The max replicas to deploy",
            args: { name: "maxReplicas", default: "10" },
          },
          {
            name: "--minReplicas",
            description: "The min replicas to deploy",
            args: { name: "minReplicas", default: "3" },
          },
          {
            name: "--name",
            description: "The name of deployment (required)",
            args: { name: "name" },
            isRequired: true,
          },
          {
            name: "--namespace",
            description: "The namespace of deployment (required)",
            args: { name: "namespace" },
            isRequired: true,
          },
          {
            name: "--nodePort",
            description: "The nodePort of the deployment to expose",
            args: { name: "nodePort" },
          },
          {
            name: "--o",
            description: "The output yaml file (required)",
            args: { name: "o", template: "filepaths" },
            isRequired: true,
          },
          {
            name: "--port",
            description:
              "The port of the deployment to listen on pod (required)",
            args: { name: "port" },
            isRequired: true,
          },
          remoteOption,
          {
            name: "--replicas",
            description: "The number of replicas to deploy",
            args: { name: "replicas", default: "3" },
          },
          {
            name: "--requestCpu",
            description: "The request cpu to deploy",
            args: { name: "requestCpu", default: "500" },
          },
          {
            name: "--requestMem",
            description: "The request memory to deploy",
            args: { name: "requestMem", default: "512" },
          },
          {
            name: "--revisions",
            description: "The number of revision history to limit",
            args: { name: "revisions", default: "5" },
          },
          {
            name: "--secret",
            description: "The secret to image pull from registry",
            args: { name: "secret" },
          },
          {
            name: "--serviceAccount",
            description: "The ServiceAccount for the deployment",
            args: { name: "serviceAccount" },
          },
          {
            name: "--targetPort",
            description: "The targetPort of the deployment, default to port",
            args: { name: "targetPort" },
          },
        ],
      },
    ],
  },
  {
    name: "migrate",
    description: "Migrate from tal-tech to zeromicro",
    options: [
      {
        name: ["--verbose", "-v"],
        description: "Verbose enables extra logging",
      },
      {
        name: "--version",
        description:
          "The target release version of github.com/zeromicro/go-zero to migrate",
        args: { name: "version", default: "v1.3.0" },
      },
    ],
  },
  {
    name: "model",
    description: "Generate model code",
    subcommands: [
      {
        name: "mongo",
        description: "Generate mongo model",
        options: [
          branchOption,
          cacheOption,
          modelDirOption,
          {
            name: ["--easy", "-e"],
            description:
              "Generate code with auto generated CollectionName for easy declare [optional]",
          },
          homeOption,
          {
            name: ["--prefix", "-p"],
            description: "Generate code with cache prefix [optional]",
            args: { name: "prefix" },
          },
          remoteOption,
          styleOption(),
          {
            name: ["--type", "-t"],
            description: "Specified model type name",
            args: { name: "type" },
            isRepeatable: true,
          },
        ],
      },
      {
        name: "mysql",
        description: "Generate mysql model",
        subcommands: [
          {
            name: "datasource",
            description: "Generate model from datasource",
            options: [
              branchOption,
              cacheOption,
              modelDirOption,
              homeOption,
              ideaOption,
              remoteOption,
              styleOption(),
              modelTableOption,
              {
                name: "--url",
                description:
                  'The data source of database, like "root:password@tcp(127.0.0.1:3306)/database"',
                args: { name: "url" },
              },
            ],
          },
          {
            name: "ddl",
            description: "Generate mysql model from ddl",
            options: [
              branchOption,
              cacheOption,
              {
                name: "--database",
                description: "The name of database [optional]",
                args: { name: "database" },
              },
              modelDirOption,
              homeOption,
              ideaOption,
              remoteOption,
              {
                name: ["--src", "-s"],
                description: "The path or path globbing patterns of the ddl",
                args: { name: "src", template: "filepaths" },
              },
              styleOption(),
            ],
          },
        ],
        options: [
          modelIgnoreColumnsOption,
          modelPrefixOption,
          { ...modelStrictOption, isPersistent: true },
        ],
      },
      {
        name: "pg",
        description: "Generate postgresql model",
        subcommands: [
          {
            name: "datasource",
            description: "Generate model from datasource",
            options: [
              branchOption,
              cacheOption,
              modelDirOption,
              homeOption,
              ideaOption,
              remoteOption,
              {
                name: ["--schema", "-s"],
                description:
                  "The schema or schema globbing patterns in the database",
                args: { name: "schema", default: "public" },
              },
              modelStrictOption,
              styleOption(),
              modelTableOption,
              {
                name: "--url",
                description:
                  'The data source of database, like "postgres://root:password@127.0.0.1:5432/database?sslmode=disable"',
                args: { name: "url" },
              },
            ],
          },
        ],
        options: [modelIgnoreColumnsOption, modelPrefixOption],
      },
    ],
  },
  {
    name: "quickstart",
    description: "Quickly start a project",
    options: [
      {
        name: ["--service-type", "-t"],
        description:
          "Specify the service type, supported values: [mono, micro]",
        args: {
          name: "service-type",
          default: "mono",
          suggestions: ["mono", "micro"],
        },
      },
    ],
  },
  {
    name: "rpc",
    description: "Generate rpc code",
    subcommands: [
      {
        name: "new",
        description: "Generate rpc demo service",
        options: [
          branchOption,
          clientOption,
          {
            name: "--go-grpc_opt",
            description: "The protoc --go-grpc_opt option",
            hidden: true,
            args: { name: "go-grpc_opt" },
            isRepeatable: true,
          },
          {
            name: "--go_opt",
            description: "The protoc --go_opt option",
            hidden: true,
            args: { name: "go_opt" },
            isRepeatable: true,
          },
          homeOption,
          ideaOption,
          moduleOption,
          nameFromFilenameOption,
          remoteOption,
          styleOption(true),
          verboseOption(["--verbose", "-v"]),
        ],
        args: { name: "service-name" },
      },
      {
        name: "protoc",
        description: "Generate grpc code",
        options: [
          branchOption,
          clientOption,
          {
            name: "--client-only",
            description:
              "Generate protobuf files and the RPC client without a server skeleton",
          },
          {
            name: "--go-grpc_opt",
            description: "The protoc --go-grpc_opt option",
            hidden: true,
            args: { name: "go-grpc_opt" },
            isRepeatable: true,
          },
          {
            name: "--go-grpc_out",
            description:
              "The protoc --go-grpc_out option, the output directory of the grpc Go code (required)",
            hidden: true,
            args: { name: "go-grpc_out", template: "folders" },
            isRepeatable: true,
            isRequired: true,
          },
          {
            name: "--go_opt",
            description: "The protoc --go_opt option",
            hidden: true,
            args: { name: "go_opt" },
            isRepeatable: true,
          },
          {
            name: "--go_out",
            description:
              "The protoc --go_out option, the output directory of the Go code (required)",
            hidden: true,
            args: { name: "go_out", template: "folders" },
            isRepeatable: true,
            isRequired: true,
          },
          homeOption,
          moduleOption,
          {
            name: ["--multiple", "-m"],
            description: "Generated in multiple rpc service mode",
          },
          nameFromFilenameOption,
          {
            name: "--plugin",
            description: "The protoc --plugin option",
            hidden: true,
            args: { name: "plugin" },
            isRepeatable: true,
          },
          {
            name: ["--proto_path", "-I"],
            description:
              "The directory to search for imported proto files, equivalent to the protoc -I flag",
            hidden: true,
            args: { name: "proto_path", template: "folders" },
            isRepeatable: true,
          },
          remoteOption,
          styleOption(),
          verboseOption(["--verbose", "-v"]),
          {
            name: "--zrpc_out",
            description: "The zrpc output directory",
            args: { name: "zrpc_out", template: "folders" },
            isRequired: true,
          },
        ],
        args: { name: "proto", template: "filepaths" },
      },
      {
        name: "template",
        description: "Generate proto template",
        options: [
          branchOption,
          homeOption,
          {
            name: "--o",
            description: "Output a sample proto file",
            args: { name: "o", template: "filepaths" },
          },
          remoteOption,
        ],
      },
    ],
    options: [
      branchOption,
      homeOption,
      {
        name: "--o",
        description: "Output a sample proto file",
        args: { name: "o", template: "filepaths" },
      },
      remoteOption,
    ],
  },
  {
    name: "template",
    description: "Template operation",
    subcommands: [
      {
        name: "clean",
        description: "Clean the all cache templates",
        options: [templateHomeOption],
      },
      {
        name: "init",
        description: "Initialize the all templates(force update)",
        options: [templateHomeOption],
      },
      {
        name: "revert",
        description: "Revert the target template to the latest",
        options: [
          templateCategoryOption,
          templateHomeOption,
          {
            name: ["--name", "-n"],
            description: "The target file name of template",
            args: { name: "name" },
          },
        ],
      },
      {
        name: "update",
        description: "Update template of the target category to the latest",
        options: [templateCategoryOption, templateHomeOption],
      },
    ],
  },
  { name: "upgrade", description: "Upgrade goctl to latest version" },
];

// cobra's built-in `help` command completes the (non-hidden) command tree
const helpSubcommands = (cmds: Fig.Subcommand[]): Fig.Subcommand[] =>
  cmds
    .filter((cmd) => !cmd.hidden)
    .map((cmd) => ({
      name: cmd.name,
      description: cmd.description,
      ...(cmd.subcommands && { subcommands: helpSubcommands(cmd.subcommands) }),
    }));

const completionSpec: Fig.Spec = {
  name: "goctl",
  description: "A cli tool to generate go-zero code",
  subcommands: [
    ...subcommands,
    {
      name: "help",
      description: "Help about any command",
      subcommands: helpSubcommands(subcommands),
    },
  ],
  options: [
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
    { name: ["--version", "-v"], description: "Version for goctl" },
  ],
};
export default completionSpec;
