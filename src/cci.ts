// CumulusCI (cci) v4.11.0 (PyPI cumulusci latest, released 2026-10-30, 2026-11-19). Source: click command
// definitions in cumulusci/cli/*.py of the cumulusci-4.11.0 wheel plus its bundled cumulusci.yml (service types,
// built-in scratch org configs, dependency resolution strategies), read statically; cci was not executed here.
// Not covered: the task-specific `--<option>` flags of `cci task run <task>` and the extra service types a
// project can add in its cumulusci.yml are built by cci at runtime and cannot be listed statically.

interface TaskOrFlow {
  name: string;
  description?: string;
}

interface CciOrg {
  is_default?: boolean;
  username?: string;
  config?: string;
}

interface CciPlan {
  name: string;
  title?: string;
}

// These generators only use `--json` list commands, which are local (cci skips its PyPI update check for --json)
const cacheOptions = (cacheKey: string, ttl: number) => ({
  cacheKey,
  ttl,
  cacheByDirectory: true,
});

const listGenerator = (kind: "task" | "flow"): Fig.Generator => ({
  script: ["cci", kind, "list", "--json"],
  scriptTimeout: 15000,
  cache: cacheOptions(`cci-${kind}s`, 60000),
  postProcess: (out) => {
    try {
      const items = JSON.parse(out) as TaskOrFlow[];
      return items.map(({ name, description }) => ({
        name,
        description: description || undefined,
      }));
    } catch {
      return [];
    }
  },
});

const taskGenerator = listGenerator("task");
const flowGenerator = listGenerator("flow");

const planGenerator: Fig.Generator = {
  script: ["cci", "plan", "list", "--json"],
  scriptTimeout: 15000,
  cache: cacheOptions("cci-plans", 60000),
  postProcess: (out) => {
    try {
      const plans = JSON.parse(out) as CciPlan[];
      return plans.map(({ name, title }) => ({
        name,
        description: title || undefined,
      }));
    } catch {
      return [];
    }
  },
};

const orgGenerator: Fig.Generator = {
  script: ["cci", "org", "list", "--json"],
  scriptTimeout: 15000,
  cache: cacheOptions("cci-orgs", 10000),
  postProcess: (out) => {
    try {
      const orgs = JSON.parse(out) as Record<string, CciOrg>;
      return Object.entries(orgs).map(([name, org]) => ({
        name,
        description: org.is_default
          ? "Default org"
          : org.username || org.config || undefined,
      }));
    } catch {
      return [];
    }
  },
};

const serviceTypeGenerator: Fig.Generator = {
  script: ["cci", "service", "list", "--json"],
  scriptTimeout: 15000,
  cache: cacheOptions("cci-service-types", 60000),
  postProcess: (out) => {
    try {
      return Object.keys(JSON.parse(out) as Record<string, unknown>).map(
        (name) => ({ name })
      );
    } catch {
      return [];
    }
  },
};

const plainOption: Fig.Option = {
  name: "--plain",
  description: "Print the table using plain ascii",
};

const jsonOption = (description: string): Fig.Option => ({
  name: "--json",
  description,
});

// Every ORGNAME is optional because the same value can be passed with --org instead
const existingOrgArg: Fig.Arg = {
  name: "ORGNAME",
  description: "Name of the org",
  isOptional: true,
  generators: orgGenerator,
};

const newOrgArg: Fig.Arg = {
  name: "ORGNAME",
  description: "Name for the org",
  isOptional: true,
};

const orgOption = (
  description: string,
  existing: boolean,
  argDescription: string
): Fig.Option => ({
  name: "--org",
  description,
  args: {
    name: "TEXT",
    description: argDescription,
    ...(existing && { generators: orgGenerator }),
  },
});

// Commands that act on a connected org; the org is a positional ORGNAME or --org, defaulting to the default org
const defaultOrgOption = orgOption(
  "Alternate way to specify the target org. By default, runs against the current default org",
  true,
  "Name of the target org"
);

// Commands that need an org name: either ORGNAME or --org is required
const requiredOrgOption = (existing: boolean): Fig.Option =>
  orgOption(
    "Alternate way to specify the target org. One of ORGNAME (see above) or --org is required",
    existing,
    existing ? "Name of the target org" : "Name for the org"
  );

