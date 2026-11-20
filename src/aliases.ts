// aliases v0.8.1 (latest tag of sebglazebrook/aliases; master 1da5f11 of 2026-09-17 is still 0.8.1, 2026-11-19). Source: config/cli.yml (clap yaml)
// and src/main.rs at master, read statically (Rust, not built or run). Upstream last tagged a release in 2017.
const helpAndVersionOptions: Fig.Option[] = [
  {
    name: ["--help", "-h"],
    description: "Prints help information",
    isPersistent: true,
  },
  {
    name: ["--version", "-V"],
    description: "Prints version information",
    isPersistent: true,
  },
];

const completionSpec: Fig.Spec = {
  name: "aliases",
  description: "Bash aliases on steroids, dynamic alias functions for bash",
  subcommands: [
    {
      name: "add",
      description: "Add an alias via the cli",
      args: [
        {
          name: "name",
          description: "The name of the alias",
        },
        {
          name: "command",
          description: "The command you want to run",
        },
      ],
    },
    {
      name: "clone",
      description: "Clone external aliases",
      options: [
        {
          name: ["-E", "--enable"],
          description:
            "Whether to enable the user if they are not currently enabled",
        },
      ],
      args: [
        {
          name: "username",
          description: "The username of the aliases you want to clone",
        },
        {
          name: "repo_url",
          description:
            "The git repo url of the aliases (defaults to github/<username>/dot-aliases)",
          isOptional: true,
        },
      ],
    },
    {
      name: "directories",
      description: "List all directories initialized with aliases",
    },
    {
      name: "exec",
      description: "Execute an alias for a given directory",
      args: [
        {
          name: "directory",
          description: "Directory where the alias is defined",
          template: "folders",
        },
        {
          name: "name",
          isVariadic: true,
          description: "Name of alias, followed by the arguments to pass to it",
        },
      ],
    },
    {
      name: "help",
      description: "Prints help information",
    },
    {
      name: "init",
      description: "Initialize a directory for aliases",
      options: [
        {
          name: ["-g", "--global"],
          description: "Returns the global initialization for the app",
        },
        {
          name: ["-u", "--user"],
          description: "Initialize aliases for a specific user",
          args: {
            name: "user",
          },
        },
      ],
    },
    {
      name: "list",
      description: "List the aliases available",
      options: [
        {
          name: ["-g", "--global"],
          description: "List only global aliases",
          exclusiveOn: ["-l", "--local", "-d", "--directory"],
        },
        {
          name: ["-l", "--local"],
          description: "List only local aliases",
          exclusiveOn: ["-g", "--global", "-d", "--directory"],
        },
        {
          name: ["-d", "--directory"],
          description: "List aliases for a specific directory",
          exclusiveOn: ["-g", "--global", "-l", "--local"],
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: ["-n", "--name"],
          description: "List aliases with a specific name",
          args: {
            name: "name",
          },
        },
      ],
    },
    {
      name: "pull",
      description: "Pull a cloned user's aliases",
      args: {
        name: "username",
        description:
          "The username of the aliases you want to pull, leave blank to pull all user aliases",
        isOptional: true,
      },
    },
    {
      name: "rehash",
      description: "Update the aliases",
    },
    {
      name: "remove",
      description: "Remove an alias via the cli",
      args: {
        name: "name",
        description: "The name of the alias",
      },
    },
    {
      name: "users",
      description: "List the users",
      subcommands: [
        {
          name: "disable",
          description: "Disable a user's aliases",
          args: {
            name: "username",
            description: "The user name you want to disable",
          },
        },
        {
          name: "enable",
          description: "Enable a user's aliases",
          args: {
            name: "username",
            description: "The user name you want to enable",
          },
        },
        {
          name: "help",
          description:
            "Prints this message or the help of the given subcommand(s)",
        },
        {
          name: "move",
          description: "Move a user up or down the prioritization list",
          args: [
            {
              name: "username",
              description: "The user name you want to move",
            },
            {
              name: "prioritization",
              description: "The priority order you want for the user",
            },
          ],
        },
        {
          name: "use",
          description: "Assign a user to the top of the priority list",
          args: {
            name: "username",
            description: "The user name you want to move",
          },
        },
      ],
    },
  ],
  options: helpAndVersionOptions,
};
export default completionSpec;
