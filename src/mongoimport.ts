// mongoimport v100.20.1 (MongoDB Database Tools, mongodb/mongo-tools git tag 100.20.1 = newest stable tag, 2026-11-20).
// Source: option struct tags in mongoimport/options.go and common/options/options.go plus the flag validation in
// mongoimport/mongoimport.go, read statically from a clone of the tag (binary not run). Descriptions follow
// https://www.mongodb.com/docs/database-tools/mongoimport where the tool's own help text is terse.

import { filepaths } from "@tabsmith/autocomplete-generators";

const pemFileArg: Fig.Arg = {
  name: "filename",
  generators: filepaths({ extensions: ["pem"] }),
};

const fieldListArg: Fig.Arg = {
  name: "field1,field2,...",
  description: "Comma separated list of fields",
};

const completionSpec: Fig.Spec = {
  name: "mongoimport",
  description:
    "Import data from a JSON, CSV, or TSV file into a MongoDB instance",
  options: [
    {
      name: "--help",
      description: "Returns information on the options and use of mongoimport",
    },
    {
      name: ["--verbose", "-v"],
      description:
        "Increases the amount of internal reporting returned on standard output or in log files",
      isRepeatable: true,
    },
    {
      name: "--quiet",
      description:
        "Runs mongoimport in a quiet mode that attempts to limit the amount of output",
    },
    {
      name: "--version",
      description: "Returns the mongoimport release number",
    },
    {
      name: "--config",
      description:
        "Specifies the full path to a YAML configuration file containing sensitive values for the password, uri and sslPEMKeyPassword options",
      args: {
        name: "filename",
        generators: filepaths({ extensions: ["yaml", "yml"] }),
      },
    },
    {
      name: "--uri",
      description:
        "Specifies the resolvable URI connection string of the MongoDB deployment",
      priority: 100,
      args: {
        name: "connectionString",
        description: "MongoDB connection string",
        suggestions: [
          {
            name: "mongodb://localhost:27017",
            description: "Default Connection String",
          },
          {
            name: "mongodb+srv://username:password@cluster0.example.mongodb.net/database",
            description: "Atlas Connection String Example",
            priority: 35,
          },
        ],
      },
    },
    {
      name: ["--host", "-h"],
      description:
        "Specifies the resolvable hostname of the MongoDB deployment",
      args: {
        name: "hostname:port",
        suggestions: [
          {
            name: "localhost:27017",
            description: "Default host",
          },
        ],
      },
    },
    {
      name: "--port",
      description:
        "Specifies the TCP port on which the MongoDB instance listens for client connections",
      args: {
        name: "port",
        suggestions: [
          {
            name: "27017",
            description: "Default port",
          },
        ],
      },
    },
    {
      name: "--ssl",
      description:
        "Enables connection to a mongod or mongos that has TLS/SSL support enabled",
    },
    {
      name: "--sslCAFile",
      description:
        "Specifies the .pem file that contains the root certificate chain from the Certificate Authority",
      args: pemFileArg,
    },
    {
      name: "--sslPEMKeyFile",
      description:
        "Specifies the .pem file that contains both the TLS/SSL certificate and key",
      args: pemFileArg,
    },
    {
      name: "--sslPEMKeyPassword",
      description:
        "Specifies the password to de-crypt the certificate-key file (i.e. --sslPEMKeyFile)",
      args: {
        name: "value",
        description: "Password",
        isDangerous: true,
      },
    },
    {
      name: "--sslCRLFile",
      description:
        "Specifies the .pem file that contains the Certificate Revocation List",
      args: pemFileArg,
    },
    {
      name: "--sslFIPSMode",
      description: "Uses the FIPS mode of the installed OpenSSL library",
    },
    {
      name: "--tlsInsecure",
      description:
        "Bypasses the validation of the server's certificate chain and hostname",
    },
    {
      name: "--sslAllowInvalidCertificates",
      description:
        "Bypasses the validation checks for server certificates and allows the use of invalid certificates (deprecated, use --tlsInsecure)",
      deprecated: true,
    },
    {
      name: "--sslAllowInvalidHostnames",
      description:
        "Disables the validation of the hostnames in TLS/SSL certificates (deprecated, use --tlsInsecure)",
      deprecated: true,
    },
    {
      name: ["--username", "-u"],
      description:
        "Specifies a username with which to authenticate to a MongoDB database that uses authentication",
      args: { name: "username" },
    },
    {
      name: ["--password", "-p"],
      description:
        "Specifies a password with which to authenticate to a MongoDB database that uses authentication",
      dependsOn: ["--username"],
      args: {
        name: "password",
        isDangerous: true,
      },
    },
    {
      name: "--awsSessionToken",
      description:
        "Specifies the session token for MONGODB-AWS authentication mechanism",
      args: { name: "AWS Session Token" },
    },
    {
      name: "--authenticationDatabase",
      description:
        "Specifies the authentication database where the specified --username has been created",
      args: {
        name: "dbname",
        description: "Database name",
      },
    },
    {
      name: "--authenticationMechanism",
      description:
        "Specifies the authentication mechanism the mongoimport instance uses to authenticate to the mongod or mongos",
      args: {
        name: "name",
        suggestions: [
          { name: "SCRAM-SHA-1" },
          { name: "SCRAM-SHA-256" },
          { name: "MONGODB-X509" },
          { name: "MONGODB-AWS" },
          { name: "MONGODB-OIDC" },
          { name: "GSSAPI", description: "Kerberos" },
          { name: "PLAIN", description: "LDAP SASL" },
        ],
      },
    },
    {
      name: "--gssapiServiceName",
      description:
        "Specify the name of the service using GSSAPI/Kerberos. This option is available only in MongoDB Enterprise",
      args: {
        name: "serviceName",
        default: "mongodb",
      },
    },
    {
      name: "--gssapiHostName",
      description:
        "Specify the hostname of the service using GSSAPI/Kerberos. This option is available only in MongoDB Enterprise",
      args: { name: "hostname" },
    },
    {
      name: ["--db", "-d"],
      description:
        "Specifies the name of the database on which to run the mongoimport",
      args: { name: "database" },
    },
    {
      name: ["--collection", "-c"],
      description: "Specifies the name of the collection to import",
      priority: 90,
      args: { name: "collection" },
    },
    {
      name: ["--fields", "-f"],
      description:
        "Specify a comma separated list of field names when importing CSV or TSV files that do not have field names in the first (i.e. header) line of the file",
      exclusiveOn: ["--fieldFile", "--headerline"],
      args: fieldListArg,
    },
    {
      name: "--fieldFile",
      description:
        "Specify a file containing field names, one per line, when importing CSV or TSV files that do not have field names in the first (i.e. header) line of the file",
      exclusiveOn: ["--fields", "-f", "--headerline"],
      args: {
        name: "filename",
        template: "filepaths",
      },
    },
    {
      name: "--ignoreBlanks",
      description: "Ignores fields with empty values in CSV and TSV imports",
    },
    {
      name: "--type",
      description: "Specifies the file type to import",
      args: {
        name: "type",
        default: "json",
        suggestions: [
          {
            name: "json",
            description: "JSON",
          },
          {
            name: "csv",
            description: "Comma-separated values",
          },
          {
            name: "tsv",
            description: "Tab-separated values",
          },
        ],
      },
    },
    {
      name: "--file",
      description:
        "Specifies the location and name of a file containing the data to import. If not specified, mongoimport reads from standard input",
      priority: 80,
      args: {
        name: "filename",
        generators: filepaths({ extensions: ["json", "csv", "tsv"] }),
      },
    },
    {
      name: "--drop",
      description:
        "Modifies the import process so that the target instance drops the collection before importing the data from the input",
    },
    {
      name: "--headerline",
      description:
        "Treats the first line of the input file as a header line (CSV and TSV only)",
      exclusiveOn: ["--fields", "-f", "--fieldFile"],
    },
    {
      name: "--useArrayIndexFields",
      description:
        "Interpret natural numbers in fields as array indexes when importing CSV or TSV files",
    },
    {
      name: "--mode",
      description:
        "Specifies how the import process should handle existing documents in the database that match documents in the import file",
      priority: 80,
      args: {
        name: "mode",
        default: "insert",
        suggestions: [
          {
            name: "insert",
            description: "Insert the documents in the import file",
          },
          {
            name: "upsert",
            description:
              "Replace existing documents in the database with matching documents from the import file",
          },
          {
            name: "merge",
            description:
              "Merge existing documents that match a document in the import file with the new document",
          },
          {
            name: "delete",
            description:
              "Delete existing documents in the database that match a document in the import file",
          },
        ],
      },
    },
    {
      name: "--upsert",
      description: "Same as --mode=upsert (deprecated, use --mode)",
      deprecated: true,
    },
    {
      name: "--upsertFields",
      description:
        "Specifies a list of fields for the query portion of the import process",
      args: fieldListArg,
    },
    {
      name: "--stopOnError",
      description:
        "Forces mongoimport to halt the insert operation at the first error rather than continuing the operation despite errors",
    },
    {
      name: "--jsonArray",
      description:
        "Accepts the import of data expressed with multiple MongoDB documents within a single JSON array",
    },
    {
      name: "--legacy",
      description:
        "Indicates that the import data is in Extended JSON v1 format",
    },
    {
      name: "--maintainInsertionOrder",
      description:
        "Maintains the order of documents in the import file when inserting documents into the database",
    },
    {
      name: ["--numInsertionWorkers", "-j"],
      description:
        "Specifies the number of insertion workers to run concurrently",
      args: {
        name: "number",
        description: "Number of workers",
        default: "1",
      },
    },
    {
      name: "--writeConcern",
      description:
        "Specifies the write concern for each write operation that mongoimport performs",
      args: {
        name: "write-concern",
        description: "Write concern, e.g. majority or {w: 3, wtimeout: 500}",
        default: "majority",
      },
    },
    {
      name: "--bypassDocumentValidation",
      description:
        "Enables mongoimport to bypass document validation during the operation",
    },
    {
      name: "--columnsHaveTypes",
      description:
        "Instructs mongoimport that the field list specified in --fields, --fieldFile, or --headerline specifies the types of each field",
    },
    {
      name: "--parseGrace",
      description:
        "Specifies how mongoimport handles type coercion failures when importing CSV or TSV files with --columnsHaveTypes",
      args: {
        name: "grace",
        default: "stop",
        suggestions: [
          { name: "autoCast" },
          { name: "skipField" },
          { name: "skipRow" },
          { name: "stop" },
        ],
      },
    },
  ],
  args: {
    name: "file",
    description: "File to import from; if not specified, stdin is used",
    isOptional: true,
    generators: filepaths({ extensions: ["json", "csv", "tsv"] }),
  },
};

export default completionSpec;