const defaultOrgFlag: Fig.Option = {
  name: "--default",
  description: "If set, sets the connected org as the new default org",
};

const shellScriptOption: Fig.Option = {
  name: "--script",
  description: "Path to a script to run",
  args: {
    name: "PATH",
    template: "filepaths",
  },
};

const shellPythonOption: Fig.Option = {
  name: "--python",
  description: "Python code to run directly",
  args: {
    name: "TEXT",
  },
};

const noPromptOption: Fig.Option = {
  name: "--no-prompt",
  description:
    "Disables all prompts. Set for non-interactive mode such as calling from scripts or CI systems",
};

const taskOrgOption: Fig.Option = {
  name: "--org",
  description:
    "Specify the target org. By default, runs against the current default org",
  args: {
    name: "TEXT",
    description: "Name of the target org",
    generators: orgGenerator,
  },
};

// Services

const textOption = (
  name: string,
  description: string,
  argName = "TEXT"
): Fig.Option => ({
  name,
  description,
  args: {
    name: argName,
  },
});

const connectService = (
  name: string,
  description: string,
  options: Fig.Option[]
): Fig.Subcommand => ({
  name,
  description,
  args: {
    name: "SERVICE_NAME",
    description: "Name for the service. Defaults to 'default'",
    isOptional: true,
  },
  options: [
    ...options,
    {
      name: "--default",
      description: "Set this service as the global default",
    },
    {
      name: "--project",
      description:
        "Set this service as the default for this project only (inside a project)",
    },
  ],
});

const serviceTypeArg: Fig.Arg = {
  name: "SERVICE_TYPE",
  description: "Type of the service",
  generators: serviceTypeGenerator,
};

