// Steadybit CLI v6.4.1 (GitHub release, 2026-10-29). Source: the cobra command
// tree in internal/cli of https://github.com/steadybit/cli at v6.4.1 (the Go
// rewrite; the npm `steadybit` package is deprecated)

const formats = ["json", "yaml"];

// ponytail: static copies of upstream lists; they only change with a release.
const runStates = [
  "CREATED",
  "PREPARED",
  "RUNNING",
  "FAILED",
  "CANCELED",
  "COMPLETED",
  "ERRORED",
];

const opt = (
  name: Fig.SingleOrArray<string>,
  description: string,
  args?: Fig.Arg
): Fig.Option => ({ name, description, ...(args && { args }) });

const required = (option: Fig.Option): Fig.Option => ({
  ...option,
  isRequired: true,
});

// A flag taking several space-separated values (`--team ADM OPS`), or repeated
const many = (
  name: Fig.SingleOrArray<string>,
  description: string,
  arg: string,
  suggestions?: string[]
): Fig.Option => ({
  name,
  description,
  isRepeatable: true,
  args: { name: arg, isVariadic: true, ...(suggestions && { suggestions }) },
});

const keyValue = (
  name: Fig.SingleOrArray<string>,
  description: string
): Fig.Option => ({
  ...opt(name, description, { name: "KEY=VALUE" }),
  isRepeatable: true,
});

const format = (
  description: string,
  name: Fig.SingleOrArray<string> = ["-t", "--type"]
) => opt(name, description, { name: "format", suggestions: formats });

const listFormat = format("Print the items as json or yaml instead of a table");
const fileFormat = format(
  "The output format (default: json if the file ends in .json, yaml otherwise)"
);

const duration = { name: "duration", description: "E.g. 30s, 15m" };
const time = { name: "time", description: "A date or an RFC 3339 time" };
const day = { name: "date", description: "YYYY-MM-DD" };
const count = { name: "number" };

const id = (description: string) =>
  required(opt(["-i", "--id"], description, { name: "id" }));
const key = (description: string) =>
  opt(["-k", "--key"], description, { name: "key" });
const teamKey = required(key("The team key"));
const yes = opt(
  "--yes",
  "Skip the confirmation prompt. Not necessary when no TTY is attached"
);
const dryRun = opt(
  "--dry-run",
  "Report what applying would create or update, without changing anything"
);
const recursive = opt(
  ["-R", "--recursive"],
  "Process the directory used in -f, --file recursively"
);
const directory = (description: string) =>
  opt(["-d", "--directory"], description, {
    name: "directory",
    template: "folders",
  });

const filesOf = (what: string): Fig.Option => ({
  name: ["-f", "--file"],
  description: `The path to the ${what} file or a directory containing multiple files`,
  isRepeatable: true,
  args: { name: "file", isVariadic: true, template: "filepaths" },
});
const output = (what: string): Fig.Option[] => [
  opt(["-f", "--file"], `The path to write the ${what} to`, {
    name: "file",
    template: "filepaths",
  }),
  fileFormat,
];

const diff = (what: string): Fig.Subcommand => ({
  name: "diff",
  description: `Show how ${what} files differ from the platform. Exits with 2 when they do`,
  options: [required(filesOf(what)), recursive],
});

const article = (what: string) =>
  /^[aeiou]/i.test(what) ? `an ${what}` : `a ${what}`;

const crud = (
  what: string,
  plural: string,
  ref: Fig.Option,
  extra: {
    list?: Fig.Option[];
    get?: Fig.Option[];
    apply?: Fig.Option[];
    delete?: Fig.Option[];
  } = {}
): Fig.Subcommand[] => {
  const a = article(what);
  return [
    {
      name: "list",
      description: `List ${plural}`,
      options: [...(extra.list ?? []), listFormat],
    },
    {
      name: "get",
      description: `Get ${a}. Output is written to file or stdout`,
      options: [ref, ...output(what), ...(extra.get ?? [])],
    },
    {
      name: "apply",
      description: `Create or update ${plural} from files`,
      options: [
        required(filesOf(what)),
        recursive,
        dryRun,
        ...(extra.apply ?? []),
      ],
    },
    diff(what),
    {
      name: "delete",
      description: `Delete ${a}`,
      options: [ref, ...(extra.delete ?? [])],
    },
  ];
};

const variableCommand = (what: string): Fig.Subcommand => ({
  name: "variable",
  description: `Manage the variables of ${article(what)}`,
  subcommands: [
    {
      name: "get",
      description: `Print the variables of ${article(what)}`,
      options: [
        id(`The ${what} id`),
        format("The output format (default: yaml)"),
      ],
    },
    {
      name: "set",
      description: `Set variables of ${article(what)}, keeping the others`,
      args: { name: "KEY=VALUE", isVariadic: true, isOptional: true },
      options: [
        id(`The ${what} id`),
        opt(
          ["-f", "--file"],
          "A YAML/JSON file mapping variable names to values",
          { name: "file", template: "filepaths" }
        ),
        opt("--replace", "Remove every variable not given"),
      ],
    },
  ],
});

