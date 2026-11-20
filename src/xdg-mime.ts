// xdg-mime v1.2.1 (latest upstream release, tag v1.2.1 of xdg-utils, 2024-02-06; confirmed against nixpkgs master; 2026-11-19).
// Source: xdg-utils 1.2.1 release tarball read statically (scripts/xdg-mime.in, scripts/desc/xdg-mime.xml,
// scripts/xdg-utils-common.in); the script was not executed.
const completionSpec: Fig.Spec = {
  name: "xdg-mime",
  description:
    "Command line tool for querying information about file type handling and adding descriptions for new file types",
  subcommands: [
    {
      name: "query",
      description: "Return information related to file types",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "filetype",
          description: "Return the MIME type of a file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "default",
          description:
            "Return the default application (.desktop file) used to open files of a MIME type",
          args: {
            name: "mimetype",
          },
        },
      ],
    },
    {
      name: "default",
      description:
        "Ask the desktop environment to make an application the default for opening files of the given MIME types",
      args: [
        {
          name: "application",
          description:
            "Desktop file id of the application (vendor-name.desktop)",
        },
        {
          name: "mimetype",
          description: "MIME type(s) to associate with the application",
          isVariadic: true,
        },
      ],
    },
    {
      name: "install",
      description:
        "Add the file type descriptions provided in mimetypes-file to the desktop environment",
      options: [
        {
          name: "--mode",
          description:
            "Install for the current user or for all users (default: system when run by root, otherwise user)",
          args: {
            name: "mode",
            suggestions: ["user", "system"],
          },
        },
        {
          name: "--novendor",
          description:
            "Disable the check that mimetypes-file has a proper vendor prefix",
        },
      ],
      args: {
        name: "mimetypes-file",
        description: "Shared MIME-info XML file",
        template: "filepaths",
      },
    },
    {
      name: "uninstall",
      description:
        "Remove the file type descriptions in mimetypes-file previously added with xdg-mime install",
      options: [
        {
          name: "--mode",
          description:
            "Uninstall for the current user or for all users (default: system when run by root, otherwise user)",
          args: {
            name: "mode",
            suggestions: ["user", "system"],
          },
        },
      ],
      args: {
        name: "mimetypes-file",
        description: "Shared MIME-info XML file",
        template: "filepaths",
      },
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show command synopsis",
      isPersistent: true,
    },
    {
      name: "--manual",
      description: "Show manual page",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Show the xdg-utils version information",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
