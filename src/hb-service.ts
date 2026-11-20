// homebridge-config-ui-x v5.30.1 (GitHub release, 2026-11-13). Source: src/bin/hb-service.ts on upstream main
const completionSpec: Fig.Spec = {
  name: "hb-service",
  description: "The hb-service command is provided by homebridge-config-ui-x",
  subcommands: [
    {
      name: "install",
      description: "Install homebridge as a service",
    },
    {
      name: "uninstall",
      description: "Remove the homebridge service",
    },
    {
      name: "start",
      description: "Start the homebridge service",
    },
    {
      name: "stop",
      description: "Stop the homebridge service",
    },
    {
      name: "restart",
      description: "Restart the homebridge service",
    },
    {
      name: "rebuild",
      description: "Rebuild UI",
      options: [
        {
          name: "--all",
          description: "Rebuild all npm modules (use after updating Node.js)",
        },
      ],
    },
    {
      name: "run",
      description: "Run homebridge daemon",
    },
    {
      name: "logs",
      description: "Tails the homebridge service logs",
    },
    {
      name: "view",
      description: "Views the homebridge service logs for 30 seconds",
    },
    {
      name: "status",
      description: "Check whether the Homebridge UI is running",
    },
    {
      name: "add",
      description: "Install a plugin (Synology and apt package installs only)",
      args: {
        name: "plugin@version",
      },
    },
    {
      name: "remove",
      description: "Remove a plugin (Synology and apt package installs only)",
      args: {
        name: "plugin",
      },
    },
    {
      name: "update-node",
      description: "Update Node.js",
      args: {
        name: "version",
        isOptional: true,
      },
    },
    {
      name: "update-homebridge",
      description: "Update Homebridge apt package",
    },
    {
      name: "before-start",
      description: "Run pre-start checks (called by the service unit)",
      hidden: true,
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Display help for command",
    },
    {
      name: ["--version", "-v"],
      description: "Output the version number",
    },
    {
      name: ["--service-name", "-S"],
      description: "The name of the homebridge service to install or control",
      args: {
        name: "service name",
      },
      isPersistent: true,
    },
    {
      name: "--port",
      description:
        "The port to set to the Homebridge UI when installing as a service",
      args: {
        name: "port",
      },
      isPersistent: true,
    },
    {
      name: "--user",
      description:
        "The user account the Homebridge service will be installed as (Linux, FreeBSD, macOS only)",
      args: {
        name: "user",
      },
      isPersistent: true,
    },
    {
      name: "--group",
      description:
        "The group the Homebridge service will be added to (Linux, FreeBSD, macOS only)",
      args: {
        name: "group",
      },
      isPersistent: true,
    },
    {
      name: ["--plugin-path", "-P"],
      args: {
        name: "path",
      },
      isPersistent: true,
    },
    {
      name: ["--user-storage-path", "-U"],
      args: {
        name: "path",
      },
      isPersistent: true,
    },
    {
      name: ["--no-timestamp", "-T"],
      isPersistent: true,
    },
    {
      name: "--gid",
      args: {
        name: "number",
      },
      isPersistent: true,
    },
    {
      name: "--uid",
      args: {
        name: "number",
      },
      isPersistent: true,
    },
    {
      name: "--docker",
      isPersistent: true,
    },
    {
      name: "--allow-root",
      isPersistent: true,
    },
    {
      name: "--stdout",
      isPersistent: true,
    },
    {
      name: "--strict-plugin-resolution",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
