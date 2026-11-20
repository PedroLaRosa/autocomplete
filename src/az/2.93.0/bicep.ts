const acquirePolicyToken: Fig.Option = {
  name: "--acquire-policy-token",
  description:
    "Acquiring an Azure Policy token automatically for this resource operation",
};

const changeReference: Fig.Option = {
  name: "--change-reference",
  description: "The related change reference ID for this resource operation",
  args: { name: "change-reference" },
};

const completion: Fig.Spec = {
  name: "bicep",
  description: "Bicep CLI command group",
  subcommands: [
    {
      name: "build",
      description: "Build a Bicep file",
      options: [
        {
          name: ["--file", "-f"],
          description: "The path to the Bicep file to build in the file system",
          args: { name: "file" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--no-restore",
          description:
            "When set, builds the bicep file without restoring external modules",
        },
        {
          name: "--outdir",
          description:
            "When set, saves the output file at the specified directory. Only the given file is output; for bicepparam files, the referenced template is not included",
          args: { name: "outdir" },
        },
        {
          name: "--outfile",
          description:
            "When set, saves the output as the specified file path. Only the given file is output; for bicepparam files, the referenced template is not included",
          args: { name: "outfile" },
        },
        {
          name: "--stdout",
          description:
            "When set, prints all output to stdout instead of corresponding files. For bicepparam files that reference a template, both the parameters and the referenced Bicep template are included in the output",
        },
      ],
    },
    {
      name: "build-params",
      description: "Build .bicepparam file",
      options: [
        {
          name: ["--file", "-f"],
          description:
            "The path to the .bicepparam file to build in the file system",
          args: { name: "file" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--no-restore",
          description:
            "When set, builds the .bicepparam file without restoring external modules",
        },
        {
          name: "--outdir",
          description:
            "When set, saves the output file at the specified directory. Only the given file is output; for bicepparam files, the referenced template is not included",
          args: { name: "outdir" },
        },
        {
          name: "--outfile",
          description:
            "When set, saves the output as the specified file path. Only the given file is output; for bicepparam files, the referenced template is not included",
          args: { name: "outfile" },
        },
        {
          name: "--stdout",
          description:
            "When set, prints all output to stdout instead of corresponding files. For bicepparam files that reference a template, both the parameters and the referenced Bicep template are included in the output",
        },
      ],
    },
    {
      name: "decompile",
      description: "Attempt to decompile an ARM template file to a Bicep file",
      options: [
        {
          name: ["--file", "-f"],
          description:
            "The path to the ARM template to decompile in the file system",
          args: { name: "file" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--force",
          description: "Allows overwriting the output file if it exists",
        },
      ],
    },
    {
      name: "decompile-params",
      description: "Decompile a parameters .json file to .bicepparam",
      options: [
        {
          name: ["--file", "-f"],
          description:
            "The path to the parameters file to build in the file system",
          args: { name: "file" },
          isRequired: true,
        },
        acquirePolicyToken,
        {
          name: "--bicep-file",
          description:
            "Path to the bicep template file (relative to the .bicepparam file) that will be referenced in the using declaration",
          args: { name: "bicep-file" },
        },
        changeReference,
        {
          name: "--force",
          description: "Allows overwriting the output file if it exists",
        },
        {
          name: "--outdir",
          description:
            "When set, saves the output file at the specified directory. Only the given file is output; for bicepparam files, the referenced template is not included",
          args: { name: "outdir" },
        },
        {
          name: "--outfile",
          description:
            "When set, saves the output as the specified file path. Only the given file is output; for bicepparam files, the referenced template is not included",
          args: { name: "outfile" },
        },
        {
          name: "--stdout",
          description:
            "When set, prints all output to stdout instead of corresponding files. For bicepparam files that reference a template, both the parameters and the referenced Bicep template are included in the output",
        },
      ],
    },
    {
      name: "format",
      description: "Format a Bicep file",
      options: [
        {
          name: ["--file", "-f"],
          description:
            "The path to the Bicep file to format in the file system",
          args: { name: "file" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--indent-kind",
          description: "Set indentation kind",
          args: { name: "indent-kind", suggestions: ["Space", "Tab"] },
        },
        {
          name: "--indent-size",
          description:
            "Number of spaces to indent with (Only valid with --indent-kind set to Space)",
          args: { name: "indent-size" },
        },
        {
          name: "--insert-final-newline",
          description: "Insert a final newline",
        },
        {
          name: "--newline",
          description:
            "Option '--newline' has been deprecated and will be removed in a future release. Use '--newline-kind' instead. Set newline char. Valid values are ( Auto | LF | CRLF | CR )",
          args: { name: "newline" },
        },
        {
          name: "--newline-kind",
          description: "Set line ending characters",
          args: { name: "newline-kind", suggestions: ["CR", "CRLF", "LF"] },
        },
        {
          name: "--outdir",
          description:
            "When set, saves the output file at the specified directory. Only the given file is output; for bicepparam files, the referenced template is not included",
          args: { name: "outdir" },
        },
        {
          name: "--outfile",
          description:
            "When set, saves the output as the specified file path. Only the given file is output; for bicepparam files, the referenced template is not included",
          args: { name: "outfile" },
        },
        {
          name: "--stdout",
          description:
            "When set, prints all output to stdout instead of corresponding files. For bicepparam files that reference a template, both the parameters and the referenced Bicep template are included in the output",
        },
      ],
    },
    {
      name: "generate-params",
      description: "Generate parameters file for a Bicep file",
      options: [
        {
          name: ["--file", "-f"],
          description:
            "The path to the Bicep file to generate the parameters file from in the file system",
          args: { name: "file" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--include-params",
          description:
            "Set include params. Valid values are ( all | RequiredOnly )",
          args: { name: "include-params" },
        },
        {
          name: "--no-restore",
          description:
            "When set, generates the parameters file without restoring external modules",
        },
        {
          name: "--outdir",
          description:
            "When set, saves the output file at the specified directory. Only the given file is output; for bicepparam files, the referenced template is not included",
          args: { name: "outdir" },
        },
        {
          name: "--outfile",
          description:
            "When set, saves the output as the specified file path. Only the given file is output; for bicepparam files, the referenced template is not included",
          args: { name: "outfile" },
        },
        {
          name: "--output-format",
          description:
            "Set output format. Valid values are ( json | bicepparam )",
          args: { name: "output-format" },
        },
        {
          name: "--stdout",
          description:
            "When set, prints all output to stdout instead of corresponding files. For bicepparam files that reference a template, both the parameters and the referenced Bicep template are included in the output",
        },
      ],
    },
    {
      name: "install",
      description: "Install Bicep CLI",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: ["--target-platform", "-t"],
          description:
            "The platform the Bicep CLI will be running on. Set this to skip automatic platform detection if it does not work properly",
          args: {
            name: "target-platform",
            suggestions: [
              "linux-arm64",
              "linux-musl-x64",
              "linux-x64",
              "osx-arm64",
              "osx-x64",
              "win-arm64",
              "win-x64",
            ],
          },
        },
        {
          name: ["--version", "-v"],
          description:
            "The version of Bicep CLI to be installed. Default to the latest if not specified",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "lint",
      description: "Lint a Bicep file",
      options: [
        {
          name: ["--file", "-f"],
          description:
            "The path to the Bicep module file to lint in the file system",
          args: { name: "file" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--diagnostics-format",
          description: "Set diagnostics format",
          args: {
            name: "diagnostics-format",
            suggestions: ["default", "sarif"],
          },
        },
        {
          name: "--no-restore",
          description:
            "When set, generates the parameters file without restoring external modules",
        },
      ],
    },
    {
      name: "list-versions",
      description: "List out all available versions of Bicep CLI",
      options: [acquirePolicyToken, changeReference],
    },
    {
      name: "publish",
      description: "Publish a bicep file to a remote module registry",
      options: [
        {
          name: ["--file", "-f"],
          description:
            "The path to the Bicep module file to publish in the file system",
          args: { name: "file" },
          isRequired: true,
        },
        {
          name: ["--target", "-t"],
          description:
            "The target location where the Bicep module will be published",
          args: { name: "target" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: ["--documentation-uri", "-d"],
          description: "The documentation uri of the Bicep module",
          args: { name: "documentation-uri" },
        },
        {
          name: "--documentationUri",
          description:
            "Option '--documentationuri' has been deprecated and will be removed in a future release. Use '--documentation-uri' instead. The documentation uri of the Bicep module",
          args: { name: "documentationUri" },
        },
        {
          name: "--force",
          description: "Allow overwriting an existing Bicep module version",
        },
        {
          name: "--with-source",
          description: "Publish source code with the module",
        },
      ],
    },
    {
      name: "restore",
      description: "Restore external modules for a bicep file",
      options: [
        {
          name: ["--file", "-f"],
          description:
            "The path to the Bicep file to restore external modules for",
          args: { name: "file" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--force",
          description: "Allows overwriting the cached external modules",
        },
      ],
    },
    {
      name: "run",
      description: "Forward a raw command to the installed Bicep CLI",
      options: [
        {
          name: ["--command", "-c"],
          description:
            'The Bicep CLI command to run, including its arguments, as a single quoted string (e.g. "build main.bicep")',
          args: { name: "command" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
      ],
    },
    {
      name: "snapshot",
      description:
        "Capture or validate a snapshot of the resources predicted to be deployed by a .bicepparam file",
      options: [
        {
          name: ["--file", "-f"],
          description:
            "The path to the .bicepparam file to capture a snapshot for",
          args: { name: "file" },
          isRequired: true,
        },
        acquirePolicyToken,
        changeReference,
        {
          name: "--deployment-name",
          description:
            "Deployment name forwarded to the Bicep CLI as the deployment context used to resolve existing references when capturing the snapshot",
          args: { name: "deployment-name" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location forwarded to the Bicep CLI as the deployment context used to resolve existing references when capturing the snapshot",
          args: { name: "location" },
        },
        {
          name: "--management-group-id",
          description:
            "Management group ID forwarded to the Bicep CLI as the deployment context used to resolve existing references when capturing the snapshot",
          args: { name: "management-group-id" },
        },
        {
          name: "--mode",
          description:
            "The snapshot mode. 'Overwrite' (default) writes the snapshot file. 'Validate' compares the existing snapshot against the current template and fails if differences are detected",
          args: { name: "mode", suggestions: ["Overwrite", "Validate"] },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Resource group name forwarded to the Bicep CLI as the deployment context used to resolve existing references when capturing the snapshot",
          args: { name: "resource-group" },
        },
        {
          name: "--subscription-id",
          description:
            "Subscription ID forwarded to the Bicep CLI as the deployment context used to resolve existing references when capturing the snapshot. This does not affect Azure CLI authentication; use the global --subscription argument to switch the active subscription",
          args: { name: "subscription-id" },
        },
        {
          name: "--tenant-id",
          description:
            "Tenant ID forwarded to the Bicep CLI as the deployment context used to resolve existing references when capturing the snapshot. This does not affect Azure CLI authentication",
          args: { name: "tenant-id" },
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall Bicep CLI",
      options: [acquirePolicyToken, changeReference],
    },
    {
      name: "upgrade",
      description: "Upgrade Bicep CLI to the latest version",
      options: [
        acquirePolicyToken,
        changeReference,
        {
          name: ["--target-platform", "-t"],
          description:
            "The platform the Bicep CLI will be running on. Set this to skip automatic platform detection if it does not work properly",
          args: {
            name: "target-platform",
            suggestions: [
              "linux-arm64",
              "linux-musl-x64",
              "linux-x64",
              "osx-arm64",
              "osx-x64",
              "win-arm64",
              "win-x64",
            ],
          },
        },
      ],
    },
    {
      name: "version",
      description: "Show the installed version of Bicep CLI",
      options: [acquirePolicyToken, changeReference],
    },
  ],
};

export default completion;
