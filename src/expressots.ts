// ExpressoTS CLI (@expressots/cli) v4.3.0 (npm latest, 2026-11-19).
// Source: npm tarball @expressots/cli@4.3.0 unpacked and read statically (bin/cli.js, bin/*/cli.js yargs
// command/option definitions, help/main-help.js and help/command-help-registry.js). The CLI binary was not run.
// The old `expressots templates` / `expressots package manager` generators were removed: those commands do not exist.
// Boolean options that default to true also accept the yargs `--no-<name>` negation, listed explicitly below.
const ciPlatforms = [
  "github",
  "gitlab",
  "circleci",
  "jenkins",
  "bitbucket",
  "azure",
  "all",
];

const ciStrategies = ["basic", "comprehensive", "security-focused"];

const packageManagers = ["npm", "yarn", "pnpm", "bun"];

const templateChoices = ["application", "micro"];

// A boolean option that defaults to true, plus its yargs negation
const defaultOnFlag = (
  name: string,
  description: string,
  negatedDescription: string,
  alias?: string
): Fig.Option[] => [
  {
    name: alias ? [alias, `--${name}`] : `--${name}`,
    description: `${description} (default)`,
    exclusiveOn: [`--no-${name}`],
  },
  {
    name: `--no-${name}`,
    description: negatedDescription,
    exclusiveOn: alias ? [alias, `--${name}`] : [`--${name}`],
  },
];