const team = (description: string) => many("--team", description, "team");

const configCommand: Fig.Subcommand = {
  name: "config",
  description: "Show/modify the CLI configuration and authentication profiles",
  subcommands: [
    {
      name: "show",
      description:
        "Show the active CLI configuration. Warning: Prints secrets!",
    },
    {
      name: "profile",
      description: "Configure authentication profiles",
      subcommands: [
        {
          name: "add",
          description: "Configure a new profile (interactively or via options)",
          options: [
            opt(["-n", "--name"], "Name of the profile", { name: "name" }),
            opt(["-b", "--baseUrl"], "Base URL to be used", { name: "url" }),
            opt(["-t", "--token"], "Team API token", { name: "token" }),
          ],
        },
        {
          name: ["list", "ls"],
          description: "List all configured profiles",
        },
        {
          name: "remove",
          description: "Interactively remove an existing profile",
          args: { name: "name", isOptional: true },
          options: [yes],
        },
        {
          name: "select",
          description: "Interactively change the currently active profile",
          args: { name: "name", isOptional: true },
        },
      ],
    },
  ],
};

const accessTokenTypes = ["ADMIN", "TEAM", "WILDCARD"];
const tokenOutput = format("Print only the id and the token as json or yaml", [
  "-t",
  "--output",
]);
const accessTokenCommand: Fig.Subcommand = {
  name: "access-token",
  description: "Manage the API access tokens of the tenant",
  subcommands: [
    {
      name: "list",
      description: "List access tokens. The tokens themselves are never shown",
      options: [
        opt("--name", "Only list tokens with this name", { name: "name" }),
        opt("--created-by", "Only list tokens created by this user", {
          name: "user",
        }),
        opt("--type", "Only list tokens of this type", {
          name: "type",
          suggestions: accessTokenTypes,
        }),
        format(
          "Print the items as json or yaml instead of a table",
          "--output"
        ),
        team("Only list tokens of these teams, by team key"),
        opt(
          "--expired",
          "Only list expired tokens, or with --expired=false those still valid"
        ),
      ],
    },
    {
      name: "create",
      description:
        "Create an access token. The token is printed once and cannot be shown again",
      options: [
        required(opt("--name", "The name of the token", { name: "name" })),
        required(
          opt("--type", "The type of the token", {
            name: "type",
            suggestions: accessTokenTypes,
          })
        ),
        team("The teams of a TEAM token, by team key"),
        opt("--expires-at", "When the token expires (default: never)", time),
        tokenOutput,
      ],
    },
    {
      name: "recreate",
      description:
        "Replace an access token with a new one of the same name, type and teams",
      options: [
        id("The access token id"),
        opt(
          "--expires-at",
          'When the new token expires, or "never" (default: when the current token expires)',
          time
        ),
        tokenOutput,
        yes,
      ],
    },
    {
      name: "delete",
      description: "Delete an access token. Everything using it loses access",
      options: [id("The access token id"), yes],
    },
  ],
};

const actionCommand: Fig.Subcommand = {
  name: "action",
  description: "Find the actions experiments can use",
  subcommands: [
    {
      name: "list",
      description: "List the actions the extensions provide",
      options: [
        many("--kind", "Only list actions of these kinds", "kind", [
          "ATTACK",
          "CHECK",
          "LOAD_TEST",
          "OTHER",
          "BASIC",
        ]),
        listFormat,
      ],
    },
    {
      name: "get",
      description: "Get an action with its parameters",
      options: [id("The action id"), ...output("action")],
    },
  ],
};

const adviceCommand: Fig.Subcommand = {
  name: "advice",
  description: "Show/verify advice status",
  subcommands: [
    {
      name: "validate-status",
      description:
        "Validate the status of the advice for an environment and an optional query",
      options: [
        required(
          opt(["-e", "--environment"], "The environment name", {
            name: "environment",
          })
        ),
        opt(
          ["-s", "--status"],
          "The expected status of the advice (default: Implemented)",
          {
            name: "status",
            suggestions: ["Implemented", "Action Needed", "Validation Needed"],
          }
        ),
        opt(["-q", "--query"], "A target query to filter advice by targets", {
          name: "query",
        }),
      ],
    },
  ],
};

const auditLogCommand: Fig.Subcommand = {
  name: "audit-log",
  description:
    "Show the audit log: who changed what, and when. Needs an admin access token",
  options: [
    opt("--from", "The earliest time (default: 7 days before --to)", time),
    opt("--to", "The latest time (default: 7 days after --from, or now)", time),
    format("Print the entries as json or yaml instead of a table"),
  ],
};

const environmentCommand: Fig.Subcommand = {
  name: "environment",
  description: "Manage environments and their variables",
  subcommands: [
    ...crud("environment", "environments", id("The environment id"), {
      list: [
        opt("--search", "Only list environments matching this", {
          name: "text",
        }),
      ],
      delete: [yes],
    }),
    variableCommand("environment"),
  ],
};

