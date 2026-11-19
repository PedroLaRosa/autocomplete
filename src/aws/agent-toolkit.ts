const completionSpec: Fig.Spec = {
  name: "agent-toolkit",
  description:
    "The Agent Toolkit for AWS gives AI coding agents the tools, knowledge, and guardrails they need to build, deploy, and manage applications on AWS. It works with the coding agents that developers already use — including Claude Code, Cursor, and Codex — without requiring you to switch tools or learn a new workflow. In the AWS CLI, the Agent Toolkit for AWS provides commands to set up AI coding agents with the AWS MCP and to manage installed AWS skills from the command line. It works with any AI coding agent that the Agent Toolkit detects on your system — including Kiro, Cursor, and Claude Code — and is the recommended setup path when you want to install AWS skills and configure the AWS MCP Server in a single step",
  subcommands: [
    {
      name: "search-skills",
      description: "Searches the remote catalog for skills matching a query",
      options: [
        {
          name: "--max-results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-query",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-skill-metadata",
      description:
        "Retrieves metadata for a skill, including its version, description, categories, and file list. Use --skill-version to get the metadata for a specific version of the skill",
      options: [
        {
          name: "--skill-version",
          args: {
            name: "string",
          },
        },
        {
          name: "--skill-name",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-available-skills",
      description:
        "Lists skills available in the remote catalog. Use --category-filter to filter by a single category",
      options: [
        {
          name: "--category-filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-skill-file",
      description:
        "Retrieve the contents of a single file from a skill. Use ``aws agent-toolkit get-skill-metadata`` to discover available file names for each skill. By default the latest version is retrieved, use ``--skill-version`` for a specific skill version",
      options: [
        {
          name: "--skill-name",
          description: "The name of the skill",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-path",
          description:
            "The file to fetch (such as SKILL.md, references/architecture.md)",
          args: {
            name: "string",
            template: "filepaths",
          },
        },
        {
          name: "--skill-version",
          description:
            "Skill version to retrieve (such as ``v1``). Defaults to latest",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "add-skill",
      description:
        "Download and install an AWS skill to detected AI coding agents. By default the latest version is installed globally to all detected agents. Use ``--agent`` to target a specific tool, or ``--skill-version`` to pin a specific version",
      options: [
        {
          name: "--skill-name",
          description: "The name of the skill",
          args: {
            name: "string",
          },
        },
        {
          name: "--skill-version",
          description:
            "Skill version to retrieve (such as ``v1``). Defaults to latest",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "list-installed-skills",
      description:
        "List AWS skills that were previously installed by the ``aws agent-toolkit`` commands. Shows the skill name, agent, and file path for each installation. By default it lists skills from all detected agents, use ``--agent`` to filter results to a specific tool",
      options: [
        {
          name: "--agent",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "remove-skill",
      description:
        "Remove a previously installed AWS skill from detected agents. By default the skill is removed from all detected agents, use ``--agent`` to remove from a specific tool only",
      options: [
        {
          name: "--skill-name",
          description: "The name of the skill",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "update-skill",
      description:
        "Update installed AWS skills to the latest version. Compares the locally installed version against the available skills and downloads the newer version if available. Pass ``--skill-name`` to update a single skill or ``--all`` to update every installed skill that is out of date. By default skills are updated for all detected agents, use ``--agent`` to update for only a specific tool",
      options: [
        {
          name: "--skill-name",
          description: "The name of the skill",
          args: {
            name: "string",
          },
        },
        {
          name: "--all",
          description:
            "Update every installed AWS skill that is out of date. Cannot be combined with ``--skill-name``",
        },
        {
          name: "--agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--hook",
          description:
            "Run as an agent's session start hook: update all skills and install new core skills, at most once a day, only when automatic skill updates are turned on. The output is formatted for the agent given with ``--agent``",
        },
      ],
    },
    {
      name: "check-skill-updates",
      description:
        "Check installed AWS skills for available updates. Lists the version currently on disk alongside the latest version available. Only skills with an update available are listed, pass ``--all`` to list every installed skill. Nothing is downloaded or modified, run ``aws agent-toolkit update-skill`` to apply an update. By default it checks skills for all detected agents, use ``--agent`` to check only a specific tool",
      options: [
        {
          name: "--all",
          description:
            "Include skills that are already up to date. By default only skills with an update available are listed",
        },
        {
          name: "--agent",
          args: {
            name: "string",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
