// PocketBase v0.40.6 (latest git tag on GitHub, released 2026-10-23, checked 2026-11-19). Source: cobra definitions read
// statically at tag v0.40.6 (pocketbase.go, cmd/serve.go, cmd/superuser.go, plugins/migratecmd, plugins/update,
// plugins/jsvm and the flags registered in examples/base/main.go, i.e. the prebuilt release binary). The binary was not run.
// Upstream announced that releases after v0.40.6 will be published at ganigeorgiev.com (not reachable from the sandbox).
const emailArg: Fig.Arg = {
  name: "email",
  description: "Superuser email address",
};

const emailAndPasswordArgs: Fig.Arg[] = [
  emailArg,
  {
    name: "password",
    description: "Superuser password",
  },
];

const completionSpec: Fig.Spec = {
  name: "pocketbase",
  description: "PocketBase CLI",
  subcommands: [
    {
      name: "migrate",
      description: "Executes app DB migration scripts",
      subcommands: [
        {
          name: "up",
          description: "Runs all available migrations",
        },
        {
          name: "down",
          description: "Reverts the last [number] applied migrations",
          args: {
            name: "number",
            description:
              "Number of applied migrations to revert (default 1, a negative number reverts all)",
            isOptional: true,
          },
        },
        {
          name: "create",
          description: "Creates new blank migration template file",
          args: {
            name: "name",
            description: "Migration file name",
          },
        },
        {
          name: "collections",
          description:
            "Creates new migration file with a snapshot of the local collections configuration",
        },
        {
          name: "history-sync",
          description:
            "Ensures that the _migrations history table doesn't have references to deleted migration files",
        },
      ],
    },
    {
      name: "serve",
      description:
        "Starts the web server (default to 127.0.0.1:8090 if no domain is specified)",
      args: {
        name: "domain",
        description:
          "Domain to issue an auto TLS certificate for (Let's Encrypt)",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "--http",
          description:
            "TCP address to listen for the HTTP server (if domain args are specified - default to 0.0.0.0:80, otherwise - default to 127.0.0.1:8090)",
          args: {
            name: "address",
          },
        },
        {
          name: "--https",
          description:
            "TCP address to listen for the HTTPS server (if domain args are specified - default to 0.0.0.0:443, otherwise - default to empty string, aka. no TLS). The incoming HTTP traffic also will be auto redirected to the HTTPS version",
          args: {
            name: "address",
          },
        },
        {
          name: "--origins",
          description: "CORS allowed domain origins list (default [*])",
          args: {
            name: "origins",
          },
        },
      ],
    },
    {
      name: "superuser",
      description: "Manage superusers",
      subcommands: [
        {
          name: "upsert",
          description:
            "Creates, or updates if email exists, a single superuser",
          args: emailAndPasswordArgs,
        },
        {
          name: "create",
          description: "Creates a new superuser",
          args: emailAndPasswordArgs,
        },
        {
          name: "update",
          description: "Changes the password of a single superuser",
          args: emailAndPasswordArgs,
        },
        {
          name: "delete",
          description: "Deletes an existing superuser",
          args: emailArg,
        },
        {
          name: "otp",
          description: "Creates a new OTP for the specified superuser",
          args: emailArg,
        },
        {
          name: "ips",
          description:
            "Updates the superuser IPs whitelist setting (leave empty to clear the whitelist restriction)",
          args: {
            name: "ips",
            description: "IP addresses or subnets, for example 10.0.0.0/24",
            isOptional: true,
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "update",
      description:
        "Automatically updates the current app executable with the latest available version",
      options: [
        {
          name: "--backup",
          description:
            "Creates a pb_data backup at the end of the update process (default true)",
        },
      ],
    },
  ],
  options: [
    {
      name: "--automigrate",
      description: "Enable/disable auto migrations (default true)",
      isPersistent: true,
    },
    {
      name: "--dev",
      description:
        "Enable dev mode, aka. printing logs and sql statements to the console",
      isPersistent: true,
    },
    {
      name: "--dir",
      description:
        "The PocketBase data directory (default pb_data next to the executable)",
      isPersistent: true,
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "--encryptionEnv",
      description:
        "The env variable whose value of 32 characters will be used as encryption key for the app settings (default none)",
      isPersistent: true,
      args: {
        name: "env",
      },
    },
    {
      name: "--hooksDir",
      description: "The directory with the JS app hooks",
      isPersistent: true,
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "--hooksPool",
      description:
        "The total prewarm goja.Runtime instances for the JS app hooks execution (default 15)",
      isPersistent: true,
      args: {
        name: "number",
      },
    },
    {
      name: "--hooksWatch",
      description:
        "Auto restart the app on pb_hooks file change, it has no effect on Windows (default true)",
      isPersistent: true,
    },
    {
      name: "--indexFallback",
      description:
        "Fallback the request to index.html on missing static path, e.g. when pretty urls are used with SPA (default true)",
      isPersistent: true,
    },
    {
      name: "--migrationsDir",
      description: "The directory with the user defined migrations",
      isPersistent: true,
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "--publicDir",
      description:
        "The directory to serve static files (default pb_public next to the executable)",
      isPersistent: true,
      args: {
        name: "dir",
        template: "folders",
      },
    },
    {
      name: "--queryTimeout",
      description: "The default SELECT queries timeout in seconds (default 30)",
      isPersistent: true,
      args: {
        name: "seconds",
      },
    },
    {
      name: ["-h", "--help"],
      description: "Show help for pocketbase",
    },
    {
      name: ["-v", "--version"],
      description: "Show version for pocketbase",
    },
  ],
};
export default completionSpec;