const executionCommand: Fig.Subcommand = {
  name: "execution",
  description:
    "Search, inspect, cancel and annotate experiment runs, and download their artifacts",
  subcommands: [
    {
      name: "list",
      description: "Search the runs of all experiments, most recent first",
      options: [
        team("Only list runs of experiments of these teams, by team key"),
        many(
          "--exclude-team",
          "Leave out runs of experiments of these teams, by team key",
          "team"
        ),
        many(
          ["-k", "--key"],
          "Only list runs of these experiments, by experiment key",
          "key"
        ),
        many("--state", "Only list runs in these states", "state", runStates),
        many(
          "--environment",
          "Only list runs in these environments, by name",
          "environment"
        ),
        many(
          "--service",
          "Only list runs of experiments linked to these services, by name",
          "service"
        ),
        opt(
          "--name",
          "Only list runs of experiments whose name or key contains this text",
          { name: "text" }
        ),
        opt("--from", "Only list runs created at or after this time", time),
        opt("--to", "Only list runs created at or before this time", time),
        opt(
          "--requested-from",
          "Only list runs requested at or after this time",
          time
        ),
        opt(
          "--requested-to",
          "Only list runs requested at or before this time",
          time
        ),
        opt(
          "--ended-from",
          "Only list runs that ended at or after this time",
          time
        ),
        opt(
          "--ended-to",
          "Only list runs that ended at or before this time",
          time
        ),
        opt("--limit", "The most runs to list, 0 for all (default: 20)", count),
        opt(
          "--fail-on-match",
          "Exit with a non-zero status when any run matches"
        ),
        listFormat,
      ],
    },
    {
      name: "get",
      description:
        "Get an experiment run, including its steps and target executions",
      options: [id("The experiment run id"), ...output("experiment run")],
    },
    {
      name: "cancel",
      description: "Cancel a running experiment run",
      options: [id("The experiment run id")],
    },
    {
      name: "property",
      description: "Change the properties of an experiment run",
      subcommands: [
        {
          name: "set",
          description:
            "Set the value of a property of an experiment run. Several --value set a list property",
          options: [
            id("The experiment run id"),
            required(key("The property key")),
            required(many("--value", "The value to set", "value")),
            opt("--json", "Parse each value as JSON"),
          ],
        },
        {
          name: "add",
          description: "Add a value to a list property of an experiment run",
          options: [
            id("The experiment run id"),
            required(key("The property key")),
            required(opt("--value", "The value to add", { name: "value" })),
            opt("--json", "Parse the value as JSON"),
          ],
        },
      ],
    },
    {
      name: "artifact",
      description: "List and download the artifacts of an experiment run",
      subcommands: [
        {
          name: "list",
          description:
            "List the artifacts that the actions of an experiment run attached",
          options: [id("The experiment run id"), listFormat],
        },
        {
          name: "download",
          description:
            "Download the artifacts of an experiment run. Without filters, all of them",
          options: [
            id("The experiment run id"),
            opt(
              ["-a", "--artifact"],
              "Only download artifacts with this id, usually the file name",
              { name: "artifact" }
            ),
            opt(
              "--target-execution",
              "Only download artifacts of this target execution",
              { name: "id" }
            ),
            {
              ...directory("The directory to download into (default: .)"),
              exclusiveOn: ["-o", "--output"],
            },
            opt(
              ["-o", "--output"],
              "Write the artifact to this file instead. Requires exactly one match",
              { name: "file", template: "filepaths" }
            ),
          ],
        },
      ],
    },
    {
      name: "watch",
      description: "Follow an experiment run live until it ends",
      options: [
        opt(["-i", "--id"], "The experiment run id", { name: "id" }),
        key("Watch the latest run of this experiment instead"),
        opt("--interval", "How often to refresh (default: 2s)", duration),
      ],
    },
  ],
};

const templateOptions = (externalId: string): Fig.Option[] => [
  {
    ...opt(
      "--template",
      "Create the experiment from the experiment template with this id",
      { name: "template" }
    ),
    exclusiveOn: ["-f", "--file"],
  },
  opt("--team", "With --template: the key of the team owning the experiment", {
    name: "team",
  }),
  opt(
    "--environment",
    "With --template: the environment the experiment runs in",
    { name: "environment" }
  ),
  opt("--external-id", externalId, { name: "id" }),
  keyValue(["-p", "--placeholder"], "With --template: a placeholder value"),
  opt(
    "--placeholders",
    "With --template: a YAML/JSON file mapping placeholder keys to values",
    { name: "file", template: "filepaths" }
  ),
  keyValue(
    "--variable",
    "With --template: an experiment variable to add to the experiment"
  ),
  opt(
    "--no-reset-properties",
    "With --template: keep the properties of an existing experiment"
  ),
];

