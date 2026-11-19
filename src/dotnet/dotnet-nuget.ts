import { configFileGenerator, nupkgGenerator, verbosityOption } from "./shared";

const configFileOption: Fig.Option = {
  name: "--configfile",
  description:
    "The NuGet configuration file. If specified, only the settings from this file will be used. If not specified, the hierarchy of configuration files from the current directory will be used. For more information, see https://docs.microsoft.com/nuget/consume-packages/configuring-nuget-behavior",
  args: {
    name: "file",
    generators: configFileGenerator,
  },
};

const sourceNameArg: Fig.Arg = {
  name: "name",
  description: "Name of the source",
};

const packagePathsArg: Fig.Arg = {
  name: "package-paths",
  description: "The path to the package",
  isVariadic: true,
  generators: nupkgGenerator,
};

const interactiveOption: Fig.Option = {
  name: "--interactive",
  description:
    "Allow the command to block and require manual action for operations like authentication",
};

const apiKeyOption = (description: string): Fig.Option => ({
  name: ["-k", "--api-key"],
  description,
  args: {
    name: "key",
  },
});

const serverSourceOption: Fig.Option = {
  name: ["-s", "--source"],
  description:
    "Package source (URL, UNC/folder path or package source name) to use. Defaults to DefaultPushSource if specified in NuGet.Config",
  args: {
    name: "source",
  },
};

const noServiceEndpointOption: Fig.Option = {
  name: "--no-service-endpoint",
  description: "Does not append 'api/v2/package' to the source URL",
};

const allowInsecureConnectionsOption = (description: string): Fig.Option => ({
  name: "--allow-insecure-connections",
  description,
});

const allowUntrustedRootOption: Fig.Option = {
  name: "--allow-untrusted-root",
  description:
    "Specifies if the certificate for the trusted signer should be allowed to chain to an untrusted root. This is not recommended",
};

const ownersOption: Fig.Option = {
  name: "--owners",
  description:
    "Semi-colon separated list of trusted owners to further restrict the trust of a repository",
  args: {
    name: "owners",
  },
};

const trustVerbosityOption = verbosityOption(
  "Set the verbosity level of the command. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]"
);

// Options shared by the `trust` subcommands.
const trustOptions: Fig.Option[] = [configFileOption, trustVerbosityOption];

const trustedSignerNameArg = (description: string): Fig.Arg => ({
  name: "NAME",
  description,
});

const signedPackageArg: Fig.Arg = {
  name: "PACKAGE",
  description:
    "The given package should be a local path to the signed .nupkg file",
  generators: nupkgGenerator,
};

// Options shared by `add source` and `update source`.
const sourceCredentialOptions: Fig.Option[] = [
  {
    name: ["-u", "--username"],
    description:
      "Username to be used when connecting to an authenticated source",
    args: {
      name: "username",
    },
  },
  {
    name: ["-p", "--password"],
    description:
      "Password to be used when connecting to an authenticated source",
    args: {
      name: "password",
    },
  },
  {
    name: "--store-password-in-clear-text",
    description:
      "Enables storing portable package source credentials by disabling password encryption",
  },
  {
    name: "--valid-authentication-types",
    description:
      "Comma-separated list of valid authentication types for this source. Set this to basic if the server advertises NTLM or Negotiate and your credentials must be sent using the Basic mechanism, for instance when using a PAT with on-premises Azure DevOps Server. Other valid values include negotiate, kerberos, ntlm, and digest, but these values are unlikely to be useful",
    args: {
      name: "types",
    },
  },
  {
    name: "--protocol-version",
    description:
      "The NuGet server protocol version to be used. Currently supported versions are 2 and 3. See https://learn.microsoft.com/nuget/api/overview for information about the version 3 protocol. Defaults to 2 if not specified",
    args: {
      name: "version",
      suggestions: ["2", "3"],
    },
  },
  configFileOption,
  allowInsecureConnectionsOption(
    "Allows HTTP connections for adding or updating packages. Note: This method is not secure. For secure options, see https://aka.ms/nuget-https-everywhere for more information"
  ),
  {
    name: "--min-publish-age-hours",
    description:
      "The minimum number of hours after a package is published before it can be selected for update. Set to 0 to remove the value",
    args: {
      name: "hours",
    },
  },
];

