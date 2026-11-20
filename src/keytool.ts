// keytool v27 (OpenJDK 27 GA, tag jdk-27-ga of github.com/openjdk/jdk, 2026-11-20). Source: static read of Main.java (Command/Option enums, usage()),
// resources/keytool.properties and the keytool.md man page under src/java.base at that tag; the JDK 27 binary was not run.
// The option set of every command was also compared with `keytool <command> --help` of the installed OpenJDK 21.0.13 (identical sets).
// Undocumented commands that Main.java still accepts (-keyclone, -selfcert, -gencrl, -identitydb) are included as hidden.
const helpOption: Fig.Option = {
  name: ["-h", "-?", "--help", "-help"],
  description: "Show help message",
};

const commonOptions: Fig.Option[] = [
  helpOption,
  {
    name: "-v",
    description: "Verbose output",
  },
];

const storeTypes = [
  "PKCS12",
  "JKS",
  "JCEKS",
  "PKCS11",
  "Windows-MY",
  "Windows-ROOT",
];

const nonFileKeystore: Fig.Suggestion = {
  name: "NONE",
  description: "Keystore is not file-based, such as a hardware token",
};

// Option that takes a single value
const valueOption = (
  name: string,
  description: string,
  argName: string,
  extra: Partial<Fig.Option> = {}
): Fig.Option => ({
  name,
  description,
  args: { name: argName },
  ...extra,
});

const fileOption = (description: string): Fig.Option => ({
  name: "-file",
  description,
  args: { name: "file", template: "filepaths" },
});

const keystoreOption = (
  name: string,
  description: string,
  extra: Partial<Fig.Option> = {}
): Fig.Option => ({
  name,
  description,
  args: {
    name: "keystore",
    template: "filepaths",
    suggestions: [nonFileKeystore],
  },
  ...extra,
});

const storeTypeOption = (
  name: string,
  description: string,
  extra: Partial<Fig.Option> = {}
): Fig.Option => ({
  name,
  description,
  args: { name: "type", suggestions: storeTypes },
  ...extra,
});

const aliasOption = valueOption(
  "-alias",
  "Alias name of the entry to process",
  "alias"
);
const destAliasOption = valueOption("-destalias", "Destination alias", "alias");
const keypassOption = valueOption("-keypass", "Key password", "arg");
const newPasswordOption = valueOption("-new", "New password", "arg");
const sigalgOption = valueOption("-sigalg", "Signature algorithm name", "alg");
const dnameOption = valueOption("-dname", "Distinguished name", "name");
const extOption = valueOption("-ext", "X.509 extension", "value", {
  isRepeatable: true,
});
const startdateOption = valueOption(
  "-startdate",
  "Certificate validity start date/time",
  "date"
);
const validityOption = valueOption(
  "-validity",
  "Validity number of days",
  "days"
);
const keysizeOption = valueOption("-keysize", "Key bit size", "size");
const rfcOption: Fig.Option = {
  name: "-rfc",
  description: "Output in RFC style",
};
const cacertsOption: Fig.Option = {
  name: "-cacerts",
  description: "Access the cacerts keystore",
  exclusiveOn: ["-keystore", "-storetype"],
};
const noPromptOption: Fig.Option = {
  name: "-noprompt",
  description: "Do not prompt",
};
const trustCacertsOption: Fig.Option = {
  name: "-trustcacerts",
  description: "Trust certificates from cacerts",
};
const protectedOption: Fig.Option = {
  name: "-protected",
  description: "Password through protected mechanism",
};

// Security providers (-providername is not accepted by -importkeystore)
const addProviderOptions: Fig.Option[] = [
  valueOption(
    "-addprovider",
    "Add security provider by name (e.g. SunPKCS11)",
    "name"
  ),
  valueOption(
    "-providerclass",
    "Add security provider by fully-qualified class name",
    "class"
  ),
  // Not documented as standalone: it follows -addprovider or -providerclass
  valueOption(
    "-providerarg",
    "Configure argument for -addprovider or -providerclass",
    "arg"
  ),
  valueOption("-providerpath", "Provider classpath", "list"),
];

