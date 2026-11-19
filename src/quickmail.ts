// quickmail (quick-mail) v1.0.4 (PyPI latest, released 2021-03-25; upstream avikumar15/quick-mail-cli has had no release since, 2026-11-19).
// Source: argparse definitions in quickmail/cli.py and quickmail/commands/*.py from the upstream repo, read not run.
const bodyTemplates: Fig.Generator = {
  script: ["quickmail", "template", "listall"],
  postProcess: (output) => {
    return output
      .split("\n")
      .filter((item) => item.trim().length > 0)
      .map((item) => ({
        name: item.trim(),
        icon: "fig://icon?type=box",
        description: "Mail body template",
      }));
  },
};

const completionSpec: Fig.Spec = {
  name: "quickmail",
  description: "A command line interface to send mail without any hassle",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Show this help message and exit",
      isPersistent: true,
    },
    {
      name: ["-v", "--version"],
      description: "Print current cli version",
    },
  ],
  subcommands: [
    {
      name: "clear",
      description:
        "Clear the saved mail bodies, or the credentials and token as well with --justdoit",
      options: [
        {
          name: ["-j", "--justdoit"],
          description: "Clear storage including the credentials and token",
        },
      ],
    },
    {
      name: "init",
      description: "Initialise the token and set up your Gmail account",
      args: {
        name: "filepath",
        description: "Path to credentials.json",
        template: "filepaths",
      },
    },
    {
      name: "send",
      description: "Send mail",
      options: [
        {
          name: ["-r", "--receiver"],
          description: "Receiver's email address",
          isRequired: true,
          args: {
            name: "receiver",
          },
        },
        {
          name: ["-sub", "--subject"],
          description: "Email's subject",
          isRequired: true,
          args: {
            name: "subject",
          },
        },
        {
          name: ["-t", "--template"],
          description: "Template of the email body",
          args: {
            name: "template",
            generators: bodyTemplates,
          },
        },
        {
          name: ["-b", "--body"],
          description: "Email's body",
          args: {
            name: "body",
          },
        },
        {
          name: ["-a", "--attachment"],
          description: "Email's attachment path",
          args: {
            name: "attachment",
            template: "filepaths",
          },
        },
        {
          name: ["-l", "--lessgo"],
          description: "Skip confirmation before sending mail",
        },
      ],
    },
    {
      name: "template",
      description: "Manage templates of mail body",
      subcommands: [
        {
          name: "add",
          description: "Add a new template",
          options: [
            {
              name: ["-n", "--templatename"],
              description: "Name of the new template",
              isRequired: true,
              args: {
                name: "template name",
              },
            },
          ],
        },
        {
          name: "listall",
          description: "List all templates",
        },
        {
          name: "edit",
          description: "Edit a particular template",
          options: [
            {
              name: ["-n", "--templatename"],
              description: "Name of the template to edit",
              isRequired: true,
              args: {
                name: "template name",
                generators: bodyTemplates,
              },
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