const clientCertAddUpdateOptions: Fig.Option[] = [
  {
    name: ["-s", "--package-source"],
    description: "Package source name",
    args: {
      name: "package-source",
    },
  },
  {
    name: "--path",
    description: "Path to certificate file",
    args: {
      name: "path",
      template: "filepaths",
    },
  },
  {
    name: "--password",
    description: "Password for the certificate, if needed",
    args: {
      name: "password",
    },
  },
  {
    name: "--store-password-in-clear-text",
    description:
      "Enables storing password for the certificate by disabling password encryption",
  },
  {
    name: "--store-location",
    description: "Certificate store location (see docs)",
    args: {
      name: "store-location",
    },
  },
  {
    name: "--store-name",
    description: "Certificate store name (see docs)",
    args: {
      name: "store-name",
    },
  },
  {
    name: "--find-by",
    description:
      "Search method to find certificate in certificate store (see docs)",
    args: {
      name: "find-by",
    },
  },
  {
    name: "--find-value",
    description:
      "Search the certificate store for the supplied value. Used with FindValue (see docs)",
    args: {
      name: "find-value",
    },
  },
  {
    name: ["-f", "--force"],
    description: "Skip certificate validation",
  },
  configFileOption,
];

const sourceNameSubcommand = (
  name: string,
  description: string
): Fig.Subcommand => ({
  name,
  description,
  subcommands: [
    {
      name: "source",
      description,
      args: sourceNameArg,
      options: [configFileOption],
    },
  ],
});

