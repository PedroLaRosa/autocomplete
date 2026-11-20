// Snaplet CLI v0.93.3 (GitHub tag snaplet/snapshot v0.93.3; npm @snaplet/snapshot latest is 0.93.2; checked 2026-11-20).
// Source: yargs command definitions read statically from the open-source snaplet/snapshot repo at v0.93.3 (cli/src/commands/**), cross-checked against
// the published npm tarballs @snaplet/snapshot@0.93.2 and snaplet@0.92.1 (sourcemaps), not run (binaries were not executed).
// Snaplet Cloud shut down in 2024 and the closed-source snaplet CLI ended at 0.92.1 (npm "snaplet" is now a deprecated stub); the cloud-only
// commands (auth, project, team, preview-database, dev, snapshot create/share, config list/pull/push, fingerprint) are gone in 0.93.x and removed here.
// Differences between v0.93.3 and npm 0.93.2: only snapshot restore --truncate (tag only). Hidden commands (debug) are intentionally omitted.
// The data seeding CLI moved to @snaplet/seed (binary snaplet-seed) and is not covered by this spec.

type Snapshot = {
  name: string;
  status: string;
  created: string;
  size: string;
  tags: string;
  src: "CLOUD" | "LOCAL" | "UNKNOWN";
};

function parseSnapshotList(output: string): Snapshot[] {
  const result: Snapshot[] = [];
  const lines = output
    // Remove all terminal escaping sequence
    .replace(/\u001b\[[0-9;]*[A-Za-z]/g, "")
    .split("\n");
  // The table header is the first line starting with NAME
  const headerIndex = lines.findIndex((line) =>
    line.trimStart().startsWith("NAME")
  );
  if (headerIndex === -1) {
    return result;
  }
  for (const line of lines.slice(headerIndex + 1)) {
    // A blank line precedes the "Found N snapshots" footer
    if (line.trim() === "") {
      break;
    }
    // Columns are separated by at least 2 spaces, the tags column is empty when a snapshot has no tags
    const columns = line.trim().split(/\s{2,}/);
    if (columns.length < 5) {
      continue;
    }
    const src = columns[columns.length - 1];
    result.push({
      name: columns[0],
      status: columns[1],
      created: columns[2],
      size: columns[3],
      tags: columns.length > 5 ? columns[4] : "",
      src: src.includes("☁️")
        ? "CLOUD"
        : src.includes("💻")
          ? "LOCAL"
          : "UNKNOWN",
    });
  }
  return result;
}

const snapshotsGenerator: Fig.Generator = {
  script: ["snaplet", "snapshot", "ls"],
  postProcess: (output) => {
    const result: Fig.Suggestion[] = [];
    for (const snapshot of parseSnapshotList(output)) {
      const statusEmoji = snapshot.status === "SUCCESS" ? "✅" : "❌";
      const locationEmoji =
        snapshot.src === "CLOUD"
          ? "☁️"
          : snapshot.src === "LOCAL"
            ? "💻"
            : "❔";
      const tags = snapshot.tags ? ` [${snapshot.tags}]` : "";
      result.push({
        name: snapshot.name,
        description: `${statusEmoji} ${snapshot.created} ${snapshot.size} ${locationEmoji}${tags}`,
      });
    }
    return result;
  },
};

const persistentOptions: Fig.Option[] = [
  {
    name: ["--help", "-h"],
    description: "Show help for snaplet",
    isPersistent: true,
  },
  {
    name: ["--version", "-v"],
    description: "Show version number",
    isPersistent: true,
  },
];

const configCommand: Fig.Subcommand = {
  name: "config",
  description: "Manage configuration",
  subcommands: [
    {
      name: "generate",
      description: "Generate configuration files",
      options: [
        {
          name: "--dry-run",
          description: "Do not write any file",
        },
        {
          name: ["--type", "-t"],
          description: "Kind of configuration file to generate",
          isRepeatable: true,
          args: {
            name: "type",
            suggestions: ["typedefs", "transform", "keys"],
            default: "typedefs",
          },
        },
        {
          name: "--connection-string",
          description:
            "The connection string to use for introspecting the database",
          args: { name: "connection-string" },
        },
      ],
    },
  ],
};

const snapshotTagsOption: Fig.Option = {
  name: "--tags",
  description: "Filter snapshots by tags",
  args: { name: "tags-list", description: "Tag1,tag2,tag3" },
};

const snapshotLatestOption: Fig.Option = {
  name: "--latest",
  description: "Use the most recent snapshot",
};

const snapshotCommand: Fig.Subcommand = {
  name: ["snapshot", "ss"],
  description: "Manage snapshots",
  subcommands: [
    {
      name: ["capture", "c"],
      description: "Capture a new snapshot",
      args: {
        name: "destination-path",
        isOptional: true,
        template: "folders",
      },
      options: [
        {
          name: ["-m", "--message"],
          description: "Attach a message to the snapshot",
          args: {
            name: "message",
          },
        },
        {
          name: ["--subset-path", "--subset"],
          description: "Path to a subset config file",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          ...snapshotTagsOption,
          description: "Attach tags to the snapshot",
        },
        {
          name: ["-t", "--transform-mode"],
          description: "Transformation mode to apply to the snapshot",
          args: {
            name: "transformation-mode",
            suggestions: ["strict", "unsafe", "auto"],
          },
        },
      ],
    },
    {
      name: ["list", "ls"],
      description: "List all snapshots",
      options: [
        snapshotTagsOption,
        {
          ...snapshotLatestOption,
          description: "Show the most recent snapshot",
        },
        {
          name: "--name-only",
          description: "Show only the snapshot names",
        },
      ],
    },
    {
      name: ["restore", "r"],
      description: "Restore a snapshot",
      args: {
        name: "snapshot-name|snapshot-path",
        description: "The unique name or path of the snapshot",
        isOptional: true,
        generators: snapshotsGenerator,
        template: "folders",
      },
      options: [
        {
          name: "--data",
          description: "Restore data on the database",
        },
        {
          name: "--no-data",
          description: "Skip restoring data on the database",
        },
        {
          name: "--schema",
          description: "Restore schema on the database",
        },
        {
          name: "--no-schema",
          description: "Skip restoring schema on the database",
        },
        {
          name: "--progress",
          description: "Report the restore progress into the terminal",
        },
        {
          name: "--no-progress",
          description: "Silence the restore progress report",
        },
        {
          name: "--reset",
          description: "Drop destination database before restoring schemas",
        },
        {
          name: "--no-reset",
          description:
            "Do not drop the destination database before restoring schemas",
        },
        {
          name: "--truncate",
          description: "Truncate tables before importing data",
        },
        {
          name: "--no-truncate",
          description: "Do not truncate tables before importing data",
        },
        {
          name: "--tables",
          description:
            "Restore only the specified tables to the target database",
          args: { name: "tables", description: "Table1,table2,table3" },
        },
        {
          name: "--exclude-tables",
          description:
            "Exclude the specified tables from being restored to the target database",
          args: { name: "tables", description: "Table1,table2,table3" },
        },
        snapshotTagsOption,
        {
          ...snapshotLatestOption,
          description: "Restore the latest snapshot",
        },
        {
          name: ["-y", "--yes"],
          description: "Performs a restore without a confirmation message",
        },
      ],
    },
    {
      name: "update",
      description: "Update metadata of a snapshot",
      args: {
        name: "snapshot-name",
        description: "The unique name of the snapshot",
        generators: snapshotsGenerator,
      },
    },
  ],
};

const completionSpec: Fig.Spec = {
  name: "snaplet",
  description:
    "Capture, subset, transform and restore PostgreSQL snapshots (see: https://docs.snaplet.dev)",
  subcommands: [
    configCommand,
    {
      name: ["discord", "chat"],
      description: "Open the Snaplet Discord chat window in your browser",
    },
    {
      name: ["documentation", "docs"],
      description: "Opens the Snaplet Documentation in your browser",
    },
    {
      name: "setup",
      description: "Initialize or connect an existing Snaplet project",
    },
    snapshotCommand,
    {
      name: "upgrade",
      description: "Upgrade this binary",
    },
    {
      name: "completion",
      description: "Generate completion script",
    },
  ],
  options: persistentOptions,
};

export default completionSpec;
