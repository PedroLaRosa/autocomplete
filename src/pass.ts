// pass (password-store) v1.7.4 (latest release tag, 2021-06-11; matches Homebrew's formula, 2026-11-19).
// Source: zx2c4/password-store at tag 1.7.4: cmd_usage() and the getopt tables in src/password-store.sh, man/pass.1, src/completion/pass.zsh-completion.
// Upstream master has unreleased commits (to 2026-10, Wayland clipboard / emacs / tests) but no CLI option changes, so they do not affect this spec.
const listPasswords: Fig.Generator = {
  custom: async (_tokens, executeCommand, context) => {
    const { stdout } = await executeCommand({
      command: "grep",
      args: [
        "-r",
        "-l",
        "",
        `${context.environmentVariables["HOME"]}/.password-store`,
        "--exclude-dir=.git",
      ],
    });
    return stdout.split("\n").map((password) => ({
      name: password.split(".password-store/").pop().replace(".gpg", ""),
      icon: "🔐",
    }));
  },
};

const listGpgIds: Fig.Generator = {
  script: ["gpg", "--list-secret-keys", "--with-colons"],
  postProcess: (output) =>
    [
      ...new Set(
        output
          .split("\n")
          .filter((line) => line.startsWith("uid:"))
          .map((line) => line.split(":")[9])
          .filter(Boolean)
      ),
    ].map((name) => ({ name, icon: "🔑" })),
};

const listDirectories: Fig.Generator = {
  custom: async (_tokens, executeCommand, context) => {
    const { stdout } = await executeCommand({
      command: "ls",
      args: [
        "-dR1a",
        `${context.environmentVariables["HOME"]}/.password-store`,
      ],
    });
    return stdout.split("\n").map((dir) => ({
      name: dir.split(".password-store/").pop(),
      icon: "📁",
    }));
  },
};

// "--clip[=line-number]" / "-c[line-number]" and "--qrcode[=line-number]" / "-q[line-number]"
const lineNumberArg: Fig.Arg = {
  name: "line-number",
  description: "The line of the password file to use (default 1)",
  isOptional: true,
};

const showOptions: Fig.Option[] = [
  {
    name: "--clip",
    description:
      "Copy a line of the password to the clipboard instead of printing it",
    requiresSeparator: true,
    args: lineNumberArg,
    exclusiveOn: ["--qrcode", "-q"],
  },
  {
    name: "-c",
    description:
      "Copy a line of the password to the clipboard instead of printing it, e.g. -c2 for line 2",
    exclusiveOn: ["--qrcode", "-q"],
  },
  {
    name: "--qrcode",
    description:
      "Display a QR code of a line of the password instead of printing it",
    requiresSeparator: true,
    args: lineNumberArg,
    exclusiveOn: ["--clip", "-c"],
  },
  {
    name: "-q",
    description:
      "Display a QR code of a line of the password instead of printing it, e.g. -q2 for line 2",
    exclusiveOn: ["--clip", "-c"],
  },
];

const forceDescription = "Silently overwrite new-path if it exists";