const experimentCommand: Fig.Subcommand = {
  name: "experiment",
  description: "Check and run experiments",
  subcommands: [
    {
      name: ["run", "exec"],
      description:
        "Execute an experiment run. If a file is specified the experiment is saved first",
      options: [
        key("The experiment key"),
        filesOf("experiment"),
        recursive,
        opt("--no-wait", "Do not wait for the experiment run to finish"),
        opt("--yes", "Skip the prompt asking for experiment run confirmation"),
        opt(
          "--allowParallel",
          "Skip the prompt warning about another running experiment"
        ),
        opt(
          "--run-again",
          "Start another run even when this experiment is already running"
        ),
        opt(
          "--retries",
          "Number of retries when the experiment fails validation",
          count
        ),
        opt(
          "--retryInterval",
          "Interval in seconds between retries (default: 10)",
          { name: "seconds" }
        ),
        opt(
          "--busy-retries",
          "Times to try again while another experiment is running",
          count
        ),
        opt(
          "--busy-retry-interval",
          "How long to wait before trying again (default: 30s)",
          duration
        ),
        opt(
          "--expect-state",
          "Pass once the run reaches this state (default: COMPLETED)",
          { name: "state", suggestions: runStates }
        ),
        opt("--expect-reason", "Also require the run's reason to be this", {
          name: "reason",
        }),
        opt(
          "--expectation-retries",
          "Run again this many times when a run does not end as expected",
          count
        ),
        opt(
          "--expectation-retry-interval",
          "How long to wait before running again (default: 1m)",
          duration
        ),
        opt(
          "--parallel",
          "How many of the experiments given with -f to run at once (default: 1)",
          count
        ),
        opt(
          "--timeout",
          "Cancel the run and fail when it has not ended after this long",
          duration
        ),
        opt(
          "--keep-running-on-interrupt",
          "Leave the run going when the CLI is interrupted"
        ),
        opt("--show-steps", "Print each step's state as it changes"),
        opt(
          "--report",
          "Write a JUnit report of the runs to this file, or JSON if it ends in .json",
          { name: "file", template: "filepaths" }
        ),
        keyValue(
          "--execution-variable",
          "With --template: a variable for this run only"
        ),
        ...templateOptions(
          "Without --template: run the experiment with this external id. With --template: an identifier of your own"
        ),
      ],
    },
    {
      name: "get",
      description: "Get an experiment. Output is written to file or stdout",
      options: [
        required(key("The experiment key")),
        opt(["-f", "--file"], "The path to the experiment file", {
          name: "file",
          template: "filepaths",
        }),
        fileFormat,
      ],
    },
    {
      name: "apply",
      description:
        "Upload an experiment from a file, or create it from a template with --template",
      options: [
        key("The experiment key"),
        filesOf("experiment"),
        recursive,
        dryRun,
        ...templateOptions(
          "With --template: an identifier of your own. Using it again updates the experiment it created"
        ),
      ],
    },
    {
      name: "delete",
      description: "Delete an experiment from Steadybit",
      options: [required(key("The experiment key"))],
    },
    {
      name: "dump",
      description: "Dump all experiments and executions from all teams",
      options: [
        directory("The path to dump all the experiments to (default: .)"),
        format("The output format of the experiment (default: yaml)"),
        team("Only dump the given teams, by team key"),
      ],
    },
    {
      name: "init",
      description:
        "Create an experiment from a template, answering its placeholders, and write it to a file",
      options: [
        opt("--template", "The template to start from", { name: "template" }),
        opt("--team", "The key of the team owning the experiment", {
          name: "team",
        }),
        opt("--environment", "The environment the experiment runs in", {
          name: "environment",
        }),
        opt(["-f", "--file"], "The file to write the experiment to", {
          name: "file",
          template: "filepaths",
        }),
      ],
    },
    {
      name: "badge",
      description:
        "Print a status badge of an experiment to paste into a README",
      options: [
        { ...key("The experiment key"), exclusiveOn: ["--tag"] },
        opt("--tag", "Instead of --key: the tag of the experiments", {
          name: "tag",
        }),
        opt(
          "--create-caption",
          "With --tag: the caption shown while no experiment has the tag",
          { name: "caption" }
        ),
        opt("--tenant", "The tenant key (default: read from the license)", {
          name: "tenant",
        }),
        opt("--scale", "Scale the badge image by this factor", {
          name: "factor",
        }),
        {
          ...opt("--format", "Print the badge in this format", {
            name: "format",
            suggestions: ["markdown", "html", "url"],
          }),
          exclusiveOn: ["-t", "--type"],
        },
        format("Print the image URL, link and snippets as json or yaml"),
      ],
    },
    diff("experiment"),
  ],
};

const hubCommand: Fig.Subcommand = {
  name: "hub",
  description: "Manage the hubs experiment templates are imported from",
  subcommands: [
    ...crud("hub", "hubs", id("The hub id"), {
      apply: [
        opt(
          "--synchronize",
          "Fetch the hub's templates from its repository, waiting until done"
        ),
      ],
      delete: [
        opt(
          "--delete-imported-templates",
          "Also delete the templates imported from the hub"
        ),
        yes,
      ],
    }),
    {
      name: "resync",
      description: "Fetch a hub's templates from its repository again",
      options: [id("The hub id")],
    },
  ],
};

