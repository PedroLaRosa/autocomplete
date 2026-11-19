// Okta CLI v0.10.0 (okta/okta-cli, latest release tag okta-cli-tools-0.10.0, 2026-11-19). Source: picocli command definitions under cli/src/main/java at tag okta-cli-tools-0.10.0 (read from source, binary not run).
// Upstream master (0.10.1-SNAPSHOT, last commit 2026-06) has no command or option changes since 0.10.0, only dependency and CI updates.
const standardOptions: Fig.Option[] = [
  {
    name: ["--help", "-h"],
    description: "Show help for Okta CLI",
    isPersistent: true,
  },
  {
    name: ["--version", "-V"],
    description: "Print version information",
    isPersistent: true,
  },
  {
    name: "--verbose",
    description: "Verbose logging",
    isPersistent: true,
  },
  {
    name: "--batch",
    description: "Batch mode, will not prompt for user input",
    isPersistent: true,
  },
  {
    name: "--color",
    description: "Colorize console output",
    isPersistent: true,
    hidden: true,
    args: {
      name: "color",
      suggestions: ["always", "never"],
    },
  },
  {
    name: "-D",
    description: "Set Java system property key value pairs",
    isPersistent: true,
    isRepeatable: true,
    hidden: true,
    args: {
      name: "key=value",
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "okta",
  description: "The Okta CLI helps you configure your applications to use Okta",
  subcommands: [
    {
      name: "register",
      description: "Sign up for a new Okta account",
      options: [
        {
          name: "--company",
          description:
            "Company/organization used when registering a new Okta account",
          args: {
            name: "company",
          },
        },
        {
          name: "--country",
          description: "Country of residence",
          args: {
            name: "country",
          },
        },
        {
          name: "--email",
          description: "Email used when registering a new Okta account",
          args: {
            name: "email",
          },
        },
        {
          name: "--first-name",
          description: "First name used when registering a new Okta account",
          args: {
            name: "first-name",
          },
        },
        {
          name: "--last-name",
          description: "Last name used when registering a new Okta account",
          args: {
            name: "last-name",
          },
        },
        {
          name: ["--oie", "--no-oie"],
          description: "Create Okta account with OIE enabled",
          hidden: true,
        },
      ],
    },
    {
      name: "login",
      description: "Authorizes the Okta CLI tool",
    },
    {
      name: "apps",
      description: "Manage Okta apps",
      options: [
        {
          name: "--all",
          description: "Include deactivated applications in result",
        },
      ],
      subcommands: [
        {
          name: "config",
          description: "Show an Okta app's configuration",
          options: [
            {
              name: "--app",
              description: "The App ID",
              isRequired: true,
              args: {
                name: "app",
              },
            },
          ],
        },
        {
          name: "create",
          description: "Create a new Okta app",
          args: {
            name: "template",
            description: "Quick template to create the app from",
            isOptional: true,
            suggestions: [
              "okta-spring-boot",
              "spring-boot",
              "quarkus",
              "jhipster",
              "web",
              "spa",
              "native",
              "spring-boot-service",
              "jhipster-service",
              "service",
            ],
          },
          options: [
            {
              name: "--app-name",
              description:
                "Application name to be created, defaults to current directory name",
              args: {
                name: "name",
              },
            },
            {
              name: "--authorization-server-id",
              description: "Okta Authorization Server Id",
              args: {
                name: "id",
              },
            },
            {
              name: "--config-file",
              description:
                "Application config file, will search for src/main/resources/application.yml, src/main/resources/application.properties and .okta.env",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: "--redirect-uri",
              description: "OIDC Redirect URI",
              args: {
                name: "uri",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an Okta app",
          args: {
            name: "appIds",
            description: "List of application IDs to be deleted",
            isVariadic: true,
          },
          options: [
            {
              name: ["-f", "--force"],
              description: "Deactivate and delete applications",
            },
          ],
        },
      ],
    },
    {
      name: "start",
      description: "Creates an Okta Sample Application",
      args: {
        name: "name",
        description: "The name of the sample app to create",
        isOptional: true,
      },
      options: [
        {
          name: ["--branch", "-b"],
          description: "GitHub branch to use",
          hidden: true,
          args: {
            name: "branch",
            default: "main",
          },
        },
      ],
    },
    {
      name: "logs",
      description: "Lists Okta log events",
      hidden: true,
      options: [
        {
          name: ["-f", "--follow"],
          description: "Polls for new log events",
        },
      ],
    },
    {
      name: "dump",
      description: "Dump environment for debugging",
      hidden: true,
    },
    {
      name: "help",
      description: "Displays help information about the specified command",
      args: {
        name: "command",
        isOptional: true,
        suggestions: ["register", "login", "apps", "start"],
      },
    },
    {
      name: "generate-completion",
      hidden: true,
      description: "Generate bash/zsh completion script for Okta",
    },
  ],
  options: standardOptions,
};
export default completionSpec;