const completionSpec: Fig.Spec = {
  name: "pass",
  description:
    "Pass - stores, retrieves, generates, and synchronizes passwords securely",
  args: {
    name: "pass-name",
    description: "The password you want to show",
    generators: listPasswords,
  },
  options: [
    ...showOptions,
    {
      name: "--version",
      description: "Show version information",
    },
    {
      name: "--help",
      description: "Show help for pass",
    },
  ],
  subcommands: [
    {
      name: "init",
      description:
        "Initialize new password storage and use gpg-id for encryption",
      args: {
        name: "gpg-id",
        description:
          "The gpg-id you want to use to encrypt your password store",
        isVariadic: true,
        generators: listGpgIds,
      },
      options: [
        {
          name: ["--path", "-p"],
          description:
            "A specific gpg-id or set of gpg-ids is assigned for that specific sub folder of the password store",
          args: {
            name: "sub-folder",
            template: "folders",
          },
        },
      ],
    },
    {
      name: ["insert", "add"],
      description:
        "Insert a new password into the password store called pass-name",
      args: {
        name: "pass-name",
        description: "The password name",
      },
      options: [
        {
          name: ["--echo", "-e"],
          description:
            "Echo the password back to the console during entry. Otherwise, keyboard echo is disabled and the password is confirmed by asking for it twice",
          exclusiveOn: ["--multiline", "-m"],
        },
        {
          name: ["--multiline", "-m"],
          description:
            "Lines will be read until EOF or Ctrl+D is reached. Otherwise, only a single line from standard in is read",
          exclusiveOn: ["--echo", "-e"],
        },
        {
          name: ["--force", "-f"],
          description: "Don't prompt before overwriting an existing password",
        },
      ],
    },
    {
      name: "git",
      description: "Password store git functions",
      loadSpec: "git",
    },
    {
      name: "version",
      description: "Show version information",
    },
    {
      name: "help",
      description: "Show usage message",
    },
    {
      name: ["cp", "copy"],
      description:
        "Copies the password or directory named old-path to new-path",
      args: [
        {
          name: "old-path",
          description: "The old password name or directory",
          generators: listPasswords,
        },
        {
          name: "new-path",
          description: "The new password name or directory",
        },
      ],
      options: [
        {
          name: ["--force", "-f"],
          description: forceDescription,
        },
      ],
    },
    {
      name: ["mv", "rename"],
      description:
        "Renames the password or directory named old-path to new-path",
      args: [
        {
          name: "old-path",
          description: "The old password name or directory",
          generators: listPasswords,
        },
        {
          name: "new-path",
          description: "The new password name or directory",
        },
      ],
      options: [
        {
          name: ["--force", "-f"],
          description: forceDescription,
        },
      ],
    },
    {
      name: ["rm", "remove", "delete"],
      description:
        "Remove the password named pass-name from the password store",
      args: {
        name: "pass-name",
        description: "The password name",
        generators: listPasswords,
      },
      options: [
        {
          name: ["--recursive", "-r"],
          description: "Delete pass-name recursively if it is a directory",
        },
        {
          name: ["--force", "-f"],
          description: "Do not interactively prompt before removal",
        },
      ],
    },
    {
      name: "generate",
      description:
        "Generate a new password of length pass-length and insert into pass-name",
      args: [
        {
          name: "pass-name",
          description: "The password name",
        },
        {
          name: "pass-length",
          description:
            "The length of the password (PASSWORD_STORE_GENERATED_LENGTH if unspecified)",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["--no-symbols", "-n"],
          description:
            "Do not use any non-alphanumeric characters in the generated password",
        },
        {
          name: ["--clip", "-c"],
          description:
            "Do not print the password but instead copy it to the clipboard",
          exclusiveOn: ["--qrcode", "-q"],
        },
        {
          name: ["--qrcode", "-q"],
          description:
            "Do not print the password but instead display a QR code of it",
          exclusiveOn: ["--clip", "-c"],
        },
        {
          name: ["--in-place", "-i"],
          description:
            "Do not interactively prompt, and only replace the first line of the password file with the new generated password, keeping the remainder of the file intact",
          exclusiveOn: ["--force", "-f"],
        },
        {
          name: ["--force", "-f"],
          description: "Overwrite the existing password without prompting",
          exclusiveOn: ["--in-place", "-i"],
        },
      ],
    },
    {
      name: ["ls", "list"],
      description:
        "List names of passwords inside the tree at subfolder by using the tree",
      args: {
        name: "password sub-directory",
        description: "The password sub directory you want to list",
        isOptional: true,
        generators: listDirectories,
      },
    },
    {
      name: ["find", "search"],
      description:
        "List names of passwords inside the tree that match pass-names",
      args: {
        name: "pass-names",
        description: "The password names you want to search for",
        isVariadic: true,
      },
    },
    {
      name: "show",
      description: "Decrypt and print a password",
      args: {
        name: "pass-name",
        description: "The password you want to show",
        isOptional: true,
        generators: listPasswords,
      },
      options: showOptions,
    },
    {
      name: "edit",
      description:
        "Insert a new password or edit an existing password using the default text editor specified by the environment",
      args: {
        name: "pass-name",
        description: "The password you want to edit",
        generators: listPasswords,
      },
    },
    {
      name: "grep",
      description:
        "Searches inside each decrypted password file for search-string. Grep options can be used",
      loadSpec: "grep",
      args: {
        name: "search-string",
        description: "The string to search for in decrypted password files",
      },
    },
  ],
};
export default completionSpec;