const completionSpec: Fig.Spec = {
  name: "expressots",
  description: "ExpressoTS CLI",
  subcommands: [
    {
      name: "new",
      description: "Create a new ExpressoTS application or micro project",
      args: [
        {
          name: "project-name",
          description: "Name of the project",
        },
        {
          name: "package-manager",
          description: "Package manager (or use --package-manager)",
          isOptional: true,
          suggestions: packageManagers,
        },
        {
          name: "template",
          description: "Project template (or use --template)",
          isOptional: true,
          suggestions: templateChoices,
        },
        {
          name: "directory",
          description: "Parent directory (or use --directory)",
          isOptional: true,
          template: "folders",
        },
      ],
      options: [
        {
          name: ["-t", "--template"],
          description:
            "Project template (application or micro, use with --package-manager)",
          args: {
            name: "template",
            suggestions: [
              {
                name: "application",
                description:
                  "Full REST/GraphQL API (DI, controllers, lifecycle, presets)",
              },
              {
                name: "micro",
                description:
                  "Single-file HTTP service via micro(), no DI container",
              },
            ],
          },
        },
        {
          name: "--target",
          description:
            "Deployment target (micro template only, requires --template)",
          args: {
            name: "target",
            suggestions: [
              {
                name: "cloudflare",
                description: "Cloudflare Workers deployment target",
              },
            ],
          },
        },
        {
          name: ["-p", "--package-manager"],
          description: "Package manager (bun is not available on Windows)",
          args: {
            name: "package-manager",
            suggestions: packageManagers,
          },
        },
        {
          name: ["-s", "--preset"],
          description:
            "Middleware preset (application template only, requires --template)",
          args: {
            name: "preset",
            suggestions: [
              {
                name: "api",
                description:
                  "REST API: security, compression, rate limit (default)",
              },
              {
                name: "web",
                description: "API preset plus cookies and session",
              },
              {
                name: "graphql",
                description: "GraphQL stack and Apollo scaffold",
              },
              {
                name: "microservice",
                description: "Minimal parsing and compression",
              },
              {
                name: "minimal",
                description: "Only parse(), wire the rest yourself",
              },
            ],
          },
        },
        {
          name: ["-e", "--events"],
          description:
            "Scaffold application-with-events (boolean flag, requires --template)",
        },
        {
          name: ["-d", "--directory"],
          description: "Parent directory for the new project",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Show command help",
        },
      ],
    },
    {
      name: "dev",
      description: "Start the development server",
      options: [
        {
          name: ["-c", "--container"],
          description: "Run development inside a Docker container",
        },
        {
          name: ["-b", "--build"],
          description: "Rebuild container before starting",
          dependsOn: ["-c", "--container"],
        },
        {
          name: ["-d", "--detach"],
          description: "Run container in background",
          dependsOn: ["-c", "--container"],
        },
        {
          name: ["-r", "--runtime"],
          description:
            "Runtime that launches the app (default: bun if the project uses it and it is installed, else node)",
          args: {
            name: "runtime",
            suggestions: ["node", "bun"],
          },
        },
      ],
    },
    {
      name: "build",
      description: "Build the project for production",
    },
    {
      name: "prod",
      description: "Run in production mode",
      options: [
        {
          name: ["-r", "--runtime"],
          description:
            "Runtime that launches the app (default: bun if the project uses it and it is installed, else node)",
          args: {
            name: "runtime",
            suggestions: ["node", "bun"],
          },
        },
      ],
    },
    {
      name: ["info", "i"],
      description: "Display project information",
    },
    {
      name: "llms",
      description:
        "Print the installed framework's llms.txt (guidance for AI coding tools)",
      options: [
        {
          name: ["-p", "--package"],
          description:
            "Package whose llms.txt to print (default: @expressots/core)",
          args: {
            name: "package",
          },
        },
      ],
    },
    {
      name: "scripts",
      description: "Run scripts list or specific scripts",
      args: {
        name: "scripts",
        description: "The names of the scripts to run",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: ["generate", "g"],
      description: "Scaffold a resource (controller, usecase, dto, ...)",
      args: [
        {
          name: "schematic",
          description: "The schematic to generate",
          isOptional: true,
          suggestions: [
            { name: ["usecase", "u"], description: "Use case" },
            { name: ["controller", "c"], description: "Controller" },
            { name: ["dto", "d"], description: "Data transfer object" },
            { name: ["service", "s"], description: "Service" },
            { name: ["provider", "p"], description: "Provider" },
            { name: ["entity", "e"], description: "Entity" },
            { name: ["module", "mo"], description: "Module" },
            { name: ["middleware", "mi"], description: "Middleware" },
            { name: ["interceptor", "i"], description: "Interceptor" },
            { name: ["event", "ev"], description: "Event" },
            { name: ["handler", "h"], description: "Event handler" },
            { name: ["guard", "gu"], description: "Guard" },
            { name: ["config", "cfg"], description: "Config" },
          ],
        },
        {
          name: "path",
          description: "The path to generate the schematic",
          isOptional: true,
        },
        {
          name: "method",
          description: "HTTP method",
          isOptional: true,
          suggestions: ["get", "post", "put", "patch", "delete"],
        },
      ],
      options: [
        {
          name: "--event",
          description: "Event class name for handler generation",
          args: {
            name: "event",
          },
        },
        {
          name: "--priority",
          description:
            "Priority for interceptors and handlers, lower runs earlier (default: 10)",
          args: {
            name: "priority",
          },
        },
      ],
    },
    {
      name: "create",
      description: "Create an external provider",
      args: {
        name: "provider",
        description: "Provider name",
        isOptional: true,
      },
      options: [
        {
          name: "--provider",
          description: "Provider name",
          args: {
            name: "provider",
          },
        },
      ],
    },
    {
      name: "add",
      description: "Add a provider to the project",
      args: [
        {
          name: "provider",
          description: "The provider to be added to the project",
        },
        {
          name: "version",
          description: "The provider version to be installed",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-v", "--version"],
          description: "The provider version to be installed",
          args: {
            name: "version",
          },
        },
        {
          name: ["-d", "--dev"],
          description: "Add provider as a dev dependency",
        },
      ],
    },
    {
      name: "remove",
      description: "Remove a provider from the project",
      args: {
        name: "provider",
        description: "The provider to be removed from the project",
      },
    },
    {
      name: ["containerize", "ctr"],
      description: "Generate Docker / Kubernetes / Compose configs",
      args: [
        {
          name: "target",
          description: "Target platform for containerization (default: docker)",
          isOptional: true,
          suggestions: ["docker", "kubernetes", "k8s", "compose"],
        },
        {
          name: "environment",
          description: "Target environment (default: production)",
          isOptional: true,
          suggestions: ["development", "staging", "production", "all"],
        },
      ],
      options: [
        {
          name: "--preset",
          description: "Container preset to use (default: standard)",
          args: {
            name: "preset",
            suggestions: [
              "minimal",
              "secure",
              "fast-startup",
              "dev",
              "multi-arch",
              "standard",
            ],
          },
        },
        ...defaultOnFlag(
          "analyze",
          "Analyze project before generating",
          "Skip project analysis"
        ),
        {
          name: "--skip-compose",
          description: "Skip docker-compose.yml generation",
        },
        {
          name: "--include-ci",
          description: "Include CI/CD pipeline configuration",
        },
        {
          name: "--ci-platform",
          description:
            "CI/CD platform to generate configuration for (default: github)",
          args: {
            name: "platform",
            suggestions: ciPlatforms,
          },
        },
        {
          name: "--ci-strategy",
          description: "CI/CD pipeline strategy (default: comprehensive)",
          args: {
            name: "strategy",
            suggestions: ciStrategies,
          },
        },
        ...defaultOnFlag(
          "include-security-scans",
          "Include security scanning (Trivy, Snyk)",
          "Skip security scanning"
        ),
        {
          name: "--include-e2e",
          description: "Include end-to-end tests in CI pipeline",
        },
      ],
    },
    {
      name: ["cicd", "ci", "pipeline"],
      description: "Generate and manage CI/CD pipelines",
      args: [
        {
          name: "action",
          description: "Action to perform",
          suggestions: [
            { name: "init", description: "Interactive pipeline setup" },
            {
              name: "generate",
              description: "Generate pipeline configuration",
            },
            { name: "list", description: "List supported platforms" },
            { name: "validate", description: "Validate existing pipelines" },
          ],
        },
        {
          name: "platform",
          description: "CI/CD platform to generate for",
          isOptional: true,
          suggestions: ciPlatforms,
        },
      ],
      options: [
        {
          name: ["-s", "--strategy"],
          description: "CI/CD pipeline strategy (default: comprehensive)",
          args: {
            name: "strategy",
            suggestions: ciStrategies,
          },
        },
        ...defaultOnFlag(
          "include-security",
          "Include security scanning (Trivy, Snyk)",
          "Skip security scanning"
        ),
        {
          name: "--include-e2e",
          description: "Include end-to-end tests",
        },
        ...defaultOnFlag(
          "include-coverage",
          "Include code coverage reporting",
          "Skip code coverage reporting"
        ),
        {
          name: ["-r", "--docker-registry"],
          description: "Docker registry URL (e.g. ghcr.io, docker.io)",
          args: {
            name: "registry",
          },
        },
        {
          name: "--deploy-target",
          description: "Deployment target platform (default: none)",
          args: {
            name: "target",
            suggestions: [
              "kubernetes",
              "ecs",
              "cloudrun",
              "railway",
              "render",
              "fly",
              "none",
            ],
          },
        },
        {
          name: ["-b", "--branch"],
          description: "Branch to trigger CI/CD on (default: main)",
          args: {
            name: "branch",
          },
        },
        {
          name: "--node-version",
          description: "Node.js version for CI (default: 20)",
          args: {
            name: "version",
          },
        },
        {
          name: ["-o", "--output-dir"],
          description: "Output directory for generated files",
          args: {
            name: "directory",
            template: "folders",
          },
        },
      ],
    },
    {
      name: ["migrate", "migration", "mig"],
      description: "Generate migration scripts between platforms",
      args: {
        name: "action",
        description: "Action to perform",
        suggestions: [
          { name: "init", description: "Interactive migration setup" },
          { name: "generate", description: "Generate migration scripts" },
          { name: "list", description: "List supported platforms" },
          { name: "analyze", description: "Analyze a migration path" },
        ],
      },
      options: [
        {
          name: ["-f", "--from"],
          description: "Source platform to migrate from",
          args: {
            name: "platform",
            suggestions: [
              "heroku",
              "docker-compose",
              "vercel",
              "aws-ecs",
              "gcp-cloudrun",
              "azure-container",
            ],
          },
        },
        {
          name: ["-t", "--to"],
          description: "Target platform to migrate to",
          args: {
            name: "platform",
            suggestions: [
              "railway",
              "render",
              "fly",
              "kubernetes",
              "aws-ecs",
              "gcp-cloudrun",
              "azure-container",
            ],
          },
        },
        {
          name: "--include-data",
          description: "Include data migration scripts",
        },
        ...defaultOnFlag(
          "include-secrets",
          "Include secrets and environment variable migration",
          "Skip secrets and environment variable migration"
        ),
        {
          name: "--dry-run",
          description: "Show migration steps without generating files",
        },
        {
          name: ["-o", "--output-dir"],
          description:
            "Output directory for migration files (default: ./migration)",
          args: {
            name: "directory",
            template: "folders",
          },
        },
      ],
    },
    {
      name: ["profile", "prof", "analyze"],
      description: "Analyze and optimize container configs",
      args: [
        {
          name: "action",
          description: "Action to perform",
          suggestions: [
            {
              name: "container",
              description: "Analyze a container configuration",
            },
            { name: "image", description: "Analyze a Docker image" },
            {
              name: "optimize",
              description: "Suggest Dockerfile optimizations",
            },
            { name: "report", description: "Show the latest profile report" },
          ],
        },
        {
          name: "target",
          description: "Dockerfile path or image name",
          isOptional: true,
          template: "filepaths",
        },
      ],
      options: [
        {
          name: ["-f", "--dockerfile"],
          description: "Path to Dockerfile (default: Dockerfile)",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--format",
          description: "Output format (default: text)",
          args: {
            name: "format",
            suggestions: ["text", "json", "html"],
          },
        },
        {
          name: "--severity",
          description: "Minimum severity to report (default: low)",
          args: {
            name: "severity",
            suggestions: ["low", "medium", "high", "critical"],
          },
        },
        {
          name: "--auto-fix",
          description: "Automatically apply safe optimizations",
        },
        {
          name: ["-o", "--output"],
          description: "Output file for report",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        ...defaultOnFlag(
          "include-security",
          "Include security vulnerability scanning",
          "Skip security vulnerability scanning"
        ),
        ...defaultOnFlag(
          "include-size",
          "Include size analysis",
          "Skip size analysis"
        ),
      ],
    },
    {
      name: ["container-dev", "cdev", "docker-dev"],
      description: "Develop inside Docker with hot reload",
      args: {
        name: "action",
        description: "Action to perform (default: start)",
        isOptional: true,
        suggestions: [
          { name: "start", description: "Start the dev container" },
          { name: "stop", description: "Stop the dev container" },
          { name: "attach", description: "Attach to the running container" },
          { name: "shell", description: "Open a shell in the container" },
          { name: "status", description: "Show container status" },
          { name: "logs", description: "Show container logs" },
        ],
      },
      options: [
        {
          name: ["-c", "--container"],
          description: "Run development in Docker container",
        },
        {
          name: ["-s", "--service"],
          description: "Docker Compose service name (default: app)",
          args: {
            name: "service",
          },
        },
        {
          name: ["-f", "--compose-file"],
          description:
            "Path to docker-compose file (default: docker-compose.development.yml)",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: ["-b", "--build"],
          description: "Rebuild container before starting",
        },
        {
          name: ["-d", "--detach"],
          description: "Run in background",
        },
        {
          name: ["-p", "--port"],
          description: "Override application port",
          args: {
            name: "port",
          },
        },
        {
          name: "--debug-port",
          description: "Debug port for Node.js inspector (default: 9229)",
          args: {
            name: "port",
          },
        },
        ...defaultOnFlag(
          "watch",
          "Enable file watching for hot reload",
          "Disable file watching",
          "-w"
        ),
        ...defaultOnFlag(
          "follow",
          "Follow logs (for logs action)",
          "Do not follow logs"
        ),
        {
          name: "--tail",
          description: "Number of log lines to show (default: 100)",
          args: {
            name: "lines",
          },
        },
      ],
    },
    {
      name: ["costs", "cost", "pricing"],
      description: "Estimate and compare cloud deployment costs",
      args: {
        name: "action",
        description: "Action to perform",
        suggestions: [
          {
            name: "estimate",
            description: "Estimate cost for a provider/service",
          },
          { name: "compare", description: "Compare costs across providers" },
          { name: "optimize", description: "Suggest cost optimizations" },
          { name: "pricing", description: "Show current pricing data" },
          { name: "update", description: "Refresh pricing data from remote" },
          {
            name: "info",
            description: "Show pricing system status and providers",
          },
        ],
      },
      options: [
        {
          name: ["-p", "--provider"],
          description: "Cloud provider",
          args: {
            name: "provider",
            suggestions: [
              "aws",
              "gcp",
              "azure",
              "railway",
              "render",
              "fly",
              "digitalocean",
              "heroku",
            ],
          },
        },
        {
          name: ["-s", "--service"],
          description: "Specific service type",
          args: {
            name: "service",
            suggestions: [
              "ecs",
              "eks",
              "lambda",
              "cloudrun",
              "gke",
              "aci",
              "aks",
              "web-service",
            ],
          },
        },
        {
          name: ["-i", "--instances"],
          description: "Number of instances/replicas (default: 1)",
          args: {
            name: "count",
          },
        },
        {
          name: ["-c", "--cpu"],
          description: "CPU cores/vCPUs per instance (default: 1)",
          args: {
            name: "cores",
          },
        },
        {
          name: ["-m", "--memory"],
          description: "Memory in GB per instance (default: 1)",
          args: {
            name: "gb",
          },
        },
        {
          name: "--storage",
          description: "Storage in GB (default: 10)",
          args: {
            name: "gb",
          },
        },
        {
          name: "--bandwidth",
          description: "Expected bandwidth in GB/month (default: 100)",
          args: {
            name: "gb",
          },
        },
        {
          name: ["-r", "--region"],
          description: "Cloud region (default: us-east-1)",
          args: {
            name: "region",
          },
        },
        {
          name: "--hours",
          description: "Expected running hours per month (default: 720)",
          args: {
            name: "hours",
          },
        },
        {
          name: "--format",
          description: "Output format (default: text)",
          args: {
            name: "format",
            suggestions: ["text", "json", "markdown"],
          },
        },
        {
          name: ["-o", "--output"],
          description: "Output file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: ["templates", "tpl"],
      description: "Manage CI/CD, Docker, and Kubernetes templates",
      args: [
        {
          name: "action",
          description: "Action to perform",
          suggestions: [
            { name: "list", description: "List available templates" },
            {
              name: "update",
              description: "Update template cache from remote",
            },
            { name: "clear", description: "Clear local template cache" },
            {
              name: "info",
              description: "Show template info (info <category> <platform>)",
            },
            {
              name: "repo",
              description: "View, set or reset template repository",
            },
            { name: "status", description: "Show template system status" },
          ],
        },
        {
          name: "args",
          description:
            "Additional arguments for the action (e.g. repo set <url> [branch], repo reset)",
          isOptional: true,
          isVariadic: true,
        },
      ],
      options: [
        {
          name: ["-c", "--category"],
          description: "Filter by category",
          args: {
            name: "category",
            suggestions: ["cicd", "docker", "kubernetes", "migrations"],
          },
        },
        {
          name: ["-p", "--platform"],
          description: "Filter by platform (github, gitlab, etc.)",
          args: {
            name: "platform",
          },
        },
      ],
    },
    {
      name: "studio",
      description: "Launch ExpressoTS Studio",
      options: [
        {
          name: ["-p", "--port"],
          description: "UI port (default: 3333)",
          args: {
            name: "port",
          },
        },
        {
          name: ["-a", "--agent-port"],
          description: "Agent WebSocket port (default: 3334)",
          args: {
            name: "port",
          },
        },
        {
          name: "--no-browser",
          description: "Do not open browser automatically",
        },
        {
          name: "--src",
          description: "Source directory to scan (default: ./src)",
          args: {
            name: "directory",
            template: "folders",
          },
        },
      ],
    },
    {
      name: "openapi",
      description: "Generate an OpenAPI 3.1 spec from your project",
      args: {
        name: "action",
        description: "What to do (currently only emit)",
        isOptional: true,
        suggestions: ["emit"],
      },
      options: [
        {
          name: ["-o", "--out"],
          description: "Output file path (default: openapi.json)",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--src",
          description: "Source directory to scan (default: ./src)",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: "--api-version",
          description: "Restrict output to a single API version (e.g. 2)",
          args: {
            name: "version",
          },
        },
        {
          name: "--global-prefix",
          description:
            "Global route prefix (e.g. /api), auto-detected from setGlobalRoutePrefix when omitted",
          args: {
            name: "prefix",
          },
        },
        {
          name: "--fail-on-drift",
          description:
            "Diff against a committed spec and exit non-zero on drift (CI gate)",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "--title",
          description: "API title for info.title",
          args: {
            name: "title",
          },
        },
      ],
    },
    {
      name: ["resources", "r"],
      description: "Show full command and schematics reference",
    },
    {
      name: "completion",
      description: "Generate a shell completion script (bash/zsh)",
    },
    {
      name: "help",
      description: "Show help",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help",
      isPersistent: true,
    },
    {
      name: ["-V", "--version"],
      description: "Show version",
    },
  ],
};
export default completionSpec;