const completionSpec: Fig.Spec = {
  name: "nuget",
  // The dotnet CLI does not bundle single-dash flags (-lp, -bl, -lang, ...).
  parserDirectives: { flagsArePosixNoncompliant: true },
  description: "Provides additional NuGet commands",
  subcommands: [
    {
      name: "delete",
      description: "Deletes a package from the server",
      args: [
        {
          name: "PackageId",
          description: "The Package Id and version",
        },
        {
          name: "PackageVersion",
          description: "The Package Id and version",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--force-english-output",
          description:
            "Forces the application to run using an invariant, English-based culture",
        },
        interactiveOption,
        apiKeyOption(
          "The API key for the server. If not set, the NUGET_API_KEY environment variable is read"
        ),
        noServiceEndpointOption,
        {
          name: "--non-interactive",
          description: "Do not prompt for user input or confirmations",
        },
        serverSourceOption,
      ],
    },
    {
      name: "locals",
      description:
        "Clears or lists local NuGet resources such as http requests cache, packages folder, plugin operations cache or machine-wide global packages folder",
      args: {
        name: "cache_location",
        description: "Specifies the cache location(s) to list or clear",
        suggestions: [
          "all",
          "http-cache",
          "global-packages",
          "plugins-cache",
          "temp",
        ],
      },
      options: [
        {
          name: "--force-english-output",
          description:
            "Forces the application to run using an invariant, English-based culture",
        },
        {
          name: ["-c", "--clear"],
          description:
            "Clear the selected local resources or cache location(s)",
        },
        {
          name: ["-l", "--list"],
          description: "List the selected local resources or cache location(s)",
        },
      ],
    },
    {
      name: "push",
      description: "Pushes a package to the server and publishes it",
      args: {
        ...packagePathsArg,
        description:
          "Specify the path to the package and your API key to push the package to the server",
      },
      options: [
        {
          name: ["-d", "--disable-buffering"],
          description:
            "Disable buffering when pushing to an HTTP(S) server to decrease memory usage",
        },
        {
          name: "--force-english-output",
          description:
            "Forces the application to run using an invariant, English-based culture",
        },
        interactiveOption,
        apiKeyOption(
          "The API key for the server. If not set, the NUGET_API_KEY environment variable is read"
        ),
        {
          name: ["-n", "--no-symbols"],
          description:
            "If a symbols package exists, it will not be pushed to a symbols server",
        },
        noServiceEndpointOption,
        serverSourceOption,
        {
          name: "--skip-duplicate",
          description:
            "If a package and version already exists, skip it and continue with the next package in the push, if any",
        },
        {
          name: ["-sk", "--symbol-api-key"],
          description:
            "The API key for the symbol server. If not set, the NUGET_SYMBOL_API_KEY environment variable is read",
          args: {
            name: "key",
          },
        },
        {
          name: ["-ss", "--symbol-source"],
          description: "Symbol server URL to use",
          args: {
            name: "symbol_source",
          },
        },
        {
          name: ["-t", "--timeout"],
          description:
            "Timeout for pushing to a server in seconds. Defaults to 300 seconds (5 minutes)",
          args: {
            name: "timeout",
          },
        },
        allowInsecureConnectionsOption(
          "Allows pushing to HTTP sources (insecure)"
        ),
        configFileOption,
      ],
    },
    {
      name: "add",
      description: "Add a NuGet source",
      subcommands: [
        {
          name: "source",
          description: "Add a NuGet source",
          args: {
            name: "PackageSourcePath",
            description: "Path to the package source",
          },
          options: [
            {
              name: ["-n", "--name"],
              description: "Name of the source",
              args: {
                name: "name",
              },
            },
            ...sourceCredentialOptions,
          ],
        },
        {
          name: "client-cert",
          description:
            "Adds a client certificate configuration that matches the given package source name",
          options: clientCertAddUpdateOptions,
        },
      ],
    },
    sourceNameSubcommand("disable", "Disable a NuGet source"),
    sourceNameSubcommand("enable", "Enable a NuGet source"),
    {
      name: "list",
      description: "List configured NuGet sources",
      subcommands: [
        {
          name: "source",
          description: "Lists all configured NuGet sources",
          options: [
            {
              name: "--format",
              description:
                "The format of the list command output: `Detailed` (the default) and `Short`",
              args: {
                name: "format",
                suggestions: ["Detailed", "Short"],
              },
            },
            configFileOption,
          ],
        },
        {
          name: "client-cert",
          description: "Lists all the client certificates in the configuration",
          options: [configFileOption],
        },
      ],
    },
    {
      name: "remove",
      description: "Remove a NuGet source",
      subcommands: [
        {
          name: "source",
          description: "Remove a NuGet source",
          args: sourceNameArg,
          options: [configFileOption],
        },
        {
          name: "client-cert",
          description:
            "Removes the client certificate configuration that matches the given package source name",
          options: [
            {
              name: ["-s", "--package-source"],
              description: "Package source name",
              args: {
                name: "package-source",
              },
            },
            configFileOption,
          ],
        },
      ],
    },
    {
      name: "update",
      description: "Update a NuGet source",
      subcommands: [
        {
          name: "source",
          description: "Update a NuGet source",
          args: sourceNameArg,
          options: [
            {
              name: ["-s", "--source"],
              description: "Path to the package source",
              args: {
                name: "source",
              },
            },
            ...sourceCredentialOptions,
          ],
        },
        {
          name: "client-cert",
          description:
            "Updates the client certificate configuration that matches the given package source name",
          options: clientCertAddUpdateOptions,
        },
      ],
    },
    {
      name: "config",
      description: "NuGet configuration CLI",
      subcommands: [
        {
          name: "paths",
          description:
            "Lists the paths to all NuGet configuration files that will be applied when invoking NuGet command in a specific directory",
          options: [
            {
              name: "--working-directory",
              description:
                "Specifies the directory to start from when listing configuration files. If not specified, the current directory is used",
              args: {
                name: "working-directory",
                template: "folders",
              },
            },
          ],
        },
        {
          name: "get",
          description:
            "Gets the NuGet configuration settings that will be applied",
          args: {
            name: "all-or-config-key",
            description:
              "ALL: Get all merged NuGet configuration settings from multiple NuGet configuration files that will be applied, when invoking NuGet command from the working directory path. CONFIG_KEY: Get the effective value of the specified configuration settings of the config section",
          },
          options: [
            {
              name: "--working-directory",
              description:
                "Specifies the directory to start from when listing configuration files. If not specified, the current directory is used",
              args: {
                name: "working-directory",
                template: "folders",
              },
            },
            {
              name: "--show-path",
              description:
                "Indicate that the NuGet configuration file path will be shown beside the configuration settings",
            },
          ],
        },
        {
          name: "set",
          description:
            "Set the value of a specified NuGet configuration setting",
          args: [
            {
              name: "config-key",
              description: "The key of the settings that are to be set",
            },
            {
              name: "config-value",
              description: "The value of the settings that are to be set",
            },
          ],
          options: [configFileOption],
        },
        {
          name: "unset",
          description:
            "Removes the key-value pair from a specified NuGet configuration setting",
          args: {
            name: "config-key",
            description: "The key of the settings that are to be removed",
          },
          options: [configFileOption],
        },
      ],
    },
    {
      name: "why",
      description:
        "Shows the dependency graph for a particular package for a given project or solution",
      args: [
        {
          name: "PROJECT|SOLUTION|FILE",
          description:
            "A path to a project, solution file, file-based app, or project directory",
          isOptional: true,
          template: ["folders", "filepaths"],
        },
        {
          name: "PACKAGE",
          description: "The package name to lookup in the dependency graph",
        },
      ],
      options: [
        {
          name: ["-f", "--framework"],
          description:
            "The target framework(s) for which dependency graphs are shown",
          isRepeatable: true,
          args: {
            name: "framework",
          },
        },
      ],
    },
    {
      name: "verify",
      description: "Verifies a signed NuGet package",
      args: packagePathsArg,
      options: [
        {
          name: "--all",
          description:
            "Specifies that all verifications possible should be performed to the package(s)",
        },
        {
          name: "--certificate-fingerprint",
          description:
            "Verify that the signer certificate matches with one of the specified SHA256 fingerprints. A certificate SHA256 fingerprint is a SHA256 hash of the certificate used to identify the certificate. Multiple inputs should be separated by space",
          isRepeatable: true,
          args: {
            name: "fingerprint",
          },
        },
        configFileOption,
        trustVerbosityOption,
      ],
    },
    {
      name: "trust",
      description: "Manage the trusted signers",
      options: trustOptions,
      subcommands: [
        {
          name: "list",
          description: "Lists all the trusted signers in the configuration",
          options: trustOptions,
        },
        {
          name: "sync",
          description:
            "Deletes the current list of certificates and replaces them with an up-to-date list from the repository",
          args: trustedSignerNameArg(
            "The name of the existing trusted signer to sync"
          ),
          options: trustOptions,
        },
        {
          name: "remove",
          description: "Removes any trusted signers that match the given name",
          args: trustedSignerNameArg(
            "The name of the existing trusted signer to remove"
          ),
          options: trustOptions,
        },
        {
          name: "author",
          description:
            "Adds a trusted signer with the given name, based on the author signature of the package",
          args: [
            trustedSignerNameArg(
              "The name of the trusted signer to add. If name already exists in the configuration, the signature is appended"
            ),
            signedPackageArg,
          ],
          options: [...trustOptions, allowUntrustedRootOption],
        },
        {
          name: "repository",
          description:
            "Adds a trusted signer with the given name, based on the repository signature or countersignature of a signed package",
          args: [
            trustedSignerNameArg(
              "The name of the trusted signer to add. If name already exists in the configuration, the signature is appended"
            ),
            signedPackageArg,
          ],
          options: [...trustOptions, allowUntrustedRootOption, ownersOption],
        },
        {
          name: "certificate",
          description:
            "Adds a trusted signer with the given name, based on the certificate fingerprint",
          args: [
            trustedSignerNameArg(
              "The name of the trusted signer to add. If a trusted signer with the given name already exists, the certificate item is added to that signer. Otherwise a trusted author is created with a certificate item from the given certificate information"
            ),
            {
              name: "FINGERPRINT",
              description: "The fingerprint of the certificate",
            },
          ],
          options: [
            ...trustOptions,
            allowUntrustedRootOption,
            {
              name: "--algorithm",
              description:
                "Specifies the hash algorithm used to calculate the certificate fingerprint. Defaults to SHA256. Values supported are SHA256, SHA384 and SHA512",
              args: {
                name: "algorithm",
                suggestions: ["SHA256", "SHA384", "SHA512"],
              },
            },
          ],
        },
        {
          name: "source",
          description: "Adds a trusted signer based on a given package source",
          args: trustedSignerNameArg(
            "The name of the trusted signer to add. If only <NAME> is provided without --source-url, the package source from your NuGet configuration files with the same name is added to the trusted list. If <NAME> already exists in the configuration, the package source is appended to it"
          ),
          options: [
            ...trustOptions,
            ownersOption,
            {
              name: "--source-url",
              description:
                "If a source-url is provided, it must be a v3 package source URL (like https://api.nuget.org/v3/index.json). Other package source types are not supported",
              args: {
                name: "source-url",
              },
            },
          ],
        },
      ],
    },
    {
      name: "sign",
      description:
        "Signs NuGet package(s) at <package-paths> with the specified certificate",
      args: {
        ...packagePathsArg,
        description:
          "Signs NuGet packages at <package-paths> with the specified certificate",
      },
      options: [
        {
          name: ["-o", "--output"],
          description:
            "Directory where the signed package(s) should be saved. By default the original package is overwritten by the signed package",
          args: {
            name: "output",
            template: "folders",
          },
        },
        {
          name: "--certificate-path",
          description:
            "File path to the certificate to be used while signing the package",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--certificate-store-name",
          description:
            "Name of the X.509 certificate store to use to search for the certificate. Defaults to 'My', the X.509 certificate store for personal certificates. This option should be used when specifying the certificate via --certificate-subject-name or --certificate-fingerprint options",
          args: {
            name: "storename",
          },
        },
        {
          name: "--certificate-store-location",
          description:
            "Name of the X.509 certificate store use to search for the certificate. Defaults to 'CurrentUser', the X.509 certificate store used by the current user. This option should be used when specifying the certificate via --certificate-subject-name or --certificate-fingerprint options",
          args: {
            name: "location",
          },
        },
        {
          name: "--certificate-subject-name",
          description:
            "Subject name of the certificate used to search a local certificate store for the certificate. The search is a case-insensitive string comparison using the supplied value, which will find all certificates with the subject name containing that string, regardless of other subject values",
          args: {
            name: "subjectname",
          },
        },
        {
          name: "--certificate-fingerprint",
          description:
            "SHA-256, SHA-384 or SHA-512 fingerprint of the certificate used to search a local certificate store for the certificate. The certificate store can be specified by --certificate-store-name and --certificate-store-location options",
          args: {
            name: "fingerprint",
          },
        },
        {
          name: "--certificate-password",
          description:
            "Password for the certificate, if needed. The command will throw an error message if certificate is password protected but password is not provided as input",
          args: {
            name: "password",
          },
        },
        {
          name: "--hash-algorithm",
          description:
            "Hash algorithm to be used to sign the package. Defaults to SHA256",
          args: {
            name: "algorithm",
            suggestions: ["SHA256", "SHA384", "SHA512"],
          },
        },
        {
          name: "--timestamper",
          description: "URL to an RFC 3161 timestamping server",
          args: {
            name: "url",
          },
        },
        {
          name: "--timestamp-hash-algorithm",
          description:
            "Hash algorithm to be used by the RFC 3161 timestamp server. Defaults to SHA256",
          args: {
            name: "algorithm",
            suggestions: ["SHA256", "SHA384", "SHA512"],
          },
        },
        {
          name: "--overwrite",
          description:
            "Switch to indicate if the current signature should be overwritten. By default the command will fail if the package already has a signature",
        },
        {
          name: "--allow-untrusted-root",
          description:
            "Allow signing with certificates whose root certificate is not in a trusted root store. The certificate chain is still built and validated for structure, but UntrustedRoot status is treated as a warning",
        },
        trustVerbosityOption,
      ],
    },
  ],
};

export default completionSpec;
