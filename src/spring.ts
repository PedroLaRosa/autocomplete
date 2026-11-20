// Spring Boot CLI v4.2.0 (latest release on Maven Central, spring-boot-cli 4.2.0 published 2026-11-19; git tag v4.2.0; checked 2026-11-20). Source: read statically from the
// spring-boot repo at v4.2.0 (cli/spring-boot-cli: SpringCli, DefaultCommandFactory, InitCommand, EncodePasswordCommand, ShellCommand, HintCommand,
// shipped shell-completion scripts); the CLI itself was not run. Since 4.0 the CLI only has init, encodepassword, shell and help/version (plus the hidden hint).
// The dependency/version/language generators still query https://start.spring.io/metadata/client, which was unreachable here and so is not re-verified.
type Data = {
  dependencies: Options<DependencyGroup>;
  packaging: Options<Option>;
  javaVersion: Options<Option>;
  language: Options<Option>;
  bootVersion: Options<Option>;
};

type Options<T> = {
  type: string;
  values: T[];
};

type Option = {
  id: string;
  name: string;
};

type DependencyGroup = {
  name: string;
  values: Dependency[];
};

type Dependency = Option & {
  description: string;
  versionRange?: string;
};

const memoizedFetchData = () => {
  let data: Data | undefined;
  return async (
    executeShellCommand: Fig.ExecuteCommandFunction
  ): Promise<Data | undefined> => {
    if (data) {
      return data;
    }

    try {
      const { stdout } = await executeShellCommand({
        command: "curl",
        args: [
          "-sfL",
          "-H",
          "Accept: application/json",
          "https://start.spring.io/metadata/client",
        ],
      });
      data = JSON.parse(stdout);
      return data;
    } catch (error) {
      return undefined;
    }
  };
};

const fetchData = memoizedFetchData();

const cache: Fig.Generator["cache"] = {
  ttl: 1000 * 60 * 60 * 24, // 24 hours, in milliseconds
};

const delimiter = ",";
const dependencyGenerator: Fig.Generator = {
  cache,
  getQueryTerm: (token) =>
    token.slice(token.lastIndexOf(delimiter) + delimiter.length),
  trigger: (newToken, oldToken) =>
    newToken.lastIndexOf(delimiter) !== oldToken.lastIndexOf(delimiter),
  custom: async (tokens, executeShellCommand) => {
    const data = await fetchData(executeShellCommand);
    if (!data) return [];

    const seen = new Set(tokens[tokens.length - 1]?.split(delimiter));
    return data.dependencies.values
      .flatMap(({ values }) => values)
      .filter(({ id }) => !seen.has(id))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((dependency) => ({
        name: dependency.id,
        displayName: dependency.name,
        description: dependency.description,
      }));
  },
};

const metadataGenerator = (
  select: (data: Data) => Option[]
): Fig.Generator => ({
  cache,
  custom: async (_, executeShellCommand) => {
    const data = await fetchData(executeShellCommand);
    if (!data) return [];

    return select(data).map((option) => ({
      name: option.id,
      displayName: option.name,
    }));
  },
});

const versionGenerator = metadataGenerator((data) => data.bootVersion.values);
const javaVersionGenerator = metadataGenerator(
  (data) => data.javaVersion.values
);
const languageGenerator = metadataGenerator((data) => data.language.values);

