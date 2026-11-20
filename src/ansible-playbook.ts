// ansible-playbook v2.22.0 (ansible-core latest on PyPI, 2026-11-19). Source: `ansible-playbook --help` of ansible-core 2.22.0 run from a venv, plus ansible/cli/arguments/option_helpers.py for the deprecated --inventory-file alias (removed in 2.23)
import { filepaths } from "@tabsmith/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "ansible-playbook",
  description:
    "Runs Ansible playbooks, executing the defined tasks on the targeted hosts",
  args: {
    name: "playbook",
    description: "Playbook(s)",
    isVariadic: true,
    generators: filepaths({ extensions: ["yml", "yaml"] }),
  },
  options: [
    {
      name: ["--ask-vault-password", "--ask-vault-pass", "-J"],
      description: "Ask for vault password",
      exclusiveOn: ["--vault-password-file", "--vault-pass-file"],
    },
    {
      name: "--flush-cache",
      description: "Clear the fact cache for every host in inventory",
    },
    {
      name: "--force-handlers",
      description: "Run handlers even if a task fails",
    },
    {
      name: "--list-hosts",
      description: "Outputs a list of matching hosts; does not execute",
    },
    {
      name: "--list-tags",
      description: "List all available tags",
    },
    {
      name: "--list-tasks",
      description: "List all tasks that would be executed",
    },
    {
      name: "--skip-tags",
      description:
        "Only run plays and tasks whose tags do not match these values",
      isRepeatable: true,
      args: {
        name: "tags",
      },
    },
    {
      name: "--start-at-task",
      description: "Start the playbook at the task matching this name",
      args: {
        name: "task name",
      },
    },
    {
      name: "--step",
      description: "One-step-at-a-time: confirm each task before running",
    },
    {
      name: "--syntax-check",
      description:
        "Perform a syntax check on the playbook, but do not execute it",
    },
    {
      name: "--vault-id",
      description: "The vault identity to use",
      isRepeatable: true,
      args: {
        name: "vault ID",
      },
    },
    {
      name: ["--vault-password-file", "--vault-pass-file"],
      description: "Vault password file",
      isRepeatable: true,
      exclusiveOn: ["--ask-vault-password", "--ask-vault-pass", "-J"],
      args: {
        name: "vault password file",
        template: ["filepaths"],
      },
    },
    {
      name: "--version",
      description:
        "Show program's version number, config file location, configured module search path, module location, executable location",
    },
    {
      name: ["--check", "-C"],
      description:
        "Don't make any changes; instead, try to predict some of the changes that may occur",
    },
    {
      name: ["--diff", "-D"],
      description:
        "When changing (small) files and templates, show the differences in those files; works great with --check",
    },
    {
      name: ["--module-path", "-M"],
      description: "Prepend colon-separated path(s) to module library",
      isRepeatable: true,
      args: {
        name: "module path",
        template: ["folders"],
      },
    },
    {
      name: ["--extra-vars", "-e"],
      description:
        "Set additional variables as key=value or YAML/JSON, if filename prepend with @",
      isRepeatable: true,
      args: {
        name: "extra vars",
      },
    },
    {
      name: ["--forks", "-f"],
      description: "Specify number of parallel processes to use",
      args: {
        name: "forks",
      },
    },
    {
      name: ["--help", "-h"],
      description: "Show help for ansible-playbook",
    },
    {
      name: ["--inventory", "-i"],
      description: "Specify inventory host path or comma separated host list",
      isRepeatable: true,
      args: {
        name: "inventory",
      },
    },
    {
      name: "--inventory-file",
      description:
        "Deprecated alias of --inventory, removed in 2.23; use -i or --inventory",
      deprecated: true,
      isRepeatable: true,
      args: {
        name: "inventory",
      },
    },
    {
      name: ["--limit", "-l"],
      description: "Limit selected hosts to an additional pattern",
      args: {
        name: "subset",
      },
    },
    {
      name: ["--tags", "-t"],
      description: "Only run plays and tasks tagged with these values",
      isRepeatable: true,
      args: {
        name: "tags",
      },
    },
    {
      name: ["--verbose", "-v"],
      description:
        "Print more debug messages; -vvv is a reasonable level to start, connection debugging might require -vvvv",
      isRepeatable: 6,
    },
    {
      name: "--become-method",
      description: "Privilege escalation method to use (default: sudo)",
      args: {
        name: "become method",
        suggestions: [
          "sudo",
          "su",
          "pbrun",
          "pfexec",
          "doas",
          "dzdo",
          "ksu",
          "runas",
          "machinectl",
        ],
      },
    },
    {
      name: "--become-user",
      description: "Run operations as this user (default: root)",
      args: {
        name: "become user",
      },
    },
    {
      name: ["--ask-become-pass", "-K"],
      description: "Ask for privilege escalation password",
      exclusiveOn: ["--become-password-file", "--become-pass-file"],
    },
    {
      name: ["--become-password-file", "--become-pass-file"],
      description: "Become password file",
      exclusiveOn: ["--ask-become-pass", "-K"],
      args: {
        name: "become password file",
        template: ["filepaths"],
      },
    },
    {
      name: ["--become", "-b"],
      description:
        "Run operations with become (does not imply password prompting)",
    },
    {
      name: ["--private-key", "--key-file"],
      description: "Use this file to authenticate the connection",
      args: {
        name: "private key",
        template: ["filepaths"],
      },
    },
    {
      name: "--scp-extra-args",
      description: "Extra arguments to pass to (only) scp",
      args: {
        name: "SCP extra args",
      },
    },
    {
      name: "--sftp-extra-args",
      description: "Extra arguments to pass to (only) sftp",
      args: {
        name: "SFTP extra args",
      },
    },
    {
      name: "--ssh-extra-args",
      description: "Extra arguments to pass to (only) ssh",
      args: {
        name: "SSH extra args",
      },
    },
    {
      name: "--ssh-common-args",
      description: "Extra arguments to pass to sftp/scp/ssh",
      args: {
        name: "SSH common args",
      },
    },
    {
      name: ["--timeout", "-T"],
      description: "Override the connection timeout in seconds",
      args: {
        name: "timeout",
      },
    },
    {
      name: ["--connection", "-c"],
      description: "Connection type to use (default: ssh)",
      args: {
        name: "connection type",
      },
    },
    {
      name: ["--ask-pass", "-k"],
      description: "Ask for connection password",
      exclusiveOn: ["--connection-password-file", "--conn-pass-file"],
    },
    {
      name: ["--connection-password-file", "--conn-pass-file"],
      description: "Connection password file",
      exclusiveOn: ["--ask-pass", "-k"],
      args: {
        name: "connection password file",
        template: ["filepaths"],
      },
    },
    {
      name: ["--user", "-u"],
      description: "Connect as this user",
      args: {
        name: "remote user",
      },
    },
  ],
};
export default completionSpec;