const integrationCommand: Fig.Subcommand = {
  name: "integration",
  description:
    "Manage webhook, Slack and preflight integrations. Changing them needs an admin access token",
  subcommands: [
    ["webhook", "webhook integration", "webhook integrations"],
    ["slack", "Slack integration", "Slack integrations"],
    ["preflight", "preflight webhook", "preflight webhooks"],
    [
      "preflight-action",
      "preflight action integration",
      "preflight action integrations",
    ],
  ].map(([name, what, plural]) => ({
    name,
    description: `Manage ${plural}`,
    subcommands: crud(what, plural, id(`The ${what} id`), { delete: [yes] }),
  })),
};

const killswitchCommand: Fig.Subcommand = {
  name: "killswitch",
  description:
    "Stop all experiments of the tenant at once, and keep them stopped",
  subcommands: [
    {
      name: "status",
      description: "Show whether the kill switch is active",
      options: [format("Print the status as json or yaml")],
    },
    {
      name: "activate",
      description:
        "Stop every running experiment of every team, and let none run until deactivated",
      options: [yes],
    },
    {
      name: "deactivate",
      description:
        "Deactivate the kill switch, so that experiments can run again",
    },
  ],
};

const licenseCommand: Fig.Subcommand = {
  name: "license",
  description:
    "Show the license of the tenant and what of it is used. Needs an admin access token",
  subcommands: [
    {
      name: "show",
      description:
        "Show the license, when it expires, and how much of each limit is used",
      options: [format("Print the license summary as json or yaml")],
    },
    {
      name: "report",
      description: "Download the license usage report, a zip archive",
      options: [
        opt(
          ["-o", "--output"],
          "Write the report to this file, overwriting it",
          {
            name: "file",
            template: "filepaths",
          }
        ),
      ],
    },
  ],
};

const propertyCommand: Fig.Subcommand = {
  name: "property",
  description: "Manage the properties experiments and services carry",
  subcommands: [
    {
      name: "definition",
      description:
        "Manage property definitions: a property's key, label and type",
      subcommands: crud(
        "property definition",
        "property definitions",
        required(key("The property key")),
        {
          apply: [
            opt(
              "--delete-values",
              "Allow removing enum values still in use, deleting them where used"
            ),
          ],
          delete: [
            opt(
              "--delete-associations",
              "Also delete the associations of the property"
            ),
            yes,
          ],
        }
      ),
    },
    {
      name: "association",
      description:
        "Manage property associations: which experiments or services carry a property",
      subcommands: [
        {
          name: "list",
          description: "List property associations",
          options: [
            opt("--key", "Only list associations of this property", {
              name: "key",
            }),
            opt(
              "--experiment",
              "Only list associations given to this experiment, by key",
              { name: "key" }
            ),
            opt(
              "--service",
              "Only list associations given to this service, by id",
              { name: "id" }
            ),
            opt("--type", "Only list associations of this type", {
              name: "type",
              suggestions: ["EXPERIMENT", "SERVICE"],
            }),
            format(
              "Print the items as json or yaml instead of a table",
              "--output"
            ),
          ],
        },
        {
          name: "get",
          description:
            "Get a property association. Output is written to file or stdout",
          options: [
            id("The property association id"),
            ...output("property association"),
          ],
        },
        {
          name: "apply",
          description: "Create or update property associations from files",
          options: [required(filesOf("property association")), recursive],
        },
        {
          name: "delete",
          description: "Delete a property association",
          options: [
            id("The property association id"),
            opt(
              "--delete-values",
              "Also delete the values experiments and schedules have for it"
            ),
            yes,
          ],
        },
      ],
    },
  ],
};

const reportFilters = {
  team: team("Only count these teams, by team key"),
  environment: many(
    "--environment",
    "Only count these environments, by name",
    "environment"
  ),
  service: many("--service", "Only count these services, by id", "service"),
  serviceProperty: keyValue(
    "--service-property",
    "Only count services with this property"
  ),
  category: many("--category", "Only count these risk categories", "category"),
};
const serviceFilters = Object.values(reportFilters);

const report = (
  name: string,
  description: string,
  filters: Fig.Option[] = [],
  groupBy?: string[]
): Fig.Subcommand => ({
  name,
  description,
  options: [
    opt("--from", "The first day (default: 30 days before --to)", day),
    opt("--to", "The last day (default: today)", day),
    opt("--rollup", "Sum up per daily or monthly bucket", {
      name: "rollup",
      suggestions: ["DAILY", "MONTHLY"],
    }),
    ...output("report"),
    ...(groupBy
      ? [
          opt("--group-by", "Split the series by this", {
            name: "group",
            suggestions: groupBy,
          }),
        ]
      : []),
    ...filters,
  ],
});