const providerOptions: Fig.Option[] = [
  valueOption("-providername", "Provider name", "name"),
  ...addProviderOptions,
];

// Keystore location, password, type and providers
const keystoreOptions: Fig.Option[] = [
  keystoreOption("-keystore", "Keystore name", { exclusiveOn: ["-cacerts"] }),
  valueOption("-storepass", "Keystore password", "arg"),
  storeTypeOption("-storetype", "Keystore type", {
    exclusiveOn: ["-cacerts"],
  }),
  ...providerOptions,
];

const repeatedOptions: Fig.Option[] = [
  aliasOption,
  ...keystoreOptions,
  protectedOption,
];

const completionSpec: Fig.Spec = {
  name: "keytool",
  description: "Key and Certificate Management Tool",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    helpOption,
    {
      name: "-conf",
      description: "Specify pre-configured options file",
      isPersistent: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
  ],
  subcommands: [
    {
      name: "-certreq",
      description: "Generates a certificate request",
      options: [
        ...commonOptions,
        ...repeatedOptions,
        sigalgOption,
        fileOption("Output file name"),
        keypassOption,
        dnameOption,
        extOption,
      ],
    },
    {
      name: "-changealias",
      description: "Changes an entry's alias",
      options: [
        ...commonOptions,
        ...repeatedOptions,
        destAliasOption,
        keypassOption,
        cacertsOption,
      ],
    },
    {
      name: "-delete",
      description: "Deletes an entry",
      options: [...commonOptions, ...repeatedOptions, cacertsOption],
    },
    {
      name: ["-exportcert", "-export"],
      description: "Exports certificate",
      options: [
        ...commonOptions,
        ...repeatedOptions,
        rfcOption,
        fileOption("Output file name"),
        cacertsOption,
      ],
    },
    {
      name: ["-genkeypair", "-genkey"],
      description: "Generates a key pair",
      options: [
        ...commonOptions,
        ...repeatedOptions,
        valueOption("-keyalg", "Key algorithm name", "alg", {
          isRequired: true,
          args: {
            name: "alg",
            suggestions: [
              "RSA",
              "DSA",
              "EC",
              "RSASSA-PSS",
              "EdDSA",
              "Ed25519",
              "Ed448",
              "XDH",
              "X25519",
              "X448",
              "DH",
            ],
          },
        }),
        valueOption("-keysize", "Key bit size", "size", {
          exclusiveOn: ["-groupname"],
        }),
        valueOption(
          "-groupname",
          "Group name. For example, an Elliptic Curve name",
          "name",
          { exclusiveOn: ["-keysize"] }
        ),
        sigalgOption,
        valueOption("-signer", "Signer alias", "alias"),
        valueOption("-signerkeypass", "Signer key password", "arg"),
        dnameOption,
        startdateOption,
        extOption,
        validityOption,
        keypassOption,
      ],
    },
    {
      name: "-genseckey",
      description: "Generates a secret key",
      options: [
        ...commonOptions,
        ...repeatedOptions,
        keypassOption,
        valueOption("-keyalg", "Key algorithm name", "alg", {
          isRequired: true,
        }),
        keysizeOption,
      ],
    },
    {
      name: "-gencert",
      description: "Generates certificate from a certificate request",
      options: [
        ...commonOptions,
        ...repeatedOptions,
        rfcOption,
        {
          name: "-infile",
          description: "Input file name",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "-outfile",
          description: "Output file name",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        sigalgOption,
        dnameOption,
        startdateOption,
        extOption,
        validityOption,
        keypassOption,
      ],
    },
    {
      name: ["-importcert", "-import"],
      description: "Imports a certificate or a certificate chain",
      options: [
        ...commonOptions,
        ...repeatedOptions,
        noPromptOption,
        trustCacertsOption,
        fileOption("Input file name"),
        keypassOption,
        cacertsOption,
      ],
    },
    {
      name: ["-importpass", "-importpassword"],
      description: "Imports a password",
      options: [
        ...commonOptions,
        ...repeatedOptions,
        keypassOption,
        valueOption("-keyalg", "Key algorithm name", "alg"),
        keysizeOption,
      ],
    },
    {
      name: "-importkeystore",
      description: "Imports one or all entries from another keystore",
      options: [
        ...commonOptions,
        keystoreOption("-srckeystore", "Source keystore name", {
          isRequired: true,
        }),
        keystoreOption("-destkeystore", "Destination keystore name"),
        storeTypeOption("-srcstoretype", "Source keystore type"),
        storeTypeOption("-deststoretype", "Destination keystore type"),
        valueOption("-srcstorepass", "Source keystore password", "arg"),
        valueOption("-deststorepass", "Destination keystore password", "arg"),
        {
          name: "-srcprotected",
          description: "Source keystore password protected",
        },
        {
          name: "-destprotected",
          description: "Destination keystore password protected",
        },
        valueOption(
          "-srcprovidername",
          "Source keystore provider name",
          "name"
        ),
        valueOption(
          "-destprovidername",
          "Destination keystore provider name",
          "name"
        ),
        valueOption("-srcalias", "Source alias", "alias"),
        destAliasOption,
        valueOption("-srckeypass", "Source key password", "arg"),
        valueOption("-destkeypass", "Destination key password", "arg"),
        noPromptOption,
        ...addProviderOptions,
      ],
    },
    {
      name: "-keypasswd",
      description: "Changes the key password of an entry",
      options: [
        ...commonOptions,
        aliasOption,
        keypassOption,
        newPasswordOption,
        ...keystoreOptions,
      ],
    },
    {
      name: "-list",
      description: "Lists entries in a keystore",
      options: [...commonOptions, ...repeatedOptions, rfcOption, cacertsOption],
    },
    {
      name: "-printcert",
      description: "Prints the content of a certificate",
      options: [
        ...commonOptions,
        rfcOption,
        fileOption("Input file name"),
        {
          name: "-sslserver",
          description: "SSL server host and port",
          args: {
            name: "server[:port]",
          },
        },
        {
          name: "-jarfile",
          description: "Signed jar file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        ...keystoreOptions,
        trustCacertsOption,
        protectedOption,
      ],
    },
    {
      name: "-printcertreq",
      description: "Prints the content of a certificate request",
      options: [...commonOptions, fileOption("Input file name")],
    },
    {
      name: "-printcrl",
      description: "Prints the content of a CRL file",
      options: [
        ...commonOptions,
        fileOption("Input file name"),
        ...keystoreOptions,
        trustCacertsOption,
        protectedOption,
      ],
    },
    {
      name: "-storepasswd",
      description: "Changes the store password of a keystore",
      options: [
        ...commonOptions,
        newPasswordOption,
        ...keystoreOptions,
        cacertsOption,
      ],
    },
    {
      name: "-showinfo",
      description: "Displays security-related information",
      options: [
        ...commonOptions,
        {
          name: "-tls",
          description: "Displays TLS configuration information",
        },
      ],
    },
    {
      name: "-version",
      description: "Prints the program version",
      options: [helpOption],
    },
    // Undocumented commands that keytool still accepts (not listed in its help)
    {
      name: "-keyclone",
      description: "Clones a key entry",
      hidden: true,
      options: [
        ...commonOptions,
        aliasOption,
        destAliasOption,
        keypassOption,
        newPasswordOption,
        ...keystoreOptions,
      ],
    },
    {
      name: "-selfcert",
      description: "Generates a self-signed certificate",
      hidden: true,
      options: [
        ...commonOptions,
        aliasOption,
        sigalgOption,
        dnameOption,
        startdateOption,
        extOption,
        validityOption,
        keypassOption,
        ...keystoreOptions,
      ],
    },
    {
      name: "-gencrl",
      description: "Generates CRL",
      hidden: true,
      options: [
        ...commonOptions,
        ...repeatedOptions,
        rfcOption,
        fileOption("Output file name"),
        valueOption("-id", "Serial ID of cert to revoke", "id:reason", {
          isRepeatable: true,
        }),
        sigalgOption,
        keypassOption,
      ],
    },
    {
      name: "-identitydb",
      description: "Imports entries from a JDK 1.1.x-style identity database",
      hidden: true,
      options: [
        ...commonOptions,
        fileOption("Input file name"),
        ...keystoreOptions,
      ],
    },
  ],
};

export default completionSpec;