const completionSpec: Fig.Spec = {
  name: "cci",
  description: "CumulusCI command line interface",
  subcommands: [
    {
      name: "error",
      description: "Get or share information about an error",
      subcommands: [
        {
          name: "gist",
          description: "Creates a GitHub gist from the latest logfile",
        },
        {
          name: "info",
          description:
            "Outputs the most recent traceback (if one exists in the most recent log)",
        },
      ],
    },
    {
      name: "flow",
      description: "Commands for finding and running flows for a project",
      subcommands: [
        {
          name: "doc",
          description: "Exports RST format documentation for all flows",
          options: [
            {
              name: "--project",
              description: "Include project-specific flows only",
            },
          ],
        },
        {
          name: "info",
          description: "Displays information for a flow",
          args: {
            name: "FLOW_NAME",
            description: "Name of the flow",
            generators: flowGenerator,
          },
        },
        {
          name: "list",
          description: "List available flows for the current context",
          options: [plainOption, jsonOption("Print a json string")],
        },
        {
          name: "run",
          description: "Runs a flow",
          args: {
            name: "FLOW_NAME",
            description: "Name of the flow to run",
            generators: flowGenerator,
          },
          options: [
            taskOrgOption,
            {
              name: "--delete-org",
              description:
                "If set, deletes the scratch org after the flow completes",
            },
            {
              name: "--debug",
              description:
                "Drops into pdb, the Python debugger, on an exception",
            },
            {
              name: "-o",
              description:
                "Pass task specific options for the task as '-o taskname__option value'. You can specify more than one option by using -o more than once",
              isRepeatable: true,
              args: [
                {
                  name: "TASKNAME__OPTION",
                  description: "Task name and option name joined by __",
                },
                {
                  name: "VALUE",
                  description: "Value for the task option",
                },
              ],
            },
            noPromptOption,
          ],
        },
      ],
    },
    {
      name: "org",
      description:
        "Commands for connecting and interacting with Salesforce orgs",
      subcommands: [
        {
          name: "browser",
          description:
            "Opens a browser window and logs into the org using the stored OAuth credentials",
          args: existingOrgArg,
          options: [
            defaultOrgOption,
            {
              name: ["-p", "--path"],
              description: "Navigate to the specified page after logging in",
              args: {
                name: "TEXT",
                description: "Page to navigate to",
              },
            },
            {
              name: ["-r", "--url-only"],
              description: "Display the target URL, but don't open a browser",
            },
          ],
        },
        {
          name: "connect",
          description: "Connects a new org's credentials using OAuth Web Flow",
          args: newOrgArg,
          options: [
            requiredOrgOption(false),
            {
              name: ["--connected-app", "--connected_app"],
              description: "Name of the connected_app service to use",
              args: {
                name: "TEXT",
              },
            },
            {
              name: "--sandbox",
              description: "If set, connects to a Salesforce sandbox org",
            },
            textOption("--login-url", "If set, login to this hostname"),
            defaultOrgFlag,
            {
              name: "--global-org",
              description:
                "If set, the connected org is available to all CumulusCI projects",
            },
          ],
        },
        {
          name: "default",
          description: "Sets an org as the default org for tasks and flows",
          args: existingOrgArg,
          options: [
            defaultOrgOption,
            {
              name: "--unset",
              description:
                "Unset the org as the default org leaving no default org selected",
            },
          ],
        },
        {
          name: "import",
          description: "Import an org from Salesforce DX",
          args: [
            {
              name: "USERNAME_OR_ALIAS",
              description: "Username or alias of the org in Salesforce DX",
            },
            newOrgArg,
          ],
          options: [requiredOrgOption(false)],
        },
        {
          name: "info",
          description: "Display information for a connected org",
          args: existingOrgArg,
          options: [
            defaultOrgOption,
            jsonOption("Print as JSON. Includes access token"),
          ],
        },
        {
          name: "list",
          description: "Lists all orgs in scope for the current project",
          options: [plainOption, jsonOption("Output results in JSON format")],
        },
        {
          name: "prune",
          description:
            "Removes all expired scratch orgs from the current project",
          options: [
            {
              name: "--include-active",
              description: "Remove all scratch orgs, regardless of expiry",
            },
          ],
        },
        {
          name: "remove",
          description: "Removes an org from the keychain",
          args: existingOrgArg,
          options: [
            requiredOrgOption(true),
            {
              name: "--global-org",
              description:
                "Set this option to force remove a global org. Default behavior is to error if you attempt to delete a global org",
            },
          ],
        },
        {
          name: "scratch",
          description: "Connects a Salesforce DX Scratch Org to the keychain",
          args: [
            {
              name: "CONFIG_NAME",
              description: "Name of a scratch org config from cumulusci.yml",
              suggestions: ["dev", "qa", "feature", "beta", "release"],
            },
            newOrgArg,
          ],
          options: [
            requiredOrgOption(false),
            defaultOrgFlag,
            textOption(
              "--devhub",
              "If provided, overrides the devhub used to create the scratch org"
            ),
            textOption(
              "--days",
              "If provided, overrides the scratch config default days value for how many days the scratch org should persist",
              "DAYS"
            ),
            {
              name: "--no-password",
              description: "If set, don't set a password for the org",
            },
            {
              name: "--release",
              description:
                "If provided, specify either previous or preview when creating a scratch org",
              args: {
                name: "RELEASE",
                suggestions: ["previous", "preview"],
              },
            },
          ],
        },
        {
          name: "scratch_delete",
          description:
            "Deletes a Salesforce DX Scratch Org leaving the config in the keychain for regeneration",
          args: existingOrgArg,
          options: [requiredOrgOption(true)],
        },
        {
          name: "shell",
          description:
            "Drop into a Python shell with a simple_salesforce connection in `sf`, as well as the `org_config` and `project_config`",
          args: existingOrgArg,
          options: [defaultOrgOption, shellScriptOption, shellPythonOption],
        },
      ],
    },
    {
      name: "plan",
      description: "Commands for getting information about MetaDeploy plans",
      subcommands: [
        {
          name: "info",
          description: "Displays information for a MetaDeploy plan",
          args: {
            name: "PLAN_NAME",
            description: "Name of the plan",
            generators: planGenerator,
          },
          options: [
            {
              name: "--messages",
              description: "Show only plan messages",
            },
          ],
        },
        {
          name: "list",
          description: "List available plans for the current context",
          options: [jsonOption("Return the list of plans in JSON format")],
        },
      ],
    },
    {
      name: "project",
      description:
        "Commands for interacting with project repository configurations",
      subcommands: [
        {
          name: "dependencies",
          description:
            "Displays the current dependencies for the project. If the dependencies section has references to other github repositories, the repositories are inspected and a static list of dependencies is created",
          options: [
            {
              name: "--resolution-strategy",
              description:
                "The resolution strategy to use. Defaults to production",
              args: {
                name: "TEXT",
                default: "production",
                suggestions: [
                  "production",
                  "preproduction",
                  "latest_release",
                  "include_beta",
                  "commit_status",
                  "unlocked",
                ],
              },
            },
          ],
        },
        {
          name: "info",
          description:
            "Display information about the current project's configuration",
        },
        {
          name: "init",
          description:
            "Initialize a new project for use with the cumulusci toolbelt",
        },
      ],
    },
    {
      name: "robot",
      description: "Commands for working with Robot Framework",
      subcommands: [
        {
          name: "install_playwright",
          description:
            "Install libraries necessary to use playwright with robot framework",
          options: [
            {
              name: ["-n", "--dry_run"],
              description: "Dry run",
            },
          ],
        },
        {
          name: "uninstall_playwright",
          description:
            "Uninstalls the robotframework-browser package and node modules",
        },
      ],
    },
    {
      name: "service",
      description: "Commands for connecting services to the keychain",
      subcommands: [
        {
          name: "connect",
          description: "Connect an external service to CumulusCI",
          subcommands: [
            connectService(
              "connected_app",
              "Connect a Connected App service to CumulusCI",
              [
                textOption(
                  "--login_url",
                  "Default Salesforce Login URL to be used with this Connected App",
                  "login_url"
                ),
                textOption(
                  "--callback_url",
                  "Callback URL configured on the Connected App",
                  "callback_url"
                ),
                textOption(
                  "--client_id",
                  "Client ID/Consumer Key from the Connected App",
                  "client_id"
                ),
                textOption(
                  "--client_secret",
                  "Client Secret/Consumer Secret from the Connected App",
                  "client_secret"
                ),
              ]
            ),
            connectService("devhub", "Connect a DevHub service to CumulusCI", [
              textOption(
                "--username",
                "Username or alias of the SFDX org to use as a Dev Hub"
              ),
            ]),
            connectService("github", "Connect a GitHub service to CumulusCI", [
              textOption("--username", "The Github username to use for tasks"),
              textOption(
                "--email",
                "The email address to used by Github tasks when an operation requires an email address"
              ),
              textOption(
                "--token",
                "Personal Access Token for GitHub. Leave blank to log in via browser"
              ),
            ]),
            connectService(
              "github_enterprise",
              "Connect a GitHub Enterprise service to CumulusCI",
              [
                textOption(
                  "--username",
                  "The GitHub Enterprise username to use for tasks"
                ),
                textOption(
                  "--email",
                  "The email address to used by GitHub tasks when an operation requires an email address"
                ),
                textOption(
                  "--server_domain",
                  "GitHub Enterprise domain (Example: git.ent.domain.com)"
                ),
                textOption("--token", "Personal Access Token"),
              ]
            ),
            connectService(
              "marketing_cloud",
              "Connect a Marketing Cloud service to CumulusCI",
              [
                textOption(
                  "--oauth2_client",
                  "The name of the oauth2_client service with which to establish a connection to Marketing Cloud"
                ),
              ]
            ),
            connectService("metaci", "Connect a MetaCI service to CumulusCI", [
              textOption("--app_name", "The Heroku app name"),
              textOption("--url", "The main url to the MetaCI site"),
              textOption(
                "--token",
                "Your API token to the MetaCI site (get from SITE_URL/api/token)"
              ),
            ]),
            connectService(
              "metadeploy",
              "Connect a MetaDeploy service to CumulusCI",
              [
                textOption(
                  "--url",
                  "The main url for your MetaDeploy instance"
                ),
                textOption(
                  "--token",
                  "Your API token to the MetaDeploy site (get from SITE_URL/admin/authtoken/token)"
                ),
              ]
            ),
            connectService(
              "oauth2_client",
              "Connect an OAuth2 Client service to CumulusCI",
              [
                textOption("--client_id", "The client Id"),
                textOption("--client_secret", "The client secret"),
                textOption(
                  "--auth_uri",
                  "The URI for where users are directed to login"
                ),
                textOption(
                  "--token_uri",
                  "The URI for where we request an access token"
                ),
                textOption(
                  "--callback_url",
                  "The URL that the auth server will callback to after authentication of the user"
                ),
              ]
            ),
          ],
        },
        {
          name: "default",
          description: "Set the default service for a given service type",
          args: [
            serviceTypeArg,
            {
              name: "SERVICE_NAME",
              description: "Name of the service",
            },
          ],
          options: [
            {
              name: "--project",
              description:
                "Sets the service as the default for the current project",
            },
          ],
        },
        {
          name: "info",
          description: "Show the details of a connected service",
          args: [
            serviceTypeArg,
            {
              name: "SERVICE_NAME",
              description: "Name of the service",
              isOptional: true,
            },
          ],
          options: [
            jsonOption(
              "Print a json string, including the full value of sensitive attributes"
            ),
          ],
        },
        {
          name: "list",
          description: "List services available for configuration and use",
          options: [plainOption, jsonOption("Print a json string")],
        },
        {
          name: "remove",
          description: "Remove a service",
          args: [
            serviceTypeArg,
            {
              name: "SERVICE_NAME",
              description: "Name of the service",
            },
          ],
        },
        {
          name: "rename",
          description: "Rename a service",
          args: [
            serviceTypeArg,
            {
              name: "CURRENT_NAME",
              description: "Current name of the service",
            },
            {
              name: "NEW_NAME",
              description: "New name for the service",
            },
          ],
        },
        {
          name: "update",
          description:
            "Allow users to update attribute values of a particular service",
          args: [
            serviceTypeArg,
            {
              name: "SERVICE_NAME",
              description: "Name of the service",
            },
          ],
          options: [
            {
              name: ["-a", "--attribute"],
              description:
                "Provide values to update the service with directly. Using `--attribute foo bar` will set the 'foo' attribute to a value of 'bar' on the specified service",
              isRepeatable: true,
              args: [
                {
                  name: "ATTRIBUTE",
                  description: "Name of the service attribute",
                },
                {
                  name: "VALUE",
                  description: "New value for the attribute",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "shell",
      description: "Drop into a Python shell",
      options: [shellScriptOption, shellPythonOption],
    },
    {
      name: "task",
      description: "Commands for finding and running tasks for a project",
      subcommands: [
        {
          name: "doc",
          description: "Exports RST format documentation for all tasks",
          options: [
            {
              name: "--project",
              description: "Include project-specific tasks only",
            },
            {
              name: "--write",
              description:
                "If true, write output to a file (./docs/project_tasks.rst or ./docs/cumulusci_tasks.rst)",
            },
          ],
        },
        {
          name: "info",
          description: "Displays information for a task",
          args: {
            name: "TASK_NAME",
            description: "Name of the task",
            generators: taskGenerator,
          },
        },
        {
          name: "list",
          description: "List available tasks for the current context",
          options: [plainOption, jsonOption("Print a json string")],
        },
        {
          name: "run",
          description: "Runs a task",
          args: {
            name: "TASK_NAME",
            description: "Name of the task to run",
            generators: taskGenerator,
          },
          options: [
            taskOrgOption,
            noPromptOption,
            {
              name: "--debug",
              description: "Drops into the Python debugger on an exception",
            },
            {
              name: "--debug-before",
              description:
                "Drops into the Python debugger right before the task starts",
            },
            {
              name: "--debug-after",
              description: "Drops into the Python debugger at task completion",
            },
            {
              name: "-o",
              description:
                "Old-style way to pass a task option as '-o name value' (task options are normally passed as --name value)",
              hidden: true,
              isRepeatable: true,
              args: [
                {
                  name: "NAME",
                  description: "Name of the task option",
                },
                {
                  name: "VALUE",
                  description: "Value for the task option",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "version",
      description: "Print the current version of CumulusCI",
    },
  ],

  options: [
    {
      name: "--help",
      description: "Show this message and exit",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Show the version and exit",
    },
    {
      name: "--debug",
      description:
        "Show the traceback and drop into pdb, the Python debugger, on an exception",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