const reportCommand: Fig.Subcommand = {
  name: "report",
  description:
    "Print reports on the tenant as time series. Output is written to file or stdout",
  subcommands: [
    report("users", "Users in the tenant over time"),
    report("teams", "Teams in the tenant over time"),
    report("environments", "Environments in the tenant over time"),
    report(
      "experiments-executed",
      "Experiment runs over time",
      [reportFilters.team, reportFilters.environment, reportFilters.service],
      [
        "NONE",
        "STATE",
        "TRIGGER",
        "ACTION",
        "ISSUES_FIXED",
        "ISSUES_DISCOVERED",
      ]
    ),
    report(
      "experiments-created",
      "Experiments created over time",
      [reportFilters.team, reportFilters.environment],
      ["NONE", "CREATED_VIA", "ORIGIN"]
    ),
    report(
      "services-distribution",
      "Services per risk level (low, medium, high) over time",
      serviceFilters
    ),
    report(
      "services-by-category",
      "The average risk of services per category over time",
      serviceFilters
    ),
    report(
      "services-average",
      "The average risk of services, 0 to 100, over time",
      serviceFilters
    ),
  ],
};

const scheduleId = id("The experiment schedule id");
const scheduleFields: Fig.Option[] = [
  opt(
    "--cron",
    "Run repeatedly on this Quartz cron expression (seconds first)",
    {
      name: "cron",
    }
  ),
  opt("--start-at", "Run once at this ISO 8601 time", time),
  opt("--timezone", "The timezone of the cron expression, e.g. Europe/Berlin", {
    name: "timezone",
  }),
  {
    ...opt("--allow-parallel", "Run even when another experiment is running"),
    exclusiveOn: ["--no-allow-parallel"],
  },
  {
    ...opt(
      "--no-allow-parallel",
      "Skip the run when another experiment is running"
    ),
    exclusiveOn: ["--allow-parallel"],
  },
  {
    ...opt("--run-again", "Run even when this experiment is still running"),
    exclusiveOn: ["--no-run-again"],
  },
  {
    ...opt(
      "--no-run-again",
      "Skip the run when this experiment is still running"
    ),
    exclusiveOn: ["--run-again"],
  },
  keyValue("--variable", "A variable for the scheduled runs"),
];

const scheduleCommand: Fig.Subcommand = {
  name: "schedule",
  description: "Schedule experiments",
  subcommands: [
    ...crud("experiment schedule", "experiment schedules", scheduleId, {
      list: [
        team("Only list schedules of these teams, by team key"),
        many(
          "--experiment",
          "Only list schedules of these experiments, by experiment key",
          "key"
        ),
      ],
    }),
    {
      name: "create",
      description:
        "Schedule an experiment, repeatedly with --cron or once with --start-at",
      options: [
        required(
          opt(["-k", "--experiment"], "The key of the experiment to schedule", {
            name: "key",
          })
        ),
        opt("--disabled", "Create the schedule disabled"),
        ...scheduleFields,
      ],
    },
    {
      name: "update",
      description:
        "Change an experiment schedule. Only the given fields change",
      options: [scheduleId, ...scheduleFields],
    },
    {
      name: "enable",
      description: "Enable an experiment schedule",
      options: [scheduleId],
    },
    {
      name: "disable",
      description: "Disable an experiment schedule without deleting it",
      options: [scheduleId],
    },
  ],
};

const serviceId = id("The service id");
const deleteExperiments = (description: string) =>
  opt("--delete-experiments", description);
const placeholders = [
  keyValue(["-p", "--placeholder"], "A placeholder value"),
  opt("--placeholders", "A YAML/JSON file mapping placeholder keys to values", {
    name: "file",
    template: "filepaths",
  }),
];

const serviceCommand: Fig.Subcommand = {
  name: "service",
  description: "Manage services, their experiments, variables and risk",
  subcommands: [
    ...crud("service", "services", serviceId, {
      list: [
        team("Only list services of these teams, by team key"),
        many(
          "--environment",
          "Only list services in these environments",
          "environment"
        ),
        many(
          "--experiment",
          "Only list services these experiments are linked to",
          "key"
        ),
      ],
      apply: [
        deleteExperiments(
          "When the service profile changes, delete provided experiments its templates lack"
        ),
      ],
    }),
    {
      name: "risk",
      description:
        "Show the risk score of a service, overall, per category and per experiment",
      options: [
        serviceId,
        format("Print the raw risk as json or yaml instead of tables"),
        opt(
          "--fail-above",
          "Exit with a non-zero status when the overall risk is above this score",
          { name: "score" }
        ),
      ],
    },
    {
      name: "experiment",
      description: "Manage the experiments of a service",
      subcommands: [
        {
          name: "list",
          description: "List the provided and custom experiments of a service",
          options: [
            serviceId,
            many(
              "--category",
              "Only list experiments in these categories",
              "category"
            ),
            many("--type", "Only list provided or custom experiments", "type", [
              "provided",
              "custom",
            ]),
            format(
              "Print the items as json or yaml instead of a table",
              "--output"
            ),
          ],
        },
        {
          name: "provide",
          description:
            "Create or update a provided experiment of a service from a profile template",
          options: [
            serviceId,
            required(
              opt(
                "--template",
                "The template, which must be part of the service profile",
                { name: "template" }
              )
            ),
            opt(
              ["-k", "--experiment"],
              "Update this existing provided experiment instead of creating one",
              { name: "key" }
            ),
            ...placeholders,
            opt(
              "--no-reset-properties",
              "Keep the properties of an existing experiment"
            ),
          ],
        },
        {
          name: "link",
          description:
            "Link an existing experiment to a service as a custom experiment",
          options: [
            serviceId,
            required(
              opt(["-k", "--experiment"], "The experiment to link", {
                name: "key",
              })
            ),
            required(
              opt("--category", "The category to link it in", {
                name: "category",
              })
            ),
          ],
        },
        {
          name: "unlink",
          description:
            "Remove a custom experiment from a service. The experiment itself is kept",
          options: [
            serviceId,
            required(
              opt(["-k", "--experiment"], "The experiment to unlink", {
                name: "key",
              })
            ),
          ],
        },
      ],
    },
    variableCommand("service"),
  ],
};