const completionSpec: Fig.Spec = {
  name: "spring",
  description:
    "The Spring Boot CLI is a command line tool that you can use to bootstrap a new project from start.spring.io or encode a password",
  icon: "https://start.spring.io/images/icon-48x48.png",
  subcommands: [
    {
      name: "init",
      description: "Initialize a new project using Spring Initializr",
      options: [
        {
          name: ["-a", "--artifact-id"],
          description: "Project coordinates; infer archive name",
          args: {
            name: "Name",
          },
        },
        {
          name: ["-b", "--boot-version"],
          description: "Spring Boot version",
          args: {
            name: "Version",
            generators: versionGenerator,
            debounce: true,
          },
        },
        {
          name: "--build",
          description: "Build system to use",
          args: {
            name: "System",
            suggestions: ["maven", "gradle"],
            default: "gradle",
          },
        },
        {
          name: ["-d", "--dependencies"],
          description:
            "Comma-separated list of dependency identifiers to include in the generated project",
          args: {
            name: "Dependencies",
            generators: dependencyGenerator,
            isVariadic: true,
            debounce: true,
          },
        },
        {
          name: "--description",
          description: "Project description",
          insertValue: "--description '{cursor}'",
          args: {
            name: "description",
          },
        },
        {
          name: ["-f", "--force"],
          description: "Force overwrite of existing files",
          isDangerous: true,
        },
        {
          name: "--format",
          description:
            "Format of the generated content ('build' for a build file, 'project' for a project archive)",
          args: {
            name: "Format",
            suggestions: ["build", "project"],
            default: "project",
          },
        },
        {
          name: ["-g", "--group-id"],
          description: "Project coordinates (for example 'org.test')",
          args: {
            name: "Group ID",
          },
        },
        {
          name: ["-j", "--java-version"],
          description: "Language level",
          args: {
            name: "Version",
            generators: javaVersionGenerator,
            debounce: true,
          },
        },
        {
          name: "--list",
          description:
            "List the capabilities of the service. Use it to discover the dependencies and the types that are available",
        },
        {
          name: ["-l", "--language"],
          description: "Programming language (for example 'java')",
          args: {
            name: "Language",
            generators: languageGenerator,
            debounce: true,
          },
        },
        {
          name: ["-n", "--name"],
          description: "Project name; infer application name",
          args: {
            name: "Name",
          },
        },
        {
          name: ["-p", "--packaging"],
          description: "Project packaging (for example 'jar')",
          args: {
            name: "Packaging",
            suggestions: ["jar", "war"],
          },
        },
        {
          name: "--package-name",
          description: "Package name",
          args: {
            name: "Name",
          },
        },
        {
          name: ["-t", "--type"],
          description:
            "Project type. Not normally needed if you use --build and/or --format. Defaults to the default type of the service",
          args: {
            name: "Type",
            suggestions: [
              {
                name: "gradle-build",
                description: "Generate a Gradle build file",
              },
              {
                name: "gradle-project",
                description:
                  "Generate a Gradle based project archive using the Groovy DSL",
              },
              {
                name: "gradle-project-kotlin",
                description:
                  "Generate a Gradle based project archive using the Kotlin DSL",
              },
              {
                name: "maven-build",
                description: "Generate a Maven pom.xml",
              },
              {
                name: "maven-project",
                description: "Generate a Maven based project archive",
              },
            ],
          },
        },
        {
          name: "--target",
          description: "URL of the service to use",
          args: {
            name: "URL",
            default: "https://start.spring.io",
          },
        },
        {
          name: ["-v", "--version"],
          description: "Project version (for example '0.0.1-SNAPSHOT')",
          args: {
            name: "Version",
          },
        },
        {
          name: ["-x", "--extract"],
          description:
            "Extract the project archive. Inferred if a location is specified without an extension",
        },
      ],
      args: {
        name: "Location",
        description:
          "Where to write the project archive or build file, or the directory to extract into",
        isOptional: true,
        template: ["filepaths", "folders"],
      },
    },
    {
      name: "encodepassword",
      description: "Encode a password for use with Spring Security",
      options: [
        {
          name: ["-a", "--algorithm"],
          description: "The algorithm to use",
          args: {
            name: "Algorithm",
            suggestions: [
              {
                name: "default",
                description: "Delegating encoder (bcrypt by default)",
              },
              { name: "bcrypt", description: "BCrypt" },
              { name: "pbkdf2", description: "PBKDF2" },
            ],
            default: "default",
          },
        },
      ],
      args: {
        name: "Password",
      },
    },
    {
      name: "shell",
      description: "Start a nested shell",
    },
    {
      name: "help",
      description: "Show help for other commands",
      args: {
        name: "Command",
        template: "help",
      },
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show help for spring",
    },
    {
      name: "--version",
      description: "Get spring CLI version",
    },
    {
      name: "--debug",
      description:
        "Print additional status information for the command you are running",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