const serviceProfileCommand: Fig.Subcommand = {
  name: "service-profile",
  description:
    "Manage the service profiles that provide experiments to services",
  subcommands: crud(
    "service profile",
    "service profiles",
    id("The service profile id"),
    {
      list: [
        opt("--name", "Only list profiles whose name contains this", {
          name: "text",
        }),
        many("--origin", "Only list provided or custom profiles", "origin", [
          "provided",
          "custom",
        ]),
        opt("--default", "Only list the default profile"),
      ],
      apply: [
        deleteExperiments(
          "Delete the provided experiments that use templates removed from the profile"
        ),
      ],
    }
  ),
};

const environmentName = required(
  opt(["-e", "--environment"], "The environment name", { name: "environment" })
);
const attributeOptions: Fig.Option[] = [
  environmentName,
  opt("--target-type", "The target type. Either this or --action is required", {
    name: "type",
  }),
  opt("--action", "The action whose target selection to use", {
    name: "action",
  }),
  listFormat,
];

const targetCommand: Fig.Subcommand = {
  name: "target",
  description: "Find the targets of an environment and their attributes",
  subcommands: [
    {
      name: "query",
      description:
        "List the targets of an environment, optionally of one type and matching a query",
      options: [
        environmentName,
        opt("--target-type", "Only list targets of this type", {
          name: "type",
        }),
        opt(["-q", "--query"], "Only list targets matching this target query", {
          name: "query",
        }),
        many(
          "--attribute",
          "Only fetch these attributes, shown as columns",
          "attribute"
        ),
        opt(
          "--limit",
          "List at most this many targets; 0 lists all (default: 100)",
          count
        ),
        listFormat,
      ],
    },
    {
      name: "attribute",
      description: "List the attribute keys and values of targets",
      subcommands: [
        {
          name: "keys",
          description: "List the attribute keys the targets of a type have",
          options: attributeOptions,
        },
        {
          name: "values",
          description:
            "List the values an attribute has on the targets of a type",
          options: [...attributeOptions, required(key("The attribute key"))],
        },
      ],
    },
    {
      name: "stats",
      description: "Count the targets of each type in the tenant",
      options: [
        opt(
          ["-q", "--query"],
          "Only count targets matching this target query",
          {
            name: "query",
          }
        ),
        format("Print the counts as json or yaml instead of a table"),
      ],
    },
  ],
};

const members = (
  use: string,
  description: string,
  withRole: boolean,
  confirm: boolean
): Fig.Subcommand => ({
  name: use,
  description,
  options: [
    teamKey,
    many("--username", "Members by username", "username"),
    many("--email", "Members by email", "email"),
    ...(withRole
      ? [
          opt("--role", "The role of the given members (default: MEMBER)", {
            name: "role",
            suggestions: ["MEMBER", "OWNER"],
          }),
          opt("--validate", "Fail on users the platform does not know"),
        ]
      : []),
    ...(confirm ? [yes] : []),
  ],
});

const teamEnvironments = (
  use: string,
  description: string,
  validate: boolean,
  confirm: boolean
): Fig.Subcommand => ({
  name: use,
  description,
  options: [
    teamKey,
    many("--environment", "Environments by name", "environment"),
    ...(validate
      ? [opt("--validate", "Fail on environments the platform does not know")]
      : []),
    ...(confirm ? [yes] : []),
  ],
});

const teamCommand: Fig.Subcommand = {
  name: "team",
  description: "Manage teams, their members and environments",
  subcommands: [
    ...crud("team", "teams", teamKey, {
      list: [
        opt("--search", "Only list teams matching this", { name: "text" }),
      ],
      delete: [
        opt(
          "--purge-experiments",
          "Also delete the team's experiments and their runs. Required by the platform"
        ),
        yes,
      ],
    }),
    {
      name: "member",
      description: "Manage the members of a team",
      subcommands: [
        {
          name: "list",
          description: "List the members of a team",
          options: [teamKey, listFormat],
        },
        members(
          "add",
          "Add members to a team, or change the role of existing ones",
          true,
          false
        ),
        members(
          "remove",
          "Remove members from a team. They keep their account",
          false,
          true
        ),
        members(
          "set",
          "Make the given users the only members of a team",
          true,
          true
        ),
      ],
    },
    {
      name: "environment",
      description: "Manage the environments a team may use",
      subcommands: [
        {
          name: "list",
          description: "List the environments of a team",
          options: [teamKey, listFormat],
        },
        teamEnvironments(
          "add",
          "Allow a team to use environments",
          true,
          false
        ),
        teamEnvironments(
          "remove",
          "Stop a team from using environments",
          false,
          false
        ),
        teamEnvironments(
          "set",
          "Make the given environments the only ones a team may use",
          true,
          true
        ),
      ],
    },
  ],
};

const templateCommand: Fig.Subcommand = {
  name: "template",
  description: "Manage the experiment templates to create experiments from",
  subcommands: [
    ...crud(
      "experiment template",
      "experiment templates",
      id("The experiment template id"),
      {
        list: [
          many("--tag", "Only list templates with one of these tags", "tag"),
          many(
            "--target-type",
            "Only list templates targeting one of these target types",
            "type"
          ),
          many(
            "--action",
            "Only list templates using one of these actions",
            "action"
          ),
          many(
            "--search",
            "Only list templates whose title or description match",
            "text"
          ),
        ],
        get: [
          opt(
            "--placeholders",
            "Only output the template placeholders, as a file to fill in"
          ),
        ],
        delete: [yes],
      }
    ),
    {
      name: "import",
      description: "Import experiment templates from a connected hub",
      options: [
        required(opt("--hub", "The id of the hub", { name: "id" })),
        required(
          many("--template", "The ids of the hub's templates to import", "id")
        ),
        opt("--overwrite", "Replace templates that exist already"),
      ],
    },
  ],
};

const userCommand: Fig.Subcommand = {
  name: "user",
  description: "Manage the users of the tenant",
  subcommands: [
    {
      name: "invite",
      description: "Invite users by email. Needs an admin access token",
      options: [
        required(many("--email", "The email addresses to invite", "email")),
        opt("--role", "The role in the tenant", {
          name: "role",
          suggestions: ["USER", "ADMIN"],
        }),
        opt("--team", "The key of a team to add them to", { name: "team" }),
      ],
    },
    {
      name: "list",
      description: "List the users of the tenant. Needs an admin access token",
      options: [
        opt(
          "--query",
          "Only list users whose username, name or email contains this text",
          { name: "text" }
        ),
        listFormat,
      ],
    },
    {
      name: "delete",
      description: "Remove a user from the tenant. Needs an admin access token",
      options: [
        required(
          opt(["-u", "--username"], "The username, as user list shows it", {
            name: "username",
          })
        ),
        yes,
      ],
    },
  ],
};

const projectDirectory = directory("The project directory (default: .)");

const completionCommand: Fig.Subcommand = {
  name: "completion",
  description: "Generate the autocompletion script for the specified shell",
  subcommands: ["bash", "fish", "powershell", "zsh"].map((name) => ({
    name,
    description: `Generate the autocompletion script for ${name}`,
    options: [opt("--no-descriptions", "Disable completion descriptions")],
  })),
};

const completionSpec: Fig.Spec = {
  name: "steadybit",
  description: "Command-line interface to interact with the Steadybit API",
  subcommands: [
    accessTokenCommand,
    actionCommand,
    adviceCommand,
    {
      name: "apply",
      description:
        "Apply a project written by export: definitions, environments, teams, hubs, templates, services, experiments and schedules",
      options: [
        projectDirectory,
        dryRun,
        deleteExperiments(
          "Delete provided experiments that changed service profiles no longer provide"
        ),
      ],
    },
    auditLogCommand,
    completionCommand,
    configCommand,
    {
      name: "diff",
      description:
        "Show how a project written by export differs from the platform. Exits with 2 when it does",
      options: [projectDirectory],
    },
    environmentCommand,
    executionCommand,
    experimentCommand,
    {
      name: "export",
      description:
        "Write a team's (or with --tenant, the tenant's) configuration to a directory, to keep in Git",
      options: [
        {
          ...opt("--team", "The key of the team to export", { name: "team" }),
          exclusiveOn: ["--tenant"],
        },
        {
          ...opt(
            "--tenant",
            "Export the configuration of the tenant rather than a team"
          ),
          exclusiveOn: ["--team"],
        },
        directory("The directory to write the project to (default: .)"),
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      args: { name: "command", isOptional: true, template: "help" },
    },
    hubCommand,
    integrationCommand,
    killswitchCommand,
    licenseCommand,
    propertyCommand,
    reportCommand,
    scheduleCommand,
    serviceCommand,
    serviceProfileCommand,
    targetCommand,
    teamCommand,
    templateCommand,
    userCommand,
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Display usage information",
      isPersistent: true,
    },
    {
      name: ["-v", "--verbose"],
      description: "Enable verbose logging",
      isPersistent: true,
    },
    {
      name: "--profile",
      description: "Use this configuration profile instead of the selected one",
      isPersistent: true,
      args: { name: "profile" },
    },
    {
      name: "--jq",
      description: "Filter the JSON a command prints with a jq expression",
      isPersistent: true,
      args: { name: "expression" },
    },
    opt(["-V", "--version"], "Output the version number"),
  ],
};
export default completionSpec;
